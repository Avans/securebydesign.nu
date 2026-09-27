import test from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadLessons, splitLesson, attachments } from './content.mjs'

const root = fileURLToPath(new URL('../../', import.meta.url))

test('slide boundaries preserve code fences and speaker comments, with source lines', () => {
  const source = '---\nmarp: true\n---\n\n# First\n<!-- note\n---\nprivate -->\n\n```text\n---\n```\n\n---\n\n## Second\n<!-- review:teacher-only -->\nAnswer';
  const sections = splitLesson(source)
  assert.equal(sections.length, 2)
  assert.equal(sections[0].line, 5)
  assert.equal(sections[0].notes[0], 'note\n---\nprivate')
  assert.ok(sections[0].text.includes('```text\n---\n```'))
  assert.equal(sections[1].teacherOnly, true)
  assert.equal(sections[1].line, 16)
  assert.throws(() => splitLesson('# Slide\n<!-- unfinished'), /Onvolledig/)
})

test('real content includes 18 lessons and 3 explicit student attachments, without notes', async () => {
  const publicItems = await loadLessons(root)
  const privateItems = await loadLessons(root, { privateData: true })
  assert.equal(publicItems.filter(i => i.kind === 'lesson').length, 18)
  assert.equal(publicItems.filter(i => i.kind === 'attachment').length, 3)
  const output = JSON.stringify(publicItems)
  const publicHtml = publicItems.flatMap(item => item.sections.map(s => s.html)).join('\n')
  for (const privateItem of privateItems) {
    for (const section of privateItem.sections) {
      assert.ok(section.line > 0)
      if (section.notes.length > 40) assert.ok(!publicHtml.includes(section.notes), `Note leaked: ${privateItem.id}/${section.id}`)
    }
  }
  assert.ok(!output.includes('Docentchecklist vóór'))
  assert.ok(!output.includes('docenthandleiding-week3.md'))
  assert.ok(!output.includes('draft_inprogress'))
  assert.ok(!output.includes('sourceHash'))
  assert.ok(!output.includes('"notes"'))
  const lesson = publicItems.find(i => i.id === 'week-3/blok-7')
  assert.ok(lesson.sections.some(s => s.html.includes('href="/ontwikkeling/lessen/week-3/incident-naaste"')))
})

test('teacher-only sections never enter public data; HTML is escaped and links mapped', async () => {
  const dir = await mkdtemp(path.join(tmpdir(), 'lesson-content-'))
  try {
    for (const week of [1, 2, 3, 4]) await mkdir(path.join(dir, `lesmateriaal/week${week}`), { recursive: true })
    for (const [file] of attachments) await writeFile(path.join(dir, 'lesmateriaal/week3', file), '# Student worksheet')
    await writeFile(path.join(dir, 'lesmateriaal/week1/w1b1-example.md'), `---\nmarp: true\ntitle: "W1 · blok 1 — Example"\n---\n# Student\n<script>alert(1)</script>\n\n[Teacher](../../.data/secret.md)\n\n[Site](https://securebydesign.nu/fundament)\n\n<!-- PRIVATE_NOTE_MARKER -->\n\n---\n## Answers\n<!-- review:teacher-only -->\nSECRET_TEACHER_ANSWER\n`)
    const items = await loadLessons(dir)
    const json = JSON.stringify(items)
    assert.ok(!json.includes('SECRET_TEACHER_ANSWER'))
    assert.ok(!json.includes('PRIVATE_NOTE_MARKER'))
    assert.ok(!json.includes('.data/secret'))
    assert.ok(!json.includes('<script>'))
    assert.equal(items[0].sections.length, 1)
    assert.ok(items[0].sections[0].html.includes('href="/fundament"'))
    const privateItems = await loadLessons(dir, { privateData: true })
    assert.ok(privateItems[0].sections.some(s => s.html.includes('SECRET_TEACHER_ANSWER')))
  } finally { await rm(dir, { recursive: true, force: true }) }
})

test('draft reader skips symlinks and keeps relative links within the Markdown catalogue', async () => {
  const { draftFiles, renderDraft } = await import('./workspace-api.mjs')
  const { symlink } = await import('node:fs/promises')
  const dir = await mkdtemp(path.join(tmpdir(), 'development-drafts-'))
  try {
    await mkdir(path.join(dir, 'draft_inprogress/example'), { recursive: true })
    await writeFile(path.join(dir, 'draft_inprogress/example/00-proposal.md'), '# Example')
    await symlink(path.join(dir, 'draft_inprogress/example'), path.join(dir, 'draft_inprogress/linked'))
    const files = await draftFiles(dir)
    assert.deepEqual(files, ['example/00-proposal.md'])
    const html = renderDraft('[Folder](example/)\n\n[Private](../../secret.md)\n\n<script>bad()</script>', 'README.md', files)
    assert.ok(html.includes('/ontwikkeling/concepten?bestand=example%2F00-proposal.md'))
    assert.ok(!html.includes('href="../../secret.md"'))
    assert.ok(!html.includes('<script>'))
  } finally { await rm(dir, { recursive: true, force: true }) }
})

test('dashboard excludes completed actions and reviews, reopens changed sources and sorts drafts', async () => {
  const { dashboardData } = await import('./workspace-api.mjs')
  const { utimes } = await import('node:fs/promises')
  const dir = await mkdtemp(path.join(tmpdir(), 'development-dashboard-'))
  try {
    for (const folder of ['draft_inprogress', '.data/lesreviews', ...[1, 2, 3, 4].map(n => `lesmateriaal/week${n}`)]) await mkdir(path.join(dir, folder), { recursive: true })
    for (const [file] of attachments) await writeFile(path.join(dir, 'lesmateriaal/week3', file), '# Worksheet')
    await writeFile(path.join(dir, 'ACTIES.md'), '# Actions\n- [x] Done\n- [X] Also done\n- [ ] Open\n```md\n- [ ] Example\n```\n')
    await writeFile(path.join(dir, 'lesmateriaal/week1/w1b1-example.md'), '# Lesson')
    for (const file of ['README.md', 'old.md', 'new.md']) await writeFile(path.join(dir, 'draft_inprogress', file), '# ' + file)
    await utimes(path.join(dir, 'draft_inprogress/old.md'), new Date('2020-01-01'), new Date('2020-01-01'))
    const lesson = (await loadLessons(dir, { privateData: true })).find(item => item.kind === 'lesson')
    const reviewFile = path.join(dir, '.data/lesreviews/week-1-blok-1.json')
    await writeFile(reviewFile, JSON.stringify({ status: 'reviewed', sourceHash: lesson.sourceHash }))
    let result = await dashboardData(dir)
    assert.deepEqual(result.actions, [{ text: 'Open' }])
    assert.deepEqual(result.drafts.map(d => d.file), ['new.md', 'old.md'])
    assert.ok(!result.reviews.some(r => r.id === lesson.id))
    await writeFile(reviewFile, JSON.stringify({ status: 'reviewed', sourceHash: 'old-source' }))
    result = await dashboardData(dir)
    assert.equal(result.reviews.find(r => r.id === lesson.id).status, 'stale')
    await writeFile(reviewFile, JSON.stringify({ status: 'changes', sourceHash: lesson.sourceHash }))
    assert.equal((await dashboardData(dir)).reviews.find(r => r.id === lesson.id).status, 'changes')
  } finally { await rm(dir, { recursive: true, force: true }) }
})

test('additional lesson files only include regular Markdown in the four week folders', async () => {
  const { lessonFiles, renderDraft } = await import('./workspace-api.mjs')
  const { symlink } = await import('node:fs/promises')
  const dir = await mkdtemp(path.join(tmpdir(), 'lesson-files-'))
  try {
    await mkdir(path.join(dir, 'lesmateriaal/week3'), { recursive: true })
    await writeFile(path.join(dir, 'lesmateriaal/week3/docenthandleiding.md'), '# Teacher')
    await writeFile(path.join(dir, 'lesmateriaal/week3/README.md'), '# Overview')
    await writeFile(path.join(dir, 'lesmateriaal/week3/ignored.pdf'), 'pdf')
    await symlink(path.join(dir, 'lesmateriaal/week3/README.md'), path.join(dir, 'lesmateriaal/week3/link.md'))
    const files = await lessonFiles(dir)
    assert.deepEqual(files, ['week3/README.md', 'week3/docenthandleiding.md'])
    const html = renderDraft('[Teacher](docenthandleiding.md) [Secret](../../.env)', 'week3/README.md', files, '/ontwikkeling/bestanden')
    assert.ok(html.includes('/ontwikkeling/bestanden?bestand=week3%2Fdocenthandleiding.md'))
    assert.ok(!html.includes('href="../../.env"'))
  } finally { await rm(dir, { recursive: true, force: true }) }
})

test('week overview only reads selected documents and rejects symlinks and traversal', async () => {
  const { weekOverviewData } = await import('./workspace-api.mjs')
  const { symlink, rename } = await import('node:fs/promises')
  const dir = await mkdtemp(path.join(tmpdir(), 'week-overview-'))
  try {
    await mkdir(path.join(dir, 'lesmateriaal'))
    await writeFile(path.join(dir, 'lesmateriaal/weekopbouw-gewenst.md'), '# Desired\n[Current](weekopbouw-huidige-stand.md)\n[Private](../.env)\n<script>bad()</script>')
    await writeFile(path.join(dir, 'lesmateriaal/weekopbouw-huidige-stand.md'), '# Current')
    await writeFile(path.join(dir, 'lesmateriaal/opf-v0.2-leesbaar.md'), '# OPF\n[Impact](opf-impact-weekopbouw-mark.md)')
    await writeFile(path.join(dir, 'lesmateriaal/opf-impact-weekopbouw-mark.md'), '# Impact\n[OPF](opf-v0.2-leesbaar.md)')
    const result = await weekOverviewData(dir)
    assert.equal(result.file, 'weekopbouw-gewenst.md')
    assert.ok(result.html.includes('/ontwikkeling/weekoverzicht?bestand=weekopbouw-huidige-stand.md'))
    assert.ok(!result.html.includes('href="../.env"'))
    assert.ok(!result.html.includes('<script>'))
    assert.ok((await weekOverviewData(dir, 'weekopbouw-huidige-stand.md')).html.includes('Current'))
    assert.ok((await weekOverviewData(dir, 'opf-v0.2-leesbaar.md')).html.includes('/ontwikkeling/weekoverzicht?bestand=opf-impact-weekopbouw-mark.md'))
    assert.ok((await weekOverviewData(dir, 'opf-impact-weekopbouw-mark.md', 'en')).html.includes('/en/ontwikkeling/weekoverzicht?bestand=opf-v0.2-leesbaar.md'))
    assert.ok((await weekOverviewData(dir, undefined, 'en')).html.includes('/en/ontwikkeling/weekoverzicht?bestand='))
    for (const file of ['../.env', 'week1/README.md', '/etc/passwd', ['weekopbouw-gewenst.md']]) {
      await assert.rejects(weekOverviewData(dir, file), { statusCode: 404 })
    }
    await rm(path.join(dir, 'lesmateriaal/weekopbouw-gewenst.md'))
    await symlink(path.join(dir, 'lesmateriaal/weekopbouw-huidige-stand.md'), path.join(dir, 'lesmateriaal/weekopbouw-gewenst.md'))
    await assert.rejects(weekOverviewData(dir), { statusCode: 404 })
    await rename(path.join(dir, 'lesmateriaal'), path.join(dir, 'linked-materials'))
    await symlink(path.join(dir, 'linked-materials'), path.join(dir, 'lesmateriaal'))
    await assert.rejects(weekOverviewData(dir, 'weekopbouw-huidige-stand.md'), { statusCode: 404 })
  } finally { await rm(dir, { recursive: true, force: true }) }
})

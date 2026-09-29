import { readFile, readdir } from 'node:fs/promises'
import path from 'node:path'
import { createHash } from 'node:crypto'
import MarkdownIt from 'markdown-it'

const parser = new MarkdownIt({ html: true })
const renderer = new MarkdownIt({ html: false, linkify: true, typographer: false })
export const attachments = [
  ['werkbladen-week3.md', 'werkbladen', 'Werkbladen week 3'],
  ['casus-naaste-week3.md', 'casus-naaste', 'Naaste · casus en oefenafspraken'],
  ['incident-naaste-student.md', 'incident-naaste', 'Naaste · incidentoefening'],
]
export const digest = value => createHash('sha256').update(value).digest('hex')

// Use Markdown tokens to recognise slide separators: --- inside a code block or
// a speaker note is not a new slide. Keep line numbers for local source review.
export function splitLesson(source) {
  if ((source.match(/<!--/g) || []).length !== (source.match(/-->/g) || []).length) {
    throw new Error('Onvolledig HTML-commentaar: sluit docentnotities af vóór publicatie.')
  }
  const front = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/)
  const body = front ? source.slice(front[0].length) : source
  const offset = front ? front[0].split('\n').length - 1 : 0
  const lines = body.split('\n')
  const breaks = parser.parse(body, {}).filter(t => t.type === 'hr' && t.level === 0).map(t => t.map[0])
  const starts = [0, ...breaks.map(n => n + 1)]
  const ends = [...breaks, lines.length]
  return starts.map((start, i) => {
    const raw = lines.slice(start, ends[i]).join('\n')
    const notes = [...raw.matchAll(/<!--([\s\S]*?)-->/g)].map(m => m[1].trim()).filter(n => n && n !== 'review:teacher-only')
    const text = raw.replace(/<!--[\s\S]*?-->/g, '').trim()
    const firstTextLine = lines.slice(start, ends[i]).findIndex(l => l.trim())
    const title = text.match(/^#{1,6}\s+(.+)$/m)?.[1]?.replace(/[*_`]/g, '') || `Onderdeel ${i + 1}`
    return { id: `deel-${i + 1}`, title, text, notes, line: offset + start + Math.max(firstTextLine, 0) + 1,
      teacherOnly: raw.includes('<!-- review:teacher-only -->') || /^docent\b/i.test(title) }
  }).filter(s => s.text || s.notes.length)
}

function metadata(source, key) {
  return source.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, 'm'))?.[1] || ''
}

export async function loadLessons(root, { privateData = false } = {}) {
  const sources = []
  for (const week of [1, 2, 3, 4]) {
    const dir = path.join(root, 'lesmateriaal', `week${week}`)
    for (const name of (await readdir(dir)).sort()) {
      // Separate exercises and answer keys are source material, not standalone lessons.
      if (/-(ex|opl)\.md$/i.test(name)) continue
      const match = name.match(/^w(\d)b(\d+)(?:-.+)?\.md$/)
      if (match && Number(match[1]) === week) sources.push({ file: `lesmateriaal/week${week}/${name}`, week, block: Number(match[2]), id: `week-${week}/blok-${match[2]}`, kind: 'lesson' })
    }
  }
  for (const [file, slug, title] of attachments) {
    sources.push({ file: `lesmateriaal/week3/${file}`, week: 3, id: `week-3/${slug}`, title, kind: 'attachment' })
  }
  const allowed = new Map(sources.map(s => [path.resolve(root, s.file), `/ontwikkeling/lessen/${s.id}`]))
  const resolveLink = (href, source) => {
    if (/^https?:\/\//i.test(href)) {
      const url = new URL(href)
      return ['securebydesign.nu', 'www.securebydesign.nu'].includes(url.hostname) ? `${url.pathname}${url.search}${url.hash}` : href
    }
    if (/^(mailto:|#)/i.test(href)) return href
    if (/^[a-z][a-z\d+.-]*:/i.test(href) || href.startsWith('//')) return null
    const [file, hash] = href.split('#')
    const abs = path.resolve(root, path.dirname(source), file)
    if (allowed.has(abs)) return allowed.get(abs) // Markdown heading anchors are not site section ids.
    const rel = path.relative(root, abs).replaceAll(path.sep, '/')
    if (rel === 'app/content/fundament.nl.ts') return '/fundament'
    if (rel.startsWith('public/materiaal/')) return `/${rel.slice(7)}${hash ? '#' + hash : ''}`
    return null
  }
  function render(text, source) {
    // References to unpublished teacher resources are left out of public reading.
    const cleaned = text.split('\n').filter(line => !/^\s*[-*]\s/.test(line) || !/\]\([^)]*(?:docenthandleiding|draft_inprogress)[^)]*\)/.test(line)).join('\n')
    const tokens = renderer.parse(cleaned, {})
    const headingBase = Math.min(...tokens.filter(t => t.type === 'heading_open').map(t => Number(t.tag.slice(1))))
    for (const token of tokens) {
      if (token.type === 'heading_open' || token.type === 'heading_close') {
        token.tag = `h${Math.min(6, Number(token.tag.slice(1)) - headingBase + 2)}`
      }
      let suppressed = false
      for (const child of token.children || []) {
        if (child.type === 'link_open') {
          const href = resolveLink(child.attrGet('href'), source)
          suppressed = !href
          if (href) child.attrSet('href', href)
          else { child.tag = 'span'; child.attrs = [['class', 'unavailable-link']] }
        } else if (child.type === 'link_close' && suppressed) { child.tag = 'span'; suppressed = false }
        else if (child.type === 'image') {
          const href = resolveLink(child.attrGet('src'), source)
          if (href) child.attrSet('src', href)
          else { child.type = 'text'; child.content = child.content || 'Afbeelding via docent'; child.children = null }
        }
      }
    }
    return renderer.renderer.render(tokens, renderer.options, {})
      .replaceAll('<table>', '<div class="table-scroll" tabindex="0" role="region" aria-label="Tabel"><table>')
      .replaceAll('</table>', '</table></div>')
  }
  const items = []
  for (const entry of sources) {
    const source = await readFile(path.join(root, entry.file), 'utf8')
    const sections = splitLesson(source)
    const title = entry.title || metadata(source, 'title').replace(/^W\d\s*·\s*blok\s*\d+\s*[—–-]\s*/, '') || sections[0]?.title
    const item = { id: entry.id, week: entry.week, block: entry.block, kind: entry.kind, title,
      description: metadata(source, 'description'), sections: sections.filter(s => privateData || !s.teacherOnly).map(s => ({
        id: s.id, title: s.title, html: render(s.text, entry.file),
        ...(privateData ? { notes: s.notes.join('\n\n'), line: s.line, teacherOnly: s.teacherOnly } : {}),
      })) }
    if (privateData) Object.assign(item, { file: entry.file, sourceHash: digest(source) })
    items.push(item)
  }
  return items.sort((a, b) => a.week - b.week || (a.block || 99) - (b.block || 99))
}

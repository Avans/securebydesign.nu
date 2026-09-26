import { eventHandler, getHeader, getQuery, readBody, createError, setHeader } from 'h3'
import { readFile, readdir, writeFile, rename, stat } from 'node:fs/promises'
import path from 'node:path'
import MarkdownIt from 'markdown-it'
import { digest, loadLessons } from './content.mjs'

// Only regular Markdown files in the draft directory are selectable; never follow symlinks.
export async function draftFiles(root, folder = '') {
  const entries = await readdir(path.join(root, 'draft_inprogress', folder), { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const name = path.posix.join(folder, entry.name)
    if (entry.isDirectory()) files.push(...await draftFiles(root, name))
    else if (entry.isFile() && entry.name.endsWith('.md')) files.push(name)
  }
  return files.sort()
}

export function renderDraft(source, file, files) {
  const md = new MarkdownIt({ html: false, linkify: true })
  const open = md.renderer.rules.link_open || ((tokens, index, options, env, self) => self.renderToken(tokens, index, options))
  md.renderer.rules.link_open = (tokens, index, options, env, self) => {
    const token = tokens[index]
    const href = token.attrGet('href') || ''
    if (!/^(https?:|mailto:|#|\/)/i.test(href)) {
      const [relative] = href.split('#')
      const target = path.posix.normalize(path.posix.join(path.posix.dirname(file), relative))
      const match = files.includes(target) ? target : files.includes(`${target}/README.md`) ? `${target}/README.md` : files.find(name => name.startsWith(target.replace(/\/$/, '') + '/'))
      if (match) token.attrSet('href', `/ontwikkeling/concepten?bestand=${encodeURIComponent(match)}`)
      else token.attrs = (token.attrs || []).filter(([key]) => key !== 'href')
    }
    return open(tokens, index, options, env, self)
  }
  // Draft assets are not exposed as arbitrary filesystem URLs.
  md.renderer.rules.image = (tokens, index) => md.utils.escapeHtml(tokens[index].content)
  md.renderer.rules.table_open = () => '<div class="table-scroll" tabindex="0" role="region" aria-label="Tabel"><table>\n'
  md.renderer.rules.table_close = () => '</table></div>\n'
  const tokens = md.parse(source, {})
  for (const token of tokens) {
    if (token.type === 'heading_open' || token.type === 'heading_close') token.tag = `h${Math.min(6, Number(token.tag.slice(1)) + 1)}`
  }
  return md.renderer.render(tokens, md.options, {})
}

export async function dashboardData(root) {
  const source = await readFile(path.join(root, 'ACTIES.md'), 'utf8')
  let fence = false
  const actions = source.split('\n').flatMap(line => {
    if (/^\s*(`{3,}|~{3,})/.test(line)) { fence = !fence; return [] }
    const match = !fence && line.match(/^\s*[-*+] \[ \] (.*)$/)
    return match ? [{ text: match[1] }] : []
  })
  const files = (await draftFiles(root)).filter(file => path.basename(file).toLowerCase() !== 'readme.md')
  const drafts = await Promise.all(files.map(async file => {
    const [source, info] = await Promise.all([readFile(path.join(root, 'draft_inprogress', file), 'utf8'), stat(path.join(root, 'draft_inprogress', file))])
    return { file, title: source.match(/^# +(.+)$/m)?.[1] || file, updatedAt: info.mtime.toISOString() }
  }))
  drafts.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt) || a.file.localeCompare(b.file))
  const reviews = []
  for (const lesson of await loadLessons(root, { privateData: true })) {
    let review
    try { review = JSON.parse(await readFile(path.join(root, '.data/lesreviews', lesson.id.replaceAll('/', '-') + '.json'), 'utf8')) }
    catch (error) { if (error.code !== 'ENOENT') throw error }
    const stale = review && review.sourceHash !== lesson.sourceHash
    if (review?.status === 'reviewed' && !stale) continue
    reviews.push({ id: lesson.id, title: lesson.title, status: stale ? 'stale' : review?.status || 'open', updatedAt: review?.updatedAt || '' })
  }
  reviews.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt) || a.id.localeCompare(b.id))
  return { actions: actions.slice(0, 5), actionCount: actions.length, drafts: drafts.slice(0, 5), draftCount: drafts.length, reviews: reviews.slice(0, 5), reviewCount: reviews.length }
}

export function workspaceHandler(root) {
  let queue = Promise.resolve()
  const actionFile = path.join(root, 'ACTIES.md')
  return eventHandler(async event => {
    const host = getHeader(event, 'host') || ''
    const peer = event.node.req.socket.remoteAddress
    if (!['localhost', '127.0.0.1', '[::1]'].includes(host.replace(/:\d+$/, '')) || !['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(peer || '')) throw createError({ statusCode: 403 })
    setHeader(event, 'Cache-Control', 'no-store')
    const query = getQuery(event)
    if (event.method === 'GET') {
      if (query.kind === 'dashboard') return dashboardData(root)
      if (query.kind === 'opf') {
        const file = '.data/opf-voorbereiding/Voorbereiding OPF.md'
        const source = await readFile(path.join(root, file), 'utf8')
        return { file, html: renderDraft(source, file, []) }
      }
      if (query.kind === 'actions') {
        const source = await readFile(actionFile, 'utf8')
        return { source, revision: digest(source) }
      }
      const files = await draftFiles(root)
      if (!query.file) return { files }
      if (!files.includes(query.file)) throw createError({ statusCode: 404 })
      const source = await readFile(path.join(root, 'draft_inprogress', query.file), 'utf8')
      return { files, file: query.file, html: renderDraft(source, query.file, files) }
    }
    if (event.method !== 'PUT' || query.kind !== 'actions') throw createError({ statusCode: 405 })
    if (![ `http://${host}`, `https://${host}` ].includes(getHeader(event, 'origin'))) throw createError({ statusCode: 403 })
    const body = await readBody(event)
    if (typeof body?.source !== 'string' || body.source.length > 100000 || typeof body.revision !== 'string') throw createError({ statusCode: 400 })
    const save = queue.then(async () => {
      const current = await readFile(actionFile, 'utf8')
      if (body.revision !== digest(current)) throw createError({ statusCode: 409, statusMessage: 'ACTIES.md is elders gewijzigd. Kopieer je wijzigingen en herlaad voordat je opnieuw opslaat.' })
      await writeFile(`${actionFile}.tmp`, body.source)
      await rename(`${actionFile}.tmp`, actionFile)
      return { revision: digest(body.source) }
    })
    queue = save.then(() => undefined, () => undefined)
    return save
  })
}

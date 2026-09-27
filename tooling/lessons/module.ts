import { defineNuxtModule, addTemplate, addDevServerHandler, extendPages, updateTemplates } from '@nuxt/kit'
import { eventHandler, getQuery, readBody, createError, getHeader, setHeader } from 'h3'
import { readFile, mkdir, writeFile, rename } from 'node:fs/promises'
import { resolve } from 'node:path'
import { workspaceHandler } from './workspace-api.mjs'
import { loadLessons, digest } from './content.mjs'

export default defineNuxtModule({
  meta: { name: 'lesson-library' },
  setup(_options, nuxt) {
    const root = nuxt.options.rootDir
    if (!nuxt.options.dev) return
    // Lesson data and routes are currently available only during development.
    addTemplate({ filename: 'lessons-public.mjs', getContents: async () => `export default ${JSON.stringify(await loadLessons(root))}` })

    // Chokidar watches directories; a glob here would not observe new files.
    nuxt.options.watch.push(resolve(root, 'lesmateriaal'))
    nuxt.hook('builder:watch', async (_event, file) => {
      if (file.includes('lesmateriaal') && file.endsWith('.md')) {
        await updateTemplates({ filter: t => t.filename === 'lessons-public.mjs' })
      }
    })
    extendPages(pages => {
      for (const prefix of ['', '/en']) {
        for (const [name, path, file] of [
          ['development', '/ontwikkeling', 'workspace.vue'],
          ['development-week-overview', '/ontwikkeling/weekoverzicht', 'week-overview.vue'],
          ['development-files', '/ontwikkeling/bestanden', 'files.vue'],
          ['development-opf', '/ontwikkeling/opf', 'workspace.vue'],
          ['development-actions', '/ontwikkeling/acties', 'workspace.vue'],
          ['development-drafts', '/ontwikkeling/concepten', 'workspace.vue'],
          ['development-lessons', '/ontwikkeling/lessen/:slug(.*)*', 'library.vue'],
          ['development-review', '/ontwikkeling/review/:slug(.*)*', 'review.vue'],
        ]) pages.push({ name: `${prefix ? 'en-' : ''}${name}`, path: `${prefix}${path}`, file: resolve(root, 'tooling/lessons', file) })
      }
    })
    addDevServerHandler({ route: '/__development', handler: workspaceHandler(root) })
    let writeQueue = Promise.resolve()
    addDevServerHandler({ route: '/__lesson-review', handler: eventHandler(async event => {
      const host = getHeader(event, 'host') || ''
      const hostname = host.replace(/:\d+$/, '')
      const peer = event.node.req.socket.remoteAddress
      if (!['localhost', '127.0.0.1', '[::1]'].includes(hostname) || !['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(peer || '')) {
        throw createError({ statusCode: 403, statusMessage: 'Review is alleen lokaal beschikbaar.' })
      }
      setHeader(event, 'Cache-Control', 'no-store')
      const items = await loadLessons(root, { privateData: true })
      const id = getQuery(event).id
      const lesson = items.find(item => item.id === id)
      if (!lesson) throw createError({ statusCode: 404, statusMessage: 'Onbekende les.' })
      const dir = resolve(root, '.data/lesreviews')
      const file = resolve(dir, `${lesson.id.replaceAll('/', '-')}.json`)
      const readReview = async () => {
        try { return await readFile(file, 'utf8') }
        catch (error: any) { if (error.code === 'ENOENT') return ''; throw error }
      }
      if (event.method === 'GET') {
        const raw = await readReview()
        return { lesson, review: raw ? JSON.parse(raw) : null, revision: digest(raw) }
      }
      if (event.method !== 'PUT') throw createError({ statusCode: 405 })
      if (getHeader(event, 'origin') !== `http://${host}` && getHeader(event, 'origin') !== `https://${host}`) {
        throw createError({ statusCode: 403, statusMessage: 'Opslaan moet vanuit de lokale reviewpagina.' })
      }
      const body = await readBody(event)
      if (!body || !['open', 'changes', 'reviewed'].includes(body.status) || typeof body.general !== 'string' || body.general.length > 20000 || !body.comments || typeof body.comments !== 'object' || Array.isArray(body.comments)) {
        throw createError({ statusCode: 400, statusMessage: 'Ongeldige review.' })
      }
      const sectionIds = new Set(lesson.sections.map(s => s.id))
      for (const [key, value] of Object.entries(body.comments)) {
        if (!sectionIds.has(key) || typeof value !== 'string' || value.length > 10000) throw createError({ statusCode: 400, statusMessage: 'Ongeldige opmerking.' })
      }
      const save = writeQueue.then(async () => {
        const raw = await readReview()
        if (body.revision !== digest(raw) || body.sourceHash !== lesson.sourceHash) throw createError({ statusCode: 409, statusMessage: 'De les of review is gewijzigd. Bewaar je tekst en laad opnieuw.' })
        const review = { id: lesson.id, file: lesson.file, sourceHash: lesson.sourceHash, status: body.status,
          general: body.general, comments: body.comments,
          sections: lesson.sections.map(s => ({ id: s.id, title: s.title, line: s.line })), updatedAt: new Date().toISOString() }
        const output = JSON.stringify(review, null, 2) + '\n'
        await mkdir(dir, { recursive: true })
        if (raw && JSON.parse(raw).sourceHash !== lesson.sourceHash) {
          await mkdir(resolve(dir, 'history'), { recursive: true })
          await writeFile(resolve(dir, 'history', `${lesson.id.replaceAll('/', '-')}-${digest(raw)}.json`), raw)
        }
        await writeFile(`${file}.tmp`, output)
        await rename(`${file}.tmp`, file)
        return { review, revision: digest(output) }
      })
      writeQueue = save.then(() => undefined, () => undefined)
      return save
    }) })
  },
})

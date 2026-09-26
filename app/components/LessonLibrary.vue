<script setup>
import items from '#build/lessons-public.mjs'
import nl from '~/content/lessen.nl'
import en from '~/content/lessen.en'
const route = useRoute()
const { locale, localePath } = useI18nNav()
const t = computed(() => locale.value === 'en' ? en : nl)
const parts = Array.isArray(route.params.slug) ? route.params.slug : String(route.params.slug || '').split('/').filter(Boolean)
const id = parts.join('/')
const item = items.find(item => item.id === id)
const selectedWeek = parts[0] ? Number(parts[0].replace('week-', '')) : null
if (id && !item && !(parts.length === 1 && /^week-[1-4]$/.test(parts[0]))) throw createError({ statusCode: 404, statusMessage: 'Les niet gevonden' })
const search = ref('')
const lessons = items.filter(item => item.kind === 'lesson')
const visibleWeeks = computed(() => t.value.weeks.filter(w => !selectedWeek || w.n === selectedWeek))
const matches = lesson => `${lesson.title} ${lesson.description}`.toLocaleLowerCase('nl').includes(search.value.trim().toLocaleLowerCase('nl'))
const forWeek = n => lessons.filter(lesson => lesson.week === n && matches(lesson))
const extras = computed(() => items.filter(item => item.kind === 'attachment' && (!selectedWeek || item.week === selectedWeek)))
const position = item ? lessons.findIndex(l => l.id === item.id) : -1
const previous = position > 0 ? lessons[position - 1] : null
const next = position >= 0 ? lessons[position + 1] : null
const week = computed(() => t.value.weeks.find(w => w.n === selectedWeek))
const isDev = import.meta.dev
const { data: additional, error: additionalError } = !item && isDev
  ? await useFetch('/__development', { server: false, query: { kind: 'lesson-files' }, key: `lesson-files-${selectedWeek || 'all'}` })
  : { data: ref(null), error: ref(null) }
const otherFiles = computed(() => (additional.value?.files || []).filter(file => (!selectedWeek || file.startsWith(`week${selectedWeek}/`)) && file.toLowerCase().includes(search.value.trim().toLowerCase())))
function printLesson() { window.print() }
useHead({ title: computed(() => `${item?.title || (week.value ? `${t.value.week} ${selectedWeek} · ${week.value.title}` : t.value.all)} · Secure by Design`) })
</script>

<template>
  <div class="page wrap library" :class="{ 'slide-page': item?.kind === 'lesson' }">
    <nav v-if="id" class="breadcrumbs" :aria-label="locale === 'en' ? 'Breadcrumbs' : 'Broodkruimelpad'">
      <NuxtLink :to="localePath('/ontwikkeling/lessen')">{{ t.all }}</NuxtLink>
      <template v-if="item"><span aria-hidden="true">/</span><NuxtLink :to="localePath(`/ontwikkeling/lessen/week-${selectedWeek}`)">{{ t.week }} {{ selectedWeek }}</NuxtLink></template>
      <span aria-hidden="true">/</span><span>{{ item ? (item.block ? `${t.block} ${item.block}` : t.attachment) : week.title }}</span>
    </nav>
    <header class="hero">
      <div class="kicker">{{ item ? `${t.week} ${item.week} · ${item.block ? `${t.block} ${item.block}` : t.attachment}` : t.kicker }}</div>
      <h1 v-if="item" class="title lesson-title" lang="nl">{{ item.title }}</h1>
      <h1 v-else-if="week" class="title">{{ week.title }}</h1>
      <h1 v-else class="title">{{ t.title }} <em>{{ t.accent }}</em></h1>
      <p v-if="item?.kind !== 'lesson'" class="lede" :lang="item ? 'nl' : undefined">{{ item ? item.description : t.intro }}</p>
      <div class="chips"><span class="chip">{{ t.draft }}</span><span v-if="item?.block" class="chip">{{ t.minutes }}</span><span v-if="!item" class="chip">{{ lessons.filter(l => !selectedWeek || l.week === selectedWeek).length }} {{ t.lessons }}</span><span class="chip">{{ t.languageNote }}</span></div>
    </header>

    <template v-if="!item">
      <div class="search-row"><label for="lesson-search">{{ t.search }}</label><input id="lesson-search" v-model="search" type="search" :placeholder="t.placeholder" /><button v-if="search" type="button" @click="search = ''">{{ t.clear }}</button></div>
      <p v-if="search && !visibleWeeks.some(w => forWeek(w.n).length)" role="status">{{ t.noResults }}</p>
      <h2 class="sec-h"><span class="no">01</span>{{ t.chooseWeek }}</h2>
      <div class="board" :class="{ 'one-week': selectedWeek }">
        <section v-for="w in visibleWeeks" :key="w.n" class="col" :data-w="w.n" :aria-labelledby="`week-${w.n}`">
          <header class="col-h"><div class="wk">{{ t.week }} {{ w.n }}</div><h3 :id="`week-${w.n}`">{{ w.title }}</h3><div class="ph">{{ w.goal }}</div></header>
          <div class="stack">
            <NuxtLink v-if="!selectedWeek" class="week-link" :to="localePath(`/ontwikkeling/lessen/week-${w.n}`)">{{ t.openWeek }} →</NuxtLink>
            <article v-for="lesson in forWeek(w.n)" :key="lesson.id" class="card">
              <NuxtLink class="lesson-card-link" :to="localePath(`/ontwikkeling/lessen/${lesson.id}`)">
                <span class="bt">{{ t.block }} {{ lesson.block }} · {{ t.minutes }}</span><h4 lang="nl">{{ lesson.title }}</h4><p lang="nl">{{ lesson.description }}</p><span class="read-link">{{ t.open }} →</span>
              </NuxtLink>
            </article>
            <div v-if="!lessons.some(l => l.week === w.n)" class="pending"><b>{{ t.pending }}</b><p>{{ t.pendingText }}</p></div>
          </div>
        </section>
      </div>
      <section v-if="extras.length && !search" class="extra-material"><h2 class="sec-h"><span class="no">+</span>{{ t.attachments }}</h2><p class="sec-sub">{{ t.attachmentsIntro }}</p><div class="flows"><NuxtLink v-for="extra in extras" :key="extra.id" class="flow" :to="localePath(`/ontwikkeling/lessen/${extra.id}`)" style="--c:var(--w3)"><span class="step">{{ t.week }} {{ extra.week }}</span><h3 lang="nl">{{ extra.title }}</h3><span class="go">{{ t.open }} →</span></NuxtLink></div></section>
      <section v-if="isDev" class="extra-material">
        <h2 class="sec-h"><span class="no">+</span>{{ t.otherFiles }}</h2><p class="sec-sub">{{ t.otherIntro }}</p>
        <p v-if="additionalError" role="alert">{{ t.fileError }}</p><p v-else-if="!additional" role="status">{{ t.fileLoading }}</p>
        <div v-else class="flows"><NuxtLink v-for="file in otherFiles" :key="file" class="flow additional-file" :to="{ path: localePath('/ontwikkeling/bestanden'), query: { bestand: file } }" style="--c:var(--w4)"><span class="step">{{ t.week }} {{ file.match(/^week([1-4])/)[1] }}</span><h3>{{ file.split('/').pop() }}</h3><span class="go">{{ t.fileOpen }} →</span></NuxtLink></div>
      </section>
    </template>

    <template v-else>
      <div class="reader-actions"><button type="button" @click="printLesson">{{ t.print }}</button><NuxtLink v-if="isDev" :to="localePath(`/ontwikkeling/review/${item.id}`)">{{ t.review }} →</NuxtLink></div>
      <p class="concept-note">{{ t.conceptNote }}</p>
      <LessonSlides v-if="item.kind === 'lesson'" :lesson="item" :t="t" />
      <div v-else class="reading-layout">
        <aside class="toc"><details open><summary>{{ t.contents }}</summary><ol><li v-for="s in item.sections" :key="s.id"><a :href="`#${s.id}`" lang="nl">{{ s.title }}</a></li></ol></details></aside>
        <article class="reading-paper" :aria-label="item.title">
          <section v-for="(s, i) in item.sections" :id="s.id" :key="s.id" class="reading-section"><div class="section-number">{{ t.part }} {{ String(i + 1).padStart(2, '0') }}</div><LessonText :html="s.html" /></section>
        </article>
      </div>
      <nav v-if="item.kind === 'lesson'" class="lesson-pagination" :aria-label="t.all"><NuxtLink v-if="previous" :to="localePath(`/ontwikkeling/lessen/${previous.id}`)"><small>← {{ t.previous }}</small><span lang="nl">{{ previous.title }}</span></NuxtLink><NuxtLink v-if="next" :to="localePath(`/ontwikkeling/lessen/${next.id}`)"><small>{{ t.next }} →</small><span lang="nl">{{ next.title }}</span></NuxtLink></nav>
    </template>
  </div>
</template>

<style scoped src="../assets/css/lesson-board.css"></style>
<style scoped>
.additional-file{min-width:0;overflow-wrap:anywhere}.library{padding-bottom:60px}.breadcrumbs{display:flex;gap:12px;flex-wrap:wrap;margin-top:28px;font-size:13px;color:var(--ink2)}.breadcrumbs a{text-underline-offset:4px}
.lesson-title{font-size:clamp(36px,5vw,62px)!important;max-width:22ch;line-height:1.03!important}.search-row{display:flex;align-items:center;gap:14px;margin:22px 0 28px;flex-wrap:wrap}.search-row label{font-weight:600}.search-row input{font:inherit;padding:12px 16px;border:1px solid var(--line);border-radius:10px;background:var(--card);color:var(--ink);width:min(100%,480px)}
.slide-page .hero{padding:22px 0 8px}.slide-page .lesson-title{font-size:clamp(28px,3.5vw,42px)!important;max-width:none;margin:8px 0 14px}.slide-page .reader-actions{margin:10px 0}.slide-page .concept-note{margin:8px 0 12px}.slide-page .lesson-pagination{margin-left:0}
button{font:inherit;border:1px solid var(--line);background:var(--card);color:var(--ink);padding:10px 15px;border-radius:10px;cursor:pointer}
.library :focus-visible{outline:2px solid var(--w3);outline-offset:4px}.one-week{grid-template-columns:minmax(0,1fr)}.one-week .stack{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}.one-week .col-h{max-width:100%}.week-link{padding:5px 2px;font-size:13px;text-underline-offset:4px;color:var(--ink2)}
.lesson-card-link{display:block;padding:16px;text-decoration:none}.lesson-card-link h4{font-size:18px;line-height:1.25;margin:8px 0}.lesson-card-link p{font-size:14px;line-height:1.5;color:var(--ink2);margin:0 0 18px}.read-link{font-weight:600;font-size:13px;color:var(--c)}.pending{padding:22px 16px;border:1px dashed var(--line);border-radius:10px;color:var(--ink2)}.pending p{font-size:14px;margin-bottom:0}
.reader-actions{display:flex;gap:20px;align-items:center;flex-wrap:wrap;margin:20px 0}.reader-actions a{font-weight:600;text-underline-offset:4px}.concept-note{font-size:13px;color:var(--ink2);margin-bottom:28px}
.reading-layout{display:grid;grid-template-columns:250px minmax(0,850px);gap:36px;align-items:start}.reading-paper{min-width:0;border:1px solid var(--line);border-radius:16px;background:var(--card);box-shadow:var(--shadow);padding:12px 44px}.reading-section{padding:32px 0;border-bottom:1px solid var(--line);scroll-margin-top:120px}.reading-section:last-child{border-bottom:0}.section-number{font:11px 'JetBrains Mono',monospace;text-transform:uppercase;color:var(--w3);letter-spacing:.08em;margin-bottom:15px}
.toc{position:sticky;top:100px;max-height:calc(100vh - 120px);overflow:auto;font-size:13px;padding:5px}.toc summary{font-weight:700;cursor:pointer}.toc ol{padding-left:24px}.toc li{padding:4px 0}.toc a{color:var(--ink2);text-decoration:none}.toc a:hover{text-decoration:underline;color:var(--w3)}
.lesson-pagination{display:flex;justify-content:space-between;gap:20px;margin:28px 0 0 286px}.lesson-pagination a{display:flex;flex-direction:column;max-width:45%;text-decoration:none;font-weight:600}.lesson-pagination small{font-weight:400;color:var(--ink2);margin-bottom:5px}
@media(max-width:1080px){.reading-layout{grid-template-columns:190px minmax(0,1fr);gap:22px}.reading-paper{padding:8px 26px}.one-week .stack{grid-template-columns:repeat(2,minmax(0,1fr))}.lesson-pagination{margin-left:212px}}
@media(max-width:760px){.reading-layout{display:block}.toc{position:static;max-height:210px;margin-bottom:24px;border:1px solid var(--line);border-radius:10px;padding:16px}.lesson-pagination{margin-left:0}}
@media(max-width:560px){.one-week .stack{grid-template-columns:1fr}.reading-paper{padding:0 18px}.reading-section{padding:24px 0}.library{padding-left:16px;padding-right:16px}}
@media print{.breadcrumbs,.reader-actions,.toc,.lesson-pagination,.chips{display:none}.reading-layout{display:block}.reading-paper{border:0;box-shadow:none;padding:0}.reading-section{break-inside:auto;padding:16px 0}.hero{padding:0}.lesson-title{font-size:30px!important}}
</style>

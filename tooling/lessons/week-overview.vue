<script setup>
import nl from '~/content/ontwikkeling.nl'
import en from '~/content/ontwikkeling.en'
const route = useRoute()
const { locale, localePath } = useI18nNav()
const t = computed(() => locale.value === 'en' ? en : nl)
const file = computed(() => typeof route.query.bestand === 'string' ? route.query.bestand : 'weekopbouw-gewenst.md')
const { data, error } = await useFetch('/__development', {
  server: false,
  query: computed(() => ({ kind: 'week-overview', file: file.value, locale: locale.value })),
  key: 'week-overview-reader',
})
useHead({ title: computed(() => `${t.value.weekOverview} · Secure by Design`), meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
</script>

<template>
  <DevelopmentNav />
  <div class="wrap week-overview">
    <header class="hero">
      <div class="kicker">{{ t.kicker }}</div>
      <h1 class="title">{{ t.weekOverview }}</h1>
      <p class="lede">{{ t.weekOverviewHint }}</p>
      <div class="chips"><span class="chip">{{ t.local }}</span></div>
    </header>
    <nav class="document-links" :aria-label="t.weekOverview">
      <NuxtLink v-for="document in t.weekOverviewLinks" :key="document.file" :to="{ path: localePath('/ontwikkeling/weekoverzicht'), query: { bestand: document.file } }" :aria-current="file === document.file ? 'page' : undefined">{{ document.label }}</NuxtLink>
    </nav>
    <p v-if="error" role="alert">{{ t.loadError }}</p>
    <p v-else-if="!data" role="status">{{ t.loading }}</p>
    <article v-else class="paper" lang="nl">
      <p class="source">{{ t.source }}: lesmateriaal/{{ data.file }}</p>
      <LessonText :html="data.html" />
    </article>
  </div>
</template>

<style scoped>
.week-overview{padding-bottom:60px;min-width:0}.document-links{display:flex;flex-wrap:wrap;gap:12px 24px;margin-bottom:24px}.document-links a{text-decoration:underline;text-underline-offset:4px}.document-links [aria-current=page]{font-weight:700;color:var(--w3)}.document-links a:focus-visible{outline:2px solid var(--w3);outline-offset:4px}.paper{padding:28px;min-width:0;background:var(--card);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow)}.source{font-size:13px;color:var(--ink2);overflow-wrap:anywhere;margin-bottom:24px}@media(max-width:560px){.paper{padding:18px}}
</style>

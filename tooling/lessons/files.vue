<script setup>
import nl from '~/content/lessen.nl'
import en from '~/content/lessen.en'
const route = useRoute()
const { locale, localePath } = useI18nNav()
const t = computed(() => locale.value === 'en' ? en : nl)
const file = computed(() => typeof route.query.bestand === 'string' ? route.query.bestand : '')
const week = computed(() => file.value.match(/^week([1-4])\//)?.[1])
const { data, error } = await useFetch('/__development', { server: false, query: computed(() => ({ kind: 'lesson-files', file: file.value || '__missing__' })), key: 'lesson-file-reader' })
useHead({ title: computed(() => `${file.value.split('/').pop() || t.value.otherFiles} · Secure by Design`), meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
</script>
<template>
  <DevelopmentNav />
  <div class="wrap file-reader">
    <header class="hero"><div class="kicker">{{ t.otherFiles }}</div><h1 class="title">{{ file.split('/').pop() || t.otherFiles }}</h1><p class="lede">{{ t.otherIntro }}</p></header>
    <NuxtLink :to="localePath(week ? `/ontwikkeling/lessen/week-${week}` : '/ontwikkeling/lessen')">← {{ t.backWeek }}</NuxtLink>
    <p v-if="error" role="alert">{{ t.fileError }}</p><p v-else-if="!data" role="status">{{ t.fileLoading }}</p>
    <article v-else class="file-paper"><p class="source">{{ t.sourceFile }}: lesmateriaal/{{ data.file }}</p><LessonText :html="data.html" /></article>
  </div>
</template>
<style scoped>
.file-reader{padding-bottom:60px}.file-reader .title{font-size:clamp(28px,4vw,50px);overflow-wrap:anywhere}.file-paper{margin-top:24px;padding:32px;background:var(--card);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow);min-width:0}.source{font-size:13px;color:var(--ink2);overflow-wrap:anywhere;margin-bottom:24px}a:focus-visible{outline:2px solid var(--w3);outline-offset:4px}@media(max-width:560px){.file-paper{padding:18px}}
</style>

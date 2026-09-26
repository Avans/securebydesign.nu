<script setup>
const { locale, localePath } = useI18nNav()
const links = computed(() => locale.value === 'en'
  ? [['', 'Development'], ['/lessen', 'Lessons'], ['/acties', 'Actions'], ['/concepten', 'Drafts'], ['/review', 'Reviews']]
  : [['', 'Ontwikkeling'], ['/lessen', 'Lessen'], ['/acties', 'Acties'], ['/concepten', 'Concepten'], ['/review', 'Reviews']])
</script>
<template><nav class="wrap development-nav" :aria-label="locale === 'en' ? 'Development workspace' : 'Ontwikkelwerkplek'"><NuxtLink v-for="[path, title] in links" :key="path" :to="localePath(`/ontwikkeling${path}`)">{{ title }}</NuxtLink></nav></template>
<style scoped>
.development-nav{display:flex;gap:10px 22px;flex-wrap:wrap;padding-top:24px;padding-bottom:12px;font-size:14px}.development-nav a{padding:6px 0;text-underline-offset:6px}.development-nav .router-link-exact-active{font-weight:700;color:var(--w3)}.development-nav a:focus-visible{outline:2px solid var(--w3);outline-offset:4px}@media print{.development-nav{display:none}}
</style>

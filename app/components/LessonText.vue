<script setup>
const props = defineProps({ html: { type: String, required: true } })
const { locale } = useI18nNav()
const content = computed(() => locale.value === 'en'
  ? props.html.replace(/href="\/(?!materiaal\/|en\/)([^"#]*)/g, 'href="/en/$1')
  : props.html)
</script>

<template><div class="lesson-text" lang="nl" v-html="content" /></template>

<style scoped>
.lesson-text{font-size:18px;line-height:1.75;overflow-wrap:anywhere;color:var(--ink)}
.lesson-text :deep(h2),.lesson-text :deep(h3),.lesson-text :deep(h4){font-family:'Fraunces',serif;font-weight:600;line-height:1.2;margin:1.1em 0 .6em;scroll-margin-top:120px}
.lesson-text :deep(h2){font-size:32px}.lesson-text :deep(h3){font-size:27px}.lesson-text :deep(h4){font-size:22px}
.lesson-text :deep(> :first-child){margin-top:0}
.lesson-text :deep(p){margin:0 0 1em}.lesson-text :deep(li){margin:.3em 0}.lesson-text :deep(ul),.lesson-text :deep(ol){padding-left:1.5em}
.lesson-text :deep(a){text-decoration:underline;text-decoration-color:var(--w3);text-underline-offset:4px}
.lesson-text :deep(blockquote){margin:24px 0;padding:12px 20px;border-left:3px solid var(--w3);background:var(--paper)}
.lesson-text :deep(blockquote p:last-child){margin:0}
.lesson-text :deep(.table-scroll){overflow:auto;max-width:100%;margin:20px 0;border:1px solid var(--line);border-radius:10px}
.lesson-text :deep(table){border-collapse:collapse;font-size:15px;line-height:1.5;min-width:480px;width:100%}
.lesson-text :deep(th),.lesson-text :deep(td){text-align:left;padding:12px 14px;border-bottom:1px solid var(--line);vertical-align:top}
.lesson-text :deep(th){background:var(--paper2)}.lesson-text :deep(tr:last-child td){border-bottom:0}
.lesson-text :deep(pre){overflow:auto;padding:16px;background:var(--paper);border-radius:8px}
.lesson-text :deep(code){font-family:'JetBrains Mono',monospace;font-size:.85em}
.lesson-text :deep(img){max-width:100%;height:auto}.lesson-text :deep(:focus-visible){outline:2px solid var(--w3);outline-offset:3px}
@media(max-width:560px){.lesson-text{font-size:16px}.lesson-text :deep(h2){font-size:27px}.lesson-text :deep(h3){font-size:23px}}
@media print{.lesson-text :deep(.table-scroll){overflow:visible}.lesson-text :deep(table){min-width:0;font-size:11px}.lesson-text{font-size:12px}.lesson-text :deep(h2),.lesson-text :deep(h3){font-size:19px}}
</style>

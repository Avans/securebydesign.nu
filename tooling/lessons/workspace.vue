<script setup>
import nl from '~/content/ontwikkeling.nl'
import en from '~/content/ontwikkeling.en'
definePageMeta({ key: route => route.path })
const route = useRoute()
const { locale, localePath } = useI18nNav()
const t = computed(() => locale.value === 'en' ? en : nl)
const actions = route.path.endsWith('/acties')
const concepts = route.path.endsWith('/concepten')
const opf = route.path.endsWith('/opf')
const dashboard = !actions && !concepts && !opf
const query = computed(() => actions ? { kind: 'actions' } : concepts ? { file: route.query.bestand || 'README.md' } : { kind: opf ? 'opf' : 'dashboard' })
const { data, error } = await useFetch('/__development', { server: false, query, key: `workspace-${route.path}` })
const source = ref('')
const original = ref('')
const revision = ref('')
const dirty = computed(() => source.value !== original.value)
const newAction = ref('')
const saving = ref(false)
const message = ref('')
const failed = ref(false)
watch(data, value => {
  if (actions && value) { source.value = original.value = value.source; revision.value = value.revision }
}, { immediate: true })
// Respect fenced code blocks: examples of Markdown tasks are not actions.
const actionRows = computed(() => {
  let fence = null
  return source.value.split('\n').flatMap((line, index) => {
    const marker = line.match(/^\s*(`{3,}|~{3,})/)
    if (marker) { if (!fence) fence = marker[1]; else if (marker[1][0] === fence[0] && marker[1].length >= fence.length) fence = null; return [] }
    const heading = !fence && line.match(/^(#{2,6})\s+(.+?)(?:\s+#+)?\s*$/)
    if (heading) return [{ index, heading: heading[1].length, text: heading[2] }]
    const match = !fence && line.match(/^\s*[-*+] \[([ xX])\] (.*)$/)
    return match ? [{ index, done: match[1] !== ' ', text: match[2] }] : []
  })
})
function toggle(index, checked) {
  const lines = source.value.split('\n')
  lines[index] = lines[index].replace(/\[[ xX]\]/, checked ? '[x]' : '[ ]')
  source.value = lines.join('\n'); message.value = ''
}
async function add() {
  const text = newAction.value.trim()
  if (!text || saving.value) return
  const action = `- [ ] ${text}\n`
  if (/^## Open acties\s*$/m.test(source.value)) source.value = source.value.replace(/^(## Open acties[^\S\n]*\n)/m, heading => `${heading}${action}`)
  else source.value = source.value.trimEnd() + '\n\n' + action
  newAction.value = ''; message.value = ''
  await save()
}
async function save() {
  if (saving.value) return
  saving.value = true; message.value = ''; failed.value = false
  const snapshot = source.value
  try {
    const result = await $fetch('/__development', { method: 'PUT', query: { kind: 'actions' }, body: { source: snapshot, revision: revision.value } })
    original.value = snapshot; revision.value = result.revision; message.value = t.value.saved
  } catch { failed.value = true; message.value = t.value.saveError }
  finally { saving.value = false }
}
function guard(event) { if (dirty.value) { event.preventDefault(); event.returnValue = '' } }
onMounted(() => window.addEventListener('beforeunload', guard))
onBeforeUnmount(() => window.removeEventListener('beforeunload', guard))
onBeforeRouteLeave(() => !dirty.value || window.confirm(t.value.leave))
useHead({ title: computed(() => `${actions ? t.value.actions : concepts ? t.value.drafts : opf ? t.value.opf : t.value.kicker} · Secure by Design`), meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
</script>
<template>
  <DevelopmentNav />
  <div class="wrap workspace">
    <header class="hero"><div class="kicker">{{ t.kicker }}</div><h1 v-if="!dashboard" class="title">{{ actions ? t.actions : opf ? t.opf : t.drafts }}</h1><h1 v-else class="title">{{ t.title }} <em>{{ t.accent }}</em></h1><p class="lede">{{ actions ? t.actionHint : concepts ? t.draftHint : opf ? t.opfHint : t.intro }}</p><div class="chips"><span class="chip">{{ t.local }}</span></div></header>
    <div v-if="dashboard" class="flows dashboard">
      <section v-for="(card, index) in t.cards" :key="card.path" class="flow" :style="{ '--c': card.color }">
        <h2>{{ card.title }}</h2><p>{{ card.text }}</p>
        <template v-if="index === 0">
        <h3>{{ t.lessonMaterials }}</h3>
        <ul class="dashboard-list">
          <li v-for="week in 4" :key="week"><NuxtLink :to="localePath(`/ontwikkeling/lessen/week-${week}`)">{{ t.week }} {{ week }} →</NuxtLink></li>
          <li><NuxtLink :to="localePath('/project')">{{ t.project }} →</NuxtLink></li>
          <li><NuxtLink :to="localePath('/ontwikkeling/opf')">{{ t.opf }} →</NuxtLink></li>
        </ul>
        </template>
        <template v-else>
          <h3>{{ index === 1 ? t.latestActions : index === 2 ? t.latestDrafts : t.openReviews }}</h3>
          <p v-if="error" role="alert">{{ t.loadError }}</p><p v-else-if="!data" role="status">{{ t.loading }}</p>
          <template v-else-if="index === 1">
            <ul v-if="data.actions.length" class="dashboard-list"><li v-for="(action, i) in data.actions" :key="i"><NuxtLink :to="localePath('/ontwikkeling/acties')" lang="nl">{{ action.text }}</NuxtLink></li></ul><p v-else>{{ t.noActions }}</p>
          </template>
          <template v-else-if="index === 2"><ul v-if="data.drafts.length" class="dashboard-list"><li v-for="draft in data.drafts" :key="draft.file"><NuxtLink :to="{ path: localePath('/ontwikkeling/concepten'), query: { bestand: draft.file } }" lang="nl">{{ draft.title }}</NuxtLink><small>{{ t.updated }} {{ new Date(draft.updatedAt).toLocaleDateString(locale === 'en' ? 'en-GB' : 'nl-NL') }}</small></li></ul><p v-else>{{ t.noDrafts }}</p></template>
          <template v-else><ul v-if="data.reviews.length" class="dashboard-list"><li v-for="review in data.reviews" :key="review.id"><NuxtLink :to="localePath(`/ontwikkeling/review/${review.id}`)" lang="nl">{{ review.title }}</NuxtLink><small>{{ t.reviewStatus[review.status] }}</small></li></ul><p v-else>{{ t.noReviews }}</p></template>
        </template>
        <NuxtLink class="go" :to="localePath(`/ontwikkeling${card.path}`)">{{ t.allItems }}<template v-if="data && index > 0"> ({{ index === 1 ? data.actionCount : index === 2 ? data.draftCount : data.reviewCount }})</template> →</NuxtLink>
      </section>
    </div>
    <p v-else-if="error" role="alert">{{ t.loadError }}</p>
    <p v-else-if="!data" role="status">{{ t.loading }}</p>
    <article v-else-if="opf" class="paper"><p class="source">{{ t.source }}: {{ data.file }}</p><LessonText :html="data.html" /></article>
    <template v-else-if="actions">
      <form class="add-action" @submit.prevent="add"><label for="new-action">{{ t.newAction }}</label><div><input id="new-action" v-model="newAction" maxlength="1000" /><button :disabled="!newAction.trim() || saving">{{ saving ? t.saving : t.add }}</button></div></form>
      <div class="paper action-list"><p v-if="!actionRows.length">{{ t.empty }}</p><template v-for="row in actionRows" :key="row.index"><component :is="`h${row.heading}`" v-if="row.heading" class="action-heading">{{ row.text }}</component><label v-else class="task"><input type="checkbox" :checked="row.done" @change="toggle(row.index, $event.target.checked)" /><span :class="{ done: row.done }">{{ row.text }}</span></label></template></div>
      <details class="editor"><summary>{{ t.edit }}</summary><label for="action-source">{{ t.source }}: ACTIES.md</label><textarea id="action-source" v-model="source" rows="16" maxlength="100000" spellcheck="false" @input="message = ''" /></details>
      <div class="save-row"><button :disabled="!dirty || saving" @click="save">{{ saving ? t.saving : t.save }}</button><span role="status">{{ dirty ? t.unsaved : t.clean }}</span><span v-if="message" :role="failed ? 'alert' : 'status'">{{ message }}</span></div>
    </template>
    <div v-else class="draft-grid"><aside><h2>{{ t.files }}</h2><ul><li v-for="file in data.files" :key="file"><NuxtLink :to="{ path: localePath('/ontwikkeling/concepten'), query: { bestand: file } }" :aria-current="file === data.file ? 'page' : undefined">{{ file }}</NuxtLink></li></ul></aside><article class="paper"><p class="source">{{ t.source }}: draft_inprogress/{{ data.file }}</p><LessonText :html="data.html" /></article></div>
  </div>
</template>
<style scoped>
.dashboard{grid-template-columns:repeat(4,minmax(0,1fr));align-items:start}.dashboard .flow{min-width:0;transform:none}.dashboard h3{font-family:'Hanken Grotesk',sans-serif;font-size:15px;margin:12px 0}.dashboard-list{list-style:none;padding:0;margin:0 0 20px;font-size:14px;line-height:1.5}.dashboard-list li{padding:12px 0;border-bottom:1px solid var(--line);overflow-wrap:anywhere}.dashboard-list a{text-decoration:underline;text-underline-offset:3px}.dashboard-list small{display:block;color:var(--ink2);font-size:12px;margin-top:5px}.dashboard h2{margin:0 0 12px}@media(max-width:1080px){.dashboard{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.dashboard{grid-template-columns:1fr}}

.action-heading{font-family:'Fraunces',serif;line-height:1.25;margin:28px 0 14px}.action-list h2{font-size:28px}.action-list h3{font-size:22px}.action-heading:first-child{margin-top:0}.workspace{padding-bottom:60px}.paper{background:var(--card);border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow);padding:28px;min-width:0}.flows h2{font-family:'Fraunces',serif;font-size:28px}.add-action{max-width:800px;margin-bottom:24px}.add-action>div{display:flex;gap:12px;margin-top:8px}.add-action input{flex:1;min-width:0}input,textarea,button{font:inherit;color:var(--ink);border:1px solid var(--line);border-radius:8px;padding:12px;background:var(--card)}button{cursor:pointer;font-weight:600}button:disabled{opacity:.5;cursor:default}.task{display:flex;align-items:baseline;gap:12px;padding:10px 0;overflow-wrap:anywhere}.task input{flex:none}.done{text-decoration:line-through;color:var(--ink2)}.editor{margin:24px 0}.editor summary{cursor:pointer;font-weight:600;margin-bottom:12px}.editor label{display:block;margin-bottom:8px}textarea{width:100%;resize:vertical;font-family:'JetBrains Mono',monospace;font-size:14px}.save-row{display:flex;gap:16px;align-items:center;flex-wrap:wrap}.draft-grid{display:grid;grid-template-columns:280px minmax(0,1fr);gap:28px}.draft-grid aside{font-size:13px;overflow-wrap:anywhere}.draft-grid ul{padding-left:20px}.draft-grid li{margin-bottom:12px}.draft-grid [aria-current=page]{font-weight:700;color:var(--w3)}.source{font-size:13px;color:var(--ink2);overflow-wrap:anywhere;margin-bottom:24px}:focus-visible{outline:2px solid var(--w3);outline-offset:4px}@media(max-width:850px){.draft-grid{grid-template-columns:1fr}.draft-grid aside{max-height:220px;overflow:auto}.paper{padding:20px}}@media(max-width:560px){.add-action>div{flex-wrap:wrap}}
</style>

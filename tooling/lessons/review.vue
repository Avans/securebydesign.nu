<script setup>
import items from '#build/lessons-public.mjs'
const route = useRoute()
const { localePath } = useI18nNav()
definePageMeta({ key: route => route.path })
const parts = Array.isArray(route.params.slug) ? route.params.slug : String(route.params.slug || '').split('/').filter(Boolean)
const id = parts.join('/')
// The dev-server handler is outside Nitro's internal SSR fetch pipeline.
// Fetch in the browser, where host/origin and the loopback peer can be checked.
const { data, error } = id ? await useFetch('/__lesson-review', { server: false, query: { id }, key: `review-${id}` }) : { data: ref(null), error: ref(null) }
const lesson = computed(() => data.value?.lesson)
const draft = reactive({ status: 'open', general: '', comments: {} })
const revision = ref('')
const dirty = ref(false)
const saving = ref(false)
const message = ref('')
const failed = ref(false)
const stale = computed(() => data.value?.review && data.value.review.sourceHash !== lesson.value?.sourceHash)
const acknowledged = ref(false)
watch(draft, () => { dirty.value = true; message.value = '' }, { deep: true, flush: 'sync' })
watch(data, value => {
  if (!value) return
  const ids = new Set(value.lesson.sections.map(s => s.id))
  draft.status = value.review?.status || 'open'
  draft.general = value.review?.general || ''
  draft.comments = Object.fromEntries(Object.entries(value.review?.comments || {}).filter(([id]) => ids.has(id)))
  revision.value = value.revision
  dirty.value = false
}, { immediate: true })
async function save() {
  saving.value = true; message.value = ''; failed.value = false
  try {
    const savedDraft = JSON.stringify(draft)
    const result = await $fetch('/__lesson-review', { method: 'PUT', query: { id }, body: { ...draft, revision: revision.value, sourceHash: lesson.value.sourceHash } })
    revision.value = result.revision; dirty.value = JSON.stringify(draft) !== savedDraft
    data.value.review = result.review
    message.value = dirty.value ? 'Vorige invoer opgeslagen; je nieuwste wijzigingen zijn nog niet bewaard.' : 'Opgeslagen op deze computer. De lestekst is nog niet gewijzigd.'
  } catch (error) { failed.value = true; message.value = error.data?.statusMessage || 'Opslaan mislukt. Je opmerkingen staan nog in dit scherm; kopieer ze voordat je herlaadt.' }
  finally { saving.value = false }
}
function guard(event) { if (dirty.value) { event.preventDefault(); event.returnValue = '' } }
onMounted(() => window.addEventListener('beforeunload', guard))
onBeforeUnmount(() => window.removeEventListener('beforeunload', guard))
onBeforeRouteLeave(() => !dirty.value || window.confirm('Je hebt niet-opgeslagen feedback. Wil je deze pagina verlaten?'))
useHead({ title: computed(() => `${lesson.value?.title || 'Lessen'} · Lokale review`), meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
</script>

<template>
  <DevelopmentNav />
  <div class="wrap review-page">
    <header class="hero"><div class="kicker">Docentwerkplaats · alleen lokaal</div><h1 class="title">Lessen <em>reviewen</em></h1><p class="lede">Lees de les, bekijk de docentnotities en noteer wat beter kan. Bewaar je feedback en verwerk die daarna in de Markdown-bron.</p></header>
    <nav class="review-nav"><NuxtLink :to="localePath('/ontwikkeling/lessen')">← Studentenweergave</NuxtLink><NuxtLink v-if="id" :to="localePath('/ontwikkeling/review')">Alle reviews</NuxtLink></nav>
    <p v-if="id && error" role="alert">Review kon niet worden geladen. Controleer de les-URL en open deze pagina via localhost of 127.0.0.1.</p>
    <p v-else-if="id && !lesson" role="status">Review laden…</p>
    <div v-else-if="!lesson" class="flows"><NuxtLink v-for="item in items" :key="item.id" class="flow" :to="localePath(`/ontwikkeling/review/${item.id}`)" style="--c:var(--w3)"><span class="step">Week {{ item.week }}<template v-if="item.block"> · blok {{ item.block }}</template></span><h3>{{ item.title }}</h3><span class="go">Open review →</span></NuxtLink></div>
    <template v-else>
      <h2 class="sec-h">{{ lesson.title }}</h2><p class="source">Bron: <code>{{ lesson.file }}</code></p>
      <p class="workflow">Feedback wordt bewaard in <code>.data/lesreviews/</code> en gaat niet mee naar de website. Laat de opmerkingen daarna verwerken in het genoemde bronbestand. De studentenweergave volgt de Markdown-tekst; HTML-commentaren blijven docentnotities.</p>
      <div v-if="stale" class="warning"><p role="alert">De Markdown is gewijzigd sinds deze review. Onderdeelnummers kunnen verschoven zijn. Vergelijk je opmerkingen met de oude verwijzingen hieronder. De vorige review wordt bij opslaan apart bewaard.</p><details><summary>Eerder opgeslagen opmerkingen en onderdelen</summary><ul><li v-for="s in data.review.sections" :key="s.id"><b>{{ s.id }} · {{ s.title }} (regel {{ s.line }})</b><p class="notes">{{ data.review.comments[s.id] || 'Geen opmerking' }}</p></li></ul></details><label><input v-model="acknowledged" type="checkbox" @change="dirty = true" /> Ik heb de opmerkingen aan de huidige onderdelen gekoppeld.</label></div>
      <div class="review-form"><label for="review-status">Reviewstatus</label><select id="review-status" v-model="draft.status"><option value="open">Nog te reviewen</option><option value="changes">Aanpassingen nodig</option><option value="reviewed">Bekeken</option></select><label for="review-general">Algemene opmerkingen</label><textarea id="review-general" v-model="draft.general" rows="4" maxlength="20000" placeholder="Bijvoorbeeld: de opdracht kan concreter, of de timing klopt nog niet." /></div>
      <div class="save-bar"><button type="button" :disabled="saving || !dirty || (stale && !acknowledged)" @click="save">{{ saving ? 'Opslaan…' : 'Bewaar feedback' }}</button><span v-if="!message">{{ dirty ? 'Niet-opgeslagen wijzigingen' : 'Geen openstaande wijzigingen' }}</span><span v-else :role="failed ? 'alert' : 'status'">{{ message }}</span><NuxtLink :to="localePath(`/ontwikkeling/lessen/${id}`)">Studentenweergave →</NuxtLink></div>
      <section v-for="(section, index) in lesson.sections" :id="section.id" :key="section.id" class="review-section">
        <header><span class="kicker">Onderdeel {{ index + 1 }} · bronregel {{ section.line }}</span><span v-if="section.teacherOnly" class="chip">Alleen docent</span><a :href="`#${section.id}`" :aria-label="`Link naar ${section.title}`">#</a></header>
        <div class="review-columns"><div class="student-text"><LessonText :html="section.html" /></div><aside><details v-if="section.notes" open><summary>Docentnotities & timing</summary><p class="notes">{{ section.notes }}</p></details><p v-else class="muted">Geen docentnotities bij dit onderdeel.</p><label :for="`comment-${section.id}`">Feedback op dit onderdeel</label><textarea :id="`comment-${section.id}`" v-model="draft.comments[section.id]" rows="5" maxlength="10000" placeholder="Wat wil je aanpassen in deze tekst of docentnotitie?" /></aside></div>
      </section>
      <button class="bottom-save" type="button" :disabled="saving || !dirty || (stale && !acknowledged)" @click="save">Bewaar feedback</button>
    </template>
  </div>
</template>

<style scoped>
.review-page{padding-bottom:60px}.review-nav{display:flex;gap:25px;margin:20px 0 30px}.source,.workflow{color:var(--ink2);font-size:14px;overflow-wrap:anywhere}.workflow{max-width:90ch}.source code,.workflow code{font-size:12px}.review-form{max-width:800px;display:grid;gap:8px;margin:24px 0}.review-form select{max-width:280px;margin-bottom:12px}
label{display:block;font-weight:600;margin-bottom:6px}textarea,select{font:inherit;color:var(--ink);background:var(--card);border:1px solid var(--line);border-radius:8px;padding:12px;width:100%}textarea{resize:vertical;min-height:90px}button{font:inherit;font-weight:600;color:var(--card);background:var(--w3);border:0;border-radius:8px;padding:12px 18px;cursor:pointer}button:disabled{opacity:.5;cursor:default}:focus-visible{outline:2px solid var(--w3);outline-offset:4px}
.save-bar{position:sticky;top:80px;z-index:20;display:flex;align-items:center;gap:18px;flex-wrap:wrap;padding:14px;border:1px solid var(--line);border-radius:12px;background:var(--paper2);box-shadow:var(--shadow);margin:24px 0;font-size:13px}.save-bar a{margin-left:auto}.review-section{margin:24px 0;border:1px solid var(--line);border-radius:14px;background:var(--card);overflow:hidden;scroll-margin-top:180px}.review-section>header{display:flex;gap:14px;align-items:center;padding:16px 24px;border-bottom:1px solid var(--line)}.review-section>header a{margin-left:auto}.review-section .kicker{font-size:10px;letter-spacing:.1em}.review-columns{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.student-text{padding:28px;min-width:0}.review-columns aside{padding:24px;background:var(--paper);border-left:1px solid var(--line);min-width:0}.notes{white-space:pre-wrap;overflow-wrap:anywhere;font-size:14px;line-height:1.7}.review-columns summary{font-weight:600;cursor:pointer}.review-columns details{margin-bottom:24px}.muted{color:var(--ink2);font-size:13px}.warning{padding:16px;border:1px solid var(--w2);border-radius:8px}.bottom-save{margin-top:16px}
@media(max-width:850px){.review-columns{grid-template-columns:1fr}.review-columns aside{border-left:0;border-top:1px solid var(--line)}.save-bar{position:static}.student-text{padding:20px}.review-section{scroll-margin-top:100px}}
</style>

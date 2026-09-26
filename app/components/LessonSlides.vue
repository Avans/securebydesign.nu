<script setup>
const props = defineProps({ lesson: { type: Object, required: true }, t: { type: Object, required: true } })
const route = useRoute()
const router = useRouter()
const deck = ref(null)
const panes = ref([])
const canFullscreen = ref(false)
const fullscreen = ref(false)
const fullscreenError = ref(false)
const overflowing = ref(false)
let observer
const total = computed(() => props.lesson.sections.length)
const current = computed(() => {
  const raw = typeof route.query.slide === 'string' ? route.query.slide : ''
  const n = /^\d+$/.test(raw) ? Number(raw) : 1
  return Math.max(0, Math.min(total.value - 1, Number.isSafeInteger(n) ? n - 1 : 0))
})
const active = computed(() => props.lesson.sections[current.value])
function activePane() { return panes.value.find(el => el?.dataset.slide === active.value?.id) }
function measure() {
  const pane = activePane()
  overflowing.value = !!pane && pane.scrollHeight > pane.clientHeight + 2
}
async function go(index, focusSlide = false) {
  const target = Math.max(0, Math.min(total.value - 1, index))
  if (target === current.value) return
  await router.replace({ path: route.path, query: { ...route.query, slide: String(target + 1) }, hash: '' })
  if (focusSlide) { await nextTick(); activePane()?.focus({ preventScroll: true }) }
}
function keyboard(event) {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
  const el = event.target
  if (el.closest('input,textarea,select,[contenteditable="true"]')) return
  // Leave horizontal scrolling in wide tables to their own keyboard handler.
  if (el.closest('.table-scroll,pre')) return
  const targets = { ArrowRight: current.value + 1, ArrowLeft: current.value - 1, Home: 0, End: total.value - 1 }
  if (!(event.key in targets)) return
  event.preventDefault()
  go(targets[event.key], true)
}
async function toggleFullscreen() {
  fullscreenError.value = false
  try {
    if (document.fullscreenElement === deck.value) await document.exitFullscreen()
    else await deck.value.requestFullscreen()
  } catch { fullscreenError.value = true }
}
function onFullscreen() { fullscreen.value = document.fullscreenElement === deck.value; nextTick(measure) }
function followLegacyHash() {
  if (!route.hash || route.query.slide) return
  const index = props.lesson.sections.findIndex(s => `#${s.id}` === route.hash)
  if (index >= 0) router.replace({ path: route.path, query: { ...route.query, slide: String(index + 1) }, hash: '' })
}
watch(current, async () => {
  await nextTick()
  const pane = activePane()
  if (pane) pane.scrollTop = 0
  measure()
})
watch(() => route.hash, followLegacyHash)
onMounted(() => {
  canFullscreen.value = !!document.fullscreenEnabled && typeof deck.value.requestFullscreen === 'function'
  document.addEventListener('fullscreenchange', onFullscreen)
  observer = new ResizeObserver(measure)
  for (const pane of panes.value) {
    observer.observe(pane)
    if (pane.firstElementChild) observer.observe(pane.firstElementChild)
  }
  followLegacyHash()
  measure()
})
onBeforeUnmount(() => {
  observer?.disconnect()
  document.removeEventListener('fullscreenchange', onFullscreen)
})
</script>

<template>
  <section ref="deck" class="slide-deck" :data-week="lesson.week" :aria-label="t.presentation" @keydown="keyboard">
    <div class="deck-heading">
      <label for="slide-picker">{{ t.chooseSlide }}</label>
      <select id="slide-picker" :value="current" @change="go(Number($event.target.value))"><option v-for="(s, index) in lesson.sections" :key="s.id" :value="index">{{ index + 1 }} · {{ s.title }}</option></select>
      <button v-if="canFullscreen" type="button" @click="toggleFullscreen">{{ fullscreen ? t.exitFullscreen : t.fullscreen }}</button>
    </div>
    <p v-if="fullscreenError" class="deck-message" role="status">{{ t.fullscreenError }}</p>
    <div class="slide-stage">
      <section v-for="(s, index) in lesson.sections" v-show="index === current" :key="s.id" class="slide" :aria-label="`${t.slide} ${index + 1}: ${s.title}`">
        <div class="slide-label">{{ t.week }} {{ lesson.week }} · {{ t.block }} {{ lesson.block }}<span>{{ String(index + 1).padStart(2, '0') }} / {{ total }}</span></div>
        <div ref="panes" :data-slide="s.id" class="slide-scroll" tabindex="0" :aria-label="`${t.slide}: ${s.title}`" :aria-describedby="index === current ? 'slide-keyboard-help' : undefined"><LessonText :html="s.html" /></div>
      </section>
    </div>
    <div class="slide-controls">
      <button type="button" :disabled="current === 0" @click="go(current - 1)"><span aria-hidden="true">← </span>{{ t.previousSlide }}</button>
      <span class="slide-counter" aria-live="polite" aria-atomic="true">{{ t.slide }} {{ current + 1 }} / {{ total }}</span>
      <button type="button" :disabled="current === total - 1" @click="go(current + 1)">{{ t.nextSlide }}<span aria-hidden="true"> →</span></button>
    </div>
    <div class="slide-progress" aria-hidden="true"><span :style="{ width: `${(current + 1) / total * 100}%` }" /></div>
    <p id="slide-keyboard-help" class="keyboard-help">{{ t.slideKeys }}<span v-if="overflowing">{{ ' ' + t.scrollSlide }}</span></p>
  </section>
</template>

<style scoped>
.slide-deck{--slide-accent:var(--w1);margin-top:18px;min-width:0}.slide-deck[data-week="2"]{--slide-accent:var(--w2)}.slide-deck[data-week="3"]{--slide-accent:var(--w3)}.slide-deck[data-week="4"]{--slide-accent:var(--w4)}
.deck-heading{display:flex;align-items:center;gap:12px;margin-bottom:14px}.deck-heading label{font-weight:600;font-size:13px;flex-shrink:0}.deck-heading select{min-width:0;flex:1;max-width:650px;padding:10px 12px;font:inherit;background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:9px}.deck-heading>button{margin-left:auto}
button{font:inherit;font-weight:600;background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:9px;padding:10px 16px;cursor:pointer}button:disabled{opacity:.4;cursor:default}button:not(:disabled):hover{border-color:var(--slide-accent)}:focus-visible{outline:2px solid var(--slide-accent);outline-offset:3px}
.slide-stage{background:var(--card);border:1px solid var(--line);border-top:5px solid var(--slide-accent);border-radius:16px;box-shadow:var(--shadow);overflow:hidden}
.slide{height:clamp(360px,55svh,680px);display:flex;flex-direction:column;padding:24px clamp(20px,4vw,60px) 28px;min-width:0}.slide-label{display:flex;justify-content:space-between;gap:16px;margin-bottom:22px;color:var(--slide-accent);font:11px 'JetBrains Mono',monospace;letter-spacing:.08em;text-transform:uppercase}.slide-label span{white-space:nowrap}.slide-scroll{min-height:0;overflow:auto;flex:1;padding:5px 12px 4px 4px;scrollbar-gutter:stable;overscroll-behavior:contain}.slide-scroll :deep(.lesson-text){font-size:clamp(18px,1.7vw,24px);line-height:1.55;max-width:82ch;margin:auto}.slide-scroll :deep(h2){font-size:clamp(28px,3vw,44px);line-height:1.12}.slide-scroll :deep(h3){font-size:clamp(23px,2.4vw,34px)}.slide-scroll :deep(table){font-size:clamp(15px,1.3vw,19px)}
.slide-controls{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:16px 0 12px}.slide-counter{font:12px 'JetBrains Mono',monospace;color:var(--ink2);text-align:center}.slide-progress{height:3px;background:var(--line);border-radius:3px;overflow:hidden}.slide-progress span{display:block;height:100%;background:var(--slide-accent)}.keyboard-help,.deck-message{font-size:12px;color:var(--ink2);margin:10px 0 0}
.slide-deck:fullscreen{display:flex;flex-direction:column;background:var(--paper);padding:22px clamp(16px,3vw,48px);overflow:auto}.slide-deck:fullscreen .slide-stage{flex:1;min-height:0}.slide-deck:fullscreen .slide{height:100%}.slide-deck:fullscreen .slide-scroll :deep(.lesson-text){font-size:clamp(20px,2vw,30px)}
@media(max-width:560px){.deck-heading{flex-wrap:wrap}.deck-heading label{width:100%}.deck-heading select{width:100%;max-width:none}.deck-heading>button{margin-left:0;font-size:12px;padding:9px}.slide{height:55svh;min-height:340px;padding:18px 14px}.slide-label{font-size:10px;margin-bottom:18px}.slide-scroll{padding:4px;scrollbar-gutter:auto}.slide-scroll :deep(.lesson-text){font-size:17px}.slide-scroll :deep(h2){font-size:27px}.slide-scroll :deep(h3){font-size:23px}.slide-controls{gap:8px}.slide-controls button{font-size:12px;padding:11px 10px}.slide-counter{font-size:11px;white-space:nowrap}.slide-deck:fullscreen .slide{min-height:0}}
@media print{.deck-heading,.slide-controls,.slide-progress,.keyboard-help,.deck-message{display:none}.slide-stage{border:0;box-shadow:none;overflow:visible}.slide{display:block!important;height:auto;min-height:0;padding:12px 0;break-after:page;break-inside:avoid}.slide:last-child{break-after:auto}.slide-scroll{overflow:visible;padding:0}.slide-scroll :deep(.lesson-text){font-size:13px}.slide-scroll :deep(h2){font-size:24px}.slide-scroll :deep(h3){font-size:19px}.slide-scroll :deep(table){font-size:11px}.slide-label{font-size:9px}}
</style>

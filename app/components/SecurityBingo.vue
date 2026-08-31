<template>
  <section class="bingo">
    <div class="wrap">
      <header class="hero screen-only">
        <div class="kicker">{{ ui.kicker }}</div>
        <h1>{{ ui.titleLead }}<em>{{ ui.titleEm }}</em></h1>
        <p class="lede">{{ ui.lede }}</p>
        <p v-if="ui.dutchOnly" class="dutch-only">{{ ui.dutchOnly }}</p>
        <div class="chips">
          <span v-for="(c, i) in ui.chips" :key="i" class="chip">
            <b v-if="i === 0">{{ c }}</b>
            <template v-else>{{ c }}</template>
          </span>
        </div>
        <NuxtLink class="back" :to="localePath('/fundament')">{{ ui.back }}</NuxtLink>
      </header>

      <nav class="tabs screen-only">
        <button type="button" :class="{ on: tab === 'play' }" @click="tab = 'play'">{{ ui.tabs.play }}</button>
        <button type="button" :class="{ on: tab === 'print' }" @click="tab = 'print'">{{ ui.tabs.print }}</button>
      </nav>

      <!-- ══════════ digibord ══════════ -->
      <div v-show="tab === 'play'" class="screen-only">
        <div ref="boardEl" class="board">
          <div class="board-face">
            <div v-if="!current" class="idle">
              <h2>{{ ui.play.idleTitle }}</h2>
              <p>{{ ui.play.idleBody }}</p>
            </div>
            <template v-else>
              <div class="num">{{ current.n }}</div>
              <p class="stel">{{ current.t }}</p>
              <p v-if="showAsk" class="ask">{{ current.d }}</p>
            </template>
            <div class="rule">{{ ui.play.rule }}</div>
          </div>

          <div class="pool" :aria-label="ui.play.drawnTitle">
            <span
              v-for="it in deck.items"
              :key="it.n"
              class="pn"
              :class="{ hit: drawn.includes(it.n), now: current && current.n === it.n }"
            >{{ it.n }}</span>
          </div>

          <div class="board-bar">
            <button class="btn" type="button" :disabled="atEnd" @click="next">
              {{ pos < 0 ? ui.play.draw : ui.play.next }}
            </button>
            <button class="btn ghost" type="button" :disabled="pos < 0" @click="undo">{{ ui.play.undo }}</button>
            <button class="btn ghost" type="button" @click="reset">{{ ui.play.reset }}</button>
            <label class="opt"><input v-model="showAsk" type="checkbox" /> {{ ui.play.showAsk }}</label>
            <span class="count"><b>{{ drawn.length }}</b> / {{ deck.items.length }} {{ ui.play.counter }}</span>
            <button class="btn ghost" type="button" @click="toggleFull">
              {{ isFull ? ui.play.exit : ui.play.full }}
            </button>
          </div>
          <p class="board-hint">{{ atEnd ? ui.play.done : ui.play.hint }}</p>
        </div>
      </div>

      <!-- ══════════ kaarten printen ══════════ -->
      <div v-show="tab === 'print'" class="bar screen-only">
        <button class="btn" type="button" @click="exportPdf">
          <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
            <path fill="currentColor" d="M7 3h10v4H7V3Zm-3 6h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2v4H6v-4H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Zm4 8v4h8v-4H8Z" />
          </svg>
          {{ ui.print.exportBtn }}
        </button>

        <div class="opts">
          <label class="opt num-opt">
            <span class="opt-lbl">{{ ui.print.count }}</span>
            <input v-model.number="count" type="number" min="1" max="120" />
          </label>
          <div class="opt-group">
            <span class="opt-lbl">{{ ui.print.size }}</span>
            <button type="button" class="sz-chip" :class="{ on: size === 4 }" @click="size = 4">{{ ui.print.size4 }}</button>
            <button type="button" class="sz-chip" :class="{ on: size === 5 }" @click="size = 5">{{ ui.print.size5 }}</button>
          </div>
          <label class="opt num-opt">
            <span class="opt-lbl">{{ ui.print.seed }}</span>
            <input v-model="seed" type="text" size="8" />
          </label>
          <label class="opt"><input v-model="withList" type="checkbox" /> {{ ui.print.optList }}</label>
        </div>

        <p class="hint">{{ ui.print.sizeHint }} {{ ui.print.seedHint }}</p>
        <p class="hint">{{ ui.print.exportHint }}</p>
      </div>

      <template v-if="tab === 'print'">
        <h2 class="sec-h screen-only">{{ ui.print.title }}</h2>
        <p class="sec-sub screen-only">{{ ui.print.sub }}</p>

        <div class="sheets">
          <section v-for="(sheet, si) in sheets" :key="si" class="sheet">
            <div class="sheet-lbl screen-only">{{ ui.print.sheet }} {{ si + 1 }} / {{ sheets.length }}</div>
            <div class="sheet-in">
              <article v-for="c in sheet" :key="c.id" class="bc" :class="`g${size}`">
                <div class="bc-top">
                  <div>
                    <h3>{{ deck.card.title }}</h3>
                    <p class="bc-sub">{{ deck.card.sub }}</p>
                  </div>
                  <div class="bc-meta">
                    <span class="bc-nr">{{ deck.card.nr }} {{ String(c.id).padStart(2, '0') }}</span>
                    <span class="bc-seed">{{ seed }}</span>
                  </div>
                </div>
                <div class="bc-grid">
                  <div v-for="(cell, ci) in c.cells" :key="ci" class="bc-cell" :class="{ free: cell === 0 }">
                    <template v-if="cell === 0">★</template>
                    <template v-else>{{ cell }}</template>
                  </div>
                </div>
                <div class="bc-foot">
                  <span class="bc-name">{{ deck.card.name }}: <i></i></span>
                  <span class="bc-note">{{ deck.card.foot }}</span>
                </div>
              </article>
            </div>
          </section>
        </div>
      </template>

      <!-- ══════════ docentmateriaal (altijd op het scherm) ══════════ -->
      <div class="how screen-only">
        <div>
          <h2>{{ ui.howTitle }}</h2>
          <ol>
            <li v-for="(h, i) in ui.how" :key="i">{{ h }}</li>
          </ol>
        </div>
        <div class="make-box">
          <h3>{{ ui.makeTitle }}</h3>
          <ul>
            <li v-for="(m, i) in ui.make" :key="i">{{ m }}</li>
          </ul>
        </div>
      </div>

      <h2 class="sec-h screen-only">{{ ui.catTitle }}</h2>
      <p class="sec-sub screen-only">{{ ui.catSub }}</p>
      <div class="cats screen-only">
        <div v-for="c in catRows" :key="c.code" class="cat" :style="{ '--c': c.color }">
          <span class="cat-n">{{ c.n }}</span>
          <span class="cat-t">{{ c.label }}</span>
          <span class="cat-bar"><i :style="{ width: (c.n / deck.items.length) * 100 * 2.6 + '%' }"></i></span>
        </div>
      </div>

      <div class="debrief screen-only">
        <h2>{{ ui.debriefTitle }}</h2>
        <ul>
          <li v-for="(d, i) in ui.debrief" :key="i">{{ d }}</li>
        </ul>
      </div>

      <section class="key" :class="{ 'print-key': withList && tab === 'print' }">
        <h2 class="sec-h">{{ ui.keyTitle }}</h2>
        <p class="sec-sub">{{ ui.keySub }}</p>
        <div class="key-wrap">
          <table class="key-tbl">
            <thead>
              <tr><th v-for="(h, i) in ui.keyHead" :key="i">{{ h }}</th></tr>
            </thead>
            <tbody>
              <tr v-for="it in deck.items" :key="it.n">
                <td>{{ it.n }}</td>
                <td>{{ it.t }}</td>
                <td>{{ deck.cats[it.k][0] }}</td>
                <td>{{ it.d }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div class="next screen-only">
        <div>
          <h2>{{ ui.nextTitle }}</h2>
          <p>{{ ui.nextBody }}</p>
        </div>
        <NuxtLink class="next-btn" :to="localePath('/dilemmakaarten')">{{ ui.nextLink }}</NuxtLink>
      </div>

      <footer class="screen-only">
        <span>{{ deck.block }} · {{ deck.items.length }} {{ locale === 'en' ? 'statements' : 'stellingen' }}</span>
        <NuxtLink :to="localePath('/fundament')">{{ ui.back }}</NuxtLink>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({ deck: { type: Object, required: true } })

const { locale, localePath } = useI18nNav()
const ui = computed(() => props.deck.ui[locale.value])

const tab = ref('play')

/* ---------- digibord ---------- */
// The draw order is shuffled on the client only: doing it during SSR would make
// the server and the browser disagree about the first card.
const order = ref([])
const pos = ref(-1)
const showAsk = ref(true)

const byNr = computed(() => Object.fromEntries(props.deck.items.map((i) => [i.n, i])))
const current = computed(() => (pos.value < 0 ? null : byNr.value[order.value[pos.value]]))
const drawn = computed(() => order.value.slice(0, pos.value + 1))
const atEnd = computed(() => pos.value >= order.value.length - 1)

function shuffle(arr, rnd = Math.random) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function reset() {
  order.value = shuffle(props.deck.items.map((i) => i.n))
  pos.value = -1
}
function next() {
  if (!atEnd.value) pos.value++
}
function undo() {
  if (pos.value >= 0) pos.value--
}

/* ---------- volledig scherm ---------- */
const boardEl = ref(null)
const isFull = ref(false)

function toggleFull() {
  if (!import.meta.client) return
  if (document.fullscreenElement) document.exitFullscreen()
  else boardEl.value?.requestFullscreen?.()
}
function onFullChange() {
  isFull.value = !!document.fullscreenElement
}

function onKey(e) {
  if (tab.value !== 'play') return
  const tag = e.target?.tagName
  if (tag === 'INPUT' || tag === 'TEXTAREA') return
  if (e.key === ' ' || e.key === 'ArrowRight') {
    e.preventDefault()
    next()
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault()
    undo()
  }
}

onMounted(() => {
  reset()
  window.addEventListener('keydown', onKey)
  document.addEventListener('fullscreenchange', onFullChange)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.removeEventListener('fullscreenchange', onFullChange)
})

/* ---------- bingokaarten ---------- */
const count = ref(30)
const size = ref(4)
const seed = ref('W1B8')
const withList = ref(false)

// Seeded PRNG so the same set code always yields the same cards — you can reprint
// card 12 for the student who was ill without regenerating the whole set.
function hashStr(s) {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}
function mulberry32(a) {
  return function () {
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const cards = computed(() => {
  const n = Math.min(Math.max(Number(count.value) || 1, 1), 120)
  const per = size.value === 5 ? 24 : 16
  const pool = props.deck.items.map((i) => i.n)
  const out = []
  for (let c = 0; c < n; c++) {
    const rnd = mulberry32(hashStr(`${seed.value}#${size.value}#${c}`))
    const cells = shuffle(pool, rnd).slice(0, per)
    if (size.value === 5) cells.splice(12, 0, 0) // 0 = vrij vakje in het midden
    out.push({ id: c + 1, cells })
  }
  return out
})

// Two cards per A4 — an A5 card is the smallest size you can still cross off with a pen.
const sheets = computed(() => {
  const out = []
  for (let i = 0; i < cards.value.length; i += 2) out.push(cards.value.slice(i, i + 2))
  return out
})

/* ---------- categorieverdeling ---------- */
const catRows = computed(() =>
  Object.entries(props.deck.cats).map(([code, [label, color]]) => ({
    code,
    label,
    color,
    n: props.deck.items.filter((i) => i.k === code).length
  }))
)

function exportPdf() {
  if (import.meta.client) window.print()
}
</script>

<style scoped>
.bingo{
  --paper:#f3ede1; --paper2:#ece4d4; --card:#fbf7ef; --ink:#211d18; --ink2:#5a5249; --line:#cdc2ad;
  --w1:#bd7a1c; --w2:#b03a2c; --w3:#1f6f68; --w4:#56488a;
  --accent:#b03a2c;
  --shadow:0 1px 0 rgba(33,29,24,.04), 0 8px 22px -16px rgba(33,29,24,.4);
}
*{box-sizing:border-box}
.wrap{max-width:1340px; margin:0 auto; padding:0 24px}

header.hero{padding:52px 0 22px}
.kicker{font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:.22em; text-transform:uppercase; color:var(--accent); font-weight:500}
h1{font-family:'Fraunces',serif; font-weight:600; font-size:clamp(38px,6vw,74px); line-height:.95; margin:.16em 0 .08em; letter-spacing:-.01em}
h1 em{font-style:italic; color:var(--w3)}
.lede{max-width:64ch; font-size:clamp(15px,1.6vw,18px); color:var(--ink2); margin:.4em 0 1.1em}
.dutch-only{max-width:64ch; font-size:13px; color:var(--ink2); border-left:3px solid var(--w1); padding-left:10px; margin:-.4em 0 1.1em}
.chips{display:flex; flex-wrap:wrap; gap:8px}
.chip{font-family:'JetBrains Mono',monospace; font-size:11.5px; padding:6px 11px; border:1px solid var(--line); border-radius:999px; background:rgba(251,247,239,.6); color:var(--ink2)}
.chip b{color:var(--ink); font-weight:500}
.back{display:inline-block; margin-top:16px; font-size:13.5px; font-weight:600; text-decoration:none; border-bottom:2px solid var(--w3)}
.back:hover{background:var(--w3); color:#fff}

/* ---------- tabs ---------- */
.tabs{display:flex; gap:6px; margin:14px 0 18px; border-bottom:1px solid var(--line)}
.tabs button{
  cursor:pointer; border:1px solid transparent; border-bottom:none; background:none; color:var(--ink2);
  font:600 14px 'Hanken Grotesk',system-ui,sans-serif; padding:10px 16px; border-radius:10px 10px 0 0;
  margin-bottom:-1px; transition:.15s;
}
.tabs button:hover{color:var(--ink)}
.tabs button.on{background:var(--card); border-color:var(--line); color:var(--ink)}

/* ---------- digibord ---------- */
.board{
  background:var(--card); border:1px solid var(--line); border-radius:18px;
  box-shadow:var(--shadow); padding:22px; display:flex; flex-direction:column; gap:16px;
}
.board:fullscreen{border-radius:0; justify-content:center; padding:3vh 4vw; background:var(--paper)}
.board-face{
  position:relative; min-height:min(52vh,440px); border-radius:14px;
  background:var(--paper2); border:1px dashed var(--line);
  padding:34px 30px 56px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center;
}
.board:fullscreen .board-face{flex:1; min-height:0}
.idle h2{font-family:'Fraunces',serif; font-weight:600; font-size:clamp(22px,3vw,32px); margin:0 0 6px}
.idle p{margin:0; color:var(--ink2); font-size:15px}
.num{
  font-family:'JetBrains Mono',monospace; font-weight:500; line-height:1;
  font-size:clamp(64px,13vw,190px); color:var(--accent); letter-spacing:-.02em;
}
.stel{
  font-family:'Fraunces',serif; font-weight:600; letter-spacing:-.01em;
  font-size:clamp(21px,3.4vw,46px); line-height:1.14; margin:.28em 0 0; max-width:22ch;
}
.ask{
  margin:.9em 0 0; color:var(--ink2); font-style:italic;
  font-size:clamp(14px,1.5vw,22px); max-width:34ch;
}
.rule{
  position:absolute; left:0; right:0; bottom:14px;
  font-family:'JetBrains Mono',monospace; font-size:clamp(9.5px,1vw,13px);
  letter-spacing:.1em; text-transform:uppercase; color:var(--ink2); opacity:.8;
}

.pool{display:flex; flex-wrap:wrap; gap:4px; justify-content:center}
.pn{
  width:30px; height:26px; display:grid; place-items:center; border-radius:6px;
  font:500 12px 'JetBrains Mono',monospace; color:var(--ink2);
  background:rgba(33,29,24,.04); border:1px solid transparent; opacity:.45; transition:.15s;
}
.pn.hit{opacity:1; background:var(--w3); color:#fff}
.pn.now{background:var(--accent); color:#fff; transform:scale(1.14)}

.board-bar{display:flex; flex-wrap:wrap; align-items:center; gap:10px 16px}
.board-hint{margin:0; font-size:12px; color:var(--ink2); font-family:'JetBrains Mono',monospace; letter-spacing:.04em}
.count{font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--ink2)}
.count b{color:var(--ink); font-size:17px}

.btn{
  display:inline-flex; align-items:center; gap:8px; cursor:pointer;
  font:600 14px/1 'Hanken Grotesk',system-ui,sans-serif; color:#fff; background:var(--accent);
  border:1px solid var(--accent); border-radius:999px; padding:11px 18px; box-shadow:var(--shadow);
  transition:transform .14s, box-shadow .14s;
}
.btn:hover:not(:disabled){transform:translateY(-1px); box-shadow:0 14px 26px -16px rgba(33,29,24,.6)}
.btn:disabled{opacity:.4; cursor:not-allowed}
.btn.ghost{background:transparent; color:var(--ink2); border-color:var(--line); box-shadow:none}
.btn.ghost:hover:not(:disabled){color:var(--ink); border-color:var(--accent)}

/* ---------- printbalk ---------- */
.bar{
  position:sticky; top:0; z-index:50; margin:8px 0 0; padding:14px 0 12px;
  background:linear-gradient(var(--paper) 78%,rgba(243,237,225,0)); backdrop-filter:blur(2px);
  display:flex; flex-wrap:wrap; align-items:center; gap:12px 18px;
}
.opts{display:flex; flex-wrap:wrap; align-items:center; gap:8px 16px}
.opt-group{display:inline-flex; align-items:center; gap:6px}
.opt-lbl{font-family:'JetBrains Mono',monospace; font-size:10.5px; letter-spacing:.06em; text-transform:uppercase; color:var(--ink2)}
.sz-chip{
  cursor:pointer; border:1px solid var(--line); border-radius:999px; padding:7px 12px;
  background:rgba(251,247,239,.7); color:var(--ink2); font:500 12px 'JetBrains Mono',monospace; transition:.15s;
}
.sz-chip.on{background:var(--w3); border-color:var(--w3); color:#fff}
.opt{display:inline-flex; align-items:center; gap:7px; font-size:13.5px; color:var(--ink2); cursor:pointer}
.opt input[type=checkbox]{accent-color:var(--accent); width:15px; height:15px}
.num-opt input{
  width:76px; padding:6px 9px; border:1px solid var(--line); border-radius:8px;
  background:var(--card); color:var(--ink); font:500 13px 'JetBrains Mono',monospace;
}
.hint{flex:1 1 260px; margin:0; font-size:12px; color:var(--ink2); min-width:220px}

.sec-h{font-family:'Fraunces',serif; font-weight:600; font-size:clamp(22px,3vw,30px); letter-spacing:-.01em; margin:46px 0 4px}
.sec-sub{color:var(--ink2); max-width:78ch; margin:0 0 18px; font-size:14px}

/* ---------- bingokaarten (A5-formaat, 2 per A4) ---------- */
.sheets{display:flex; flex-direction:column; gap:26px}
.sheet-lbl{font-family:'JetBrains Mono',monospace; font-size:10.5px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink2); margin-bottom:8px}
.sheet-in{display:flex; flex-direction:column; gap:10px}

.bc{
  width:190mm; height:133mm; flex:none; overflow:hidden;
  background:var(--card); border:1px solid var(--line); border-radius:3mm; box-shadow:var(--shadow);
  border-top:2.4mm solid var(--w1);
  padding:5mm 6mm 4mm; display:flex; flex-direction:column;
}
.bc-top{display:flex; align-items:flex-start; justify-content:space-between; gap:6mm}
.bc-top h3{font-family:'Fraunces',serif; font-weight:600; font-size:19px; margin:0; letter-spacing:-.01em}
.bc-sub{margin:.6mm 0 0; font-size:10.5px; color:var(--ink2); max-width:105mm}
.bc-meta{text-align:right; display:flex; flex-direction:column; gap:.8mm; flex:none}
.bc-nr{font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--w1); font-weight:500; text-transform:uppercase; letter-spacing:.06em}
.bc-seed{font-family:'JetBrains Mono',monospace; font-size:8px; color:var(--ink2); letter-spacing:.08em}

.bc-grid{flex:1; display:grid; gap:1.4mm; margin:3.4mm 0 2.6mm}
.bc.g4 .bc-grid{grid-template-columns:repeat(4,1fr)}
.bc.g5 .bc-grid{grid-template-columns:repeat(5,1fr)}
.bc-cell{
  display:grid; place-items:center; border:.4mm solid var(--line); border-radius:1.6mm;
  background:#fff; font-family:'JetBrains Mono',monospace; font-weight:500; color:var(--ink);
}
.bc.g4 .bc-cell{font-size:26px}
.bc.g5 .bc-cell{font-size:21px}
.bc-cell.free{color:var(--w1); border-style:dashed; background:rgba(189,122,28,.07)}

.bc-foot{display:flex; align-items:center; justify-content:space-between; gap:6mm; font-size:9.5px; color:var(--ink2)}
.bc-name{display:flex; align-items:baseline; gap:2mm; font-family:'JetBrains Mono',monospace; letter-spacing:.05em; text-transform:uppercase; flex:1}
.bc-name i{flex:1; border-bottom:.3mm solid var(--line); height:3.6mm}
.bc-note{font-style:italic; flex:none}

/* ---------- docentmateriaal ---------- */
.how{display:grid; grid-template-columns:1.6fr 1fr; gap:18px; margin:46px 0 6px; align-items:start}
.how h2{font-family:'Fraunces',serif; font-weight:600; font-size:20px; margin:0 0 8px}
.how ol{margin:0; padding-left:20px; display:flex; flex-direction:column; gap:8px}
.how li{font-size:13.5px; color:var(--ink2); max-width:76ch}
.make-box{background:rgba(189,122,28,.08); border:1px dashed var(--w1); border-radius:14px; padding:16px 18px}
.make-box h3{margin:0 0 8px; font-size:12px; font-family:'JetBrains Mono',monospace; letter-spacing:.04em; text-transform:uppercase; color:#7a5410}
.make-box ul{margin:0; padding-left:0; list-style:none; display:flex; flex-direction:column; gap:6px}
.make-box li{font-size:12.5px; color:var(--ink2); padding-left:18px; position:relative}
.make-box li::before{content:"✎"; position:absolute; left:0; color:var(--w1)}

.cats{display:flex; flex-direction:column; gap:7px; max-width:720px}
.cat{display:grid; grid-template-columns:34px 1fr 1fr; align-items:center; gap:12px}
.cat-n{font-family:'JetBrains Mono',monospace; font-size:14px; color:var(--c); font-weight:500}
.cat-t{font-size:13.5px; color:var(--ink2)}
.cat-bar{height:8px; background:rgba(33,29,24,.06); border-radius:999px; overflow:hidden}
.cat-bar i{display:block; height:100%; background:var(--c); border-radius:999px}

.debrief{margin:40px 0 0; background:rgba(31,111,104,.07); border:1px solid rgba(31,111,104,.28); border-radius:14px; padding:18px 20px}
.debrief h2{font-family:'Fraunces',serif; font-weight:600; font-size:20px; margin:0 0 8px}
.debrief ul{margin:0; padding-left:18px; display:flex; flex-direction:column; gap:7px}
.debrief li{font-size:13.5px; color:var(--ink2); max-width:82ch}

.key-wrap{overflow-x:auto; border:1px solid var(--line); border-radius:12px; background:var(--card); box-shadow:var(--shadow)}
.key-tbl{border-collapse:collapse; width:100%; min-width:780px; font-size:12.5px}
.key-tbl th,.key-tbl td{padding:7px 10px; text-align:left; border-bottom:1px solid var(--line); vertical-align:top}
.key-tbl thead th{font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.05em; text-transform:uppercase; color:var(--ink2); background:var(--paper2)}
.key-tbl td:first-child{font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--accent); text-align:right; width:34px}
.key-tbl td:nth-child(3){color:var(--ink2); white-space:nowrap}
.key-tbl td:nth-child(4){color:var(--ink2); font-style:italic}
.key-tbl tbody tr:hover{background:rgba(33,29,24,.03)}

.next{
  margin:44px 0 0; display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:16px;
  background:var(--card); border:1px solid var(--line); border-radius:14px; padding:20px 22px; box-shadow:var(--shadow);
}
.next h2{font-family:'Fraunces',serif; font-weight:600; font-size:20px; margin:0 0 4px}
.next p{margin:0; color:var(--ink2); font-size:13.5px; max-width:70ch}
.next-btn{
  flex:none; text-decoration:none; font:600 14px 'Hanken Grotesk',system-ui,sans-serif; color:#fff;
  background:var(--w3); border-radius:999px; padding:11px 18px;
}
.next-btn:hover{background:var(--ink)}

footer{margin:50px 0 40px; padding-top:18px; border-top:1px solid var(--line); color:var(--ink2); font-size:12.5px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px}
footer a{text-decoration:none; font-weight:600; border-bottom:2px solid var(--w3)}

@media(max-width:1000px){ .bc{width:100%; height:auto; aspect-ratio:190/133} }
@media(max-width:900px){ .how{grid-template-columns:1fr} }
@media(max-width:560px){ .wrap{padding:0 16px} .cat{grid-template-columns:28px 1fr; } .cat-bar{display:none} }
@media(prefers-reduced-motion:reduce){*{animation:none!important; transition:none!important}}

/* ---------- print: 2 bingokaarten per A4, verder niets ---------- */
@media print{
  .bingo{background:#fff}
  .screen-only{display:none !important}
  .wrap{max-width:none; padding:0; margin:0}
  .sheets{display:block; gap:0}
  .sheet{break-after:page; page-break-after:always}
  .sheet:last-of-type{break-after:auto; page-break-after:auto}
  .sheet-in{display:block}
  /* twee kaarten van 130 mm passen samen binnen de bedrukbare hoogte van een A4 */
  .bc{
    width:190mm; height:130mm; box-shadow:none; border-radius:0;
    border:.2mm solid #b9ae98; border-top:2.4mm solid var(--w1);
    background:#fff; margin:0 auto; break-inside:avoid; page-break-inside:avoid;
  }
  .bc + .bc{margin-top:4mm; border-top-style:solid}
  .bc-cell{border-color:#b9ae98}
  /* de stellingenlijst is een optioneel laatste vel */
  .key{display:none}
  .key.print-key{display:block; break-before:page; page-break-before:always}
  .key.print-key .sec-h{font-size:16pt; margin:0 0 4pt}
  .key.print-key .sec-sub{font-size:9pt; margin-bottom:8pt}
  .key-wrap{border:none; border-radius:0; box-shadow:none; overflow:visible}
  .key-tbl{min-width:0; width:100%; font-size:8pt}
  .key-tbl th,.key-tbl td{padding:2.6pt 5pt; border-bottom:.2mm solid #cdc2ad}
  .key-tbl thead th{background:#ece4d4}
}
</style>

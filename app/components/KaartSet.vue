<template>
  <section class="kaartset" :class="`kind-${deck.kind}`">
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

      <div class="bar screen-only">
        <button class="btn" type="button" @click="exportPdf">
          <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
            <path fill="currentColor" d="M7 3h10v4H7V3Zm-3 6h16a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2v4H6v-4H4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1Zm4 8v4h8v-4H8Z" />
          </svg>
          {{ ui.exportBtn }}
        </button>

        <div class="opts">
          <div v-if="deck.kind === 'principes'" class="opt-group">
            <span class="opt-lbl">{{ ui.weekFilter }}</span>
            <button
              v-for="w in [1, 2, 3]"
              :key="w"
              type="button"
              class="wk-chip"
              :class="{ on: weeks.includes(w) }"
              :style="{ '--c': `var(--w${w})` }"
              :aria-pressed="weeks.includes(w)"
              @click="toggleWeek(w)"
            >{{ w }}</button>
          </div>

          <label v-if="deck.kind === 'dreigingen'" class="opt">
            <input v-model="withBlank" type="checkbox" /> {{ ui.optBlank }}
          </label>
          <label class="opt">
            <input v-model="withKey" type="checkbox" /> {{ ui.optKey }}
          </label>
        </div>

        <p class="hint">{{ ui.exportHint }}</p>
      </div>

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

      <h2 class="sec-h screen-only">{{ ui.cardsTitle }}</h2>
      <p class="sec-sub screen-only">{{ ui.cardsSub }}</p>

      <p v-if="!cards.length" class="empty screen-only">{{ ui.empty }}</p>

      <div class="sheets">
        <section v-for="(sheet, si) in sheets" :key="si" class="sheet">
          <div class="sheet-lbl screen-only">{{ ui.sheet }} {{ si + 1 }} / {{ sheets.length }}</div>
          <div class="grid" :style="{ '--cols': fmt.cols, '--cw': fmt.w, '--ch': fmt.h }">
            <article
              v-for="c in sheet"
              :key="c.id"
              class="tc"
              :class="{ blank: c.blank }"
              :style="{ '--c': cardColor(c), '--cw': fmt.w, '--ch': fmt.h }"
            >
              <div class="tc-top">
                <span class="tc-id">{{ c.id }}</span>
                <span class="tc-tag">{{ cardTag(c) }}</span>
              </div>
              <h3 class="tc-t">{{ c.t }}</h3>
              <div v-if="c.sp" class="tc-sp">{{ c.sp }}</div>

              <template v-if="!c.blank">
                <p class="tc-lead">{{ c.lead }}</p>
                <template v-if="c.bullets">
                  <div class="tc-lbl">{{ deck.labels.practice }}</div>
                  <ul class="tc-list">
                    <li v-for="(b, bi) in c.bullets" :key="bi">{{ b }}</li>
                  </ul>
                </template>
                <template v-if="c.qs">
                  <div class="tc-lbl">{{ deck.labels.qs }}</div>
                  <ol class="tc-qs">
                    <li v-for="(q, qi) in c.qs" :key="qi">{{ q }}</li>
                  </ol>
                </template>
                <div v-if="c.foot" class="tc-foot">
                  <b>{{ deck.labels.foot }}</b>{{ c.foot }}
                </div>
              </template>

              <template v-else>
                <p class="tc-blank-hint">{{ deck.labels.blank }}</p>
                <div class="tc-rules"><i v-for="n in 11" :key="n"></i></div>
              </template>

              <div v-if="deck.prompt" class="tc-prompt">{{ deck.prompt }}</div>
            </article>
          </div>
        </section>
      </div>

      <section v-if="deck.submit" class="submit screen-only">
        <h2 class="sec-h">{{ ui.submitTitle }}</h2>
        <p class="sec-sub">{{ ui.submitSub }}</p>
        <div class="submit-box">
          <pre>{{ submitText }}</pre>
          <button class="btn ghost" type="button" @click="copySubmit">
            {{ copied ? ui.submitCopied : ui.submitCopy }}
          </button>
        </div>
        <p class="submit-note">{{ ui.submitNote }}</p>
      </section>

      <section class="key" :class="{ 'print-key': withKey }">
        <h2 class="sec-h">
          {{ ui.keyTitle }}
          <button
            v-if="deck.kind === 'dreigingen'"
            class="reveal-btn screen-only"
            type="button"
            @click="keyOpen = !keyOpen"
          >{{ keyOpen ? '−' : '+' }}</button>
        </h2>
        <p class="sec-sub">{{ ui.keySub }}</p>
        <div v-show="keyOpen" class="key-wrap">
          <table class="key-tbl">
            <thead>
              <tr><th v-for="(h, i) in deck.key.head" :key="i">{{ h }}</th></tr>
            </thead>
            <tbody>
              <tr v-for="r in deck.key.rows" :key="r[0]">
                <td v-for="(cell, ci) in r" :key="ci">{{ cell }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div v-if="ui.prevTitle" class="next screen-only">
        <div>
          <h2>{{ ui.prevTitle }}</h2>
          <p>{{ ui.prevBody }}</p>
        </div>
        <NuxtLink class="next-btn" :to="localePath('/security-bingo')">{{ ui.prevLink }}</NuxtLink>
      </div>

      <footer class="screen-only">
        <span>{{ deck.block }} · {{ fmt.label }} · {{ cards.length }} {{ locale === 'en' ? 'cards' : 'kaarten' }}</span>
        <NuxtLink :to="localePath('/fundament')">{{ ui.back }}</NuxtLink>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ deck: { type: Object, required: true } })

const { locale, localePath } = useI18nNav()
const ui = computed(() => props.deck.ui[locale.value])

// Print options
const weeks = ref([1, 2, 3])
const withBlank = ref(true)
const withKey = ref(false)
// The threat key spoils the sorting exercise, so it starts collapsed there.
const keyOpen = ref(props.deck.kind !== 'dreigingen')

function toggleWeek(w) {
  weeks.value = weeks.value.includes(w) ? weeks.value.filter((x) => x !== w) : [...weeks.value, w].sort()
}

// Card size and sheet layout come from the deck: 63 × 88 mm / 9 per A4 for the
// trading-card sets, 95 × 135 mm / 4 per A4 for the dilemma cards.
const fmt = computed(() => {
  const f = props.deck.format || { w: '63mm', h: '88mm', perSheet: 9, cols: 3 }
  return { ...f, label: `${parseInt(f.w)} × ${parseInt(f.h)} mm` }
})

const cards = computed(() =>
  props.deck.cards.filter((c) => {
    if (c.blank) return withBlank.value
    if (props.deck.kind === 'principes') return weeks.value.includes(c.wk)
    return true
  })
)

// One sheet holds exactly `perSheet` cards, so one sheet is one A4.
const sheets = computed(() => {
  const out = []
  const per = fmt.value.perSheet
  for (let i = 0; i < cards.value.length; i += per) out.push(cards.value.slice(i, i + per))
  return out
})

// Week cards carry their own week colour; a deck without weeks may set one itself.
const cardColor = (c) => (c.wk ? `var(--w${c.wk})` : props.deck.color || 'var(--ink)')
const cardTag = (c) => {
  if (c.wk) return `${locale.value === 'en' ? 'Week' : 'Week'} ${c.wk}`
  if (props.deck.tag) return props.deck.tag
  return props.deck.kind === 'dreigingen' ? 'dreiging' : props.deck.block
}

/* ---------- inleversjabloon (Brightspace) ---------- */
const copied = ref(false)
const submitText = computed(() => (props.deck.submit ? props.deck.submit.lines.join('\n') : ''))

async function copySubmit() {
  if (!import.meta.client) return
  try {
    await navigator.clipboard.writeText(submitText.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    // Klembord geweigerd (geen https of geen toestemming) — de tekst staat er
    // zichtbaar bij, dus selecteren en kopiëren blijft altijd mogelijk.
  }
}

function exportPdf() {
  if (import.meta.client) window.print()
}
</script>

<style scoped>
.kaartset{
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

/* ---------- toolbar ---------- */
.bar{
  position:sticky; top:0; z-index:50; margin:8px 0 0; padding:14px 0 12px;
  background:linear-gradient(var(--paper) 78%,rgba(243,237,225,0)); backdrop-filter:blur(2px);
  display:flex; flex-wrap:wrap; align-items:center; gap:12px 18px;
}
.btn{
  display:inline-flex; align-items:center; gap:8px; cursor:pointer;
  font:600 14px/1 'Hanken Grotesk',system-ui,sans-serif; color:#fff; background:var(--accent);
  border:1px solid var(--accent); border-radius:999px; padding:11px 18px; box-shadow:var(--shadow);
  transition:transform .14s, box-shadow .14s;
}
.btn:hover{transform:translateY(-1px); box-shadow:0 14px 26px -16px rgba(33,29,24,.6)}
.btn.ghost{background:transparent; color:var(--ink2); border-color:var(--line); box-shadow:none}
.btn.ghost:hover{color:var(--ink); border-color:var(--accent)}
.opts{display:flex; flex-wrap:wrap; align-items:center; gap:8px 16px}
.opt-group{display:inline-flex; align-items:center; gap:6px}
.opt-lbl{font-family:'JetBrains Mono',monospace; font-size:10.5px; letter-spacing:.06em; text-transform:uppercase; color:var(--ink2)}
.wk-chip{
  cursor:pointer; width:30px; height:30px; border-radius:50%; border:1px solid var(--line);
  background:rgba(251,247,239,.7); color:var(--ink2); font:600 13px 'JetBrains Mono',monospace; transition:.15s;
}
.wk-chip.on{background:var(--c); border-color:var(--c); color:#fff}
.opt{display:inline-flex; align-items:center; gap:7px; font-size:13.5px; color:var(--ink2); cursor:pointer}
.opt input{accent-color:var(--accent); width:15px; height:15px}
.hint{flex:1 1 260px; margin:0; font-size:12px; color:var(--ink2); min-width:220px}

/* ---------- teacher instructions ---------- */
.how{display:grid; grid-template-columns:1.6fr 1fr; gap:18px; margin:22px 0 6px; align-items:start}
.how h2{font-family:'Fraunces',serif; font-weight:600; font-size:20px; margin:0 0 8px}
.how ol{margin:0; padding-left:20px; display:flex; flex-direction:column; gap:8px}
.how li{font-size:13.5px; color:var(--ink2); max-width:76ch}
.make-box{background:rgba(189,122,28,.08); border:1px dashed var(--w1); border-radius:14px; padding:16px 18px}
.make-box h3{margin:0 0 8px; font-size:12px; font-family:'JetBrains Mono',monospace; letter-spacing:.04em; text-transform:uppercase; color:#7a5410}
.make-box ul{margin:0; padding-left:0; list-style:none; display:flex; flex-direction:column; gap:6px}
.make-box li{font-size:12.5px; color:var(--ink2); padding-left:18px; position:relative}
.make-box li::before{content:"✎"; position:absolute; left:0; color:var(--w1)}

.sec-h{font-family:'Fraunces',serif; font-weight:600; font-size:clamp(22px,3vw,30px); letter-spacing:-.01em; margin:46px 0 4px; display:flex; align-items:center; gap:12px}
.sec-sub{color:var(--ink2); max-width:78ch; margin:0 0 18px; font-size:14px}
.empty{color:var(--accent); font-size:14px}

/* ---------- sheets & cards (maat komt uit deck.format) ---------- */
.sheets{display:flex; flex-direction:column; gap:26px}
.sheet-lbl{font-family:'JetBrains Mono',monospace; font-size:10.5px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink2); margin-bottom:8px}
/* Op het scherm lijkt een vel op wat er uit de printer komt: één A4 met 3 x 3 kaarten. */
.sheet{width:max-content; max-width:100%}
.sheet .grid{
  display:grid; grid-template-columns:repeat(var(--cols,3),var(--cw,63mm)); gap:10px;
  background:#fff; border:1px solid var(--line); border-radius:8px;
  padding:14px; box-shadow:var(--shadow);
}

.tc{
  width:var(--cw,63mm); height:var(--ch,88mm); flex:none; overflow:hidden;
  background:var(--card); color:var(--ink);
  border:1px solid var(--line); border-radius:3.5mm; box-shadow:var(--shadow);
  padding:4.2mm 4mm 3.4mm; display:flex; flex-direction:column;
  border-top:2.2mm solid var(--c);
  font-size:11px; line-height:1.34;
}
.tc-top{display:flex; align-items:center; justify-content:space-between; font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:.06em}
.tc-id{color:var(--c); font-weight:500}
.tc-tag{color:var(--ink2); text-transform:uppercase; font-size:8px; letter-spacing:.1em}
.tc-t{font-family:'Fraunces',serif; font-weight:600; font-size:16px; line-height:1.08; margin:2mm 0 1.6mm; letter-spacing:-.005em}
.tc-sp{
  font-family:'JetBrains Mono',monospace; font-size:8.5px; letter-spacing:.02em;
  color:var(--c); margin:-1mm 0 2mm;
}
.tc-lead{margin:0; color:var(--ink); font-size:11px}
.tc-qs{margin:0; padding-left:4.6mm; display:flex; flex-direction:column; gap:1mm}
.tc-qs li{color:var(--ink2); font-size:10px; line-height:1.26}
.kind-dreigingen .tc-lead{font-size:12.5px; line-height:1.42}
.tc-lbl{font-family:'JetBrains Mono',monospace; font-size:7.5px; letter-spacing:.1em; text-transform:uppercase; color:var(--c); margin:2.2mm 0 .8mm}
.tc-list{margin:0; padding:0; list-style:none; display:flex; flex-direction:column; gap:.9mm}
.tc-list li{position:relative; padding-left:3.4mm; color:var(--ink2); font-size:10.5px; line-height:1.28}
.tc-list li::before{content:""; position:absolute; left:0; top:1.5mm; width:1.4mm; height:1.4mm; border-radius:50%; background:var(--c)}
.tc-foot{
  margin-top:auto; padding-top:1.8mm; border-top:1px dashed var(--line);
  font-size:10px; line-height:1.3; color:var(--ink2);
}
.tc-foot b{
  display:block; font-family:'JetBrains Mono',monospace; font-size:7.5px; letter-spacing:.08em;
  text-transform:uppercase; color:var(--c); font-weight:500; margin-bottom:.6mm;
}
.tc-prompt{
  margin-top:1.8mm; font-family:'JetBrains Mono',monospace; font-size:7.5px; letter-spacing:.05em;
  color:var(--ink2); opacity:.75; text-align:center;
}
.tc.blank .tc-t{color:var(--ink2)}
.tc-blank-hint{margin:0 0 2mm; font-size:10px; color:var(--ink2); font-style:italic}
.tc-rules{display:flex; flex-direction:column; gap:4.4mm; margin-top:1mm}
.tc-rules i{display:block; height:0; border-bottom:1px dashed var(--line)}

/* ---------- dilemmakaarten: meer ruimte dan een speelkaart ---------- */
.kind-dilemmas .tc{padding:6mm 6mm 4.4mm; font-size:11.5px}
.kind-dilemmas .tc-top{font-size:9.5px}
.kind-dilemmas .tc-t{font-size:20px; margin:2.4mm 0 1mm; line-height:1.06}
.kind-dilemmas .tc-sp{font-size:9.5px; margin:0 0 3mm}
.kind-dilemmas .tc-lead{font-size:11.5px; line-height:1.38}
.kind-dilemmas .tc-lbl{font-size:8.5px; margin:3.4mm 0 1.2mm}
.kind-dilemmas .tc-list li{font-size:11px; line-height:1.32; padding-left:4mm}
.kind-dilemmas .tc-list li::before{top:1.8mm; width:1.6mm; height:1.6mm}
.kind-dilemmas .tc-qs li{font-size:10.5px}
.kind-dilemmas .tc-prompt{margin-top:auto; padding-top:3mm; font-size:8.5px}

/* ---------- inleversjabloon ---------- */
.submit-box{
  display:flex; flex-wrap:wrap; align-items:flex-start; gap:16px;
  background:var(--card); border:1px solid var(--line); border-radius:14px;
  padding:18px 20px; box-shadow:var(--shadow);
}
.submit-box pre{
  flex:1 1 420px; margin:0; white-space:pre-wrap; font:400 12.5px/1.55 'JetBrains Mono',monospace;
  color:var(--ink2);
}
.submit-note{margin:12px 0 0; font-size:13px; color:var(--ink2); max-width:80ch}

/* ---------- doorverwijzing naar het andere spelmateriaal ---------- */
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

/* ---------- key table ---------- */
.reveal-btn{
  cursor:pointer; width:26px; height:26px; border-radius:50%; border:1px solid var(--line);
  background:var(--card); color:var(--ink2); font:500 15px/1 'JetBrains Mono',monospace;
}
.key-wrap{overflow-x:auto; border:1px solid var(--line); border-radius:12px; background:var(--card); box-shadow:var(--shadow)}
.key-tbl{border-collapse:collapse; width:100%; min-width:680px; font-size:12.5px}
.key-tbl th,.key-tbl td{padding:7px 10px; text-align:left; border-bottom:1px solid var(--line); vertical-align:top}
.key-tbl thead th{font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.05em; text-transform:uppercase; color:var(--ink2); background:var(--paper2)}
.key-tbl td:first-child{font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--accent)}
.key-tbl td:nth-child(2){font-weight:600}
.key-tbl td:nth-child(3),.key-tbl td:nth-child(4){color:var(--ink2)}
.key-tbl tbody tr:hover{background:rgba(33,29,24,.03)}

footer{margin:50px 0 40px; padding-top:18px; border-top:1px solid var(--line); color:var(--ink2); font-size:12.5px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px}
footer a{text-decoration:none; font-weight:600; border-bottom:2px solid var(--w3)}

@media(max-width:900px){ .how{grid-template-columns:1fr} }
@media(max-width:820px){
  .sheet{width:auto}
  .sheet .grid{grid-template-columns:repeat(auto-fit,var(--cw,63mm)); justify-content:center; padding:10px}
}
@media(max-width:560px){ .wrap{padding:0 16px} }
@media(prefers-reduced-motion:reduce){*{animation:none!important; transition:none!important}}

/* ---------- print: exactly 9 cards per A4, nothing else ---------- */
@media print{
  .kaartset{background:#fff}
  .screen-only{display:none !important}
  .wrap{max-width:none; padding:0; margin:0}
  .sheets{display:block; gap:0}
  .sheet{break-after:page; page-break-after:always}
  .sheet:last-of-type{break-after:auto; page-break-after:auto}
  .sheet{width:auto; max-width:none}
  .sheet .grid{
    grid-template-columns:repeat(var(--cols,3),var(--cw,63mm)); grid-auto-rows:var(--ch,88mm); gap:0; justify-content:center;
    background:none; border:none; border-radius:0; padding:0; box-shadow:none;
  }
  .tc{
    box-shadow:none; border-radius:0;
    border:.2mm solid #b9ae98;
    border-top:2.2mm solid var(--c);   /* weekkleur blijft de kop van de kaart */
    background:#fff; break-inside:avoid; page-break-inside:avoid;
  }
  /* the key is a separate, optional last sheet */
  .key{display:none}
  .key.print-key{display:block; break-before:page; page-break-before:always}
  .key.print-key .sec-h{font-size:16pt; margin:0 0 4pt}
  .key.print-key .sec-sub{font-size:9pt; margin-bottom:8pt}
  .key.print-key .key-wrap{display:block !important}
  .key-wrap{border:none; border-radius:0; box-shadow:none; overflow:visible}
  .key-tbl{min-width:0; width:100%; font-size:8.5pt}
  .key-tbl th,.key-tbl td{padding:3pt 5pt; border-bottom:.2mm solid #cdc2ad}
  .key-tbl thead th{background:#ece4d4}
}
</style>

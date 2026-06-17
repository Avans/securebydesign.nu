<template>
  <section class="plate" :class="{ metro: showMetro, mk: showMk }">
    <div class="wrap">
      <header class="hero">
        <div class="kicker">{{ t.hero.kicker }}</div>
        <h1>{{ t.hero.titleLead }}<em>{{ t.hero.titleEm }}</em></h1>
        <p class="lede">{{ t.hero.lede }}</p>
        <div class="chips">
          <span v-for="(c, i) in t.chips" :key="i" class="chip">
            <b v-if="i === 0">{{ c }}</b>
            <template v-else>{{ c }}</template>
          </span>
        </div>
      </header>

      <h2 class="sec-h"><span class="no">{{ t.sections.s1.no }}</span> {{ t.sections.s1.h }}</h2>
      <div class="principles">
        <div v-for="(p, i) in t.principles" :key="i" class="pr reveal" :style="{ animationDelay: i * 60 + 'ms' }">
          <h4><span>{{ p[1] }}</span>{{ p[0] }}</h4>
          <p>{{ p[2] }}</p>
        </div>
      </div>

      <div class="controls">
        <div class="toggle" :class="{ on: showMetro }" @click="showMetro = !showMetro">
          <span class="sw"></span> {{ t.controls.metro }}
        </div>
        <div class="toggle" :class="{ on: showMk }" @click="showMk = !showMk">
          <span class="sw"></span> {{ t.controls.mk }}
        </div>
        <div class="legend">
          <span v-for="(lg, i) in t.legend" :key="i">
            <i v-if="lg.kind === 'dot'" class="dot" :style="{ background: `var(--w${lg.wk})` }"></i>
            <i v-else-if="lg.kind === 'soc'" class="lg-soc"></i>
            <i v-else-if="lg.kind === 'int'" class="lg-int"></i>
            <i v-else-if="lg.kind === 'mk'" class="lg-mk"></i>
            {{ lg.label }}
          </span>
        </div>
      </div>

      <div class="board">
        <div v-for="w in t.weeks" :key="w.n" class="col" :data-w="w.n">
          <div class="col-h">
            <div class="wk">{{ t.labels.week }} {{ w.n }}</div>
            <h3>{{ w.theme }}</h3>
            <div class="ph">{{ w.phase }}</div>
          </div>
          <div class="stack">
            <div
              v-for="s in w.s"
              :key="s.b"
              class="card"
              :class="[
                s.t === 'soc' ? 'soc' : (s.t === 'int' ? 'int' : ''),
                s.mk ? 'has-mk' : '',
                { open: isOpen(w.n, s.b) }
              ]"
            >
              <div
                class="hd"
                role="button"
                tabindex="0"
                :aria-expanded="isOpen(w.n, s.b)"
                @click="toggle(w.n, s.b)"
                @keydown.enter.prevent="toggle(w.n, s.b)"
                @keydown.space.prevent="toggle(w.n, s.b)"
              >
                <span class="bk">{{ t.labels.blok }} {{ s.b }}</span>
                <div style="flex:1">
                  <div class="ti">{{ s.thema }}</div>
                  <div class="bt">
                    <span v-if="t.typeMeta[s.t][1]" class="ic">{{ t.typeMeta[s.t][1] }}</span>{{ t.typeMeta[s.t][0] }}
                  </div>
                  <div class="pills">
                    <span
                      v-for="c in s.st"
                      :key="c"
                      class="pill"
                      :title="t.stations[c][0]"
                    >{{ c }}</span>
                  </div>
                </div>
                <span v-if="s.mk" class="mk-mark" :title="t.labels.mkTitle">✎</span>
                <span class="chev">{{ t.labels.chev }}</span>
              </div>
              <div class="body">
                <dl>
                  <dt>{{ t.labels.kern }}</dt><dd>{{ s.kern }}</dd>
                  <dt>{{ t.labels.onderwerpen }}</dt><dd>{{ s.onderw }}</dd>
                  <dt>{{ t.labels.doen }}</dt><dd>{{ s.act }}</dd>
                  <dt>{{ t.labels.stations }}</dt>
                  <dd>
                    <template v-for="(c, ci) in s.st" :key="c">
                      <b style="color:var(--c)">{{ c }}</b> {{ t.stations[c][0] }}<br v-if="ci < s.st.length - 1" />
                    </template>
                  </dd>
                </dl>
                <div v-if="s.mk" class="mk-note">
                  <b>{{ t.labels.mkNoteB }}</b>{{ t.labels.mkNoteBody }}
                </div>
                <div class="old">{{ s.old }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="sec-h"><span class="no">{{ t.sections.s2.no }}</span> {{ t.sections.s2.h }}</h2>
      <p class="sec-sub">{{ t.sections.s2.sub }}</p>
      <div class="metro-grid">
        <table class="cov">
          <thead>
            <tr>
              <th>{{ t.labels.covMetrostation }}</th>
              <th>{{ t.labels.covWeek }} 1</th>
              <th>{{ t.labels.covWeek }} 2</th>
              <th>{{ t.labels.covWeek }} 3</th>
              <th>{{ t.labels.covWeek }} 4</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="c in t.order" :key="c">
              <td>
                <span class="st-code">{{ c }}</span>
                <span class="st-name">{{ t.stations[c][0] }}</span>
                <span class="st-sub">{{ t.stations[c][1] }}</span>
              </td>
              <td v-for="(arr, wi) in cov[c]" :key="wi" class="cov-cell" :class="{ 'cov-off': !arr.length }">
                <span v-if="arr.length" class="cov-on" :class="`cov-w${wi + 1}`">{{ t.labels.covBlok }} {{ arr.join(', ') }}</span>
                <template v-else>—</template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="sec-h"><span class="no">{{ t.sections.s3.no }}</span> {{ t.sections.s3.h }}</h2>
      <p class="sec-sub">{{ t.sections.s3.sub }}</p>
      <div class="src-split">
        <div class="src-band">
          <h3>{{ t.sections.s3.coreH }}</h3>
          <p class="bd">{{ t.sections.s3.coreBd }}</p>
          <div class="src-groups">
            <div v-for="(g, gi) in t.core" :key="gi" class="src-card reveal" :style="{ animationDelay: gi * 60 + 'ms' }">
              <h4>{{ g[0] }}</h4>
              <ul>
                <li v-for="(x, xi) in g[1]" :key="xi">
                  <a :href="x[1]" target="_blank" rel="noopener">{{ x[0] }} ↗</a><br />
                  <span class="d">{{ x[2] }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="src-band opt">
          <h3><span class="flag">{{ t.sections.s3.optFlag }}</span> &nbsp;{{ t.sections.s3.optH }}</h3>
          <p class="bd">{{ t.sections.s3.optBd }}</p>
          <div class="src-groups">
            <div v-for="(g, gi) in t.opt" :key="gi" class="src-card reveal" :style="{ animationDelay: gi * 60 + 'ms' }">
              <h4>{{ g[0] }}</h4>
              <ul>
                <li v-for="(x, xi) in g[1]" :key="xi">
                  <a :href="x[1]" target="_blank" rel="noopener">{{ x[0] }} ↗</a><br />
                  <span class="d">{{ x[2] }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 class="sec-h"><span class="no">{{ t.sections.s4.no }}</span> {{ t.sections.s4.h }}</h2>
      <p class="sec-sub">{{ t.sections.s4.sub }}</p>
      <div class="make">
        <div class="make-grid">
          <div v-for="(g, gi) in t.make" :key="gi" class="reveal" :style="{ animationDelay: gi * 60 + 'ms' }">
            <h4>{{ g[0] }}</h4>
            <ul>
              <li v-for="(x, xi) in g[1]" :key="xi"><b>{{ x[1] }}</b> · {{ x[0] }}</li>
            </ul>
          </div>
        </div>
        <div class="ready">
          <b>{{ t.ready.b }}</b>{{ t.ready.body }}
        </div>
      </div>

      <footer>
        <span>{{ t.footer.left }}</span>
        <span>{{ t.footer.right }}</span>
      </footer>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ t: { type: Object, required: true } })

const showMetro = ref(true)
const showMk = ref(false)

// Per-card open state, keyed by stable "week-block" id.
const openSet = ref(new Set())
const key = (wn, b) => `${wn}-${b}`
const isOpen = (wn, b) => openSet.value.has(key(wn, b))
const toggle = (wn, b) => {
  const k = key(wn, b)
  const next = new Set(openSet.value)
  next.has(k) ? next.delete(k) : next.add(k)
  openSet.value = next
}

// Coverage table derived from weeks + stations order (replicates original script).
const cov = computed(() => {
  const out = {}
  props.t.order.forEach((c) => { out[c] = [[], [], [], []] })
  props.t.weeks.forEach((w, wi) => {
    w.s.forEach((s) => {
      s.st.forEach((c) => { if (out[c]) out[c][wi].push(s.b) })
    })
  })
  return out
})
</script>

<style scoped>
.plate{
  --paper:#f3ede1; --paper2:#ece4d4; --card:#fbf7ef; --ink:#211d18; --ink2:#5a5249; --line:#cdc2ad;
  --w1:#bd7a1c; --w2:#b03a2c; --w3:#1f6f68; --w4:#56488a;
  --accent:#b03a2c; --make:#bd7a1c;
  --shadow:0 1px 0 rgba(33,29,24,.04), 0 8px 22px -16px rgba(33,29,24,.4);
}
*{box-sizing:border-box}
.wrap{max-width:1340px; margin:0 auto; padding:0 24px}
a{color:inherit}

header.hero{padding:52px 0 22px}
.kicker{font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:.22em; text-transform:uppercase; color:var(--accent); font-weight:500}
h1{font-family:'Fraunces',serif; font-weight:600; font-size:clamp(38px,6vw,74px); line-height:.95; margin:.16em 0 .08em; letter-spacing:-.01em}
h1 em{font-style:italic; color:var(--w3)}
.lede{max-width:64ch; font-size:clamp(15px,1.6vw,18px); color:var(--ink2); margin:.4em 0 1.1em}
.chips{display:flex; flex-wrap:wrap; gap:8px}
.chip{font-family:'JetBrains Mono',monospace; font-size:11.5px; padding:6px 11px; border:1px solid var(--line); border-radius:999px; background:rgba(251,247,239,.6); color:var(--ink2)}
.chip b{color:var(--ink); font-weight:500}

.sec-h{font-family:'Fraunces',serif; font-weight:600; font-size:clamp(22px,3vw,30px); letter-spacing:-.01em; margin:48px 0 4px; display:flex; align-items:baseline; gap:12px}
.sec-h .no{font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--accent); font-weight:500}
.sec-sub{color:var(--ink2); max-width:74ch; margin:0 0 18px}

.principles{display:grid; grid-template-columns:repeat(auto-fit,minmax(195px,1fr)); gap:12px}
.pr{background:var(--card); border:1px solid var(--line); border-radius:12px; padding:14px 15px; box-shadow:var(--shadow)}
.pr h4{margin:0 0 4px; font-size:14.5px; font-weight:700; display:flex; gap:8px; align-items:center}
.pr h4 span{font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--accent)}
.pr p{margin:0; font-size:13px; color:var(--ink2)}

.controls{position:sticky; top:0; z-index:50; margin:30px 0 6px; padding:12px 0;
  background:linear-gradient(var(--paper) 72%,rgba(243,237,225,0)); backdrop-filter:blur(2px);
  display:flex; flex-wrap:wrap; align-items:center; gap:10px 18px}
.toggle{display:inline-flex; align-items:center; gap:9px; cursor:pointer; user-select:none; font-size:13.5px; font-weight:600}
.sw{width:42px; height:23px; border-radius:999px; background:#d8cdb7; border:1px solid var(--line); position:relative; transition:background .2s}
.sw::after{content:""; position:absolute; top:1.5px; left:2px; width:18px; height:18px; border-radius:50%; background:var(--card); box-shadow:0 1px 2px rgba(0,0,0,.25); transition:transform .2s}
.toggle.on .sw{background:var(--accent)}
.toggle.on .sw::after{transform:translateX(18px)}
.legend{display:flex; flex-wrap:wrap; gap:6px 14px; margin-left:auto; font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--ink2)}
.legend span{display:inline-flex; align-items:center; gap:6px}
.dot{width:11px; height:11px; border-radius:3px; display:inline-block}
.lg-soc{width:12px;height:12px;border-radius:50%;background:var(--ink2);display:inline-block}
.lg-int{width:12px;height:12px;background:var(--ink2);display:inline-block;transform:rotate(45deg)}
.lg-mk{width:13px;height:13px;border:1.5px dashed var(--make);border-radius:3px;display:inline-block}

.board{display:grid; grid-template-columns:repeat(4,1fr); gap:16px; align-items:start; margin-top:6px}
.col{--c:var(--w1); position:relative; opacity:0; transform:translateY(12px); animation:rise .5s forwards}
.col[data-w="2"]{--c:var(--w2); animation-delay:.1s} .col[data-w="3"]{--c:var(--w3); animation-delay:.18s} .col[data-w="4"]{--c:var(--w4); animation-delay:.26s}
.col[data-w="1"]{animation-delay:.04s}
@keyframes rise{to{opacity:1; transform:none}}
.col-h{position:relative; padding:12px 14px 13px 18px; border-radius:12px 12px 4px 4px; background:var(--c); color:#fdf8ee; overflow:hidden; box-shadow:var(--shadow)}
.col-h::after{content:""; position:absolute; right:-18px; top:-30px; width:90px; height:90px; border-radius:50%; background:rgba(255,255,255,.08)}
.col-h .wk{font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.18em; opacity:.85; text-transform:uppercase}
.col-h h3{font-family:'Fraunces',serif; font-weight:600; font-size:21px; margin:3px 0 2px; line-height:1.05}
.col-h .ph{font-size:11.5px; opacity:.9; font-family:'JetBrains Mono',monospace; letter-spacing:.03em}
.stack{display:flex; flex-direction:column; gap:8px; margin-top:9px}

.card{background:var(--card); border:1px solid var(--line); border-radius:10px; box-shadow:var(--shadow); overflow:hidden; transition:transform .14s, box-shadow .14s, border-color .14s; border-left:3px solid var(--c)}
.card:hover{transform:translateY(-2px); box-shadow:0 14px 28px -18px rgba(33,29,24,.55)}
.card.soc{background:linear-gradient(180deg,color-mix(in srgb,var(--c) 9%,var(--card)),var(--card))}
.card.int{background:linear-gradient(180deg,color-mix(in srgb,var(--c) 14%,var(--card)),var(--card)); border-left-width:5px}
.card .hd{display:flex; gap:10px; align-items:flex-start; padding:10px 12px; cursor:pointer}
.bk{font-family:'JetBrains Mono',monospace; font-size:10px; font-weight:500; color:#fff; background:var(--c); padding:3px 6px; border-radius:5px; flex:none; margin-top:1px; min-width:32px; text-align:center}
.card .ti{font-size:13.5px; font-weight:600; line-height:1.22}
.bt{font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:.06em; text-transform:uppercase; color:var(--c); font-weight:500; display:inline-flex; align-items:center; gap:4px; margin-top:3px}
.bt .ic{font-size:9px}
.pills{display:flex; gap:3px; flex-wrap:wrap; margin-top:5px}
.pill{font-family:'JetBrains Mono',monospace; font-size:9px; letter-spacing:.02em; color:var(--ink2); border:1px solid var(--line); border-radius:999px; padding:1px 6px; background:rgba(255,255,255,.4); cursor:help}
.pill::before{content:""; width:5px;height:5px;border-radius:50%; background:var(--c); display:inline-block; margin-right:4px; vertical-align:middle}
.plate:not(.metro) .pills{display:none}
.mk-mark{margin-left:auto; flex:none; font-size:13px; color:var(--make); opacity:.5}
.chev{flex:none; margin-top:2px; transition:transform .2s; color:var(--ink2)}
.card.open .chev{transform:rotate(90deg)}
.card .body{display:none; padding:0 12px 12px 12px; border-top:1px dashed var(--line)}
.card.open .body{display:block; animation:slide .2s ease}
@keyframes slide{from{opacity:0; transform:translateY(-4px)}to{opacity:1}}
.body dl{margin:9px 0 0; display:grid; grid-template-columns:auto 1fr; gap:4px 10px}
.body dt{font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.04em; text-transform:uppercase; color:var(--c); padding-top:2px}
.body dd{margin:0; font-size:12.5px; color:var(--ink2)}
.old{font-size:11px; color:#8a8070; margin-top:9px; font-style:italic; border-top:1px dotted var(--line); padding-top:7px}
.mk-note{margin-top:9px; font-size:12px; background:rgba(189,122,28,.08); border:1px dashed var(--make); border-radius:8px; padding:7px 9px; color:#7a5410; display:none}
.card.open .mk-note, .plate.mk .card.has-mk .mk-note{display:block}
.plate.mk .card.has-mk{border-color:var(--make); box-shadow:0 0 0 1.5px color-mix(in srgb,var(--make) 35%,transparent), var(--shadow)}
.plate.mk .card.has-mk .mk-mark{opacity:1}

.metro-grid{overflow-x:auto; border:1px solid var(--line); border-radius:12px; background:var(--card); box-shadow:var(--shadow)}
table.cov{border-collapse:collapse; width:100%; min-width:620px; font-size:12.5px}
table.cov th,table.cov td{padding:8px 10px; text-align:left; border-bottom:1px solid var(--line)}
table.cov thead th{font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.05em; text-transform:uppercase; color:var(--ink2); background:var(--paper2)}
table.cov thead th:nth-child(2){color:var(--w1)} table.cov thead th:nth-child(3){color:var(--w2)}
table.cov thead th:nth-child(4){color:var(--w3)} table.cov thead th:nth-child(5){color:var(--w4)}
table.cov tbody tr:hover{background:rgba(33,29,24,.03)}
.st-name{font-weight:600; color:var(--ink)}
.st-code{font-family:'JetBrains Mono',monospace; font-size:10px; color:var(--accent); margin-right:7px}
.st-sub{font-size:11px; color:var(--ink2); display:block; margin-top:1px}
.cov-cell{font-family:'JetBrains Mono',monospace; font-size:10.5px; white-space:nowrap}
.cov-on{display:inline-block; padding:2px 6px; border-radius:5px; color:#fff; font-weight:500}
.cov-w1{background:var(--w1)} .cov-w2{background:var(--w2)} .cov-w3{background:var(--w3)} .cov-w4{background:var(--w4)}
.cov-off{color:#bdb29c}

.src-split{display:grid; grid-template-columns:1fr; gap:18px}
.src-band h3{font-family:'Fraunces',serif; font-size:18px; font-weight:600; margin:0 0 3px}
.src-band .bd{font-size:12.5px; color:var(--ink2); margin:0 0 12px}
.src-band.opt{border:1px dashed var(--line); border-radius:14px; padding:18px 18px 6px; background:rgba(176,58,44,.03)}
.src-band.opt h3{color:var(--accent)}
.src-band.opt .flag{font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.05em; text-transform:uppercase; color:#fff; background:var(--accent); padding:2px 8px; border-radius:999px}
.src-groups{display:grid; grid-template-columns:repeat(auto-fit,minmax(245px,1fr)); gap:14px}
.src-card{background:var(--card); border:1px solid var(--line); border-radius:12px; padding:14px 15px; box-shadow:var(--shadow)}
.src-card h4{margin:0 0 9px; font-size:12px; font-family:'JetBrains Mono',monospace; letter-spacing:.04em; text-transform:uppercase; color:var(--accent)}
.src-card ul{margin:0; padding:0; list-style:none; display:flex; flex-direction:column; gap:7px}
.src-card li{font-size:12.5px; line-height:1.3}
.src-card a{font-weight:600; text-decoration:none; border-bottom:1.5px solid var(--w3)}
.src-card a:hover{background:var(--w3); color:#fff}
.opt .src-card a{border-bottom-color:var(--accent)} .opt .src-card a:hover{background:var(--accent)}
.src-card .d{color:var(--ink2); font-size:11.5px}

.make{background:linear-gradient(180deg,rgba(189,122,28,.08),rgba(189,122,28,.03)); border:1px dashed var(--make); border-radius:16px; padding:20px 22px}
.make-grid{display:grid; grid-template-columns:repeat(auto-fit,minmax(235px,1fr)); gap:16px; margin-top:4px}
.make-grid h4{margin:0 0 7px; font-size:12px; font-family:'JetBrains Mono',monospace; letter-spacing:.04em; text-transform:uppercase; color:#7a5410}
.make-grid ul{margin:0; padding-left:0; list-style:none; display:flex; flex-direction:column; gap:5px}
.make-grid li{font-size:12.5px; color:var(--ink2); padding-left:20px; position:relative}
.make-grid li::before{content:"✎"; position:absolute; left:0; color:var(--make)}
.make-grid li b{color:var(--ink); font-family:'JetBrains Mono',monospace; font-size:10.5px; font-weight:500}
.ready{margin-top:14px; padding-top:12px; border-top:1px dashed var(--make); font-size:12.5px; color:#7a5410}
.ready b{font-family:'JetBrains Mono',monospace; font-size:10.5px; text-transform:uppercase; letter-spacing:.04em; color:var(--make); display:block; margin-bottom:3px}

footer{margin:50px 0 40px; padding-top:18px; border-top:1px solid var(--line); color:var(--ink2); font-size:12.5px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px}

@media(max-width:1080px){ .board{grid-template-columns:repeat(2,1fr)} }
@media(max-width:560px){ .board{grid-template-columns:1fr} .legend{margin-left:0} .wrap{padding:0 16px} }
@media(prefers-reduced-motion:reduce){*{animation:none!important; transition:none!important}}
</style>

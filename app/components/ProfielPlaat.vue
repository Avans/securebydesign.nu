<script setup>
import { ref, reactive } from 'vue'

defineProps({
  t: { type: Object, required: true }
})

const hues = ['var(--w1)', 'var(--w2)', 'var(--w3)', 'var(--w4)']

// filter: 'all' | 'bouw' | 'onderzoek'
const filter = ref('all')

function topicShown(topic) {
  return filter.value === 'all' || topic.lean === 'beide' || topic.lean === filter.value
}
function lineShown(line) {
  return line[2].some(topicShown)
}

// accordion open-state, keyed by line index + topic index
const open = reactive({})
function key(li, ti) {
  return li + '-' + ti
}
function toggle(li, ti) {
  const k = key(li, ti)
  open[k] = !open[k]
}
function onKey(e, li, ti) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    toggle(li, ti)
  }
}
</script>

<template>
  <section class="plate">
    <div class="wrap">
      <header class="hero">
        <div class="kicker">{{ t.hero.kicker }}</div>
        <h1>
          <template v-for="(part, i) in t.hero.title.split(/<\/?em>/)" :key="i">
            <em v-if="i === 1">{{ part }}</em>
            <template v-else>{{ part }}</template>
          </template>
        </h1>
        <p class="lede">{{ t.hero.lede }}</p>
        <div class="chips">
          <span v-for="(c, i) in t.chips" :key="i" class="chip">
            <b v-if="i === 0">{{ c }}</b>
            <template v-else>{{ c }}</template>
          </span>
        </div>
      </header>

      <h2 class="sec-h">
        <span class="no">{{ t.sections.opdracht.no }}</span> {{ t.sections.opdracht.heading }}
      </h2>
      <p class="sec-sub">{{ t.sections.opdracht.sub }}</p>
      <div class="cards">
        <div v-for="(k, i) in t.kaders" :key="i" class="kc reveal" :style="{ animationDelay: i * 55 + 'ms' }">
          <h4><span>{{ k[1] }}</span>{{ k[0] }}</h4>
          <p>{{ k[2] }}</p>
        </div>
      </div>

      <h2 class="sec-h">
        <span class="no">{{ t.sections.verdieping.no }}</span> {{ t.sections.verdieping.heading }}
      </h2>
      <p class="sec-sub">{{ t.sections.verdieping.sub }}</p>
      <div class="filter">
        <span class="lab">{{ t.filter.label }}</span>
        <button class="fbtn" :class="{ on: filter === 'all' }" data-f="all" @click="filter = 'all'">{{ t.filter.all }}</button>
        <button class="fbtn" :class="{ on: filter === 'bouw' }" data-f="bouw" @click="filter = 'bouw'">{{ t.filter.bouw }}</button>
        <button class="fbtn" :class="{ on: filter === 'onderzoek' }" data-f="onderzoek" @click="filter = 'onderzoek'">{{ t.filter.onderzoek }}</button>
      </div>
      <div>
        <div
          v-for="(ln, li) in t.lines"
          :key="li"
          class="line"
          :style="{ '--c': hues[li % hues.length] }"
          v-show="lineShown(ln)"
        >
          <div class="line-head">
            <span class="lc">{{ ln[0] }}</span>
            <h3>{{ ln[1] }}</h3>
          </div>
          <div class="topic-grid">
            <div
              v-for="(tp, ti) in ln[2]"
              :key="ti"
              class="topic"
              :class="{ open: open[key(li, ti)], hide: !topicShown(tp) }"
              :data-lean="tp.lean"
            >
              <div
                class="hd"
                role="button"
                tabindex="0"
                :aria-expanded="!!open[key(li, ti)]"
                @click="toggle(li, ti)"
                @keydown="onKey($event, li, ti)"
              >
                <div style="flex:1">
                  <div class="tt">{{ tp.tt }}</div>
                  <div class="hook">{{ tp.hook }}</div>
                </div>
                <span class="lean" :class="tp.lean">{{ t.leanLabels[tp.lean] }}</span>
                <span class="chev">▸</span>
              </div>
              <div class="body">
                <dl>
                  <dt class="x">{{ t.leanLabels.beide === 'both' ? 'About' : 'Over' }}</dt>
                  <dd>{{ tp.over }}</dd>
                  <dt class="b">{{ t.leanLabels.bouw }}</dt>
                  <dd>{{ tp.tech }}</dd>
                  <dt class="o">{{ t.leanLabels.onderzoek }}</dt>
                  <dd>{{ tp.nontech }}</dd>
                  <dt class="k">{{ t.leanLabels.beide === 'both' ? 'Client' : 'Opdrachtgever' }}</dt>
                  <dd>{{ tp.klant }}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="sec-h">
        <span class="no">{{ t.sections.voorbeelden.no }}</span> {{ t.sections.voorbeelden.heading }}
      </h2>
      <p class="sec-sub">{{ t.sections.voorbeelden.sub }}</p>
      <div class="skeleton-note">
        <b>{{ t.skeletonNote.label }}</b>{{ t.skeletonNote.text }}
      </div>
      <div class="examples">
        <div v-for="(ex, i) in t.examples" :key="i" class="ex reveal" :class="ex[0]" :style="{ animationDelay: i * 80 + 'ms' }">
          <div class="ex-h">
            <div class="ex-tag">{{ ex[1] }}</div>
            <h3>{{ ex[2] }}</h3>
          </div>
          <dl>
            <template v-for="(r, ri) in ex[3]" :key="ri">
              <dt>{{ r[0] }}</dt>
              <dd :class="{ muted: ri > 1 }">{{ r[1] }}</dd>
            </template>
          </dl>
        </div>
      </div>

      <h2 class="sec-h">
        <span class="no">{{ t.sections.toets.no }}</span> {{ t.sections.toets.heading }}
      </h2>
      <p class="sec-sub">{{ t.sections.toets.sub }}</p>
      <div class="steps">
        <div v-for="(s, i) in t.steps" :key="i" class="step reveal" :style="{ animationDelay: i * 50 + 'ms' }">
          <h4>{{ s[0] }}</h4>
          <p>{{ s[1] }}</p>
        </div>
      </div>
      <div class="twocol">
        <div class="panel">
          <h4>{{ t.portfolioPanel.heading }}</h4>
          <ul>
            <li v-for="(p, i) in t.portfolioPanel.items" :key="i"><b>{{ p[0] }}</b> — {{ p[1] }}</li>
          </ul>
        </div>
        <div class="panel tot">
          <h4>{{ t.toetsPanel.heading }}</h4>
          <ul>
            <li v-for="(p, i) in t.toetsPanel.items" :key="i"><b>{{ p[0] }}</b> — {{ p[1] }}</li>
          </ul>
        </div>
      </div>

      <footer>
        <span>{{ t.footer.left }}</span>
        <span>{{ t.footer.right }}</span>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.plate{
  --paper:#f3ede1; --paper2:#ece4d4; --card:#fbf7ef; --ink:#211d18; --ink2:#5a5249; --line:#cdc2ad;
  --w1:#bd7a1c; --w2:#b03a2c; --w3:#1f6f68; --w4:#56488a;
  --accent:#56488a; --build:#1f6f68; --research:#b03a2c;
  --shadow:0 1px 0 rgba(33,29,24,.04), 0 8px 22px -16px rgba(33,29,24,.4);
}
.plate *{box-sizing:border-box}
.wrap{max-width:1340px; margin:0 auto; padding:0 24px}
.plate a{color:inherit}

header.hero{padding:52px 0 22px}
.kicker{font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:.22em; text-transform:uppercase; color:var(--accent); font-weight:500}
h1{font-family:'Fraunces',serif; font-weight:600; font-size:clamp(38px,6vw,74px); line-height:.95; margin:.16em 0 .08em; letter-spacing:-.01em}
h1 em{font-style:italic; color:var(--accent)}
.lede{max-width:66ch; font-size:clamp(15px,1.6vw,18px); color:var(--ink2); margin:.4em 0 1.1em}
.chips{display:flex; flex-wrap:wrap; gap:8px}
.chip{font-family:'JetBrains Mono',monospace; font-size:11.5px; padding:6px 11px; border:1px solid var(--line); border-radius:999px; background:rgba(251,247,239,.6); color:var(--ink2)}
.chip b{color:var(--ink); font-weight:500}

.sec-h{font-family:'Fraunces',serif; font-weight:600; font-size:clamp(22px,3vw,30px); letter-spacing:-.01em; margin:48px 0 4px; display:flex; align-items:baseline; gap:12px}
.sec-h .no{font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--accent); font-weight:500}
.sec-sub{color:var(--ink2); max-width:76ch; margin:0 0 18px}

.cards{display:grid; grid-template-columns:repeat(auto-fit,minmax(205px,1fr)); gap:12px}
.kc{background:var(--card); border:1px solid var(--line); border-radius:12px; padding:14px 15px; box-shadow:var(--shadow); border-top:3px solid var(--accent)}
.kc h4{margin:0 0 4px; font-size:14.5px; font-weight:700; display:flex; gap:8px; align-items:center}
.kc h4 span{font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--accent)}
.kc p{margin:0; font-size:13px; color:var(--ink2)}

/* filter */
.filter{display:flex; flex-wrap:wrap; align-items:center; gap:8px; margin:6px 0 16px}
.filter .lab{font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.05em; text-transform:uppercase; color:var(--ink2); margin-right:4px}
.fbtn{font-family:'Hanken Grotesk',sans-serif; font-size:13px; font-weight:600; cursor:pointer; border:1px solid var(--line); background:var(--card); color:var(--ink2); padding:6px 13px; border-radius:999px; transition:.15s}
.fbtn:hover{border-color:var(--accent)}
.fbtn.on{background:var(--accent); color:#fdf8ee; border-color:var(--accent)}
.fbtn[data-f="bouw"].on{background:var(--build); border-color:var(--build)}
.fbtn[data-f="onderzoek"].on{background:var(--research); border-color:var(--research)}

/* lines */
.line{margin-bottom:22px; --c:var(--w1)}
.line-head{display:flex; align-items:center; gap:10px; padding:8px 14px; border-radius:10px; background:var(--c); color:#fdf8ee; box-shadow:var(--shadow)}
.line-head .lc{font-family:'JetBrains Mono',monospace; font-size:11px; background:rgba(255,255,255,.18); padding:3px 7px; border-radius:5px}
.line-head h3{font-family:'Fraunces',serif; font-weight:600; font-size:18px; margin:0}
.topic-grid{display:grid; grid-template-columns:repeat(auto-fill,minmax(255px,1fr)); gap:10px; margin-top:10px}
.topic{background:var(--card); border:1px solid var(--line); border-radius:10px; box-shadow:var(--shadow); overflow:hidden; transition:transform .14s, box-shadow .14s; border-left:3px solid var(--c)}
.topic:hover{transform:translateY(-2px); box-shadow:0 14px 28px -18px rgba(33,29,24,.55)}
.topic .hd{padding:11px 12px; cursor:pointer; display:flex; gap:8px; align-items:flex-start}
.topic .tt{font-size:13.5px; font-weight:700; line-height:1.2}
.topic .hook{font-size:12px; color:var(--ink2); margin-top:3px}
.lean{font-family:'JetBrains Mono',monospace; font-size:8.5px; letter-spacing:.05em; text-transform:uppercase; padding:2px 6px; border-radius:999px; flex:none; margin-top:1px; white-space:nowrap}
.lean.bouw{background:rgba(31,111,104,.13); color:var(--build)}
.lean.onderzoek{background:rgba(176,58,44,.12); color:var(--research)}
.lean.beide{background:rgba(86,72,138,.12); color:var(--accent)}
.topic .chev{flex:none; margin-top:2px; transition:transform .2s; color:var(--ink2); margin-left:auto}
.topic.open .chev{transform:rotate(90deg)}
.topic .body{display:none; padding:0 12px 12px 12px; border-top:1px dashed var(--line)}
.topic.open .body{display:block; animation:slide .2s ease}
@keyframes slide{from{opacity:0; transform:translateY(-4px)}to{opacity:1}}
.topic dl{margin:9px 0 0; display:grid; grid-template-columns:auto 1fr; gap:5px 10px}
.topic dt{font-family:'JetBrains Mono',monospace; font-size:9.5px; letter-spacing:.04em; text-transform:uppercase; padding-top:2px}
.topic dt.b{color:var(--build)} .topic dt.o{color:var(--research)} .topic dt.k{color:var(--accent)} .topic dt.x{color:var(--ink2)}
.topic dd{margin:0; font-size:12px; color:var(--ink2)}
.topic.hide{display:none}

/* examples */
.examples{display:grid; grid-template-columns:1fr 1fr; gap:16px}
.ex{background:var(--card); border:1px solid var(--line); border-radius:14px; box-shadow:var(--shadow); overflow:hidden}
.ex.build{border-top:4px solid var(--build)} .ex.research{border-top:4px solid var(--research)}
.ex-h{padding:15px 17px 12px}
.ex-tag{font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.06em; text-transform:uppercase; font-weight:500}
.ex.build .ex-tag{color:var(--build)} .ex.research .ex-tag{color:var(--research)}
.ex-h h3{font-family:'Fraunces',serif; font-weight:600; font-size:21px; margin:4px 0 0; line-height:1.05}
.ex dl{margin:0; padding:4px 17px 17px}
.ex dt{font-family:'JetBrains Mono',monospace; font-size:9.5px; letter-spacing:.05em; text-transform:uppercase; color:var(--ink2); margin-top:11px}
.ex dd{margin:2px 0 0; font-size:13px; color:var(--ink)}
.ex dd.muted{color:var(--ink2)}
.skeleton-note{background:rgba(86,72,138,.07); border:1px dashed var(--accent); border-radius:12px; padding:12px 15px; margin-bottom:16px; font-size:13px; color:#473a73}
.skeleton-note b{font-family:'JetBrains Mono',monospace; font-size:10.5px; text-transform:uppercase; letter-spacing:.04em; color:var(--accent)}

/* steps */
.steps{display:grid; grid-template-columns:repeat(auto-fit,minmax(165px,1fr)); gap:10px; counter-reset:s}
.step{background:var(--card); border:1px solid var(--line); border-radius:10px; padding:13px 14px; box-shadow:var(--shadow); position:relative}
.step::before{counter-increment:s; content:counter(s); font-family:'Fraunces',serif; font-weight:700; font-size:22px; color:var(--accent); opacity:.5; display:block; line-height:1}
.step h4{margin:5px 0 3px; font-size:14px; font-weight:700}
.step p{margin:0; font-size:12.5px; color:var(--ink2)}

.twocol{display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:16px}
.panel{background:var(--card); border:1px solid var(--line); border-radius:14px; padding:17px 18px; box-shadow:var(--shadow)}
.panel h4{margin:0 0 10px; font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:.04em; text-transform:uppercase; color:var(--accent)}
.panel ol,.panel ul{margin:0; padding-left:18px; display:flex; flex-direction:column; gap:6px}
.panel li{font-size:13px; color:var(--ink2)} .panel li b{color:var(--ink); font-weight:600}
.panel.tot{border-top:3px solid var(--research)} .panel.tot h4{color:var(--research)}

footer{margin:50px 0 40px; padding-top:18px; border-top:1px solid var(--line); color:var(--ink2); font-size:12.5px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px}

@media(max-width:820px){ .examples{grid-template-columns:1fr} .twocol{grid-template-columns:1fr} }
@media(max-width:560px){ .wrap{padding:0 16px} }
@media(prefers-reduced-motion:reduce){*{animation:none!important; transition:none!important}}
</style>

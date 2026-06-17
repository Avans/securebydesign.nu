<template>
  <section class="plate">
    <div class="wrap">
      <header class="hero">
        <div class="kicker">{{ t.hero.kicker }}</div>
        <h1>{{ t.hero.titlePre }}<em>{{ t.hero.titleEm }}</em></h1>
        <p class="lede">{{ t.hero.lede }}</p>
        <div class="chips">
          <span v-for="(c, i) in t.chips" :key="i" class="chip">
            <b v-if="i === 0">{{ c }}</b>
            <template v-else>{{ c }}</template>
          </span>
        </div>
      </header>

      <h2 class="sec-h"><span class="no">{{ t.sections.anders.no }}</span> {{ t.sections.anders.h }}</h2>
      <p class="sec-sub">{{ t.sections.anders.sub }}</p>
      <div class="cards">
        <div v-for="(a, i) in t.anders" :key="i" class="dc reveal" :style="{ animationDelay: i * 50 + 'ms' }">
          <h4><span>{{ a[1] }}</span>{{ a[0] }}</h4>
          <p>{{ a[2] }}</p>
        </div>
      </div>

      <h2 class="sec-h"><span class="no">{{ t.sections.roadmap.no }}</span> {{ t.sections.roadmap.h }}</h2>
      <p class="roadmap-intro">{{ t.sections.roadmap.intro }}</p>
      <div class="road">
        <div v-for="(s, i) in t.stages" :key="i" class="stage reveal">
          <div class="num">{{ i }}</div>
          <div class="scard" :class="{ open: open[i] }">
            <div
              class="hd"
              role="button"
              tabindex="0"
              :aria-expanded="open[i] ? 'true' : 'false'"
              @click="toggle(i)"
              @keydown.enter.prevent="toggle(i)"
              @keydown.space.prevent="toggle(i)"
            >
              <div style="flex:1">
                <div class="ph">{{ s.ph }}<template v-if="s.keuze"> · ◆ keuzepunt</template></div>
                <div class="ti">{{ s.ti }}</div>
                <div class="doel">{{ s.doel }}</div>
              </div>
              <span class="chev">▸</span>
            </div>
            <div class="body">
              <div class="field">
                <span class="lab">Activiteiten</span>
                <ul>
                  <li v-for="(act, ai) in s.acts" :key="ai">{{ act }}</li>
                </ul>
              </div>
              <div class="callout anders">
                <span class="lab">Anders dan software bouwen</span>{{ s.anders }}
              </div>
              <div v-if="s.keuze" class="callout keuze">
                <span class="lab">◆ Keuzes hier</span>{{ s.keuze }}
              </div>
              <div class="who"><b>Opbrengst:</b> {{ s.opbr }}</div>
              <div class="who"><b>Wie trekt:</b> {{ s.who }}</div>
            </div>
          </div>
        </div>
      </div>

      <h2 class="sec-h"><span class="no">{{ t.sections.lanes.no }}</span> {{ t.sections.lanes.h }}</h2>
      <p class="sec-sub">{{ t.sections.lanes.sub }}</p>
      <div class="lanes-band">
        <div class="lanes-tag">{{ t.sections.lanes.tag }}</div>
        <div class="lanes">
          <div v-for="(l, i) in t.lanes" :key="i" class="lane reveal" :style="{ animationDelay: i * 50 + 'ms' }">
            <h4>{{ l[0] }}</h4>
            <p>{{ l[1] }}</p>
          </div>
        </div>
      </div>

      <h2 class="sec-h"><span class="no">{{ t.sections.forks.no }}</span> {{ t.sections.forks.h }}</h2>
      <p class="sec-sub">{{ t.sections.forks.sub }}</p>
      <div class="forks">
        <div v-for="(f, i) in t.forks" :key="i" class="fork reveal" :style="{ animationDelay: (i % 4) * 50 + 'ms' }">
          <h4><span>{{ f[1] }}</span>{{ f[0] }}</h4>
          <div class="opts">
            <span v-for="(o, oi) in f[2]" :key="oi" class="opt">{{ o }}</span>
          </div>
        </div>
      </div>

      <h2 class="sec-h"><span class="no">{{ t.sections.team.no }}</span> {{ t.sections.team.h }}</h2>
      <div class="twocol">
        <div>
          <div class="panel" style="border-top-color:var(--accent); margin-bottom:16px">
            <h4 style="color:var(--accent)">{{ t.sections.team.rolesTitle }}</h4>
            <p class="sub">{{ t.sections.team.rolesSub }}</p>
            <div class="roles">
              <div v-for="(r, i) in t.roles" :key="i" class="role reveal" :style="{ animationDelay: i * 50 + 'ms' }">
                <h4>{{ r[0] }}</h4>
                <p>{{ r[1] }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="panel">
          <h4>{{ t.sections.team.pvaTitle }}</h4>
          <p class="sub">{{ t.sections.team.pvaSub }}</p>
          <ul class="checklist">
            <li v-for="(p, i) in t.pva" :key="i">{{ p }}</li>
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

<script setup>
import { reactive } from 'vue'

const props = defineProps({ t: { type: Object, required: true } })

const open = reactive({})
function toggle(i) {
  open[i] = !open[i]
}
</script>

<style scoped>
.plate{
  --paper:#f3ede1; --paper2:#ece4d4; --card:#fbf7ef; --ink:#211d18; --ink2:#5a5249; --line:#cdc2ad;
  --w1:#bd7a1c; --w2:#b03a2c; --w3:#1f6f68; --w4:#56488a;
  --accent:#1f6f68; --anders:#b03a2c; --keuze:#56488a;
  --shadow:0 1px 0 rgba(33,29,24,.04), 0 8px 22px -16px rgba(33,29,24,.4);
  color:var(--ink);
  font-family:'Hanken Grotesk',system-ui,sans-serif; font-size:15px; line-height:1.5;
}
.plate *{box-sizing:border-box}
.wrap{max-width:1340px; margin:0 auto; padding:0 24px}
.plate a{color:inherit}

header.hero{padding:52px 0 22px}
.kicker{font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:.22em; text-transform:uppercase; color:var(--accent); font-weight:500}
h1{font-family:'Fraunces',serif; font-weight:600; font-size:clamp(38px,6vw,72px); line-height:.95; margin:.16em 0 .08em; letter-spacing:-.01em}
h1 em{font-style:italic; color:var(--accent)}
.lede{max-width:66ch; font-size:clamp(15px,1.6vw,18px); color:var(--ink2); margin:.4em 0 1.1em}
.chips{display:flex; flex-wrap:wrap; gap:8px}
.chip{font-family:'JetBrains Mono',monospace; font-size:11.5px; padding:6px 11px; border:1px solid var(--line); border-radius:999px; background:rgba(251,247,239,.6); color:var(--ink2)}
.chip b{color:var(--ink); font-weight:500}

.sec-h{font-family:'Fraunces',serif; font-weight:600; font-size:clamp(22px,3vw,30px); letter-spacing:-.01em; margin:48px 0 4px; display:flex; align-items:baseline; gap:12px}
.sec-h .no{font-family:'JetBrains Mono',monospace; font-size:13px; color:var(--accent); font-weight:500}
.sec-sub{color:var(--ink2); max-width:76ch; margin:0 0 18px}

.cards{display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:12px}
.dc{background:var(--card); border:1px solid var(--line); border-radius:12px; padding:14px 15px; box-shadow:var(--shadow); border-top:3px solid var(--anders)}
.dc h4{margin:0 0 4px; font-size:14.5px; font-weight:700; display:flex; gap:8px; align-items:baseline}
.dc h4 span{font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--anders)}
.dc p{margin:0; font-size:13px; color:var(--ink2)}

/* roadmap */
.roadmap-intro{font-family:'JetBrains Mono',monospace; font-size:11.5px; letter-spacing:.03em; color:var(--ink2); margin-bottom:14px}
.road{position:relative}
.road::before{content:""; position:absolute; left:17px; top:20px; bottom:20px; width:2px; background:linear-gradient(var(--accent),var(--keuze)); opacity:.35; z-index:0}
.stage{display:grid; grid-template-columns:36px 1fr; gap:0 16px; margin-bottom:11px; position:relative}
.num{width:36px; height:36px; border-radius:50%; background:var(--accent); color:#fdf8ee; font-family:'Fraunces',serif; font-weight:600; font-size:17px; display:flex; align-items:center; justify-content:center; z-index:1; box-shadow:var(--shadow); margin-top:2px}
.stage:last-child .num{background:var(--keuze)}
.scard{background:var(--card); border:1px solid var(--line); border-radius:11px; box-shadow:var(--shadow); overflow:hidden; border-left:3px solid var(--accent); transition:box-shadow .14s}
.scard:hover{box-shadow:0 14px 28px -18px rgba(33,29,24,.55)}
.scard .hd{padding:12px 14px; cursor:pointer; display:flex; gap:10px; align-items:flex-start}
.scard .ph{font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.06em; text-transform:uppercase; color:var(--accent); font-weight:500}
.scard .ti{font-size:16px; font-weight:700; font-family:'Fraunces',serif; line-height:1.1; margin-top:1px}
.scard .doel{font-size:12.5px; color:var(--ink2); margin-top:3px}
.scard .chev{flex:none; margin-top:3px; transition:transform .2s; color:var(--ink2); margin-left:auto}
.scard.open .chev{transform:rotate(90deg)}
.scard .body{display:none; padding:0 14px 14px 14px; border-top:1px dashed var(--line)}
.scard.open .body{display:block; animation:slide .2s ease}
@keyframes slide{from{opacity:0; transform:translateY(-4px)}to{opacity:1}}
.field{margin-top:11px}
.field .lab{font-family:'JetBrains Mono',monospace; font-size:9.5px; letter-spacing:.05em; text-transform:uppercase; color:var(--ink2); display:block; margin-bottom:3px}
.field ul{margin:0; padding-left:17px; display:flex; flex-direction:column; gap:3px}
.field li{font-size:12.5px; color:var(--ink2)}
.callout{margin-top:11px; border-radius:9px; padding:9px 11px; font-size:12.5px}
.callout.anders{background:rgba(176,58,44,.08); border:1px dashed var(--anders); color:#7c2a20}
.callout.keuze{background:rgba(86,72,138,.08); border:1px dashed var(--keuze); color:#473a73}
.callout .lab{font-family:'JetBrains Mono',monospace; font-size:9.5px; letter-spacing:.05em; text-transform:uppercase; display:block; margin-bottom:2px; font-weight:500}
.callout.anders .lab{color:var(--anders)} .callout.keuze .lab{color:var(--keuze)}
.who{margin-top:11px; font-size:12px; color:var(--ink2)} .who b{color:var(--ink); font-family:'JetBrains Mono',monospace; font-size:10.5px; font-weight:500}

/* lanes */
.lanes-band{border:1px dashed var(--line); border-radius:14px; padding:16px 18px; background:rgba(31,111,104,.03)}
.lanes-tag{font-family:'JetBrains Mono',monospace; font-size:10.5px; letter-spacing:.05em; text-transform:uppercase; color:var(--accent); margin-bottom:12px}
.lanes{display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:10px}
.lane{background:var(--card); border:1px solid var(--line); border-radius:10px; padding:12px 13px; box-shadow:var(--shadow); border-left:3px solid var(--accent)}
.lane h4{margin:0 0 3px; font-size:13.5px; font-weight:700}
.lane p{margin:0; font-size:12px; color:var(--ink2)}

/* keuzepunten */
.forks{display:grid; grid-template-columns:repeat(auto-fit,minmax(255px,1fr)); gap:12px}
.fork{background:var(--card); border:1px solid var(--line); border-radius:12px; padding:14px 15px; box-shadow:var(--shadow); border-top:3px solid var(--keuze)}
.fork h4{margin:0 0 9px; font-size:14px; font-weight:700; display:flex; gap:8px; align-items:baseline}
.fork h4 span{font-family:'JetBrains Mono',monospace; font-size:10px; color:var(--keuze)}
.opts{display:flex; flex-wrap:wrap; gap:6px}
.opt{font-size:12px; font-weight:600; color:var(--keuze); background:rgba(86,72,138,.09); border:1px solid rgba(86,72,138,.25); border-radius:999px; padding:3px 10px}

/* team + pva */
.twocol{display:grid; grid-template-columns:1fr 1fr; gap:16px}
.roles{display:flex; flex-direction:column; gap:9px}
.role{background:var(--card); border:1px solid var(--line); border-radius:10px; padding:11px 13px; box-shadow:var(--shadow); border-left:3px solid var(--w1)}
.role:nth-child(2){border-left-color:var(--w2)} .role:nth-child(3){border-left-color:var(--w3)}
.role:nth-child(4){border-left-color:var(--w4)} .role:nth-child(5){border-left-color:var(--ink2)}
.role h4{margin:0 0 2px; font-size:13.5px; font-weight:700}
.role p{margin:0; font-size:12px; color:var(--ink2)}
.panel{background:var(--card); border:1px solid var(--line); border-radius:14px; padding:17px 18px; box-shadow:var(--shadow); border-top:3px solid var(--keuze)}
.panel h4{margin:0 0 4px; font-family:'JetBrains Mono',monospace; font-size:12px; letter-spacing:.04em; text-transform:uppercase; color:var(--keuze)}
.panel .sub{font-size:12px; color:var(--ink2); margin:0 0 11px}
.checklist{list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:7px}
.checklist li{font-size:13px; color:var(--ink); padding-left:24px; position:relative}
.checklist li::before{content:"☐"; position:absolute; left:0; color:var(--keuze); font-size:14px}
.note{font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--ink2); margin-top:10px}

footer{margin:50px 0 40px; padding-top:18px; border-top:1px solid var(--line); color:var(--ink2); font-size:12.5px; display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px}

@media(max-width:820px){ .twocol{grid-template-columns:1fr} }
@media(max-width:560px){ .wrap{padding:0 16px} }
@media(prefers-reduced-motion:reduce){*{animation:none!important; transition:none!important}}
</style>

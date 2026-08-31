<template>
  <div class="page wrap">
    <div class="draft">
      <span><b>{{ t.draftB }}</b> {{ t.draft }}</span>
    </div>

    <header class="hero">
      <div class="kicker">{{ t.hero.kicker }}</div>
      <h1 class="title">{{ t.hero.titleLead }}<em>{{ t.hero.titleEm }}</em></h1>
      <p class="lede">{{ t.hero.lede }}</p>
      <div class="chips">
        <span v-for="c in t.chips" :key="c" class="chip">{{ c }}</span>
      </div>
    </header>

    <!-- 01 · het format -->
    <h2 class="sec-h"><span class="no">{{ t.sections.s1.no }}</span> {{ t.sections.s1.h }}</h2>
    <p class="sec-sub">{{ t.sections.s1.sub }}</p>
    <ol class="format">
      <li
        v-for="(f, i) in t.format" :key="f[0]" class="reveal"
        :style="{ '--c': f[3], animationDelay: i * 0.06 + 's' }"
      >
        <span class="n">{{ f[0] }}</span>
        <b>{{ f[1] }}</b>
        <p>{{ f[2] }}</p>
      </li>
    </ol>
    <p class="sec-sub note" v-html="t.formatNote"></p>

    <!-- 02 · het uitgewerkte voorbeeld -->
    <h2 class="sec-h"><span class="no">{{ t.sections.s2.no }}</span> {{ t.sections.s2.h }}</h2>
    <p class="sec-sub">{{ t.sections.s2.sub }}</p>

    <article class="doc">
      <header class="doc-head">
        <div>
          <span class="doc-kicker">{{ t.doc.kicker }}</span>
          <h3>{{ t.doc.title }}</h3>
          <p>{{ t.doc.lede }}</p>
        </div>
        <button type="button" class="print" @click="printPage">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9V3h12v6"/><path d="M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/></svg>
          {{ t.doc.print }}
        </button>
      </header>

      <!-- 1 de feiten -->
      <h4 class="part"><span>1</span>{{ t.doc.h1 }}</h4>
      <dl class="facts">
        <div v-for="f in t.facts" :key="f[0]">
          <dt>{{ f[0] }}</dt>
          <dd>{{ f[1] }}</dd>
        </div>
      </dl>

      <!-- 2 tijdlijn -->
      <h4 class="part"><span>2</span>{{ t.doc.h2 }}</h4>
      <p class="part-sub">{{ t.doc.h2sub }}</p>
      <ol class="tl">
        <template v-for="(it, i) in t.timeline" :key="i">
          <li v-if="it.gap" class="tl-gap">
            <span class="dur">{{ it.gap[1] }}</span>
            <div><b>{{ it.gap[0] }}</b><p>{{ it.gap[2] }}</p></div>
          </li>
          <li v-else class="tl-ev reveal" :class="{ marked: it.mark }">
            <span class="when"><b>{{ it.d }}</b><i>{{ it.t }}</i></span>
            <div class="what">
              <span v-if="it.mark" class="mark">{{ it.mark }}</span>
              <h5>{{ it.h }}</h5>
              <p>{{ it.p }}</p>
            </div>
          </li>
        </template>
      </ol>

      <!-- 3 de ontwerpkeuze eronder -->
      <h4 class="part"><span>3</span>{{ t.doc.h3 }}</h4>
      <p class="part-sub">{{ t.doc.h3sub }}</p>
      <ol class="layers">
        <li v-for="(l, i) in t.layers" :key="i" class="reveal" :style="{ animationDelay: i * 0.08 + 's' }">
          <b>{{ l[0] }}</b>
          <p>{{ l[1] }}</p>
        </li>
      </ol>
      <p class="pull">{{ t.doc.pull }}</p>

      <!-- 4 wat er goed ging -->
      <h4 class="part"><span>4</span>{{ t.doc.h4 }}</h4>
      <p class="part-sub">{{ t.doc.h4sub }}</p>
      <ul class="good">
        <li v-for="g in t.good" :key="g">{{ g }}</li>
      </ul>

      <!-- 5 de communicatie -->
      <h4 class="part"><span>5</span>{{ t.doc.h5 }}</h4>
      <p class="part-sub">{{ t.doc.h5sub }}</p>
      <div class="comms">
        <div v-for="(c, i) in t.comms" :key="i" class="comm reveal" :style="{ animationDelay: i * 0.06 + 's' }">
          <span class="meta"><b>{{ c[0] }}</b> · {{ c[1] }}</span>
          <blockquote>{{ c[2] }}</blockquote>
          <p><i>{{ t.doc.landed }}</i> {{ c[3] }}</p>
        </div>
      </div>

      <!-- 6 herstel & post-mortem -->
      <h4 class="part"><span>6</span>{{ t.doc.h6 }}</h4>
      <p class="part-sub">{{ t.doc.h6sub }}</p>
      <ul class="measures">
        <li v-for="(m, i) in t.measures" :key="i">
          <span class="pill" :data-s="m[2]">{{ t.status[m[2]] }}</span>
          <div><b>{{ m[0] }}</b><p>{{ m[1] }}</p></div>
        </li>
      </ul>

      <!-- 7 wat we niet weten -->
      <h4 class="part"><span>7</span>{{ t.doc.h7 }}</h4>
      <p class="part-sub">{{ t.doc.h7sub }}</p>
      <ul class="unknowns">
        <li v-for="u in t.unknowns" :key="u">{{ u }}</li>
      </ul>
    </article>

    <!-- 03 · werkvorm -->
    <h2 class="sec-h"><span class="no">{{ t.sections.s3.no }}</span> {{ t.sections.s3.h }}</h2>
    <p class="sec-sub">{{ t.sections.s3.sub }}</p>
    <ol class="work">
      <li v-for="(w, i) in t.work" :key="i" class="reveal" :style="{ animationDelay: i * 0.06 + 's' }">
        <span class="min">{{ w[0] }}</span>
        <div><b>{{ w[1] }}</b><p>{{ w[2] }}</p></div>
      </li>
    </ol>
    <div class="transfer">
      <b>{{ t.transferH }}</b>
      <ol>
        <li v-for="q in t.transfer" :key="q">{{ q }}</li>
      </ol>
    </div>

    <!-- 04 · aansluiting -->
    <h2 class="sec-h"><span class="no">{{ t.sections.s4.no }}</span> {{ t.sections.s4.h }}</h2>
    <p class="sec-sub" v-html="t.sections.s4.sub"></p>
    <ol class="growth">
      <li
        v-for="(g, i) in t.growth" :key="g[0]" class="reveal"
        :style="{ '--c': g[3], animationDelay: i * 0.08 + 's' }"
      >
        <b>{{ g[0] }}</b><span>{{ g[1] }}</span><i>{{ g[2] }}</i>
      </li>
    </ol>

    <!-- 05 · meedenken -->
    <h2 class="sec-h"><span class="no">{{ t.sections.s5.no }}</span> {{ t.sections.s5.h }}</h2>
    <p class="sec-sub">
      {{ t.sections.s5.sub }}
      <NuxtLink :to="localePath('/contact')" class="inline">{{ t.contactLink }}</NuxtLink>
    </p>
  </div>
</template>

<script setup>
defineProps({ t: { type: Object, required: true } })

const { localePath } = useI18nNav()

// De writeup is een uitdeelvel: printen via de browser levert de PDF-versie.
function printPage() {
  if (import.meta.client) window.print()
}
</script>

<style scoped>
.draft{
  margin:18px 0 -6px; padding:10px 14px; border-radius:10px;
  border:1px solid var(--line); border-left:4px solid var(--w1);
  background:rgba(251,247,239,.75); font-size:13.5px; color:var(--ink2);
}
.draft b{color:var(--ink)}

/* ---------- 01 het format ---------- */
.format{list-style:none; padding:0; margin:0; display:grid; grid-template-columns:repeat(auto-fit,minmax(230px,1fr)); gap:12px}
.format li{background:var(--card); border:1px solid var(--line); border-top:4px solid var(--c); border-radius:10px; padding:14px 16px}
.format .n{font-family:'JetBrains Mono',monospace; font-size:11px; color:var(--c); font-weight:600}
.format b{display:block; font-family:'Fraunces',serif; font-weight:600; font-size:17px; line-height:1.1; margin:3px 0 5px}
.format p{margin:0; font-size:13px; color:var(--ink2); line-height:1.5}
.note{margin-top:16px}

/* ---------- 02 het document ---------- */
.doc{
  background:var(--card); border:1px solid var(--line); border-radius:16px;
  padding:26px 30px 30px; box-shadow:var(--shadow); margin-top:4px;
}
.doc-head{display:flex; gap:20px; align-items:flex-start; justify-content:space-between; flex-wrap:wrap;
  padding-bottom:18px; margin-bottom:6px; border-bottom:1px solid var(--line)}
.doc-kicker{font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.14em; text-transform:uppercase; color:var(--w3); font-weight:600}
.doc-head h3{font-family:'Fraunces',serif; font-weight:600; font-size:clamp(22px,3vw,30px); line-height:1.05; margin:5px 0 7px}
.doc-head p{margin:0; max-width:70ch; color:var(--ink2); font-size:14.5px}
.print{
  flex:none; font:inherit; font-size:13px; font-weight:600; cursor:pointer; color:var(--ink2);
  display:inline-flex; align-items:center; gap:7px; padding:8px 14px;
  border:1px solid var(--line); border-radius:999px; background:rgba(243,237,225,.6); transition:.15s;
}
.print:hover{color:var(--ink); border-color:var(--w3)}
.print svg{width:15px; height:15px}

.part{
  display:flex; align-items:baseline; gap:10px; margin:32px 0 4px;
  font-family:'Fraunces',serif; font-weight:600; font-size:21px; letter-spacing:-.01em;
}
.part span{
  flex:none; font-family:'JetBrains Mono',monospace; font-size:11px; font-weight:500; color:#fff;
  background:var(--w3); width:20px; height:20px; border-radius:50%;
  display:inline-flex; align-items:center; justify-content:center;
}
.part-sub{margin:0 0 14px; max-width:76ch; color:var(--ink2); font-size:14px}

/* 1 feiten */
.facts{display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:0; margin:0; border-top:1px solid var(--line)}
.facts > div{border-bottom:1px solid var(--line); padding:10px 0}
.facts dt{font-family:'JetBrains Mono',monospace; font-size:10.5px; letter-spacing:.1em; text-transform:uppercase; color:var(--ink2)}
.facts dd{margin:3px 14px 0 0; font-size:14.5px; color:var(--ink); max-width:46ch}

/* 2 tijdlijn */
.tl{list-style:none; margin:0; padding:0 0 0 4px; position:relative}
.tl::before{content:""; position:absolute; left:96px; top:6px; bottom:6px; width:2px; background:var(--line)}
.tl-ev{display:grid; grid-template-columns:92px 1fr; gap:26px; padding:9px 0; position:relative}
.tl-ev .when{text-align:right; font-family:'JetBrains Mono',monospace; font-size:11.5px; color:var(--ink2); line-height:1.35; padding:2px 10px 0 0}
.tl-ev .when b{display:block; color:var(--ink); font-weight:500}
.tl-ev .when i{font-style:normal; opacity:.75}
.tl-ev .what{position:relative}
.tl-ev .what::before{
  content:""; position:absolute; left:-31px; top:7px; width:9px; height:9px; border-radius:50%;
  background:var(--paper2); border:2px solid var(--line);
}
.tl-ev.marked .what::before{background:var(--w2); border-color:var(--w2)}
.tl-ev .mark{
  display:inline-block; font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.1em;
  text-transform:uppercase; color:var(--w2); font-weight:600; margin-bottom:2px;
}
.tl-ev h5{margin:0; font-size:14.5px; font-weight:700; line-height:1.3}
.tl-ev p{margin:2px 0 0; font-size:13.5px; color:var(--ink2); max-width:70ch; line-height:1.5}

.tl-gap{display:grid; grid-template-columns:92px 1fr; gap:26px; margin:6px 0; position:relative}
.tl-gap .dur{
  text-align:right; font-family:'JetBrains Mono',monospace; font-size:11px; font-weight:500;
  color:var(--w2); padding:10px 10px 0 0;
}
.tl-gap > div{
  border-left:2px dashed var(--w2); margin-left:-26px; padding:9px 0 9px 38px;
  background:linear-gradient(90deg,rgba(176,58,44,.06),transparent 65%);
}
.tl-gap b{font-size:13.5px; color:var(--w2)}
.tl-gap p{margin:2px 0 0; font-size:13px; color:var(--ink2); max-width:70ch}

/* 3 lagen */
.layers{list-style:none; margin:0; padding:0; display:grid; gap:10px; max-width:900px}
.layers li{
  background:var(--paper2); border-radius:10px; padding:13px 16px; border-left:4px solid var(--w4);
}
.layers li:nth-child(2){margin-left:22px}
.layers li:nth-child(3){margin-left:44px}
.layers b{display:block; font-size:14px}
.layers p{margin:3px 0 0; font-size:13.5px; color:var(--ink2); max-width:68ch}
.pull{
  margin:18px 0 0; padding:14px 18px; border-left:4px solid var(--w3); background:rgba(31,111,104,.07);
  border-radius:0 10px 10px 0; font-family:'Fraunces',serif; font-size:18px; font-weight:600; line-height:1.3;
  max-width:62ch;
}

/* 4 goed */
.good{list-style:none; margin:0; padding:0; display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:10px}
.good li{
  position:relative; padding:12px 14px 12px 38px; border-radius:10px;
  background:rgba(31,111,104,.06); font-size:13.5px; color:var(--ink2); line-height:1.5;
}
.good li::before{content:"✓"; position:absolute; left:15px; top:11px; color:var(--w3); font-weight:700}

/* 5 communicatie */
.comms{display:grid; gap:12px}
.comm{border:1px solid var(--line); border-radius:10px; padding:14px 16px; background:var(--paper2)}
.comm .meta{font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.06em; color:var(--ink2)}
.comm .meta b{color:var(--ink); font-weight:500}
.comm blockquote{
  margin:8px 0; padding:0 0 0 14px; border-left:3px solid var(--w1);
  font-family:'Fraunces',serif; font-style:italic; font-size:15.5px; line-height:1.4; max-width:70ch;
}
.comm p{margin:0; font-size:13px; color:var(--ink2); max-width:72ch}
.comm p i{font-style:normal; font-weight:700; color:var(--w2)}

/* 6 maatregelen */
.measures{list-style:none; margin:0; padding:0; display:grid; gap:8px}
.measures li{display:grid; grid-template-columns:104px 1fr; gap:16px; align-items:start; padding:9px 0; border-bottom:1px solid var(--line)}
.measures li:last-child{border-bottom:0}
.pill{
  font-family:'JetBrains Mono',monospace; font-size:10px; letter-spacing:.08em; text-transform:uppercase;
  font-weight:600; padding:4px 9px; border-radius:999px; text-align:center; white-space:nowrap;
}
.pill[data-s="done"]{background:rgba(31,111,104,.14); color:var(--w3)}
.pill[data-s="half"]{background:rgba(189,122,28,.16); color:var(--w1)}
.pill[data-s="open"]{background:rgba(176,58,44,.12); color:var(--w2)}
.measures b{font-size:14px}
.measures p{margin:2px 0 0; font-size:13px; color:var(--ink2); max-width:70ch}

/* 7 onbekend */
.unknowns{margin:0; padding-left:20px; display:grid; gap:6px}
.unknowns li{font-size:13.5px; color:var(--ink2); max-width:74ch; line-height:1.5}

/* ---------- 03 werkvorm ---------- */
.work{list-style:none; margin:0 0 22px; padding:0; display:grid; gap:8px}
.work li{display:grid; grid-template-columns:64px 1fr; gap:16px; align-items:baseline; padding:11px 0; border-bottom:1px solid var(--line)}
.work li:last-child{border-bottom:0}
.work .min{font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--w3); font-weight:500}
.work b{font-size:14.5px}
.work p{margin:2px 0 0; font-size:13.5px; color:var(--ink2); max-width:72ch}

.transfer{background:var(--card); border:1px solid var(--line); border-left:4px solid var(--w4); border-radius:10px; padding:16px 20px}
.transfer > b{font-family:'Fraunces',serif; font-size:17px; font-weight:600}
.transfer ol{margin:8px 0 0; padding-left:20px; display:grid; gap:5px}
.transfer li{font-size:13.5px; color:var(--ink2); max-width:74ch}

/* ---------- 04 groei ---------- */
.growth{list-style:none; padding:0; margin:0; display:grid; grid-template-columns:repeat(4,1fr); gap:14px}
.growth li{background:var(--card); border:1px solid var(--line); border-left:4px solid var(--c); border-radius:10px; padding:14px 16px}
.growth b{display:block; font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--c)}
.growth span{display:block; font-family:'Fraunces',serif; font-weight:600; font-size:16px; margin:4px 0; line-height:1.15}
.growth i{font-style:normal; font-size:12.5px; color:var(--ink2)}

.inline{font-weight:600; border-bottom:2px solid var(--accent)}

@media (max-width:860px){
  .growth{grid-template-columns:1fr}
  .doc{padding:20px 18px 24px}
  .tl::before{left:66px}
  .tl-ev,.tl-gap{grid-template-columns:62px 1fr; gap:22px}
  .tl-ev .what::before{left:-27px}
  .tl-gap > div{margin-left:-22px; padding-left:34px}
  .layers li:nth-child(2){margin-left:12px}
  .layers li:nth-child(3){margin-left:24px}
  .measures li{grid-template-columns:1fr; gap:6px}
  .pill{justify-self:start}
}

/* Uitdeelvel: alleen het document telt op papier. */
@media print{
  .draft,.hero,.sec-h,.sec-sub,.format,.work,.transfer,.growth,.print{display:none !important}
  .doc{border:0; box-shadow:none; padding:0; background:#fff}
  .doc-head{border-bottom:2px solid #211d18}
  .tl-ev,.tl-gap,.comm,.measures li,.part{break-inside:avoid}
  .part{break-after:avoid}
}
</style>

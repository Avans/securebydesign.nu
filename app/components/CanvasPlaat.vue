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

    <h2 class="sec-h"><span class="no">{{ t.sections.s1.no }}</span> {{ t.sections.s1.h }}</h2>
    <p class="sec-sub">{{ t.sections.s1.sub }}</p>

    <div class="switch" role="tablist" :aria-label="t.viewsLabel">
      <button
        v-for="v in t.views" :key="v.id" type="button" role="tab"
        :class="{ on: view === v.id }" :aria-selected="view === v.id"
        @click="view = v.id"
      >{{ v.label }}</button>
    </div>

    <figure class="sheet reveal">
      <a :href="current.src" target="_blank" rel="noopener">
        <img :src="current.src" :alt="current.alt" width="3174" height="2244" />
      </a>
      <figcaption>{{ current.caption }}</figcaption>
    </figure>

    <div class="dl">
      <a class="btn" :href="t.pdf" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12"/><path d="m7 12 5 5 5-5"/><path d="M5 21h14"/></svg>
        {{ t.dl.label }}
      </a>
      <span class="hint">{{ t.dl.hint }}</span>
    </div>

    <h2 class="sec-h"><span class="no">{{ t.sections.s2.no }}</span> {{ t.sections.s2.h }}</h2>
    <div class="zones">
      <div
        v-for="(z, i) in t.zones" :key="z[0]" class="zone reveal"
        :style="{ '--c': z[2], animationDelay: i * 0.1 + 's' }"
      >
        <span class="z">{{ z[0] }}</span>
        <p>{{ z[1] }}</p>
      </div>
    </div>
    <p class="sec-sub note" v-html="t.zonesNote"></p>

    <template v-if="t.rounds">
      <h2 class="sec-h"><span class="no">{{ t.sections.sr.no }}</span> {{ t.sections.sr.h }}</h2>
      <p class="sec-sub">{{ t.sections.sr.sub }}</p>
      <ol class="rondes">
        <li
          v-for="(r, i) in t.rounds" :key="r[1]" class="reveal"
          :style="{ animationDelay: i * 0.08 + 's' }"
        >
          <b>{{ r[0] }}</b>
          <div><span>{{ r[1] }}</span><i>{{ r[2] }}</i></div>
        </li>
      </ol>
      <p class="sec-sub note" v-html="t.roundsNote"></p>
    </template>

    <h2 class="sec-h"><span class="no">{{ t.sections.s3.no }}</span> {{ t.sections.s3.h }}</h2>
    <p class="sec-sub" v-html="t.sections.s3.sub"></p>
    <ol class="growth">
      <li
        v-for="(g, i) in t.growth" :key="g[0]" class="reveal"
        :style="{ '--c': g[3], animationDelay: i * 0.08 + 's' }"
      >
        <b>{{ g[0] }}</b><span>{{ g[1] }}</span><i>{{ g[2] }}</i>
      </li>
    </ol>

    <h2 class="sec-h"><span class="no">{{ t.sections.s4.no }}</span> {{ t.sections.s4.h }}</h2>
    <p class="sec-sub">
      {{ t.sections.s4.sub }}
      <NuxtLink :to="localePath('/contact')" class="inline">{{ t.contactLink }}</NuxtLink>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({ t: { type: Object, required: true } })

const { localePath } = useI18nNav()

const view = ref(props.t.views[0].id)
const current = computed(() => props.t.views.find(v => v.id === view.value))
</script>

<style scoped>
.draft{
  margin:18px 0 -6px; padding:10px 14px; border-radius:10px;
  border:1px solid var(--line); border-left:4px solid var(--w1);
  background:rgba(251,247,239,.75); font-size:13.5px; color:var(--ink2);
}
.draft b{color:var(--ink)}

.switch{display:flex; gap:6px; margin:0 0 14px; flex-wrap:wrap}
.switch button{
  font:inherit; font-size:13px; font-weight:600; color:var(--ink2); cursor:pointer;
  padding:7px 14px; border-radius:999px; border:1px solid var(--line);
  background:rgba(251,247,239,.6); transition:background .14s, color .14s, border-color .14s;
}
.switch button:hover{color:var(--ink); border-color:var(--w1)}
.switch button.on{background:var(--w1); border-color:var(--w1); color:#fff}

figure.sheet{margin:0}
figure.sheet img{
  display:block; width:100%; height:auto; border:1px solid var(--line); border-radius:8px;
  box-shadow:0 6px 20px rgba(33,29,24,.1); background:var(--card);
}
figure.sheet figcaption{margin-top:8px; font-size:13px; color:var(--ink2)}

.dl{display:flex; align-items:center; gap:14px; flex-wrap:wrap; margin:20px 0 4px}
.btn{
  display:inline-flex; align-items:center; gap:8px; text-decoration:none;
  background:var(--accent); color:#fff; font-weight:600; font-size:14px;
  padding:10px 18px; border-radius:999px; transition:transform .14s, filter .14s;
}
.btn:hover{transform:translateY(-1px); filter:brightness(1.06)}
.btn svg{width:17px; height:17px}
.dl .hint{font-size:13px; color:var(--ink2)}

.zones{display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-bottom:6px}
.zone{background:var(--card); border:1px solid var(--line); border-top:4px solid var(--c); border-radius:10px; padding:16px 18px}
.zone .z{font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--c); font-weight:600}
.zone p{margin:8px 0 0; font-size:13.5px; color:var(--ink2); line-height:1.5}
.note{margin-top:16px}

.rondes{list-style:none; padding:0; margin:0; display:grid; gap:10px}
.rondes li{display:flex; gap:14px; align-items:baseline; background:var(--card); border:1px solid var(--line);
  border-left:4px solid var(--w2); border-radius:10px; padding:13px 16px}
.rondes b{flex:0 0 auto; font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.1em;
  text-transform:uppercase; color:var(--w2); width:120px}
.rondes span{font-family:'Fraunces',serif; font-weight:600; font-size:16px; margin-right:8px}
.rondes i{font-style:normal; font-size:13.5px; color:var(--ink2); line-height:1.5}

.growth{list-style:none; padding:0; margin:0; display:grid; grid-template-columns:repeat(4,1fr); gap:14px}
.growth li{background:var(--card); border:1px solid var(--line); border-left:4px solid var(--c); border-radius:10px; padding:14px 16px}
.growth b{display:block; font-family:'JetBrains Mono',monospace; font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:var(--c)}
.growth span{display:block; font-family:'Fraunces',serif; font-weight:600; font-size:16px; margin:4px 0; line-height:1.15}
.growth i{font-style:normal; font-size:12.5px; color:var(--ink2)}

.inline{font-weight:600; border-bottom:2px solid var(--accent)}

@media (max-width:860px){
  .zones,.growth{grid-template-columns:1fr}
  .rondes li{display:block}
  .rondes b{display:block; width:auto; margin-bottom:4px}
}
</style>

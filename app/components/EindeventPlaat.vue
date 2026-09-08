<script setup>
defineProps({ t: { type: Object, required: true } })
const { localePath } = useI18nNav()
const anchors = ['programma', 'workshops', 'praktisch']
</script>

<template>
  <div class="event-page wrap">
    <header class="hero">
      <div class="kicker">{{ t.kicker }}</div>
      <h1 class="title"><em>{{ t.title }}</em></h1>
      <p class="lede">{{ t.lead }}</p>
      <div class="chips"><span v-for="chip in t.chips" :key="chip" class="chip">{{ chip }}</span></div>
      <nav class="jump-links" :aria-label="t.title">
        <a v-for="(label, i) in t.nav" :key="label" :href="`#${anchors[i]}`">{{ label }} ↓</a>
      </nav>
    </header>
    <aside class="notice"><b>{{ t.status }}</b><p>{{ t.notice }}</p></aside>

    <h2 class="sec-h"><span class="no">01</span>{{ t.sections[0] }}</h2>
    <div class="overview">
      <article v-for="(item, i) in t.highlights" :key="item[0]" class="panel" :style="{ '--c': ['var(--w1)', 'var(--w3)', 'var(--w4)'][i] }">
        <h3>{{ item[0] }}</h3><p>{{ item[1] }}</p>
      </article>
    </div>

    <section id="programma" aria-labelledby="programme-heading">
      <h2 id="programme-heading" class="sec-h"><span class="no">02</span>{{ t.sections[1] }}</h2>
      <ol class="schedule">
        <li v-for="(slot, i) in t.schedule" :key="slot[0]" :class="{ featured: i === 8 || i === 9 || i === 11 || i === 13 }">
          <span class="time">{{ slot[0] }}</span><div><h3>{{ slot[1] }}</h3><p>{{ slot[2] }}</p></div>
        </li>
      </ol>
    </section>

    <section id="workshops" aria-labelledby="workshops-heading">
      <h2 id="workshops-heading" class="sec-h"><span class="no">03</span>{{ t.sections[2] }}</h2>
      <p class="sec-sub">{{ t.workshopIntro }}</p>
      <ul class="workshop-rules"><li v-for="rule in t.workshopRules" :key="rule">{{ rule }}</li></ul>
      <div class="two-col">
        <article v-for="round in t.rounds" :key="round" class="panel workshop">
          <div class="round">{{ round }}</div><h3>{{ t.pending }}</h3><p>{{ t.roundText }}</p>
        </article>
      </div>
    </section>

    <h2 class="sec-h"><span class="no">04</span>{{ t.sections[3] }}</h2>
    <div class="two-col"><article v-for="item in t.keynotes" :key="item[0]" class="panel"><h3>{{ item[0] }}</h3><p>{{ item[1] }}</p></article></div>

    <section id="praktisch" aria-labelledby="practical-heading">
      <h2 id="practical-heading" class="sec-h"><span class="no">05</span>{{ t.sections[4] }}</h2>
      <div class="panel"><ul class="practical"><li v-for="item in t.practical" :key="item">{{ item }}</li></ul>
        <NuxtLink class="contact-link" :to="localePath('/contact')">{{ t.contact }} →</NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.event-page{padding-bottom:56px}
section[id]{scroll-margin-top:100px}
.jump-links{display:flex; flex-wrap:wrap; gap:10px 22px; margin-top:24px}
.jump-links a,.contact-link{font-weight:600; text-underline-offset:4px; text-decoration-color:var(--w3)}
.notice{border:1px dashed var(--w4); border-radius:12px; background:rgba(86,72,138,.06); padding:16px 18px; color:var(--ink2)}
.notice b,.round{font-family:'JetBrains Mono',monospace; font-size:11px; text-transform:uppercase; letter-spacing:.06em; color:var(--w4)}
.notice p{margin:5px 0 0}
.overview{display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; margin-top:18px}
.two-col{display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px; margin-top:18px}
.panel{--c:var(--w3); padding:18px; background:var(--card); border:1px solid var(--line); border-top:3px solid var(--c); border-radius:12px; box-shadow:var(--shadow)}
.panel h3{font-family:'Fraunces',serif; font-size:22px; font-weight:600; line-height:1.2; margin:0 0 8px}
.panel p{margin:0; color:var(--ink2)}
.schedule{list-style:none; padding:0; margin:18px 0 0; border:1px solid var(--line); border-radius:12px; overflow:hidden; background:var(--card); box-shadow:var(--shadow)}
.schedule li{display:grid; grid-template-columns:135px 1fr; gap:16px; padding:15px 18px; border-bottom:1px solid var(--line)}
.schedule li:last-child{border-bottom:0}
.schedule li.featured{background:rgba(31,111,104,.07); border-left:3px solid var(--w3); padding-left:15px}
.time{font-family:'JetBrains Mono',monospace; font-size:12px; color:var(--w3); padding-top:3px; white-space:nowrap}
.schedule h3{font-size:16px; margin:0 0 3px}
.schedule p{font-size:14px; color:var(--ink2); margin:0}
.workshop-rules,.practical{padding-left:20px; color:var(--ink2)}
.workshop-rules li,.practical li{margin:8px 0}
.workshop{--c:var(--w4)}
.round{margin-bottom:12px}
.practical{margin-top:0}
a:focus-visible{outline:2px solid var(--w3); outline-offset:4px}
@media(max-width:820px){.overview,.two-col{grid-template-columns:1fr}}
@media(max-width:560px){.schedule li{grid-template-columns:1fr; gap:6px}.event-page{padding-left:16px; padding-right:16px}}
</style>

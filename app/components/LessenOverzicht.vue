<script setup>
defineProps({ t: { type: Object, required: true }, id: { type: String, required: true }, number: { type: String, default: '04' } })
const { localePath } = useI18nNav()
const hues = ['var(--w1)', 'var(--w2)', 'var(--w3)', 'var(--w4)']
</script>

<template>
  <section :id="id" class="lessons" :aria-labelledby="`${id}-heading`">
    <h2 :id="`${id}-heading`" class="sec-h"><span class="no">{{ number }}</span> {{ t.heading }}</h2>
    <p class="sec-sub">{{ t.intro }}</p>
    <div v-if="t.allocation" class="allocation">
      <table>
        <caption>{{ t.allocation.caption }}</caption>
        <thead><tr><th scope="col">{{ t.allocation.activity }}</th><th v-for="week in t.weeks" :key="week.n" scope="col">{{ t.labels.week }} {{ week.n }}</th></tr></thead>
        <tbody><tr v-for="row in t.allocation.rows" :key="row.label"><th scope="row">{{ row.label }}</th><td v-for="(value, i) in row.values" :key="i">{{ value }}</td></tr></tbody>
        <tfoot><tr><th scope="row">{{ t.allocation.total }}</th><td v-for="(_, i) in t.weeks" :key="i">{{ t.allocation.rows.reduce((sum, row) => sum + row.values[i], 0) }}</td></tr></tfoot>
      </table>
    </div>
    <ul class="notes"><li v-for="note in t.notes" :key="note">{{ note }}</li></ul>
    <div class="links"><NuxtLink v-for="link in t.links" :key="link.path" :to="localePath(link.path)">{{ link.label }} →</NuxtLink></div>
    <div class="board">
      <section v-for="(week, wi) in t.weeks" :key="week.n" class="col" :style="{ '--c': hues[wi % hues.length] }" :aria-labelledby="`${id}-week-${week.n}`">
        <header class="col-h"><div class="wk">{{ t.labels.week }} {{ week.n }}</div><h3 :id="`${id}-week-${week.n}`">{{ week.title }}</h3><div class="ph">{{ week.goal }}</div></header>
        <div class="stack">
          <details v-for="(block, i) in week.blocks" :key="i" class="card" :class="{ soc: block.type === 'feedback' || block.type === 'tutor', int: block.type === 'project' }">
            <summary class="hd"><span class="bk">{{ block.badge }}</span><div class="lesson-heading"><div class="ti">{{ block.title }}</div><div class="bt">{{ t.types[block.type] }}</div></div><span class="chev" aria-hidden="true">▸</span></summary>
            <div class="body"><dl><template v-for="field in ['core', 'activity', 'output']" :key="field"><dt>{{ t.labels[field] }}</dt><dd>{{ block[field] }}</dd></template></dl></div>
          </details>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped src="../assets/css/lesson-board.css"></style>
<style scoped>
.lessons{scroll-margin-top:90px}
.allocation{overflow-x:auto; margin:20px 0; border:1px solid var(--line); border-radius:12px; background:var(--card)}
table{border-collapse:collapse; width:100%; min-width:650px; font-size:13px}
caption{text-align:left; padding:12px; font-weight:600}
th,td{padding:10px 12px; border-top:1px solid var(--line); text-align:center}
th:first-child{text-align:left}
thead,tfoot{background:var(--paper2)}
.notes{padding-left:20px; color:var(--ink2); max-width:100ch}
.notes li{margin-bottom:8px}
.links{display:flex; flex-wrap:wrap; gap:10px 24px; margin:18px 0 24px; font-weight:600}
.links a{text-underline-offset:4px}
</style>

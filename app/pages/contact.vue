<template>
  <div class="page wrap">
    <header class="hero">
      <div class="kicker">Minor · Secure by Design</div>
      <h1 class="title">Neem <em>contact</em> op</h1>
      <p class="lede">
        Vragen over de minor, de inhoud of een samenwerking? Mail een van onze docenten rechtstreeks.
        We helpen je graag verder.
      </p>
    </header>

    <div class="people">
      <div class="person reveal" style="animation-delay:0s">
        <div class="avatar" aria-hidden="true">SD</div>
        <h3>Stefan van Dockum</h3>
        <div class="role">Docent · minor Secure by Design</div>
        <a class="mail" href="mailto:s.vandockum@avans.nl">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
          s.vandockum@avans.nl
        </a>
      </div>

      <div class="person reveal" style="animation-delay:.12s">
        <div class="avatar" aria-hidden="true">MM</div>
        <h3>Mark Mastop</h3>
        <div class="role">Docent · minor Secure by Design</div>
        <a class="mail" href="mailto:m.mastop@avans.nl">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
          m.mastop@avans.nl
        </a>
      </div>
    </div>

    <h2 class="sec-h"><span class="no">01</span> Waar vind je ons</h2>
    <p class="sec-sub">
      De minor wordt verzorgd door Avans Hogeschool. Loop je rond met een idee voor een samenwerking,
      bekijk dan ook onze <NuxtLink to="/partners" style="font-weight:600;border-bottom:2px solid var(--w3)">partnerpagina</NuxtLink>.
    </p>

    <h2 class="sec-h"><span class="no">02</span> Gebruiken, hergebruiken of meewerken</h2>
    <p class="sec-sub">
      Al het materiaal op deze site &mdash; het fundament, de kaartsets, het canvas en de werkvormen &mdash;
      mag je gebruiken en hergebruiken in je eigen onderwijs, workshop of team.
    </p>

    <div class="reuse reveal" style="animation-delay:.08s">
      <div class="reuse-ico" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      </div>
      <div>
        <h3>Geef even een seintje</h3>
        <p>
          Wil je iets gebruiken, hergebruiken of met ons meewerken? Laat het ons weten via een mail hierboven.
          Dan zetten we je &mdash; als je dat wilt &mdash; met naam en logo op de site als
          <b>collaborator</b> of <b>&ldquo;vriend van&rdquo;</b>. Zo zie je terug waar het materiaal landt
          en weten anderen wie er meebouwt.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({ title: 'Contact · Secure by Design' })
</script>

<style scoped>
.reuse{
  display:flex; gap:18px; align-items:flex-start;
  background:var(--card); border:1px solid var(--line); border-radius:16px;
  padding:22px; box-shadow:var(--shadow); border-left:4px solid var(--w1);
  max-width:76ch;
}
.reuse-ico{
  flex:none; width:44px; height:44px; border-radius:12px;
  background:var(--paper2); border:1px solid var(--line);
  display:flex; align-items:center; justify-content:center; color:var(--w1);
}
.reuse-ico svg{width:22px; height:22px}
.reuse h3{font-family:'Fraunces',serif; font-weight:600; font-size:20px; margin:0 0 6px}
.reuse p{margin:0; color:var(--ink2)}
@media (max-width:560px){ .reuse{flex-direction:column; gap:12px} }
</style>

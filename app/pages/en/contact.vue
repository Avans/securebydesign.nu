<template>
  <div class="page wrap">
    <header class="hero">
      <div class="kicker">Minor · Secure by Design</div>
      <h1 class="title">Get in <em>touch</em></h1>
      <p class="lede">
        Questions about the minor, its content or a collaboration? Email one of our lecturers directly. We're
        happy to help. <b>Please note:</b> the minor is taught in Dutch.
      </p>
    </header>

    <div class="people">
      <div class="person reveal" style="animation-delay:0s">
        <div class="avatar" aria-hidden="true">SD</div>
        <h3>Stefan van Dockum</h3>
        <div class="role">Lecturer · Secure by Design minor</div>
        <a class="mail" href="mailto:s.vandockum@avans.nl">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
          s.vandockum@avans.nl
        </a>
      </div>

      <div class="person reveal" style="animation-delay:.12s">
        <div class="avatar" aria-hidden="true">MM</div>
        <h3>Mark Mastop</h3>
        <div class="role">Lecturer · Secure by Design minor</div>
        <a class="mail" href="mailto:m.mastop@avans.nl">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
          m.mastop@avans.nl
        </a>
      </div>
    </div>

    <h2 class="sec-h"><span class="no">01</span> Where to find us</h2>
    <p class="sec-sub">
      The minor is offered by Avans University of Applied Sciences. If you have an idea for a collaboration,
      take a look at our <NuxtLink to="/en/partners" style="font-weight:600;border-bottom:2px solid var(--w3)">partners page</NuxtLink> too.
    </p>

    <h2 class="sec-h"><span class="no">02</span> Using, reusing or joining in</h2>
    <p class="sec-sub">
      Everything on this site &mdash; the foundation, the card sets, the canvas and the exercises &mdash;
      is yours to use and reuse in your own teaching, workshop or team.
    </p>

    <div class="reuse reveal" style="animation-delay:.08s">
      <div class="reuse-ico" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      </div>
      <div>
        <h3>Just drop us a line</h3>
        <p>
          Planning to use or reuse something, or want to work with us? Send one of us an email above.
          If you like, we&rsquo;ll add you to the site by name and logo as a
          <b>collaborator</b> or <b>&ldquo;friend of&rdquo;</b>. That way we can see where the material
          ends up, and others can see who is building along.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({ title: 'Contact · Secure by Design (EN)' })
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

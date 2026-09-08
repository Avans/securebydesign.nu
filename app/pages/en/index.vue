<template>
  <div class="page wrap">
    <header class="hero">
      <div class="kicker">Minor · Avans University of Applied Sciences</div>
      <h1 class="title">Security as a <em>design quality</em></h1>
      <p class="lede">
        Welcome to the <b>Secure by Design</b> minor. Not a stand-alone hacking course, but a way of looking
        at things: security belongs in your very first design decision — across product, process, people and
        organisation. Over one semester you grow from a shared foundation, through your own specialisation,
        to a real cybersecurity challenge for a client.
      </p>
      <div class="chips">
        <span class="chip"><b>1 semester</b></span>
        <span class="chip">3 flows</span>
        <span class="chip">tech &amp; non-tech</span>
        <span class="chip">design-led</span>
        <span class="chip">NLQF6</span>
      </div>
    </header>

    <h2 class="sec-h"><span class="no">01</span> What this minor is about</h2>
    <div class="prose">
      <p>
        Most incidents don't happen because a single firewall fails, but because security was only considered
        <i>after the fact</i>. This minor flips that around: you learn to treat security as a
        <b>design quality</b> — just like usability or reliability — that you build in from the start and can
        account for.
      </p>
      <p>
        It is deliberately <b>broad</b>, not framed as pure IT. You work on technology as well as behaviour,
        culture, governance and law. That makes the minor suitable for both technical and non-technical
        students: the dividing line is your comfort with technology, not your prior knowledge — security is
        new for everyone.
      </p>
      <p>
        We build up using canvases, card sets, serious games and a running case, so that knowledge sticks.
        Theory and practice alternate, and you immediately apply what you learn to a situation that moves ever
        closer to real professional practice.
      </p>
    </div>

    <div class="video reveal" role="img" aria-label="Video placeholder — introduction video to follow">
      <div class="play" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
      </div>
      <div class="vtxt">Introduction video — coming soon</div>
    </div>

    <h2 class="sec-h"><span class="no">02</span> How to read this minor — three flows</h2>
    <p class="sec-sub">
      The minor starts with Foundation. From week 5, profile development and the company project run alongside one another, culminating in the final event in week 19. Open a card for the programme and activities.
    </p>
    <div class="flows">
      <NuxtLink to="/en/fundament" class="flow reveal" style="--c:var(--w2); animation-delay:0s">
        <span class="step">Flow 1 · weeks 1–4</span>
        <h3>Foundation</h3>
        <p>
          The shared basis. Four weeks bring tech and non-tech to one level: mindset, threats, governance and
          design. Security as an attitude, anchored with games, canvases and a running case.
        </p>
        <span class="go">Open the overview →</span>
      </NuxtLink>

      <NuxtLink to="/en/professioneel-profiel" class="flow reveal" style="--c:var(--w4); animation-delay:.1s">
        <span class="step">Flow 2 · weeks 5–10, development until week 19</span>
        <h3>Professional Profile</h3>
        <p>
          You step off at a station and go deep. You choose one or more topics, do practical research for a
          fictional client and deliver a prototype or a report. Week 10 is an interim review; continue developing towards the profile workshops in week 19.
        </p>
        <span class="go">Open the overview →</span>
      </NuxtLink>

      <NuxtLink to="/en/project" class="flow reveal" style="--c:var(--w3); animation-delay:.2s">
        <span class="step">Flow 3 · starts week 5, intensive from week 11</span>
        <h3>Cybersecurity project</h3>
        <p>
          With a team of four or five you solve a real cyber challenge for a company. The questions vary
          enormously, the underlying route is universal — with clear decision points where you set the
          approach yourselves.
        </p>
        <span class="go">Open the overview →</span>
      </NuxtLink>
      <NuxtLink to="/en/eindevent" class="flow" style="--c:var(--w1)">
        <span class="step">Week 19 · learn together & share results</span><h3>Final event</h3><p>Morning profile workshops, followed by keynotes and all project presentations from 14:00. For students, clients and company delegates.</p><span class="go">Open the overview →</span>
      </NuxtLink>
    </div>

    <h2 class="sec-h"><span class="no">03</span> Get started</h2>
    <p class="sec-sub">
      Start with <NuxtLink to="/en/fundament" style="font-weight:600;border-bottom:2px solid var(--w2)">Foundation</NuxtLink>.
      Questions about the minor? See our <NuxtLink to="/en/partners" style="font-weight:600;border-bottom:2px solid var(--w3)">partners</NuxtLink>
      or <NuxtLink to="/en/contact" style="font-weight:600;border-bottom:2px solid var(--accent)">get in touch</NuxtLink>.
    </p>
  </div>
</template>

<script setup>
useHead({ title: 'Secure by Design · Minor — Avans (EN)' })
</script>

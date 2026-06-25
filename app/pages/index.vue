<template>
  <div class="page wrap">
    <header class="hero">
      <div class="kicker">Minor · Avans Hogeschool</div>
      <h1 class="title">Veiligheid als <em>ontwerpkwaliteit</em></h1>
      <p class="lede">
        Welkom bij de minor <b>Secure by Design</b>. Geen losse hackcursus, maar een manier van kijken:
        security hoort vanaf de eerste ontwerpkeuze bij je product, proces, mensen en organisatie.
        In één semester groei je van gezamenlijke basis, via een eigen verdieping, naar een echt
        cybersecurity-vraagstuk voor een opdrachtgever.
      </p>
      <div class="chips">
        <span class="chip"><b>1 semester</b></span>
        <span class="chip">3 flows</span>
        <span class="chip">tech &amp; non-tech</span>
        <span class="chip">ontwerpgericht</span>
        <span class="chip">NLQF6</span>
      </div>
    </header>

    <h2 class="sec-h"><span class="no">01</span> Waar deze minor over gaat</h2>
    <div class="prose">
      <p>
        De meeste incidenten ontstaan niet doordat één firewall faalt, maar doordat veiligheid pas
        áchteraf werd bedacht. Deze minor draait dat om: je leert security te behandelen als een
        <b>ontwerpkwaliteit</b> — net als bruikbaarheid of betrouwbaarheid — die je vanaf het begin
        meeneemt en kunt verantwoorden.
      </p>
      <p>
        Het is bewust <b>breed</b> opgezet, niet ICT-geframed. Je werkt aan techniek én aan gedrag,
        cultuur, governance en wetgeving. Daarom is de minor geschikt voor zowel technische als
        niet-technische studenten: de scheidslijn is je comfort met techniek, niet je voorkennis —
        security is voor iedereen nieuw.
      </p>
      <p>
        We bouwen op met canvases, kaartsets, serious games en een doorlopende casus, zodat kennis
        beklijft. Theorie en praktijk wisselen elkaar af, en je past het geleerde meteen toe op een
        situatie die steeds dichter bij de echte beroepspraktijk komt.
      </p>
    </div>

    <div class="video reveal">
      <video controls preload="metadata" playsinline aria-label="Introductievideo Secure by Design">
        <source src="/intro.mp4" type="video/mp4" />
        Je browser ondersteunt deze video niet.
      </video>
    </div>

    <h2 class="sec-h"><span class="no">02</span> Zo lees je deze minor — drie flows</h2>
    <p class="sec-sub">
      De minor kent drie opeenvolgende flows. Elke flow heeft een eigen praatplaat die laat zien wat je
      doet en waarom. Lees ze in volgorde: elke flow bouwt voort op de vorige. Klik op een kaart om de
      bijbehorende praatplaat te openen.
    </p>
    <div class="flows">
      <NuxtLink to="/fundament" class="flow reveal" style="--c:var(--w2); animation-delay:0s">
        <span class="step">Flow 1 · weken 1–4</span>
        <h3>Fundament</h3>
        <p>
          De gezamenlijke basis. Vier weken brengen tech én non-tech naar één niveau: mindset, dreigingen,
          governance en ontwerp. Security als houding, verankerd met spel, canvas en een doorlopende casus.
        </p>
        <span class="go">Open de praatplaat →</span>
      </NuxtLink>

      <NuxtLink to="/professioneel-profiel" class="flow reveal" style="--c:var(--w4); animation-delay:.1s">
        <span class="step">Flow 2 · verdieping</span>
        <h3>Professioneel Profiel</h3>
        <p>
          Je stapt uit bij een station en gaat de diepte in. Je kiest één of meer onderwerpen, doet
          praktisch onderzoek voor een fictieve opdrachtgever en levert een prototype óf rapport.
          Portfolio + eindpresentatie vormen de toets.
        </p>
        <span class="go">Open de praatplaat →</span>
      </NuxtLink>

      <NuxtLink to="/project" class="flow reveal" style="--c:var(--w3); animation-delay:.2s">
        <span class="step">Flow 3 · het project</span>
        <h3>Cybersecurity-project</h3>
        <p>
          Met een team van vier à vijf los je een echt cybervraagstuk op voor een bedrijf. De vragen
          verschillen enorm, de route eronder is universeel — met duidelijke keuzepunten waar je zélf
          de aanpak bepaalt.
        </p>
        <span class="go">Open de praatplaat →</span>
      </NuxtLink>
    </div>

    <h2 class="sec-h"><span class="no">03</span> Aan de slag</h2>
    <p class="sec-sub">
      Begin bij <NuxtLink to="/fundament" style="font-weight:600;border-bottom:2px solid var(--w2)">Fundament</NuxtLink>.
      Vragen over de minor? Neem <NuxtLink to="/contact" style="font-weight:600;border-bottom:2px solid var(--accent)">contact</NuxtLink> met ons op.
    </p>
  </div>
</template>

<script setup>
useHead({ title: 'Secure by Design · Minor — Avans' })
</script>

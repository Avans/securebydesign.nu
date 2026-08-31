// Attack-tree Challenge — voorbeeldpagina (NL). Concept: nog niet vastgesteld,
// staat bewust niet in de hoofdnavigatie.
export default {
  draft:
    'Dit spelmateriaal is in ontwikkeling en nog niet vastgesteld. Deze pagina staat bewust niet in het menu; deel de link gerust, maar lees het als een voorstel.',
  draftB: 'Concept — versie 0.1.',

  hero: {
    kicker: 'Fundament · week 2 · lesblok 8',
    titleLead: 'Attack-tree ',
    titleEm: 'Challenge',
    lede:
      'Aanvallersdenken als wedstrijd. Elk team trekt één doel van een aanvaller en bouwt in drie routes — mens, techniek, keten — de wegen ernaartoe. Punten voor wat plausibel is, extra punten voor wat niemand anders bedacht, en de hoofdprijs voor het snijpunt: één maatregel die de meeste takken tegelijk afsnijdt.'
  },

  chips: ['A3 + 8 doelkaarten', '4 rondes', '45 minuten', 'teams van 3–4', 'tech & non-tech', 'erft week 1'],

  sections: {
    s1: {
      no: '01',
      h: 'Het materiaal',
      sub: 'Drie vellen: het werkblad waarop het team bouwt, een uitgewerkt docentvoorbeeld, en de doelkaarten met het scoreblad voor de jury. Klik op het beeld voor de volledige resolutie.'
    },
    s2: { no: '02', h: 'Hoe het werkblad werkt' },
    sr: {
      no: '03',
      h: 'Het spel in vier rondes',
      sub: 'Vijfenveertig minuten, strak getimed. De challenge is geen brainstorm: elke ronde heeft een eigen opbrengst, en de jury — jij, of een team dat een ronde overslaat — houdt het tempo erin.'
    },
    s3: {
      no: '04',
      h: 'Waar het op aansluit',
      sub: 'De challenge staat niet op zichzelf. De assetnummers komen uit week 1, het vocabulaire uit de dreigingskaarten van blok 2, en de snijpunten zijn de eerste maatregelen in het risicoprofiel van blok 9. Wat in week 1 <b>A1</b> heet, blijft hier <b>A1</b>.'
    },
    s4: {
      no: '05',
      h: 'Meedenken?',
      sub: 'De challenge is nog een voorstel — feedback op de doelkaarten, de puntentelling of de tijdsindeling is welkom. Gebruik de feedbackknop rechtsonder, of neem contact op.'
    }
  },

  views: [
    {
      id: 'blanco',
      label: 'Werkblad',
      src: '/materiaal/attack-tree-challenge-blanco.png',
      alt: 'Blanco A3-werkblad voor de attack-tree challenge met drie routes en twaalf bladeren',
      caption: 'Eén per team. Print op A3, vul in met stift; de jury zet zijn vinkjes rechtsonder in de bladeren.'
    },
    {
      id: 'voorbeeld',
      label: 'Ingevuld voorbeeld',
      src: '/materiaal/attack-tree-challenge-voorbeeld.png',
      alt: 'Ingevulde attack tree op de casus wijkzorg-app Naaste, doelkaart D1',
      caption:
        'Docentreferentie op dezelfde casus “Naaste” als het week 1-canvas — bewust vollediger dan wat een team in 45 minuten haalt.'
    },
    {
      id: 'doelkaarten',
      label: 'Doelkaarten & scoreblad',
      src: '/materiaal/attack-tree-challenge-doelkaarten.png',
      alt: 'Acht doelkaarten met aanvallersdoelen, plus scoreblad en juryregels',
      caption: 'Snijd de acht kaarten los; het scoreblad en de juryregels houd je zelf. D8 hoort altijd in het spel.'
    }
  ],
  viewsLabel: 'Materiaalweergave',

  dl: {
    label: "Download A3 (PDF, 3 pagina's)",
    hint: 'Pagina 1 print je per team, pagina 2 is de docentreferentie, pagina 3 zijn de doelkaarten en het scoreblad.'
  },

  // [zonelabel, uitleg, kleurvariabele]
  zones: [
    [
      'Boven · Doel en aanvaller',
      'Het doel komt van de doelkaart en staat in de ik-vorm van de aanvaller — “ik wil …”, nooit “ik hack …”. Ernaast de persona non grata: wie is het, wat levert het hem op, en waar ligt zijn grens. Een doel zonder aanvaller levert films op.',
      'var(--w1)'
    ],
    [
      'Midden · Drie routes, twaalf bladeren',
      'Via de mens, via het apparaat en de techniek, via de keten en het proces. Elk blad krijgt één zin “hoe dan?”, een assetnummer uit week 1, en de keuze EN of OF: kan dit blad op zichzelf, of alleen samen met het blad erboven?',
      'var(--w2)'
    ],
    [
      'Onder · Snijpunt, films en punten',
      'Welke maatregel haalt in één klap de meeste bladeren weg — en hoe zou je merken dat iemand het tóch probeert? Daarnaast de strook voor de paden die sneuvelden bij “hoe dan?”, en het vakje waar de jury de punten optelt.',
      'var(--w3)'
    ]
  ],
  zonesNote:
    'Twee regels doen het meeste werk. <b>Een pad zonder assetnummer is een mening</b> — dat dwingt teams terug naar het canvas van week 1 en houdt de boom verbonden met de casus. En <b>“hoe dan?” moet in één zin kunnen</b>, met een dinsdagochtend erbij: wie doet wat, waar, met wat in zijn hand. Dat is de rem op de Hollywood-aanval, en tegelijk de opening voor niet-technische teamleden: de route “via de mens” is meestal de kortste, en die vraagt geen enkele regel code.',

  // [tijd, titel, uitleg]
  rounds: [
    [
      'Ronde 1 · 12 min',
      'Bouwen',
      'Elk team trekt één doelkaart en houdt die voor zich. Drie routes, minstens twee bladeren per route. Hardop denken, één schrijver, geen laptops.'
    ],
    [
      'Ronde 2 · 8 min',
      'Doorgeven',
      'De vellen schuiven één plek op. Het buurteam vult aan wat het zelf zou hebben bedacht — met initialen erbij, want die bladeren tellen straks mee voor het bouwende team, niet voor de aanvuller.'
    ],
    [
      'Ronde 3 · 15 min',
      'Verdedigen',
      'Elk team leest zijn sterkste bladeren voor; de jury vraagt bij elk blad: hoe dan? Plausibel is één punt. Daarna de vraag aan de zaal: heeft iemand anders dit ook? Eén hand omhoog en het extra punt vervalt.'
    ],
    [
      'Ronde 4 · 10 min',
      'Snijpunt',
      'Terug naar het eigen vel: welke ene maatregel snijdt de meeste takken af, en hoe merk je dat iemand het toch probeert? Drie punten, en dit is wat er meegaat naar blok 9.'
    ]
  ],
  roundsNote:
    'De puntentelling stuurt het gedrag, en dat is opzet. <b>✔ plausibel = 1 punt</b> houdt teams weg bij zero-days en ninja’s. <b>★ uniek én plausibel = 1 punt extra</b> beloont de route die niemand zag — meestal een menselijke of organisatorische. <b>✂ het snijpunt = 3 punten</b>, maar alleen mét detectie: een maatregel zonder “hoe merken we het” is een halve maatregel. Wat sneuvelt bij “hoe dan?” krijgt geen punten maar wel de eervolle vermelding, en de vervolgvraag: voor wélke aanvaller zou dit wél kloppen?',

  // [fase, artefact, wat het toevoegt, kleurvariabele]
  growth: [
    ['Week 1 · blok 9', 'Security Context Canvas', 'assets A1, A2 … + abuse cases', 'var(--w1)'],
    ['Week 2 · blok 2', 'Dreigingskaarten', 'woorden voor wat er mis kan gaan', 'var(--w2)'],
    ['Week 2 · blok 8', 'Attack-tree challenge', 'routes → snijpunt mét detectie', 'var(--w2)'],
    ['Week 2 · blok 9', 'Risicoprofiel', 'top-5 risico’s + eerste maatregelen', 'var(--w3)']
  ],

  contactLink: 'contact',
  pdf: '/materiaal/attack-tree-challenge-a3.pdf',
  title: 'Attack-tree Challenge · Secure by Design'
}

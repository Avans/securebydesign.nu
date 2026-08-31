// STRIDE-light Canvas — voorbeeldpagina (NL). Concept: nog niet vastgesteld,
// staat bewust niet in de hoofdnavigatie.
export default {
  draft:
    'Dit canvas is in ontwikkeling en nog niet vastgesteld. Deze pagina staat bewust niet in het menu; deel de link gerust, maar lees het als een voorstel.',
  draftB: 'Concept — versie 0.1.',

  hero: {
    kicker: 'Fundament · week 4 · lesblok 4',
    titleLead: 'STRIDE-light ',
    titleEm: 'Canvas',
    lede:
      'Threat modelling als gezamenlijke ontwerptaal, op één A3. Zes vragen aan hetzelfde systeem — in gewone taal, zodat een non-tech student ze net zo goed kan stellen. Het canvas bouwt voort op de assetnummers uit week 1 en levert de top-3 dreigingen af waarmee blok 5 de traceability-matrix vult.'
  },

  chips: ['A3', '6 vragen', '50 minuten', 'teams van 3–4', 'tech & non-tech', 'vervolg op week 1'],

  sections: {
    s1: {
      no: '01',
      h: 'Het canvas',
      sub: 'Eén vel, drie banden: eerst het systeem, dan de zes vragen, dan wat je ermee doet. Klik op het beeld voor de volledige resolutie.'
    },
    s2: { no: '02', h: 'Hoe je het leest' },
    s3: {
      no: '03',
      h: 'Waar het op aansluit',
      sub: 'Het canvas staat niet op zichzelf: het erft de assetnummers van week 1 en levert de requirements aan die in blok 5 hun ontwerpkeuze krijgen. De koppeling zit opnieuw in de nummers — wat in week 1 <b>A1</b> heet, blijft hier <b>A1</b>.'
    },
    s4: {
      no: '04',
      h: 'Meedenken?',
      sub: 'Het canvas is nog een voorstel — feedback op de vraagformuleringen, de banden of de casus is welkom. Gebruik de feedbackknop rechtsonder, of neem contact op.'
    }
  },

  views: [
    {
      id: 'blanco',
      label: 'Blanco',
      src: '/materiaal/stride-light-canvas-blanco.png',
      alt: 'Blanco STRIDE-light Canvas op A3 met zes dreigingsvragen in drie banden',
      caption: 'De werk- en inlevervorm. Print op A3, vul in met post-its of stift.'
    },
    {
      id: 'voorbeeld',
      label: 'Ingevuld voorbeeld',
      src: '/materiaal/stride-light-canvas-voorbeeld.png',
      alt: 'Ingevuld STRIDE-light Canvas met de casus wijkzorg-app Naaste',
      caption:
        'Docentreferentie op dezelfde casus “Naaste” als het week 1-canvas — bewust vollediger dan wat teams in 50 minuten halen.'
    }
  ],
  viewsLabel: 'Canvasweergave',

  dl: {
    label: "Download A3 (PDF, 2 pagina's)",
    hint: 'Pagina 1 is blanco om te printen, pagina 2 is de ingevulde docentreferentie.'
  },

  // [zonelabel, uitleg, kleurvariabele]
  zones: [
    [
      'Boven · Waar kijken we naar',
      'Het systeem in maximaal zes blokjes — mensen, plekken waar gegevens staan, partijen buiten de eigen organisatie — en de vertrouwensgrenzen daartussen, met de assetnummers die zo’n grens oversteken.',
      'var(--w3)'
    ],
    [
      'Midden · De zes vragen',
      'STRIDE in gewone taal: zich voordoen als, ongemerkt wijzigen, achteraf ontkennen, meekijken, eruit liggen, meer rechten krijgen. Elke vraag stel je aan hetzelfde plaatje, en elk antwoord noteert wie, wat en welk assetnummer.',
      'var(--w4)'
    ],
    [
      'Onder · Wat doen we ermee',
      'Drie dreigingen die je nú aanpakt: maatregel, requirementnummer en hoe je zou merken dat het misgaat. Daarnaast de strook voor wat je bewust leeg liet of aannam.',
      'var(--w2)'
    ]
  ],
  zonesNote:
    'Twee dingen maken het canvas licht genoeg voor 50 minuten. <b>Niet elk vak hoeft vol</b> — een leeg vak mét reden is ook een antwoord, en die reden hoort in de strook rechtsonder. En <b>R en D zijn geen techniekvragen</b>: “kunnen we achteraf zien wie wat deed?” en “wat doen mensen als het een dag niet werkt?” gaan over proces en gedrag, en zijn juist het aanknopingspunt voor niet-technische teamleden.',

  // [fase, artefact, wat het toevoegt, kleurvariabele]
  growth: [
    ['Week 1 · blok 9', 'Security Context Canvas', 'assets A1, A2 … + abuse cases', 'var(--w1)'],
    ['Week 4 · blok 3', 'Architectuurschets', 'het systeem in maximaal zes blokjes', 'var(--w3)'],
    ['Week 4 · blok 4', 'STRIDE-light canvas', 'zes vragen → top-3 dreigingen', 'var(--w4)'],
    ['Week 4 · blok 5', 'Traceability-matrix', 'requirement → ontwerpkeuze → dossier', 'var(--w2)']
  ],

  contactLink: 'contact',
  pdf: '/materiaal/stride-light-canvas-a3.pdf',
  title: 'STRIDE-light Canvas · Secure by Design'
}

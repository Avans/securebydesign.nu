// Security Context Canvas — voorbeeldpagina (NL). Concept: nog niet vastgesteld,
// staat bewust niet in de hoofdnavigatie.
export default {
  draft:
    'Dit canvas is in ontwikkeling en nog niet vastgesteld. Deze pagina staat bewust niet in het menu; deel de link gerust, maar lees het als een voorstel.',
  draftB: 'Concept — versie 0.2.',

  hero: {
    kicker: 'Fundament · week 1 · lesblok 9',
    titleLead: 'Security Context ',
    titleEm: 'Canvas',
    lede:
      "Het kernartefact van week 1. Teams brengen er in één lesblok hun casus op samen: context, stakeholders, gedrag, assets, misbruikscenario's en de eerste ontwerpprincipes. Het canvas blijft daarna staan — het groeit week na week door tot het secure-by-design dossier in week 4."
  },

  chips: ['A3', '9 vakken', '90 minuten', 'teams van 3–4', 'tech & non-tech', 'portfolio'],

  sections: {
    s1: {
      no: '01',
      h: 'Het canvas',
      sub: 'Elk vak is de oogst van precies één lesblok uit week 1 — het canvas vraagt dus niets wat nog niet is uitgelegd. Klik op het beeld voor de volledige resolutie.'
    },
    s2: { no: '02', h: 'Hoe je het leest' },
    s3: {
      no: '03',
      h: 'Het groeit door',
      sub: 'Niet één vel dat steeds voller wordt, maar één ruggengraat met lagen. De koppeling zit in de assetnummers: wat in week 1 <b>A1</b> heet, blijft de rest van de minor <b>A1</b>.'
    },
    s4: {
      no: '04',
      h: 'Meedenken?',
      sub: 'Het canvas is nog een voorstel — feedback op de vakken, de volgorde of de casus is welkom. Gebruik de feedbackknop rechtsonder, of neem contact op.'
    }
  },

  views: [
    {
      id: 'blanco',
      label: 'Blanco',
      src: '/materiaal/security-context-canvas-blanco.png',
      alt: 'Blanco Security Context Canvas op A3 met negen vakken in drie zones',
      caption: 'De werk- en inlevervorm. Print op A3, vul in met post-its.'
    },
    {
      id: 'voorbeeld',
      label: 'Ingevuld voorbeeld',
      src: '/materiaal/security-context-canvas-voorbeeld.png',
      alt: 'Ingevuld Security Context Canvas met de casus wijkzorg-app Naaste',
      caption:
        'Docentreferentie op de casus “Naaste” — bewust vollediger dan wat teams in 50 minuten halen.'
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
      'A · Wat & waarom',
      'Waar hebben we het over, waarom doet het ertoe, en welke van beschikbaarheid, integriteit of vertrouwelijkheid weegt hier het zwaarst?',
      'var(--w1)'
    ],
    [
      'B · Wie',
      'Stakeholders en hun botsende belangen, wat gebruikers op een drukke dag écht doen, en wie hier iets aan zou willen hebben.',
      'var(--w3)'
    ],
    [
      'C · Wat beschermen we',
      "Genummerde assets, minstens drie abuse cases die elk naar zo'n assetnummer verwijzen, en de ontwerpprincipes die daaruit volgen.",
      'var(--w2)'
    ]
  ],
  zonesNote:
    'Onderaan staan twee stroken die het canvas levend houden: <b>aannames &amp; open vragen</b> — wat weten we nog niet? — en <b>meenemen naar week 2</b>, het risico dat het team op dat moment het scherpst vindt.',

  // [week, artefact, wat het toevoegt, kleurvariabele]
  growth: [
    ['Week 1', 'Security Context Canvas', 'context, assets, abuse cases', 'var(--w1)'],
    ['Week 2', 'Risicoprofiel-laag', 'kans × impact, eerste maatregelen', 'var(--w2)'],
    ['Week 3', 'Governance-laag', 'wetgeving, normen, rollen, keten', 'var(--w3)'],
    ['Week 4', 'Secure-by-design dossier', 'requirements, architectuur, lifecycle', 'var(--w4)']
  ],

  contactLink: 'contact',
  pdf: '/materiaal/security-context-canvas-a3.pdf',
  title: 'Security Context Canvas · Secure by Design'
}

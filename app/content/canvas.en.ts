// Security Context Canvas — showcase page (EN). Draft: not yet approved,
// deliberately kept out of the main navigation.
export default {
  draft:
    'This canvas is still in development and has not been approved. The page is deliberately kept out of the menu — feel free to share the link, but read it as a proposal.',
  draftB: 'Draft — version 0.2.',

  hero: {
    kicker: 'Foundation · week 1 · lesson block 9',
    titleLead: 'Security Context ',
    titleEm: 'Canvas',
    lede:
      'The core artefact of week 1. In a single lesson block, teams bring their case together on one sheet: context, stakeholders, behaviour, assets, abuse cases and the first design principles. The canvas then stays — it grows week by week into the secure-by-design dossier in week 4.'
  },

  chips: ['A3', '9 fields', '90 minutes', 'teams of 3–4', 'tech & non-tech', 'portfolio'],

  sections: {
    s1: {
      no: '01',
      h: 'The canvas',
      sub: 'Every field is the harvest of exactly one lesson block from week 1 — so the canvas never asks for anything that has not been taught yet. Click the image for full resolution.'
    },
    s2: { no: '02', h: 'How to read it' },
    s3: {
      no: '03',
      h: 'It keeps growing',
      sub: 'Not one sheet that gets ever fuller, but one backbone with layers. The link is the asset numbering: what is called <b>A1</b> in week 1 stays <b>A1</b> for the rest of the minor.'
    },
    s4: {
      no: '04',
      h: 'Want to weigh in?',
      sub: 'The canvas is still a proposal — feedback on the fields, the order or the case is welcome. Use the feedback button in the corner, or get in touch.'
    }
  },

  views: [
    {
      id: 'blanco',
      label: 'Blank',
      src: '/materiaal/security-context-canvas-blanco.png',
      alt: 'Blank Security Context Canvas on A3 with nine fields in three zones',
      caption: 'The working and hand-in form. Print on A3, fill in with sticky notes.'
    },
    {
      id: 'voorbeeld',
      label: 'Worked example',
      src: '/materiaal/security-context-canvas-voorbeeld.png',
      alt: 'Completed Security Context Canvas for the home-care app case “Naaste”',
      caption:
        'Teacher reference for the case “Naaste” — deliberately more complete than what teams manage in 50 minutes.'
    }
  ],
  viewsLabel: 'Canvas view',

  dl: {
    label: 'Download A3 (PDF, 2 pages)',
    hint: 'Page 1 is blank for printing, page 2 is the completed teacher reference.'
  },

  zones: [
    [
      'A · What & why',
      'What are we talking about, why does it matter, and which of availability, integrity or confidentiality weighs heaviest here?',
      'var(--w1)'
    ],
    [
      'B · Who',
      'Stakeholders and their conflicting interests, what users actually do on a busy day, and who would stand to gain from misuse.',
      'var(--w3)'
    ],
    [
      'C · What we protect',
      'Numbered assets, at least three abuse cases that each point back to an asset number, and the design principles that follow from them.',
      'var(--w2)'
    ]
  ],
  zonesNote:
    'Two strips along the bottom keep the canvas alive: <b>assumptions &amp; open questions</b> — what do we not know yet? — and <b>take into week 2</b>, the risk the team currently finds sharpest.',

  growth: [
    ['Week 1', 'Security Context Canvas', 'context, assets, abuse cases', 'var(--w1)'],
    ['Week 2', 'Risk profile layer', 'likelihood × impact, first controls', 'var(--w2)'],
    ['Week 3', 'Governance layer', 'law, standards, roles, supply chain', 'var(--w3)'],
    ['Week 4', 'Secure-by-design dossier', 'requirements, architecture, lifecycle', 'var(--w4)']
  ],

  contactLink: 'contact',
  pdf: '/materiaal/security-context-canvas-a3.pdf',
  title: 'Security Context Canvas · Secure by Design (EN)'
}

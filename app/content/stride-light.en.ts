// STRIDE-light Canvas — example page (EN). Draft: not yet approved,
// deliberately kept out of the main navigation.
export default {
  draft:
    'This canvas is still in development and has not been approved. The page is deliberately kept out of the menu — feel free to share the link, but read it as a proposal.',
  draftB: 'Draft — version 0.1.',

  hero: {
    kicker: 'Foundation · week 4 · lesson block 4',
    titleLead: 'STRIDE-light ',
    titleEm: 'Canvas',
    lede:
      'Threat modelling as a shared design language, on a single A3. Six questions asked of the same system — in plain language, so a non-technical student can ask them just as well. The canvas builds on the asset numbers from week 1 and delivers the top-3 threats that block 5 uses to fill the traceability matrix.'
  },

  chips: ['A3', '6 questions', '50 minutes', 'teams of 3–4', 'tech & non-tech', 'follows week 1'],

  sections: {
    s1: {
      no: '01',
      h: 'The canvas',
      sub: 'One sheet, three bands: first the system, then the six questions, then what you do with them. Click the image for full resolution.'
    },
    s2: { no: '02', h: 'How to read it' },
    s3: {
      no: '03',
      h: 'What it connects to',
      sub: 'The canvas does not stand alone: it inherits the asset numbers from week 1 and delivers the requirements that get their design choice in block 5. The link is again in the numbers — what was <b>A1</b> in week 1 stays <b>A1</b> here.'
    },
    s4: {
      no: '04',
      h: 'Want to weigh in?',
      sub: 'The canvas is still a proposal — feedback on the wording of the questions, the bands or the case is welcome. Use the feedback button in the corner, or get in touch.'
    }
  },

  views: [
    {
      id: 'blanco',
      label: 'Blank',
      src: '/materiaal/stride-light-canvas-blanco.png',
      alt: 'Blank STRIDE-light Canvas on A3 with six threat questions in three bands',
      caption: 'The working and hand-in format. Print on A3, fill in with sticky notes or a marker.'
    },
    {
      id: 'voorbeeld',
      label: 'Worked example',
      src: '/materiaal/stride-light-canvas-voorbeeld.png',
      alt: 'Completed STRIDE-light Canvas for the home-care app Naaste case',
      caption:
        'Teacher reference on the same case “Naaste” as the week 1 canvas — deliberately fuller than what teams manage in 50 minutes.'
    }
  ],
  viewsLabel: 'Canvas view',

  dl: {
    label: 'Download A3 (PDF, 2 pages)',
    hint: 'Page 1 is blank for printing, page 2 is the completed teacher reference.'
  },

  // [zone label, explanation, colour variable]
  zones: [
    [
      'Top · What are we looking at',
      'The system in at most six blocks — people, places where data lives, parties outside your own organisation — and the trust boundaries between them, with the asset numbers that cross such a boundary.',
      'var(--w3)'
    ],
    [
      'Middle · The six questions',
      'STRIDE in plain language: impersonating, changing unnoticed, denying afterwards, looking in, being down, gaining more rights. Every question is asked of the same picture, and every answer notes who, what and which asset number.',
      'var(--w4)'
    ],
    [
      'Bottom · What we do with it',
      'Three threats you tackle now: measure, requirement number, and how you would notice it going wrong. Next to it, the strip for what you deliberately left empty or assumed.',
      'var(--w2)'
    ]
  ],
  zonesNote:
    'Two things keep the canvas light enough for 50 minutes. <b>Not every field has to be full</b> — an empty field <i>with a reason</i> is an answer too, and that reason belongs in the strip at the bottom right. And <b>R and D are not technical questions</b>: “can we tell afterwards who did what?” and “what do people do when this is down for a day?” are about process and behaviour, and are exactly where non-technical team members come in.',

  // [phase, artefact, what it adds, colour variable]
  growth: [
    ['Week 1 · block 9', 'Security Context Canvas', 'assets A1, A2 … + abuse cases', 'var(--w1)'],
    ['Week 4 · block 3', 'Architecture sketch', 'the system in at most six blocks', 'var(--w3)'],
    ['Week 4 · block 4', 'STRIDE-light canvas', 'six questions → top-3 threats', 'var(--w4)'],
    ['Week 4 · block 5', 'Traceability matrix', 'requirement → design choice → dossier', 'var(--w2)']
  ],

  contactLink: 'contact',
  pdf: '/materiaal/stride-light-canvas-a3.pdf',
  title: 'STRIDE-light Canvas · Secure by Design'
}

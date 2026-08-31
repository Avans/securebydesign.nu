// Attack-tree Challenge — example page (EN). Draft: not yet approved,
// deliberately kept out of the main navigation.
export default {
  draft:
    'This game material is still in development and has not been approved. The page is deliberately kept out of the menu — feel free to share the link, but read it as a proposal.',
  draftB: 'Draft — version 0.1.',

  hero: {
    kicker: 'Foundation · week 2 · lesson block 8',
    titleLead: 'Attack-tree ',
    titleEm: 'Challenge',
    lede:
      'Thinking like an attacker, as a contest. Every team draws one attacker goal and builds the routes towards it along three branches — people, technology, supply chain. Points for what is plausible, extra points for what nobody else came up with, and the top prize for the cut point: the single measure that severs the most branches at once.'
  },

  chips: ['A3 + 8 goal cards', '4 rounds', '45 minutes', 'teams of 3–4', 'tech & non-tech', 'inherits week 1'],

  sections: {
    s1: {
      no: '01',
      h: 'The material',
      sub: 'Three sheets: the worksheet the team builds on, a worked teacher example, and the goal cards with the score sheet for the jury. Click the image for full resolution.'
    },
    s2: { no: '02', h: 'How the worksheet works' },
    sr: {
      no: '03',
      h: 'The game in four rounds',
      sub: 'Forty-five minutes, tightly timed. The challenge is not a brainstorm: every round has its own output, and the jury — you, or a team sitting a round out — keeps the pace up.'
    },
    s3: {
      no: '04',
      h: 'What it connects to',
      sub: 'The challenge does not stand alone. The asset numbers come from week 1, the vocabulary from the threat cards in block 2, and the cut points are the first measures in the risk profile of block 9. What was <b>A1</b> in week 1 stays <b>A1</b> here.'
    },
    s4: {
      no: '05',
      h: 'Want to weigh in?',
      sub: 'The challenge is still a proposal — feedback on the goal cards, the scoring or the timing is welcome. Use the feedback button in the corner, or get in touch.'
    }
  },

  views: [
    {
      id: 'blanco',
      label: 'Worksheet',
      src: '/materiaal/attack-tree-challenge-blanco.png',
      alt: 'Blank A3 worksheet for the attack-tree challenge with three routes and twelve leaves',
      caption: 'One per team. Print on A3 and fill in with a marker; the jury ticks its marks in the bottom right of each leaf.'
    },
    {
      id: 'voorbeeld',
      label: 'Worked example',
      src: '/materiaal/attack-tree-challenge-voorbeeld.png',
      alt: 'Completed attack tree for the community-care app Naaste, goal card D1',
      caption:
        'Teacher reference on the same case “Naaste” as the week 1 canvas — deliberately fuller than what a team manages in 45 minutes.'
    },
    {
      id: 'doelkaarten',
      label: 'Goal cards & score sheet',
      src: '/materiaal/attack-tree-challenge-doelkaarten.png',
      alt: 'Eight goal cards with attacker goals, plus a score sheet and jury rules',
      caption: 'Cut out the eight cards; keep the score sheet and the jury rules yourself. D8 always belongs in the game.'
    }
  ],
  viewsLabel: 'Material view',

  dl: {
    label: 'Download A3 (PDF, 3 pages)',
    hint: 'Page 1 is printed per team, page 2 is the teacher reference, page 3 holds the goal cards and the score sheet.'
  },

  // [zone label, explanation, colour variable]
  zones: [
    [
      'Top · Goal and attacker',
      'The goal comes off the card and is written in the attacker’s own voice — “I want to …”, never “I hack …”. Beside it the persona non grata: who is this, what does it get them, and where is their limit? A goal without an attacker produces movie plots.',
      'var(--w1)'
    ],
    [
      'Middle · Three routes, twelve leaves',
      'Through people, through devices and technology, through the supply chain and the process. Every leaf gets one sentence of “how exactly?”, an asset number from week 1, and a choice between AND and OR: does this leaf stand on its own, or only together with the one above it?',
      'var(--w2)'
    ],
    [
      'Bottom · Cut point, movie plots and points',
      'Which measure removes the most leaves in one go — and how would you notice someone trying anyway? Next to it the strip for the paths that died on “how exactly?”, and the box where the jury adds up the points.',
      'var(--w3)'
    ]
  ],
  zonesNote:
    'Two rules do most of the work. <b>A path without an asset number is an opinion</b> — that sends teams back to the week 1 canvas and keeps the tree tied to the case. And <b>“how exactly?” has to fit in one sentence</b>, with a Tuesday morning in it: who does what, where, holding what. That is the brake on the Hollywood attack, and at the same time the opening for non-technical team members: the route through people is usually the shortest one, and it takes no code at all.',

  // [time, title, explanation]
  rounds: [
    [
      'Round 1 · 12 min',
      'Build',
      'Each team draws one goal card and keeps it to itself. Three routes, at least two leaves per route. Think out loud, one writer, laptops closed.'
    ],
    [
      'Round 2 · 8 min',
      'Pass on',
      'The sheets move one seat along. The neighbouring team adds what it would have come up with — initialled, because those leaves count for the team that built the tree, not for the one adding them.'
    ],
    [
      'Round 3 · 15 min',
      'Defend',
      'Every team reads out its strongest leaves; the jury asks the same question each time: how exactly? Plausible is one point. Then the question to the room: did anyone else have this? One hand up and the extra point is gone.'
    ],
    [
      'Round 4 · 10 min',
      'Cut point',
      'Back to your own sheet: which single measure severs the most branches, and how would you notice someone trying anyway? Three points — and this is what carries over into block 9.'
    ]
  ],
  roundsNote:
    'The scoring steers the behaviour, and that is deliberate. <b>✔ plausible = 1 point</b> keeps teams away from zero-days and ninjas. <b>★ unique and plausible = 1 extra point</b> rewards the route nobody saw — usually a human or organisational one. <b>✂ the cut point = 3 points</b>, but only with detection: a measure without “how would we notice” is half a measure. Whatever dies on “how exactly?” scores nothing but earns an honourable mention, and one follow-up question: for which attacker <i>would</i> this add up?',

  // [phase, artefact, what it adds, colour variable]
  growth: [
    ['Week 1 · block 9', 'Security Context Canvas', 'assets A1, A2 … + abuse cases', 'var(--w1)'],
    ['Week 2 · block 2', 'Threat cards', 'words for what can go wrong', 'var(--w2)'],
    ['Week 2 · block 8', 'Attack-tree challenge', 'routes → cut point with detection', 'var(--w2)'],
    ['Week 2 · block 9', 'Risk profile', 'top-5 risks + first measures', 'var(--w3)']
  ],

  contactLink: 'contact',
  pdf: '/materiaal/attack-tree-challenge-a3.pdf',
  title: 'Attack-tree Challenge · Secure by Design'
}

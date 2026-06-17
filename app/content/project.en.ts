export default {
  hero: {
    kicker: 'Secure by Design · Phase 3 · talking poster',
    titlePre: 'The ',
    titleEm: 'Cybersecurity project',
    lede: 'In phase 3 you and a team of four or five solve a real cybersecurity problem for a company. The questions differ enormously — a pentest, a NIS2 advisory, a detection solution, an awareness programme — but the route underneath is universal. This poster is that route: an approach that fits any kind of cyber question, with markers showing where you decide the approach yourselves.'
  },
  chips: [
    'phase 3',
    'team of 4–5',
    'a real company as client',
    'any kind of cyber question',
    'universal route',
    'project plan',
    'choices justified'
  ],
  sections: {
    anders: {
      no: '01',
      h: 'Why a cyber project runs differently',
      sub: 'A cyber problem is not an ordinary software project. These differences shape your approach — don’t underestimate them.'
    },
    roadmap: {
      no: '02',
      h: 'The roadmap — a universal project approach',
      intro: 'The content differs per question, the route does not · click a phase open · ◆ = this is where you make choices'
    },
    lanes: {
      no: '03',
      h: 'Continuous tracks',
      sub: 'In a cyber project these are not separate phases but lines that run the entire journey. Neglect one and the project stalls — or worse.',
      tag: 'runs through every phase'
    },
    forks: {
      no: '04',
      h: 'Decision points — where you set your own approach',
      sub: 'The route is fixed, but at these points the team chooses deliberately. Justify every choice in your project plan — that is where the professional judgement lies.'
    },
    team: {
      no: '05',
      h: 'Team & project plan',
      rolesTitle: 'Roles in a team of 4–5',
      rolesSub: 'With four people you combine roles. Feel free to rotate them per phase.',
      pvaTitle: 'In your project plan',
      pvaSub: 'The backbone of phase 2 stays in place, with cyber-specific additions (mandate, law, data handling).'
    }
  },
  anders: [
    ['Mandate before action', 'A1', 'You need explicit permission, scope and rules of engagement before you touch anything. Without a mandate, testing is simply a criminal offence — this is not a formality.'],
    ['Risk-driven, not feature-driven', 'A2', 'You work from threat, risk and compliance, not from user stories. The compass is likelihood × impact, not a feature list.'],
    ['Confidentiality is critical', 'A3', 'You touch sensitive systems and data. Secrecy, secure storage and clean-up are part of the work from day one.'],
    ['Evidence must hold up', 'A4', 'Findings are reproducible and substantiated. You record what you did so someone else can retrace it — auditable, not ‘trust me’.'],
    ['Not just straight into production', 'A5', 'You test in a safe environment or strictly controlled and in consultation. You may not damage or take anything down.'],
    ['Success = risk reduced', 'A6', 'It is not ‘does the feature work’, but ‘is the organisation demonstrably safer’ or ‘has the question been answered with evidence’.'],
    ['Handover counts too', 'A7', 'The organisation must be able to carry on after you. Advice, a playbook or knowledge transfer is part of the result — not ‘done, good luck’.']
  ],
  stages: [
    {
      ph: 'Phase 0',
      ti: 'Assignment & mandate',
      doel: 'Understand the question and set the ground rules before you begin.',
      acts: [
        'Intake conversation: sharpen the assignment, expectations and context',
        'Determine which type of problem this is',
        'Agreements on scope, mandate/permission, confidentiality (NDA) and data handling',
        'Record rules of engagement, point of contact and escalation line'
      ],
      anders: 'Without explicit permission and a delineated scope you may do nothing. This is a legal and ethical precondition to start.',
      keuze: 'Which type of assignment is it — assessment, advisory, build, test, detection or awareness? That choice steers everything that follows.',
      opbr: 'Signed agreements, a clear assignment and clear lines of contact.',
      who: 'The project lead drives it; the whole team reads along and understands the boundaries.'
    },
    {
      ph: 'Phase 1',
      ti: 'Explore & scope',
      doel: 'Understand the context and sharpen the question.',
      acts: [
        'Map assets, stakeholders and the current situation',
        'Explore relevant threats and compliance requirements',
        'Reformulate the central question into something researchable',
        'Define success criteria and an initial risk estimate'
      ],
      anders: 'You map assets, threats and risk appetite instead of functional requirements — the question behind the question.',
      keuze: 'Narrow & deep or broad & high-level? And which framework becomes your anchor: NIST, ISO, OWASP, CIS or something sector-specific?',
      opbr: 'A sharp problem definition, scope and measurable success criteria.',
      who: 'Content lead + client contact.'
    },
    {
      ph: 'Phase 2',
      ti: 'Project plan & research design',
      doel: 'Set out how you tackle it and how you arrive at evidence.',
      acts: [
        'Choose and justify the approach and method',
        'Planning, milestones and role division',
        'Name deliverables, risks and assumptions',
        'Work out ethics, data handling and rules of engagement; for testing also responsible disclosure'
      ],
      anders: 'The plan explicitly includes safety (break nothing), data handling and a fallback plan — parts a software plan often misses.',
      keuze: 'Method (black/grey/white box, qualitative vs quantitative risk, phased vs iterative), environment (lab vs controlled production), and tooling (build your own vs existing).',
      opbr: 'An approved project plan that the client has seen.',
      who: 'The whole team; the project lead guards feasibility and planning.'
    },
    {
      ph: 'Phase 3',
      ti: 'Execute & investigate',
      doel: 'Do the work: gather evidence, test, build, analyse.',
      acts: [
        'Iterate in short cycles with regular check-ins',
        'Record what you do and what you find',
        'Coordinate with the client for anything touching live systems',
        'Check along the way whether you are still answering the question'
      ],
      anders: 'Work reproducibly and logged. If you touch sensitive systems, do so only in consultation and controlled — improvising can cause damage and liability.',
      keuze: 'Depth per finding, steering on time (time-boxed) or on coverage, and how much you automate.',
      opbr: 'Substantiated findings or a working (partial) product, with evidence.',
      who: 'Specialists out front; documentation/quality records the evidence.'
    },
    {
      ph: 'Phase 4',
      ti: 'Analyse, prioritise & advise',
      doel: 'From loose findings to usable, prioritised advice.',
      acts: [
        'Weigh risks on likelihood × impact',
        'Prioritise and cluster findings',
        'Weigh feasibility and trade-offs for this organisation',
        'Draw up recommendations and a roadmap for the client'
      ],
      anders: 'You deliver not a bare list of findings, but prioritised and actionable advice that fits the organisation’s risk appetite and resources.',
      keuze: 'Prioritisation method (risk matrix, CVSS, business impact) and how far you advise: quick wins or a strategic line.',
      opbr: 'Prioritised recommendations with substantiation.',
      who: 'Content lead + project lead.'
    },
    {
      ph: 'Phase 5',
      ti: 'Deliver & hand over',
      doel: 'Deliver so the organisation can carry on by itself.',
      acts: [
        'Deliver the end product: report, prototype, policy, playbook or training',
        'Presentation to the client',
        'Knowledge transfer and — where needed — responsible disclosure',
        'Return or delete sensitive data properly, revoke access'
      ],
      anders: 'Handover and safely settling data and access are part of delivery. In cyber the project does not stop at ‘delivered’.',
      keuze: 'Delivery form and the degree of handover: advise only, or help set up/implement.',
      opbr: 'A delivered and handed-over result with the client’s sign-off.',
      who: 'Communication/presentation out front; the whole team presents.'
    },
    {
      ph: 'Phase 6',
      ti: 'Reflection & closure',
      doel: 'Learn from the project and close it off properly.',
      acts: [
        'Evaluate process, collaboration and result',
        'Individual reflection',
        'Formal closure with the client',
        'Verify that all access and data copies have been cleaned up'
      ],
      anders: '‘Closing’ in cyber also means demonstrably revoking all access and deleting copies of client data.',
      keuze: null,
      opbr: 'An evaluation and a tidy, accountable closure.',
      who: 'The whole team.'
    }
  ],
  lanes: [
    ['Ethics & law', 'Stay within the law and your mandate: permission, GDPR, no harm. In doubt? Coordinate first, don’t act.'],
    ['Confidentiality & data handling', 'Secure storage, secrecy, and clean-up at the end. Treat client data as if it were your own secrets.'],
    ['Stakeholders & communication', 'Manage expectations and coordinate regularly. No surprises for the client — a cyber project is political too.'],
    ['Risk-driven working', 'Tie everything back to likelihood × impact and the original question. That keeps you away from fun-but-irrelevant side paths.'],
    ['Evidence & reproducibility', 'Record, substantiate, make traceable. A finding without evidence is an opinion.'],
    ['Team process & role division', 'Tasks, planning, quality and roles that may rotate. A good process carries the substantive work.']
  ],
  forks: [
    ['Type of assignment', 'F1', ['assessment', 'advisory', 'build / prototype', 'test / pentest', 'detection & response', 'awareness']],
    ['Framing', 'F2', ['risk-driven', 'compliance-driven', 'combination']],
    ['Framework as anchor', 'F3', ['NIST CSF', 'ISO 27001', 'OWASP', 'CIS Controls', 'sector-specific']],
    ['Scope', 'F4', ['narrow & deep', 'broad & high-level']],
    ['Research / test form', 'F5', ['black box', 'grey box', 'white box', 'qualitative risk', 'quantitative risk']],
    ['Environment', 'F6', ['lab / test environment', 'controlled production']],
    ['Building', 'F7', ['build your own', 'existing tooling']],
    ['Process', 'F8', ['phased (waterfall-like)', 'iterative / agile']],
    ['Delivery form', 'F9', ['report', 'prototype', 'policy / playbook', 'training', 'combination']],
    ['Handover', 'F10', ['advice only', 'help set up / implement']]
  ],
  roles: [
    ['Project lead / client contact', 'Planning, stakeholders and scope control. The single face towards the client.'],
    ['Content lead (researcher / architect)', 'Guards the substantive depth and direction of the work.'],
    ['Specialist(s)', 'Technical or governance, depending on the problem — the executing force.'],
    ['Documentation & quality', 'Guards evidence, substantiation and traceability. The ‘evidence keeper’.'],
    ['Communication & presentation', 'Reporting, final presentation and the throughline of the story.']
  ],
  pva: [
    'Rationale & context (client and question)',
    'Objective and problem statement + research question',
    'Scope & delineation — including what is out of scope',
    'Mandate, permission & rules of engagement',
    'Ethics, law (GDPR) & data handling',
    'Approach & method, with justified choices',
    'Planning & milestones',
    'Role division within the team',
    'Deliverables & success criteria',
    'Risks, assumptions & fallback plan',
    'Communication & coordination agreements'
  ],
  footer: {
    left: 'Phase 3 talking poster — The Cybersecurity project · builds on the Secure-by-Design basis and the Professional Profile.',
    right: 'Click a phase open · watch the ◆ decision points.'
  }
}

// Fundament (Flow 1) — English translation. Same shape as fundament.nl.ts.
export default {
  hero: {
    kicker: 'Secure by Design · NLQF6 · talking picture',
    titleLead: 'Security as a ',
    titleEm: 'design quality',
    lede:
      'The first four weeks bring tech and non-tech students to one shared level. Security here is not a final check or a hacking course, but a design attitude: broad across product, process, people and organisation. The practice serves to make knowledge stick before the knowledge test — deep technical skill comes afterwards.'
  },

  chips: [
    'NLQF6',
    '4 weeks',
    '9 blocks/week',
    '7 lessons + 2 processing',
    '36 blocks',
    '10 metro stations',
    'tech + non-tech',
    'knowledge test'
  ],

  sections: {
    s1: { no: '01', h: 'Starting points' },
    s2: {
      no: '02',
      h: 'Metro map — do we cover every topic?',
      sub: 'The nine core topics are "metro stations". Each block calls at one or more stations; the table shows how every topic runs through the four weeks. That way you see at a glance that everything is touched on and where the emphasis lies.'
    },
    s3: {
      no: '03',
      h: 'Sources',
      sub: 'As much off-the-shelf and free as possible. Deliberately split: the core route is broad and design-focused; technical lab tools stay outside it as optional depth, so the minor does not become IT-framed.',
      coreH: 'Core sources — shared foundation',
      coreBd:
        'Concepts, frameworks and NL/EU context that fit the broad design approach. Plus the serious games for the game blocks (block 8).',
      optFlag: 'not in the core route',
      optH: 'Optional — technical depth',
      optBd:
        'Valuable, but too technical for the shared foundation. Offer as a resource bank, demo or deepening track (e.g. LU2 / technical profile). Not centrally required; do not open with these.'
    },
    s4: {
      no: '04',
      h: 'What do we build ourselves?',
      sub: 'The design approach leans on canvases, maps and card sets instead of off-the-shelf tools — so this is where most of the build work sits. Turn on "Highlight to-build" to see which blocks it belongs to.'
    }
  },

  controls: {
    metro: 'Show metro stations',
    mk: 'Highlight to-build'
  },

  legend: [
    { kind: 'dot', wk: 1, label: 'wk1' },
    { kind: 'dot', wk: 2, label: 'wk2' },
    { kind: 'dot', wk: 3, label: 'wk3' },
    { kind: 'dot', wk: 4, label: 'wk4' },
    { kind: 'soc', label: 'block 8 social/game' },
    { kind: 'int', label: 'block 9 integration' },
    { kind: 'mk', label: 'to build to measure' }
  ],

  // Block type labels: [label, icon]
  typeMeta: {
    les: ['lesson', ''],
    soc: ['social · game', '●'],
    int: ['integration', '◆']
  },

  // UI labels reused across cards / table
  labels: {
    week: 'Week',
    blok: 'Block',
    kern: 'Core',
    onderwerpen: 'Topics',
    doen: 'Do',
    stations: 'Stations',
    mkTitle: 'to build to measure',
    mkNoteB: '✎ to build yourself',
    mkNoteBody:
      'For this block, discuss which canvas / card set / template you build in advance.',
    covMetrostation: 'Metro station',
    covWeek: 'Week',
    covBlok: 'block',
    chev: '▸'
  },

  principles: [
    [
      'Secure by Design',
      'P1',
      'Security is a design quality that travels along from the start — not a final check. That is the common thread through all four weeks.'
    ],
    [
      'Broad, not IT-framed',
      'P2',
      'Product, process, people and organisation take centre stage. Do not open with hacking; technology is one angle, not a prerequisite.'
    ],
    [
      '9 blocks per week',
      'P3',
      'Blocks 1–7 are real lessons, block 8 is social/game, block 9 is integration & reflection. Activating formats land in 8 and 9.'
    ],
    [
      'Continuous case',
      'P4',
      'The security context canvas from week 1 grows week after week into the secure-by-design dossier in week 4. One case ties everything together.'
    ],
    [
      'Tech + non-tech equal',
      'P5',
      'The dividing line is comfort with technology, not prior knowledge. Security is new to both; the test is the same for everyone.'
    ],
    [
      'Practice = anchoring',
      'P6',
      'Game, canvas and retrieval serve memory before the knowledge test — not independent capability. That comes after this minor.'
    ]
  ],

  // Metro stations: code -> [name, subtitle/topics]
  stations: {
    S1: [
      'Basics & awareness / product security',
      'CIA-BIV, cryptography & limits, famous failures (OV-chipkaart, DigiNotar, Stuxnet)'
    ],
    S2: [
      'Security mindset & culture',
      'Social engineering, training, not if but when, security first'
    ],
    S3: [
      'Hacker mindset & threats',
      'Black/white/grey hat, dark web, motives, attacker thinking'
    ],
    S4: [
      'Governance & supply chain',
      'GDPR, NIS2, CRA, ISO, NIST, CIS Controls, supply chain'
    ],
    S5: [
      'Threat modelling, monitoring & risk',
      'STRIDE, attack trees, kill chain, SOC, logging, risk analysis'
    ],
    S6: [
      'Security requirements & architecture',
      'Zero trust, defense in depth, rate limiting, key management, access control'
    ],
    S7: [
      'SDLC / PDLC / CI-CD',
      'Security in the software/product lifecycle, CI/CD'
    ],
    S7a: ['SDLC — technical depth', 'Upgrades, patches, supply-chain attacks, SBOM'],
    S8: [
      'Testing, pentest & incident response',
      'Reporting, post-mortem, communication, ITIL, incident response'
    ],
    SO: [
      'Other topics',
      'Phishing, DDoS, MitM, ransomware-as-a-service, IAM, cloud, devices'
    ]
  },

  // Order of stations in the coverage table
  order: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S7a', 'S8', 'SO'],

  // weeks: each block = {b,t,thema,kern,onderw,st,act,old,mk}
  weeks: [
    {
      n: 1,
      theme: 'Mindset & culture',
      phase: 'why & who',
      s: [
        {
          b: 1,
          t: 'les',
          thema: 'Intro Secure by Design: security as a design quality',
          kern: 'Security is not a final check but a design quality that travels along from the start.',
          onderw: 'CIA/BIV, product security, security first; OV-chipkaart, DigiNotar, Stuxnet as failing principles.',
          st: ['S1', 'S2'],
          act: "Short kickoff; whole-class 'what does securely designed mean'; use mini-incidents to recognise BIV/CIA; start a shared glossary card.",
          old: 'Old: S1.1 (opener + primer + live demo). Demo moves; do not open with hacking.',
          mk: true
        },
        {
          b: 2,
          t: 'les',
          thema: 'What can go wrong? Products, services, processes and systems',
          kern: 'Explore damage, impact and risks without diving straight into technology.',
          onderw: 'SMS spoofing, IMEI cloning, stingray, USB, power plants, public infrastructure, robots, supply chain.',
          st: ['S1', 'SO'],
          act: 'Group brainstorm per domain; sort examples by product/service/process/system; discuss damage and impact.',
          old: 'Old: partly S1.1 and S1.4.',
          mk: true
        },
        {
          b: 3,
          t: 'les',
          thema: 'Security principles: least privilege, defense in depth, secure by default',
          kern: 'Basic principles as design rules for safer choices.',
          onderw: 'Cryptography & limits, confidentiality, integrity, authentication, non-repudiation, defense in depth, access control.',
          st: ['S1', 'S6'],
          act: 'Explain principles through recognisable design choices; link to earlier risks; make a short principle card.',
          old: 'Old: partly S1.4. Least privilege / secure-by-default were not explicit — now added.',
          mk: true
        },
        {
          b: 4,
          t: 'les',
          thema: 'Human behaviour and security culture',
          kern: 'Security is bound up with behaviour, routines, responsibility and culture.',
          onderw: 'Social engineering, training/information, not everything is technically solvable, action on a suspected incident.',
          st: ['S2', 'SO'],
          act: "Discuss phishing/social-engineering examples; pair task 'why do people click?'; design one behavioural measure.",
          old: 'Old: S1.2 + S1.3.',
          mk: false
        },
        {
          b: 5,
          t: 'les',
          thema: 'Stakeholders, interests and responsibilities',
          kern: 'Map who has a stake in security and who influences design choices.',
          onderw: 'Threat actors (state, hacker, competitor); interests of user, organisation, supplier, regulator, administrator.',
          st: ['S2', 'S3', 'S4'],
          act: 'Make a stakeholder map; discuss roles and interests; formulate one security expectation per stakeholder.',
          old: 'Old: S1.4.',
          mk: true
        },
        {
          b: 6,
          t: 'les',
          thema: 'Assets and abuse scenarios',
          kern: 'Determine what must be protected and how a design can be abused.',
          onderw: 'Data, processes, systems, people, devices, identity, authentication, access management, data abuse.',
          st: ['S1', 'S3', 'S5', 'SO'],
          act: 'Inventory assets; determine asset value; write first abuse cases from the user, attacker and administrator perspective.',
          old: 'Old: S1.4, partly S1.5 (but broader and less technical than Juice Shop).',
          mk: true
        },
        {
          b: 7,
          t: 'les',
          thema: 'Week yield: security context and first abuse cases',
          kern: 'The week closes substantively with context, assets, stakeholders and first abuse scenarios.',
          onderw: 'Security context, assets, stakeholders, threat actors, vulnerabilities, possible damage, first abuse cases.',
          st: ['S1', 'S2', 'S3', 'S5'],
          act: 'Teams present their context in 3 minutes; peer questions; the teacher makes the shared thread visible.',
          old: 'Old: S1.6 (consolidation).',
          mk: false
        },
        {
          b: 8,
          t: 'soc',
          thema: 'Social block: security bingo / getting acquainted through risks',
          kern: 'Get to know each other through recognisable security situations and dilemmas.',
          onderw: 'Phishing, passwords, losing your phone, public wifi, USB, MFA, social engineering, personal experiences.',
          st: ['S2', 'SO'],
          act: 'Security bingo; dilemma cards; exchange experiences and link them to security culture.',
          old: 'New game block. Content input from S1.3.',
          mk: true
        },
        {
          b: 9,
          t: 'int',
          thema: 'Integration block: security context canvas',
          kern: 'The content of week 1 comes together in one shared case.',
          onderw: 'CIA/BIV, assets, stakeholders, threat actors, first threats, first design principles, first abuse cases.',
          st: ['S1', 'S2', 'S3', 'S5'],
          act: 'Fill in the security context canvas; short gallery walk; keep the canvas as a starting point for week 2.',
          old: 'New core artefact; partly S1.4 + S1.6.',
          mk: true
        }
      ]
    },
    {
      n: 2,
      theme: 'The hostile outside world',
      phase: 'threats & attackers',
      s: [
        {
          b: 1,
          t: 'les',
          thema: 'Attacker thinking: assets, motives, access and impact',
          kern: 'Reason from motives, access points, vulnerabilities and damage.',
          onderw: 'Black/white/grey hat, dark web, stolen data, motives, access, impact, threat actors.',
          st: ['S3', 'SO'],
          act: 'Make an attacker persona; fill in motive-access-impact; whole-class discussion of ethical limits.',
          old: 'Old: S2.1 (hacker mindset).',
          mk: true
        },
        {
          b: 2,
          t: 'les',
          thema: 'Threats in a digital and organisational context',
          kern: 'Look at threats broadly: digital, physical, human, procedural and organisational.',
          onderw: 'Phishing, DDoS, MitM, ransomware-as-a-service, social engineering, supply-chain attacks, cloud, devices.',
          st: ['S1', 'S3', 'SO'],
          act: 'Sort a threat card set; link threats to case assets; short threat-landscape mini-jigsaw.',
          old: 'Old: S2.2 (threat landscape).',
          mk: true
        },
        {
          b: 3,
          t: 'les',
          thema: 'Incident analysis: where did the design fail?',
          kern: 'Analyse an incident as the result of choices in design, process, behaviour, technology or governance.',
          onderw: 'OV-chipkaart, DigiNotar, certificate authority, Stuxnet, zero-day, failing security principles.',
          st: ['S1', 'S3', 'S5', 'S8'],
          act: 'Incident case in groups; build a cause-effect chain; indicate which security principle failed.',
          old: 'New in wk2; related to S3.5 (post-mortem).',
          mk: true
        },
        {
          b: 4,
          t: 'les',
          thema: 'OWASP / MITRE as examples of threat thinking',
          kern: 'Get acquainted with frameworks that help recognise and order threats.',
          onderw: 'CVE, OWASP, MITRE, cyber kill chain, CVSS, interpreting and classifying vulnerabilities.',
          st: ['S3', 'S4', 'S5'],
          act: 'Short framework tour; classify example vulnerabilities; compare MITRE/OWASP/CVE as an ordering language.',
          old: 'Old: S2.1 + S2.2.',
          mk: false
        },
        {
          b: 5,
          t: 'les',
          thema: 'Estimating risks: likelihood, impact, priority',
          kern: 'Weigh and prioritise risks — not every threat is equally important.',
          onderw: 'Information at risk → threats → mitigations; vulnerability, threat, risk, measure, CVSS.',
          st: ['S5', 'S6'],
          act: 'Fill in a risk matrix; pick the top 5 risks; substantiate likelihood/impact.',
          old: 'Old: S2.5 (risk analysis).',
          mk: true
        },
        {
          b: 6,
          t: 'les',
          thema: 'First design measures: prevent, limit, detect, recover',
          kern: 'Link risks to first measures and design choices.',
          onderw: 'Mitigations, CIS Controls, access control, logging, rate limiting, defense in depth, cryptography, key management.',
          st: ['S5', 'S6', 'S4'],
          act: 'Devise measures per top risk; classify into prevent/limit/detect/recover; note first design decisions.',
          old: 'New/expanded relative to S2.5.',
          mk: false
        },
        {
          b: 7,
          t: 'les',
          thema: 'Intro to monitoring and detection',
          kern: 'Designing securely also means anomalies become visible and discussable.',
          onderw: 'Security Operations Centre, logging/monitoring, logging of security-relevant actions, detection as a design choice.',
          st: ['S5', 'S8'],
          act: 'Discuss what you want to see in logs; formulate detection questions; link monitoring as a design choice to risks.',
          old: 'Old: S2.6 (monitoring).',
          mk: false
        },
        {
          b: 8,
          t: 'soc',
          thema: 'Social/game block: threat card game or attack-tree challenge',
          kern: 'Teams practise attacker thinking and threat recognition.',
          onderw: 'Attack trees, persona non grata, cyber kill chain; link threats to asset, motive, access, impact.',
          st: ['S3', 'S5'],
          act: 'Attack-tree challenge in teams; points for creativity and plausibility; short debrief on design implications.',
          old: 'Old: S2.1 (attack tree) + S2.3 (STRIDE game). Possibly Cornucopia/EoP as a card game.',
          mk: true
        },
        {
          b: 9,
          t: 'int',
          thema: 'Integration block: risk profile + first design measures',
          kern: 'The week ends with a prioritised list of risks and first measures for the case.',
          onderw: 'Top threats, risk prioritisation, first CIS Controls, mitigations, design measures, detection points.',
          st: ['S3', 'S4', 'S5', 'S6'],
          act: 'Deliver a risk profile; review measures; make the link to governance questions for week 3.',
          old: 'Old: S2.4 + S2.5 + S2.6.',
          mk: true
        }
      ]
    },
    {
      n: 3,
      theme: 'Governance & organisation',
      phase: '+ incident response',
      s: [
        {
          b: 1,
          t: 'les',
          thema: 'Governance-light: roles, responsibilities and ownership',
          kern: 'Security calls for clear roles, decision-making, ownership and agreements.',
          onderw: 'Security governance, responsibilities, ownership, not if but when, action on a suspected incident.',
          st: ['S4', 'S2'],
          act: 'Make a RACI-light; discuss ownership of risks; sketch an escalation path.',
          old: 'Old: S3.1 (governance).',
          mk: true
        },
        {
          b: 2,
          t: 'les',
          thema: 'Compliance versus security',
          kern: 'The difference between meeting the rules and actually designing securely.',
          onderw: 'GDPR, NIS2, CRA, ISO, NIST, HIPAA, SOC 2; rule-compliant vs. actually secure.',
          st: ['S4'],
          act: 'Case questions: when are you compliant but not yet secure? Translate rules into design questions.',
          old: 'Old: S3.2 (legislation & compliance).',
          mk: false
        },
        {
          b: 3,
          t: 'les',
          thema: 'ISO 27001 in outline',
          kern: 'ISO 27001 as a management system for information security, risks and improvement.',
          onderw: 'ISO, NIST, policy, risk analysis, controls, continuous improvement, relation to broader frameworks.',
          st: ['S4', 'S5'],
          act: 'Link the PDCA cycle to security; controls as control measures; make a mini control card.',
          old: 'Old: S3.1 (governance).',
          mk: true
        },
        {
          b: 4,
          t: 'les',
          thema: 'NIS2, GDPR and CRA in outline',
          kern: 'Laws and regulations as context for design decisions.',
          onderw: 'NIS2, GDPR, CRA, product security, privacy, duty of care, supply-chain responsibility.',
          st: ['S4', 'S1'],
          act: 'Legislation poster per group; translate core obligations into consequences for design or organisation.',
          old: 'Old: S3.2 (legislation & compliance).',
          mk: true
        },
        {
          b: 5,
          t: 'les',
          thema: 'Supply chain security',
          kern: 'Investigate dependencies on suppliers, software, data, platforms and supply-chain partners.',
          onderw: 'Supply chain (attacks), Software Bill of Materials, suppliers, cloud, data, software, platforms.',
          st: ['S4', 'S7a', 'SO'],
          act: 'Make a dependency map; mark blind-trust points; discuss SBOM as a concept.',
          old: 'Old: S3.3 (supply chain).',
          mk: true
        },
        {
          b: 6,
          t: 'les',
          thema: 'Organisational measures: awareness, procedures, authorisations',
          kern: 'Security measures are also organisational and behavioural.',
          onderw: 'Training, awareness, procedures, identity, authentication, access management, insurance.',
          st: ['S2', 'S4', 'SO'],
          act: 'Make a measures menu; compare technical vs. organisational measures; design an awareness intervention.',
          old: 'Old: partly S3.1 + S1.3.',
          mk: false
        },
        {
          b: 7,
          t: 'les',
          thema: 'Incident response, crisis communication and trust',
          kern: 'Design for the moment when it goes wrong.',
          onderw: 'Incident response, reporting, repair/post-mortem, external communication, ITIL, acting on incidents.',
          st: ['S8', 'S2', 'S4'],
          act: 'Discuss the incident lifecycle; make a communication card; prepare post-mortem questions.',
          old: 'Old: S3.4 + S3.5.',
          mk: true
        },
        {
          b: 8,
          t: 'soc',
          thema: 'Social/game block: Backdoors & Breaches',
          kern: 'Experience incident response, roles, detection, communication and decision-making under pressure.',
          onderw: 'Incident response, SOC thinking, logging, monitoring, reporting, external communication, post-mortem, team roles.',
          st: ['S8', 'S5', 'S4', 'S2'],
          act: 'Play Backdoors & Breaches; assign roles; observers watch communication, decision-making and escalation.',
          old: 'Old: S3.4. Direct match — off-the-shelf game.',
          mk: false
        },
        {
          b: 9,
          t: 'int',
          thema: 'Integration block: governance map + response agreements',
          kern: 'The week ends with roles, responsibilities, compliance points and response agreements.',
          onderw: 'Governance map, supply-chain dependencies, legislation, incident procedure, communication and recovery agreements.',
          st: ['S4', 'S8', 'S2'],
          act: 'Deliver a governance map; process lessons learned from the game; link response agreements to the case.',
          old: 'Old: S3.5 + S3.6.',
          mk: true
        }
      ]
    },
    {
      n: 4,
      theme: 'Design & testing',
      phase: 'requirements → testing',
      s: [
        {
          b: 1,
          t: 'les',
          thema: 'Formulating security requirements',
          kern: 'Translate risks into concrete, testable and relevant security requirements.',
          onderw: 'Security requirements, information at risk → threats → mitigations, CIS Controls as input.',
          st: ['S6', 'S5', 'S4'],
          act: 'Turn risks into requirements; make requirements SMART/testable; formulate first acceptance criteria.',
          old: 'Old: S4.1 (from threat to requirement).',
          mk: true
        },
        {
          b: 2,
          t: 'les',
          thema: 'Choosing measures: technology, process, behaviour and organisation',
          kern: 'Weigh measures from effectiveness, feasibility and context.',
          onderw: 'Applying CIS Controls, implementation groups, roadmap, auditable questions, technical + organisational.',
          st: ['S6', 'S4', 'S2'],
          act: 'Prioritise measures; discuss trade-offs; link controls to risks and organisational context.',
          old: 'New; CIS controls as an explicit measures framework (missing in the old HTML).',
          mk: false
        },
        {
          b: 3,
          t: 'les',
          thema: 'Architecture and design principles, broadly explained',
          kern: 'Architecture broadly: layers, boundaries, access, responsibilities and coherence.',
          onderw: 'Zero trust, defense in depth, silos, rate limiting, access control, key management, cryptography, post-quantum.',
          st: ['S6', 'S1', 'SO'],
          act: 'Improve a deliberately bad design; apply design principles; make an architecture sketch.',
          old: 'Old: S4.2 (secure architecture).',
          mk: true
        },
        {
          b: 4,
          t: 'les',
          thema: 'Threat modelling as a shared design language',
          kern: 'Threat modelling connects technology, process, organisation, behaviour and risk in one shared language.',
          onderw: 'Threat modelling in general, STRIDE, PASTA, LINDDUN, persona non grata, attack trees.',
          st: ['S5', 'S6'],
          act: 'Make or sharpen a threat model on the case; use STRIDE-light; link threats to design choices.',
          old: 'Old: S2.3 + S2.4. Whiteboard/canvas instead of a technical tool.',
          mk: true
        },
        {
          b: 5,
          t: 'les',
          thema: 'From requirement to design choice',
          kern: 'Establish traceability from risk to design decision.',
          onderw: 'Threat → risk → requirement → measure → design decision; logging, access control, cryptography, monitoring.',
          st: ['S6', 'S5'],
          act: 'Fill in a traceability matrix; substantiate design decisions; mark gaps in the chain.',
          old: 'Old: partly S4.1 + S4.2.',
          mk: true
        },
        {
          b: 6,
          t: 'les',
          thema: 'Security in the lifecycle: design, build, use, maintain',
          kern: 'Security as a continuous process throughout the entire lifecycle.',
          onderw: 'SDLC, PDLC, CI/CD, upgrade/downgrade/patches, supply-chain attacks, SBOM, setting up a project.',
          st: ['S7', 'S7a', 'S4'],
          act: 'Make a lifecycle map; place security activities in design/build/test/maintain; discuss patching and SBOM.',
          old: 'Old: S4.3 (SDLC short + CI/CD).',
          mk: true
        },
        {
          b: 7,
          t: 'les',
          thema: 'Testing and validating: how do you know it is more secure?',
          kern: 'How design choices are tested and validated.',
          onderw: 'Testing, pentesting, simulations, reporting, repair/post-mortem, CVE/CVSS to interpret findings.',
          st: ['S8', 'S5', 'S6'],
          act: 'Match test types to requirements; check acceptance criteria; make a validation-plan-light.',
          old: 'Old: S4.4 + S4.5 (concepts; hands-on labs optional).',
          mk: true
        },
        {
          b: 8,
          t: 'soc',
          thema: 'Social block: peer review carousel',
          kern: 'Teams defend design choices and give feedback from different roles.',
          onderw: 'Roles: attacker, user, compliance, administration, communication, architecture; feedback on substantiation.',
          st: ['S6', 'S5', 'S4', 'S8'],
          act: 'Peer review carousel; each team assessed from multiple roles; turn feedback into improvement actions.',
          old: 'New; replaces/broadens S4.6.',
          mk: true
        },
        {
          b: 9,
          t: 'int',
          thema: 'Integration block: secure-by-design dossier + test preparation',
          kern: 'Everything comes together in a mini-dossier; preparing for case-based reasoning.',
          onderw: 'Context, assets, threats, risks, governance, requirements, architecture, lifecycle, monitoring, test, response.',
          st: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'SO'],
          act: 'Finish the mini secure-by-design dossier; make a concept map; discuss practice case questions.',
          old: 'Old: S4.6 (synthesis & test preparation).',
          mk: true
        }
      ]
    }
  ],

  // Source groups: [groupTitle, [ [name, url, desc], ... ]]
  core: [
    [
      'Concepts & frameworks',
      [
        ['OWASP Top 10', 'https://owasp.org/Top10/', 'most common web risks as a language'],
        ['OWASP ASVS', 'https://owasp.org/www-project-application-security-verification-standard/', 'requirements thinking'],
        ['OWASP SAMM', 'https://owaspsamm.org', 'governance / maturity'],
        ['CIS Controls', 'https://www.cisecurity.org/controls', 'concrete measures framework'],
        ['MITRE ATT&CK', 'https://attack.mitre.org', 'attack techniques & detection'],
        ['Cyber Kill Chain', 'https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html', 'attack phases'],
        ['Threat modelling (OWASP)', 'https://owasp.org/www-community/Threat_Modeling', 'STRIDE & methods'],
        ['CVE / CVSS (NVD)', 'https://nvd.nist.gov', 'interpret & score vulnerabilities'],
        ['NIST CSF', 'https://www.nist.gov/cyberframework', 'governance peg'],
        ['NIST SSDF', 'https://csrc.nist.gov/projects/ssdf', 'secure development lifecycle'],
        ['ISO 27001 (overview)', 'https://www.iso.org/standard/27001', 'infosec management system']
      ]
    ],
    [
      'NL / EU & law',
      [
        ['NCSC-NL', 'https://www.ncsc.nl', 'incl. former DTC: 5 basic principles, CyberVeilig Check'],
        ['ENISA Threat Landscape', 'https://www.enisa.europa.eu', 'EU threat overview'],
        ['Dutch Data Protection Authority', 'https://www.autoriteitpersoonsgegevens.nl', 'GDPR & data-breach notification duty (72h)'],
        ['NIS2 (EU)', 'https://digital-strategy.ec.europa.eu/en/policies/nis2-directive', 'duty of care & supply-chain responsibility'],
        ['Cyber Resilience Act', 'https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act', 'product security in the EU']
      ]
    ],
    [
      'Serious games (block 8)',
      [
        ['Backdoors & Breaches', 'https://play.backdoorsandbreaches.com', 'incident response — free online'],
        ['Elevation of Privilege', 'https://github.com/adamshostack/eop', 'STRIDE card game (free PDF)'],
        ['OWASP Cornucopia', 'https://cornucopia.owasp.org', 'threat-modelling card game']
      ]
    ],
    [
      'Awareness',
      [
        ['Google Phishing Quiz', 'https://phishingquiz.withgoogle.com', 'awareness exercise'],
        ['Veiliginternetten', 'https://veiliginternetten.nl', 'accessible NL resource']
      ]
    ]
  ],
  opt: [
    [
      'Lab environments (depth)',
      [
        ['OWASP Juice Shop', 'https://owasp.org/www-project-juice-shop/', 'demo or LU2 / technical profile'],
        ['TryHackMe', 'https://tryhackme.com', 'optional deepening track'],
        ['PortSwigger Academy', 'https://portswigger.net/web-security', 'web-hacking resource bank'],
        ['PicoCTF', 'https://picoctf.org', 'optional activity / CTF']
      ]
    ],
    [
      'Tools & primer (optional)',
      [
        ['OWASP Threat Dragon', 'https://www.threatdragon.org', 'tool demo; prefer canvas for the basics'],
        ['Cloudflare Learning Center', 'https://www.cloudflare.com/learning/', 'network primer as prework'],
        ['MDN — How the web works', 'https://developer.mozilla.org/en-US/docs/Learn', 'prework browser/HTTP']
      ]
    ]
  ],

  // make: [groupTitle, [ [name, when], ... ]]
  make: [
    [
      'Canvases & maps — the backbone',
      [
        ['Security context canvas', 'W1·9 (core artefact, runs throughout)'],
        ['Stakeholder map', 'W1·5'],
        ['Asset & abuse-case canvas', 'W1·6'],
        ['Attacker persona', 'W2·1'],
        ['Risk matrix', 'W2·5'],
        ['Risk profile', 'W2·9'],
        ['RACI-light', 'W3·1'],
        ['Dependency map', 'W3·5'],
        ['Governance map', 'W3·9'],
        ['Traceability matrix', 'W4·5'],
        ['Lifecycle map', 'W4·6'],
        ['Secure-by-design dossier', 'W4·9 (final artefact)']
      ]
    ],
    [
      'Card sets & game material',
      [
        ['Principle cards', 'W1·3'],
        ['Security bingo + dilemma cards', 'W1·8'],
        ['Threat-card sorting set', 'W2·2'],
        ['Attack-tree challenge', 'W2·8'],
        ['STRIDE-light canvas', 'W4·4'],
        ['Test-types match-up', 'W4·7'],
        ['Role cards peer review', 'W4·8']
      ]
    ],
    [
      'Choosing / assembling cases',
      [
        ['Continuous venture / fictional company', 'runs through all weeks'],
        ['Incident case', 'W2·3'],
        ['Breach write-up', 'W3·7'],
        ['Legislation-poster case', 'W3·4'],
        ["'Badly designed' architecture (A4)", 'W4·3']
      ]
    ],
    [
      'Retrieval, slides & assessment',
      [
        ['Weekly quiz (Kahoot/Menti)', 'at block 7 or 9'],
        ['Glossary card', 'W1·1'],
        ['Kickoff slides', 'W1·1'],
        ['Framework-tour slides', 'W2·4'],
        ['Monitoring intro', 'W2·7'],
        ['Practice case questions + knowledge test', 'W4·9']
      ]
    ]
  ],

  ready: {
    b: 'Off-the-shelf — do not build yourself',
    body: 'Backdoors & Breaches (W3·8), Elevation of Privilege / Cornucopia (game blocks), the framework references (OWASP, MITRE, CIS, CVE/CVSS) and the Google Phishing Quiz. You build on these; you do not need to develop them.'
  },

  footer: {
    left: 'Talking picture for the Secure-by-Design master overview · 4 weeks × 9 blocks.',
    right: 'Click a block for detail · switches above for layers.'
  }
}

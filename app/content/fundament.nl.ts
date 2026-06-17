// Fundament (Flow 1) — Dutch content. All strings verbatim from the original praatplaat.
export default {
  hero: {
    kicker: 'Secure by Design · NLQF6 · praatplaat',
    titleLead: 'Veiligheid als ',
    titleEm: 'ontwerpkwaliteit',
    lede:
      'De eerste vier weken brengen tech én non-tech naar één gezamenlijk niveau. Security is hier geen eindcontrole of hackcursus, maar een ontwerphouding: breed over product, proces, mens en organisatie. De praktijk dient om kennis te laten beklijven vóór de kennistoets — diepe technische vaardigheid komt erna.'
  },

  chips: [
    'NLQF6',
    '4 weken',
    '9 blokken/week',
    '7 lessen + 2 verwerking',
    '36 blokken',
    '10 metrostations',
    'tech + non-tech',
    'kennistoets'
  ],

  sections: {
    s1: { no: '01', h: 'Uitgangspunten' },
    s2: {
      no: '02',
      h: 'Metrokaart — dekken we alle onderwerpen?',
      sub: 'De negen kernonderwerpen zijn "metrostations". Elk blok doet één of meer stations aan; de tabel laat zien hoe elk onderwerp door de vier weken loopt. Zo zie je in één oogopslag dat alles geraakt wordt én waar het zwaartepunt ligt.'
    },
    s3: {
      no: '03',
      h: 'Bronnen',
      sub: 'Zoveel mogelijk kant-en-klaar en gratis. Bewust gesplitst: de kernroute is breed en ontwerpgericht; technische lab-tools blijven daarbuiten als optionele verdieping, zodat de minor niet ICT-geframed raakt.',
      coreH: 'Kernbronnen — gezamenlijke basis',
      coreBd:
        'Concepten, frameworks en NL/EU-context die passen bij de brede ontwerpinsteek. Plus de serious games voor de spelblokken (blok 8).',
      optFlag: 'niet in de kernroute',
      optH: 'Optioneel — technische verdieping',
      optBd:
        'Waardevol, maar te technisch voor de gezamenlijke basis. Aanbieden als bronnenbank, demo of verdiepingsspoor (bijv. LU2 / technisch profiel). Niet centraal verplicht; níét mee openen.'
    },
    s4: {
      no: '04',
      h: 'Wat maken we zélf?',
      sub: 'De ontwerpinsteek leunt op canvases, maps en kaartsets in plaats van kant-en-klare tools — dus hier zit het meeste maakwerk. Zet "Zelf te maken markeren" aan om te zien bij welke blokken het hoort.'
    }
  },

  controls: {
    metro: 'Metrostations tonen',
    mk: 'Zelf te maken markeren'
  },

  legend: [
    { kind: 'dot', wk: 1, label: 'wk1' },
    { kind: 'dot', wk: 2, label: 'wk2' },
    { kind: 'dot', wk: 3, label: 'wk3' },
    { kind: 'dot', wk: 4, label: 'wk4' },
    { kind: 'soc', label: 'blok 8 sociaal/spel' },
    { kind: 'int', label: 'blok 9 integratie' },
    { kind: 'mk', label: 'op maat te maken' }
  ],

  // Block type labels: [label, icon]
  typeMeta: {
    les: ['les', ''],
    soc: ['sociaal · spel', '●'],
    int: ['integratie', '◆']
  },

  // UI labels reused across cards / table
  labels: {
    week: 'Week',
    blok: 'Blok',
    kern: 'Kern',
    onderwerpen: 'Onderwerpen',
    doen: 'Doen',
    stations: 'Stations',
    mkTitle: 'op maat te maken',
    mkNoteB: '✎ zelf te maken',
    mkNoteBody:
      'Bespreek bij dit blok welk canvas / kaartset / sjabloon je vooraf bouwt.',
    covMetrostation: 'Metrostation',
    covWeek: 'Week',
    covBlok: 'blok',
    chev: '▸'
  },

  principles: [
    [
      'Secure by Design',
      'P1',
      'Veiligheid is een ontwerpkwaliteit die vanaf het begin meegaat — geen eindcontrole. Dat is de rode draad door alle vier de weken.'
    ],
    [
      'Breed, niet ICT-geframed',
      'P2',
      'Product, proces, mens en organisatie staan centraal. Niet met hacken openen; techniek is één invalshoek, geen voorwaarde.'
    ],
    [
      '9 blokken per week',
      'P3',
      'Blok 1–7 zijn echte lessen, blok 8 is sociaal/spel, blok 9 is integratie & reflectie. Activerende werkvormen landen in 8 en 9.'
    ],
    [
      'Doorlopende casus',
      'P4',
      'Het security-context canvas uit week 1 groeit week na week door tot het secure-by-design dossier in week 4. Eén casus verbindt alles.'
    ],
    [
      'Tech + non-tech gelijk',
      'P5',
      'Scheidslijn is techniek-comfort, niet voorkennis. Security is voor allebei nieuw; de toets is voor iedereen gelijk.'
    ],
    [
      'Praktijk = ankeren',
      'P6',
      'Spel, canvas en retrieval dienen het onthouden vóór de kennistoets — niet het zelfstandig kunnen. Dat komt na deze minor.'
    ]
  ],

  // Metro stations: code -> [name, subtitle/onderwerpen]
  stations: {
    S1: [
      'Basis & bewustwording / product security',
      'CIA-BIV, cryptografie & grenzen, beroemde fouten (OV-chip, DigiNotar, Stuxnet)'
    ],
    S2: [
      'Security mindset & cultuur',
      'Social engineering, training, niet óf maar wanneer, security first'
    ],
    S3: [
      'Hacker-mindset & dreigingen',
      'Black/white/grey hat, dark web, motieven, aanvallersdenken'
    ],
    S4: [
      'Governance & supply chain',
      'AVG, NIS2, CRA, ISO, NIST, CIS Controls, supply chain'
    ],
    S5: [
      'Threat modelling, monitoring & risico',
      'STRIDE, attack trees, kill chain, SOC, logging, risicoanalyse'
    ],
    S6: [
      'Security requirements & architectuur',
      'Zero trust, defense in depth, rate limiting, key management, access control'
    ],
    S7: [
      'SDLC / PDLC / CI-CD',
      'Security in de software-/productlevenscyclus, CI/CD'
    ],
    S7a: ['SDLC — technische diepgang', 'Upgrades, patches, supply-chain attacks, SBOM'],
    S8: [
      'Testing, pentest & incident response',
      'Rapportage, post-mortem, communicatie, ITIL, incident response'
    ],
    SO: [
      'Overige onderwerpen',
      'Phishing, DDoS, MitM, ransomware-as-a-service, IAM, cloud, devices'
    ]
  },

  // Order of stations in the coverage table
  order: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S7a', 'S8', 'SO'],

  // weeks: each block = {b,t,thema,kern,onderw,st,act,old,mk}
  weeks: [
    {
      n: 1,
      theme: 'Mindset & cultuur',
      phase: 'waarom & wie',
      s: [
        {
          b: 1,
          t: 'les',
          thema: 'Intro Secure by Design: veiligheid als ontwerpkwaliteit',
          kern: 'Security is geen eindcontrole maar een ontwerpkwaliteit die vanaf het begin meegaat.',
          onderw: 'CIA/BIV, product security, security first; OV-chipkaart, DigiNotar, Stuxnet als falende principes.',
          st: ['S1', 'S2'],
          act: "Korte kickoff; klassikaal 'wat is veilig ontworpen'; mini-incidenten gebruiken om BIV/CIA te herkennen; gezamenlijke begrippenkaart starten.",
          old: 'Oud: S1.1 (opener + primer + live demo). Demo verschuift; niet met hacken openen.',
          mk: true
        },
        {
          b: 2,
          t: 'les',
          thema: 'Wat kan er misgaan? Producten, diensten, processen en systemen',
          kern: 'Schade, impact en risico\'s verkennen zonder direct in techniek te schieten.',
          onderw: 'Sms-spoofing, IMEI-cloning, stingray, USB, energiecentrales, publieke infra, robots, supply chain.',
          st: ['S1', 'SO'],
          act: 'Groepsbrainstorm per domein; voorbeelden sorteren op product/dienst/proces/systeem; bespreking van schade en impact.',
          old: 'Oud: deels S1.1 en S1.4.',
          mk: true
        },
        {
          b: 3,
          t: 'les',
          thema: 'Security-principes: least privilege, defense in depth, secure by default',
          kern: 'Basisprincipes als ontwerpregels voor veiligere keuzes.',
          onderw: 'Cryptografie & grenzen, vertrouwelijkheid, integriteit, authenticatie, onweerlegbaarheid, defense in depth, access control.',
          st: ['S1', 'S6'],
          act: 'Principes uitleggen via herkenbare ontwerpkeuzes; koppelen aan eerdere risico\'s; kort principekaartje maken.',
          old: 'Oud: deels S1.4. Least privilege / secure-by-default ontbraken expliciet — nu toegevoegd.',
          mk: true
        },
        {
          b: 4,
          t: 'les',
          thema: 'Menselijk gedrag en securitycultuur',
          kern: 'Security hangt samen met gedrag, routines, verantwoordelijkheid en cultuur.',
          onderw: 'Social engineering, training/informatie, niet alles is technisch oplosbaar, actie bij vermoed incident.',
          st: ['S2', 'SO'],
          act: "Phishing/social-engineering voorbeelden bespreken; duo-opdracht 'waarom klikken mensen?'; ontwerp van één gedragsmaatregel.",
          old: 'Oud: S1.2 + S1.3.',
          mk: false
        },
        {
          b: 5,
          t: 'les',
          thema: 'Stakeholders, belangen en verantwoordelijkheden',
          kern: 'In kaart brengen wie belang heeft bij security en wie invloed heeft op ontwerpkeuzes.',
          onderw: 'Bedreigers (staat, hacker, concurrent); belangen van gebruiker, organisatie, leverancier, toezichthouder, beheerder.',
          st: ['S2', 'S3', 'S4'],
          act: 'Stakeholdermap maken; rollen en belangen bespreken; per stakeholder één securityverwachting formuleren.',
          old: 'Oud: S1.4.',
          mk: true
        },
        {
          b: 6,
          t: 'les',
          thema: 'Assets en misbruikscenario\'s',
          kern: 'Bepalen wat beschermd moet worden en hoe een ontwerp misbruikt kan worden.',
          onderw: 'Data, processen, systemen, mensen, apparaten, identity, authentication, access management, datamisbruik.',
          st: ['S1', 'S3', 'S5', 'SO'],
          act: 'Assets inventariseren; assetwaarde bepalen; eerste abuse cases schrijven vanuit gebruiker, aanvaller en beheerder.',
          old: 'Oud: S1.4, deels S1.5 (maar breder en minder technisch dan Juice Shop).',
          mk: true
        },
        {
          b: 7,
          t: 'les',
          thema: 'Weekopbrengst: security-context en eerste abuse cases',
          kern: 'De week sluit inhoudelijk af met context, assets, stakeholders en eerste misbruikscenario\'s.',
          onderw: 'Security-context, assets, stakeholders, bedreigers, kwetsbaarheden, mogelijke schade, eerste abuse cases.',
          st: ['S1', 'S2', 'S3', 'S5'],
          act: 'Teams presenteren hun context in 3 minuten; peer-vragen; docent maakt de gezamenlijke rode draad zichtbaar.',
          old: 'Oud: S1.6 (consolidatie).',
          mk: false
        },
        {
          b: 8,
          t: 'soc',
          thema: 'Sociaal blok: security bingo / kennismaking via risico\'s',
          kern: 'Elkaar leren kennen via herkenbare security-situaties en dilemma\'s.',
          onderw: 'Phishing, wachtwoorden, telefoonverlies, publieke wifi, USB, MFA, social engineering, persoonlijke ervaringen.',
          st: ['S2', 'SO'],
          act: 'Security bingo; dilemma-kaarten; ervaringen uitwisselen en koppelen aan securitycultuur.',
          old: 'Nieuw spelblok. Inhoudelijke input uit S1.3.',
          mk: true
        },
        {
          b: 9,
          t: 'int',
          thema: 'Integratieblok: security context canvas',
          kern: 'De inhoud van week 1 komt samen in één gezamenlijke casus.',
          onderw: 'CIA/BIV, assets, stakeholders, bedreigers, eerste dreigingen, eerste ontwerpprincipes, eerste abuse cases.',
          st: ['S1', 'S2', 'S3', 'S5'],
          act: 'Security context canvas invullen; korte gallery walk; canvas bewaren als startpunt voor week 2.',
          old: 'Nieuw kernartefact; deels S1.4 + S1.6.',
          mk: true
        }
      ]
    },
    {
      n: 2,
      theme: 'De boze buitenwereld',
      phase: 'dreigingen & aanvallers',
      s: [
        {
          b: 1,
          t: 'les',
          thema: 'Aanvallersdenken: assets, motieven, toegang en impact',
          kern: 'Redeneren vanuit motieven, toegangspunten, kwetsbaarheden en schade.',
          onderw: 'Black/white/grey hat, dark web, gestolen data, motieven, toegang, impact, bedreigers.',
          st: ['S3', 'SO'],
          act: 'Attackerspersona maken; motief-toegang-impact invullen; klassikale bespreking van ethische grenzen.',
          old: 'Oud: S2.1 (hacker-mindset).',
          mk: true
        },
        {
          b: 2,
          t: 'les',
          thema: 'Dreigingen in digitale én organisatorische context',
          kern: 'Dreigingen breed bekijken: digitaal, fysiek, menselijk, procesmatig en organisatorisch.',
          onderw: 'Phishing, DDoS, MitM, ransomware-as-a-service, social engineering, supply-chain attacks, cloud, devices.',
          st: ['S1', 'S3', 'SO'],
          act: 'Dreigingskaart sorteren; dreigingen koppelen aan casus-assets; korte threat-landscape mini-jigsaw.',
          old: 'Oud: S2.2 (threat landscape).',
          mk: true
        },
        {
          b: 3,
          t: 'les',
          thema: 'Incidentanalyse: waar faalde het ontwerp?',
          kern: 'Een incident analyseren als gevolg van keuzes in ontwerp, proces, gedrag, techniek of governance.',
          onderw: 'OV-chipkaart, DigiNotar, certificate authority, Stuxnet, zero-day, falende beveiligingsprincipes.',
          st: ['S1', 'S3', 'S5', 'S8'],
          act: 'Incidentcasus in groepen; oorzaak-gevolg-keten maken; aangeven welk securityprincipe faalde.',
          old: 'Nieuw in wk2; verwant aan S3.5 (post-mortem).',
          mk: true
        },
        {
          b: 4,
          t: 'les',
          thema: 'OWASP / MITRE als voorbeelden van dreigingsdenken',
          kern: 'Kennismaken met frameworks die dreigingen helpen herkennen en ordenen.',
          onderw: 'CVE, OWASP, MITRE, cyber kill chain, CVSS, kwetsbaarheden duiden en classificeren.',
          st: ['S3', 'S4', 'S5'],
          act: 'Korte frameworktour; voorbeeldkwetsbaarheden classificeren; MITRE/OWASP/CVE vergelijken als ordeningstaal.',
          old: 'Oud: S2.1 + S2.2.',
          mk: false
        },
        {
          b: 5,
          t: 'les',
          thema: 'Risico\'s inschatten: kans, impact, prioriteit',
          kern: 'Risico\'s wegen en prioriteren — niet elke dreiging is even belangrijk.',
          onderw: 'Information at risk → threats → mitigations; kwetsbaarheid, dreiging, risico, maatregel, CVSS.',
          st: ['S5', 'S6'],
          act: 'Risicomatrix invullen; top 5 risico\'s kiezen; kans/impact onderbouwen.',
          old: 'Oud: S2.5 (risicoanalyse).',
          mk: true
        },
        {
          b: 6,
          t: 'les',
          thema: 'Eerste ontwerpmaatregelen: voorkomen, beperken, detecteren, herstellen',
          kern: 'Risico\'s koppelen aan eerste maatregelen en ontwerpkeuzes.',
          onderw: 'Mitigations, CIS Controls, access control, logging, rate limiting, defense in depth, cryptografie, key management.',
          st: ['S5', 'S6', 'S4'],
          act: 'Per toprisico maatregelen bedenken; indelen in voorkomen/beperken/detecteren/herstellen; eerste ontwerpbesluiten noteren.',
          old: 'Nieuw/uitgebreid t.o.v. S2.5.',
          mk: false
        },
        {
          b: 7,
          t: 'les',
          thema: 'Intro monitoring en detectie',
          kern: 'Veilig ontwerpen betekent ook dat afwijkingen zichtbaar en bespreekbaar worden.',
          onderw: 'Security Operations Centre, logging/monitoring, logging van security-relevante acties, detectie als ontwerpkeuze.',
          st: ['S5', 'S8'],
          act: 'Bespreken wat je in logs wilt zien; detectievragen formuleren; monitoring als ontwerpkeuze koppelen aan risico\'s.',
          old: 'Oud: S2.6 (monitoring).',
          mk: false
        },
        {
          b: 8,
          t: 'soc',
          thema: 'Sociaal/spelblok: dreigingenkaartspel of attack-tree challenge',
          kern: 'Teams oefenen met aanvallersdenken en dreigingsherkenning.',
          onderw: 'Attack trees, persona non grata, cyber kill chain; dreigingen koppelen aan asset, motief, toegang, impact.',
          st: ['S3', 'S5'],
          act: 'Attack-tree challenge in teams; punten voor creativiteit én plausibiliteit; korte debrief op ontwerpimplicaties.',
          old: 'Oud: S2.1 (attack tree) + S2.3 (STRIDE-spel). Eventueel Cornucopia/EoP als kaartspel.',
          mk: true
        },
        {
          b: 9,
          t: 'int',
          thema: 'Integratieblok: risicoprofiel + eerste ontwerpmaatregelen',
          kern: 'De week eindigt met een prioriteitenlijst van risico\'s en eerste maatregelen voor de casus.',
          onderw: 'Topdreigingen, risicoprioritering, eerste CIS Controls, mitigaties, ontwerpmaatregelen, detectiepunten.',
          st: ['S3', 'S4', 'S5', 'S6'],
          act: 'Risicoprofiel opleveren; maatregelen reviewen; link leggen met governancevragen voor week 3.',
          old: 'Oud: S2.4 + S2.5 + S2.6.',
          mk: true
        }
      ]
    },
    {
      n: 3,
      theme: 'Governance & organisatie',
      phase: '+ incident response',
      s: [
        {
          b: 1,
          t: 'les',
          thema: 'Governance-light: rollen, verantwoordelijkheden en eigenaarschap',
          kern: 'Security vraagt om duidelijke rollen, besluitvorming, eigenaarschap en afspraken.',
          onderw: 'Security governance, verantwoordelijkheden, eigenaarschap, niet óf maar wanneer, actie bij vermoed incident.',
          st: ['S4', 'S2'],
          act: 'RACI-light maken; eigenaarschap van risico\'s bespreken; escalatiepad schetsen.',
          old: 'Oud: S3.1 (governance).',
          mk: true
        },
        {
          b: 2,
          t: 'les',
          thema: 'Compliance versus security',
          kern: 'Het verschil tussen voldoen aan regels en daadwerkelijk veilig ontwerpen.',
          onderw: 'AVG/GDPR, NIS2, CRA, ISO, NIST, HIPAA, SOC 2; regelconform vs. werkelijk veilig.',
          st: ['S4'],
          act: 'Casusvragen: wanneer ben je compliant maar nog niet veilig? Regels vertalen naar ontwerpvragen.',
          old: 'Oud: S3.2 (wetgeving & compliance).',
          mk: false
        },
        {
          b: 3,
          t: 'les',
          thema: 'ISO 27001 op hoofdlijnen',
          kern: 'ISO 27001 als managementsysteem voor informatiebeveiliging, risico\'s en verbetering.',
          onderw: 'ISO, NIST, beleid, risicoanalyse, controls, continu verbeteren, relatie met bredere frameworks.',
          st: ['S4', 'S5'],
          act: 'PDCA-cyclus koppelen aan security; controls als beheersmaatregelen; mini-controlkaart maken.',
          old: 'Oud: S3.1 (governance).',
          mk: true
        },
        {
          b: 4,
          t: 'les',
          thema: 'NIS2, AVG en CRA op hoofdlijnen',
          kern: 'Wet- en regelgeving als context voor ontwerpbeslissingen.',
          onderw: 'NIS2, AVG/GDPR, CRA, product security, privacy, zorgplicht, ketenverantwoordelijkheid.',
          st: ['S4', 'S1'],
          act: 'Wetgevingsposter per groep; kernverplichtingen vertalen naar gevolgen voor ontwerp of organisatie.',
          old: 'Oud: S3.2 (wetgeving & compliance).',
          mk: true
        },
        {
          b: 5,
          t: 'les',
          thema: 'Supply chain security',
          kern: 'Afhankelijkheden van leveranciers, software, data, platformen en ketenpartners onderzoeken.',
          onderw: 'Supply chain (attacks), Software Bill of Materials, leveranciers, cloud, data, software, platforms.',
          st: ['S4', 'S7a', 'SO'],
          act: 'Dependency map maken; blind-trust-punten markeren; SBOM als concept bespreken.',
          old: 'Oud: S3.3 (supply chain).',
          mk: true
        },
        {
          b: 6,
          t: 'les',
          thema: 'Organisatorische maatregelen: awareness, procedures, autorisaties',
          kern: 'Securitymaatregelen zijn ook organisatorisch en gedragsmatig.',
          onderw: 'Training, awareness, procedures, identity, authentication, access management, verzekeringen.',
          st: ['S2', 'S4', 'SO'],
          act: 'Maatregelenmenu maken; technische vs. organisatorische maatregelen vergelijken; awareness-interventie ontwerpen.',
          old: 'Oud: deels S3.1 + S1.3.',
          mk: false
        },
        {
          b: 7,
          t: 'les',
          thema: 'Incident response, crisiscommunicatie en vertrouwen',
          kern: 'Ontwerpen voor het moment waarop het misgaat.',
          onderw: 'Incident response, rapportage, reparatie/post-mortem, externe communicatie, ITIL, handelen bij incidenten.',
          st: ['S8', 'S2', 'S4'],
          act: 'Incident lifecycle bespreken; communicatiekaart maken; post-mortemvragen voorbereiden.',
          old: 'Oud: S3.4 + S3.5.',
          mk: true
        },
        {
          b: 8,
          t: 'soc',
          thema: 'Sociaal/spelblok: Backdoors & Breaches',
          kern: 'Incident response, rollen, detectie, communicatie en besluitvorming onder druk ervaren.',
          onderw: 'Incident response, SOC-denken, logging, monitoring, rapportage, externe communicatie, post-mortem, teamrollen.',
          st: ['S8', 'S5', 'S4', 'S2'],
          act: 'Backdoors & Breaches spelen; rollen verdelen; observatoren letten op communicatie, besluitvorming en escalatie.',
          old: 'Oud: S3.4. Rechtstreekse match — kant-en-klaar spel.',
          mk: false
        },
        {
          b: 9,
          t: 'int',
          thema: 'Integratieblok: governancekaart + responsafspraken',
          kern: 'De week eindigt met rollen, verantwoordelijkheden, compliancepunten en responsafspraken.',
          onderw: 'Governancekaart, ketenafhankelijkheden, wetgeving, incidentprocedure, communicatie- en herstelafspraken.',
          st: ['S4', 'S8', 'S2'],
          act: 'Governancekaart opleveren; lessons learned uit het spel verwerken; responsafspraken koppelen aan de casus.',
          old: 'Oud: S3.5 + S3.6.',
          mk: true
        }
      ]
    },
    {
      n: 4,
      theme: 'Ontwerp & testing',
      phase: 'requirements → testen',
      s: [
        {
          b: 1,
          t: 'les',
          thema: 'Security requirements formuleren',
          kern: 'Risico\'s vertalen naar concrete, toetsbare en relevante security-eisen.',
          onderw: 'Security requirements, information at risk → threats → mitigations, CIS Controls als input.',
          st: ['S6', 'S5', 'S4'],
          act: 'Risico\'s omzetten naar requirements; eisen SMART/toetsbaar maken; eerste acceptatiecriteria formuleren.',
          old: 'Oud: S4.1 (van dreiging naar eis).',
          mk: true
        },
        {
          b: 2,
          t: 'les',
          thema: 'Maatregelen kiezen: techniek, proces, gedrag en organisatie',
          kern: 'Maatregelen afwegen vanuit effectiviteit, haalbaarheid en context.',
          onderw: 'CIS Controls toepassen, implementation groups, roadmap, auditbare vragen, technisch + organisatorisch.',
          st: ['S6', 'S4', 'S2'],
          act: 'Maatregelen prioriteren; trade-offs bespreken; controls koppelen aan risico\'s en organisatiecontext.',
          old: 'Nieuw; CIS-controls als expliciet maatregelenkader (ontbrak in oude HTML).',
          mk: false
        },
        {
          b: 3,
          t: 'les',
          thema: 'Architectuur en ontwerpprincipes, breed uitgelegd',
          kern: 'Architectuur breed: lagen, grenzen, toegang, verantwoordelijkheden en samenhang.',
          onderw: 'Zero trust, defense in depth, silo\'s, rate limiting, access control, key management, cryptografie, post-quantum.',
          st: ['S6', 'S1', 'SO'],
          act: 'Bewust slecht ontwerp verbeteren; ontwerpprincipes toepassen; architectuurschets maken.',
          old: 'Oud: S4.2 (secure architecture).',
          mk: true
        },
        {
          b: 4,
          t: 'les',
          thema: 'Threat modelling als gezamenlijke ontwerptaal',
          kern: 'Threat modelling verbindt techniek, proces, organisatie, gedrag en risico in één gedeelde taal.',
          onderw: 'Threat modelling algemeen, STRIDE, PASTA, LINDDUN, persona non grata, attack trees.',
          st: ['S5', 'S6'],
          act: 'Threat model op de casus maken of aanscherpen; STRIDE-light gebruiken; bedreigingen koppelen aan ontwerpkeuzes.',
          old: 'Oud: S2.3 + S2.4. Whiteboard/canvas i.p.v. technische tool.',
          mk: true
        },
        {
          b: 5,
          t: 'les',
          thema: 'Van requirement naar ontwerpkeuze',
          kern: 'Traceerbaarheid aanleggen van risico naar ontwerpbeslissing.',
          onderw: 'Dreiging → risico → requirement → maatregel → ontwerpbeslissing; logging, access control, cryptografie, monitoring.',
          st: ['S6', 'S5'],
          act: 'Traceability matrix invullen; ontwerpbeslissingen onderbouwen; gaten in de keten markeren.',
          old: 'Oud: deels S4.1 + S4.2.',
          mk: true
        },
        {
          b: 6,
          t: 'les',
          thema: 'Security in de lifecycle: ontwerp, bouw, gebruik, beheer',
          kern: 'Security als doorlopend proces gedurende de hele levenscyclus.',
          onderw: 'SDLC, PDLC, CI/CD, upgrade/downgrade/patches, supply-chain attacks, SBOM, project opzetten.',
          st: ['S7', 'S7a', 'S4'],
          act: 'Lifecycle-map maken; security-activiteiten plaatsen in ontwerp/bouw/test/beheer; patching en SBOM bespreken.',
          old: 'Oud: S4.3 (SDLC kort + CI/CD).',
          mk: true
        },
        {
          b: 7,
          t: 'les',
          thema: 'Testen en valideren: hoe weet je dat het veiliger is?',
          kern: 'Hoe ontwerpkeuzes worden getoetst en gevalideerd.',
          onderw: 'Testing, pentesting, simulaties, rapportage, reparatie/post-mortem, CVE/CVSS om bevindingen te duiden.',
          st: ['S8', 'S5', 'S6'],
          act: 'Testsoorten matchen aan requirements; acceptatiecriteria controleren; validatieplan-light maken.',
          old: 'Oud: S4.4 + S4.5 (concepten; hands-on labs optioneel).',
          mk: true
        },
        {
          b: 8,
          t: 'soc',
          thema: 'Sociaal blok: peer review carrousel',
          kern: 'Teams verdedigen ontwerpkeuzes en geven feedback vanuit verschillende rollen.',
          onderw: 'Rollen: aanvaller, gebruiker, compliance, beheer, communicatie, architectuur; feedback op onderbouwing.',
          st: ['S6', 'S5', 'S4', 'S8'],
          act: 'Peer review carrousel; elk team beoordeeld vanuit meerdere rollen; feedback omzetten naar verbeteracties.',
          old: 'Nieuw; vervangt/verbreedt S4.6.',
          mk: true
        },
        {
          b: 9,
          t: 'int',
          thema: 'Integratieblok: secure-by-design dossier + toetsvoorbereiding',
          kern: 'Alles komt samen in een mini-dossier; voorbereiden op casusgericht redeneren.',
          onderw: 'Context, assets, dreigingen, risico\'s, governance, requirements, architectuur, lifecycle, monitoring, test, respons.',
          st: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'SO'],
          act: 'Mini secure-by-design dossier afronden; conceptmap maken; oefencasusvragen bespreken.',
          old: 'Oud: S4.6 (synthese & toetsvoorbereiding).',
          mk: true
        }
      ]
    }
  ],

  // Source groups: [groupTitle, [ [name, url, desc], ... ]]
  core: [
    [
      'Concepten & frameworks',
      [
        ['OWASP Top 10', 'https://owasp.org/Top10/', "meest voorkomende web-risico's als taal"],
        ['OWASP ASVS', 'https://owasp.org/www-project-application-security-verification-standard/', 'requirements-denken'],
        ['OWASP SAMM', 'https://owaspsamm.org', 'governance / volwassenheid'],
        ['CIS Controls', 'https://www.cisecurity.org/controls', 'concreet maatregelenkader'],
        ['MITRE ATT&CK', 'https://attack.mitre.org', 'aanvalstechnieken & detectie'],
        ['Cyber Kill Chain', 'https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html', 'aanvalsfasen'],
        ['Threat modelling (OWASP)', 'https://owasp.org/www-community/Threat_Modeling', 'STRIDE & methodes'],
        ['CVE / CVSS (NVD)', 'https://nvd.nist.gov', 'kwetsbaarheden duiden & scoren'],
        ['NIST CSF', 'https://www.nist.gov/cyberframework', 'governance-kapstok'],
        ['NIST SSDF', 'https://csrc.nist.gov/projects/ssdf', 'secure development lifecycle'],
        ['ISO 27001 (overzicht)', 'https://www.iso.org/standard/27001', 'managementsysteem infosec']
      ]
    ],
    [
      'NL / EU & recht',
      [
        ['NCSC-NL', 'https://www.ncsc.nl', 'incl. voormalig DTC: 5 basisprincipes, CyberVeilig Check'],
        ['ENISA Threat Landscape', 'https://www.enisa.europa.eu', 'EU-dreigingsoverzicht'],
        ['Autoriteit Persoonsgegevens', 'https://www.autoriteitpersoonsgegevens.nl', 'AVG & datalek-meldplicht (72u)'],
        ['NIS2 (EU)', 'https://digital-strategy.ec.europa.eu/en/policies/nis2-directive', 'zorgplicht & ketenverantwoordelijkheid'],
        ['Cyber Resilience Act', 'https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act', 'product security in de EU']
      ]
    ],
    [
      'Serious games (blok 8)',
      [
        ['Backdoors & Breaches', 'https://play.backdoorsandbreaches.com', 'incident response — gratis online'],
        ['Elevation of Privilege', 'https://github.com/adamshostack/eop', 'STRIDE-kaartspel (gratis PDF)'],
        ['OWASP Cornucopia', 'https://cornucopia.owasp.org', 'threat-modelling kaartspel']
      ]
    ],
    [
      'Awareness',
      [
        ['Google Phishing Quiz', 'https://phishingquiz.withgoogle.com', 'awareness-oefening'],
        ['Veiliginternetten', 'https://veiliginternetten.nl', 'laagdrempelige NL-bron']
      ]
    ]
  ],
  opt: [
    [
      'Lab-omgevingen (verdieping)',
      [
        ['OWASP Juice Shop', 'https://owasp.org/www-project-juice-shop/', 'demo of LU2 / technisch profiel'],
        ['TryHackMe', 'https://tryhackme.com', 'optioneel verdiepingsspoor'],
        ['PortSwigger Academy', 'https://portswigger.net/web-security', 'bronnenbank webhacking'],
        ['PicoCTF', 'https://picoctf.org', 'keuzeactiviteit / CTF']
      ]
    ],
    [
      'Tools & primer (optioneel)',
      [
        ['OWASP Threat Dragon', 'https://www.threatdragon.org', 'tool-demo; basis liever op canvas'],
        ['Cloudflare Learning Center', 'https://www.cloudflare.com/learning/', 'netwerk-primer als prework'],
        ['MDN — How the web works', 'https://developer.mozilla.org/en-US/docs/Learn', 'prework browser/HTTP']
      ]
    ]
  ],

  // make: [groupTitle, [ [name, when], ... ]]
  make: [
    [
      'Canvases & maps — de ruggengraat',
      [
        ['Security context canvas', 'W1·9 (kernartefact, loopt door)'],
        ['Stakeholdermap', 'W1·5'],
        ['Asset- & abuse-case canvas', 'W1·6'],
        ['Attackerspersona', 'W2·1'],
        ['Risicomatrix', 'W2·5'],
        ['Risicoprofiel', 'W2·9'],
        ['RACI-light', 'W3·1'],
        ['Dependency map', 'W3·5'],
        ['Governancekaart', 'W3·9'],
        ['Traceability matrix', 'W4·5'],
        ['Lifecycle-map', 'W4·6'],
        ['Security-by-design dossier', 'W4·9 (eindartefact)']
      ]
    ],
    [
      'Kaartsets & spelmateriaal',
      [
        ['Principekaartjes', 'W1·3'],
        ['Security bingo + dilemmakaarten', 'W1·8'],
        ['Dreigingskaarten-sorteerset', 'W2·2'],
        ['Attack-tree challenge', 'W2·8'],
        ['STRIDE-light canvas', 'W4·4'],
        ['Testsoorten match-up', 'W4·7'],
        ['Rollenkaarten peer-review', 'W4·8']
      ]
    ],
    [
      'Casussen kiezen / samenstellen',
      [
        ['Doorlopende venture / fictief bedrijf', 'loopt door alle weken'],
        ['Incidentcasus', 'W2·3'],
        ['Breach-writeup', 'W3·7'],
        ['Wetgevingsposter-casus', 'W3·4'],
        ["'Slecht ontworpen' architectuur (A4)", 'W4·3']
      ]
    ],
    [
      'Retrieval, slides & toetsing',
      [
        ['Weekquiz (Kahoot/Menti)', 'bij blok 7 of 9'],
        ['Begrippenkaart', 'W1·1'],
        ['Kickoff-slides', 'W1·1'],
        ['Framework-tour slides', 'W2·4'],
        ['Monitoring-intro', 'W2·7'],
        ['Oefencasusvragen + kennistoets', 'W4·9']
      ]
    ]
  ],

  ready: {
    b: 'Kant-en-klaar — niet zelf maken',
    body: 'Backdoors & Breaches (W3·8), Elevation of Privilege / Cornucopia (spelblokken), de framework-referenties (OWASP, MITRE, CIS, CVE/CVSS) en de Google Phishing Quiz. Hierop bouw je voort; je hoeft ze niet te ontwikkelen.'
  },

  footer: {
    left: 'Praatplaat bij het Secure-by-Design masteroverzicht · 4 weken × 9 blokken.',
    right: 'Klik een blok voor detail · schakelaars boven voor lagen.'
  }
}

export default {
  hero: {
    kicker: 'Secure by Design · Fase 3 · praatplaat',
    titlePre: 'Het ',
    titleEm: 'Cybersecurity-project',
    lede: 'In fase 3 los je met een team van vier à vijf een echt cybersecurity-vraagstuk op voor een bedrijf. De vragen verschillen enorm — een pentest, een NIS2-advies, een detectie-oplossing, een awareness-traject — maar de route eronder is universeel. Deze plaat is die route: een aanpak die past op elk type cybervraag, met daarin gemarkeerd waar jullie zélf de aanpak bepalen.'
  },
  chips: [
    'fase 3',
    'team van 4–5',
    'echt bedrijf als opdrachtgever',
    'elk type cybervraag',
    'universele route',
    'plan van aanpak',
    'keuzes onderbouwd'
  ],
  sections: {
    anders: {
      no: '01',
      h: 'Waarom een cyber-project anders loopt',
      sub: 'Een cybervraagstuk is geen gewoon softwareproject. Deze verschillen bepalen je aanpak — onderschat ze niet.'
    },
    roadmap: {
      no: '02',
      h: 'De roadmap — universele projectaanpak',
      intro: 'De inhoud verschilt per vraag, de route niet · klik een fase open · ◆ = hier maak je keuzes'
    },
    lanes: {
      no: '03',
      h: 'Doorlopende sporen',
      sub: 'Dit zijn in een cyber-project geen losse fasen maar lijnen die de héle rit meelopen. Verwaarloos je er één, dan loopt het project vast — of erger.',
      tag: 'loopt door alle fasen heen'
    },
    forks: {
      no: '04',
      h: 'Keuzepunten — waar je je eigen aanpak bepaalt',
      sub: 'De route ligt vast, maar op deze punten kiest het team bewust. Onderbouw elke keuze in je plan van aanpak — dáár zit het professionele oordeel.'
    },
    team: {
      no: '05',
      h: 'Team & plan van aanpak',
      rolesTitle: 'Rollen in een team van 4–5',
      rolesSub: 'Bij vier personen combineer je rollen. Laat ze gerust rouleren per fase.',
      pvaTitle: 'In je plan van aanpak',
      pvaSub: 'De ruggengraat van fase 2 blijft staan, met cyber-specifieke toevoegingen (mandaat, recht, databeheer).'
    }
  },
  anders: [
    ['Mandaat vóór actie', 'A1', 'Je hebt expliciete toestemming, scope en rules of engagement nodig vóórdat je iets aanraakt. Zonder mandaat is testen simpelweg strafbaar — dit is geen formaliteit.'],
    ['Risicogestuurd, niet feature-gestuurd', 'A2', 'Je werkt vanuit dreiging, risico en compliance, niet vanuit user stories. Het kompas is kans × impact, niet een functielijst.'],
    ['Vertrouwelijkheid is kritisch', 'A3', 'Je raakt gevoelige systemen en data. Geheimhouding, veilige opslag en netjes opruimen horen vanaf dag één bij het werk.'],
    ['Bewijs moet kloppen', 'A4', 'Bevindingen zijn reproduceerbaar en onderbouwd. Je legt vast wat je deed, zodat een ander het kan nalopen — auditbaar, niet ‘trust me’.'],
    ['Niet zomaar in productie', 'A5', 'Je test in een veilige omgeving of strikt gecontroleerd en in overleg. Je mag niets beschadigen of platleggen.'],
    ['Succes = risico verlaagd', 'A6', 'Het is niet ‘werkt de functie’, maar ‘is de organisatie aantoonbaar veiliger’ of ‘is de vraag met bewijs beantwoord’.'],
    ['Overdracht telt mee', 'A7', 'De organisatie moet ná jullie verder kunnen. Advies, playbook of kennisoverdracht hoort bij het resultaat — niet ‘klaar, succes ermee’.']
  ],
  stages: [
    {
      ph: 'Fase 0',
      ti: 'Opdracht & mandaat',
      doel: 'Begrijp de vraag en leg de spelregels vast vóór je begint.',
      acts: [
        'Intakegesprek: opdracht, verwachtingen en context scherp krijgen',
        'Bepaal welk type vraagstuk dit is',
        'Afspraken over scope, mandaat/toestemming, geheimhouding (NDA) en databeheer',
        'Rules of engagement, contactpersoon en escalatielijn vastleggen'
      ],
      anders: 'Zonder expliciete toestemming en afgebakende scope mag je niets. Dit is een juridische én ethische voorwaarde om te starten.',
      keuze: 'Welk type opdracht is het — assessment, advies, bouw, test, detectie of awareness? Die keuze stuurt de hele rest.',
      opbr: 'Getekende afspraken, een heldere opdracht en duidelijke contactlijnen.',
      who: 'Projectlead trekt; hele team leest mee en begrijpt de grenzen.'
    },
    {
      ph: 'Fase 1',
      ti: 'Verkennen & afbakenen',
      doel: 'Begrijp de context en maak de vraag scherp.',
      acts: [
        'Assets, stakeholders en de huidige situatie in kaart brengen',
        'Relevante dreigingen en compliance-eisen verkennen',
        'De centrale vraag herformuleren tot iets onderzoekbaars',
        'Succescriteria en een eerste risico-inschatting bepalen'
      ],
      anders: 'Je brengt assets, dreigingen en risicobereidheid in kaart in plaats van functionele eisen — de vraag áchter de vraag.',
      keuze: 'Smal & diep of breed & globaal? En welk raamwerk wordt je kapstok: NIST, ISO, OWASP, CIS of iets sector-specifieks?',
      opbr: 'Een scherpe probleemdefinitie, scope en meetbare succescriteria.',
      who: 'Lead inhoud + opdrachtgevercontact.'
    },
    {
      ph: 'Fase 2',
      ti: 'Plan van aanpak & onderzoeksopzet',
      doel: 'Leg vast hóe je het aanpakt en hoe je tot bewijs komt.',
      acts: [
        'Aanpak en methode kiezen en onderbouwen',
        'Planning, mijlpalen en rolverdeling',
        'Deliverables, risico’s en aannames benoemen',
        'Ethiek, databeheer en rules of engagement uitwerken; bij testen ook responsible disclosure'
      ],
      anders: 'Het plan bevat expliciet veiligheid (niets breken), databeheer en een terugvalplan — onderdelen die een softwareplan vaak mist.',
      keuze: 'Methode (black/grey/white box, kwalitatief vs kwantitatief risico, gefaseerd vs iteratief), omgeving (lab vs gecontroleerde productie), en tooling (zelf bouwen vs bestaand).',
      opbr: 'Een goedgekeurd plan van aanpak dat de opdrachtgever heeft gezien.',
      who: 'Hele team; projectlead bewaakt haalbaarheid en planning.'
    },
    {
      ph: 'Fase 3',
      ti: 'Uitvoeren & onderzoeken',
      doel: 'Doe het werk: verzamel bewijs, test, bouw, analyseer.',
      acts: [
        'In korte slagen itereren met regelmatige check-ins',
        'Vastleggen wat je doet en wat je vindt',
        'Afstemmen met de opdrachtgever bij alles wat live systemen raakt',
        'Tussentijds toetsen of je nog antwoord geeft op de vraag'
      ],
      anders: 'Werk reproduceerbaar en gelogd. Raak je gevoelige systemen, dan uitsluitend in overleg en gecontroleerd — improviseren kan schade en aansprakelijkheid geven.',
      keuze: 'Diepte per bevinding, sturen op tijd (time-boxed) of op dekking, en hoeveel je automatiseert.',
      opbr: 'Onderbouwde bevindingen of een werkend (deel)product, met bewijs.',
      who: 'Specialisten voorop; documentatie/kwaliteit legt bewijs vast.'
    },
    {
      ph: 'Fase 4',
      ti: 'Analyseren, prioriteren & adviseren',
      doel: 'Van losse bevindingen naar bruikbaar, geprioriteerd advies.',
      acts: [
        'Risico’s wegen op kans × impact',
        'Bevindingen prioriteren en clusteren',
        'Haalbaarheid en trade-offs voor déze organisatie meewegen',
        'Aanbevelingen en een roadmap voor de klant opstellen'
      ],
      anders: 'Je levert geen kale lijst bevindingen, maar geprioriteerd en uitvoerbaar advies dat past bij de risicobereidheid en middelen van de organisatie.',
      keuze: 'Prioriteringsmethode (risicomatrix, CVSS, business impact) en hoe ver je adviseert: quick wins of een strategische lijn.',
      opbr: 'Geprioriteerde aanbevelingen met onderbouwing.',
      who: 'Lead inhoud + projectlead.'
    },
    {
      ph: 'Fase 5',
      ti: 'Opleveren & overdragen',
      doel: 'Lever op zodat de organisatie er zelf mee verder kan.',
      acts: [
        'Eindproduct opleveren: rapport, prototype, beleid, playbook of training',
        'Presentatie aan de opdrachtgever',
        'Kennisoverdracht en — waar nodig — responsible disclosure',
        'Gevoelige data netjes teruggeven of verwijderen, toegang intrekken'
      ],
      anders: 'Overdracht en het veilig afhandelen van data en toegang hóren bij de oplevering. In cyber stopt het project niet bij ‘opgeleverd’.',
      keuze: 'Oplevervorm en de mate van overdracht: alleen adviseren, of mede inrichten/implementeren.',
      opbr: 'Een opgeleverd én overgedragen resultaat met akkoord van de opdrachtgever.',
      who: 'Communicatie/presentatie voorop; hele team presenteert.'
    },
    {
      ph: 'Fase 6',
      ti: 'Reflectie & afsluiting',
      doel: 'Leer van het project en sluit netjes af.',
      acts: [
        'Proces, samenwerking en resultaat evalueren',
        'Individuele reflectie',
        'Formele afsluiting met de opdrachtgever',
        'Controleren dat alle toegang en datakopieën zijn opgeruimd'
      ],
      anders: '‘Afsluiten’ betekent in cyber ook aantoonbaar alle toegang intrekken en kopieën van klantdata verwijderen.',
      keuze: null,
      opbr: 'Een evaluatie en een nette, verantwoorde afsluiting.',
      who: 'Hele team.'
    }
  ],
  lanes: [
    ['Ethiek & recht', 'Blijf binnen de wet en je mandaat: toestemming, AVG, geen schade. Twijfel je? Eerst afstemmen, niet doen.'],
    ['Vertrouwelijkheid & databeheer', 'Veilige opslag, geheimhouding, en aan het eind opruimen. Behandel klantdata alsof het je eigen geheimen zijn.'],
    ['Stakeholders & communicatie', 'Verwachtingen managen en regelmatig afstemmen. Geen verrassingen voor de opdrachtgever — een cyberproject is ook politiek.'],
    ['Risicogestuurd werken', 'Koppel alles terug naar kans × impact en de oorspronkelijke vraag. Dat houdt je weg bij leuke-maar-irrelevante zijpaden.'],
    ['Bewijs & reproduceerbaarheid', 'Leg vast, onderbouw, maak navolgbaar. Een bevinding zonder bewijs is een mening.'],
    ['Teamproces & rolverdeling', 'Taken, planning, kwaliteit en rollen die mogen rouleren. Een goed proces draagt het inhoudelijke werk.']
  ],
  forks: [
    ['Type opdracht', 'F1', ['assessment', 'advies', 'bouw / prototype', 'test / pentest', 'detectie & respons', 'awareness']],
    ['Framing', 'F2', ['risicogestuurd', 'compliancegestuurd', 'combinatie']],
    ['Raamwerk als kapstok', 'F3', ['NIST CSF', 'ISO 27001', 'OWASP', 'CIS Controls', 'sector-specifiek']],
    ['Scope', 'F4', ['smal & diep', 'breed & globaal']],
    ['Onderzoeks- / testvorm', 'F5', ['black box', 'grey box', 'white box', 'kwalitatief risico', 'kwantitatief risico']],
    ['Omgeving', 'F6', ['lab / testomgeving', 'gecontroleerde productie']],
    ['Maken', 'F7', ['zelf bouwen', 'bestaande tooling']],
    ['Proces', 'F8', ['gefaseerd (waterval-achtig)', 'iteratief / agile']],
    ['Oplevervorm', 'F9', ['rapport', 'prototype', 'beleid / playbook', 'training', 'combinatie']],
    ['Overdracht', 'F10', ['alleen advies', 'mede inrichten / implementeren']]
  ],
  roles: [
    ['Projectlead / opdrachtgevercontact', 'Planning, stakeholders en scopebewaking. Het ene gezicht naar de opdrachtgever.'],
    ['Lead inhoud (onderzoeker / architect)', 'Bewaakt de inhoudelijke diepte en richting van het werk.'],
    ['Specialist(en)', 'Techniek of governance, afhankelijk van het vraagstuk — de uitvoerende kracht.'],
    ['Documentatie & kwaliteit', 'Bewaakt bewijs, onderbouwing en navolgbaarheid. De ‘evidence-keeper’.'],
    ['Communicatie & presentatie', 'Verslag, eindpresentatie en de rode draad in het verhaal.']
  ],
  pva: [
    'Aanleiding & context (opdrachtgever en vraag)',
    'Doel- en probleemstelling + onderzoeksvraag',
    'Scope & afbakening — inclusief wat níét',
    'Mandaat, toestemming & rules of engagement',
    'Ethiek, recht (AVG) & databeheer',
    'Aanpak & methode, met onderbouwde keuzes',
    'Planning & mijlpalen',
    'Rolverdeling in het team',
    'Deliverables & succescriteria',
    'Risico’s, aannames & terugvalplan',
    'Communicatie- & overlegafspraken'
  ],
  footer: {
    left: 'Praatplaat fase 3 — Het Cybersecurity-project · sluit aan op de Secure-by-Design basis en het Professioneel Profiel.',
    right: 'Klik een fase open · let op de ◆ keuzepunten.'
  }
}

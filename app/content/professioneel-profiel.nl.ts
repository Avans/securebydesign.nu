// Secure by Design — Fase 2: Professioneel Profiel. Inspiratie-praatplaat (NL).
// Mirrors the original standalone HTML data so the Vue component can v-for.

export default {
  hero: {
    kicker: 'Secure by Design · Fase 2 · praatplaat',
    title: 'Het <em>Professioneel Profiel</em>',
    lede: 'Fase 1 bracht iedereen naar één gezamenlijke basis. In fase 2 stap je uit bij een station en ga je de diepte in: je kiest één of meer cybersecurity-onderwerpen, doet er praktisch onderzoek naar voor een fictieve opdrachtgever, en levert een prototype of rapport. Vanaf week 5 start ook het echte bedrijfsproject. Week 10 is een tussenreview; je profiel en portfolio ontwikkelen door richting de workshops in week 19.'
  },

  chips: [
    'fase 2 · week 5–10',
    'vrije onderwerpkeuze',
    '1 of meer topics',
    'praktisch onderzoek',
    'prototype óf rapport',
    'fictieve opdrachtgever',
    'tussenreview week 10 · workshops week 19',
    'tech & non-tech'
  ],

  // display labels for the lean enum (values stay bouw|onderzoek|beide)
  leanLabels: { bouw: 'bouw', onderzoek: 'onderzoek', beide: 'beide' },

  sections: {
    opdracht: {
      no: '01',
      heading: 'De opdracht',
      sub: 'Je bent vrij in je keuze, maar deze kaders gelden voor iedereen — tech én non-tech.'
    },
    verdieping: {
      no: '02',
      heading: 'Kies je verdieping',
      sub: 'Inspiratie, geen menukaart om uit te kiezen-en-klaar: combineer gerust, of bedenk je eigen onderwerp. De onderwerpen hangen onder dezelfde stations als fase 1. Klik een topic voor een bouw- en een onderzoeksinvalshoek plus een mogelijke opdrachtgever.'
    },
    voorbeelden: {
      no: '03',
      heading: 'Twee voorbeeldroutes',
      sub: 'Twee uitgewerkte aanpakken om richting te geven — één bouwgericht, één onderzoeksgericht.'
    },
    toets: {
      no: '05',
      heading: 'Van keuze naar tussenreview en kennisoverdracht',
      sub: 'Je portfolio groeit mee: eerste resultaten in week 10, verdere verdieping en kennisoverdracht richting week 19.'
    }
  },

  filter: {
    label: 'Toon',
    all: 'Alles',
    bouw: 'Meer bouwen',
    onderzoek: 'Meer onderzoeken'
  },

  kaders: [
    ['Vrije keuze', 'K1', 'Kies één onderwerp of combineer er een paar. Eigen onderwerp bedenken mag, mits het binnen cybersecurity en de Secure-by-Design-gedachte past.'],
    ['Praktisch onderzoek', 'K2', 'Het draait om dóén: niet alleen lezen, maar onderzoeken, testen, bouwen of valideren. Een aantoonbare praktische kern is verplicht.'],
    ['Prototype óf rapport', 'K3', 'Je deliverable is een werkend prototype, of een onderbouwd rapport/advies. Wat past bij je onderwerp en je invalshoek bepaal je zelf.'],
    ['Fictieve opdrachtgever', 'K4', 'Richt je werk op een fictieve opdrachtgever met een echt probleem. Dat dwingt scope, relevantie en professionele communicatie af.'],
    ['Tussenreview & kennisoverdracht', 'K5', 'Week 10 is een tussenreview van je eerste resultaat en portfolio. Je ontwikkelt door richting week 19, waarin je met verwante profielen een actieve workshop verzorgt. Sterke uitwerkingen kunnen daarnaast een keynote krijgen.'],
    ['Tech én non-tech', 'K6', 'Elk onderwerp kan technisch (bouwen) óf organisatorisch/onderzoekend worden aangepakt. Kies de invalshoek die bij jou past.']
  ],

  // lines: [code, title, [topics...]] — topic: { tt, lean, hook, over, tech, nontech, klant }
  lines: [
    ['S1', 'Product & basis security', [
      { tt: 'Veilige IoT- / embedded devices', lean: 'bouw', hook: 'Secure firmware op goedkope hardware', over: 'Beveiliging van apparaten met beperkte rekenkracht (ESP32/RP2040): communicatie, updates, opslag.', tech: 'Prototype met versleutelde communicatie, secure boot-concept en ondertekende OTA-updates.', nontech: "Onderzoek naar de grootste IoT-risico's + ontwerprichtlijn voor een productlijn.", klant: 'Hardware-startup die een slim device lanceert.' },
      { tt: 'Cryptografie in de praktijk', lean: 'beide', hook: 'Sleutels en secrets goed beheren', over: 'Niet de wiskunde, maar correcte toepassing: key management, secrets, certificaten, veelgemaakte fouten.', tech: 'Secrets-management opzetten in een applicatie + demonstratie van fout vs. goed.', nontech: 'Beleid en richtlijn voor sleutel- en certificaatbeheer in een organisatie.', klant: 'Scale-up die snel gegroeid is en geen secrets-beleid heeft.' },
      { tt: 'Secure-by-default productontwerp', lean: 'beide', hook: 'Veilig als de standaardstand', over: 'Hoe je defaults, configuratie en gebruikersflows zo ontwerpt dat veilig de makkelijke weg is.', tech: 'Herontwerp van een onveilige flow in een werkend prototype.', nontech: 'Ontwerprichtlijnen + reviewchecklist voor een productteam.', klant: 'SaaS-bedrijf met klachten over onveilige standaardinstellingen.' }
    ]],
    ['S2', 'Mindset, cultuur & awareness', [
      { tt: 'Security-awarenesscampagne', lean: 'onderzoek', hook: 'Gedrag veranderen, niet bang maken', over: 'Een campagne ontwerpen die echt beklijft: doelgroepen, boodschap, kanalen, meten van effect.', tech: 'Interactieve trainingsmodule of microlearning bouwen.', nontech: 'Campagneplan met doelgroepanalyse, materiaal en meetopzet.', klant: 'Organisatie na een datalek dat door menselijk handelen ontstond.' },
      { tt: 'Phishing-simulatie & training', lean: 'beide', hook: 'Leren van een veilige nepaanval', over: 'Opzet en ethiek van phishing-simulaties en de opvolgende training.', tech: 'Eigen (ethische) simulatie-opzet + landingspagina en meetdashboard.', nontech: 'Draaiboek + ethisch kader + trainingsaanpak voor HR/IT.', klant: 'Onderwijsinstelling die medewerkers wil weerbaarder maken.' },
      { tt: 'Securitycultuur meten & verbeteren', lean: 'onderzoek', hook: 'Hoe veilig denkt een organisatie echt?', over: 'Cultuur in kaart brengen en gericht verbeteren: meetinstrumenten, interventies, weerstand.', tech: 'Dashboard/enquêtetool om cultuurindicatoren te volgen.', nontech: 'Nulmeting + interventieplan op basis van een cultuurmodel.', klant: "MKB dat 'security' vooral als IT-feestje ziet." }
    ]],
    ['S3', 'Hacker-mindset & offensive', [
      { tt: 'Ethical hacking van een webapp', lean: 'bouw', hook: 'Aanvallen om te leren verdedigen', over: 'Gestructureerd kwetsbaarheden vinden in een (eigen of test-)applicatie, binnen duidelijke kaders.', tech: 'Pentest op een testomgeving + reproduceerbare exploits en fixes.', nontech: "Methodisch testrapport met bevindingen, risico's en aanbevelingen.", klant: 'Webbureau dat zekerheid wil over een nieuwe applicatie.' },
      { tt: 'OSINT-onderzoek', lean: 'beide', hook: 'Wat is er openbaar te vinden?', over: 'Open bronnen gebruiken om de blootstelling van een organisatie of product in kaart te brengen.', tech: 'Tooling/script dat openbare informatie verzamelt en samenvat.', nontech: 'OSINT-rapport over de digitale voetafdruk + reductie-advies.', klant: 'Bedrijf dat wil weten wat aanvallers al over hen weten.' },
      { tt: 'Social engineering (met kaders)', lean: 'onderzoek', hook: 'De mens als aanvalsvector', over: 'Hoe manipulatie werkt en hoe je je ertegen wapent — strikt ethisch en met toestemming.', tech: 'Gecontroleerde test-opzet (bijv. vishing-script) met meetbare uitkomst.', nontech: 'Analyse van technieken + weerbaarheidsadvies en gedragsregels.', klant: 'Receptie/servicedesk-organisatie die vaak gebeld wordt.' }
    ]],
    ['S4', 'Governance, compliance & supply chain', [
      { tt: 'NIS2-readiness assessment', lean: 'onderzoek', hook: 'Klaar voor de nieuwe zorgplicht', over: 'Wat een organisatie moet regelen om aan NIS2 te voldoen én daadwerkelijk veiliger te worden.', tech: 'Self-assessment-tool die de NIS2-gereedheid scoort.', nontech: 'Gap-analyse + prioriteiten-roadmap richting compliance.', klant: 'Zorg- of nutsorganisatie die nieuw onder NIS2 valt.' },
      { tt: 'Privacy by design / AVG', lean: 'beide', hook: 'Privacy als ontwerpkeuze', over: 'Gegevensbescherming vanaf het ontwerp: dataminimalisatie, grondslagen, DPIA-denken.', tech: 'Prototype dat dataminimalisatie en consent goed implementeert.', nontech: 'DPIA-light + privacy-by-design-richtlijn voor een product.', klant: 'App-bouwer die persoonsgegevens van minderjarigen verwerkt.' },
      { tt: 'ISO 27001-light invoeren', lean: 'onderzoek', hook: 'Structuur in informatiebeveiliging', over: "De kern van een managementsysteem: beleid, risico's, beheersmaatregelen, verbetercyclus.", tech: "Eenvoudig register/tool voor risico's en maatregelen.", nontech: 'Beknopt ISMS-startpakket: beleid, risicoanalyse, controleset.', klant: 'Groeiend bedrijf dat klanten ISO-zekerheid moet bieden.' },
      { tt: 'Supply chain & SBOM-beheer', lean: 'beide', hook: 'Vertrouw je je leveranciers blind?', over: 'Afhankelijkheden van software, leveranciers en diensten beheersen; SBOM in de praktijk.', tech: 'Pipeline die automatisch een SBOM genereert en kwetsbaarheden meldt.', nontech: 'Leveranciers-risicobeleid + proces voor afhankelijkheidsbeheer.', klant: 'Bedrijf dat veel open-source en SaaS van derden gebruikt.' },
      { tt: 'CRA-productconformiteit', lean: 'onderzoek', hook: 'Veilige producten op de EU-markt', over: 'Wat de Cyber Resilience Act van digitale producten eist en hoe je dat aantoont.', tech: 'Conformiteits-checklist-tool gekoppeld aan productkenmerken.', nontech: 'Conformiteitsanalyse + stappenplan naar CRA-naleving.', klant: 'Fabrikant van een product met digitale componenten.' }
    ]],
    ['S5', 'Threat modelling, detectie & blue team', [
      { tt: 'Threat model + detectiestrategie', lean: 'beide', hook: 'Weet waar het misgaat én zie het', over: 'Een systeem modelleren op dreigingen en bepalen hoe je aanvallen zou detecteren.', tech: 'Threat model uitwerken en bijpassende detectieregels bouwen.', nontech: 'Threat-modelrapport + monitoring-/detectieadvies.', klant: 'Fintech-startup met een nieuwe betaalkoppeling.' },
      { tt: 'Logging & SIEM opzetten', lean: 'bouw', hook: 'Van ruwe logs naar alarm', over: 'Centrale logging en detectie inrichten met open-source tooling (bijv. Wazuh/ELK).', tech: 'Werkende SIEM-opstelling met dashboards en een paar use-cases.', nontech: 'Logging-strategie + use-case-catalogus voor een SOC.', klant: 'Hostingbedrijf dat aanvallen sneller wil zien.' },
      { tt: 'Honeypot bouwen & analyseren', lean: 'bouw', hook: 'Lokaas voor aanvallers', over: 'Aanvallers naar een lokomgeving leiden en hun gedrag analyseren.', tech: 'Honeypot opzetten, aanvalsdata verzamelen en visualiseren.', nontech: 'Analyse van waargenomen aanvalspatronen + verdedigingsadvies.', klant: 'Onderzoekslab dat actuele dreigingen wil monitoren.' },
      { tt: 'SOC-processen ontwerpen', lean: 'onderzoek', hook: 'Detectie is ook organisatie', over: 'Hoe een Security Operations-team werkt: rollen, triage, escalatie, playbooks.', tech: 'Tooling/template voor alert-triage en playbook-uitvoering.', nontech: 'SOC-inrichtingsplan met processen, rollen en playbooks.', klant: 'Organisatie die detectie wil professionaliseren.' }
    ]],
    ['S6', 'Architectuur & requirements', [
      { tt: 'Zero trust-architectuur', lean: 'beide', hook: 'Vertrouw niets, verifieer alles', over: 'Toegang baseren op continue verificatie i.p.v. een veilige binnenkant.', tech: 'Referentie-opstelling met identiteitsgebaseerde toegang.', nontech: 'Zero-trust-migratieplan + principes voor een netwerk.', klant: "Bedrijf dat na thuiswerken geen 'veilig kantoornetwerk' meer heeft." },
      { tt: 'Identity & Access Management', lean: 'beide', hook: 'De juiste persoon, de juiste toegang', over: 'Identiteiten, rollen en rechten ontwerpen en beheren over systemen heen.', tech: 'Prototype met rolgebaseerde toegang en SSO/MFA.', nontech: 'IAM-ontwerp + rollen-/rechtenmodel en governance.', klant: 'Organisatie waar oud-medewerkers nog toegang blijken te hebben.' },
      { tt: 'API-security', lean: 'bouw', hook: 'De achterdeur van moderne apps', over: "API's beveiligen: authenticatie, autorisatie, rate limiting, misbruikbestendigheid.", tech: 'Beveiligde API bouwen + aantonen hoe een onveilige variant breekt.', nontech: 'API-securityrichtlijn + reviewchecklist voor developers.', klant: 'Platform dat zijn API openstelt voor partners.' }
    ]],
    ['S7', 'SDLC, DevSecOps & CI/CD', [
      { tt: 'Secure CI/CD-pipeline', lean: 'bouw', hook: 'Security ingebakken in de bouwstraat', over: 'Beveiligingscontroles automatiseren in de weg van code naar productie.', tech: 'Pipeline met security-gates die onveilige builds tegenhouden.', nontech: 'Adoptieplan + meetbare gates voor een DevOps-team.', klant: 'Scale-up die snel én veilig wil blijven releasen.' },
      { tt: 'SAST / DAST / SCA automatiseren', lean: 'bouw', hook: 'Laat tools de eerste fouten vinden', over: 'Statische, dynamische en dependency-scanning inrichten en de ruis temmen.', tech: 'Geïntegreerde scanning met getriageerde, bruikbare output.', nontech: 'Tooling-keuze + proces om bevindingen op te volgen.', klant: 'Team dat verzuipt in security-meldingen.' },
      { tt: 'Infrastructure-as-Code security', lean: 'bouw', hook: 'Veilige infra, in code', over: 'Misconfiguraties in cloud-/infra-code voorkomen en automatisch toetsen.', tech: 'IaC met policy-as-code die onveilige configuraties blokkeert.', nontech: 'Hardening-baseline + reviewproces voor infra-code.', klant: 'Bedrijf dat zijn cloud volledig via code uitrolt.' }
    ]],
    ['S8', 'Testing, pentest & incident response', [
      { tt: 'Pentest + rapport', lean: 'beide', hook: 'Vind het voordat een ander het vindt', over: 'Een applicatie of omgeving gestructureerd testen en professioneel rapporteren.', tech: 'Pentest uitvoeren op een testdoel + reproduceerbare bevindingen.', nontech: 'Volwaardig pentestrapport met risico\'s, bewijs en advies.', klant: 'Bedrijf dat voor het eerst een security-test laat doen.' },
      { tt: 'Incident response-plan + tabletop', lean: 'onderzoek', hook: 'Oefen de slechtste dag', over: 'Een responsplan opstellen en testen via een tafeloefening.', tech: 'Tooling/checklist die het team door een incident loodst.', nontech: 'IR-plan + uitgewerkte tabletop met evaluatie.', klant: 'MKB zonder enig draaiboek voor een ransomware-aanval.' },
      { tt: 'Digital forensics mini-onderzoek', lean: 'bouw', hook: 'Reconstrueer wat er gebeurde', over: 'Sporen veiligstellen en analyseren na een (gesimuleerd) incident.', tech: 'Onderzoek op een prepareerd image + onderbouwde tijdlijn.', nontech: 'Forensisch rapport + bewijsketen-procedure.', klant: 'Organisatie die wil weten hoe een aanvaller binnenkwam.' },
      { tt: 'Responsible disclosure-proces', lean: 'onderzoek', hook: 'Geef onderzoekers een veilige route', over: 'Hoe je meldingen van kwetsbaarheden door derden goed afhandelt.', tech: 'Werkende meldpagina + intern afhandel-workflowprototype.', nontech: "Disclosure-beleid + interne procedure en SLA's.", klant: "Bedrijf dat steeds vaker 'we vonden een lek'-mails krijgt." }
    ]],
    ['SO', 'Actuele & overige thema\'s', [
      { tt: 'AI-security', lean: 'beide', hook: 'Aanvallen op en met AI', over: 'Risico\'s van AI-systemen (prompt injection, datalekken, modelmisbruik) en AI als verdediging.', tech: 'Prototype dat een AI-toepassing aantoonbaar misbruikt én mitigeert.', nontech: 'Risicoanalyse + richtlijn voor veilig gebruik van AI-tools.', klant: 'Bedrijf dat haastig een AI-chatbot op klantdata zet.' },
      { tt: 'Cloud security posture', lean: 'bouw', hook: 'Misconfiguratie is de #1 cloudfout', over: 'Cloudomgevingen veilig configureren en continu toetsen.', tech: 'Posture-scan + hardening van een testomgeving.', nontech: 'Cloud-baseline + controleplan voor een team.', klant: 'Bedrijf met een snel gegroeide, rommelige cloud.' },
      { tt: 'OT / ICS-security', lean: 'onderzoek', hook: 'Als IT en de fysieke wereld raken', over: 'Beveiliging van industriële systemen, waar veiligheid en beschikbaarheid voorop staan.', tech: 'Testopstelling/simulatie van een industrieel protocol.', nontech: 'Risicoanalyse + segmentatie-advies voor een productieomgeving.', klant: 'Maakbedrijf met oude, gekoppelde machines.' },
      { tt: 'Post-quantum / quantum-safe crypto', lean: 'onderzoek', hook: 'Voorbereiden op morgen', over: 'Wat de komst van quantumcomputers betekent voor huidige cryptografie.', tech: 'Vergelijkende test van post-quantum-algoritmes in een demo.', nontech: 'Migratie-impactanalyse + advies voor de komende jaren.', klant: 'Organisatie met data die over 10 jaar nog vertrouwelijk moet zijn.' },
      { tt: 'Deepfakes & desinformatie', lean: 'onderzoek', hook: 'Zien is niet meer geloven', over: 'Synthetische media als dreiging en hoe organisaties zich wapenen.', tech: 'Detectie-demo of bewustwordingstool rond nepmedia.', nontech: 'Weerbaarheidsanalyse + protocol tegen CEO-fraude/deepfakes.', klant: 'Organisatie met publieke woordvoerders en betalingsbevoegden.' }
    ]]
  ],

  skeletonNote: {
    label: 'Zelfde ruggengraat',
    text: ' — beide routes volgen dezelfde stappen: topic → opdrachtgever → onderzoeksvraag → praktisch onderzoek → deliverable → portfolio → presentatie. Gebruik die volgorde als sjabloon voor je eigen route.'
  },

  // examples: [variant, tag, title, [[label, value]...]]
  examples: [
    ['build', 'Voorbeeldroute A · bouwen', 'Veilige slimme deurbel', [
      ['Topic(s)', 'Veilige IoT-/embedded devices + Cryptografie in de praktijk (S1)'],
      ['Fictieve opdrachtgever', "Hardware-startup 'BelVeilig' die een slimme videodeurbel wil lanceren."],
      ['Onderzoeksvraag', 'Hoe ontwerp je de firmware en communicatie van de deurbel secure-by-design, binnen de grenzen van goedkope hardware?'],
      ['Praktisch onderzoek', 'Threat model op het device en de datastromen; vergelijking van crypto-bibliotheken op een ESP32; meten van de performance-impact van versleuteling.'],
      ['Deliverable', 'Werkend prototype: versleutelde communicatie, ondertekende OTA-updates en een secure-boot-concept, met technische verantwoording.'],
      ['Portfolio', 'Threat model, ontwerpbesluiten met trade-offs, testresultaten, broncode en reflectie.'],
      ['Eindpresentatie', "Live demo voor de 'opdrachtgever' met uitleg van de belangrijkste afwegingen en restrisico's."]
    ]],
    ['research', 'Voorbeeldroute B · onderzoeken', 'NIS2-gereed maken van een zorgorganisatie', [
      ['Topic(s)', 'NIS2-readiness assessment + Security-awarenesscampagne (S4 + S2)'],
      ['Fictieve opdrachtgever', "Middelgrote thuiszorgorganisatie 'ThuisZorg Brabant' die nieuw onder NIS2 valt."],
      ['Onderzoeksvraag', 'Wat moet de organisatie regelen om aan NIS2 te voldoen én echt veiliger te worden, en hoe krijg je de medewerkers mee?'],
      ['Praktisch onderzoek', 'Gap-analyse tegen de NIS2-verplichtingen; risicobeoordeling van kernprocessen; (fictieve) persona\'s en interviews; benchmark van awareness-aanpakken.'],
      ['Deliverable', 'Adviesrapport met een prioriteiten-roadmap, plus een uitgewerkt awareness-campagneconcept met voorbeeldmateriaal.'],
      ['Portfolio', 'Gap-analyse, risicomatrix, roadmap, campagneplan, onderbouwing met bronnen en reflectie.'],
      ['Eindpresentatie', "Bestuurlijk advies aan de 'directie' met heldere keuzes en een kosten/baten-afweging."]
    ]]
  ],

  lessons: {
  "heading": "Lesopbouw · week 5–10",
  "intro": "Je profiel en het echte bedrijfsproject starten samen in week 5. Negen roosterblokken van 1,5 uur per week: minder gezamenlijke instructie, steeds meer toepassing, met vaste verdieping en feedback. Werkplaatsen zijn begeleide werktijd; niet ieder blok is klassikale les.",
  "labels": {
    "week": "Week",
    "core": "Kern",
    "activity": "Doen",
    "output": "Opbrengst"
  },
  "types": {
    "les": "Lessen & clinics",
    "atelier": "Profielwerkplaats",
    "project": "Bedrijfsproject",
    "feedback": "Feedback & kennis delen",
    "tutor": "Tutoroverleg"
  },
  "allocation": {
    "caption": "Roosterverdeling · blokken van 1,5 uur",
    "activity": "Activiteit",
    "total": "Totaal",
    "rows": [
      {
        "label": "Lessen & clinics",
        "values": [
          3,
          3,
          2,
          2,
          1,
          1
        ]
      },
      {
        "label": "Profielwerkplaats",
        "values": [
          3,
          2,
          3,
          2,
          2,
          2
        ]
      },
      {
        "label": "Bedrijfsproject",
        "values": [
          2,
          3,
          3,
          4,
          5,
          5
        ]
      },
      {
        "label": "Feedback & kennis delen",
        "values": [
          1,
          1,
          1,
          1,
          1,
          1
        ]
      }
    ]
  },
  "notes": [
    "Keuzeclinics sluiten vanaf week 6 aan op de profielkeuzes. Werkplaatsen hebben een concrete opdracht en afgesproken beschikbaarheid van begeleiding.",
    "Het wekelijkse feedbackblok is beschermd: toon zichtbaar werk en bespreek profiel én project. Vanaf week 7 oefen je ook korte uitleg of een mini-workshop.",
    "Week 10 is een tussenreview, geen afronding van het profiel. Je verdieping en portfolio lopen door via het project, gerichte studie en de profielworkshop in week 19.",
    "De bedrijfsopdracht en je eigen profielvraag zijn herkenbaar onderscheiden, maar mogen inhoudelijk op elkaar aansluiten. De blokverdeling kan verschuiven als een intake later plaatsvindt."
  ],
  "links": [
    {
      "path": "/project",
      "label": "Verder met het project · week 11–19"
    },
    {
      "path": "/eindevent",
      "label": "Profielworkshops op het Eind Event"
    }
  ],
  "weeks": [
    {
      "n": 5,
      "title": "Verkennen",
      "goal": "Profiel + bedrijfsproject",
      "blocks": [
        {
          "title": "Verdieping & intake voorbereiden",
          "core": "Verken profielonderwerpen, baken een eerste onderzoeksvraag af en oefen een intakegesprek.",
          "activity": "Vergelijk invalshoeken en oefen doorvragen op een klantvraag.",
          "output": "Twee mogelijke profielonderwerpen en een intakevragenlijst.",
          "type": "les",
          "badge": "Blok 1–3"
        },
        {
          "title": "Eerste proef",
          "core": "Vergelijk onderwerpen door iets kleins te onderzoeken of te maken.",
          "activity": "Voer een kleine proef uit en leg vast wat je nog wilt leren.",
          "output": "Eerste proef met bevindingen en persoonlijke leerdoelen.",
          "type": "atelier",
          "badge": "Blok 4–6"
        },
        {
          "title": "Team & opdracht",
          "core": "Start het echte bedrijfsproject naast je eigen profiel.",
          "activity": "Vorm een team, lees de opdracht en bereid het eerste bedrijfscontact voor.",
          "output": "Teamafspraken, eerste opdrachtbeeld en intakeplanning.",
          "type": "project",
          "badge": "Blok 7–8"
        },
        {
          "title": "Zichtbare voortgang",
          "core": "Maak je eerste keuzes bespreekbaar.",
          "activity": "Laat je proef en intakevragen zien; vraag feedback van medestudenten en begeleider.",
          "output": "Feedback en concrete acties voor volgende week.",
          "type": "feedback",
          "badge": "Blok 9"
        }
      ]
    },
    {
      "n": 6,
      "title": "Kiezen",
      "goal": "Profiel + bedrijfsproject",
      "blocks": [
        {
          "title": "Keuzeclinic & onderzoeksopzet",
          "core": "Kies verdieping en een passende onderzoeksmethode.",
          "activity": "Onderbouw je profielkeuze en formuleer scope en succescriteria. Volg een clinic passend bij je onderwerp.",
          "output": "Onderzoeksvraag, methode en succescriteria.",
          "type": "les",
          "badge": "Blok 1–3"
        },
        {
          "title": "Profielonderzoek opzetten",
          "core": "Maak je persoonlijke verdieping uitvoerbaar.",
          "activity": "Werk een proef- of onderzoeksplan uit met benodigde bronnen en middelen.",
          "output": "Onderzoeksplan voor je profiel.",
          "type": "atelier",
          "badge": "Blok 4–5"
        },
        {
          "title": "Intake & probleembeeld",
          "core": "Begrijp het bedrijf en de vraag achter de opdracht.",
          "activity": "Voer de intake uit; leg stakeholders, scope, toestemming en afspraken over data vast vóór uitvoering.",
          "output": "Probleembeeld, mandaat en werkafspraken met het bedrijf.",
          "type": "project",
          "badge": "Blok 6–8"
        },
        {
          "title": "Keuzes toetsen",
          "core": "Bespreek zowel je profielkeuze als het bedrijfsprobleem.",
          "activity": "Toon je onderzoeksplan en intakebevindingen; onderscheid feiten, aannames en open vragen.",
          "output": "Bijgestelde plannen en vervolgvragen voor het bedrijf.",
          "type": "feedback",
          "badge": "Blok 9"
        }
      ]
    },
    {
      "n": 7,
      "title": "Onderzoeken",
      "goal": "Profiel + bedrijfsproject",
      "blocks": [
        {
          "title": "Keuzeclinic & bewijs",
          "core": "Verdiep je onderwerp en beoordeel de kwaliteit van bewijs.",
          "activity": "Volg een gerichte clinic en vergelijk bronnen of onderzoeksmethoden.",
          "output": "Onderbouwde keuzes voor je eigen onderzoek.",
          "type": "les",
          "badge": "Blok 1–2"
        },
        {
          "title": "Eerste onderzoeksronde",
          "core": "Voer je profielonderzoek uit.",
          "activity": "Verzamel en analyseer eerste gegevens of bouw een proef; leg de werkwijze navolgbaar vast.",
          "output": "Eerste bevindingen met bewijs.",
          "type": "atelier",
          "badge": "Blok 3–5"
        },
        {
          "title": "Aanpak & eerste projectonderzoek",
          "core": "Maak de projectaanpak concreet en start binnen de afgesproken scope.",
          "activity": "Werk onderzoeksvraag, methode, rollen en planning uit; voer een eerste onderzoeksactiviteit uit.",
          "output": "Concept-plan van aanpak en eerste projectbewijs.",
          "type": "project",
          "badge": "Blok 6–8"
        },
        {
          "title": "Een inzicht delen",
          "core": "Oefen kennisoverdracht richting week 19.",
          "activity": "Leg in vijf minuten een inzicht uit of begeleid een mini-oefening; bespreek ook de projectvoortgang.",
          "output": "Peerfeedback op inhoud en uitleg, plus weekacties.",
          "type": "feedback",
          "badge": "Blok 9"
        }
      ]
    },
    {
      "n": 8,
      "title": "Beproeven",
      "goal": "Profiel + bedrijfsproject",
      "blocks": [
        {
          "title": "Verdieping & validatie",
          "core": "Ontwerp een toets voor je eigen resultaat.",
          "activity": "Gebruik vragen uit de werkplaats voor een clinic en maak een test- of validatieplan.",
          "output": "Validatieplan met toetsbare criteria.",
          "type": "les",
          "badge": "Blok 1–2"
        },
        {
          "title": "Profielresultaat toetsen",
          "core": "Onderzoek of je eerste resultaat standhoudt.",
          "activity": "Voer een test uit, bespreek beperkingen en stel je onderzoek bij.",
          "output": "Testbevindingen en een bijgesteld onderzoeksplan.",
          "type": "atelier",
          "badge": "Blok 3–4"
        },
        {
          "title": "Richting beproeven met het bedrijf",
          "core": "Toets of de aanpak waardevol is voor de opdrachtgever.",
          "activity": "Bespreek bevindingen en beproef een richting; werk scope en plan bij op basis van feedback.",
          "output": "Opdrachtgeverfeedback en een onderbouwde vervolgrichting.",
          "type": "project",
          "badge": "Blok 5–8"
        },
        {
          "title": "Review & mini-oefening",
          "core": "Leer van elkaars tests en uitleg.",
          "activity": "Toon een resultaat en laat een ander een korte oefening uitvoeren.",
          "output": "Verbeterpunten voor onderzoek, project en kennisoverdracht.",
          "type": "feedback",
          "badge": "Blok 9"
        }
      ]
    },
    {
      "n": 9,
      "title": "Verbinden",
      "goal": "Profiel + bedrijfsproject",
      "blocks": [
        {
          "title": "Clinic rond een gedeeld knelpunt",
          "core": "Verdiep waar meerdere studenten vastlopen.",
          "activity": "Breng vragen in en werk met verwante profielen aan een inhoudelijk knelpunt.",
          "output": "Een bruikbaar inzicht of aanpak voor je volgende stap.",
          "type": "les",
          "badge": "Blok 1"
        },
        {
          "title": "Expertise voor het team",
          "core": "Verdiep een open profielvraag en maak je inzichten bruikbaar.",
          "activity": "Onderzoek verder en vertaal relevante inzichten naar een hulpmiddel, richtlijn of demonstratie voor je team.",
          "output": "Profielbewijs en een toepasbare kennisbijdrage.",
          "type": "atelier",
          "badge": "Blok 2–3"
        },
        {
          "title": "Onderzoeken & ontwikkelen",
          "core": "Zet de bedrijfsopdracht voort met onderbouwde keuzes.",
          "activity": "Onderzoek, ontwikkel of test; verbind waar passend profielkennis aan projectbesluiten.",
          "output": "Projectresultaten met verantwoorde keuzes.",
          "type": "project",
          "badge": "Blok 4–8"
        },
        {
          "title": "Kennis delen & bijsturen",
          "core": "Toets of anderen je expertise kunnen gebruiken.",
          "activity": "Laat je kennisbijdrage uitproberen en bespreek projectkeuzes met tutor en peers.",
          "output": "Feedback op bruikbaarheid en bijgewerkte acties.",
          "type": "feedback",
          "badge": "Blok 9"
        }
      ]
    },
    {
      "n": 10,
      "title": "Tussenbalans",
      "goal": "Profiel + bedrijfsproject",
      "blocks": [
        {
          "title": "Conclusies & beperkingen",
          "core": "Trek conclusies die passen bij je bewijs.",
          "activity": "Oefen het uitleggen van resultaten, onzekerheden en beperkingen.",
          "output": "Onderbouwde conclusies zonder te grote claims.",
          "type": "les",
          "badge": "Blok 1"
        },
        {
          "title": "Profieltussenreview",
          "core": "Leg je eerste onderzoeksresultaat vast; het profiel loopt door.",
          "activity": "Toon wat je hebt onderzocht, reflecteer op je leerdoelen en bepaal je verdere verdieping richting week 19.",
          "output": "Tussenportfolio en vervolgplan voor profiel en workshop.",
          "type": "atelier",
          "badge": "Blok 2–3"
        },
        {
          "title": "Projecttussenbalans",
          "core": "Bereid de overgang naar vier projectdagen voor.",
          "activity": "Beoordeel eerste resultaten en opdrachtgeverfeedback; plan de volgende periode en bereid Business Understanding voor.",
          "output": "Projecttussenstand, bijgewerkt plan en presentatiemateriaal.",
          "type": "project",
          "badge": "Blok 4–8"
        },
        {
          "title": "Feedback & vervolgafspraken",
          "core": "Maak de volgende stap concreet voor profiel én project.",
          "activity": "Bespreek zichtbaar werk, verdiepingsvragen en de planning met peers en begeleider.",
          "output": "Vervolgafspraken en mogelijke workshopverwantschappen.",
          "type": "feedback",
          "badge": "Blok 9"
        }
      ]
    }
  ]
},

  steps: [
    ['Kies & verken', 'Pak één of meer onderwerpen die je echt trekken.'],
    ['Scope & opdrachtgever', 'Kies een fictieve opdrachtgever en baken het probleem af.'],
    ['Onderzoeksvraag', 'Formuleer een scherpe, praktische vraag die je kunt beantwoorden.'],
    ['Praktisch onderzoek', 'Bouw een prototype óf doe gericht onderzoek — lever bewijs.'],
    ['Portfolio', 'Leg context, keuzes, proces en resultaten vast.'],
    ['Tussenreview → kennisoverdracht', 'Week 10: toon je eerste resultaat en vervolgplan. Ontwikkel door en deel je expertise in een profielworkshop tijdens het Eind Event in week 19.']
  ],

  portfolioPanel: {
    heading: 'In je portfolio',
    items: [
      ['Probleem & context', 'wie is de opdrachtgever en waarom dit onderwerp'],
      ['Onderzoeksvraag & scope', 'wat onderzoek je precies, en wat niet'],
      ['Aanpak & methode', 'hoe ben je te werk gegaan'],
      ['Het werk', 'het prototype of rapport zelf'],
      ['Onderbouwing & bronnen', 'keuzes verantwoord met betrouwbare bronnen'],
      ['Testen & validatie', 'hoe weet je dat het werkt / klopt'],
      ['Reflectie & vervolg', 'wat leerde je, wat zou je anders doen']
    ]
  },

  toetsPanel: {
    heading: 'Waarop wordt beoordeeld',
    items: [
      ['Diepgang', 'hoe ver ben je het onderwerp in gegaan'],
      ['Praktisch onderzoek', 'kwaliteit en relevantie van wat je deed of bouwde'],
      ['Secure-by-design-denken', 'pas je de basis uit fase 1 zichtbaar toe'],
      ['Onderbouwing', 'zijn keuzes beargumenteerd en bronvast'],
      ['Professionele communicatie', 'landt je verhaal bij de opdrachtgever'],
      ['Reflectie', 'kijk je kritisch op je eigen werk en proces']
    ]
  },

  footer: {
    left: 'Praatplaat fase 2 — Professioneel Profiel · vervolg op de Secure-by-Design basis.',
    right: 'Klik een topic voor invalshoeken · filter op bouwen / onderzoeken.'
  }
}

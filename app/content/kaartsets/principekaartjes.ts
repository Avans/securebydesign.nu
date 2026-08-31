// Principekaartjes — kaartset bij Fundament W1·blok 3, doorlopend gebruikt in week 1–3.
//
// Afwijkend van de praatplaat-content (fundament.nl.ts / fundament.en.ts) staan de
// kaarten hier in één bestand: het zijn print-artefacten voor de Nederlandstalige les.
// Alleen de paginateksten (ui) zijn tweetalig; de kaarten zelf blijven Nederlands.
//
// Kaartformaat: 63 × 88 mm (standaard trading card), 9 kaarten per A4.

export default {
  slug: '/principekaartjes',
  kind: 'principes',
  block: 'W1·3',
  // Vaste opschriften op de kaart zelf (Nederlands — het is printmateriaal).
  labels: { practice: 'In de praktijk', foot: 'Gaat mis als' },
  // kaart: { id, wk, t (titel), lead (de regel), bullets (in de praktijk), foot (gaat mis als) }
  cards: [
    {
      id: 'P01', wk: 1, t: 'Least privilege',
      lead: 'Geef mensen, systemen en koppelingen precies de rechten die ze nodig hebben — niet meer, en niet voor altijd.',
      bullets: [
        'Rechten per rol, niet per persoon',
        'Tijdelijke klus = tijdelijk recht',
        'Beheerrechten alleen als het echt moet'
      ],
      foot: 'Eén gestolen account opent meteen alles.'
    },
    {
      id: 'P02', wk: 1, t: 'Defense in depth',
      lead: 'Stapel maatregelen. Als één laag faalt, houdt de volgende de schade tegen.',
      bullets: [
        'Leun nooit op één muur of één controle',
        'Combineer techniek, proces en gedrag',
        'Vraag per laag: wat als dít wegvalt?'
      ],
      foot: 'Eén lek geeft vrij spel in het hele systeem.'
    },
    {
      id: 'P03', wk: 1, t: 'Secure by default',
      lead: 'De veilige instelling ís de standaardinstelling. Een gebruiker hoeft veiligheid niet aan te zetten.',
      bullets: [
        'Alles dicht; open wat nodig is',
        'Geen standaardwachtwoorden bij oplevering',
        'MFA en logging staan aan vanaf dag één'
      ],
      foot: 'Veiligheid hangt af van wie de handleiding leest.'
    },
    {
      id: 'P04', wk: 1, t: 'Fail secure',
      lead: 'Gaat er iets stuk of is iets onduidelijk? Val terug naar de veilige toestand: weigeren, niet doorlaten.',
      bullets: [
        'Twijfel betekent geen toegang',
        'Foutmeldingen verklappen niets',
        'Bedenk vooraf wat er bij uitval gebeurt'
      ],
      foot: 'Een storing wordt de makkelijkste weg naar binnen.'
    },
    {
      id: 'P05', wk: 1, t: 'Klein aanvalsoppervlak',
      lead: 'Elke extra functie, koppeling, poort of dataveld is een extra kans voor een aanvaller. Laat weg wat je niet nodig hebt.',
      bullets: [
        'Zet ongebruikte functies uit',
        'Minder koppelingen is minder risico',
        'Vraag bij elke feature: moet dit erin?'
      ],
      foot: 'Je verdedigt jarenlang iets wat niemand gebruikt.'
    },
    {
      id: 'P06', wk: 1, t: 'Geen security door geheimhouding',
      lead: 'Je ontwerp mag bekend zijn; alleen de sleutel is geheim. Veiligheid die leunt op "niemand weet ervan" is geleend.',
      bullets: [
        'Gebruik bewezen, open standaarden',
        'Zelf cryptografie verzinnen: niet doen',
        'Geheim is de sleutel, niet het slot'
      ],
      foot: 'OV-chipkaart: geheim ontwerp, publiek gekraakt.'
    },
    {
      id: 'P07', wk: 1, t: 'Veilig moet makkelijk zijn',
      lead: 'Is de veilige weg de omweg, dan kiezen mensen de omweg. Ontwerp voor echt gedrag, niet voor ideaal gedrag.',
      bullets: [
        'Meet hoeveel moeite een maatregel kost',
        'Bied een veilig alternatief, geen verbod',
        'Test je maatregel met echte gebruikers'
      ],
      foot: 'Wachtwoord op een geeltje; werk via privé-app.'
    },
    {
      id: 'P08', wk: 1, t: 'Bescherm B, I én V',
      lead: 'Security is meer dan geheimhouden. Klopt de data nog (integriteit) en werkt het als het moet (beschikbaarheid)?',
      bullets: [
        'Benoem per asset welke van B/I/V telt',
        'Integriteit: wie mag wijzigen, en zie je dat?',
        'Beschikbaarheid: back-up én hersteltest'
      ],
      foot: 'Alles keurig versleuteld, maar niemand kan erbij.'
    },
    {
      id: 'P09', wk: 1, t: 'Dataminimalisatie',
      lead: 'Data die je niet verzamelt, kan niet lekken. Verzamel minder en bewaar korter.',
      bullets: [
        'Per veld: waarom hebben we dit nodig?',
        'Bewaartermijn afspreken én uitvoeren',
        'Anonimiseer of pseudonimiseer waar het kan'
      ],
      foot: 'Een vergeten exportbestand wordt jouw datalek.'
    },
    {
      id: 'P10', wk: 2, t: 'Ga uit van een geslaagde aanval',
      lead: 'Niet óf, maar wanneer. Ontwerp ook voor de dag dat iemand al binnen is.',
      bullets: [
        'Beperk wat een binnendringer kan bereiken',
        'Segmenteer: niet alles in één ruimte',
        'Oefen het scenario "ze zijn al binnen"'
      ],
      foot: 'Alle aandacht ging naar de voordeur.'
    },
    {
      id: 'P11', wk: 2, t: 'Denk als de aanvaller',
      lead: 'Schrijf naast gebruikersverhalen ook misbruikverhalen: wie wil hier iets mee, en waarom?',
      bullets: [
        'Benoem motief, toegang en impact',
        'Abuse cases naast use cases',
        'De aanvaller kan ook insider of leverancier zijn'
      ],
      foot: 'Je ontwerp klopt precies — voor de nette gebruiker.'
    },
    {
      id: 'P12', wk: 2, t: 'Vertrouw geen invoer',
      lead: 'Alles wat van buiten je vertrouwensgrens komt — gebruiker, koppeling, leverancier — is onbetrouwbaar tot je het hebt gecontroleerd.',
      bullets: [
        'Teken je vertrouwensgrenzen in het ontwerp',
        'Valideer aan de ontvangende kant',
        '"Het formulier checkt het al" is geen controle'
      ],
      foot: 'Eén geplakte regel tekst leegt je database.'
    },
    {
      id: 'P13', wk: 2, t: 'Maak het zichtbaar',
      lead: 'Wat je niet kunt zien, kun je niet stoppen. Detectie is een ontwerpkeuze, geen bijproduct.',
      bullets: [
        'Log inloggen, rechtenwijziging en export',
        'Spreek af wie kijkt, wanneer en waarnaar',
        'Bescherm de logs zelf ook'
      ],
      foot: 'Maanden binnen — ontdekt door iemand anders.'
    },
    {
      id: 'P14', wk: 2, t: 'Prioriteer op risico',
      lead: 'Je kunt niet alles beveiligen. Weeg kans × impact en kies bewust wat je accepteert.',
      bullets: [
        'Benoem en onderbouw je top-5 risico\'s',
        'Accepteer restrisico expliciet, met een naam erbij',
        'Een maatregel kost minder dan de schade'
      ],
      foot: 'Alles is even belangrijk, dus er gebeurt niets.'
    },
    {
      id: 'P15', wk: 3, t: 'Elk risico heeft een eigenaar',
      lead: 'Zonder naam erbij is een maatregel een goed voornemen.',
      bullets: [
        'RACI-light: wie beslist, wie voert uit',
        'De eigenaar zit waar het besluit valt',
        'Herzie eigenaarschap bij elke verandering'
      ],
      foot: 'Iedereen zag het, niemand ging erover.'
    },
    {
      id: 'P16', wk: 3, t: 'Compliance ≠ security',
      lead: 'Voldoen aan de regels is de ondergrens, geen bewijs dat je veilig bent.',
      bullets: [
        'Vertaal elke eis naar een ontwerpvraag',
        'Vraag door: welk risico dekt dit af?',
        'Veilig maar niet verplicht? Doe het toch'
      ],
      foot: 'Vinkje gehaald, incident alsnog.'
    },
    {
      id: 'P17', wk: 3, t: 'Ken je keten',
      lead: 'Je bent zo veilig als je leveranciers, libraries en koppelingen. Hun risico is jouw risico.',
      bullets: [
        'Maak een dependency map van de casus',
        'Markeer waar je blind vertrouwt',
        'Vraag om SBOM, updates en meldafspraken'
      ],
      foot: 'DigiNotar: een leverancier valt om, jij staat stil.'
    },
    {
      id: 'P18', wk: 3, t: 'Ontwerp voor het incident',
      lead: 'Bepaal vooraf wie wat doet, wie je belt en wat je vertelt — niet tijdens de crisis.',
      bullets: [
        'Rollen, escalatiepad, meldplicht (AVG: 72 uur)',
        'Communicatie naar klant en pers ligt klaar',
        'Achteraf: post-mortem zonder schuldvraag'
      ],
      foot: 'De eerste vraag van de pers is je eerste denkmoment.'
    }
  ],

  // Docentenoverzicht (los printvel) — Nederlandstalig, hoort bij de kaarten.
  key: {
    head: ['#', 'Principe', 'Wk', 'In één zin', 'Waar het terugkomt'],
    rows: [
      ['P01', 'Least privilege', '1', 'Zo min mogelijk rechten, zo kort mogelijk', 'W1·3 · W2·6 · W3·6'],
      ['P02', 'Defense in depth', '1', 'Meerdere lagen, geen enkele muur', 'W1·3 · W2·6 · W4·3'],
      ['P03', 'Secure by default', '1', 'Veilig staat standaard aan', 'W1·3 · W3·4 (CRA)'],
      ['P04', 'Fail secure', '1', 'Bij twijfel of storing: weigeren', 'W1·3 · W2·6'],
      ['P05', 'Klein aanvalsoppervlak', '1', 'Weglaten wat je niet nodig hebt', 'W1·6 · W4·3'],
      ['P06', 'Geen security door geheimhouding', '1', 'Het slot mag bekend zijn, de sleutel niet', 'W1·3 · W2·3 (OV-chipkaart)'],
      ['P07', 'Veilig moet makkelijk zijn', '1', 'Gedrag volgt de weg van de minste weerstand', 'W1·4 · W3·6'],
      ['P08', 'Bescherm B, I én V', '1', 'Beschikbaarheid en integriteit tellen net zo hard', 'W1·1 · W1·6'],
      ['P09', 'Dataminimalisatie', '1', 'Niet verzamelde data lekt niet', 'W1·6 · W3·4 (AVG)'],
      ['P10', 'Ga uit van een geslaagde aanval', '2', 'Niet óf, maar wanneer', 'W2·1 · W2·7 · W3·7'],
      ['P11', 'Denk als de aanvaller', '2', 'Abuse cases naast use cases', 'W2·1 · W2·8 · W4·4'],
      ['P12', 'Vertrouw geen invoer', '2', 'Alles over de grens is verdacht', 'W2·2 · W4·3 (zero trust)'],
      ['P13', 'Maak het zichtbaar', '2', 'Zonder detectie geen respons', 'W2·7 · W3·8'],
      ['P14', 'Prioriteer op risico', '2', 'Kans × impact bepaalt de volgorde', 'W2·5 · W2·9 · W4·2'],
      ['P15', 'Elk risico heeft een eigenaar', '3', 'Een maatregel zonder naam gebeurt niet', 'W3·1 · W3·9'],
      ['P16', 'Compliance ≠ security', '3', 'Regels zijn de ondergrens', 'W3·2 · W3·4'],
      ['P17', 'Ken je keten', '3', 'Het risico van je leverancier is het jouwe', 'W3·5 · W4·6 (SBOM)'],
      ['P18', 'Ontwerp voor het incident', '3', 'Afspraken vóór de crisis, niet erin', 'W3·7 · W3·8 · W3·9']
    ]
  },

  ui: {
    nl: {
      kicker: 'Kaartset · Fundament W1·blok 3 → week 1–3',
      titleLead: 'Principe',
      titleEm: 'kaartjes',
      lede:
        'Achttien ontwerpprincipes op zakformaat. Ze worden geïntroduceerd in week 1 (blok 3), aangevuld in week 2 met aanvallersdenken en risico, en in week 3 met governance. Studenten houden de set de hele periode bij zich: bij elke ontwerpkeuze leg je het kaartje op tafel waar je je op beroept.',
      chips: ['18 kaarten', '63 × 88 mm', '9 per A4', 'week 1 · 2 · 3'],
      back: '← terug naar Fundament',
      exportBtn: 'Exporteer naar PDF',
      exportHint: 'Opent het printvenster — kies daar "Bewaren als PDF". Zet marges op "standaard" en achtergrondafbeeldingen aan.',
      optsTitle: 'Wat print je mee?',
      weekFilter: 'Weken',
      optKey: 'Docentenoverzicht meeprinten',
      empty: 'Geen kaarten geselecteerd — zet minstens één week aan.',
      sheet: 'Vel',
      cardsTitle: 'De kaarten',
      cardsSub: 'Op ware grootte. Wat je hier ziet, komt zo uit de printer.',
      howTitle: 'Zo gebruik je de set',
      how: [
        'Blok W1·3 — deel de week 1-kaarten uit (P01–P09). Elk duo krijgt twee principes en zoekt bij elk een voorbeeld uit de eigen casus: waar houden we ons hier al aan, en waar niet?',
        'Blok W2·3 — bij de incidentanalyse legt elke groep het kaartje op tafel van het principe dat faalde. Dat dwingt tot benoemen in plaats van "ze hebben iets fout gedaan".',
        'Blok W2·9 en W3·9 — bij elke ontwerpmaatregel in het risicoprofiel en op de governancekaart hoort minstens één principekaartje. Geen kaartje erbij? Dan is de maatregel waarschijnlijk een losse ingeving.',
        'Toetsvoorbereiding — retrieval in duo\'s: de één leest de "gaat mis als"-regel voor, de ander noemt het principe.'
      ],
      makeTitle: 'Printen en maken',
      make: [
        'Print op stevig papier (160–250 g/m²) of karton; dubbelzijdig hoeft niet.',
        'Elk vel bevat 9 kaarten in een 3 × 3 raster; snijd langs de kaartranden.',
        'Eén set per duo is genoeg — reken op 2 vellen per set voor 18 kaarten.',
        'Lamineren maakt de set herbruikbaar over meerdere cohorten.'
      ],
      keyTitle: 'Docentenoverzicht',
      keySub: 'Alle principes op één rij, met waar ze in het programma terugkomen. Handig als spiekvel bij het nabespreken.',
      dutchOnly: ''
    },
    en: {
      kicker: 'Card deck · Foundation W1·block 3 → weeks 1–3',
      titleLead: 'Principle ',
      titleEm: 'cards',
      lede:
        'Eighteen design principles in pocket format. They are introduced in week 1 (block 3), extended in week 2 with attacker thinking and risk, and in week 3 with governance. Students keep the deck with them throughout: every design choice comes with the card it appeals to.',
      chips: ['18 cards', '63 × 88 mm', '9 per A4', 'weeks 1 · 2 · 3'],
      back: '← back to Foundation',
      exportBtn: 'Export to PDF',
      exportHint: 'Opens the print dialog — choose "Save as PDF" there. Keep margins at "default" and enable background graphics.',
      optsTitle: 'What goes in the print?',
      weekFilter: 'Weeks',
      optKey: 'Include the teacher overview',
      empty: 'No cards selected — switch on at least one week.',
      sheet: 'Sheet',
      cardsTitle: 'The cards',
      cardsSub: 'Shown at actual size. What you see is what comes out of the printer.',
      howTitle: 'How the deck is used',
      how: [
        'Block W1·3 — hand out the week 1 cards (P01–P09). Each pair takes two principles and finds an example in their own case: where do we already follow this, and where do we not?',
        'Block W2·3 — during the incident analysis every group puts down the card of the principle that failed. That forces naming it instead of "they did something wrong".',
        'Blocks W2·9 and W3·9 — every design measure in the risk profile and on the governance map carries at least one principle card. No card? Then the measure is probably a loose hunch.',
        'Test preparation — retrieval in pairs: one reads the "goes wrong when" line, the other names the principle.'
      ],
      makeTitle: 'Printing and assembly',
      make: [
        'Print on heavy paper (160–250 gsm) or card stock; single-sided is fine.',
        'Each sheet holds 9 cards in a 3 × 3 grid; cut along the card edges.',
        'One deck per pair is enough — 2 sheets per deck for 18 cards.',
        'Laminating makes the deck last across cohorts.'
      ],
      keyTitle: 'Teacher overview',
      keySub: 'Every principle in one table, with where it returns in the programme. Useful as a cheat sheet when reviewing.',
      dutchOnly: 'The cards themselves are in Dutch: they are printed classroom material for a Dutch-taught minor.'
    }
  }
}

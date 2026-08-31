// Breach-writeup — voorbeeldpagina (NL). Casusmateriaal bij week 3, lesblok 7.
// Concept: nog niet vastgesteld, staat bewust niet in de hoofdnavigatie.
export default {
  draft:
    'Deze casus is in ontwikkeling en nog niet vastgesteld. De pagina staat bewust niet in het menu; deel de link gerust, maar lees het als een voorstel.',
  draftB: 'Concept — versie 0.1.',

  hero: {
    kicker: 'Fundament · week 3 · lesblok 7',
    titleLead: 'Breach-',
    titleEm: 'writeup',
    lede:
      'Een breach-writeup is de gereconstrueerde geschiedenis van één incident: wat er gebeurde, hoe lang niemand het zag, wat er tegen wie is gezegd, en welke ontwerpkeuze het allemaal mogelijk maakte. Hieronder staat het format van zeven delen, en daaronder het volledig uitgewerkte voorbeeld op de doorlopende casus — het lek bij wijkzorg-app “Naaste”.'
  },

  chips: ['casusmateriaal', '7 delen', '50 minuten', 'teams van 3–4', 'tech & non-tech', 'fictief, realistisch'],

  sections: {
    s1: {
      no: '01',
      h: 'Het format',
      sub: 'Zeven vaste delen. De volgorde is het didactische punt: pas als de tijdlijn er ligt mag je iets vinden van de oorzaak, en pas na “wat ging er goed” mag je oordelen over de communicatie. Zo ontstaat een post-mortem in plaats van een schuldvraag.'
    },
    s2: {
      no: '02',
      h: 'Het voorbeeld — het lek bij “Naaste”',
      sub: 'Dezelfde casus als het Security Context Canvas van week 1, drie maanden verder. De assetnummers (A1, A2 …) komen daar rechtstreeks vandaan; de aanname die in week 1 onderaan het canvas bleef staan, is hier de oorzaak.'
    },
    s3: {
      no: '03',
      h: 'Werkvorm in het lesblok',
      sub: 'De writeup is geen leesopdracht. Teams bouwen de tijdlijn zelf terug, en het gesprek gaat over de gaten ertussen — niet over de aanvaller.'
    },
    s4: {
      no: '04',
      h: 'Waar het op aansluit',
      sub: 'De writeup staat tussen twee blokken in die er direct op leunen: de dependency map van blok 5 legt de leverancier bloot, en het spel in blok 8 laat je hetzelfde nog eens beleven onder tijdsdruk. Blok 9 vraagt om de <b>responsafspraken</b> die hier ontbraken.'
    },
    s5: {
      no: '05',
      h: 'Meedenken?',
      sub: 'De casus is nog een voorstel — feedback op de tijdlijn, de toon van de communicatie of de zwaarte van het incident is welkom. Gebruik de feedbackknop rechtsonder, of neem contact op.'
    }
  },

  // [nummer, deel, wat erin staat, kleurvariabele]
  format: [
    ['01', 'De feiten', 'Wie, wat, wanneer, hoeveel, en hoe het aan het licht kwam — in vijf regels, zonder duiding. Alles wat later betwist wordt, staat hier onbetwist.', 'var(--w3)'],
    ['02', 'De tijdlijn', 'Van eerste voet aan de grond tot herstel, met drie gemarkeerde momenten: het begint, iemand merkt het, iemand vertelt het. De gaten ertussen zijn de les.', 'var(--w2)'],
    ['03', 'De ontwerpkeuze eronder', 'Drie keer doorvragen tot je voorbij de menselijke fout bent. Onder elke fout ligt een keuze die iemand ooit heeft gemaakt — of nooit heeft gemaakt.', 'var(--w4)'],
    ['04', 'Wat er goed ging', 'Verplicht deel. Zonder dit wordt de writeup een aanklacht, en dan levert hij niets op voor je eigen ontwerp.', 'var(--w3)'],
    ['05', 'De communicatie', 'Wat er letterlijk is gezegd, aan wie en wanneer — en hoe het landde. Meestal is dit het deel waar het vertrouwen sneuvelt, niet bij de techniek.', 'var(--w1)'],
    ['06', 'Herstel & post-mortem', 'De maatregelenlijst, mét de stand van zaken een half jaar later. Een maatregel die nooit af komt, is een besluit.', 'var(--w4)'],
    ['07', 'Wat we niet weten', 'De open einden, eerlijk opgeschreven. Een writeup die overal antwoord op heeft, is verzonnen.', 'var(--w2)']
  ],
  formatNote:
    'Twee regels houden dit format bruikbaar. <b>Geen namen van personen</b> — rollen wel, want de vraag is welke rol niet bestond, niet wie zat te slapen. En <b>elke bewering krijgt een tijdstip</b>: “ze hebben te laat gemeld” is een mening, “de melding ging 17 dagen na de eerste e-mail de deur uit” is een feit waar je een ontwerpgesprek op kunt bouwen.',

  doc: {
    kicker: 'Uitgewerkt voorbeeld · docentversie',
    title: 'Het lek bij wijkzorg-app “Naaste”',
    lede:
      'Fictief incident bij de doorlopende casus, opgeschreven zoals een publieke post-mortem eruit zou zien. Realistisch samengesteld uit terugkerende patronen: een kopie van productiedata buiten productie, een melding die op de verkeerde mat belandt, en een organisatie die het nieuws niet als eerste vertelt.',
    print: 'Print / opslaan als pdf',
    h1: 'De feiten',
    h2: 'De tijdlijn',
    h2sub: 'Drie momenten zijn gemarkeerd. Wat ertussen zit — 79 dagen blind, 14 dagen doof, 6 dagen stil — is waar dit lesblok over gaat.',
    h3: 'De ontwerpkeuze eronder',
    h3sub: 'Drie keer doorvragen. De eerste laag is wat er misging, de derde laag is wat je in een ontwerp kunt veranderen.',
    pull: 'Niemand heeft besloten dat productiedata de deur uit mocht. Er was ook niemand die kon besluiten dat het niet mocht.',
    h4: 'Wat er goed ging',
    h4sub: 'Bewust vóór de communicatieparagraaf, zodat het gesprek daarna over ontwerp gaat en niet over schuld.',
    h5: 'De communicatie',
    h5sub: 'Vier berichten, letterlijk zoals ze de deur uit gingen. Elk bericht is op zichzelf verdedigbaar; samen vertellen ze het verhaal van een organisatie die zichzelf beschermt in plaats van haar cliënten.',
    landed: 'Hoe het landde:',
    h6: 'Herstel & post-mortem',
    h6sub: 'De post-mortem vond drie weken na het lek plaats. Dit is de maatregelenlijst met de stand van zaken vier maanden later — het deel dat in echte writeups meestal ontbreekt.',
    h7: 'Wat we niet weten',
    h7sub: 'De eerlijke open einden. Voor het lesblok zijn deze belangrijker dan de feiten: ze laten zien wat je vooraf had moeten inrichten om ze wél te weten.'
  },

  // [label, waarde]
  facts: [
    ['Wie', 'Wijkzorg-organisatie “Naaste”, ca. 60 medewerkers, 1.412 cliënten. App gebouwd en beheerd door een extern bureau van negen man.'],
    ['Wat', 'Een volledige kopie van de productiedatabase stond ruim elf weken in een testomgeving van de bouwer, bereikbaar vanaf het open internet met een standaardwachtwoord.'],
    ['Welke gegevens', 'Zorgnotities (A1) en medicatiegegevens (A2) van 1.412 cliënten over zes maanden, plus de chatgeschiedenis met mantelzorgers (A5) en 214 mantelzorgeraccounts (A3).'],
    ['Hoe lang', '79 dagen tussen het plaatsen van de kopie en de eerste melding van buiten; 116 dagen tot cliënten het hoorden.'],
    ['Hoe bekend geworden', 'Een externe onderzoeker mailde het naar info@ — daar bleef het twee weken liggen. Cliënten lazen het uiteindelijk in de regionale krant.']
  ],

  timeline: [
    {
      d: '3 nov', t: '09:12', mark: 'T0 · het begint',
      h: 'Een ontwikkelaar kopieert productiedata naar een testomgeving',
      p: 'Er is een melding dat medicatiegegevens niet synchroniseren bij een deel van de cliënten. De ontwikkelaar krijgt het probleem niet nagebootst met testdata en trekt een kopie van de productiedatabase naar de sandbox-omgeving van het bureau. Niemand verbiedt dit; er is ook geen afspraak die het toestaat. De handeling wordt nergens vastgelegd.'
    },
    {
      d: '3 nov', t: '17:40',
      h: 'De bug is gevonden en opgelost — de kopie blijft staan',
      p: 'De sandbox draait een dashboard voor logs en database-inspectie, bereikbaar vanaf internet, met de meegeleverde inloggegevens. Dat was voor testdata nooit een probleem.'
    },
    { gap: ['79 dagen niemand die kijkt', '79 dgn', 'Geen monitoring op de sandbox, geen inventarisatie van omgevingen, geen periodieke controle vanuit “Naaste” bij de bouwer. Het contract regelt beschikbaarheid en support, niet wat er met data mag gebeuren.'] },
    {
      d: '14 jan', t: '02:40',
      h: 'Een geautomatiseerde scanner vindt het dashboard',
      p: 'Niet gericht op de zorgorganisatie: een scanner die het hele internet afgaat op bekende dashboards met standaardwachtwoorden. In de twee nachten erna wordt de database in delen gedownload.'
    },
    {
      d: '22 jan', t: '16:20', mark: 'iemand merkt het',
      h: 'Een onderzoeker mailt info@naaste.nl',
      p: 'Een beveiligingsonderzoeker treft de dataset aan, herkent Nederlandse zorgdata en stuurt een keurige melding naar het enige adres dat op de site staat. Er is geen security.txt, geen meldpunt, geen procedure.'
    },
    {
      d: '22 jan', t: '16:55',
      h: 'De officemanager markeert de mail als phishing',
      p: 'De mail vraagt om bevestiging dat het domein van de organisatie is en bevat een link. Dat is precies het patroon uit de awarenesstraining van vorig jaar. De mail gaat naar de spammap — de training werkte, de organisatie niet.'
    },
    { gap: ['14 dagen niemand die luistert', '14 dgn', 'Er is geen tweede kanaal. De onderzoeker probeert het telefoonnummer op de site: dat komt uit bij de zorgplanning, die niet weet waar ze zo’n vraag moet laten.'] },
    {
      d: '4 feb', t: '11:30',
      h: 'De onderzoeker vindt de functionaris gegevensbescherming via LinkedIn',
      p: 'Hij meldt erbij dat hij het over twee weken publiek maakt, en tipt een regionale journalist zodat het niet stil kan blijven.'
    },
    {
      d: '5 feb', t: '08:50',
      h: 'De directeur hoort het en belt de bouwer',
      p: 'Er is geen incidentprocedure. De directeur, de FG en de teamleider zoeken in de loop van de ochtend uit wie waarover gaat. Bij de bouwer weet in eerste instantie niemand van welke omgeving sprake is.'
    },
    {
      d: '5 feb', t: '11:30',
      h: 'De sandbox gaat offline',
      p: 'Binnen tweeënhalf uur na het eerste telefoontje. Vanaf hier gaat het snel — en dat is precies waarom de trage helft ervoor zo zwaar weegt.'
    },
    {
      d: '6–7 feb', t: '—',
      h: 'De omvang blijkt niet vast te stellen',
      p: 'De sandbox bewaarde geen toegangslogs. Er is te zien dát het dashboard open stond, niet wie er is geweest of wat is opgehaald. De zin “we hebben geen aanwijzingen dat gegevens zijn gedownload” is letterlijk waar en volstrekt misleidend.'
    },
    {
      d: '8 feb', t: '17:00',
      h: 'Melding bij de Autoriteit Persoonsgegevens',
      p: 'Drie dagen nadat de directeur het hoorde — maar zeventien dagen nadat de organisatie de eerste melding ontving. Of de 72-uursklok op 22 januari of op 5 februari begon, is de scherpste discussievraag van dit lesblok.'
    },
    { gap: ['6 dagen niemand die het vertelt', '6 dgn', 'In de tussentijd wordt intern gewerkt aan “een compleet beeld”. Cliënten, mantelzorgers en verzorgenden weten van niets. De journalist heeft zijn deadline al staan.'] },
    {
      d: '11 feb', t: '06:30', mark: 'iemand vertelt het',
      h: 'Het artikel verschijnt',
      p: 'Cliënten en mantelzorgers lezen het in de krant. Verzorgenden krijgen die ochtend vragen aan de deur die ze niet kunnen beantwoorden — zij zijn niet ingelicht.'
    },
    {
      d: '11 feb', t: '09:15',
      h: 'De mail aan cliënten gaat uit',
      p: 'Tweeënhalf uur na de krant, in een toon die is geschreven voor de toezichthouder. Zie deel 5.'
    },
    {
      d: '12–22 feb', t: '—',
      h: 'De schade wordt zichtbaar op een andere plek dan verwacht',
      p: '41 mantelzorgers trekken hun toegang in, twee cliënten stappen over naar een andere aanbieder. De teamleider is anderhalve week vrijwel volledig kwijt aan telefoongesprekken. Twee verzorgenden zeggen achteraf dat ze zijn gaan twijfelen of ze notities nog wel in de app zetten — en dat raakt de betrouwbaarheid van het dossier (A1).'
    }
  ],

  // [vraag, antwoord]
  layers: [
    [
      'Wat ging er mis?',
      'Een testomgeving met echte cliëntdata stond open met een standaardwachtwoord.'
    ],
    [
      'Waarom kon dat?',
      'Omdat er een kopie van productiedata buiten productie mocht bestaan. De testomgeving was ingericht voor verzonnen data en werd nooit opnieuw beoordeeld toen er echte data in kwam. De beveiliging paste bij wat er hoorde te staan, niet bij wat er stond.'
    ],
    [
      'Waarom had niemand dat besloten?',
      'Omdat de vraag “mag productiedata de productieomgeving verlaten, en wie beslist dat?” bij niemand op het bordje lag. De zorgorganisatie ging ervan uit dat de bouwer dat regelde; de bouwer ging ervan uit dat de klant het zou zeggen als het niet mocht. Dezelfde aanname stond in week 1 al onderaan het Security Context Canvas — als open vraag, niet als risico met een eigenaar.'
    ]
  ],

  good: [
    'Na het eerste telefoontje stond de omgeving binnen tweeënhalf uur offline. De technische respons was niet het probleem.',
    'De onderzoeker meldde netjes en gaf ruim de tijd. Dat de organisatie die tijd niet gebruikte, ligt niet aan hem.',
    'De awarenesstraining wérkte: de officemanager herkende het phishingpatroon correct. Wat ontbrak was een route voor een échte melding van buiten.',
    'De FG greep binnen een dag in nadat zij het hoorde, en drong aan op melden bij de AP ondanks druk om te wachten op “een compleet beeld”.',
    'Er is een post-mortem gehouden, met de bouwer erbij. Dat is minder vanzelfsprekend dan het klinkt.'
  ],

  // [wanneer, aan wie, wat er gezegd is, hoe het landde]
  comms: [
    [
      '11 feb 09:15',
      'e-mail aan alle cliënten en mantelzorgers',
      'Er is bij een externe leverancier een beperkt aantal gegevens onbedoeld toegankelijk geweest. Er is geen sprake van een hack van de app “Naaste”.',
      'Beide zinnen zijn waar en allebei worden ze gelezen als wegduiken. “Beperkt” gaat over 1.412 dossiers, en dat “het niet de app was” interesseert niemand wiens medicatiegegevens erin stonden. Het bericht kwam bovendien ná de krant — daarmee werd het geen mededeling maar een reactie.'
    ],
    [
      '11 feb 09:15',
      'wat er níet in de mail stond',
      '— geen datum waarop het begon, geen aantal, geen antwoord op “stonden mijn gegevens erbij?”',
      'De helpdesk kreeg 90 telefoontjes met precies die vraag, en had er geen antwoord op. Elk gesprek herhaalde de fout die de mail al had gemaakt. Eén regel met een datum en een aantal had het grootste deel daarvan voorkomen.'
    ],
    [
      '11 feb 12:40',
      'appbericht aan verzorgenden',
      'Verwijs vragen van cliënten door naar de teamleider.',
      'Verzorgenden stonden al sinds acht uur ’s ochtends bij mensen thuis. Zij waren het gezicht van de organisatie en waren als laatste geïnformeerd — precies andersom als het zou moeten. Dit is de fout die het meest kostte aan vertrouwen, en de goedkoopste om te voorkomen.'
    ],
    [
      '14 feb',
      'reactie aan de journalist',
      'Wij nemen privacy zeer serieus en hebben direct maatregelen genomen.',
      'De standaardzin. Hij werd in het vervolgartikel letterlijk geciteerd, met daaronder de tijdlijn van zeventien dagen. Een zin die je niet kunt onderbouwen met een tijdlijn maakt het verhaal erger, niet beter.'
    ]
  ],

  status: { done: 'gedaan', half: 'half', open: 'niet' },

  // [maatregel, stand van zaken, status]
  measures: [
    ['Verbod op kopieën van productiedata buiten productie, vastgelegd in de verwerkersovereenkomst', 'Contract aangepast bij de verlenging in juni. De testomgeving werkt sindsdien met gegenereerde data.', 'done'],
    ['Meldpunt voor kwetsbaarheden: security.txt en een adres dat bij de FG uitkomt', 'Binnen twee weken geregeld. Sindsdien zijn er twee meldingen binnengekomen, beide binnen een dag opgepakt.', 'done'],
    ['Incidentprocedure met rollen, escalatiepad en een woordvoerder', 'Concept van vier pagina’s ligt er, nooit geoefend. Bij de eerstvolgende storing greep men er niet naar.', 'half'],
    ['Logging op alle omgevingen van de bouwer, ook niet-productie', 'Productie is gedekt. Voor de overige omgevingen is geen budget vrijgemaakt.', 'half'],
    ['Communicatiedraaiboek: eerst medewerkers, dan betrokkenen, dan pers', 'Als actiepunt genoteerd, geen eigenaar toegewezen. Vier maanden later onveranderd.', 'open'],
    ['Jaarlijkse controle van de leverancier op omgevingen en toegang', 'Afgesproken voor het najaar. Nog geen datum, geen checklist, geen aanwijsbare eigenaar.', 'open']
  ],

  unknowns: [
    'Of de dataset daadwerkelijk volledig is opgehaald, en door wie. Zonder logging op de sandbox is dat niet meer vast te stellen — en dat is een ontwerpkeuze, geen pech.',
    'Of de gegevens nog ergens circuleren. Er zijn geen aanwijzingen van, maar “geen aanwijzingen” betekent hier letterlijk: we hebben geen manier om te kijken.',
    'Wanneer de 72-uursklok van de AVG precies begon te lopen. Bij ontvangst op info@ (22 januari) of bij kennisname door de directie (5 februari)? De organisatie hanteert de tweede lezing; de eerste is verdedigbaar en zou de melding zeventien dagen te laat maken.',
    'Hoeveel cliënten zijn vertrokken om deze reden. Twee zeiden het er hardop bij; hoeveel er stil zijn weggegaan is niet te achterhalen.',
    'Of verzorgenden sindsdien minder in de app noteren. Twee gaven het aan; als het breder speelt, verplaatst het lek zich naar de betrouwbaarheid van het dossier (A1) — en dat merk je pas als er iets misgaat in de zorg.'
  ],

  // [tijd, wat, toelichting]
  work: [
    ['5 min', 'Alleen de feiten uitdelen', 'Deel 1 op papier, meer niet. Wat is hier gebeurd? Teams noteren hun eerste oordeel op een post-it en leggen die omgekeerd neer — die halen ze aan het eind terug.'],
    ['15 min', 'De tijdlijn terugbouwen', 'Teams krijgen de gebeurtenissen los en op volgorde geschud, en leggen ze op tafel. De opdracht is niet de volgorde, maar de gaten: waar zit tijd waarin niemand iets doet, en wat had die tijd moeten vullen?'],
    ['10 min', 'Drie keer doorvragen', 'Van de fout naar de ontwerpkeuze. Stop pas als het antwoord iets is dat je in een ontwerp of afspraak kunt veranderen — niet iets dat iemand beter had moeten doen.'],
    ['10 min', 'De communicatie herschrijven', 'Elk team herschrijft de mail van 11 februari, in maximaal 120 woorden, te versturen op 5 februari. Voorlezen, en de klas stemt: welke zou jíj willen krijgen over je moeder?'],
    ['10 min', 'Terug naar de eigen casus', 'De vijf transfervragen hieronder. Antwoorden gaan als responsafspraken mee naar de governancekaart van blok 9.']
  ],
  transferH: 'Terug naar je eigen casus — vijf vragen',
  transfer: [
    'Waar in jouw keten staat een kopie van echte gegevens buiten de plek waar ze horen? Wie heeft dat besloten?',
    'Als een onbekende vandaag een kwetsbaarheid in jouw casus vindt: waar mailt die naartoe, en wie leest dat binnen een dag?',
    'Welke aanname op jouw Security Context Canvas heeft nog steeds geen eigenaar? Zet er vandaag een naam bij.',
    'Wie hoort het als eerste, wie als tweede, wie als derde — en wie schrijft het? Leg de volgorde vast vóórdat je hem nodig hebt.',
    'Welke zin zou jij nooit willen teruglezen in de krant, met een tijdlijn eronder?'
  ],

  // [fase, artefact, wat het toevoegt, kleurvariabele]
  growth: [
    ['Week 1 · blok 9', 'Security Context Canvas', 'de aanname die hier de oorzaak wordt', 'var(--w1)'],
    ['Week 3 · blok 5', 'Dependency map', 'de leverancier met productietoegang', 'var(--w3)'],
    ['Week 3 · blok 7', 'Breach-writeup', 'tijdlijn, communicatie, post-mortem', 'var(--w2)'],
    ['Week 3 · blok 9', 'Governancekaart', 'rollen + responsafspraken op de casus', 'var(--w4)']
  ],

  contactLink: 'contact',
  title: 'Breach-writeup · Secure by Design'
}

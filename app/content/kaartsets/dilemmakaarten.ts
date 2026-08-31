// Dilemmakaarten — kaartset bij Fundament W1·blok 8, direct na de security bingo.
//
// Zelfde opzet als principekaartjes.ts en dreigingskaarten.ts: de kaarten zijn
// Nederlandstalig lesmateriaal, alleen de paginateksten (ui) zijn tweetalig.
// Afwijkend formaat: 95 × 135 mm, 4 kaarten per A4 — er staat meer tekst op dan op
// een speelkaart en de kaart ligt midden op tafel in een groepje van 3–4. Net iets
// kleiner dan A6, zodat 2 × 2 kaarten binnen de standaard printmarges van een A4 vallen
// (4 × A6 is exact A4 en loopt er dus altijd af).
//
// Ontwerpregel: elk dilemma heeft twee opties die allebei verdedigbaar zijn. Zodra
// één optie duidelijk "goed" is, is het geen dilemma maar een quizvraag — dan moet de
// kaart worden aangescherpt. De spanning (`sp`) benoemt welke twee waarden botsen;
// dat is de taal die in week 2–4 terugkomt bij risico's afwegen.

export default {
  slug: '/dilemmakaarten',
  kind: 'dilemmas',
  block: 'W1·8',
  tag: 'dilemma',
  // Week 1-oker, net als de bingokaart: dit materiaal hoort bij dezelfde week.
  color: 'var(--w1)',
  // 2 × 2 op een A4, binnen de standaard printmarges.
  format: { w: '95mm', h: '135mm', perSheet: 4, cols: 2 },
  // Vaste opschriften op de kaart zelf (Nederlands — het is printmateriaal).
  labels: {
    sp: 'Wat botst hier',
    practice: 'De knoop',
    qs: 'Bespreek',
    foot: ''
  },
  prompt: 'kies · onderbouw · wat had het ontwerp anders gekund?',
  // kaart: { id, t (titel), sp (spanning), lead (situatie), bullets (de twee opties), qs (bespreekvragen) }
  cards: [
    {
      id: 'DL01', t: 'Het wachtwoord van je zieke collega', sp: 'doorwerken ↔ herleidbaarheid',
      lead: 'Je collega ligt met griep thuis. Het rooster dat vanmiddag de deur uit moet, staat in háár account. Ze appt: "Log maar even in met mijn wachtwoord, dat staat in mijn agenda."',
      bullets: [
        'A · Inloggen. Het rooster moet eruit, en zij geeft toestemming.',
        'B · Niet inloggen. Bellen dat het later wordt.'
      ],
      qs: [
        'Als er vanmiddag iets misgaat in dat account — op wiens naam staat dat dan?',
        'Waarom is inloggen met haar wachtwoord hier de makkelijkste weg?',
        'Welke voorziening had dit dilemma laten verdwijnen?'
      ]
    },
    {
      id: 'DL02', t: 'De stick op de gang', sp: 'hulpvaardigheid ↔ een schoon netwerk',
      lead: 'Op de gang van je stagebedrijf ligt een USB-stick met een sticker: "salarissen". Je wilt hem teruggeven, maar dan moet je weten van wie hij is.',
      bullets: [
        'A · Erin steken op je laptop, mapje openen, eigenaar zoeken.',
        'B · Inleveren bij de receptie, waar hij waarschijnlijk in een la belandt.'
      ],
      qs: [
        'Wat wil je eigenlijk weten als je hem erin steekt — en wat wil je nog meer weten?',
        'Wie in dit bedrijf zou dit moeten oppakken, en weet die persoon dat?',
        'Hoe maak je "inleveren" de makkelijkste optie in plaats van de saaiste?'
      ]
    },
    {
      id: 'DL03', t: 'Je hebt geklikt', sp: 'eigen gezicht ↔ snelheid van reageren',
      lead: 'Je klikte op een link in een mail die van de helpdesk leek te komen, en typte je wachtwoord in. Twee tellen later zie je het. Niemand heeft het gemerkt.',
      bullets: [
        'A · Melden bij de helpdesk. Gedoe, vragen, misschien een grap op de afdeling.',
        'B · Stilletjes je wachtwoord veranderen en hopen dat het daarmee klaar is.'
      ],
      qs: [
        'Wat gebeurt er in het uur ná jouw klik, in allebei de gevallen?',
        'Wat maakt melden hier moeilijk — regels, of de mensen om je heen?',
        'Wat zou een organisatie moeten doen om melden de normale reactie te maken?'
      ]
    },
    {
      id: 'DL04', t: 'Vrijdag live of veilig live', sp: 'leverbetrouwbaarheid ↔ veilig opleveren',
      lead: 'De release staat vrijdag in de agenda; de klant heeft het aangekondigd. De securitycheck die jullie hadden afgesproken kost twee weken. Je manager: "We doen die check erna, dan halen we het wel."',
      bullets: [
        'A · Meegaan. Vrijdag live, check erachteraan.',
        'B · Op de rem. De deadline missen en dat uitleggen.'
      ],
      qs: [
        'Wat is het verschil in schade tussen "twee weken later live" en "live met een gat"?',
        'Wie neemt dit besluit eigenlijk — en wie draagt de gevolgen?',
        'Hoe had die check vier weken geleden al onderdeel van het werk kunnen zijn?'
      ]
    },
    {
      id: 'DL05', t: 'De deur openhouden', sp: 'beleefdheid ↔ toegangscontrole',
      lead: 'Je scant je pas bij de tourniquet. Achter je loopt iemand met een volle doos en een verhuisrolcontainer. Geen pas te zien. Hij kijkt je aan.',
      bullets: [
        'A · Doorlaten. Hij hoort er duidelijk bij, en anders sta je voor lul.',
        'B · Vriendelijk vragen of hij zelf even scant, of hem naar de balie sturen.'
      ],
      qs: [
        'Wat kost het jou om B te doen — en wat kost het de organisatie als iedereen A doet?',
        'Wie mag hier eigenlijk iemand aanspreken? Voelt een stagiair zich daar vrij in?',
        'Welke ontwerpkeuze maakt B makkelijker (deur, balie, procedure, cultuur)?'
      ]
    },
    {
      id: 'DL06', t: 'De tool die niemand heeft goedgekeurd', sp: 'sneller werken ↔ zeggenschap over gegevens',
      lead: 'Het team gebruikt een gratis online tool die het werk uren per week scheelt. Hij is nooit aangevraagd of goedgekeurd. De klantgegevens die erin gaan, staan bij een bedrijf dat niemand kent.',
      bullets: [
        'A · Blijven gebruiken. Het werkt, en de officiële route duurt maanden.',
        'B · Stoppen en aanmelden, ook al valt het team terug in het oude tempo.'
      ],
      qs: [
        'Wat weet je níét over waar die gegevens staan en wie erbij kan?',
        'Waarom kiest een team hiervoor? Wat zegt dat over het officiële alternatief?',
        'Wat zou de organisatie moeten regelen zodat dit dilemma niet meer ontstaat?'
      ]
    },
    {
      id: 'DL07', t: 'Inloggen aan het bed', sp: 'gebruiksgemak ↔ vertrouwelijkheid',
      lead: 'Thuiszorgmedewerkers moeten bij elke cliënt inloggen met een code uit een app. Bij een cliënt met haast, natte handen en slecht bereik kost dat twee minuten. In de praktijk hangt bij drie adressen het wachtwoord op de meterkast.',
      bullets: [
        'A · Handhaven. De regel is er niet voor niets; hier wordt zorgdata verwerkt.',
        'B · Versoepelen op de plekken waar het knelt, en het risico accepteren.'
      ],
      qs: [
        'Wat is hier eigenlijk stuk: het gedrag van de medewerkers of het ontwerp van de maatregel?',
        'Welke schade is erger bij deze cliënten — meelezen, verkeerde gegevens, of geen toegang tijdens een noodgeval?',
        'Bedenk een derde optie die de maatregel wél werkbaar maakt.'
      ]
    },
    {
      id: 'DL08', t: 'Alles bewaren, voor het geval dat', sp: 'toekomstige waarde ↔ zo min mogelijk bewaren',
      lead: 'Marketing wil de volledige klanthistorie bewaren: "Daar kunnen we later iets slims mee." Technisch kan het, en opslag kost bijna niets.',
      bullets: [
        'A · Bewaren. Weggooien kan altijd nog; opnieuw verzamelen niet.',
        'B · Alleen bewaren wat een aanwijsbaar doel heeft, en de rest opruimen.'
      ],
      qs: [
        'Wat is de schade als deze verzameling over drie jaar op straat ligt?',
        'Wie profiteert van bewaren, en wie draagt het risico?',
        'Welke vraag zou je marketing moeten stellen vóórdat er iets bewaard wordt?'
      ]
    },
    {
      id: 'DL09', t: 'De map die voor iedereen openstaat', sp: 'je plek kennen ↔ verantwoordelijkheid nemen',
      lead: 'Je bent drie weken stagiair. Je ontdekt dat de gedeelde map met klantdossiers voor de hele organisatie leesbaar is — schoonmaak, uitzendkrachten, iedereen. Niemand lijkt het te weten.',
      bullets: [
        'A · Melden bij je begeleider, met het risico dat je overkomt als de stagiair die het beter weet.',
        'B · Laten liggen. Je bent hier tijdelijk, en het is niet jouw systeem.'
      ],
      qs: [
        'Wat is het ergste dat kan gebeuren als je het meldt? En als je het niet meldt?',
        'Bij wie hoort dit thuis: de eigenaar van de map, ICT, of de directie?',
        'Hoe zou jij willen dat een stagiair dit bij jouw bedrijf meldt?'
      ]
    },
    {
      id: 'DL10', t: 'Je oude account werkt nog', sp: 'nieuwsgierigheid ↔ waar de grens ligt',
      lead: 'Een half jaar na je bijbaan probeer je uit gewoonte in te loggen op het kassasysteem. Het werkt gewoon nog. Je kunt bij de omzetcijfers en de personeelsplanning.',
      bullets: [
        'A · Even rondkijken — je hebt er zelf gewerkt, en je doet niets kwaads.',
        'B · Meteen uitloggen en je oude leidinggevende bellen.'
      ],
      qs: [
        'Wat is het verschil tussen "mogen" en "kunnen" — en waar staat de wet?',
        'Waarom staat dit account nog open? Welk proces heeft gefaald?',
        'Hoe zou je willen dat het bedrijf reageert op jouw telefoontje?'
      ]
    },
    {
      id: 'DL11', t: 'Terughacken voor een vriend', sp: 'helpen ↔ het zelf gaan doen',
      lead: 'Een vriend is zijn account kwijt aan een oplichter, die nu zijn volgers oplicht. Het platform reageert niet. Je vriend weet dat jij "iets met security" studeert en vraagt of je het kunt terugpakken.',
      bullets: [
        'A · Proberen. Er is duidelijk een slachtoffer en niemand anders doet iets.',
        'B · Niet doen, en helpen op de manieren die wél mogen.'
      ],
      qs: [
        'Wie zou er nog meer geraakt worden door wat jij probeert?',
        'Wat kun je wél doen dat echt helpt (aangifte, meldpunt, volgers waarschuwen, herstelprocedure)?',
        'Waarom bestaat die grens tussen jou en een aanvaller, als je precies hetzelfde zou doen?'
      ]
    },
    {
      id: 'DL12', t: 'De logs van één medewerker', sp: 'de organisatie beschermen ↔ privacy van je mensen',
      lead: 'Een leidinggevende vermoedt dat een medewerker gegevens meeneemt naar een concurrent. Ze vraagt jou om te kijken wat die persoon de afgelopen maand heeft gedownload. Technisch kan het binnen tien minuten.',
      bullets: [
        'A · Kijken. Er is een concreet vermoeden en het bedrijf loopt schade op.',
        'B · Niet zelf kijken, maar doorverwijzen naar wie hier wél over gaat.'
      ],
      qs: [
        'Wie mag dit besluit nemen, en wat als het vermoeden onterecht blijkt?',
        'Wat doet het met de rest van het team als bekend wordt dat dit zo kan?',
        'Welke afspraken hadden vooraf vastgelegd moeten zijn — en waar?'
      ]
    }
  ],

  // Groepen leveren digitaal in via Brightspace; dit is de vaste structuur van dat antwoord.
  submit: {
    lines: [
      'Dilemma: <nummer + titel>',
      'Groep: <groepsnaam> · Namen: <namen>',
      '',
      '1. Onze keuze — A of B, en in één zin waarom.',
      '2. Het sterkste argument van de andere kant. Het argument dat we het lastigst konden weerleggen.',
      '3. Wie draagt de schade als het misgaat? Noem de partij die het hardst geraakt wordt.',
      '4. Wat had het ontwerp of de organisatie anders kunnen doen, zodat dit dilemma niet was ontstaan?',
      '5. Wat weten we nog niet? Eén vraag die we zouden stellen als we het konden vragen.'
    ]
  },

  // Docentensleutel: de bedoeling achter elke kaart. Niet uitdelen vóór het gesprek.
  key: {
    head: ['#', 'Dilemma', 'Wat botst hier', 'Waar je op stuurt'],
    rows: [
      ['DL01', 'Het wachtwoord van je zieke collega', 'doorwerken ↔ herleidbaarheid', 'Van "mag het" naar "wie is het dan geweest". Opmaat naar onweerlegbaarheid en least privilege (W1·3).'],
      ['DL02', 'De stick op de gang', 'hulpvaardigheid ↔ een schoon netwerk', 'Goede bedoelingen zijn een aanvalsroute. Koppel aan bingogetal 28.'],
      ['DL03', 'Je hebt geklikt', 'eigen gezicht ↔ snelheid van reageren', 'Meldcultuur. De schade zit in het uur dat verloren gaat, niet in de klik.'],
      ['DL04', 'Vrijdag live of veilig live', 'leverbetrouwbaarheid ↔ veilig opleveren', 'Security als eindcontrole verliest het altijd van een deadline — dat is precies P1.'],
      ['DL05', 'De deur openhouden', 'beleefdheid ↔ toegangscontrole', 'Sociale druk verslaat techniek. Wie mag hier aanspreken?'],
      ['DL06', 'De tool die niemand heeft goedgekeurd', 'sneller werken ↔ zeggenschap over gegevens', 'Shadow IT is een symptoom, geen overtreding. Wat zegt het over het officiële alternatief?'],
      ['DL07', 'Inloggen aan het bed', 'gebruiksgemak ↔ vertrouwelijkheid', 'De sleutelkaart. Een onwerkbare maatregel is een ontwerpfout, geen gedragsprobleem.'],
      ['DL08', 'Alles bewaren, voor het geval dat', 'toekomstige waarde ↔ zo min mogelijk bewaren', 'Dataminimalisatie zonder het woord AVG te gebruiken. Komt terug in W3·2.'],
      ['DL09', 'De map die voor iedereen openstaat', 'je plek kennen ↔ verantwoordelijkheid nemen', 'Positie en durf. Sluit aan op de meldcultuur uit DL03.'],
      ['DL10', 'Je oude account werkt nog', 'nieuwsgierigheid ↔ waar de grens ligt', 'Mogen versus kunnen; offboarding als proces. Raakt de ethiekvraag van W2·1.'],
      ['DL11', 'Terughacken voor een vriend', 'helpen ↔ het zelf gaan doen', 'Wat maakt het verschil tussen jou en een aanvaller: de intentie of de toestemming?'],
      ['DL12', 'De logs van één medewerker', 'de organisatie beschermen ↔ privacy van je mensen', 'Monitoring heeft governance nodig. Vooruitwijzing naar W3·1 (rollen) en W2·7.']
    ]
  },

  ui: {
    nl: {
      kicker: 'Kaartset · Fundament W1·blok 8',
      titleLead: 'Dilemma',
      titleEm: 'kaarten',
      lede:
        'Twaalf situaties waarin geen antwoord helemaal goed voelt. Na de security bingo gaan groepjes van drie of vier uiteen met één kaart per ronde: kiezen, onderbouwen, en dan de vraag die ertoe doet — wat had het ontwerp anders kunnen doen zodat dit dilemma nooit was ontstaan? De uitwerkingen gaan digitaal in Brightspace en komen in week 4 terug bij de reflectie.',
      chips: ['12 kaarten', '95 × 135 mm', '4 per A4', 'groepjes van 3–4'],
      back: '← terug naar Fundament',
      dutchOnly: '',

      exportBtn: 'Exporteer naar PDF',
      exportHint: 'Opent het printvenster — kies daar "Opslaan als PDF". Laat de marges op "standaard" staan en zet achtergrondafbeeldingen aan.',
      optsTitle: 'Wat gaat er in de print?',
      optKey: 'Docentensleutel meeprinten',
      empty: 'Geen kaarten geselecteerd.',
      sheet: 'Vel',
      cardsTitle: 'De kaarten',
      cardsSub: 'Op ware grootte. Wat je hier ziet, komt zo uit de printer.',

      howTitle: 'Zo gebruik je de set',
      how: [
        'Direct na de bingo. Groepjes van 3–4, gemengd tech/non-tech. Elk groepje krijgt drie kaarten — niet twaalf: diepgang boven dekking.',
        'Per kaart 8 minuten. Eerst één ronde waarin iedereen zonder onderbreking zegt wat hij zou doen; dan pas het gesprek. Zo kaapt de snelste prater de kaart niet.',
        'Harde regel: het groepje moet kiezen. "Het hangt ervan af" mag alleen als het groepje er de voorwaarde bij benoemt waaronder het kantelt.',
        'Vraag 4 op de kaart is het lesdoel: wat had het ontwerp of de organisatie anders kunnen doen? Daar wordt een persoonlijk dilemma een ontwerpvraag — dat is de brug naar lesblok 9.',
        'Afsluiten klassikaal: elk groepje noemt in één zin het dilemma dat het meest verdeeld was. Die spanning schrijf je op het bord; die woorden komen terug in het security context canvas.'
      ],
      makeTitle: 'Printen en maken',
      make: [
        'Print op stevig papier (160–250 g/m²); dubbelzijdig hoeft niet.',
        'Elk vel bevat 4 kaarten in een 2 × 2 raster; snijd langs de kaartranden.',
        'Eén set van 12 per twee groepjes volstaat als je met drie kaarten per groepje werkt.',
        'Lamineren maakt de set herbruikbaar over meerdere cohorten.'
      ],

      submitTitle: 'Inleveren in Brightspace',
      submitSub:
        'Elk groepje levert per kaart één uitwerking in, als tekst in de Brightspace-opdracht. Vijf vaste kopjes — daar is de latere reflectie op gebouwd, dus de structuur is niet vrijblijvend.',
      submitCopy: 'Kopieer het sjabloon',
      submitCopied: 'Gekopieerd',
      submitNote:
        'Zet dit sjabloon in de opdrachtomschrijving van Brightspace. In week 4, bij de toetsvoorbereiding, krijgen de groepjes hun eigen antwoorden terug met één vraag: welk antwoord zou je nu anders opschrijven, en welk begrip uit de minor gebruik je daarvoor?',

      keyTitle: 'Docentensleutel',
      keySub: 'Waar elk dilemma voor staat en waar je het gesprek naartoe stuurt. Niet uitdelen vóór het gesprek — dat verklapt de knoop.',

      prevTitle: 'Eerst de bingo',
      prevBody: 'De dilemma\'s werken pas als de klas al ervaringen heeft uitgewisseld. De security bingo doet dat in twintig minuten.',
      prevLink: '← naar de security bingo'
    },

    en: {
      kicker: 'Card deck · Foundation W1·block 8',
      titleLead: 'Dilemma ',
      titleEm: 'cards',
      lede:
        'Twelve situations in which no answer feels entirely right. After the security bingo, groups of three or four take one card per round: choose, justify, and then the question that matters — what could the design have done differently so this dilemma never arose? The write-ups are handed in digitally through Brightspace and return in week 4 for reflection.',
      chips: ['12 cards', '95 × 135 mm', '4 per A4', 'groups of 3–4'],
      back: '← back to Foundation',
      dutchOnly: 'The cards themselves are in Dutch: they are printed classroom material for a Dutch-taught minor.',

      exportBtn: 'Export to PDF',
      exportHint: 'Opens the print dialog — choose "Save as PDF" there. Keep margins at "default" and enable background graphics.',
      optsTitle: 'What goes in the print?',
      optKey: 'Include the teacher key',
      empty: 'No cards selected.',
      sheet: 'Sheet',
      cardsTitle: 'The cards',
      cardsSub: 'Shown at actual size. What you see is what comes out of the printer.',

      howTitle: 'How the deck is used',
      how: [
        'Straight after the bingo. Groups of 3–4, mixed tech/non-tech. Each group gets three cards — not twelve: depth over coverage.',
        'Eight minutes per card. First one round in which everyone says what they would do, uninterrupted; only then the discussion. That keeps the fastest talker from owning the card.',
        'Hard rule: the group has to choose. "It depends" is only allowed if the group names the condition under which it tips.',
        'Question 4 on the card is the learning goal: what could the design or the organisation have done differently? That is where a personal dilemma becomes a design question — the bridge to block 9.',
        'Close plenary: each group names in one sentence the dilemma that divided them most. Write that tension on the board; those words return in the security context canvas.'
      ],
      makeTitle: 'Printing and assembly',
      make: [
        'Print on heavy paper (160–250 gsm); single-sided is fine.',
        'Each sheet holds 4 cards in a 2 × 2 grid; cut along the card edges.',
        'One deck of 12 per two groups is enough if each group works with three cards.',
        'Laminating makes the deck last across cohorts.'
      ],

      submitTitle: 'Handing in through Brightspace',
      submitSub:
        'Each group hands in one write-up per card, as text in the Brightspace assignment. Five fixed headings — the later reflection is built on them, so the structure is not optional.',
      submitCopy: 'Copy the template',
      submitCopied: 'Copied',
      submitNote:
        'Put this template in the Brightspace assignment description. In week 4, during test preparation, groups get their own answers back with one question: which answer would you write differently now, and which concept from the minor do you use for it?',

      keyTitle: 'Teacher key',
      keySub: 'What each dilemma is for and where you steer the conversation. Do not hand it out before the discussion — it gives away the knot.',

      prevTitle: 'The bingo comes first',
      prevBody: 'The dilemmas only work once the class has exchanged experiences. The security bingo does that in twenty minutes.',
      prevLink: '← to the security bingo'
    }
  }
}

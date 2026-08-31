// Security bingo — spelmateriaal bij Fundament W1·blok 8 (sociaal/spelblok).
//
// Zelfde opzet als de kaartsets: de stellingen zijn Nederlandstalig lesmateriaal,
// alleen de paginateksten (ui) zijn tweetalig.
//
// Het spel: de docent trekt op het digibord een willekeurig item — getal + stelling.
// Wie dit zélf heeft meegemaakt of van dichtbij heeft gezien, kruist dat getal op zijn
// bingokaart af. De kaarten worden hier geprint; elke kaart heeft een andere trekking
// uit dezelfde genummerde pool.
//
// Ontwerpregel voor de stellingen: elke stelling moet door een niet-technische student
// beantwoord kunnen worden (P2/P5) en moet een verháál kunnen opleveren — vandaar de
// doorvraag `d`. Geen stelling die iemand als "dom" kan wegzetten: het gaat om herkennen,
// niet om afrekenen.

export default {
  slug: '/security-bingo',
  block: 'W1·8',
  // Categorie-codes voor het docentenoverzicht en de nabespreking.
  cats: {
    opl: ['Oplichting & phishing', 'var(--w2)'],
    ww: ['Wachtwoorden & toegang', 'var(--w1)'],
    app: ['Apparaten & software', 'var(--w3)'],
    fys: ['Fysiek & omgeving', 'var(--w4)'],
    geg: ['Gegevens & privacy', 'var(--w2)'],
    org: ['Werk & organisatie', 'var(--w1)']
  },
  // Vaste opschriften op de geprinte bingokaart (Nederlands — het is printmateriaal).
  card: {
    title: 'Security bingo',
    sub: 'Kruis een getal af als je dit zélf hebt meegemaakt of van dichtbij hebt gezien.',
    name: 'Naam',
    nr: 'kaart',
    free: 'vrij',
    foot: 'Volle rij of kolom? Roep "bingo!" — en vertel er één verhaal bij.'
  },
  // stelling: { n (getal), t (stelling), d (doorvraag van de docent), k (categorie) }
  items: [
    { n: 1, k: 'opl', t: 'Je hebt een phishingmail geopend en pas later doorgehad dat hij nep was.', d: 'Waaraan zág je het uiteindelijk?' },
    { n: 2, k: 'opl', t: 'Je hebt geklikt op een sms of appje over een pakketje dat je niet had besteld.', d: 'Wat maakte dat bericht geloofwaardig?' },
    { n: 3, k: 'opl', t: 'Iemand in je omgeving is geld kwijtgeraakt aan oplichting (bank, WhatsApp, Marktplaats).', d: 'Wat had dit kunnen tegenhouden?' },
    { n: 4, k: 'opl', t: 'Je bent gebeld door "de bank", "Microsoft" of een helpdesk die iets van je nodig had.', d: 'Hoe wist je dat het niet klopte — of wist je dat niet?' },
    { n: 5, k: 'opl', t: 'Je hebt een nepwebshop of nepadvertentie herkend — of er nét niet in getrapt.', d: 'Wat was het signaal?' },
    { n: 6, k: 'opl', t: 'Iemand heeft weleens op jouw naam een bericht verstuurd.', d: 'Wat deed dat met het vertrouwen van de ontvangers?' },
    { n: 7, k: 'opl', t: 'Je hebt een QR-code gescand zonder te kijken waar hij naartoe ging.', d: 'Waar stond die code?' },

    { n: 8, k: 'ww', t: 'Je hebt hetzelfde wachtwoord op twee of meer plekken gebruikt.', d: 'Wat zou er gebeuren als één van die plekken lekt?' },
    { n: 9, k: 'ww', t: 'Je wachtwoord staat of stond ergens opgeschreven: papiertje, notitie-app, schrift.', d: 'Waarom eigenlijk? Wat maakte onthouden zo lastig?' },
    { n: 10, k: 'ww', t: 'Je hebt een melding gehad dat je gegevens in een datalek voorkwamen.', d: 'Wat heb je toen gedaan?' },
    { n: 11, k: 'ww', t: 'Je gebruikt een wachtwoordmanager.', d: 'Wat gaf de doorslag om te beginnen?' },
    { n: 12, k: 'ww', t: 'Je hebt je verjaardag, huisdier of favoriete club in een wachtwoord verwerkt.', d: 'Hoeveel mensen weten die drie dingen van jou?' },
    { n: 13, k: 'ww', t: 'Je bent een account niet meer in gekomen omdat je je tweede factor kwijt was.', d: 'Wat was er nodig om weer binnen te komen?' },
    { n: 14, k: 'ww', t: 'Er is ingebroken in een van je accounts: mail, socials of een game.', d: 'Hoe merkte je het?' },
    { n: 15, k: 'ww', t: 'Je hebt een wachtwoord gedeeld via WhatsApp, Teams of mail.', d: 'Staat dat bericht er nu nog?' },
    { n: 16, k: 'ww', t: 'Je deelt een account met vrienden, familie of collega\'s.', d: 'Wie kan er nu allemaal bij — weet je dat precies?' },
    { n: 17, k: 'ww', t: 'Je hebt nog toegang tot een systeem van een oude stage, bijbaan of vereniging.', d: 'Wie had die toegang moeten intrekken?' },

    { n: 18, k: 'app', t: 'Je hebt updates dagenlang weggeklikt.', d: 'Wat weerhield je — tijd, angst voor gedoe, of gewoon niet aan gedacht?' },
    { n: 19, k: 'app', t: 'Je hebt een app rechten gegeven zonder te lezen waar hij om vroeg.', d: 'Wat vroeg die app volgens jou?' },
    { n: 20, k: 'app', t: 'Je hebt software gedownload van een site die je eigenlijk niet vertrouwde.', d: 'Wat won het van je twijfel?' },
    { n: 21, k: 'app', t: 'Je hebt een virus, malware of een gekaapte browser op een apparaat gehad.', d: 'Hoe kwam je er weer vanaf?' },
    { n: 22, k: 'app', t: 'Jij of iemand dichtbij je heeft ransomware meegemaakt.', d: 'Wat lag er stil, en hoe lang?' },
    { n: 23, k: 'app', t: 'Je bent gegevens kwijtgeraakt omdat er geen back-up was.', d: 'Wat was het, en wat heb je daarna veranderd?' },
    { n: 24, k: 'app', t: 'Je hebt een slim apparaat in huis: camera, deurbel, speaker of robotstofzuiger.', d: 'Wie kan er meekijken of meeluisteren, denk je?' },
    { n: 25, k: 'app', t: 'Je hebt het standaardwachtwoord van een router, camera of ander apparaat nooit veranderd.', d: 'Waar staat dat standaardwachtwoord te vinden?' },
    { n: 26, k: 'app', t: 'Je hebt op openbare wifi ingelogd op iets persoonlijks: bank, mail of DigiD.', d: 'Waar was dat, en waarom kon het niet wachten?' },

    { n: 27, k: 'fys', t: 'Je hebt je telefoon of laptop een keer verloren of laten liggen.', d: 'Wat was je eerste gedachte?' },
    { n: 28, k: 'fys', t: 'Je hebt een USB-stick in een apparaat gestoken zonder te weten van wie hij was.', d: 'Wat hoopte je erop te vinden?' },
    { n: 29, k: 'fys', t: 'Iemand keek mee toen jij een pincode of wachtwoord intypte — of jij keek mee.', d: 'Werd dat benoemd, of deed iedereen alsof het niet gebeurde?' },
    { n: 30, k: 'fys', t: 'Je bent achter iemand aan een gebouw of afdeling binnengelopen zonder eigen pas.', d: 'Zou iemand jou hebben aangesproken?' },
    { n: 31, k: 'fys', t: 'Je hebt je laptop onvergrendeld achtergelaten op een werkplek of in de bibliotheek.', d: 'Hoe lang was je weg?' },
    { n: 32, k: 'fys', t: 'Je hebt een gesprek over werk of studie meegeluisterd in de trein of kantine.', d: 'Wat kon je horen dat niet voor jou bedoeld was?' },

    { n: 33, k: 'geg', t: 'Je hebt een schermafbeelding gedeeld waar meer op stond dan de bedoeling was.', d: 'Wie zag het, en heb je het nog kunnen terugdraaien?' },
    { n: 34, k: 'geg', t: 'Je hebt een bericht met gevoelige informatie naar de verkeerde persoon gestuurd — of gekregen.', d: 'Wat gebeurde er daarna?' },
    { n: 35, k: 'geg', t: 'Je hebt tijdens een videocall iets in beeld gehad wat er niet in hoorde.', d: 'Wat was het gevolg?' },
    { n: 36, k: 'geg', t: 'Je hebt gemerkt dat een bedrijf meer van je wist dan je had verwacht.', d: 'Hoe kwamen ze daaraan, denk je?' },
    { n: 37, k: 'geg', t: 'Je hebt op "alles accepteren" geklikt om van een cookiemelding af te zijn.', d: 'Wat heb je daar precies mee weggegeven?' },

    { n: 38, k: 'org', t: 'Je hebt gewerkt met een systeem waar iedereen hetzelfde account voor gebruikte.', d: 'Wie was er verantwoordelijk als het misging?' },
    { n: 39, k: 'org', t: 'Bij je werk of stage is je bij het inwerken nooit iets over veiligheid verteld.', d: 'Wat had je op dag één moeten weten?' },
    { n: 40, k: 'org', t: 'Je hebt een fout of een verdachte situatie gemeld — of juist níét, uit angst voor gedoe.', d: 'Wat maakte melden makkelijk of moeilijk?' }
  ],

  ui: {
    nl: {
      kicker: 'Spelmateriaal · Fundament W1·blok 8',
      titleLead: 'Security ',
      titleEm: 'bingo',
      lede:
        'Veertig herkenbare security-situaties, genummerd. Op het digibord trek je er telkens één: getal plus stelling. Wie het zelf heeft meegemaakt of van dichtbij heeft gezien, kruist dat getal af op zijn kaart. Zo maakt de klas kennis via risico\'s — en heeft iedereen al een eigen ervaring vóór er één begrip is uitgelegd.',
      chips: ['40 stellingen', 'digibord + print', '2 kaarten per A4', '20–25 minuten'],
      back: '← terug naar Fundament',
      dutchOnly: '',

      tabs: { play: 'Digibord — trekken', print: 'Bingokaarten printen' },

      play: {
        idleTitle: 'Klaar om te trekken',
        idleBody: 'Deel eerst de bingokaarten uit. Druk dan op spatie of klik op "Trek een stelling".',
        rule: 'Meegemaakt of van dichtbij gezien? Kruis het getal af.',
        draw: 'Trek een stelling',
        next: 'Volgende',
        undo: 'Terug',
        reset: 'Opnieuw',
        full: 'Volledig scherm',
        exit: 'Verlaat volledig scherm',
        showAsk: 'Doorvraag tonen',
        drawnTitle: 'Al getrokken',
        drawnEmpty: 'Nog niets getrokken.',
        counter: 'getrokken',
        done: 'Alle stellingen zijn geweest.',
        hint: 'Spatie of → trekt de volgende · ← gaat terug'
      },

      print: {
        title: 'Bingokaarten',
        sub: 'Elke kaart trekt een andere set getallen uit dezelfde pool van 40. Twee kaarten per A4 — snijd ze doormidden.',
        exportBtn: 'Exporteer naar PDF',
        exportHint: 'Opent het printvenster — kies daar "Opslaan als PDF". Laat de marges op "standaard" staan en zet achtergrondafbeeldingen aan.',
        count: 'Aantal kaarten',
        size: 'Raster',
        size4: '4 × 4 — 16 getallen',
        size5: '5 × 5 — 24 getallen + vrij vakje',
        sizeHint: 'Neem 4 × 4 als je binnen 20 minuten een bingo wilt. 5 × 5 duurt langer.',
        seed: 'Setcode',
        seedHint: 'Dezelfde setcode geeft exact dezelfde kaarten — handig om bij te printen voor wie er niet was.',
        optList: 'Stellingenlijst meeprinten',
        sheet: 'Vel'
      },

      howTitle: 'Zo speel je het',
      how: [
        'Deel de kaarten uit — één per student. Iedereen zet zijn naam erop; de kaart gaat aan het eind mee de dilemmaronde in als gespreksstof.',
        'Trek op het digibord een stelling. Lees hem hardop. Wie het zelf heeft meegemaakt óf van dichtbij heeft gezien, kruist dat getal af als het op zijn kaart staat.',
        'Vraag bij elke twee, drie trekkingen één verhaal op: "wie heeft dit meegemaakt?" De doorvraag onder de stelling geeft je de vervolgvraag. Niet doorvragen als iemand niet wil — meedoen is vrijwillig.',
        'Eerste volle rij: bingo. Speel door tot ook iemand een volle kolom heeft; daarna stoppen. Dat is genoeg voor het lesdoel en houdt tijd over voor de dilemma\'s.',
        'Sluit af met de vraag die de brug naar de dilemma\'s slaat: welke afgekruiste stelling was géén domme fout, maar een ontwerp dat het je moeilijk maakte?'
      ],
      makeTitle: 'Voorbereiding',
      make: [
        'Print de kaarten op gewoon papier — ze worden beschreven en zijn eenmalig.',
        'Print één stellingenlijst voor jezelf, als je zonder digibord komt te zitten.',
        'Reken op 20–25 minuten inclusief verhalen. Loopt het uit, stop dan na de eerste rij.',
        'Zet vooraf de spelregel neer: niemand hoeft iets te vertellen wat hij niet kwijt wil.'
      ],

      keyTitle: 'Stellingenlijst',
      keySub: 'Alle veertig op een rij, met categorie en doorvraag. Dit is je spiekvel tijdens het spel en je materiaal voor de nabespreking.',
      keyHead: ['#', 'Stelling', 'Categorie', 'Doorvraag'],
      catTitle: 'Waar gaat het over?',
      catSub: 'De verdeling over de zes categorieën is bewust scheef: gedrag en oplichting wegen zwaarder dan techniek. Dat is de boodschap van dit blok.',
      debriefTitle: 'De nabespreking — van bingo naar cultuur',
      debrief: [
        'Welke stelling had bijna iedereen afgekruist? Dat is geen toeval maar een ontwerpprobleem: kennelijk maakt iets het ons allemaal moeilijk.',
        'Welke stelling had bijna niemand? Vaak is dat er één waar je iets van moet wéten — precies waar deze minor over gaat.',
        'Wie kruiste iets af waar hij zelf niets aan kon doen? Dat is het verschil tussen schuld en verantwoordelijkheid, en de opmaat naar Secure by Design.',
        'Bewaar drie voorbeelden uit de zaal — die gebruik je in lesblok 9 als de teams hun abuse cases schrijven.'
      ],
      nextTitle: 'En dan de dilemma\'s',
      nextBody: 'De bingo levert ervaringen op, geen oordelen. Daarvoor zijn de dilemmakaarten: in groepjes van drie of vier, direct na de bingo.',
      nextLink: 'Naar de dilemmakaarten →'
    },

    en: {
      kicker: 'Game material · Foundation W1·block 8',
      titleLead: 'Security ',
      titleEm: 'bingo',
      lede:
        'Forty recognisable security situations, numbered. On the classroom screen you draw one at a time: a number plus a statement. Anyone who has experienced it themselves, or seen it happen close by, crosses that number off their card. The class gets acquainted through risks — everyone has a personal experience before a single concept has been explained.',
      chips: ['40 statements', 'screen + print', '2 cards per A4', '20–25 minutes'],
      back: '← back to Foundation',
      dutchOnly: 'The statements and the printed cards are in Dutch: this is classroom material for a Dutch-taught minor.',

      tabs: { play: 'Screen — draw', print: 'Print bingo cards' },

      play: {
        idleTitle: 'Ready to draw',
        idleBody: 'Hand out the bingo cards first. Then press space or click "Draw a statement".',
        rule: 'Experienced it, or seen it close by? Cross off the number.',
        draw: 'Draw a statement',
        next: 'Next',
        undo: 'Back',
        reset: 'Restart',
        full: 'Full screen',
        exit: 'Exit full screen',
        showAsk: 'Show follow-up question',
        drawnTitle: 'Already drawn',
        drawnEmpty: 'Nothing drawn yet.',
        counter: 'drawn',
        done: 'All statements have been drawn.',
        hint: 'Space or → draws the next one · ← goes back'
      },

      print: {
        title: 'Bingo cards',
        sub: 'Every card draws a different set of numbers from the same pool of 40. Two cards per A4 — cut them in half.',
        exportBtn: 'Export to PDF',
        exportHint: 'Opens the print dialog — choose "Save as PDF" there. Keep margins at "default" and enable background graphics.',
        count: 'Number of cards',
        size: 'Grid',
        size4: '4 × 4 — 16 numbers',
        size5: '5 × 5 — 24 numbers + free space',
        sizeHint: 'Take 4 × 4 if you want a bingo within 20 minutes. 5 × 5 takes longer.',
        seed: 'Set code',
        seedHint: 'The same set code produces exactly the same cards — useful for reprinting for anyone who missed the session.',
        optList: 'Include the statement list',
        sheet: 'Sheet'
      },

      howTitle: 'How to play',
      how: [
        'Hand out the cards — one per student. Everyone writes their name on it; the card goes into the dilemma round afterwards as conversation material.',
        'Draw a statement on screen and read it out loud. Anyone who has experienced it themselves, or seen it close by, crosses off that number if it is on their card.',
        'Every two or three draws, collect one story: "who has experienced this?" The follow-up question under the statement gives you the next prompt. Never push — taking part is voluntary.',
        'First full row: bingo. Play on until someone also has a full column, then stop. That is enough for the learning goal and leaves time for the dilemmas.',
        'Close with the question that bridges to the dilemmas: which crossed-off statement was not a silly mistake, but a design that made it hard for you?'
      ],
      makeTitle: 'Preparation',
      make: [
        'Print the cards on plain paper — they get written on and are single-use.',
        'Print one statement list for yourself, in case the screen fails you.',
        'Budget 20–25 minutes including stories. Running late? Stop after the first row.',
        'State the ground rule up front: nobody has to share anything they would rather not.'
      ],

      keyTitle: 'Statement list',
      keySub: 'All forty in one table, with category and follow-up question. Your cheat sheet during the game and your material for the debrief.',
      keyHead: ['#', 'Statement', 'Category', 'Follow-up question'],
      catTitle: 'What is it about?',
      catSub: 'The spread across the six categories is deliberately uneven: behaviour and fraud outweigh technology. That is the message of this block.',
      debriefTitle: 'The debrief — from bingo to culture',
      debrief: [
        'Which statement did almost everyone cross off? That is not coincidence but a design problem: something evidently makes it hard for all of us.',
        'Which statement did almost nobody cross off? Often it is one you have to know something about — exactly what this minor is for.',
        'Who crossed off something they could do nothing about? That is the difference between blame and responsibility, and the run-up to Secure by Design.',
        'Keep three examples from the room — you will use them in block 9 when teams write their abuse cases.'
      ],
      nextTitle: 'And then the dilemmas',
      nextBody: 'The bingo produces experiences, not judgements. That is what the dilemma cards are for: in groups of three or four, straight after the bingo.',
      nextLink: 'To the dilemma cards →'
    }
  }
}

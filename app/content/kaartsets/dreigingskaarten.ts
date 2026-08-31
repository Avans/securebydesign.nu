// Dreigingskaarten — sorteerset bij Fundament W2·blok 2, ook bruikbaar in W2·5, W2·8 en W2·9.
//
// Zelfde opzet als principekaartjes.ts: de kaarten zijn Nederlandstalig lesmateriaal,
// alleen de paginateksten (ui) zijn tweetalig. Kaartformaat 63 × 88 mm, 9 per A4.
//
// Let op: de categorie en de B/I/V-impact staan BEWUST niet op de kaart — dat is
// precies wat de studenten bij het sorteren zelf moeten bepalen. Ze staan in de
// docentensleutel onderaan de pagina.

export default {
  slug: '/dreigingskaarten',
  kind: 'dreigingen',
  block: 'W2·2',
  // De vaste denkvragen onderaan elke kaart (sturen het sorteren, verklappen niets).
  prompt: 'wie? · hoe binnen? · wat raakt het?',
  // Vaste opschriften op de kaart zelf (Nederlands — het is printmateriaal).
  labels: { foot: 'Wat kan er misgaan?', blank: 'Schrijf hier je eigen dreiging uit de casus' },
  // kaart: { id, t (dreiging), lead (scenario), foot (wat kan er misgaan) }
  cards: [
    {
      id: 'D01', t: 'Phishingmail',
      lead: 'Een mail die van de ICT-afdeling lijkt te komen vraagt je om "even opnieuw in te loggen" via een link.',
      foot: 'Je inloggegevens liggen op straat; de aanvaller werkt verder als jij.'
    },
    {
      id: 'D02', t: 'Ransomware',
      lead: 'Maandagochtend zijn alle bestanden versleuteld. Op het scherm staat een betaalinstructie in bitcoin.',
      foot: 'Het werk ligt stil — en de back-up blijkt mee versleuteld.'
    },
    {
      id: 'D03', t: 'DDoS-aanval',
      lead: 'Je dienst wordt overspoeld met nepverkeer en is een halve dag onbereikbaar.',
      foot: 'Klanten kunnen er niet bij; omzet en vertrouwen lopen weg.'
    },
    {
      id: 'D04', t: 'Man-in-the-middle op publieke wifi',
      lead: 'Een medewerker werkt op het station via een netwerk dat "Gratis WiFi" heet.',
      foot: 'Verkeer wordt meegelezen of onderweg aangepast.'
    },
    {
      id: 'D05', t: 'Injectie via een invoerveld',
      lead: 'Iemand typt in een zoekveld geen naam, maar een stukje code.',
      foot: 'De database geeft meer terug dan bedoeld — of verandert stilletjes.'
    },
    {
      id: 'D06', t: 'Besmette USB-stick',
      lead: 'Op de parkeerplaats ligt een stick met het label "salarissen 2026".',
      foot: 'Eén klik installeert malware midden in het netwerk.'
    },
    {
      id: 'D07', t: 'Hergebruikte wachtwoorden',
      lead: 'Een wachtwoord uit een oud webshoplek blijkt ook het werkwachtwoord te zijn.',
      foot: 'Aanvallers proberen geautomatiseerd miljoenen combinaties, en één past.'
    },
    {
      id: 'D08', t: 'Zero-day in gebruikte software',
      lead: 'Er wordt een kwetsbaarheid misbruikt waarvoor nog geen update bestaat.',
      foot: 'Je bent kwetsbaar terwijl je alles keurig had bijgewerkt.'
    },
    {
      id: 'D09', t: 'Besmette software-update',
      lead: 'Een vertrouwde leverancier levert een update waar een aanvaller iets aan heeft toegevoegd.',
      foot: 'Je installeert de aanval zelf, met alle rechten die de update krijgt.'
    },
    {
      id: 'D10', t: 'Kwetsbare open-source library',
      lead: 'Een klein pakketje diep in je software blijkt een bekend lek te bevatten.',
      foot: 'Duizenden systemen zijn in één klap kwetsbaar — ook die van jou.'
    },
    {
      id: 'D11', t: 'Open cloudopslag',
      lead: 'Een map met klantgegevens staat per ongeluk publiek toegankelijk op internet.',
      foot: 'Iedereen met de link leest mee; er is geen aanval voor nodig.'
    },
    {
      id: 'D12', t: 'Uitval van je clouddienst',
      lead: 'Je platform draait bij één leverancier, en die ligt er een dag uit.',
      foot: 'Jij ligt eruit zonder dat je zelf iets fout hebt gedaan.'
    },
    {
      id: 'D13', t: 'CEO-fraude',
      lead: 'De "directeur" appt de financiële medewerker om met spoed een factuur te betalen. Discreet graag.',
      foot: 'Het geld is weg voordat iemand het durfde na te vragen.'
    },
    {
      id: 'D14', t: 'Social engineering bij de helpdesk',
      lead: 'Iemand belt in paniek: "ik ben mijn wachtwoord kwijt en sta over vijf minuten voor de klant".',
      foot: 'De helpdesk reset behulpzaam het account van een volslagen vreemde.'
    },
    {
      id: 'D15', t: 'Shadow IT',
      lead: 'Een team gebruikt een gratis online tool om sneller te werken. Niemand anders weet ervan.',
      foot: 'Bedrijfsdata staat op een plek zonder afspraken, back-up of toezicht.'
    },
    {
      id: 'D16', t: 'Kwaadwillende insider',
      lead: 'Een medewerker die opstapt kopieert het klantenbestand mee naar de nieuwe werkgever.',
      foot: 'De aanvaller hoeft niet in te breken — hij mag naar binnen.'
    },
    {
      id: 'D17', t: 'Menselijke fout',
      lead: 'Een bijlage met persoonsgegevens gaat naar de verkeerde ontvanger in de adreslijst.',
      foot: 'Datalek zonder aanvaller; de meldplicht loopt gewoon.'
    },
    {
      id: 'D18', t: 'Verlies of diefstal van apparatuur',
      lead: 'Een tas met laptop en telefoon blijft in de trein liggen.',
      foot: 'Alles wat erop staat en openstaat, ligt bij een vreemde.'
    },
    {
      id: 'D19', t: 'Meelopen naar binnen',
      lead: 'Iemand met twee volle dozen loopt vriendelijk achter je aan door de toegangsdeur.',
      foot: 'Een onbevoegde staat naast de serverkast of een onvergrendeld scherm.'
    },
    {
      id: 'D20', t: 'Meekijken en meeluisteren',
      lead: 'Een gesprek over de casus in de trein; het scherm is van twee kanten leesbaar.',
      foot: 'Vertrouwelijke informatie lekt zonder één technische fout.'
    },
    {
      id: 'D21', t: 'Verouderde systemen',
      lead: 'Een server draait al drie jaar mee "want hij doet het nog"; updates zijn er nooit op gezet.',
      foot: 'Bekende lekken staan jarenlang open, met kant-en-klare aanvalscode erbij.'
    },
    {
      id: 'D22', t: 'Rechten die meegroeien',
      lead: 'Na drie functiewisselingen heeft iemand nog alle toegang van alle oude rollen.',
      foot: 'Eén account met de sleutels van het hele gebouw.'
    },
    {
      id: 'D23', t: 'Back-up zonder hersteltest',
      lead: 'Er wordt elke nacht netjes geback-upt. Terugzetten heeft nog nooit iemand geprobeerd.',
      foot: 'Bij het incident blijkt de back-up leeg, oud of onleesbaar.'
    },
    {
      id: 'D24', t: 'Geen incidentprocedure',
      lead: 'Er is iets vreemds gezien in de logs, maar niemand weet wie je daarvoor belt.',
      foot: 'Uren verloren, meldtermijn gemist, communicatie chaotisch.'
    },
    { id: 'D25', t: 'Eigen dreiging', blank: true },
    { id: 'D26', t: 'Eigen dreiging', blank: true },
    { id: 'D27', t: 'Eigen dreiging', blank: true }
  ],

  // De sleutel — alleen voor de docent. Niet uitdelen vóór het sorteren.
  key: {
    head: ['#', 'Dreiging', 'Categorie', 'Raakt', 'Richting van de maatregel'],
    rows: [
      ['D01', 'Phishingmail', 'Mens & gedrag', 'V', 'MFA, meldknop, afzendercontrole, oefenen'],
      ['D02', 'Ransomware', 'Digitaal', 'B · I', 'Offline back-up, hersteltest, segmentatie'],
      ['D03', 'DDoS-aanval', 'Digitaal', 'B', 'Afspraken met provider, rate limiting, uitwijk'],
      ['D04', 'Man-in-the-middle op publieke wifi', 'Digitaal', 'V · I', 'VPN, HTTPS afdwingen, certificaatcontrole'],
      ['D05', 'Injectie via een invoerveld', 'Digitaal', 'V · I', 'Invoer valideren, veilige queries, least privilege'],
      ['D06', 'Besmette USB-stick', 'Fysiek', 'V · I', 'USB-beleid, endpointbescherming, awareness'],
      ['D07', 'Hergebruikte wachtwoorden', 'Digitaal', 'V', 'MFA, wachtwoordmanager, check op bekende lekken'],
      ['D08', 'Zero-day in gebruikte software', 'Digitaal', 'V · I · B', 'Detectie, rechten beperken, noodprocedure'],
      ['D09', 'Besmette software-update', 'Keten & leverancier', 'V · I', 'SBOM, leveranciersafspraken, monitoring na update'],
      ['D10', 'Kwetsbare open-source library', 'Keten & leverancier', 'V · I', 'Afhankelijkheden in beeld, updatebeleid, SBOM'],
      ['D11', 'Open cloudopslag', 'Proces & organisatie', 'V', 'Standaard dicht, configuratiecontrole, scans'],
      ['D12', 'Uitval van je clouddienst', 'Keten & leverancier', 'B', 'Uitwijk, exitplan, afspraken over hersteltijd'],
      ['D13', 'CEO-fraude', 'Mens & gedrag', 'I · V', 'Vier-ogenprincipe bij betalen, terugbelprocedure'],
      ['D14', 'Social engineering bij de helpdesk', 'Mens & gedrag', 'V', 'Identiteitscontrole, vast script, geen uitzonderingen'],
      ['D15', 'Shadow IT', 'Mens & gedrag', 'V · B', 'Goed alternatief bieden, meldpunt zonder straf'],
      ['D16', 'Kwaadwillende insider', 'Mens & gedrag', 'V', 'Least privilege, logging op export, offboarding'],
      ['D17', 'Menselijke fout', 'Mens & gedrag', 'V', 'Bevestiging bij extern versturen, minder data meesturen'],
      ['D18', 'Verlies of diefstal van apparatuur', 'Fysiek', 'V', 'Schijfversleuteling, vergrendeling, wissen op afstand'],
      ['D19', 'Meelopen naar binnen', 'Fysiek', 'V · I', 'Badgecultuur, bezoekersregistratie, elkaar aanspreken'],
      ['D20', 'Meekijken en meeluisteren', 'Fysiek', 'V', 'Privacyfilter, afspraken over werken in het openbaar'],
      ['D21', 'Verouderde systemen', 'Proces & organisatie', 'V · I · B', 'Patchritme, eigenaar per systeem, einde-levensduurplan'],
      ['D22', 'Rechten die meegroeien', 'Proces & organisatie', 'V', 'Periodieke rechtenreview, rol i.p.v. persoon'],
      ['D23', 'Back-up zonder hersteltest', 'Proces & organisatie', 'B', 'Herstel oefenen, offline kopie, hersteltijd afspreken'],
      ['D24', 'Geen incidentprocedure', 'Proces & organisatie', 'B · V', 'Escalatiepad, meldknop, oefening, 72-uursklok kennen']
    ]
  },

  ui: {
    nl: {
      kicker: 'Kaartset · Fundament W2·blok 2',
      titleLead: 'Dreigingen',
      titleEm: 'sorteerset',
      lede:
        'Vierentwintig dreigingen op zakformaat, plus drie blanco kaarten voor eigen inbreng. De set is bewust breed: digitaal, menselijk, fysiek, keten en organisatie door elkaar. Categorie en impact staan níét op de kaart — dat is precies wat de groep zelf moet bepalen.',
      chips: ['24 kaarten + 3 blanco', '63 × 88 mm', '9 per A4', 'week 2'],
      back: '← terug naar Fundament',
      exportBtn: 'Exporteer naar PDF',
      exportHint: 'Opent het printvenster — kies daar "Bewaren als PDF". Zet marges op "standaard" en achtergrondafbeeldingen aan.',
      optsTitle: 'Wat print je mee?',
      optBlank: 'Blanco kaarten meeprinten',
      optKey: 'Docentensleutel meeprinten',
      empty: 'Geen kaarten geselecteerd.',
      sheet: 'Vel',
      cardsTitle: 'De kaarten',
      cardsSub: 'Op ware grootte. Wat je hier ziet, komt zo uit de printer.',
      howTitle: 'Zo gebruik je de set',
      how: [
        'Ronde 1 — sorteren op soort. Elk groepje legt de kaarten op stapels: digitaal, mens & gedrag, fysiek, keten & leverancier, proces & organisatie. Twijfelgevallen apart: die leveren de beste discussie op.',
        'Ronde 2 — koppelen aan de casus. Leg elke kaart bij het asset uit het security-context canvas dat hij raakt. Kaarten die nergens passen: waarom niet? Assets zonder kaart: welke dreiging missen we?',
        'Ronde 3 — kans × impact. Leg de kaarten op de risicomatrix (sluit aan op W2·5). De top-5 die bovendrijft, gaat mee naar het risicoprofiel in W2·9.',
        'Blanco kaarten — elk groepje schrijft minstens één eigen dreiging uit de casus bij: scenario boven, "wat kan er misgaan" onder.',
        'Nabespreken — pas ná het sorteren de docentensleutel erbij pakken. Waar zat de groep ernaast, en wat zegt dat over hun blikveld?'
      ],
      makeTitle: 'Printen en maken',
      make: [
        'Print op stevig papier (160–250 g/m²) of karton; dubbelzijdig hoeft niet.',
        'Elk vel bevat 9 kaarten in een 3 × 3 raster; snijd langs de kaartranden.',
        'Eén set per groepje van 3–4 studenten; 27 kaarten is 3 vellen.',
        'De sleutel print je apart — één exemplaar voor de docent volstaat.'
      ],
      keyTitle: 'Docentensleutel',
      keySub: 'Categorie, geraakte BIV-aspecten en de richting van de maatregel. Niet uitdelen vóór het sorteren; er is bij een aantal kaarten meer dan één verdedigbaar antwoord — het gesprek daarover is de leeropbrengst.',
      dutchOnly: ''
    },
    en: {
      kicker: 'Card deck · Foundation W2·block 2',
      titleLead: 'Threat ',
      titleEm: 'sorting set',
      lede:
        'Twenty-four threats in pocket format, plus three blank cards for the students\' own. The set is deliberately broad: digital, human, physical, supply chain and organisational, all mixed. Category and impact are not printed on the card — working those out is the exercise.',
      chips: ['24 cards + 3 blank', '63 × 88 mm', '9 per A4', 'week 2'],
      back: '← back to Foundation',
      exportBtn: 'Export to PDF',
      exportHint: 'Opens the print dialog — choose "Save as PDF" there. Keep margins at "default" and enable background graphics.',
      optsTitle: 'What goes in the print?',
      optBlank: 'Include the blank cards',
      optKey: 'Include the teacher key',
      empty: 'No cards selected.',
      sheet: 'Sheet',
      cardsTitle: 'The cards',
      cardsSub: 'Shown at actual size. What you see is what comes out of the printer.',
      howTitle: 'How the deck is used',
      how: [
        'Round 1 — sort by kind. Each group makes piles: digital, human, physical, supply chain, organisational. Set the doubtful ones aside: they produce the best discussion.',
        'Round 2 — link to the case. Put every card next to the asset from the security context canvas it hits. Cards that fit nowhere: why not? Assets without a card: which threat are we missing?',
        'Round 3 — likelihood × impact. Lay the cards out on the risk matrix (ties into W2·5). The top five carries over into the risk profile in W2·9.',
        'Blank cards — every group writes at least one threat of their own from the case: scenario on top, "what can go wrong" below.',
        'Debrief — only bring out the teacher key after the sorting. Where was the group off, and what does that say about their field of view?'
      ],
      makeTitle: 'Printing and assembly',
      make: [
        'Print on heavy paper (160–250 gsm) or card stock; single-sided is fine.',
        'Each sheet holds 9 cards in a 3 × 3 grid; cut along the card edges.',
        'One deck per group of 3–4 students; 27 cards is 3 sheets.',
        'Print the key separately — one copy for the teacher is enough.'
      ],
      keyTitle: 'Teacher key',
      keySub: 'Category, the BIV aspects hit and the direction of the countermeasure. Do not hand out before the sorting; several cards have more than one defensible answer — the argument about it is the point.',
      dutchOnly: 'The cards themselves are in Dutch: they are printed classroom material for a Dutch-taught minor.'
    }
  }
}

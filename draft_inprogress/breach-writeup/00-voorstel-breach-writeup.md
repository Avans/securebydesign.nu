# Voorstel — Breach-writeup

> **Status:** voorstel · **Versie:** 0.1 · **Laatst bijgewerkt:** 2026-08-31 · **Eigenaar:** Stefan
> **Plek in de minor:** Fundament, week 3, lesblok 7 (incident response, crisiscommunicatie en vertrouwen)
> **Site:** `/breach-writeup` (staat bewust niet in het menu)

---

## 1. Waarom dit ding bestaat

W3·7 vraagt om "ontwerpen voor het moment waarop het misgaat": incident lifecycle, communicatiekaart,
post-mortemvragen. De valkuil van dat blok is dat het een verhaaluurtje wordt — een spannende echte
hack, klas luistert, niemand ontwerpt iets. De breach-writeup is de tegenmaatregel: een **vast format
van zeven delen** waarin het incident zo is opgeschreven dat de student er wel iets mee móét.

Drie eisen uit de praatplaat sturen het ontwerp:

- **P2 — breed, niet ICT-geframed.** De aanval zelf is in dit blok het minst interessante deel. De
  writeup zet de tijdlijn, de communicatie en het eigenaarschap centraal — daar kan een non-tech
  student net zo hard op ontwerpen als een developer. De enige technische zin in de hele casus
  ("dashboard met een standaardwachtwoord") is in één regel uit te leggen.
- **P4 — doorlopende casus.** Het incident overkomt **"Naaste"**, dezelfde wijkzorg-app als het
  Security Context Canvas van week 1. Sterker: de oorzaak is de aanname die daar onderaan het canvas
  bleef staan (*"we nemen aan dat de bouwer geen toegang heeft tot productiedata — dat weten we
  niet"*). Die cirkel sluiten is het didactische hoogtepunt van het blok.
- **P6 — praktijk = ankeren.** De writeup is fictief maar samengesteld uit patronen die in vrijwel
  elk Nederlands datalek terugkomen: productiedata in een testomgeving, een melding op info@, geen
  logging dus geen omvang, en betrokkenen die het uit de krant horen.

Centraal ontwerpprincipe:

> **De schade is het vertrouwen, en die valt in de gaten tussen de gebeurtenissen — niet in de hack.**

## 2. Het format — zeven delen

| # | Deel | Waarvoor |
|---|---|---|
| 1 | De feiten | Vijf regels, zonder duiding. Alles wat later betwist wordt, ligt hier vast. |
| 2 | De tijdlijn | Drie gemarkeerde momenten: *het begint · iemand merkt het · iemand vertelt het*. |
| 3 | De ontwerpkeuze eronder | Drie keer doorvragen, tot voorbij de menselijke fout. |
| 4 | Wat er goed ging | Verplicht. Zonder dit wordt het een aanklacht. |
| 5 | De communicatie | Letterlijke zinnen, aan wie, wanneer, en hoe het landde. |
| 6 | Herstel & post-mortem | Maatregelen **mét** de stand van zaken maanden later. |
| 7 | Wat we niet weten | De open einden. Een writeup die alles weet, is verzonnen. |

**De volgorde is het didactische punt.** Pas als de tijdlijn er ligt mag je iets vinden van de
oorzaak, en pas ná "wat ging er goed" mag je oordelen over de communicatie. Dat is het verschil
tussen een post-mortem en een schuldvraag — en precies de houding die studenten in blok 8
(Backdoors & Breaches) en in hun project nodig hebben.

**Twee vormregels.** Geen namen van personen, alleen rollen — de vraag is welke rol niet bestónd.
En elke bewering krijgt een tijdstip: *"ze meldden te laat"* is een mening, *"de melding ging 17
dagen na de eerste e-mail de deur uit"* is een feit waar een ontwerpgesprek op past.

**Deel 6 is het minst gebruikelijke en het meest waardevolle.** Publieke post-mortems eindigen bij
de maatregelenlijst. Door er de stand van zaken vier maanden later bij te zetten (2× gedaan, 2× half,
2× niet) wordt zichtbaar dat *een maatregel die nooit af komt óók een besluit is* — de brug naar de
governancekaart van blok 9.

## 3. De casus in het kort

Een ontwikkelaar van het externe bureau trekt een kopie van de productiedatabase naar een
testomgeving om een sync-bug na te bootsen. De bug wordt opgelost, de kopie blijft staan — elf weken,
achter een dashboard met een standaardwachtwoord. Een scanner vindt het, een onderzoeker meldt het
op info@, de officemanager markeert die mail terecht als phishing. Twee weken later bereikt de
melding via LinkedIn de FG. De omgeving is binnen 2,5 uur offline, maar er is geen logging, dus de
omvang is niet vast te stellen. Zes dagen later staat het in de krant — en pas daarna krijgen
cliënten een mail. Verzorgenden horen het als laatste, terwijl zij die ochtend bij de mensen thuis
staan.

De drie gaten in de tijdlijn dragen het hele lesblok: **79 dagen blind · 14 dagen doof · 6 dagen
stil.**

Waarom deze en niet een echte breach: een echte casus kost het blok twintig minuten aan
context, nodigt uit tot leedvermaak over een bestaande organisatie, en sluit niet aan op het canvas
waar de student zelf aan werkt. Deze doet alles wat een echte doet, in een wereld die ze al kennen.

## 4. Werkvorm (50 min binnen het lesblok)

| Tijd | Wat |
|---|---|
| 5 | Alleen deel 1 uitdelen. Eerste oordeel op een post-it, omgekeerd neerleggen. |
| 15 | Tijdlijn terugbouwen uit geschudde gebeurteniskaartjes — de opdracht zijn de gaten, niet de volgorde. |
| 10 | Drie keer doorvragen: van fout naar ontwerpkeuze. |
| 10 | De mail van 11 februari herschrijven, max. 120 woorden, te versturen op 5 februari. |
| 10 | Vijf transfervragen op de eigen casus → gaat mee naar blok 9. |

Afsluiten met de omgekeerde post-its van minuut 5. De vraag is niet of het eerste oordeel fout was,
maar wat er onder lag: bijna altijd een persoon, terwijl het antwoord een ontbrekende rol is.

Het herschrijven van de mail is de scherpste werkvorm van het blok. Klassikaal stemmen op één vraag:
*welke zou jíj willen krijgen over je moeder?*

## 5. Materiaal

- Site: `/breach-writeup` · content in `app/content/breach-writeup.nl.ts` / `.en.ts`
- De pagina is printbaar: de knop bovenin het document zet alleen de writeup zelf op papier
  (site-chrome, format-uitleg en werkvorm vallen weg) — dat is het uitdeelvel.
- Nog te maken: de **geschudde gebeurteniskaartjes** voor werkvorm-onderdeel 2 (16 kaartjes,
  A7, uit deel 2 van de writeup) — logisch moment om ze net als de andere kaartsets te genereren.

## 6. Open keuzes

1. **Wanneer begon de 72-uursklok?** Bij ontvangst op info@ (22 jan) of bij kennisname door de
   directie (5 feb)? De casus laat het bewust open, omdat het de beste discussie van het blok is.
   Vraag: willen we in de docenthandleiding een "juist" antwoord opnemen, of blijft het open?
2. **Eén casus of drie.** Nu één gezamenlijke writeup, zodat de klassikale vergelijking scherp is.
   Alternatief: drie varianten (zorg / retail / gemeente) zodat teams elkaars analyse moeten lezen.
   Kost tijd, levert een jigsaw-werkvorm op.
3. **Zwaarte.** Het incident raakt bijzondere persoonsgegevens van 1.412 mensen. Zwaar genoeg om
   ertoe te doen, licht genoeg om niet over doden te gaan. Blijft dat de juiste plek op die schaal?
4. **Koppeling met blok 8.** Backdoors & Breaches speelt hetzelfde soort incident na onder tijdsdruk.
   Verwijzen we in het spel expliciet terug naar deze tijdlijn, of houden we ze los?
5. **Studenten hun eigen writeup laten schrijven?** In week 4 of in het project zou het format ook
   een oplevervorm kunnen zijn: schrijf de writeup van het incident dat jouw casus gaat overkomen.
   Dat is een sterke toetsvorm, maar hij past niet meer in week 3.

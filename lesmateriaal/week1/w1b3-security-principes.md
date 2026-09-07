---
marp: true
theme: default
paginate: true
lang: nl
title: "W1 · blok 3 — Security-principes"
description: "Least privilege, defense in depth, secure by default en zes andere ontwerpregels"
---

# Security-principes

## Negen regels die ouder zijn dan het internet

**Week 1 · blok 3** — Mindset & cultuur
90 minuten

<!--
⏱ 0–2. Blok 1 ging over wat veiligheid is, blok 2 over hoe groot het speelveld is. Vandaag
krijgen ze gereedschap — en dit is het blok waarvan ze de rest van de minor het meest merken.

De negen principekaartjes van vandaag liggen in blok 6 en blok 9 weer op tafel, en ze komen in
week 2 en 3 terug. Zeg dat vooraf: wat je vandaag maakt, gebruik je zes keer.
-->

---

## Terugblik van 3 minuten

Zonder te kijken op je kaart:

- Wat betekent de **I** in BIV, en wanneer weegt die het zwaarst?
- Noem één ding uit blok 2 dat misging **zonder aanvaller**.
- Wat had jij gezien op weg naar huis: een ontwerp waarbij de veilige manier ook de makkelijkste was?

<!--
⏱ 2–8. Retrieval, geen herhaling. Laat ze het eerst 60 seconden aan hun buurman vertellen en
haal daarna vier antwoorden op. Dit kost je zes minuten en levert meer op dan tien minuten
samenvatten.

De derde vraag is de opdracht van gisteren en tegelijk je opening: verzamel drie voorbeelden op
het bord en laat ze staan. Je hebt ze straks nodig bij P07.
-->

---

## Na dit blok kun je

1. de negen principes van week 1 **bij naam** noemen en in één zin uitleggen;
2. bij een ontwerpkeuze aanwijzen **welk principe** er speelt;
3. uitleggen wat cryptografie wél en **niet** oplost;
4. het verschil uitleggen tussen **authenticatie**, **autorisatie** en **onweerlegbaarheid**;
5. een principe vertalen naar een **concrete keuze** in de casus — niet naar een losse principenaam.

<!--
⏱ 8–10. Doel 5 is de lat. Op het canvas (vak 9) is "least privilege" geen antwoord;
"een mantelzorger ziet alleen zijn eigen naaste" is dat wel.

Doel 3 vertellen ze thuis door. Het is de meest hardnekkige misvatting in security: dat
versleutelen "het" oplost.
-->

---

## Vandaag

| Tijd | Wat |
|---|---|
| 0–8 | **Terugblik** — drie vragen |
| 8–33 | **Verhaal** — negen principes, en wat crypto niet oplost |
| 33–73 | **Aan het werk** — duo's, dan groepjes van 4 |
| 73–85 | **Terug & verdieping** — principes botsen |
| 85–90 | **Afsluiting** |

<!--
⏱ 10–11.
-->

---

## Deel 1 · Verhaal

### Negen regels

<!--
⏱ 11. Overgang.

Behandel ze in vier trosjes; los opsommen werkt niet. Neem per principe één concreet beeld en
koppel het aan iets van gisteren.
-->

---

## Tros 1 · Beperken

**P01 · Least privilege** — precies de rechten die nodig zijn, niet meer en niet voor altijd
**P05 · Klein aanvalsoppervlak** — laat weg wat je niet nodig hebt
**P09 · Dataminimalisatie** — data die je niet verzamelt, kan niet lekken

> Gaat mis als: één gestolen account meteen alles opent.

<!--
⏱ 11–17. Beeld bij P01: de sleutelbos van de schoonmaker. Die past overal, want dat is
makkelijk. Als die bos verdwijnt, moet het hele gebouw om. Vraag: waarom doet iedereen het toch
zo? (omdat het regelen van rechten per rol werk is, en werk wordt uitgesteld)

Beeld bij P05: elke extra functie is een extra deur. Vraag de zaal hoeveel functies van hun
telefoon ze echt gebruiken.

Beeld bij P09: het exportbestand op iemands bureaublad. Dit is ook het bruggetje naar de AVG in
week 3 — noem alleen dat de wet dit óók eist en ga niet uitweiden.

Verbind met gisteren: een van de flappen had vast "iemand met te veel rechten" of "oude accounts
die nog werken".
-->

---

## Tros 2 · Lagen en standen

**P02 · Defense in depth** — stapel maatregelen; faalt er één, dan houdt de volgende het tegen
**P03 · Secure by default** — de veilige stand ís de standaardstand
**P04 · Fail secure** — bij storing of twijfel: weigeren, niet doorlaten

> Gaat mis als: veiligheid afhangt van wie de handleiding leest.

<!--
⏱ 17–23. Beeld bij P02: een bank heeft niet één kluisdeur maar een deur, een camera, een tijdslot,
een limiet en een verzekering. Terug naar DigiNotar: daar was maar één laag — vertrouwen — en die
faalde volledig.

Beeld bij P03: de vraag uit blok 1, "wat is de veilige stand als we niets doen?". Vertel dat de
meeste mensen nooit een instelling aanpassen. Wat standaard aanstaat, is wat er gebeurt. Dus is
de standaardinstelling een ontwerpbeslissing, geen detail.

Beeld bij P04: een slagboom bij stroomuitval. Gaat hij open of blijft hij dicht? Er is geen goed
antwoord — bij een parkeergarage wil je open (safety), bij een serverruimte dicht (security).
Dat is precies de afweging die een ontwerper moet maken, en niet de installateur.
-->

---

## Tros 3 · Openheid en gedrag

**P06 · Geen security door geheimhouding** — het slot mag bekend zijn, de sleutel niet
**P07 · Veilig moet makkelijk zijn** — gedrag volgt de weg van de minste weerstand

> Gaat mis als: het wachtwoord op een geeltje staat.

<!--
⏱ 23–28. P06 is de OV-chipkaart uit blok 1. Voeg toe waarom openheid juist veiliger is: een
open standaard is jarenlang door duizenden mensen aangevallen. Je eigen bedachte cryptografie is
door drie mensen bekeken, van wie er twee betaald werden door jou.

P07 is het principe waar de rest van de week op leunt. Gebruik de voorbeelden die op het bord
staan van hun huiswerk. Voeg toe: als je de veilige route omslachtig maakt, ontwerp je de
work-around zelf. Het geeltje met het wachtwoord is niet de fout van de gebruiker — het is
feedback op je ontwerp.

Dit principe is de brug naar blok 4 (gedrag & cultuur), morgen.
-->

---

## Tros 4 · Waarvoor je het doet

**P08 · Bescherm B, I én V** — beschikbaarheid en integriteit tellen net zo hard als geheimhouding

> Gaat mis als: alles keurig versleuteld is, maar niemand erbij kan.

<!--
⏱ 28–30. Dit is de terugkoppeling naar blok 1 en tegelijk de opmaat naar de volgende slide.
Zeg: de meeste mensen die "security" zeggen, bedoelen alleen de V. Dat is een derde van het werk.
-->

---

## Wat cryptografie wél doet

| Wel | Niet |
|---|---|
| onleesbaar maken voor wie de sleutel niet heeft | bepalen wie de sleutel hóórt te hebben |
| aantonen dat iets onderweg niet is gewijzigd | zorgen dat wat erin ging al klopte |
| aantonen wie iets heeft ondertekend | voorkomen dat iemand onder dwang tekent |

> Versleuteling verplaatst het probleem naar het **sleutelbeheer**. Daar blijft het.

<!--
⏱ 30–35. De belangrijkste correctie van het blok. "We versleutelen het" is het antwoord dat
studenten de hele minor willen geven; ontkracht het nu, dan hoef je het later niet steeds te doen.

Concreet maken met "Naaste": de medicatiegegevens gaan versleuteld over de lijn van de apotheek
naar de app. Prima. Maar als de koppeling verouderde gegevens doorstuurt, komen ze keurig
versleuteld verkeerd aan. Crypto beschermt de weg, niet de inhoud.

En: wie heeft de sleutel? De externe bouwer waarschijnlijk ook. Dat is geen technische vraag maar
een keten- en afsprakenvraag.

Grens benoemen: cryptografie is in deze minor een gereedschap dat je moet kúnnen plaatsen, niet
iets dat je zelf implementeert. Wie de wiskunde in wil, doet dat in fase 2.
-->

---

## Drie woorden die door elkaar lopen

| Woord | Vraag | Bij "Naaste" |
|---|---|---|
| **Authenticatie** | wie ben je? | de verzorgende logt in |
| **Autorisatie** | wat mag je? | zij ziet alleen haar eigen cliënten |
| **Onweerlegbaarheid** | kun je het later ontkennen? | in het dossier staat wie de notitie schreef |

<!--
⏱ 35–39. Laat het verschil voelen met één vraag: als twee verzorgenden hetzelfde account delen,
welke van de drie is dan stuk? (alle drie, maar onweerlegbaarheid volledig — je kunt achteraf
nooit meer aantonen wie wat schreef)

Onweerlegbaarheid is het begrip dat studenten het minst kennen en dat in de zorg, de financiële
wereld en bij de overheid het zwaarst weegt. Verbind het met integriteit: een dossier waarvan je
niet weet wie erin heeft geschreven, is minder waard, ook als alles wat erin staat klopt.

Dit trio komt terug in week 4 bij access control en zero trust.
-->

---

## Deel 2 · Aan het werk

### Duo's, daarna groepjes van 4

<!--
⏱ 39. Overgang. Deel de principekaartjes uit: één set van negen per duo.

Kaartjes komen van securebydesign.nu/principekaartjes — geprint op stevig papier, 63 × 88 mm.
-->

---

## Ronde 1 · Herkennen (15 min, in duo's)

Je krijgt **negen principekaartjes** en **acht ontwerpkeuzes** uit de praktijk.

Per keuze:

1. leg het **principe** erbij dat hier speelt (soms twee)
2. schrijf op: **wat wint** deze keuze, en **wat kost** hij?
3. één keuze schendt een principe — welke, en welk?

<!--
⏱ 39–54. De acht ontwerpkeuzes (print ze op strookjes):

1. De app logt na 5 minuten inactiviteit automatisch uit.
2. Nieuwe medewerkers krijgen standaard dezelfde rechten als hun teamleider, "dat is makkelijker".
3. Het inlogscherm meldt: "dit e-mailadres is niet bekend".
4. De mantelzorger ziet alleen de zorgmomenten van zijn eigen naaste.
5. De leverancier zegt: "onze beveiliging is bedrijfsgeheim, daarom is het veilig".
6. Bij een storing in de koppeling toont de app de laatst bekende medicatie, met datum erbij.
7. Bij aanmelding wordt het BSN gevraagd, "voor als we het ooit nodig hebben".
8. Verzorgenden loggen in met een pincode van 4 cijfers in plaats van een wachtwoord.

Waar de discussie hoort te zitten:
- 1 raakt P03 (secure by default) én P07 (het kost gemak) — de ruil benoemen is het leerdoel.
- 3 is een informatielek dat niemand als lek ziet: je kunt e-mailadressen aftasten. Raakt P04.
- 5 is de schending: P06.
- 6 is de mooiste. Is dit fail secure of niet? Weigeren zou hier gevaarlijker zijn (safety).
  De datum erbij is de ontwerpoplossing. Laat dit uitgebreid uitpraten.
- 8 lijkt fout maar hangt af van context: vier cijfers op een toestel met een limiet aan
  pogingen is iets anders dan vier cijfers op een website. P07 tegen P01.

Loop rond en verbied "dit is gewoon fout". Vraag altijd: wat wint het?
-->

---

## Ronde 2 · Zelf maken (20 min, groepjes van 4)

Twee duo's schuiven bij elkaar. Maak samen **één nieuw principekaartje** dat nog niet bestaat.

Op de kaart:

- **naam** van het principe (maximaal 4 woorden)
- **de regel** in één zin
- **drie dingen** die je dan concreet doet
- **"Gaat mis als …"** — één zin

<!--
⏱ 54–73. De vorm is expres identiek aan de bestaande kaartjes; laat er één als voorbeeld liggen.

Waarom dit werkt: een principe formuleren dwingt tot abstraheren, en de "gaat mis als"-regel
dwingt tot een concreet beeld. Dat is precies de beweging die de kennistoets vraagt.

Wat er meestal uitkomt en goed is:
- "Vertrouw geen invoer" (bestaat, is P12, week 2 — prima, laat ze het zelf uitvinden)
- "Maak het zichtbaar" (P13, week 2)
- "Eén persoon mag niet alles alleen kunnen" (vierogenprincipe — bestaat echt en zit niet in de set)
- "Ontwerp voor de moeë medewerker om half zes"

Sturing als een groepje vastloopt: pak hun flap van gisteren en vraag welke regel dát had
voorkomen.

Laatste 3 minuten: kaartjes aan de muur, naam van het groepje erop.
-->

---

## Deel 3 · Terug & verdieping

<!--
⏱ 73. Overgang. Loop langs de zelfgemaakte kaartjes; lees er drie hardop voor. Complimenteer de
scherpste "gaat mis als"-zin — die zin is de vaardigheid.
-->

---

## Principes botsen. Altijd.

| Dit principe | botst met | in deze keuze |
|---|---|---|
| P01 least privilege | P07 veilig moet makkelijk zijn | steeds opnieuw rechten aanvragen |
| P04 fail secure | beschikbaarheid (**B**) | de slagboom bij stroomuitval |
| P09 dataminimalisatie | "we willen later kunnen analyseren" | logbestanden bewaren |
| P02 defense in depth | tijd en geld | elke laag kost onderhoud |

> Een principe is geen wet. Het is een argument in een gesprek waarin je iets moet kiezen.

<!--
⏱ 73–83. Dit is de verdieping en de belangrijkste boodschap van het blok.

Studenten willen dat principes regels zijn die je afvinkt. Ze zijn het niet: ze wijzen elk in
een richting, en de ontwerper kiest. Wat een goede ontwerper onderscheidt, is niet dat hij alle
principes volgt — dat kan niet — maar dat hij kan uitleggen wélke hij liet vallen en waarom.

Loop één botsing echt uit met de zaal, bij voorkeur regel 1: als een verzorgende voor elke
handeling rechten moet aanvragen, gaat ze het account van een collega gebruiken. Dan heb je
least privilege op papier en gedeelde accounts in de praktijk — het slechtste van beide.

Zeg erbij: op het canvas (vak 9) vragen we straks expliciet om de ruil te benoemen. Deze slide
is daar de voorbereiding op.
-->

---

## De negen van week 1

| | | |
|---|---|---|
| **P01** least privilege | **P02** defense in depth | **P03** secure by default |
| **P04** fail secure | **P05** klein aanvalsoppervlak | **P06** geen security door geheimhouding |
| **P07** veilig moet makkelijk zijn | **P08** bescherm B, I én V | **P09** dataminimalisatie |

→ [securebydesign.nu/principekaartjes](https://securebydesign.nu/principekaartjes)

<!--
⏱ 83–85. Laat deze staan terwijl je afsluit. Zeg dat de kaartjes op de site staan en dat ze de
set thuis kunnen printen — en dat de set in blok 6 en blok 9 weer op tafel ligt.

Nummers hoeven ze niet uit het hoofd te leren; de namen wel.
-->

---

## Deel 4 · Afsluiting

<!--
⏱ 85. Overgang.
-->

---

## Voor het volgende blok

**Individueel, ± 30 minuten:**

1. Begrippenkaart bij: `authenticatie · autorisatie · onweerlegbaarheid · sleutelbeheer` en de negen principenamen.
2. **Retrieval in duo's** (kan ook via de app op de site): de één leest de "gaat mis als"-regel voor, de ander noemt het principe. Twee rondjes.
3. Zoek **één nieuwsbericht** van de afgelopen maand over een incident. Schrijf op welk principe daar faalde. Neem het mee naar het volgende blok.

<!--
⏱ 85–90. Opdracht 3 levert je de opening van blok 4 én materiaal voor week 2 (incidentanalyse).
Vraag ze de link mee te nemen, niet het hele artikel.

Bruggetje naar morgen: vandaag zeiden we negen keer "ontwerp beter". Morgen kijken we naar het
deel dat je niet kunt ontwerpen — mensen die haast hebben, elkaar willen helpen, en op een link
klikken omdat het er echt uitzag.
-->

---

## Materiaal & bronnen

- **Principekaartjes** (9 per duo, geprint) → [securebydesign.nu/principekaartjes](https://securebydesign.nu/principekaartjes)
- 8 ontwerpkeuze-strookjes → print, één set per duo
- Blanco kaartjes voor ronde 2 (63 × 88 mm of gewoon A6)
- Praatplaat **Fundament** → [securebydesign.nu/fundament](https://securebydesign.nu/fundament)

<!--
Docentchecklist vóór dit blok:
[ ] Principekaartjes geprint en gesneden — één set van 9 per duo
[ ] Eén losse kaart als voorbeeld voor ronde 2
[ ] Ontwerpkeuze-strookjes geprint
[ ] Blanco kaartjes + stiften
[ ] Wandruimte voor de zelfgemaakte kaartjes
[ ] Bord vrij voor de huiswerkvoorbeelden bij P07
-->

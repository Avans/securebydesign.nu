---
marp: true
theme: default
paginate: true
lang: nl
title: "W1 · blok 4 — Menselijk gedrag en securitycultuur"
description: "Social engineering, waarom mensen klikken, en wat je eraan ontwerpt"
---

# Gedrag en cultuur

## Waarom mensen klikken — en wat je daaraan ontwerpt

**Week 1 · blok 4** — Mindset & cultuur
90 minuten

<!--
⏱ 0–2. Dit blok heeft een valkuil die je vanaf de eerste zin moet vermijden: het mag geen
"pas op voor phishing"-voorlichting worden. Dat is het frame waarin de gebruiker het probleem is.

De boodschap van vandaag is het omgekeerde: mensen doen precies wat het ontwerp hun makkelijk
maakt. Als klikken de weg van de minste weerstand is, wordt er geklikt. Dat is P07 van gisteren,
en vandaag werken we hem uit.
-->

---

## Opening: jullie nieuwsbericht

Je hebt een incident uit het nieuws meegenomen.

> In één zin: wat gebeurde er, en welk principe faalde?

<!--
⏱ 2–10. Haal er 6 tot 8 op. Turf op het bord in drie kolommen: "techniek faalde",
"proces faalde", "mens deed iets".

Je krijgt bijna zeker een derde kolom die vol staat. Vraag dan door bij één ervan: wat had die
persoon moeten doen, en hoeveel tijd had hij daarvoor? Meestal blijkt: 3 seconden, tussen
veertig andere mails door.

Dat is je opening. Verplaats de vraag van "waarom deed hij dat?" naar "waarom was dat de
makkelijkste handeling?"
-->

---

## Na dit blok kun je

1. de **beïnvloedingsprincipes** herkennen waar social engineering op leunt;
2. uitleggen waarom "beter opletten" geen maatregel is;
3. het verschil benoemen tussen een **technische**, een **proces-** en een **gedragsmaatregel**;
4. één gedragsmaatregel **ontwerpen** die rekening houdt met echte werkdruk;
5. uitleggen wat een organisatie moet regelen zodat mensen een vermoed incident **wél melden**.

<!--
⏱ 10–12. Doel 5 is het onderschatte doel. De gemiddelde tijd tussen "ik denk dat ik iets fout
deed" en "ik meld het" bepaalt de schade meer dan welk filter dan ook.
-->

---

## Vandaag

| Tijd | Wat |
|---|---|
| 0–10 | **Opening** — jullie nieuwsberichten |
| 10–35 | **Verhaal** — social engineering, en waarom schuld niet werkt |
| 35–72 | **Aan het werk** — duo's: waarom klikken mensen + één maatregel ontwerpen |
| 72–85 | **Terug & verdieping** — meldcultuur |
| 85–90 | **Afsluiting** |

<!--
⏱ 12–13.
-->

---

## Deel 1 · Verhaal

### Social engineering is geen truc. Het is ontwerp.

<!--
⏱ 13. Overgang.
-->

---

## Waar een aanvaller op drukt

| Hefboom | Wat het doet | In een bericht |
|---|---|---|
| **Autoriteit** | je vraagt niet door bij de baas | "namens de directeur" |
| **Urgentie** | geen tijd om na te denken | "vandaag vóór 17:00" |
| **Angst** | je wilt het probleem weg | "je account wordt geblokkeerd" |
| **Behulpzaamheid** | je wilt iemand niet laten staan | "ik ben mijn pas vergeten" |
| **Sociale bewijskracht** | anderen deden het ook | "je collega's hebben al getekend" |

<!--
⏱ 13–20. Neem per hefboom één beeld. De sterkste combinatie is autoriteit + urgentie, en die
zit in vrijwel elke echte aanval — de CEO-fraude, de nepfactuur, de "je moet nu je wachtwoord
resetten"-mail.

Belangrijke nuance die je hardop maakt: elk van deze vijf is in het dagelijks werk een deugd.
Behulpzaam zijn, snel reageren op je leidinggevende, meedoen met je team — dat is waar we mensen
op aannemen en op beoordelen. Social engineering keert precies die deugden om.

Daarom werkt "wees wantrouwender" niet als maatregel: je vraagt mensen om slechter te worden in
hun werk.

Voorbeeld dat het altijd doet: de deur openhouden voor iemand met twee volle dozen. Wie dat níét
doet, is een hufter. Het is ook exact de aanval.
-->

---

## De rekensom die niemand maakt

Een medewerker krijgt **60 mails per dag**.
Ze beoordeelt elke mail in **± 3 seconden**.
Ze moet er **99,9%** goed doen.

Een aanvaller hoeft **één keer** te winnen.

> Een strategie die van mensen perfectie eist, is geen strategie.

<!--
⏱ 20–24. Dit is de kernslide van het blok. Laat hem even staan.

Reken het desnoods hardop door: 60 mails × 220 werkdagen = 13.200 beoordelingen per jaar. Bij
99,9% goed zit je op 13 fouten per jaar. Per medewerker. In een organisatie van 60 mensen, zoals
bij "Naaste", zijn dat bijna 800 momenten per jaar waarop iemand op iets klikt wat hij niet had
moeten aanklikken.

Conclusie die je trekt: de vraag is niet hoe je die 800 naar nul brengt. De vraag is hoe je zorgt
dat één klik geen ramp is. Dat is defense in depth (P02) toegepast op gedrag — en het is de reden
dat we in week 2 "ga uit van een geslaagde aanval" behandelen.
-->

---

## Drie soorten maatregelen

| Soort | Voorbeeld bij phishing | Kracht | Zwakte |
|---|---|---|---|
| **Techniek** | filter, MFA, waarschuwing bij externe afzender | werkt altijd, ook om half zes | vangt nooit alles |
| **Proces** | betalingen boven X altijd door twee mensen | werkt ook als iemand trapt | kost tijd, wordt omzeild bij haast |
| **Gedrag** | training, oefenmails, meldknop | het enige dat werkt bij het onverwachte | slijt, en werkt alleen in een veilige cultuur |

> Je hebt alle drie nodig. Wie er één kiest, kiest de goedkoopste.

<!--
⏱ 24–30. Dit rijtje is de kapstok voor de werkopdracht straks; laat het op het bord staan.

Werk het proces-voorbeeld uit: het vierogenprincipe bij betalingen is de maatregel die CEO-fraude
daadwerkelijk stopt, en hij is volledig niet-technisch. Dat is een fijn moment voor de non-tech
kant van de zaal — dit is ontwerp, en er komt geen code aan te pas.

Bij gedrag: benoem dat oefenphishing berucht is. Slecht uitgevoerd (naming and shaming,
"je bent gezakt") verslechtert de meldcultuur meer dan het de klikratio verbetert. Dit komt
straks terug bij de verdieping.
-->

---

## Waarom "beter opletten" geen maatregel is

Het is:

- niet **meetbaar** — wanneer let je genoeg op?
- niet **overdraagbaar** — het staat in niemands takenpakket
- niet **houdbaar** — het werkt niet op een drukke vrijdagmiddag
- een manier om de **schuld te verplaatsen** naar wie de keuze niet maakte

> "Meer voorlichting" is wat je doet als je het ontwerp niet wilt veranderen.

<!--
⏱ 30–35. Deze zin komt uit het lesplan van blok 8 en is een van de scherpste van de minor.
Herhaal hem letterlijk.

Nuance om erbij te zeggen, anders wordt het te makkelijk: voorlichting is niet waardeloos.
Het is alleen geen maatregel op zichzelf — het is de laag die de andere twee ondersteunt.
Iemand moet weten wáár de meldknop zit.

Zeg erbij dat je dit straks streng nakijkt in de opdracht: wie "meer bewustwording" opschrijft,
krijgt de vraag terug.
-->

---

## Deel 2 · Aan het werk

### In duo's — twee opdrachten

<!--
⏱ 35. Overgang. Duo's, gemengd tech/non-tech waar het kan. Deel de casusbeschrijving uit
(zes situaties, één per duo of twee duo's per situatie).
-->

---

## Opdracht A · Waarom klikte deze persoon? (15 min)

Je krijgt één **korte situatie**. Reconstrueer hem eerlijk:

1. Wat zag deze persoon **precies** op dat moment?
2. Hoeveel **tijd** had hij, en wat deed hij vlak ervoor?
3. Welke **hefboom** werd gebruikt? (autoriteit · urgentie · angst · behulpzaamheid · sociale bewijskracht)
4. Wat had hij **moeten doen** — en hoeveel moeite kostte dat?

> Verboden woorden bij vraag 4: *dom*, *had beter moeten opletten*.

<!--
⏱ 35–50. De zes situaties (print ze, één per strookje):

1. Een verzorgende krijgt om 07:40 een WhatsApp van "de teamleider": of ze even inlogt op een
   nieuwe roosterlink, want de dienst van vandaag is gewijzigd.
2. De administratie krijgt een factuur van de vaste leverancier met een gewijzigd
   rekeningnummer en een vriendelijke mail erbij.
3. Een student krijgt een mail van de "helpdesk" dat zijn account verloopt, twee dagen voor de
   deadline van zijn verslag.
4. Iemand houdt de deur van het kantoor open voor een man met een gereedschapskist die zegt
   dat hij voor de airco komt.
5. Een mantelzorger belt de teamleider: "mijn moeder is opgenomen, ik moet echt bij haar
   gegevens kunnen, kan dat vandaag geregeld worden?"
6. Een medewerker installeert een gratis PDF-tool omdat de goedgekeurde tool het bestand niet
   opent en de vergadering over tien minuten begint.

Vraag 2 is de belangrijkste. Dwing ze een concreet moment te verzinnen: waar stond deze persoon,
wat deed hij ervoor? Zodra dat er staat, verdwijnt het oordeel vanzelf.

Situatie 5 is de mooiste: daar is de aanvaller misschien helemaal geen aanvaller. Dat maakt het
onbeslisbaar, en dat is precies het punt.

Loop rond en tel bij vraag 4 hoeveel moeite het juiste gedrag kostte. Als het antwoord "bellen
met de teamleider die in de zorg zit en niet opneemt" is, dan is het ontwerp stuk, niet de mens.
-->

---

## Opdracht B · Ontwerp één maatregel (20 min)

Voor jouw situatie: ontwerp **één** maatregel die had gewerkt.

Op je vel:

- **soort**: techniek · proces · gedrag
- **wat er precies verandert** — één zin, concreet genoeg om morgen in te voeren
- **wie het uitvoert** en wie het merkt
- **wat het kost**: tijd, geld of gemak — benoem de ruil
- **wat er nog steeds mis kan gaan**

<!--
⏱ 50–72. 22 minuten. Dit is het echte werk van het blok.

De vijf regels zijn niet onderhandelbaar; vooral de laatste twee. Een maatregel zonder ruil is
niet doordacht, en een maatregel waarna niets meer mis kan gaan bestaat niet — dat is defense in
depth andersom.

Wat je terugstuurt:
- "meer bewustwording", "een training", "beter communiceren" → vraag: wélke handeling verandert
  er morgen, bij wie?
- "MFA invoeren" bij situatie 1 → prima, maar dan de ruil: een verzorgende met natte handen om
  07:40 in de auto. Werkt jouw tweede factor daar?
- Maatregelen die alleen werken als iedereen altijd oplet → terug naar de rekensom.

Sterke antwoorden die je hoopt te zien:
- situatie 2: rekeningnummerwijziging alleen na terugbelcheck op het bij ons bekende nummer
  (proces, kost 5 minuten, stopt de hele aanvalsklasse)
- situatie 5: één vaste route voor het toekennen van mantelzorgertoegang, nooit telefonisch,
  met een vaste doorlooptijd die je kunt beloven — dan hoeft niemand een uitzondering te maken
- situatie 6: een snelle route om een tool te laten goedkeuren, in plaats van een verbod

Laatste 3 minuten: elk duo kiest de zin die het straks voorleest, plus de ruil.
-->

---

## Deel 3 · Terug & verdieping

<!--
⏱ 72. Overgang. Elk duo: één zin maatregel + de ruil. Jij sorteert ze op het bord onder
techniek / proces / gedrag.
-->

---

## Wat de verdeling laat zien

Kijk naar de drie kolommen op het bord.

- Welke kolom is het voolst?
- Welke maatregel is het **goedkoopst** in te voeren?
- Welke maatregel werkt ook als iedereen **moe** is?

<!--
⏱ 72–78. Meestal is de proceskolom het dunst en tegelijk de sterkste — dat is een mooie
constatering om de zaal zelf te laten doen.

Vraag daarna: welke van deze maatregelen maakt de veilige weg ook de makkelijkste weg (P07)?
Dat is de gouden categorie. Voorbeeld: een meldknop in de mailclient is één klik, terwijl "bel
de helpdesk" tien minuten kost. Dezelfde maatregel, factor honderd verschil in gebruik.
-->

---

## Verdieping · De meldcultuur

Wat er gebeurt tussen de klik en de melding bepaalt de schade.

Wat mensen tegenhoudt: **schaamte · straf · "misschien is het niets" · niet weten waar**

Wat een organisatie regelt:

1. één **plek**, bekend bij iedereen, 24/7
2. de expliciete regel: **melden is nooit fout**, ook bij loos alarm
3. wie meldt, hoort **wat ermee gebeurde**
4. de eerste reactie gaat over het **incident**, niet over de persoon

<!--
⏱ 78–85. De verdieping van het blok. Vertel het als tijdlijn: bij DigiNotar (blok 1) zat er
weken tussen "we weten het" en "we melden het", en die weken waren de ramp — niet de hack.

Punt 3 wordt bijna altijd vergeten en is de goedkoopste: wie meldt en nooit iets terughoort,
meldt de volgende keer niet meer.

Punt 4 is de cultuurregel. Verbind hem met de spelregel uit blok 8: we lachen niet om wat iemand
is overkomen. Een organisatie waarin de eerste vraag "wie heeft dit gedaan?" is, hoort de
volgende keer niets meer.

Sluit af met de omkering van het hele blok: de vraag is niet of jouw mensen erin trappen. Dat
doen ze. De vraag is hoe snel je het hoort.
-->

---

## Deel 4 · Afsluiting

<!--
⏱ 85. Overgang.
-->

---

## Voor het volgende blok

**Individueel, ± 30 minuten:**

1. Begrippenkaart bij: `social engineering · hefboom · technische/proces-/gedragsmaatregel · meldcultuur`
2. Schrijf je maatregel van vandaag netjes uit (max. 10 regels) — hij hoort bij je portfolio.
3. Kijk in de casus **"Naaste"**: noteer **drie partijen of personen** die iets te maken hebben met die app. Wat wil elk van hen?

<!--
⏱ 85–90. Opdracht 3 is de directe voorbereiding op blok 5 (stakeholders) en zorgt dat de teams
daar niet vanaf nul beginnen.

Bruggetje: vandaag ging het over de mens die de knop indrukt. Morgen gaat het over alle mensen
eromheen — wie er belang bij heeft, wie beslist, en wie de rekening krijgt. En dat zijn zelden
dezelfde.

Kondig ook aan: morgen vormen we de vaste casusteams voor de rest van de week.
-->

---

## Materiaal & bronnen

- 6 situatiestrookjes → print, één per duo
- Werkvel opdracht B (A4, vijf kopjes) → print of Brightspace
- Bord in drie kolommen: techniek · proces · gedrag
- Praatplaat **Fundament** → [securebydesign.nu/fundament](https://securebydesign.nu/fundament)

<!--
Docentchecklist vóór dit blok:
[ ] 6 situatiestrookjes geprint
[ ] Werkvel opdracht B klaar
[ ] Bord vrij, drie kolommen vooraf getekend
[ ] Groepsindeling voor blok 5 (vaste casusteams van 3–4) alvast gemaakt
[ ] Let op: dit blok maakt geen eigen printmateriaal — alles hergebruikt
-->

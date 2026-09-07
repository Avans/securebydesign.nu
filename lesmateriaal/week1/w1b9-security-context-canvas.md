---
marp: true
theme: default
paginate: true
lang: nl
title: "W1 · blok 9 — Security Context Canvas"
description: "Integratieblok: heel week 1 komt samen op één A3"
---

# Security Context Canvas

## Alles van deze week op één vel

**Week 1 · blok 9** — integratieblok
90 minuten

<!--
⏱ 0–1. LET OP: dit deck wijkt af van het standaardritme. Het "verhaal" is hier 15 minuten
terugblik en spelregels; de werkmoot is 50 minuten. Dat is de bedoeling van een integratieblok.

Het volledige lesplan staat in draft_inprogress/security-context-canvas/01-lesplan-w1b9.md,
de invulhulp met docentvoorbeeld in 02-invulhulp-en-voorbeeld.md. Lees beide vóór de les.

Materiaal: A3-canvas per team (security-context-canvas-a3.pdf pagina 1), vraagkaartjes,
post-its, stiften, stickers voor de gallery walk. Teams zijn dezelfde als in blok 5, 6 en 7.

Zaalopstelling: eilanden, staand werken, canvas plat of aan de muur. Geen laptops. Het canvas
is een gespreksinstrument.
-->

---

## Negen vakken. Negen lessen.

| Zone | Vakken | Uit welk blok |
|---|---|---|
| **A · wat & waarom** | 1 scope · 2 waarde & belofte · 3 BIV | blok 1, 2 |
| **B · wie** | 4 stakeholders · 5 gedrag · 6 bedreigers | blok 4, 5 |
| **C · wat beschermen we** | 7 assets · 8 abuse cases · 9 principes | blok 3, 6, 8 |

> Het canvas vraagt niets wat we deze week niet hebben uitgelegd.

<!--
⏱ 1–10. Dit is de retrieval van de week. Loop de negen vakken langs en vraag per vak wie het
begrip nog kan noemen. Niet uitleggen — ophalen. Laat studenten praten.

Vragen die het werk doen:
- vak 3: wat betekent de I ook alweer, en wanneer weegt die het zwaarst?
- vak 5: wat was de "work-around" waar we het bij gedrag over hadden?
- vak 6: welke bedreiger is géén hacker van buiten?
- vak 8: waarom is "phishing" geen abuse case?
- vak 9: waarom is "least privilege" op zichzelf geen antwoord?

Als een vak stil blijft, weet je waar je straks moet rondlopen.

Toon het lege canvas op het scherm terwijl je dit doet — securebydesign.nu/canvas, weergave
"Blanco".
-->

---

## Na dit blok

- staat er per team **één ingevuld canvas** dat de hele week draagt
- kun je de rode draad volgen: **stakeholder → asset → abuse case → principe**
- weet je wat je **niet** weet: aannames en open vragen staan erop
- ligt er één **risico** klaar om mee te nemen naar week 2

<!--
⏱ Kort tonen tijdens de terugblik. Het canvas is geen toets maar het startpunt van week 2 —
zeg dat, en zeg erbij dat het in week 4 nog steeds op tafel ligt met drie lagen erop.
-->

---

## Spelregels

- **één gedachte per post-it** — alles mag verplaatst worden
- **aannames mogen**, mits je ze onderaan opschrijft
- **nog geen maatregelen.** Wie "we moeten MFA doen" zegt: post-it in het parkeervak
- de casus is **mager**. Dat is de opdracht, niet een fout

<!--
⏱ 10–15. Deel de casus-A4 uit en geef 3 minuten om stil te lezen.

De regel over maatregelen is de belangrijkste. Te vroeg oplossen is dé valkuil van dit blok:
een team dat over MFA praat, praat niet meer over wie de schade draagt. Maatregelen zijn week 2.

De magere casus verdient uitleg: in de praktijk krijg je nooit een complete beschrijving. Wat je
niet weet, benoem je als aanname. Dat is een vaardigheid, geen noodgreep.
-->

---

## Ronde 1 · Zone A + B (vak 1 t/m 6)

**A · wat & waarom** — scope · waarde & belofte · BIV
**B · wie** — stakeholders · gedrag · bedreigers

> Je hebt je **stakeholdermap uit blok 5** al. Begin daar niet mee opnieuw — leg hem ernaast.

<!--
⏱ 15–35. 20 minuten. Loop rond met de vraagkaartjes (deel A van de invulhulp).

Waar het misgaat per zone:
- vak 1: teams nemen "de app" als scope. Duw naar de rand: hoort de leverancier erbij? De
  telefoon van de verzorgende? Het papieren proces ernaast? Het beste canvas benoemt expliciet
  wat er BUITEN de scope valt, met reden.
- vak 3 is het lastigste vak. Studenten willen alle drie aanvinken. De opdracht is kiezen én
  verantwoorden. Bij zorgdata is het antwoord vaak niet wat ze denken: onjuiste medicatiegegevens
  (I) is erger dan uitgelekte gegevens (V).
- zone B: stakeholder, gebruiker en bedreiger zijn drie verschillende vakken, geen synoniemen.
  Een stakeholder die ook bedreiger is (de ontevreden medewerker) is precies het inzicht dat je
  wilt horen.
- vak 6 kort houden. Geen attackerspersona's — dat is week 2, blok 1.

Teams die over maatregelen beginnen: terugsturen naar vak 1.
-->

---

## Ruilmoment

Elk team stuurt **één persoon** naar het buurteam.

Die persoon:

- stelt **twee vragen** over hun zone A en B
- neemt **één inzicht** mee terug

<!--
⏱ 35–40. Vijf minuten, strak. Goedkope peer-review die de energie erin houdt en tunnelvisie
voorkomt.

Geef de bezoeker desnoods twee standaardvragen mee: "wat valt er bij jullie buiten de scope?"
en "welke twee belangen botsen hier?"

De terugkerende persoon krijgt 60 seconden om zijn inzicht te vertellen aan zijn eigen team.
Timeboxen, anders praat het team het ruilmoment na in plaats van door te werken.
-->

---

## Ronde 2 · Zone C (vak 7 t/m 9)

**7 · Assets** — nummeren: A1, A2, A3 … · maximaal drie ★
**8 · Abuse cases** — minstens drie

> **Als** ⟨wie⟩ ⟨wat doet⟩, **dan** ⟨welke schade⟩ **op** ⟨A#⟩.

**9 · Principes** — twee principekaartjes, met per principe **één concrete keuze**

<!--
⏱ 40–60. 20 minuten. Dit is het inhoudelijke hart van het canvas.

De teams hebben het werkvel van blok 6 — laat ze daaruit selecteren, niet opnieuw beginnen:
5 assets en 3 cases is genoeg voor het canvas.

Harde eis, niet-onderhandelbaar: elke abuse case verwijst naar een assetnummer. Zonder A-nummer
is het een dreiging, geen scenario. Dat is de kwaliteitscheck van dit vak.

Vak 9 is waar de principekaartjes van blok 3 op tafel komen. De valkuil: teams schrijven
"least privilege" op en zijn klaar. Dat is geen antwoord. Het antwoord is: *principe → dus wij
kiezen …*, met de ruil erbij. "Secure by default → de app logt uit na inactiviteit, en dat kost
de verzorgende gemak."

Gebruik hier de botsingen van het bord uit blok 8 als het team vastloopt op de ruil.
-->

---

## De onderste balk

**⚑ Aannames & open vragen**
Wat hebben we aangenomen omdat het niet in de casus stond? Aan wie zouden we het vragen?

**➜ Meenemen naar week 2**
Welk risico vinden we nú het scherpst? Eén zin, met waarom.

<!--
⏱ 60–65. Vijf minuten en vaak overgeslagen — doe dat niet, dit is de brug naar maandag.

Teams die niets kunnen bedenken bij de aannames: vraag "wat heb je aangenomen omdat het niet in
de casus stond?" Er staat altijd wel iets over de leverancier, de bewaartermijn of wie er bij
de data kan.

Het risico voor week 2 moet één zin zijn en één risico. Teams die er vier opschrijven, hebben
niet gekozen — en kiezen is de vaardigheid.
-->

---

## Gallery walk

Alle canvassen aan de muur. Je krijgt **drie stickers**:

| Sticker | Plak hem op |
|---|---|
| ★ | de **scherpste abuse case** die je tegenkomt |
| ● | het best onderbouwde **BIV-vak** |
| ? | de **vraag** die jij zelf ook had |

<!--
⏱ 65–80. Vijftien minuten. Stickers dwingen lezen — dat is het hele punt.

Geen presentaties. Die waren blok 7. Als iemand toch wil vertellen: bij zijn eigen canvas, aan
wie er langsloopt.

Loop zelf ook rond en kijk waar de stickers zich ophopen. Dat is je materiaal voor de laatste
tien minuten.

Zeg vooraf dat ze niet bij hun eigen canvas mogen plakken.
-->

---

## De rode draad

- Waar leken alle teams op elkaar?
- Waar week één team af — en had het gelijk?
- Welke **open vraag** kwam bij meerdere teams terug?

> Deze open vragen zijn maandag de opening van week 2.

<!--
⏱ 80–88. Maak de gedeelde patronen zichtbaar. Wat je meestal ziet:
- bijna alle teams zetten toegang van de mantelzorger (A3-achtig) hoog. Terecht: dat is het
  punt waar een menselijke beslissing alle andere assets opent.
- BIV-volgordes verschillen, en dat is goed. Vraag het team met de afwijkende volgorde om zijn
  onderbouwing voor te lezen.
- de aannames gaan bijna allemaal over de leverancier. Dat is de opmaat naar week 3 (keten).

Sluit af met de brug naar week 2: jullie hebben nu de context. Volgende week draaien we hem om
en kijken we vanuit de aanvaller — motieven, toegang, impact. Jullie canvas blijft staan; er
komt een laag op.

Benoem de portfolio-inlevering: canvas fotograferen, in de teammap, plus de individuele
begrippenkaart.
-->

---

## Afsluiting

1. **Fotografeer** je canvas — scherp, recht, in de gedeelde teammap
2. **Canvas bewaren** — het gaat mee naar week 2, 3 en 4
3. **Individueel inleveren:** je begrippenkaart van week 1
4. **Meenemen naar maandag:** jullie ene risico

<!--
⏱ 88–90. Doe punt 1 klassikaal en wacht tot je ziet dat het gebeurt. Een canvas dat alleen aan
de muur heeft gehangen, is maandag weg.

De canvassen zelf: oprollen per team, met teamnaam, en jij bewaart ze. Of teams nemen ze mee —
maar dan met de expliciete waarschuwing dat ze week 2 nodig zijn.
-->

---

## Het canvas groeit door

| Week | Artefact | Wat er bij komt |
|---|---|---|
| **1** | Security Context Canvas | context, assets, abuse cases |
| 2 | Risicoprofiel-laag | kans × impact, eerste maatregelen |
| 3 | Governance-laag | wetgeving, normen, rollen, keten |
| 4 | Secure-by-design dossier | requirements, architectuur, lifecycle |

> Wat vandaag **A1** heet, blijft de rest van de minor **A1**.

<!--
⏱ Laatste slide, laat hem staan terwijl de zaal opruimt.

Dit is het antwoord op de vraag "waarom doen we dit?" die deze week vast een paar keer is
gesteld. Het canvas is geen oefening, het is de ruggengraat van de hele minor.
-->

---

## Materiaal & bronnen

- **A3-canvas** (blanco) → [`security-context-canvas-a3.pdf`](../../public/materiaal/security-context-canvas-a3.pdf), pagina 1
- **Vraagkaartjes** (deel A) en docentvoorbeeld (deel B) → [`02-invulhulp-en-voorbeeld.md`](../../draft_inprogress/security-context-canvas/02-invulhulp-en-voorbeeld.md)
- Lesplan met alle docentregels → [`01-lesplan-w1b9.md`](../../draft_inprogress/security-context-canvas/01-lesplan-w1b9.md)
- Canvaspagina → [securebydesign.nu/canvas](https://securebydesign.nu/canvas)
- **Principekaartjes** → [securebydesign.nu/principekaartjes](https://securebydesign.nu/principekaartjes)

<!--
Docentchecklist vóór dit blok:
[ ] A3-canvassen geprint, één per team (+ 2 reserve)
[ ] Vraagkaartjes geprint en gesneden, één set per team
[ ] Casus-A4 geprint, één per student
[ ] Post-its (twee kleuren), stiften, plakband voor aan de muur
[ ] Stickers voor de gallery walk: 3 per student, drie soorten
[ ] Principekaartjes op tafel — teams hebben ze nodig voor vak 9
[ ] Werkvellen en stakeholdermappen van blok 5 en 6 teruggegeven aan de teams
[ ] Docentvoorbeeld (deel B) achter de hand — NIET uitdelen vóór de gallery walk
[ ] Wandruimte voor alle canvassen
[ ] Lege canvas op het scherm bij de terugblik
-->

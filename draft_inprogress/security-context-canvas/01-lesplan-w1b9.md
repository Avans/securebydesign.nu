# Lesplan — W1 · lesblok 9 · Integratieblok: Security Context Canvas

> **Status:** voorstel · **Versie:** 0.2 · **Laatst bijgewerkt:** 2026-08-31 · **Eigenaar:** Stefan
> **Duur:** 90 minuten (2 lesuren) — vastgesteld. 60-minutenvariant staat onderaan (§7) als terugval.
> **Doel van dit lesblok, uit de praatplaat:** "De inhoud van week 1 komt samen in één gezamenlijke casus."

---

## 1. Leerdoelen

Na dit lesblok kan de student:

1. de **context** van een casus afbakenen: wat hoort erbij, wat niet, en welke waarde er op het spel staat;
2. **BIV/CIA** toepassen door te beargumenteren welke van de drie voor déze casus het zwaarst weegt;
3. **stakeholders, gebruikersgedrag en mogelijke bedreigers** benoemen en van elkaar onderscheiden;
4. **assets** benoemen en er minstens drie **abuse cases** aan koppelen;
5. minstens twee **ontwerpprincipes** uit lesblok 3 vertalen naar een concrete keuze voor deze casus;
6. benoemen wat het team nog **niet** weet — en waarom dat relevant is.

Doelen 1–5 zijn ophaal-en-toepassen van lesblok 1 t/m 6. Doel 6 is nieuw en is het gedrag dat we willen kweken.

---

## 2. Voorbereiding

**Materiaal per team (3–4 studenten):**
- 1× A1-canvas (geprint, blanco)
- post-its in 3 kleuren — geel (feiten), roze (zorgen/risico's), groen (keuzes/maatregelen)
- 2 dikke stiften
- de eigen aantekeningen/artefacten uit lesblok 1–6 (begrippenkaart, principekaartjes, stakeholdermap, asset-canvas)

**Klassikaal:**
- casusbeschrijving op 1 A4 (de doorlopende casus, zie voorstel §7.3)
- 9 vraagkaartjes A6 met de hulpvragen per vak — zie [`02-invulhulp-en-voorbeeld.md`](02-invulhulp-en-voorbeeld.md)
- muurruimte of 9 flipoverstandaards voor de gallery walk
- 3 stickers per student voor de gallery walk

**Teams:** 3–4 studenten, bewust gemengd tech/non-tech.

**Zaalopstelling:** eilanden, staand werken. Het canvas ligt plat of hangt; niemand zit met een laptop. Dat is geen detail — het canvas is een gespreksinstrument.

---

## 3. Tijdlijn (90 min)

| Tijd | Wat | Werkvorm | Waar let je op |
|---|---|---|---|
| **0–10** | **Terugblik week 1 — de negen vakken** | Docent toont het lege canvas en loopt de vakken langs: "elk vak is een les van deze week". Vraagt per vak wie het begrip nog kan noemen. | Dit ís de retrieval. Niet uitleggen, ophalen. Laat studenten de begrippen zeggen. |
| **10–15** | **Casus & spelregels** | Casus-A4 uitdelen, 3 minuten stil lezen. Regels: post-it per gedachte, alles mag verplaatst, aannames zijn toegestaan mits opgeschreven. | Kort houden. De casus is bewust mager — dat is de opdracht, niet een fout. |
| **15–35** | **Ronde 1 — zone A + B (vak 1–6)** | Teams vullen kolom A en B. Docent loopt rond met de vraagkaartjes. | Teams die meteen over maatregelen praten: terugsturen naar vak 1. Te vroeg oplossen is de klassieke valkuil. |
| **35–40** | **Ruilmoment** | Elk team stuurt één persoon naar het buurteam. Die stelt twee vragen over hun kolom A/B en neemt één inzicht mee terug. | Goedkope peer-review, houdt de energie erin en voorkomt tunnelvisie. |
| **40–60** | **Ronde 2 — zone C (vak 7–9)** | Assets nummeren (A1, A2 …), abuse cases schrijven in "Als … dan …", principes koppelen. | **Harde eis:** elke abuse case verwijst naar een assetnummer. Dat is de kwaliteitscheck. |
| **60–65** | **Onderste balk** | Aannames/open vragen + "meenemen naar week 2": één risico dat het team het scherpst vindt, met één zin waarom. | Teams die niets kunnen bedenken: vraag "wat heb je aangenomen omdat het niet in de casus stond?" |
| **65–80** | **Gallery walk** | Alle canvassen aan de muur. Iedereen loopt rond met 3 stickers: plak op de scherpste abuse case, het best onderbouwde BIV-vak, en de vraag die je zelf ook had. | Stickers dwingen lezen. Geen presentaties — die waren lesblok 7. |
| **80–90** | **Rode draad + afsluiting** | Docent maakt de gedeelde patronen zichtbaar: waar leken alle teams op elkaar, waar week één team af? Benoemt de brug naar week 2. Foto's maken, canvassen bewaren. | Sluit af met de open vragen van de teams — die worden maandag de opening. Benoem hier ook de portfolio-inlevering. |

---

## 4. Docentnotities per zone

**Zone A — wat & waarom.** Hier gaat het mis als teams meteen "de app" als scope nemen. Duw ze naar de rand: hoort de leverancier erbij? De laptop van de medewerker thuis? Het papieren proces ernaast? De beste canvassen benoemen expliciet wat er *buiten* de scope valt, met reden.

**Vak 3 (BIV) is het lastigste vak.** Studenten willen alle drie aanvinken. De opdracht is kiezen én verantwoorden: "welke schade is bij deze casus het ergst — dat iemand meekijkt, dat de gegevens niet kloppen, of dat het even niet werkt?" Bij zorgdata is het antwoord vaak niet wat ze denken: onjuiste medicatiegegevens (integriteit) is erger dan uitgelekte gegevens.

**Zone B — het onderscheid stakeholder / gebruiker / bedreiger.** Drie verschillende vakken, geen synoniemen. Een stakeholder kan een bedreiger zijn (ontevreden medewerker); dat is precies het inzicht dat je wilt horen.

**Vak 6 — bedreigers.** Kort houden, geen attackerspersona's; dat is W2·1. Hier volstaat "wie zou hier iets aan hebben, en wat?" — de opmaat.

**Zone C — abuse cases.** Het format "**Als** <wie> <wat doet>, **dan** <welke schade> **op** <assetnummer>" is niet-onderhandelbaar. Zonder format krijg je "phishing" op een post-it en dat is een dreiging, geen scenario.

**Vak 9 — principes.** Terug naar de principekaartjes van lesblok 3. Eis: minstens twee principes, elk met één concrete keuze erachter. "Least privilege" alleen is niet genoeg; "least privilege → een mantelzorger ziet alleen zijn eigen cliënt" wel.

---

## 5. Tech / non-tech samen (P5)

Het canvas is bewust techniek-vrij: geen enkel vak vereist voorkennis. Twee ingrepen om het te laten werken:

- **Gemengde teams, expliciet benoemd.** Niet stiekem indelen — zeg hardop dat verschillende blikken de bedoeling zijn.
- **Rolrotatie per ronde.** Ronde 1 schrijft de non-tech student, ronde 2 de tech student. Zo kaapt niemand de stift.
- Loopt een team toch de techniek in ("we moeten TLS gebruiken"): dat is een maatregel, en die hoort in week 2. Post-it opzij leggen in een parkeervak. Niet weggooien — het is goed denkwerk, alleen te vroeg.

---

## 6. Differentiatie

- **Team is te snel klaar:** "welk vak zou er anders uitzien als deze organisatie tien keer zo groot was?" Of: laat ze één abuse case uitwerken tot een tijdlijn.
- **Team komt niet op gang:** geef de vraagkaartjes fysiek in handen en laat ze vak 7 (assets) éérst doen. Concreet beginnen werkt beter dan abstract.
- **Individuele student, gemist lesblok:** A3-versie + invulhulp + het teamcanvas als voorbeeld; kan zelfstandig in ~45 minuten.

---

## 7. 60-minutenvariant

Als een lesblok korter is: schrap het ruilmoment, kort de gallery walk in tot 8 minuten (alleen stickers, geen rondloopgesprek) en geef zone A/B en C elk 15 minuten. Levert een ruwer canvas op — dat is acceptabel, teams werken het bij aan het begin van week 2.

| 0–8 | terugblik | 8–12 | casus | 12–27 | zone A+B | 27–42 | zone C | 42–47 | onderste balk | 47–55 | gallery walk | 55–60 | rode draad |

---

## 8. Wat er nog gemaakt moet worden

- [x] A3-canvas, blanco en ingevuld → `canvas-a3.html` + de twee PDF's
- [ ] A1-print (zelfde bron, opschalen naar A1 liggend)
- [ ] 9 vraagkaartjes A6 (staan als tekst klaar in `02-invulhulp-en-voorbeeld.md`)
- [ ] Casus-A4 van de doorlopende casus — **blokkeert dit lesplan**, zie voorstel §9.1
- [ ] `.docx`-invulversie voor de portfolio-inlevering
- [ ] Kickoff-slide met het lege canvas erop, voor de terugblik van 0–10

---

## 9. Inleveren

Het canvas gaat het portfolio in — zie voorstel §8. Praktisch voor dit lesblok:

- aan het eind van het lesblok maakt elk team een **foto van de werkposter** (procesbewijs);
- binnen een week erna leveren ze het canvas **uitgewerkt als A3** in het portfolio in, als **v1.0**;
- in week 2, 3 en 4 komen nieuwe versies erbíj, niet eroverheen.

Benoem dit in de afsluiting van 80–90, niet aan het begin. Wie in minuut één hoort dat het ingeleverd wordt, gaat netjes schrijven in plaats van hardop denken — en dat is precies niet wat dit lesblok moet opleveren.

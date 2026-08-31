# Voorstel — Security Context Canvas

> **Status:** voorstel · **Versie:** 0.2 · **Laatst bijgewerkt:** 2026-08-31 · **Eigenaar:** Stefan
> **Plek in de minor:** Fundament, week 1, lesblok 9 (integratieblok) · kernartefact, loopt door t/m W4·9

---

## 1. Waarom dit ding bestaat

Uit de praatplaat komen drie eisen die het ontwerp volledig sturen:

- **P4 — doorlopende casus.** "Het security-context canvas uit week 1 groeit week na week door tot het secure-by-design dossier in week 4. Eén casus verbindt alles." Het canvas is dus geen weekopdracht maar de **ruggengraat van vier weken**.
- **P2 — breed, niet ICT-geframed.** Er mag geen veld in zitten dat een non-tech student buitensluit. Geen netwerkdiagram, geen tech stack.
- **P6 — praktijk = ankeren.** Het canvas dient het *onthouden* vóór de kennistoets. Elk vak is dus tegelijk een **ophaalmoment** van een begrip uit week 1.

Daaruit volgt het centrale ontwerpprincipe:

> **Elk vak op het canvas is de oogst van precies één lesblok uit week 1.**

Lesblok 9 is dan geen nieuwe stof maar een *synthese*: negen keer "wat hebben we maandag t/m donderdag geleerd, en wat betekent dat voor ónze casus". Dat is didactisch sterk (retrieval + transfer in één werkvorm) en organisatorisch veilig — teams kunnen niet vastlopen op stof die ze nog niet hebben gehad.

---

## 2. De opbouw — 9 vakken, 3 zones

Drie kolommen die één vraag beantwoorden: **wat is dit → wie zijn erbij betrokken → wat beschermen we en hoe.**

```
┌─ SECURITY CONTEXT CANVAS ─────────────── casus: ………… · team: ……… · v1.0 · datum: ………  ┐
│                                                                                       │
│  A · WAT & WAAROM            B · WIE                    C · WAT BESCHERMEN WE         │
│  ┌─────────────────────┐    ┌─────────────────────┐    ┌─────────────────────┐        │
│  │ 1  Casus & scope    │    │ 4  Stakeholders     │    │ 7  Assets &         │        │
│  │    wat is het,      │    │    & belangen       │    │    kroonjuwelen     │        │
│  │    wat hoort er     │    │    wie heeft belang,│    │    wat moet echt    │        │
│  │    NIET bij?        │    │    wie beslist?     │    │    beschermd?       │        │
│  │         ← lesblok 2 │    │         ← lesblok 5 │    │         ← lesblok 6 │        │
│  ├─────────────────────┤    ├─────────────────────┤    ├─────────────────────┤        │
│  │ 2  Waarde &         │    │ 5  Gebruikers &     │    │ 8  Abuse cases      │        │
│  │    belofte          │    │    gedrag           │    │    3× "als … dan …" │        │
│  │    wat verwachten   │    │    waar snijden     │    │    hoe gaat iemand  │        │
│  │    mensen van ons?  │    │    mensen de bocht  │    │    dit misbruiken?  │        │
│  │         ← lesblok 1 │    │    af?  ← lesblok 4 │    │         ← lesblok 6 │        │
│  ├─────────────────────┤    ├─────────────────────┤    ├─────────────────────┤        │
│  │ 3  BIV-profiel      │    │ 6  Wie wil dit      │    │ 9  Ontwerpprincipes │        │
│  │    B / I / V —      │    │    misbruiken?      │    │    welke principes  │        │
│  │    welke weegt hier │    │    eerste bedreigers│    │    gelden hier, en  │        │
│  │    het zwaarst, en  │    │    + motief         │    │    wat kiezen we    │        │
│  │ waarom? ← lesblok 1 │    │         ← lesblok 8 │    │    dus? ← lesblok 3 │        │
│  └─────────────────────┘    └─────────────────────┘    └─────────────────────┘        │
│                                                                                       │
│  ┌───────────────────────────────────┬───────────────────────────────────────┐        │
│  │ ⚑ Aannames & open vragen          │ ➜ Meenemen naar week 2                │        │
│  │   wat weten we nog niet?          │   ons scherpste risico + waarom       │        │
│  └───────────────────────────────────┴───────────────────────────────────────┘        │
│                                                                                       │
│  doorgroei:  ● wk1 context  ○ wk2 risico  ○ wk3 governance  ○ wk4 ontwerp → dossier   │
└───────────────────────────────────────────────────────────────────────────────────────┘
```

**Waarom deze negen en niet andere.** De 1-op-1-koppeling met de lesblokken is de check: elk lesblok uit week 1 landt ergens, en er staat niets op het canvas dat nergens is uitgelegd. Lesblok 7 (weekopbrengst/presentatie) heeft bewust geen eigen vak — dat lesblok *is* de generale repetitie voor dit canvas.

**De onderste balk is het scharnier.** "Aannames & open vragen" maakt van het canvas een levend document in plaats van een ingeleverd werkstuk: onzekerheid mag zichtbaar zijn, dat is het echte beroepsgedrag. "Meenemen naar week 2" is de expliciete overdracht naar het risicoprofiel van W2·9.

**De doorgroeibalk onderaan** laat studenten vanaf minuut één zien dat dit vel drie keer terugkomt. Dat is precies wat P4 belooft.

---

## 3. Hoe het doorgroeit (wk1 → wk4)

Niet één canvas dat steeds voller wordt — dat wordt onleesbaar. Wél **één ruggengraat met opklikbare lagen**: elke week een eigen vel in hetzelfde format en dezelfde kleurcodering, die naast het vorige aan de muur hangt.

| Week | Vel | Wat het toevoegt | Lesblok |
|---|---|---|---|
| 1 | **Security Context Canvas** | context, stakeholders, assets, abuse cases, principes | W1·9 |
| 2 | Risicoprofiel-laag | dreigingen → kans × impact → top-5 → eerste maatregelen | W2·9 |
| 3 | Governance-laag | wetgeving, normen, rollen (RACI-light), supply chain | W3·9 |
| 4 | **Secure-by-design dossier** | requirements, architectuurkeuzes, lifecycle, test & respons — de vier vellen samengebonden | W4·9 |

De koppeling zit in de **assetnummers**: assets krijgen in week 1 een nummer (A1, A2 …) en dat nummer is in week 2, 3 en 4 de verwijzing. Zo hoeft niemand het canvas over te tikken en is de traceability-matrix van W4·5 gratis.

---

## 4. In welke vormen we het maken

| Vorm | Voor wie | Waarom |
|---|---|---|
| **A1-poster, print, per team** | het lesblok zelf | Staand aan een tafel met stiften en post-its. Dit is de primaire vorm — het canvas is een gespreksinstrument, niet een formulier. |
| **A3-versie** | individueel meedenken / thuis | Zelfde indeling, kleiner. Ook de vorm voor de kennistoets-oefencasus. |
| **`.docx`-invulversie** | teams die digitaal willen, en de inlevering | Zelfde negen kopjes, met de hulpvragen als grijze placeholdertekst. Word i.p.v. PDF-formulier zodat teams kunnen uitbreiden. |
| **`.xlsx` assetregister** | vanaf week 2 | Eén tabblad `assets` met A-nummers, waarde, BIV-weging. Dit is wat in W2·5 de risicomatrix voedt en in W4·5 de traceability-matrix wordt. |
| **HTML/print-CSS** (later) | docent + website | Bron voor de PDF's, en op termijn een interactieve versie op securebydesign.nu in dezelfde huisstijl als de praatplaten. |

**Visuele taal:** dezelfde weekkleuren als de praatplaat (`--w1` t/m `--w4`), zodat het canvas herkenbaar bij week 1 hoort en de latere lagen bij hun eigen week. Iconen minimaal; de vraag in het vak doet het werk.

---

## 5. De kwaliteitslat (formatief)

Het canvas wordt **niet becijferd** — de toets is de kennistoets. Maar er moet wel een lat zijn, anders wordt het een post-it-feest. Vier criteria, elk in drie niveaus, bedoeld voor de gallery walk en de docentfeedback:

| Criterium | Nog niet | Op weg | Sterk |
|---|---|---|---|
| **Scherpte** | scope is "een app" | scope benoemt wat er wél en niet bij hoort | scope sluit expliciet dingen uit, met reden |
| **Onderbouwing** | BIV-keuze is een streepje | BIV-keuze heeft een zin erbij | BIV-keuze is herleidbaar naar een concrete schade |
| **Breedte (P2)** | alleen techniek, of alleen gedrag | beide geraakt | mens, proces, product én organisatie hangen aantoonbaar samen |
| **Bruikbaarheid** | abuse cases zijn dreigingen ("phishing") | abuse cases zijn scenario's | abuse cases raken een asset uit vak 7 en zijn plausibel voor déze casus |

Dat laatste is de belangrijkste: **een abuse case die geen asset raakt, is geen abuse case.** Dat is de check die het canvas intern samenhangend houdt.

---

## 6. Wat dit oplevert voor de docent

- Eén blik op negen posters aan de muur = de dekkingscontrole van week 1. Leeg vak 4 bij vijf teams? Dan is lesblok 5 niet geland.
- De "open vragen"-strook is de agenda voor week 2 — je opent maandag met de vragen die de teams zélf stelden.
- Het canvas is het enige artefact dat je nodig hebt om week 2 te starten; teams die lesblok 9 misten, kunnen inhalen met het A3 + de invulhulp.

---

## 7. Beslist

- **Duur lesblok: 90 minuten** (2 lesuren). Het lesplan is daarop gebouwd; de 60-minutenvariant blijft staan als terugvaloptie bij een ingekort lesblok.
- **Teamgrootte: 3–4 studenten**, bewust gemengd tech/non-tech. Bij 5 wordt het canvas een kijkspel voor twee mensen.
- **Inleveren: ja, in het portfolio.** Zie §8 voor wat dat betekent voor het format.

## 8. Inleveren in het portfolio

Het canvas gaat het portfolio in. Dat verandert twee dingen aan het ontwerp:

- **De A3-versie is de inlevervorm.** De A1-poster blijft het werkinstrument in de les, maar wat het portfolio in gaat is een A3 — leesbaar op scherm, printbaar, en past naast de latere lagen uit week 2–4. Een foto van de poster is niet genoeg: die is niet doorzoekbaar en niet te herzien.
- **Het canvas krijgt een versieregel.** Team, casus, versie en datum staan in de kop. Teams leveren aan het eind van week 1 **v1.0** in; als ze het in week 2–4 bijwerken, komt er een nieuwe versie bij in plaats van een overschrijving. Zo laat het portfolio de *groei* zien, en dat is precies wat P4 belooft.

**Wat er wordt ingeleverd, per team:**

| Wat | Wanneer | Vorm |
|---|---|---|
| Ingevuld canvas v1.0 | eind week 1 | A3 PDF (of de `.docx`-invulversie geëxporteerd) |
| Foto van de werkposter | eind lesblok 9 | los beeld, als procesbewijs |
| Bijgewerkte versies | eind week 2, 3, 4 | naast v1.0, niet eroverheen |

**Beoordeling.** Het canvas telt mee als portfoliobewijs, niet als apart cijfer — de kwaliteitslat in §5 is de feedbacktaal. Bij een portfoliogesprek is de vraag niet "is het canvas mooi", maar "wat is er tussen v1.0 en v4.0 veranderd, en waarom?"

## 9. Wat nog beslist moet worden

1. **De doorlopende casus.** Staat in de make-lijst als "doorlopende venture / fictief bedrijf", nog niet gekozen. Drie opties, met voorkeur:
   - **(voorkeur) één gezamenlijke casus voor de hele klas.** Vergelijken in de gallery walk wordt scherp, de docent kent de casus door en door, en de kennistoets kan erop leunen. Werkuitwerking in [`02-invulhulp-en-voorbeeld.md`](02-invulhulp-en-voorbeeld.md): *Wijkzorg-app "Naaste"* — zorgdata, fysieke apparaten, mantelzorgers, leveranciers: breed genoeg voor tech én non-tech.
   - één casus per team uit een setje van vier. Meer eigenaarschap, minder vergelijkbaarheid, viervoudig voorbereidingswerk.
   - teams kiezen zelf. Klinkt motiverend, maar in week 1 kunnen ze nog niet inschatten of hun casus vier weken meegaat. Afgeraden.
2. **Naamgeving.** "Security Context Canvas" is Engels in een Nederlandstalige minor. Alternatief "Contextcanvas Security". Voorstel: laten staan — de term komt terug in vakliteratuur en de praatplaat gebruikt hem al.
3. **Engelse versie.** De site is tweetalig (`app/pages/en/`). Het canvas hoeft dat in week 1 nog niet te zijn, maar als het op de site komt wel. Later oppakken.

---

## 10. Voorbeeld-PDF

Er ligt een uitgewerkte A3-versie naast dit document:

- [`canvas-a3.pdf`](canvas-a3.pdf) — **A3 liggend, 2 pagina's**: pagina 1 blanco (print deze voor de les en voor de portfolio-inlevering), pagina 2 ingevuld met de casus "Naaste" als docentreferentie
- [`canvas-a3.html`](canvas-a3.html) — de bron. Aanpassen en opnieuw naar PDF met:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --no-pdf-header-footer --print-to-pdf=canvas-a3.pdf file://<pad>/canvas-a3.html`

Kleuren en typografie volgen de huisstijl van de praatplaten (`app/assets/css/main.css`), met week 1-oker als accent en de weekkleuren in de doorgroeibalk onderaan. De blanco versie heeft lichte schrijflijnen in elk vak.

**Let op:** de PDF is gerenderd met systeemfonts, niet met Fraunces/Hanken Grotesk/JetBrains Mono. Voor de definitieve druk moeten die fonts lokaal geïnstalleerd of ingebed worden — dan komt het beeld exact overeen met de site.

**Opschalen naar A1** voor de werkposter: in `canvas-a3.html` `@page { size: A3 landscape }` → `A1 landscape` en `.sheet{width:420mm;height:297mm}` → `841mm`/`594mm`. Alle maten zijn in mm, dus de rest schaalt niet mee — de tekst wordt relatief kleiner en de schrijfruimte groter. Dat is precies wat je op een poster wilt.

# Voorstel — Asset- & abuse-case canvas

> **Status:** in review · **Versie:** 0.2 · **Laatst bijgewerkt:** 2026-08-31 · **Eigenaar:** Stefan
> **Plek in de minor:** Fundament, week 1, lesblok 6 ("Assets en misbruikscenario's") · werkvel, voedt vak 7 en 8 van het [Security Context Canvas](../security-context-canvas/00-voorstel-security-context-canvas.md)

---

## 1. De ontwerpvraag die eerst beantwoord moet worden

Assets en abuse cases staan **twee keer** in week 1: als lesblok 6 (de stof) en als vak 7–8 van
het contextcanvas in lesblok 9 (de oogst). Zonder keuze wordt dit dubbel werk — teams vullen
donderdag iets in en tikken het vrijdag over.

De keuze:

> **Dit is geen tweede canvas. Het is het werkvel waar lesblok 6 op gebeurt, en de output ervan
> verhuist ongewijzigd naar vak 7 en 8 van het contextcanvas.**

Het contextcanvas heeft per onderwerp één vak van 9 × 6 cm — genoeg om een uitkomst te tonen,
veel te weinig om acht assets te wegen en negen scenario's te schrijven. Dit vel is de
werkruimte vóór dat vak: breed uitwaaieren, dan indikken tot wat er op het canvas past.
Lesblok 9 blijft daardoor wat het moet zijn — synthese, geen productiewerk.

Wat daaruit volgt voor het ontwerp: **A-nummers worden hier geboren.** Op dit vel krijgt elke
asset zijn nummer (A1, A2 …), en dat nummer is de rest van de minor de verwijzing — in de
risicomatrix van W2·5, de dependency map van W3·5, de traceability-matrix van W4·5. Dit vel is
dus het nulpunt van de traceability van de hele minor.

Overwogen en verworpen: alles pas in lesblok 9 doen (te veel voor 90 minuten, en dan is
lesblok 6 een luisterblok) — en er een tweede in te leveren canvas van maken (dan concurreert
het met het kernartefact, in strijd met P4: *één* ruggengraat).

---

## 2. Wat het moet doen — drie eisen

- **P2 — breed, niet ICT-geframed.** Een assetlijst is de plek waar een vel het snelst
  ICT-vel wordt: data, servers, accounts, klaar. Het vel moet actief afdwingen dat mensen,
  processen, reputatie en continuïteit meetellen.
- **P6 — praktijk = ankeren.** Assetwaarde bepalen is in de praktijk het ophalen van **BIV uit
  lesblok 1**. Dat begrip wordt hier niet uitgelegd maar gebruikt — dat is de retrieval.
- **De hardste vakinhoudelijke fout voorkomen:** "phishing" op een post-it. Een dreiging is
  geen abuse case. Het formaat op het vel is daarom niet-onderhandelbaar.

---

## 3. De opbouw — twee helften, één brug

```
┌ ASSET- & ABUSE-CASE WERKVEL ──── casus: ……… · team: ……… · W1·6 · datum: ………  ┐
│                                                                              │
│  ① ASSETREGISTER                          ② ABUSE CASES                      │
│  ┌──────────────────────────────────┐    ┌───────────────────────────────┐   │
│  │ soorten — vink af wat je hebt:   │    │  Als ⟨wie⟩ ⟨wat doet⟩,        │   │
│  │ ☐ data  ☐ proces  ☐ systeem &    │    │  dan ⟨welke schade⟩           │   │
│  │ apparaat  ☐ mens & rol           │    │  op ⟨A#⟩.                     │   │
│  │ ☐ relatie & reputatie            │    │  merkbaar aan: …………           │   │
│  │ ☐ geld & continuïteit            │    ├───────────────────────────────┤   │
│  ├────┬─────────────┬──────┬────────┤    │ 👤 vanuit de gebruiker         │   │
│  │ A# │ wat is het  │soort │ van wie│    │  ┌────────┐ ┌────────┐        │   │
│  ├────┼─────────────┼──────┼────────┤    │  └────────┘ └────────┘        │   │
│  │ A1 │             │      │        │    ├───────────────────────────────┤   │
│  │ A2 │             │      │        │    │ 🎭 vanuit de aanvaller         │   │
│  │ …  │             │      │        │    │  ┌────────┐ ┌────────┐        │   │
│  │ A8 │             │      │        │    │  └────────┘ └────────┘        │   │
│  ├────┴─────────────┴──────┴────────┤    ├───────────────────────────────┤   │
│  │ wat gaat er stuk als dit …       │    │ 🔧 vanuit beheerder /          │   │
│  │  wegvalt / uitlekt / verandert?  │    │    leverancier                │   │
│  │  → één schadezin per asset       │    │  ┌────────┐ ┌────────┐        │   │
│  │  → weegt B, I of V hier zwaarst? │    │  └────────┘ └────────┘        │   │
│  │  → ★ max 3 kroonjuwelen          │    └───────────────────────────────┘   │
│  └──────────────────────────────────┘                                        │
│                                                                              │
│  ┌ dekkingsstrook ───────────────────────────────────────────────────────┐   │
│  │  A1 ☐  A2 ☐  A3 ☐  A4 ☐  A5 ☐  A6 ☐  A7 ☐  A8 ☐   ← kruis aan welke   │   │
│  │  assets door een abuse case geraakt worden. Elk ★ moet aangekruist.   │   │
│  └───────────────────────────────────────────────────────────────────────┘   │
│  ⚑ niet kunnen bepalen: ………      ➜ naar canvas vak 7 & 8: 5 assets + 3 cases │
└──────────────────────────────────────────────────────────────────────────────┘
```

### De drie regels die het vel bewaken

**1 · De breedteregel (P2).** Zes assetsoorten bovenaan, met vinkvakjes. **Minimaal vier van de
zes bezet** voordat een team verder mag. Dat is de goedkoopste manier om een technische
tunnelvisie te breken: niet zeggen "denk ook aan mensen", maar een leeg vakje laten staan dat
er nog niet af mag. De soorten zijn bewust ook niet-technisch benoembaar — *relatie &
reputatie* en *geld & continuïteit* zijn de twee waar de bedrijfskundige student als eerste
iets ziet dat de developer mist.

**2 · De schadezin (P6, retrieval BIV).** Geen waarde in euro's of in 1–5 — daar liegt iedereen
over en het is week 1. In plaats daarvan één zin per asset: *"Als dit wegvalt / uitlekt /
verandert, dan …"*. Die drie werkwoorden **zijn** B, I en V, zonder dat het vel dat voorzegt;
de laatste kolom vraagt welke van de drie hier het zwaarst weegt. Zo wordt lesblok 1 opgehaald
in plaats van herhaald, en vak 3 van het contextcanvas (BIV-profiel) is daarmee half af.

**3 · De dekkingsregel (de interne check).** Twee kanten op:
- elke abuse case eindigt op een **A-nummer** — anders is het een dreiging, geen scenario;
- elk **kroonjuweel ★** wordt door minstens één abuse case geraakt — anders bescherm je iets
  waarvan je niet weet hoe het misgaat.

De dekkingsstrook onderaan maakt dat in tien seconden zichtbaar, voor het team én voor de
docent die langsloopt. Dit is dezelfde check als de kwaliteitslat van het contextcanvas
(§5 daar), maar hier al op het werkvel — een blok eerder, waar hij nog te repareren is.

**Het regeltje "merkbaar aan:"** onder elke abuse case is klein maar doet veel werk: het
dwingt een scenario dat plausibel genoeg is om detecteerbaar te zijn, en het is de haak naar
monitoring en logging (S5) in week 2. Eén regel, verder niets.

---

## 4. De assetkaartjes-variant (aanbevolen)

Naast het vel: **blanco assetkaartjes**, 63 × 88 mm, 9 per A4 — hetzelfde formaat en dezelfde
print-infrastructuur als de principekaartjes en de dreigingskaarten. Eén asset per kaartje:
A-nummer, wat het is, soort, schadezin, BIV-weging, ★.

Waarom dit meer is dan een gimmick:

- **Sorteren is denken.** Kaartjes kun je op tafel groeperen, op stapels leggen en tegen
  elkaar afwegen. In een tabelrij kan dat niet, en juist het wegen ("is dít een kroonjuweel of
  dát?") is de leeropbrengst van lesblok 6.
- **Ze verhuizen fysiek mee.** In W2·5 gaan diezelfde kaartjes op de risicomatrix (kans ×
  impact), in W3·5 op de dependency map. Het A-nummer reist mee op papier in plaats van te
  worden overgetikt. Dat is P4 die je kunt vasthouden.
- **Ze maken de klas vergelijkbaar.** Bij één gezamenlijke casus (de voorkeur uit het
  contextcanvas-voorstel, §9) is een gallery walk over kaartjes veel scherper: welk team heeft
  A-de-mantelzorger wél als asset?

Het vel houdt dan uitsparingen voor de kaartjes in plaats van tabelrijen. Beide vormen worden
gemaakt; het vel-met-tabel blijft de terugvaloptie als er niet geprint kan worden.

---

## 5. In welke vormen we het maken

| Vorm | Voor wie | Waarom |
|---|---|---|
| **A3-werkvel, per team** | het lesblok zelf | Primaire vorm. Ligt op tafel, wordt volgeschreven, gaat niet het portfolio in. |
| **Assetkaartjes blanco, A4 met 9 stuks** | idem | Zie §4. Zelfde snijmaat als de bestaande kaartsets. |
| **A1-versie** | klassikale demo / één gezamenlijke casus | Alleen als de docent voordoet met de klas. |
| **`.xlsx` assetregister** | vanaf week 2 | Kolommen exact gelijk aan het vel: `A# · wat · soort · van wie · schadezin · BIV · ★`. Wat hier op papier staat, is daar een rij. Dit is het bestand dat W2·5 en W4·5 voedt. |
| **HTML/print-CSS** | bron voor de PDF's | Zelfde stramien als `canvas-a3.html`, week 1-oker. |

Op de site komt dit **niet** als eigen pagina — het hoort bij `/canvas` als downloadbaar
werkvel onder het kernartefact. Eén canvaspagina, niet twee.

**Inleveren: nee.** Dit is kladwerk in de goede zin. Wat het portfolio in gaat is het
contextcanvas v1.0; hooguit gaat er een foto van de tafel mee als procesbewijs.

---

## 6. De kwaliteitslat (formatief, drie criteria)

| Criterium | Nog niet | Op weg | Sterk |
|---|---|---|---|
| **Breedte** | alleen data en systemen | vier soorten bezet | mens, proces én reputatie leveren elk een asset op waar het team echt in gelooft |
| **Schade** | "belangrijk" | een schadezin per asset | de schadezin noemt wie het merkt en wanneer |
| **Scenario** | dreigingswoorden ("phishing", "hack") | "Als … dan …" ingevuld | scenario raakt een A-nummer, is plausibel voor déze casus, en heeft een merkbaar-aan-regel |
| **Dekking** | losse cases | elke case wijst naar een asset | elk kroonjuweel is geraakt, en het team kan uitleggen welk kroonjuweel het minst goed gedekt is |

Dat laatste vakje is de sterkste vraag van het hele vel: **welk kroonjuweel snappen we het
slechtst?** Dat is de vraag die week 2 opent.

---

## 7. Wat dit oplevert voor de docent

- Vier vinkvakjes leeg bij de halve klas = lesblok 6 is te technisch gebracht, direct
  bijstuurbaar in hetzelfde blok.
- De dekkingsstrook is een dekkingscontrole zonder nakijken: één blik langs de tafels.
- De ⚑-regel ("niet kunnen bepalen") levert de aannames aan die in lesblok 9 in het
  contextcanvas terechtkomen — teams hoeven daar niet opnieuw te bedenken wat ze niet weten.
- Vanuit de bingo van lesblok 8 komen de verhalen; hiervandaan komen de A-nummers. In lesblok 9
  komen die twee bij elkaar in vak 8. Dat is de reden dat lesblok 9 kan bestaan uit synthese.

---

## 8. Beslist

1. **Acht assetregels op het vel** — met assetkaartjes als uitloop. Twaalf lege regels nodigt uit
   tot lijstjes maken; acht dwingt tot kiezen. Wie meer wil, pakt kaartjes.
2. **De drie perspectieven zijn verplicht:** één case per baan (gebruiker / aanvaller /
   beheerder-leverancier), precies zoals de praatplaat lesblok 6 beschrijft. Zonder de banen
   schrijven teams drie keer de aanvaller van buiten. Het vel heeft twee kaartplekken per baan,
   dus zes cases is het streven en drie het minimum.
3. **Tijd: 90 minuten**, waarvan ±45 min werken aan het vel en 15 min uitwisselen. Uitgewerkt in
   [`01-lesplan-w1b6.md`](01-lesplan-w1b6.md), met een 60-minutenvariant als terugval.
4. **Eigen soortnamen blijven staan** — *relatie & reputatie* en *geld & continuïteit* zijn geen
   normtaal, en dat is precies de bedoeling in week 1. De normindeling komt in week 3 aan bod,
   als er een taal voor is.
5. **Assetkaartjes worden gemaakt** (§4), naast het vel-met-tabel als terugvaloptie.
6. **Engelse versie:** later, samen met de site.

Nog open, maar niet blokkerend: de **doorlopende casus** zelf. Het materiaal is uitgewerkt op
*Wijkzorg-app "Naaste"*, de voorkeursoptie uit het contextcanvas-voorstel (§9.1). Valt die keuze
anders uit, dan is alleen pagina 2 van elk bestand opnieuw te vullen — de blanco vellen zijn
casus-onafhankelijk.

---

## 9. Wat er nu ligt

| Bestand | Wat |
|---|---|
| [`werkvel-a3.pdf`](werkvel-a3.pdf) | **A3 liggend, 2 pagina's**: p1 blanco (print dit voor de les), p2 ingevuld op de casus "Naaste" als docentreferentie |
| [`werkvel-a3.html`](werkvel-a3.html) | de bron van het werkvel |
| [`assetkaartjes-a4.pdf`](assetkaartjes-a4.pdf) | **A4 staand, 2 pagina's**: p1 negen blanco kaartjes (63 × 88 mm), p2 de drie kroonjuwelen van "Naaste" als voorbeeld + zes blanco |
| [`assetkaartjes-a4.html`](assetkaartjes-a4.html) | de bron van de kaartjes |
| [`01-lesplan-w1b6.md`](01-lesplan-w1b6.md) | het lesblok eromheen, 90 min + 60-minutenvariant |

**Opnieuw naar PDF** na een wijziging:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless \
  --no-pdf-header-footer --print-to-pdf=werkvel-a3.pdf file://<pad>/werkvel-a3.html
```

Kleuren en typografie volgen de huisstijl van de praatplaten (`app/assets/css/main.css`), met
week 1-oker als accent en week 2-rood voor alles wat over misbruik gaat — abuse-case-kaarten,
dekkingsstrook, de harde regels. Dat kleurverschil is functioneel: oker is "wat hebben we",
rood is "wat kan er misgaan".

Drie dingen om te weten bij het drukken:

- De PDF is gerenderd met **systeemfonts**, niet met Fraunces / Hanken Grotesk / JetBrains Mono.
  Voor de definitieve druk moeten die lokaal geïnstalleerd of ingebed worden.
- **Opschalen naar A1** (als je het vel als tafelposter wilt): in `werkvel-a3.html`
  `@page { size: A3 landscape }` → `A1 landscape` en `.sheet{width:420mm;height:297mm}` →
  `841mm`/`594mm`. De rest is in mm en schaalt niet mee — precies goed: de tekst wordt relatief
  kleiner en de schrijfruimte groter.
- De kaartjes hebben **geen snijtekens**, net als de bestaande kaartsets: snij op de kaderlijn.

---

## 10. Volgende stap

1. Proefdruk van beide vellen op echt papier — vooral: is de schrijfruimte in het assetregister
   genoeg voor een schadezin in handschrift?
2. `.xlsx` assetregister met dezelfde kolommen, klaarzetten voor W2·5.
3. De casuskeuze bevestigen; daarna pagina 2 van beide bestanden definitief maken.
4. Bij vaststelling: `mk`-vlag en materiaallink in `app/content/fundament.nl.ts` bij W1·blok 6,
   en de PDF's onder `/canvas` als download bij het kernartefact.

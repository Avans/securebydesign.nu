# Voorstel — STRIDE-light Canvas

> **Status:** voorstel · **Versie:** 0.1 · **Laatst bijgewerkt:** 2026-08-31 · **Eigenaar:** Stefan
> **Plek in de minor:** Fundament, week 4, lesblok 4 (threat modelling als gezamenlijke ontwerptaal)
> **Site:** `/stride-light` (staat bewust niet in het menu)

---

## 1. Waarom dit ding bestaat

W4·4 vraagt om threat modelling "als gezamenlijke ontwerptaal, op whiteboard/canvas in plaats van
een technische tool". Drie eisen uit de praatplaat sturen het ontwerp:

- **P2 — breed, niet ICT-geframed.** STRIDE is in zijn originele vorm een ontwikkelaarsmodel:
  *spoofing, tampering, repudiation …* sluit een non-tech student in één regel buiten. Daarom staat
  op het canvas de **vraag in gewone taal** groot, en de Engelse term er klein onder als vakterm die
  je meeneemt naar de literatuur.
- **P4 — doorlopende casus.** Het canvas erft de **assetnummers** (A1, A2 …) uit het Security
  Context Canvas van week 1 en levert de requirementnummers af waar blok 5 mee verder werkt. Geen
  nieuw systeem beschrijven, geen overtikwerk.
- **P6 — praktijk = ankeren.** De zes vragen zijn een ophaalmoment van week 2 (dreigingen) en week 3
  (governance, keten) op het eigen ontwerp uit blok 3.

Centraal ontwerpprincipe:

> **Zes vragen aan hetzelfde plaatje — en een leeg vak mét reden is ook een antwoord.**

Dat laatste is de belangrijkste rem op de klassieke STRIDE-valkuil: teams die alle zes de vakjes
volschrijven omdat ze vol moeten, en daarmee de scherpte verliezen.

## 2. De opbouw — drie banden

```
┌─ STRIDE-LIGHT CANVAS ─────────────── casus: ………… · team: ……… · v1.0 · datum: ………  ┐
│  1 Het systeem in blokjes (≤6, met pijlen)     │ 2 Vertrouwensgrenzen & assets    │
│      ← blok 3 (architectuurschets)             │      ← week 1 (A1, A2 …)         │
├────────────────────────────────────────────────┴──────────────────────────────────┤
│  S zich voordoen als   │ T ongemerkt wijzigen  │ R achteraf ontkennen             │
│  I meekijken           │ D eruit liggen        │ E meer rechten krijgen           │
│      per dreiging: wie · wat · welk assetnummer · ★ = gaat naar de top-3          │
├───────────────────────────────────────────────┬───────────────────────────────────┤
│  ★ Van dreiging naar ontwerpkeuze — top 3     │ ⚑ Leeg gelaten, aangenomen,       │
│    dreiging | maatregel | REQ-nr | detectie   │   meegenomen                      │
│                          → blok 5             │                                   │
└───────────────────────────────────────────────┴───────────────────────────────────┘
```

**Waarom de bovenste band verplicht is.** Zonder plaatje wordt STRIDE een woordenlijst. Zes blokjes
en een paar pijlen is genoeg — mensen, plekken waar gegevens staan, partijen buiten de organisatie.
De vertrouwensgrenzen zijn de brug naar de assetnummers: een dreiging zonder assetnummer is een
mening.

**Waarom de onderste band vier kolommen heeft.** *Dreiging → maatregel → requirement → hoe merken we
het.* Die laatste kolom dwingt het detectiedenken uit week 2 af (S5) en maakt de traceability-matrix
van blok 5 grotendeels invulwerk: de REQ-nummers bestaan dan al.

**R en D dragen het niet-technische gesprek.** "Kunnen we achteraf zien wie wat deed?" en "wat doen
mensen als dit een dag niet werkt?" gaan over proces en gedrag. Ze zijn bewust als tweede rij
gepositioneerd, zodat een team er niet doorheen raast.

## 3. Werkvorm (50 min binnen het lesblok)

| Tijd | Wat |
|---|---|
| 5 | Systeem in blokjes overnemen uit blok 3; vertrouwensgrenzen erin |
| 20 | Zes vragen langs, ronde per ronde — timeboxed, hardop, één schrijver |
| 10 | ★-ronde: top-3 kiezen, mét argument waarom de rest wacht |
| 10 | Maatregel + requirement + detectie invullen |
| 5 | Wat lieten we leeg, en waarom? |

Debrief klassikaal op één vraag: *welk vak leverde de dreiging op die je niet had verzonnen zonder
het canvas?*

## 4. Materiaal

- `canvas-a3.html` — bron (A3 liggend, 2 pagina's: blanco + docentvoorbeeld)
- `canvas-a3.pdf` — printversie
- Voorbeeld staat op de casus **wijkzorg-app "Naaste"**, dezelfde als het week 1-canvas
- Site: `/stride-light` · content in `app/content/stride-light.nl.ts` / `.en.ts`

## 5. Open keuzes

1. **Assetnummers of assetnamen?** Nummers zijn compact en koppelen strak, maar vragen dat het
   week 1-canvas fysiek naast dit vel ligt. Alternatief: naam + nummer.
2. **REQ-nummering.** Doorlopend per team over de hele minor, of per canvas opnieuw beginnen?
   Blok 5 heeft hier een antwoord op nodig.
3. **Zes vragen of vijf?** Overweging om R en D samen te nemen als "wat gebeurt er ná de fout";
   voorlopig gescheiden gehouden, omdat ze verschillende maatregelen opleveren.
4. Past dit ook als **light-versie in week 2** (blok 8, attack-tree challenge), of blijft het
   exclusief week 4?

# draft_inprogress

Werkmap voor alles wat we **aan het ontwikkelen** zijn: lesmateriaal, canvases, kaartsets,
casussen, rubrics. Niet de website-code — dat staat in `app/`.

Wat hier binnenkomt gaat er in principe ook weer uit: zodra iets af is, verhuist het naar
zijn definitieve plek (praatplaat-content in `app/content/`, printmateriaal naar de
gedeelde drive, of het wordt een eigen pagina op de site).

## Wat er in mag

| Type | Waarvoor |
|---|---|
| `.md` | Denkwerk, voorstellen, lesplannen, scripts — alles wat tekst is. Default. |
| `.docx` | Zodra iets een invulformulier of uitdeelvel wordt voor studenten/collega's. |
| `.xlsx` | Registers en matrices: rubrics, dekkingsmatrix, materiaalplanning. |
| `.html` / `.pdf` | Printklare canvases en posters (A3/A1). |
| `assets/` | Beeld, iconen, foto's van whiteboards. |

## Indeling

Eén submap per te ontwikkelen artefact:

```
draft_inprogress/
  <artefact-naam>/
    00-voorstel-….md      ontwerp + onderbouwing + open keuzes
    01-lesplan-….md       het lesblok eromheen
    02-….md               invulhulp, uitgewerkt voorbeeld, kaartjes
    assets/
```

## Statusconventie

Bovenaan elk bestand een statusregel:

`> **Status:** voorstel · **Versie:** 0.1 · **Laatst bijgewerkt:** 2026-08-31 · **Eigenaar:** Stefan`

Status loopt: `voorstel` → `in review` → `vastgesteld` → `verhuisd naar <plek>`.
Nummer versies binnen een bestand (0.1, 0.2 …); pas bij `vastgesteld` naar 1.0.

## Nu in ontwikkeling

- [`security-context-canvas/`](security-context-canvas/) — kernartefact W1·lesblok 9, groeit door tot het SbD-dossier in W4·9. Status: **voorstel 0.2**. Voorbeeld-PDF (A3, blanco + ingevuld) ligt er; wacht op de keuze van de doorlopende casus.
- [`asset-abuse-canvas/`](asset-abuse-canvas/) — werkvel bij W1·lesblok 6; voedt vak 7 en 8 van het contextcanvas. Status: **in review 0.2**. Werkvel-A3 en assetkaartjes (blanco + ingevuld) liggen er, met lesplan; wacht net als het contextcanvas op de casuskeuze.
- [`stride-light-canvas/`](stride-light-canvas/) — threat-modelling canvas W4·lesblok 4, erft de assetnummers uit week 1 en voedt de traceability-matrix van blok 5. Status: **voorstel 0.1**. A3-PDF (blanco + ingevuld) ligt er; staat als pagina op de site (`/stride-light`), nog niet in het menu.
- [`breach-writeup/`](breach-writeup/) — casusmateriaal bij W3·lesblok 7 (incident response & crisiscommunicatie). Status: **voorstel 0.1**. De writeup zelf staat als pagina op de site (`/breach-writeup`), nog niet in het menu. Open: wanneer de 72-uursklok begon, en of de gebeurteniskaartjes voor de tijdlijnwerkvorm er nog bij komen.
- [`attack-tree-challenge/`](attack-tree-challenge/) — spelblok W2·lesblok 8; trekt de assetnummers uit week 1 door en levert de snijpunten voor het risicoprofiel van blok 9. Status: **voorstel 0.1**. A3-PDF (werkblad, docentvoorbeeld, doelkaarten + scoreblad) ligt er; staat als pagina op de site (`/attack-tree`), nog niet in het menu. Open: kaartspel óf challenge, wie de jury is, en of teams op één casus of op hun eigen casus werken.
- [`security-bingo-dilemmas/`](security-bingo-dilemmas/) — spelblok W1·lesblok 8. Status: **voorstel 0.1**. Het materiaal zelf staat al op de site (zie hieronder); hier liggen de onderbouwing en het lesplan. Open: duur van het blok (90 of 60 min) en wie de reflectielus in W4·9 uitvoert.

## Verhuisd naar de site

Dit materiaal staat als eigen pagina op de site, met printvellen en een PDF-export.
Inhoud bewerken doe je in `app/content/`, niet hier.

- **Principekaartjes** — W1·blok 3, loopt door in week 2–3 · 63 × 88 mm, 9 per A4 → `/principekaartjes` · `app/content/kaartsets/principekaartjes.ts`
- **Dreigingskaarten-sorteerset** — W2·blok 2 · 63 × 88 mm, 9 per A4 → `/dreigingskaarten` · `app/content/kaartsets/dreigingskaarten.ts`
- **Dilemmakaarten** — W1·blok 8 · A6, 4 per A4, met het Brightspace-inleversjabloon → `/dilemmakaarten` · `app/content/kaartsets/dilemmakaarten.ts`
- **Security bingo** — W1·blok 8 · digibordscherm + kaartgenerator (A5, 2 per A4) → `/security-bingo` · `app/content/spel/security-bingo.ts`

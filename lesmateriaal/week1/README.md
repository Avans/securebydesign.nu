# Week 1 — presentaties (lesblok 1 t/m 9)

> **Status:** eerste versie · **Laatst bijgewerkt:** 2026-09-07 · **Eigenaar:** Stefan
> Thema van de week: **Mindset & cultuur** — fase *waarom & wie*.

Negen decks, één per lesblok, in Markdown. De bron is de praatplaat
[`Fundament`](https://securebydesign.nu/fundament) (week 1, blok 1–9); de lesplannen in
[`draft_inprogress/`](../../draft_inprogress) zijn leidend waar ze al bestaan (blok 6, 8 en 9).

| Bestand | Blok | Thema | Werkvorm hoofdmoot |
|---|---|---|---|
| [`w1b1-intro-secure-by-design.md`](w1b1-intro-secure-by-design.md) | 1 · les | Intro Secure by Design: veiligheid als ontwerpkwaliteit | groepjes 3–4 |
| [`w1b2-wat-kan-er-misgaan.md`](w1b2-wat-kan-er-misgaan.md) | 2 · les | Wat kan er misgaan? Producten, diensten, processen, systemen | groepjes 4, domeincarrousel |
| [`w1b3-security-principes.md`](w1b3-security-principes.md) | 3 · les | Security-principes | duo's → groepjes 4 |
| [`w1b4-gedrag-en-cultuur.md`](w1b4-gedrag-en-cultuur.md) | 4 · les | Menselijk gedrag en securitycultuur | duo's |
| [`w1b5-stakeholders-en-belangen.md`](w1b5-stakeholders-en-belangen.md) | 5 · les | Stakeholders, belangen en verantwoordelijkheden | vaste casusteams |
| [`w1b6-assets-en-abuse-cases.md`](w1b6-assets-en-abuse-cases.md) | 6 · les | Assets en misbruikscenario's | vaste casusteams |
| [`w1b7-weekopbrengst.md`](w1b7-weekopbrengst.md) | 7 · les | Weekopbrengst: security-context en eerste abuse cases | vaste casusteams |
| [`w1b8-bingo-en-dilemmas.md`](w1b8-bingo-en-dilemmas.md) | 8 · sociaal/spel | Security bingo & dilemma's | plenair → groepjes 3–4 |
| [`w1b9-security-context-canvas.md`](w1b9-security-context-canvas.md) | 9 · integratie | Security Context Canvas | vaste casusteams |

## Lesritme

Elk deck volgt hetzelfde ritme van 90 minuten (2 lesuren):

1. **Verhaal** — 20–30 min inspirerend, docent aan het woord, met vragen aan de zaal.
2. **Aan het werk** — 30–45 min studenten, in groepen of individueel (staat per deck vermeld).
3. **Terug & verdieping** — 15–20 min oogsten, verdiepen, misvattingen rechtzetten.
4. **Afsluiting** — 5–10 min: doorwerken aan de opdracht, lezen of voorbereiden voor het volgende blok.

Blok 8 en 9 houden hetzelfde ritme aan, maar met een kort verhaal en een lange werkmoot —
daar zijn de vastgestelde lesplannen leidend. Dat staat in die decks vermeld.

## Doorlopende casus

Alle decks gebruiken de wijkzorg-app **"Naaste"** als doorlopende casus
(zie [`02-invulhulp-en-voorbeeld.md`](../../draft_inprogress/security-context-canvas/02-invulhulp-en-voorbeeld.md), deel B).
De casus is nog een voorstel; wordt hij vervangen, dan is dat een zoek-en-vervang op de casusslides —
de rest van de decks staat er los van.

## Van Markdown naar PowerPoint

De decks zijn geschreven voor [Marp](https://marp.app): `---` scheidt de slides, HTML-commentaar
(`<!-- ... -->`) wordt een notitie bij de slide.

```bash
# één deck
npx @marp-team/marp-cli@latest w1b1-intro-secure-by-design.md -o w1b1-intro-secure-by-design.pptx

# alle decks in deze map
npx @marp-team/marp-cli@latest --pptx w1b*.md
```

`--pdf` in plaats van `--pptx` geeft een handout. Voor bewerken in PowerPoint zelf: exporteer naar
`.pptx`, open, en pas het thema toe — de Marp-export levert bewust een kale opmaak zodat de
huisstijl in PowerPoint blijft leven.

## Conventies in de decks

- **Titelslide** met blok, thema en duur; daarna leerdoelen en de tijdlijn van het blok.
- **Deel-slides** (`## Deel 1 · …`) markeren de vier fasen van het ritme.
- **Notities onder elke slide** zijn voor de docent: wat je zegt, waar je op let, wat je *niet* doet.
- **⏱ in de notitie** = de bedoelde tijd op die slide.
- Slides met **`Docent`** in de titel zijn niet bedoeld om te tonen; verwijder of verberg ze
  voor je projecteert (in PowerPoint: rechtermuisknop → *Dia verbergen*).

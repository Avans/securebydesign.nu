# Voorstel — Attack-tree Challenge

> **Status:** voorstel · **Versie:** 0.1 · **Laatst bijgewerkt:** 2026-08-31 · **Eigenaar:** Stefan
> **Plek in de minor:** Fundament, week 2, lesblok 8 (sociaal/spelblok: aanvallersdenken)
> **Site:** `/attack-tree` (staat bewust niet in het menu)

---

## 1. Waarom dit ding bestaat

W2·8 staat in de praatplaat als *"sociaal/spelblok: dreigingenkaartspel of attack-tree challenge"*,
met als opdracht: *"punten voor creativiteit én plausibiliteit; korte debrief op ontwerpimplicaties"*.
Dat "én" is het hele ontwerpprobleem. Een challenge die alleen creativiteit beloont, levert
Hollywood op: zero-days, drones, hackers in kelders. Een challenge die alleen plausibiliteit
beloont, levert het rijtje van vorige week op — phishing, ransomware, klaar.

Drie eisen uit de praatplaat sturen het ontwerp:

- **P2 — breed, niet ICT-geframed.** De boom heeft drie vaste routes: *via de mens*, *via het
  apparaat en de techniek*, *via de keten, het proces en de organisatie*. Een team dat alleen de
  middelste vult, kan de challenge niet winnen. Doelkaart **D8** kan zelfs alleen zonder techniek
  worden gespeeld.
- **P4 — doorlopende casus.** Het doel komt van een doelkaart op de casus van week 1, en elk blad
  krijgt een **assetnummer** (A1, A2 …) uit het Security Context Canvas. Geen nieuw systeem, geen
  overtikwerk.
- **P6 — praktijk = ankeren.** De challenge is een ophaalmoment van W2·1 (motief, toegang, impact),
  W2·2 (dreigingen), W2·5 (kans × impact) en W2·7 (detectie), verpakt als spel.

Centraal ontwerpprincipe:

> **Een pad zonder assetnummer is een mening, en "hoe dan?" moet in één zin kunnen.**

Die twee regels zijn de hele rem op de filmaanval — en tegelijk de opening voor niet-technische
studenten, omdat de route via de mens meestal de kortste is en geen regel code vraagt.

## 2. De opbouw — één A3, drie banden

```
┌─ ATTACK-TREE CHALLENGE ───────── casus: ……… · team: ……… · doelkaart: … · datum: ………  ┐
│  1 Het doel van de aanvaller (ik-vorm)        │ 2 Wie wil dit, en waarom?            │
│      ← doelkaart · raakt de assets A…         │      ← blok 1 · persona non grata    │
├───────────────────────────────┬───────────────┴───────┬──────────────────────────────┤
│  VIA DE MENS                  │ VIA HET APPARAAT      │ VIA DE KETEN, HET PROCES     │
│  M1 … M4                      │ T1 … T4               │ K1 … K4                      │
│      per blad: hoe dan (één zin) · assetnummer · EN/OF · ✔ plausibel · ★ uniek       │
├───────────────────────────────┬───────────────────────┬──────────────────────────────┤
│  ✂ Snijpunt                   │ ✗ Te mooi om waar     │ Σ Jurypunten                 │
│    maatregel | snijdt af |    │   te zijn             │   ✔ 1 · ★ +1 · ✂ 3           │
│    hoe merken we het? → blok 9│                       │                              │
└───────────────────────────────┴───────────────────────┴──────────────────────────────┘
```

**Waarom drie vaste routes en geen vrije boom.** Een vrije attack tree wordt op papier binnen tien
minuten onleesbaar, en teams zakken weg in de tak die ze het beste kennen. Drie kolommen dwingen
breedte af en maken de vellen onderling vergelijkbaar — noodzakelijk als je er punten aan hangt.

**Waarom EN/OF per blad.** Dat is het enige stukje echte attack-tree-notatie dat blijft staan, en
het is precies het stukje dat naar het snijpunt leidt: bladeren die met **EN** aan elkaar vastzitten
(T1 telefoon meenemen **EN** T2 sessie stond open) vallen samen om als je er één van wegneemt. Teams
ontdekken zo zelf waarom één maatregel meerdere paden afsnijdt.

**Waarom het snijpunt de hoofdprijs is.** Zonder die ronde is de challenge een dreigingenwedstrijd
en geen ontwerpblok. Drie punten voor *één maatregel + hoe je zou merken dat iemand het tóch
probeert* verplaatst het gesprek in de laatste tien minuten van "wat kan er misgaan" naar "wat gaan
we anders doen" — en levert de eerste regels van het risicoprofiel in W2·9.

**Waarom "te mooi om waar te zijn" een eigen vak heeft.** Films moeten ergens naartoe kunnen. Ze
krijgen de eervolle vermelding en nul punten, plus de enige vraag die ze leerzaam maakt: *voor
wélke aanvaller zou dit wél kloppen?* Zo blijft de fantasie in het spel zonder de score te vervuilen.

## 3. Puntentelling

| Symbool | Waarvoor | Punten |
|---|---|---|
| ✔ | plausibel pad — de jury kan zich de dinsdagochtend voorstellen | 1 |
| ★ | plausibel **én** uniek — geen ander team had dit | +1 |
| ✂ | snijpunt **mét** detectie | 3 |
| — | pad zonder assetnummer | 0 (telt niet mee) |

De ★ wordt hardop getoetst: de jury vraagt de zaal *"heeft iemand anders dit ook?"* Eén hand omhoog
en het extra punt vervalt. Dat is de motor onder de creativiteit — en het maakt luisteren naar de
andere teams lonend, wat een presentatieronde normaal juist niet doet.

## 4. Werkvorm (45 min binnen het lesblok)

| Tijd | Ronde | Wat |
|---|---|---|
| 12 | 1 · bouwen | Doelkaart trekken, drie routes, minstens twee bladeren per route |
| 8 | 2 · doorgeven | Vellen schuiven één plek op; het buurteam vult aan (met initialen) |
| 15 | 3 · verdedigen | Jury vraagt per blad "hoe dan?"; ✔ en ★ worden hardop toegekend |
| 10 | 4 · snijpunt | Eén maatregel, zoveel mogelijk takken, mét detectie |

Debrief klassikaal op één vraag: *welke route leverde bij jullie de meeste punten op — en wat zegt
dat over waar je maatregelen moet zoeken?* In vrijwel elke ronde wint de menselijke of
organisatorische tak, en dat is precies de opbrengst van P2.

## 5. Materiaal

- `werkblad-a3.html` — bron (A3 liggend, 3 pagina's: blanco werkblad, docentvoorbeeld, doelkaarten + scoreblad)
- `werkblad-a3.pdf` — printversie
- 8 doelkaarten (D1 lezen · D2 wijzigen · D3 toegang · D4 misleiden · D5 platleggen · D6 meenemen ·
  D7 uitwissen · D8 vertrouwen), scoreblad en zes juryregels op pagina 3
- Voorbeeld staat op de casus **wijkzorg-app "Naaste"** (doelkaart D1), dezelfde als het week 1-canvas
- Site: `/attack-tree` · content in `app/content/attack-tree.nl.ts` / `.en.ts`

## 6. Open keuzes

1. **Kaartspel of challenge?** De praatplaat laat de keuze open ("dreigingenkaartspel *of*
   attack-tree challenge"). Voorstel: de challenge is het blok, en de dreigingskaarten van W2·2
   liggen als hulpmiddel op tafel voor teams die vastlopen. Alternatief is beide draaien in een
   blok van 90 minuten.
2. **Wie is de jury?** Docent alleen (snel, consistent) of een roulerend team dat een ronde
   overslaat (meer eigenaarschap, trager, en dat team bouwt geen boom). Voorlopig: docent, met de
   zaal als scheidsrechter bij de ★.
3. **Eén casus of acht?** Nu trekken alle teams een doelkaart op dezelfde casus, wat de ★-ronde
   scherp maakt. Alternatief: teams werken op hun eigen projectcasus — beter voor eigenaarschap,
   maar dan is "heeft iemand anders dit ook?" geen zinnige vraag meer.
4. **Telt ronde 2 mee voor punten?** Nu krijgt het bouwende team de punten voor aangevulde
   bladeren. Dat houdt aanvullen genereus, maar beloont het aanvullende team niet. Alternatief:
   een half punt voor de aanvuller.
5. **Verhouding tot W4·4.** De challenge is de losse, snelle voorloper van het STRIDE-light canvas
   ([`../stride-light-canvas/`](../stride-light-canvas/)). Vraag: noemen we de zes STRIDE-vragen
   hier al bij naam, of houden we week 2 bewust vrij van het model?

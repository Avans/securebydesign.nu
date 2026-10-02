# Secure by Design — minorwebsite en lesmateriaal

Deze repository bevat de Nuxt-website voor de minor Secure by Design van Avans,
lesmateriaal en werkvormen in ontwikkeling.

## Wat staat waar?

| Map of bestand | Inhoud |
|---|---|
| [`app/`](app/) | Broncode, inhoud en vormgeving van de website. |
| [`public/`](public/) | Bestanden die rechtstreeks via de website beschikbaar zijn: logo, favicon, edubadge en introductievideo. |
| [`public/materiaal/`](public/materiaal/) | Downloadbare PDF’s en voorbeeldafbeeldingen van canvases en werkbladen. |
| [`lesmateriaal/`](lesmateriaal/) | Markdown-lessen, docentmateriaal, werkbladen en hulpmiddelen voor PowerPoint-export. |
| [`draft_inprogress/`](draft_inprogress/) | Voorstellen, lesplannen en werkvellen in ontwikkeling, georganiseerd per werkvorm. Zie de [eigen README](draft_inprogress/README.md) voor statusafspraken. |
| [`supabase/`](supabase/) | SQL voor de feedbacktabel en de bijbehorende toegangsregels. |
| [`tooling/lessons/`](tooling/lessons/README.md) | Omzetting van Markdown naar lespagina’s en de lokale reviewomgeving. |
| [`run.sh`](run.sh) | Start de website en reviewomgeving lokaal, met installatie van dependencies indien nodig. |
| [`archief/`](archief/README.md) | Eerdere versies en losse exports, per archiveringsdatum en onderwerp. Geen onderdeel van de Nuxt-website. |
| [`nuxt.config.ts`](nuxt.config.ts) | Websiteconfiguratie, algemene metadata en Supabase-instellingen. |
| [`package.json`](package.json) / [`package-lock.json`](package-lock.json) | Opdrachten, dependencies en vastgelegde dependencyversies. |
| [`AGENTS.md`](AGENTS.md) | Werkafspraken voor inhoud, vormgeving, talen en controles. |

## De website aanpassen

```text
app/
├── pages/          Pagina’s en routes; Engelse varianten onder en/
├── content/        Inhoud, meestal in aparte .nl.ts- en .en.ts-bestanden
│   ├── kaartsets/  Principe-, dreigings- en dilemmakaarten
│   └── spel/       Security bingo
├── components/     Herbruikbare paginaopbouw, weekkaarten en feedbackknop
├── layouts/        Navigatie, taalwissel en footer
├── assets/css/     Algemene vormgeving en gedeelde weekkaartstyles
├── composables/    Hulpfuncties voor taal en interne links
├── plugins/        Supabase, verschijnanimaties en geanimeerd favicon
└── app.vue         Verbindt de layout met de huidige pagina
```

De hoofdonderdelen zijn Fundament, Professioneel Profiel, Project,
Eind Event, Partners en Contact. Daarnaast zijn er pagina’s voor canvases,
kaartsets, bingo, de attack-tree-challenge en de breach-writeup.
Nederlands staat op de basisroutes; de Engelse pagina’s staan onder `/en/`.

Voorbeeld: [`app/pages/project.vue`](app/pages/project.vue) geeft de inhoud uit
[`app/content/project.nl.ts`](app/content/project.nl.ts) door aan
[`app/components/ProjectPlaat.vue`](app/components/ProjectPlaat.vue).
De Engelse route gebruikt hetzelfde component met `project.en.ts`.

| Wat wil je wijzigen? | Waar begin je? |
|---|---|
| Tekst of lesopbouw op een praatplaat | Het bijbehorende bestand in `app/content/`; werk ook de Engelse versie bij. |
| Paginaopbouw of interactie | Het bijbehorende component in `app/components/` en zo nodig de route in `app/pages/`. Sommige pagina’s bevatten hun tekst rechtstreeks in het paginabestand. |
| Algemene vormgeving | [`app/assets/css/main.css`](app/assets/css/main.css). |
| Gedeelde weekkaarten | [`LessenOverzicht.vue`](app/components/LessenOverzicht.vue) en [`lesson-board.css`](app/assets/css/lesson-board.css); Fundament gebruikt die stylesheet ook. |
| Menu of footer | [`app/layouts/default.vue`](app/layouts/default.vue). |
| Taalafhankelijke links | [`app/composables/useI18nNav.ts`](app/composables/useI18nNav.ts). |
| Download of voorbeeldafbeelding | `public/materiaal/` en de verwijzing in de bijbehorende pagina-inhoud. |
| Lespresentatie of docentmateriaal | De betreffende weekmap in `lesmateriaal/`. |

Kaartsets en bingo hebben één gedeeld inhoudsbestand: de bediening is tweetalig,
maar het les- en printmateriaal blijft Nederlands.

## Welke versie is leidend?

- **Website:** `app/` is de hoofdversie voor de website-inhoud, lesopbouw en
  vormgeving. Losse HTML-praatplaten worden niet automatisch bijgewerkt en kunnen
  achterlopen. De voormalige rootbestanden staan in
  [`archief/2026-09-26-praatplaten/`](archief/2026-09-26-praatplaten/README.md).
  Maak actuele exports alleen bij een expliciete exportvraag; behoud de
  gearchiveerde versies als historische kopie.
- **Lespresentaties:** de Markdown-bestanden in `lesmateriaal/` zijn de bewerkbare
  bron. PowerPoints worden daaruit gegenereerd met
  [`md-naar-pptx.py`](lesmateriaal/md-naar-pptx.py) en
  [`avans_template.pptx`](lesmateriaal/avans_template.pptx).
- **Ontwerpen:** `draft_inprogress/` bevat voorstellen en onderbouwing. Sommige
  werkvormen staan al op de website terwijl hun ontwerpbestanden hier nog staan.
  Controleer de statusregel en de README; de mapnaam alleen zegt niet of materiaal
  al wordt gebruikt. Bewerk naar de website verhuisde inhoud in `app/content/`.
- **Downloads:** `public/materiaal/` bevat de bestanden waar de website naar
  verwijst. HTML/PDF-versies in `draft_inprogress/` worden niet automatisch met
  deze downloads gesynchroniseerd. Controleer bij een wijziging ook de aangeboden
  PDF en voorbeeldafbeeldingen.

Een bekend inhoudelijk verschil staat in de [README van week 3](lesmateriaal/week3/README.md):
de lokale incidentcasus bevat correcties die nog niet in de websitecasus zijn
verwerkt. Voor lesblok 7 is volgens die README de lokale oefencasus leidend.

## Archief en terugvinden

De [archiefindex](archief/README.md) vermeldt per verzameling wat er is bewaard,
waar het vandaan komt en welke bron nu leidend is. De vier losse HTML-praatplaten
uit de projectroot zijn op 26 september 2026 ongewijzigd bij elkaar gearchiveerd;
hun onderlinge links blijven daardoor werken.

Gebruik voor toekomstige archivering `archief/JJJJ-MM-DD-onderwerp/`. De datum is
de **archiveringsdatum**, niet automatisch de maakdatum of inhoudelijke peildatum.
Voeg een README toe met de reden, oorspronkelijke locatie, bestandslijst en
verwijzing naar de actuele bron. Werk ook de archiefindex bij. Bewaar bij elkaar
horende bestanden samen en controleer links na het verplaatsen.

Gearchiveerde inhoud wordt niet actief bijgewerkt. Nieuwe versies krijgen een
eigen plek; overschrijf daarvoor geen historische kopie. Het archief staat buiten
`public/` en is geen downloadsectie van de website.

## Lesmateriaal per week

Onderstaande stand beschrijft de repository op 26 september 2026.

| Map | Uitwerking |
|---|---|
| [`week1/`](lesmateriaal/week1/) | Negen Markdown-lesbestanden, één per blok. De [README](lesmateriaal/week1/README.md) beschrijft lesritme, casus en PowerPoint-export. |
| [`week2/`](lesmateriaal/week2/) | Alleen een plaatsaanduidingsbestand `depreso.md`; nog geen uitgewerkte lesbestanden. |
| [`week3/`](lesmateriaal/week3/) | Negen Markdown-lesbestanden, casus, werkbladen, incidentoefening, docenthandleiding, bronnen en inhoudelijke beoordeling. Zie de [README](lesmateriaal/week3/README.md). |
| [`week4/`](lesmateriaal/week4/) | Alleen een plaatsaanduidingsbestand `depreso.md`; nog geen uitgewerkte lesbestanden. |
| [`voorlichting/`](lesmateriaal/voorlichting/) | Afbeelding van de leerlijnen voor voorlichting. |

De `depreso.md`-bestanden zijn plaatsaanduidingen. `lesmateriaal/p.md` bevat een
eerdere opdrachttekst voor het maken van de week-1-presentaties.

## Didactische aanpak

Week 1 is de referentie voor de lesopbouw: **voordoen → samen proberen →
zelfstandig toepassen**. Een herkenbare situatie introduceert het begrip. Op de
slides wordt vervolgens één voorbeeld uitgewerkt, inclusief de afweging achter
de uitkomst. Studenten vullen samen een variant aan en passen de aanpak daarna
toe op een eigen situatie.

Voorbeelden dragen dus ook de uitleg; ze staan niet alleen in een opdracht of
in de speaker notes. Notes helpen de docent hardop redeneren, reacties bespreken
en het denkwerk aan studenten overdragen. Een instructievoorbeeld mag zichtbaar
zijn; antwoordmodellen van zelfstandige opdrachten en verborgen spelinformatie
blijven docentmateriaal. Fictieve details en zelfgekozen normen blijven herkenbaar
als oefenaannames.

Deze aanpak wordt binnen de bestaande lestijd verwerkt, met behoud van de eigen
vorm van spellen, incidentoefeningen en integratielessen. De [README van week 3](lesmateriaal/week3/README.md)
beschrijft de voorbeelden per blok. De onderhoudsafspraken staan in [AGENTS.md](AGENTS.md).

## Lokale ontwikkelwerkplek

Open `/ontwikkeling` tijdens lokaal ontwikkelen. De werkplek staat niet in het
hoofdmenu en wordt volledig uitgesloten van de productiebuild. De oude routes
`/lessen` en `/review/lessen` zijn verwijderd.

- `/ontwikkeling/lessen`: 18 lessen uit week 1 en 3 als slides, plus drie
  studentbijlagen. Week 2 en 4 staan als in ontwikkeling vermeld.
- `/ontwikkeling/review`: docentnotities en feedback per lesonderdeel. Opslaan
  schrijft naar `.data/lesreviews/`, buiten Git; het wijzigt de lesbron niet.
- `/ontwikkeling/acties`: acties toevoegen, afvinken en de Markdown aanpassen.
  **Bewaar in ACTIES.md** schrijft naar [ACTIES.md](ACTIES.md) in de projectroot.
  Dit bestand kan via Git worden gedeeld en ook rechtstreeks worden bewerkt.
- `/ontwikkeling/concepten`: leesweergave van Markdown in `draft_inprogress/`.
  Concepten bewerken doe je in de oorspronkelijke bestanden. HTML/PDF-bestanden
  worden niet via deze viewer aangeboden.

De `.md`-bestanden in `lesmateriaal/` blijven de lesbron. De studentenweergave
laat docentnotities uit HTML-commentaar weg; reviews tonen ze wel. Slides hebben
vorige/volgende, een slidekiezer, pijltjestoetsen en volledig scherm. Bijvoorbeeld
`/ontwikkeling/lessen/week-1/blok-1?slide=3` opent de derde slide. Printen neemt
alle slides mee; bijlagen en reviews blijven doorlopende leesweergaven.

De interface is ook bereikbaar onder `/en/ontwikkeling`. Het bronmateriaal en de
reviewvelden blijven Nederlands. Zie de [technische werkwijze](tooling/lessons/README.md).

## Lokaal draaien en controleren

De gebruiker beheert de lokale server. Agents starten of herstarten deze alleen
op expliciet verzoek, ook wanneer zij een wijziging in de browser willen controleren.

De eenvoudigste manier om alles lokaal te starten:

```bash
./run.sh
```

Open daarna `http://127.0.0.1:3000/ontwikkeling`. De terminal meldt de werkelijk gebruikte poort.
Gebruik `PORT=3001 ./run.sh` voor een andere poort en Ctrl+C om te stoppen.

Installeer de dependencies en start de ontwikkelserver:

```bash
npm ci
npm run dev
```

Voor de feedbackfunctie zijn Supabase-instellingen nodig. Gebruik
[`.env.example`](.env.example) als voorbeeld voor een lokale `.env` en zie
[`supabase/feedback.sql`](supabase/feedback.sql) voor de database-inrichting.
Zonder deze instellingen is feedback uitgeschakeld.

Controleer code- en templatewijzigingen met:

```bash
npm run build
```

Controleer zichtbare wijzigingen ook in de browser op desktop en mobiel,
inclusief navigatie, uitklappen en taalwissel. Een build vervangt die controle
niet. Alleen documentatiewijzigingen vereisen geen build.

Voor een lokale preview van de build is er `npm run preview`; voor een statische
export `npm run generate`. Een lokale wijziging of build werkt de publieke
website niet automatisch bij.

## Lokale en gegenereerde mappen

| Map | Betekenis |
|---|---|
| `node_modules/` | Geïnstalleerde Node-dependencies. |
| `.nuxt/` | Door Nuxt gegenereerde ontwikkel- en buildbestanden. |
| `.output/` | Gegenereerde productiebuild. |
| `.data/` | Lokale werkbestanden, waaronder OPF-voorbereiding en een concept-Excelbestand. Dit is geen gewone buildcache. |
| `.data/lesreviews/` | Lokaal opgeslagen reviews met opmerkingen per lesonderdeel; eerdere reviews van gewijzigde bronnen staan in `history/`. |
| `lesmateriaal/**/_pptx/` | Tijdelijke PowerPoint-exports van de Markdown-lessen. |
| `.git/` | Git-versiegeschiedenis en repositorygegevens. |

Dependencies, buildbestanden, `.data/`, tijdelijke PowerPoint-exports en `.env`
zijn uitgesloten via [`.gitignore`](.gitignore). Lokale werkbestanden in `.data/`
worden dus niet met de repository gedeeld.

## Lokale lettertypen

De website serveert Fraunces, Hanken Grotesk en JetBrains Mono zelf vanuit
`public/fonts/`. De font-face-regels staan in `app/assets/css/fonts.css`; de
bijbehorende licenties en bronverwijzingen staan bij de fontbestanden. Google
Fonts wordt niet door de browser aangeroepen.

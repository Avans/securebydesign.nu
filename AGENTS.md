# Website en praatplaten

- De Nuxt-website is de hoofdversie voor inhoud, lesopbouw en vormgeving. Werk wijzigingen uit in `app/pages/`, `app/components/`, `app/content/` en de bijbehorende styles.
- De voormalige losse `*-praatplaat.html`-bestanden uit de projectroot staan in `archief/2026-09-26-praatplaten/`. Ze worden niet door de website gebruikt en hun inhoud kan achterlopen op de website. Zie `archief/README.md` voor de index.
- Houd losse HTML-praatplaten niet automatisch parallel bij. Maak of actualiseer exports alleen wanneer de gebruiker daarom vraagt; overschrijf daarvoor geen gearchiveerde versie.
- Gebruik bij zo'n export de actuele website als bron, bij voorkeur via een herbruikbare exportwerkwijze. Behoud de gezamenlijke vormgeving en voorkom dubbel onderhoud van inhoud.
- Maak bij oplevering duidelijk of de website, een los HTML-bestand of beide zijn aangepast. Verwijs naar de juiste pagina of het concrete bestand.

## Archiveren

- Bewaar te archiveren materiaal in `archief/JJJJ-MM-DD-onderwerp/`, met een korte, herkenbare onderwerpnaam. De datum is de archiveringsdatum, niet automatisch de maakdatum of inhoudelijke peildatum.
- Voeg per verzameling een `README.md` toe met archiveringsdatum, reden, oorspronkelijke locatie, bestandslijst en de actuele leidende bron. Neem een link en korte omschrijving op in `archief/README.md` en houd de algemene README passend bij de structuur.
- Behoud de inhoud van gearchiveerde bestanden. Bewaar samenhangende bestanden bij elkaar en controleer bij verplaatsing verwijzingen vanuit en naar die bestanden. Leg noodzakelijke padaanpassingen vast in de README van de verzameling.
- Werk historische kopieën niet automatisch bij. Maak voor nieuwe versies of exports een afzonderlijk bestand of een nieuwe verzameling.
- Het archief is geen onderdeel van de actieve website. Plaats het niet in `public/` en gebruik gearchiveerde inhoud niet als actuele bron voor websitewijzigingen.

## Lessenbibliotheek en lokale reviews

- `/ontwikkeling` is de lokale ingang voor lessen, reviews, acties en concepten. Registreer deze routes alleen tijdens ontwikkeling; `/lessen` en `/review/lessen` bestaan niet meer. Zet de werkplek niet in het publieke hoofdmenu of op de homepage. Neem ook de lesgegevens niet op in productie.
- Bewaar acties als Markdown-taaklijst in `ACTIES.md` (deelbaar via Git). Alleen dit Markdown-bestand is beschrijfbaar via de lokale actie-API; behoud origin-, loopback- en conflictcontroles. Concepten uit `draft_inprogress/` zijn alleen leesbaar via de viewer; volg geen symlinks en exposeer geen willekeurige bestandspaden.

- De lessen onder `/ontwikkeling/lessen` worden opgebouwd uit de Markdown-bronnen in `lesmateriaal/`, via `tooling/lessons/`. Bewerk de bron, niet de gegenereerde lesgegevens. Zie `tooling/lessons/README.md` voor selectie en omzetting.
- Toon studentlessen via `LessonSlides.vue`, één Markdown-onderdeel per slide. Behoud slidekeuze via de URL, toetsenbediening en printen van alle slides. Studentbijlagen en de lokale review blijven doorlopende leesweergaven.
- Gewone Markdown-tekst verschijnt in de lokale studentenweergave. Houd docentnotities in `<!-- ... -->`; markeer een volledig docentonderdeel met `<!-- review:teacher-only -->` tussen de Marp-scheidingen. Controleer zichtbare tekst ook inhoudelijk op antwoordmodellen: de omzetter kan dit niet automatisch beoordelen.
- Houd docenthandleidingen, ruwe Markdown met notities en lokale reviews buiten publieke imports, productiegegevens en `public/`. Studentbijlagen moeten expliciet in de selectie worden opgenomen. Bestaande openbare PDF’s hebben hun eigen inhoud en worden hierdoor niet aangepast.
- De gehele `/ontwikkeling`-werkplek en de lokale API’s zijn uitsluitend voor de lokale ontwikkelserver. Behoud hun uitsluiting uit productie en de controles op lokale toegang. Start met `./run.sh` of `npm run dev`.
- Reviewfeedback staat in `.data/lesreviews/` en wordt niet met Git gedeeld. Verwerk feedback op verzoek in de genoemde Markdown-bron; controleer bronvingerafdruk, onderdeeltitels en regelnummers om verschoven opmerkingen niet verkeerd toe te passen. Opslaan van feedback betekent niet dat de lestekst is aangepast of publicatie is goedgekeurd.
- Houd de interface tweetalig via `app/content/lessen.nl.ts` en `.en.ts`. Het lesmateriaal zelf blijft net als de kaartsets Nederlands; vermeld dit op de Engelse routes.
- Controleer wijzigingen aan omzetting of review met `npm run test:lessons`, `npm run build` en relevante browsercontroles. Controleer dat docentnotities en reviewroutes niet in de productiebuild terechtkomen.

## Vormgeving en hergebruik

- Behoud de bestaande praatplaatstijl: warme papierachtergrond met subtiel raster en textuur, donkere inkt, gekleurde accenten, afgeronde kaarten, dunne randen en zachte schaduwen. Introduceer geen nieuwe visuele stijl voor een extra pagina.
- `app/assets/css/main.css` bevat de algemene stijl, CSS-variabelen en gedeelde paginapatronen. Gebruik bestaande variabelen zoals `--paper`, `--card`, `--ink`, `--ink2`, `--line`, `--shadow` en de accentkleuren; vermijd losse kleurwaarden en gekopieerde CSS wanneer hergebruik mogelijk is.
- Typografie: **Fraunces** voor grote titels en sectiekoppen, **Hanken Grotesk** voor lopende tekst en kaarttitels, **JetBrains Mono** voor weeknummers, bloklabels, tijdstippen en andere korte labels. Volg bestaande groottes, gewichten en witruimte.
- Het huidige palet gebruikt oker (`--w1`), rood (`--w2`), groenblauw (`--w3`) en paars (`--w4`). Houd betekenis en toepassing consistent met de bestaande componenten.
- Gebruik de bestaande `.wrap` met maximaal 1340px breedte en de bestaande patronen voor hero, kicker, chips, genummerde sectiekoppen en introductietekst.
- **Fundament is de visuele referentie voor lessenoverzichten.** Gebruik `app/components/LessenOverzicht.vue` voor de gedeelde weekkaarten van Profiel en Project. De bijbehorende styling staat in `app/assets/css/lesson-board.css` en wordt ook door Fundament gebruikt.
- Behoud bij weekkaarten de gekleurde kop met decoratieve cirkel, typografie, bloklabels, kaartranden, tussenruimtes en uitklapdetails. Maak geen aparte, ongeveer gelijkende variant per pagina.
- Wijzig gedeelde componenten of styles op de gedeelde plek en controleer ook de andere pagina's die ze gebruiken. Houd paginaspecifieke CSS scoped.

## Responsive gedrag en toegankelijkheid

- Laat weekoverzichten aansluiten op de bestaande indeling: vier kolommen op breed scherm, twee onder 1080px en één onder 560px. Voorkom horizontale pagina-overflow; brede tabellen mogen binnen een eigen container scrollen.
- Gebruik semantische koppen, links en knoppen. Gebruik voor nieuwe uitklapkaarten bij voorkeur `details`/`summary`, zoals in `LessenOverzicht.vue`.
- Houd bediening via toetsenbord en zichtbare focus intact. Geef inhoud betekenis met tekst, niet alleen met kleur of pictogrammen.
- Respecteer `prefers-reduced-motion`. Inhoud moet zichtbaar blijven als animaties uitstaan of niet afspelen.
- Houd bij ankerlinks rekening met de vaste navigatiebalk, zodat sectiekoppen zichtbaar blijven.

## Inhoud, taal en navigatie

- Scheid inhoud en presentatie: bewaar gedeelde pagina-inhoud in `app/content/*.nl.ts` en `*.en.ts`, met dezelfde datastructuur voor beide talen. Hergebruik de Vue-component voor beide routes.
- Neem inhoudelijke wijzigingen mee in de bijbehorende Engelse versie. Nederlands staat op de basisroute; Engels onder `/en/`.
- Gebruik `useI18nNav()` en `localePath()` voor interne links in gedeelde componenten. Controleer dat de taalschakelaar naar een bestaande pagina leidt.
- Maak nieuwe hoofdpagina's vindbaar via `app/layouts/default.vue` en, waar passend, een kaart op de homepage in beide talen. Alleen een bestand aanmaken is niet voldoende om een pagina vindbaar te maken.
- Gebruik concrete activiteiten en opbrengsten in leskaarten. Houd weeknummers, roosterblokken, reviews en verwijzingen consistent tussen Profiel, Project en Eind Event. Maak onderscheid tussen ingeroosterde werktijd en klassikale lessen.
- Presenteer nog niet vastgestelde data, locaties, sprekers en workshoponderwerpen herkenbaar als voorlopig of nog te bepalen. Verzin geen definitieve afspraken.

## Werkwijze en controle

- Bekijk voor een wijziging de actuele component, inhoud en relevante gedeelde styles. Bewaar bestaande gebruikerswijzigingen buiten de opdracht.
- Start lokaal met `npm run dev`; controleer code- en templatewijzigingen met `npm run build`. Voor alleen documentatiewijzigingen is geen build nodig.
- Controleer UI-wijzigingen waar mogelijk in de browser op desktop en mobiel, inclusief uitklappen, navigatie en taalwissel. Een geslaagde build is geen visuele controle; meld het als die controle niet kon worden uitgevoerd.
- Controleer bij roosterwijzigingen ook aantallen en totalen en bij nieuwe pagina's de daadwerkelijke bereikbaarheid via de navigatie.
- Houd gegenereerde bestanden, dependencies en lokale configuratie buiten Git volgens `.gitignore`; voeg geen `node_modules`, `.nuxt`, `.output` of `.env` toe.
- Rapporteer kort wat is aangepast, waar het te bekijken is en welke controles zijn uitgevoerd. Een lokale wijziging betekent niet dat de publieke website al is bijgewerkt.

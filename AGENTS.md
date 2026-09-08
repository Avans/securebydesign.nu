# Website en praatplaten

- De Nuxt-website is de hoofdversie voor inhoud, lesopbouw en vormgeving. Werk wijzigingen uit in `app/pages/`, `app/components/`, `app/content/` en de bijbehorende styles.
- De losse `*-praatplaat.html`-bestanden in de projectroot worden niet door de website gebruikt. Het zijn zelfstandige versies om los te openen of te delen; hun inhoud kan achterlopen op de website.
- Houd deze HTML-bestanden niet automatisch parallel bij. Maak of actualiseer ze alleen wanneer de gebruiker om een losse HTML-praatplaat of export vraagt.
- Gebruik bij zo'n export de actuele website als bron, bij voorkeur via een herbruikbare exportwerkwijze. Behoud de gezamenlijke vormgeving en voorkom dubbel onderhoud van inhoud.
- Maak bij oplevering duidelijk of de website, een los HTML-bestand of beide zijn aangepast. Verwijs naar de juiste pagina of het concrete bestand.

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

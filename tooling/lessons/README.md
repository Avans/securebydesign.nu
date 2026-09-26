# Lessenbibliotheek en lokale review

## Starten

Voer vanuit de projectroot `./run.sh` uit. Het script installeert zo nodig de
Node-dependencies en start Nuxt op `127.0.0.1`. Gebruik `PORT=3001 ./run.sh` voor
een andere poort. Stop met Ctrl+C. De terminal toont de lokale URL; als de poort bezet
is, kan Nuxt een andere kiezen.

- `/ontwikkeling`: centrale ingang, alleen lokaal. De kaarten tonen week 1–4, de projectopzet en OPF, maximaal vijf open acties (bestandsvolgorde; geen aanmaakdatums), vijf laatst gewijzigde Markdown-concepten (bestandstijd, zonder README) en vijf open reviews. Niet beoordeelde documenten, reviews met aanpassingen en gewijzigde bronnen tellen als open.
- `/ontwikkeling/opf`: lokale leesweergave van het expliciet geselecteerde `.data/opf-voorbereiding/Voorbereiding OPF.md`; geen algemene toegang tot `.data/`.
- `/ontwikkeling/acties`: Markdown-taaklijst in `ACTIES.md`, toevoegen slaat meteen op; na afvinken of bron bewerken expliciet opslaan.
- `/ontwikkeling/concepten`: alleen-lezen Markdown-viewer voor `draft_inprogress/`; geen symlinks of willekeurige bestanden.
- `/ontwikkeling/lessen`: overzicht met zoekfunctie, vier weken en links naar studentbijlagen.
- `/ontwikkeling/lessen/week-1`: lessen van één week.
- `/ontwikkeling/lessen/week-1/blok-1`: slidepresentatie met vorige/volgende, slidekiezer en volledig scherm.
- `/ontwikkeling/lessen/week-1/blok-1?slide=3`: direct naar de derde slide; deze positie blijft bij herladen behouden.
- `/ontwikkeling/review`: lokale review-index, alleen tijdens `npm run dev`.
- `/ontwikkeling/review/week-1/blok-1`: lestekst met docentnotities en feedbackvelden.

De lokale interface heeft ook routes onder `/en/`. Net als bij kaartsets blijft
het lesmateriaal zelf Nederlands; de Engelse interface vermeldt dit expliciet.
De docentwerkplaats is Nederlandstalig, ook via de Engelse route.

## De reviewcyclus

1. Open een les in de lokale reviewweergave. Links staat de leestekst, rechts staan
   de uitklapbare docentnotities. Op mobiel staan ze onder elkaar.
2. Noteer algemene feedback of opmerkingen per onderdeel. Kies een reviewstatus
   en klik **Bewaar feedback**. Zonder opslaan blijft feedback alleen in het scherm.
3. De review staat in `.data/lesreviews/week-1-blok-1.json`, inclusief bronbestand,
   onderdeeltitels, regelnummers en een vingerafdruk van de beoordeelde Markdown.
4. Verwerk de feedback handmatig in het genoemde `.md`-bestand, of vraag Codex
   bijvoorbeeld: “Verwerk de lokale review van week 1 blok 1 in de Markdown-bron.”
   Het opslaan van een review herschrijft de les niet automatisch.
5. Controleer de aangepaste les opnieuw. Nuxt bouwt de studentenweergave bij een
   Markdown-wijziging opnieuw op; herlaad zo nodig de browser. Een eerder opgeslagen
   review krijgt een waarschuwing als de bron is veranderd. Controleer de oude
   onderdeeltitels en koppel de opmerkingen opnieuw voordat je opslaat. De vorige
   review blijft dan beschikbaar onder `.data/lesreviews/history/`.
6. Voer de controles hieronder uit. De ontwikkelwerkplek en lesgegevens worden
   momenteel niet online gepubliceerd.

Reviewstatus is een werkafspraak. De volledige ontwikkelwerkplek, inclusief alle
lesgegevens, is uitgesloten van productie.
Reviews zijn lokaal, worden niet via Git gedeeld en worden niet gesynchroniseerd
met andere computers. Wijzigingen vanuit twee tabbladen overschrijven elkaar niet
stilzwijgend: de tweede opslag geeft een conflictmelding.

## Bronnen en publicatie

`content.mjs` leest lesbestanden met namen zoals `w1b1-intro.md` uit de vier
weekmappen van `lesmateriaal/` en maakt er HTML van. Momenteel zijn alleen week 1
en 3 uitgewerkt. Nieuwe lesbestanden voor week 2 en 4 verschijnen automatisch als
ze deze naamconventie volgen. Het kopieert geen volledige Markdown naar `public/`.
Studentbijlagen worden expliciet geselecteerd in de lijst `attachments`:
werkbladen, casus Naaste en incidentoefening van week 3. Docenthandleidingen,
ontwerpvoorstellen en overige bestanden worden niet automatisch gepubliceerd.

- Gewone Markdown buiten commentaar is zichtbaar voor studenten.
- `<!-- ... -->` bevat docentnotities en wordt uit de studentenweergave verwijderd.
- Zet `<!-- review:teacher-only -->` in een onderdeel om het hele onderdeel alleen
  lokaal te tonen. Dit geldt tot de volgende Marp-scheiding (`---`). Een onderdeel
  waarvan de titel met “Docent” begint wordt eveneens uitgesloten.
- Marp-scheidingen blijven bewaard als slides. Scheidingen binnen code of
  docentnotities vormen geen nieuw onderdeel.
- HTML wordt niet als uitvoerbare HTML uit de Markdown overgenomen.
- Relatieve links naar geselecteerde studentbijlagen worden lesroutes. Links naar
  niet-gepubliceerde bestanden krijgen geen werkende bestands-URL; bullets met
  verwijzingen naar docenthandleidingen of `draft_inprogress/` worden weggelaten.
- Bestaande PDF’s onder `public/materiaal/` blijven hun bestaande openbare status
  houden. De scheiding hier verandert geen al gepubliceerde documenten.

**Controleer vóór publicatie ook de zichtbare tekst.** De omzetter kan niet aan
gewone tekst herkennen of deze een antwoordmodel of andere docentinhoud bevat.
Nieuwe docentinhoud hoort daarom in commentaar of een gemarkeerd docentonderdeel.

Lessen tonen één slide tegelijk. Klik in de slide en gebruik links/rechts om te
bladeren; Home/End gaat naar de eerste/laatste slide. De toetsen blijven hun gewone
functie houden in keuzelijsten en brede tabellen. Lange slides kunnen binnen hun
eigen vlak scrollen. Volledig scherm is beschikbaar als de browser dit ondersteunt;
Escape sluit het. Printen via de browser neemt alle slides mee, ook de slides die
op het scherm verborgen zijn. Studentbijlagen blijven doorlopende leesdocumenten.
De slideweergave gebruikt de bestaande Markdown-scheidingen en gedeelde vormgeving;
er is geen aparte Marp-renderer of Marp-PDF-export ingebouwd.

## Implementatie en controles

- `module.ts`: bouwt de opgeschoonde lesgegevens als Nuxt-template. Registreert de
  werkplek, les- en reviewpagina’s en lokale API’s alleen tijdens ontwikkeling.
- `content.mjs`: Markdown-omzetting, notitiescheiding en linkvertaling.
- `workspace.vue` en `workspace-api.mjs`: lokale werkplek, acties en concepten.
- `review.vue`: lokale lees- en reviewweergave.
- `app/components/LessonLibrary.vue`: lokale bibliotheek en bijlagenweergave.
- `app/components/LessonSlides.vue`: studentenpresentatie, navigatie en printweergave.
- `app/components/LessonText.vue`: gedeelde opmaak van lestekst.
- `app/content/lessen.nl.ts` en `.en.ts`: interface en weeklabels.

De lokale API controleert loopbackverbinding, host en bij schrijven ook de origin.
De review-API kan alleen reviews voor bekende lessen opslaan. De werkplek-API
kan uitsluitend `ACTIES.md` herschrijven, met conflictcontrole en atomair opslaan.
Lesbronnen en concepten worden niet via de API herschreven. Deel de ontwikkelserver niet via een publieke tunnel.

```bash
npm run test:lessons
npm run build
```

Controleer daarnaast desktop en mobiel, zoeken, week- en lesnavigatie, taalwissel,
inhoudsopgave, opslaan/herladen en de docentnotities. De productieserver moet voor
`/ontwikkeling`, alle subroutes, `/lessen`, `/review/lessen`, `/__development` en
`/__lesson-review` een 404 geven; lesgegevens en docentnotities mogen niet in
het productie-HTML of de JavaScript-bundels staan.

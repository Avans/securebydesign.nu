# Inhoudelijke beoordeling week 2

**Peildatum: 29 september 2026.** Beoordeling van `w2b1.md`, `w2b1-ex.md` en `w2b1-opl.md`, getoetst aan W2B1 in `app/content/fundament.nl.ts` en de didactische afspraken in `AGENTS.md`. Dit is feedback op het concept, geen goedkeuring van les of antwoordmodel. De oorspronkelijke lesteksten zijn niet herschreven.

## Eindoordeel

**Bruikbare inhoudelijke basis voor blok 1, nog niet gereed als complete les.** Het materiaal sluit goed aan op aanvallersdenken, motieven, toegang en impact. Er zit een concrete persona-oefening bij. De grootste verbeterpunten zijn de omvang, het zichtbaar voordoen van de redeneerstappen, de onderbouwing van risico-inschattingen en enkele onjuiste of te stellige formuleringen.

Dit is geen beoordeling van negen uitgewerkte week-2-lessen: alleen voor B1 zijn lesbestanden aanwezig. Voor B2–B9 bestaan websitebeschrijvingen en deels ondersteunende werkvormen, maar geen volledige reeks lesdecks in deze map.

## Inventaris en zichtbaarheid

| Bron | Aangetroffen | Status |
|---|---|---|
| [w2b1.md](w2b1.md) | 52 zichtbare slides, inclusief een tweede deel over persona’s | STATUS.txt noemt bèta en te veel slides |
| [w2b1-ex.md](w2b1-ex.md) | Vier onderdelen, met 5 + 10 + 5 = 20 minuten oefentijd | STATUS.txt noemt alfa, nog niet gereviewd |
| [w2b1-opl.md](w2b1-opl.md) | Vijf onderdelen met voorbeeldpersona’s en een risicorangschikking | Docentantwoordmodel, nog inhoudelijk aan te scherpen |

**Waarom de presentatie ontbrak:** de omzetter selecteerde alleen bestandsnamen zoals `w2b1-onderwerp.md`. De hoofdles heet `w2b1.md`. De selectie ondersteunt nu ook deze korte naam. Het deck is als concept vindbaar via [week 2](/ontwikkeling/lessen/week-2) en [blok 1](/ontwikkeling/lessen/week-2/blok-1).

Losse `-ex.md`- en `-opl.md`-bestanden blijven buiten de automatische studentlesselectie. Ze zijn via de lokale rubriek ‘Overige bestanden’ te raadplegen. Deze beoordeling staat daar ook. De zichtbaarheid van het concept betekent geen inhoudelijke goedkeuring. Een draaiende server moet gewijzigde tooling opnieuw laden.

## Wat behouden kan blijven

- De hoofdvraag ‘wie wil wat bereiken, via welke toegang en met welke schade?’ sluit aan op de bedoelde opbrengst van W2B1.
- De voorbeelden verbinden techniek met belangen, geld, gedrag en organisatie. Dat is bruikbaar voor de gemengde doelgroep.
- De oefening levert een concreet product op: persona’s en aanvalsscenario’s.
- De discussie over toestemming maakt ruimte voor ethische afwegingen. Beoordeel daar vooral mandaat, scope en handelen, niet alleen het juiste ‘hat’-label.
- De impactcategorieën maken gevolgen voor de bedrijfsvoering bespreekbaar. Koppel die terug aan de assets en BIV uit week 1.

## Bevindingen op volgorde van belang

Regelnummers verwijzen naar de beoordeelde bronversie. Gebruik na wijzigingen ook de onderdeeltitel om de juiste plek terug te vinden.

| Prioriteit | Vindplaats | Bevinding | Aanpassing vóór gebruik |
|---|---|---|---|
| Hoog | w2b1.md, titel; slide 39 ‘Persona Non Grata’ | 52 slides, twee sets leerdoelen en meerdere samenvattingen. De bron noemt 45 minuten, het roosterblok is 90 minuten. De losse oefening vraagt daarnaast 20 minuten. | Maak één leslijn met een expliciet tijdplan. Als 45 minuten alleen uitleg is, benoem de rest van het blok. Kort herhaling in voordat extra materiaal wordt toegevoegd. |
| Hoog | Slide 34 ‘Casus’, regel 536 | ‘Een ziekenhuis wordt getroffen door ransomware’ geeft geen feiten over actor, toegang of kwetsbaarheid. Studenten kunnen de gevraagde antwoorden dus niet vaststellen. | Geef aanvullende fictieve casusfeiten of vraag expliciet om hypothesen, ontbrekend bewijs en onderzoeksvragen. Beloon geen verzonnen zekerheid. |
| Hoog | Slide 35–36, commentaar vanaf regel 568; slide 49 | Een threat-modelvoorbeeld staat in verborgen commentaar. Het zichtbare persona-voorbeeld op slide 49 somt wel velden op, maar toont onvoldoende hoe een casusfeit tot een keuze leidt. Een gezamenlijke variant ontbreekt. | Werk eerst één rij zichtbaar uit met feiten en aannames, laat samen een gewijzigde situatie invullen en gebruik daarna een andere situatie voor zelfstandig werk. |
| Hoog | w2b1-opl.md, ‘Risicoranking’, regel 72 | De vaste rangorde cybercrimineel, insider, natiestaat is niet afleidbaar uit de korte hogeschoolcasus. Gegevens over blootstelling, bescherming, onderzoekswaarde en incidenten ontbreken. | Gebruik een voorbeelduitwerking met expliciete aannames. Accepteer andere beargumenteerde rangordes en voeg beoordelingscriteria toe. |
| Hoog | w2b1.md, slides 43–47 | Generieke labels zoals ‘laag tot gemiddeld’ voor script kiddies of ‘hoog’ voor cybercriminelen koppelen risico aan een actorcategorie zonder concreet scenario. | Beoordeel risico per asset en scenario, met kans, impact, bestaande maatregelen en onzekerheid. Een vaardigheidslabel is geen risicoscore. Zie NIST hieronder. |
| Hoog | Slide 26 ‘Het Dark Web’, regel 418 | De definitie op basis van niet-vindbaarheid via zoekmachines onderscheidt dark web onvoldoende van andere niet-geïndexeerde inhoud. | Leg uit dat toegang via specifieke netwerken/software verloopt. Gebruik Tor-oniondiensten als concreet voorbeeld, zonder al het dark web met Tor gelijk te stellen. |
| Midden | Slide 23 ‘Van kwetsbaarheid naar exploit’, regel 374 | ‘Risico ontstaat pas wanneer deze samenkomen’ maakt risico afhankelijk van motief/toegang/kans van slagen en verwart mogelijke schade met feitelijke exploitatie. | Beschrijf risico als inschatting van mogelijke nadelige gevolgen en waarschijnlijkheid. Beperk de aanvalsketen expliciet tot dit type opzettelijke aanval. |
| Midden | Slides 16–17 ‘Toegangspunten’ / ‘Aanvalsoppervlak’ | Losse toegangspunten worden ‘attack surfaces’ genoemd. Het aanvalsoppervlak omvat de verzameling mogelijkheden om binnen te komen, effect te veroorzaken of data uit te voeren. | Maak onderscheid tussen één toegangspunt en het totale aanvalsoppervlak. Laat dat zien in dezelfde casus. |
| Midden | Slides 18–19 en 49 | ‘De mens’ als populairste toegangspunt en ‘geen MFA’ als route naar ransomware zijn te stellig of slaan stappen over. | Beschrijf de specifieke keten: bericht, interactie, accounttoegang, rechten en vervolghandeling. Geen MFA kan een ontbrekende beschermingslaag zijn, maar verklaart niet zelfstandig de hele aanval. |
| Midden | Slides 11, 18, 25, 31 en 48 | Vergelijkende uitspraken en historische voorbeelden hebben geen bron/context, waaronder ‘meest voorkomende’, doorverkoop, reputatieschade en ‘BND-affaire’. | Onderbouw precies met een passende bron en datum of formuleer als mogelijkheid. Werk historische voorbeelden uit of laat ze weg. Ze zijn in deze beoordeling niet afzonderlijk geverifieerd. |
| Midden | w2b1-ex.md, ‘Deel 1’, regel 15 | De opdracht vraagt vijf personakenmerken maar het invulformat bevat slechts persona, motivatie en doelwit. | Laat gevraagd resultaat en format overeenkomen, inclusief vaardigheden/middelen en aannames. |
| Midden | w2b1-ex.md, ‘Deel 3’, regel 63 | Detectiemoeilijkheid wordt als rangschikkingscriterium toegevoegd zonder uitleg over de relatie met kans en impact. | Leg uit hoe detectie de duur/gevolgen kan beïnvloeden of houd dit als afzonderlijke observatie. Voorkom een impliciete derde vermenigvuldigingsfactor. |
| Midden | Hele les en oefening | Wisseling tussen ziekenhuis, hogeschool en algemene voorbeelden. De aansluiting op de eerdere casus en assets blijft impliciet. | Kies één hoofdcasus en hergebruik bestaande assets. De open keuze over maakindustrie/Brainport vraagt eerst afstemming, geen stilzwijgende vervanging van Naaste. |
| Laag | Slide 42 ‘Bouwstenen van een Persona’ | `--` geeft onduidelijke subopsommingen; lange titel en wisselend taalgebruik (‘folien’, threat analysis, persona) verminderen rust. | Gebruik geldige Markdown-opsommingen, een korte titel en consistente termen. Controleer de slides op mobiel en in volledig scherm. |

## Voorstel voor een lesblok van 90 minuten

Dit is een herontwerpvoorstel, geen wijziging van de bestaande lestekst of een vastgesteld rooster.

| Tijd | Activiteit | Resultaat |
|---|---|---|
| 0–10 | Assets/BIV ophalen uit week 1, hoofdcasus introduceren | Gedeeld vertrekpunt |
| 10–25 | Eén scenario voordoen: feit, actorhypothese, toegang, kwetsbaarheid, gevolg | Zichtbaar ingevulde rij met aannames |
| 25–35 | Samen een variant vergelijken, bijvoorbeeld beperkter accountrecht | Uitleg waarom gevolg of waarschijnlijkheid verandert |
| 35–50 | Compacte uitleg actor/motief, toestemming en aanvalsoppervlak | Begrippen gekoppeld aan het voorbeeld |
| 50–70 | Bestaande persona-oefening, aangescherpt met casusfeiten | Drie onderbouwde scenario’s |
| 70–85 | Vergelijken en feedback, verschillen in aannames bespreken | Verbeterde onderbouwing in plaats van één verplichte rangorde |
| 85–90 | Individuele exitvraag en opbrengst bewaren | Controle op begrip en overdracht naar B2 |

Samen 90 minuten. Richtwaarde voor herontwerp: circa 18–24 functionele slides in plaats van 52. Dit is geen norm op zichzelf: voorbeelden en oefentijd bepalen de benodigde omvang. Dark-webdetails en de lange catalogi kunnen als naslag blijven of naar een passend later blok verhuizen; stem dat af met B2, B4 en B5 om dubbeling te voorkomen.

## Acties en acceptatie

De uitvoerbare taken staan onder **WK-04a t/m WK-04d in ACTIES.md**. Voor afronding moeten:

1. De inhoudelijke begripsproblemen hierboven zijn opgelost en empirische claims zijn onderbouwd of afgezwakt.
2. Les, oefening en docenthulp één samenhangende casus en dezelfde formats gebruiken.
3. Voordoen, samen proberen en zelfstandig toepassen zichtbaar zijn, met passende docentnotities.
4. Het volledige blok inclusief nabespreking binnen 90 minuten passen, met transparante status van de genoemde 45 minuten.
5. Een reviewer de actuele Markdown-versie controleren. Het oorspronkelijke STATUS.txt blijft de statusmelding van de auteur en is hier niet als ‘goedgekeurd’ gewijzigd.

## Bronnen voor de begripscontrole

- [NIST: attack surface](https://csrc.nist.gov/glossary/term/attack_surface): aanvalsoppervlak omvat de mogelijke grenspunten voor toegang, effecten en gegevensuitvoer.
- [NIST: risk](https://csrc.nist.gov/glossary/term/risk): risico hangt doorgaans samen met nadelige impact en waarschijnlijkheid, binnen een beschreven context. Dit ondersteunt geen vaste risicorangorde op basis van alleen een actorlabel.
- [Tor Project: onion services](https://support.torproject.org/tor-browser/features/onion-services/): oniondiensten zijn alleen via het Tor-netwerk bereikbaar. Zoekmachine-indexering is daarvoor geen beslissend criterium.

Bronnen geraadpleegd op 29 september 2026. Dit is een didactische en inhoudelijke conceptreview, geen volledige verificatie van alle genoemde incidenten of juridische uitspraken.

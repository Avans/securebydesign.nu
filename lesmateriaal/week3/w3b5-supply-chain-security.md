---
marp: true
theme: default
paginate: true
lang: nl
title: "W3 · blok 5 — Supply chain security"
description: "Welke afhankelijkheden bepalen onze veiligheid?"
---

# Supply chain security

## Welke afhankelijkheden bepalen onze veiligheid?

**Week 3 · blok 5** · Governance & organisatie · les
90 minuten

<!--
⏱ 0–2. Leg de voorbereide tekeningen naast de assetnummers uit week 1. Vandaag kijken we waar Naaste afhankelijk is van partijen en diensten buiten het eigen team.

De valkuil is een netwerkplaat waarop de techniek klopt maar niemand weet wie belt als iets misgaat. B5 voegt fictieve afhankelijkheden toe aan de casus. Laat die als aannames zichtbaar staan, zodat de kaart geen schijnzekerheid geeft.
--> 

---

## Na dit blok kun je

1. een ketenkaart maken met data, toegang en dienstverlening;
2. een leverancier onderscheiden van een softwarecomponent;
3. uitleggen wat een SBOM helpt beantwoorden;
4. voor een kritieke afhankelijkheid een controle- en terugvalafspraak maken.

<!--
⏱ 2–4. Vraag een student een afhankelijkheid te noemen die geen kabel of server is. Denk aan een contactpersoon, een afspraak of informatie die op tijd moet aankomen.

Daar zit de breedte van dit blok. Bij de afsluiting moet ieder kunnen uitleggen welk probleem een ketenafspraak oplost.
--> 

---

## Vandaag

| Tijd | Onderdeel |
|---|---|
| 0–25 | Casus, uitleg en uitgewerkt voorbeeld |
| 25–65 | Zelf toepassen en testen in casusteams |
| 65–85 | Terug & verdieping |
| 85–90 | Afsluiting |

<!--
⏱ 4–5. B5 levert een ketenkaart én een afspraak op. Wijs beide aan: tekenen laat zien waar iets kan vastlopen; de afspraak moet duidelijk maken wat mensen dan doen.

In blok 9 moeten die afhankelijkheden naast eigenaarschap en respons passen. De kaart is dus invoer voor een besluit, geen eindproduct om mooi te maken.
--> 

---

## Deel 1 · Verhaal

### De app werkt, de medicatie-informatie veroudert

<!--
⏱ 5. Overgang. Laat een student de route van apotheek naar verzorgende vertellen. Vraag waar informatie kan vastlopen, zonder de volgende slide al uit te leggen.
--> 

---

## Een onzichtbare schakel

De app is bereikbaar. Toch toont het medicatieoverzicht gegevens van gisteren.

De bouwer meldt: “Onze server is beschikbaar.”

Welke belofte aan de verzorgende blijft onvervuld?

<!--
⏱ 5–10. Vraag eerst: “De server reageert. Kan de verzorgende nu haar werk doen?” Laat studenten zelf het verschil tussen een werkende app en bruikbare informatie verwoorden.

Verwacht actualiteit en betrouwbaarheid van informatie. Maak het onderscheid tussen beschikbaarheid van een server en bruikbare dienstverlening. Er hoeft geen aanvaller te zijn. Zorginhoudelijke beslissingen horen bij bevoegde zorgprofessionals, de opdracht gaat over de informatieketen.

Als iemand meteen een aanvaller noemt, vraag je welk casusfeit daarop wijst. Een keten kan ook zonder aanval onveilig functioneren.
--> 

---

## Voordoen · De route van medicatiegegevens

**Apotheek → koppeling → Naaste-app → verzorgende**

| Verbinding | Wat gaat erover? | Wat kan misgaan? |
|---|---|---|
| Apotheek → app | Gegevens: A2, medicatie | Oude informatie lijkt actueel |
| Hosting → app | Dienst: bereikbaarheid | App is niet bereikbaar |
| Bouwer → app | Toegang voor onderhoud | Onbedoelde wijziging |

De eerste storing kan bestaan terwijl de hosting goed werkt.

<!--
⏱ 10–15. Teken de eerste route hardop na. Ik begin bij de informatie die de verzorgende nodig heeft en werk terug naar de bron. Aan elke pijl geef ik betekenis: data, dienst of toegang. Zo wordt duidelijk waarom een groene serverstatus mijn eerste probleem niet oplost.

Laat een student aanwijzen welke pijl in de openingssituatie onderzocht moet worden. Er is nog geen bewijs welke partij de storing veroorzaakt; de kaart laat de afhankelijkheid zien. Maak het verschil tussen vaststaande casusrelaties en getekende technische vereenvoudigingen expliciet.

Laat iemand de route navertellen zonder technisch jargon. De gevolgkolom verklaart waarom de verbinding op de kaart staat; alleen namen en pijlen zijn niet genoeg. We werken één afspraak voor deze route voor en laten de overige verbindingen aan de teams.
-->

---

## Voordoen · Een afspraak bij verouderde informatie

**Oefenafspraak voor A2; kanaal en tijden zijn fictief.**

| Onderdeel | Uitwerking |
|---|---|
| Signaal en eigenaar | Geen verwachte update: zorgteamleider laat actualiteit beoordelen |
| Contact | Coördinator meldt laatste update via afgesproken leverancierskanaal |
| Bewijs | Ticket met tijdstip, ontvangst en herstelbevinding |
| Escalatie | Na 15 minuten geen ontvangst: coördinator belt vervangend contact |
| Terugval | Teamleider schakelt bevoegde zorgprofessional en afgesproken zorgroute in |
| Controle | Bouwer toont nieuwe update; teamleider laat bruikbaarheid beoordelen |

Een bereikbare server alleen sluit het ticket niet.

<!--
⏱ 15–20. Verbind de storing stap voor stap aan een afspraak. De verbinding levert gegevens, dus herstelbewijs moet iets over gegevensactualiteit zeggen. Een serverping beantwoordt een andere vraag. Denk hardop voor waarom eigenaar, contact en bewijs nodig zijn.

De vijftien minuten zijn een demonstratienorm, geen veilige universele termijn of wettelijke eis. Bij urgente gevolgen moet passende escalatie eerder kunnen. De zorgroute en bevoegdheden moeten echt worden afgesproken voordat deze tekst een uitvoerbare procedure is; studenten geven geen medicatieadvies. Zeg welke onderdelen van dit voorbeeld nog lokale invulling vragen.

Benoem ook de grens van de ketenkaart: een bouwer kan onderaannemers inschakelen. Welke kopieën en toegangen daar bestaan is een informatievraag. De testhoster op B5 is een fictieve uitbreiding, geen vastgesteld extra casusfeit. Teams onderzoeken straks wie ontbrekende informatie opvraagt.
-->

---

## Samen proberen · Een kwetsbaar onderdeel

Een **SBOM** beschrijft softwareonderdelen en hun relaties. Dit is alleen een fictief conceptvoorbeeld uit B5:

| Onderdeel | Versie | Gebruikt door |
|---|---|---|
| BerichtModule | 1.8 | Naaste-app |
| KoppelClient | 3.2 | Naaste-app |

De bouwer meldt een mogelijke kwetsbaarheid in **BerichtModule 1.8**.

Wat kun je aanwijzen? Wat weet je nog niet? Vul samen één controlevraag aan voordat je herstel kiest.

<!--
⏱ 20–25. Laat de klas eerst het genoemde onderdeel vinden. Vraag daarna of zij nu kan zeggen dat Naaste is aangevallen. Verwacht van sommigen een te snelle conclusie: versieherkenning ondersteunt onderzoek, geen bewijs van misbruik.

Laat gezamenlijk één vraag formuleren over de gebruikte configuratie en één over controle na vervanging. Een gerepareerde versie is volgens B5 beschikbaar, maar of de configuratie geraakt wordt is onbekend. De volledige scenario-uitwerking blijft teamwerk. Vergelijk met de medicatieroute: opnieuw vraagt herstel om passend bewijs, maar hier gaat het om een softwarecomponent.

De kleine tabel is geen volledige of standaardconforme SBOM. Bron: https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-supply-chain-security-guidance-20. Een onderdelenlijst beschrijft componenten; een ketenkaart bevat daarnaast partijen, diensten en gegevens. Laat een niet-technische student dat verschil teruggeven.
-->

---

## Deel 2 · Aan het werk

### De keten van Naaste

<!--
⏱ 25. Overgang naar B5. Laat een niet-technische student de legenda uitleggen en een technische student de verbindingen controleren. Beiden moeten de kaart kunnen gebruiken.
--> 

---

## Ronde 1 · De ketenkaart

Teken Naaste, de bouwer, de apotheek, hosting, verzorgenden en mantelzorgers.

Voeg per verbinding toe:
- data, toegang of dienst;
- betrokken asset;
- gevolg van uitval of misbruik.

Gebruik de voorgedane medicatieroute als begin en werk de overige verbindingen zelf uit. Markeer minstens twee onbekende schakels.

<!--
⏱ 25–40. Vijftien minuten tekenen. Laat teams A1–A6 gebruiken, zodat de relatie met het eigen canvas leesbaar blijft. Een nieuwe naam voor hetzelfde asset maakt de overdracht onnodig lastig.

De bekende partijen staan in de basiscasus. De extra testhoster en gebruikte componenten staan alleen op B5 als oefenuitbreiding. Laat de map leesbaar blijven met een eenvoudige legenda. Bij twijfel wordt een verbinding als aanname gemarkeerd, niet weggepoetst.

Loop langs met: “Waar komt deze verbinding vandaan?” Laat bekende feiten en oefenaannames verschillend markeren; de legenda is onderdeel van de redenering.
--> 

---

## Ronde 2 · Twee verstoringen

Kies één scenario per duo:

**A:** de bouwer meldt een mogelijk kwetsbaar softwareonderdeel.

**B:** de apotheekkoppeling levert geen nieuwe gegevens.

Welke informatie vraag je op, wie beslist en welke terugvalroute heb je nodig?

<!--
⏱ 40–55. Laat de duo’s eerst aanwijzen welke informatie vaststaat en welke conclusie nog te vroeg komt. Pas daarna kiezen ze een handeling.

Geef de feiten uit B5. Bij scenario A zijn component en versie bekend, maar exploitatie en blootstelling niet. Een bekende kwetsbaarheid bewijst nog geen inbraak. Bij B mag het team geen medicatieadvies geven: zij ontwerpen het signaleren van veroudering en de route naar bevoegde zorgverleners. Laat beide duo’s vijf minuten hun antwoord uitleggen.

Bij scenario A vraag je: “Wat moet je nog weten over deze toepassing?” Bij B: “Wie moet merken dat informatie verouderd is?” Zo blijft elk scenario bij zijn eigen probleem.
--> 

---

## Ronde 3 · Een ketenafspraak

Kies een andere verbinding dan de voorgedane medicatieroute, bijvoorbeeld onderhoudstoegang of de testhoster. Vul in:

**afspraak · eigenaar · bewijs · controle · escalatie · terugval**

Test: blijft de afspraak bruikbaar als de vaste contactpersoon van de leverancier afwezig is?

<!--
⏱ 55–65. Een afspraak moet op een lastig moment bruikbaar zijn. Neem “de leverancier is verantwoordelijk” en vraag wie dan concreet wat doet als de app op zaterdag vastloopt.

Voorbeeld: incidentcontact met vervanger en geverifieerde bereikbaarheid. Een formulering als “leverancier is verantwoordelijk” mist wat die doet en hoe Naaste dat controleert. Laat een termijn onderbouwen als oefenkeuze. In de praktijk moeten contracten en wettelijke termijnen daarop worden afgestemd.

Laat een ander team de afspraak lezen en de volgende stap aanwijzen. Wat de makers mondeling moeten aanvullen, hoort nog op B5.
--> 

---

## Deel 3 · Terug & verdieping

### Wat besteedt Naaste uit?

<!--
⏱ 65. Overgang. Twee teams vergelijken dezelfde afhankelijkheid. Vraag eerst naar hun aannames voordat je verschillende maatregelen bespreekt.
--> 

---

## Contract en uitvoering

“De leverancier meldt incidenten direct.”

Wat ontbreekt nog om deze afspraak te laten werken?

Denk aan aanleiding, bereikbaar kanaal, inhoud van de melding en opvolging bij Naaste.

<!--
⏱ 65–75. Vergelijk een nette contractzin met wat een medewerker in het weekend nodig heeft. Laat studenten het ontbrekende stukje zelf benoemen.

Oogst ook de vraag wie een melding ontvangt tijdens een weekend en hoe Naaste de afspraak oefent. Verbind met B1 en B3. Een contractuele afspraak kan verantwoordelijkheden verdelen, maar beëindigt niet automatisch de eigen verplichtingen van Naaste. Een contacttest is een eenvoudige controle die studenten kunnen ontwerpen zonder een echte leverancier te bellen.

De verbinding met B3 is de controle: hoe merk je of de afspraak nog werkt? Laat één team een uitvoerbare contacttest beschrijven en een ander benoemen wie de uitkomst opvolgt.
--> 

---

## Zonder je aantekeningen

1. Welke vraag helpt een SBOM beantwoorden?
2. Waarom is “server bereikbaar” onvoldoende bij A2?
3. Welke afhankelijkheid op jullie kaart heeft nog geen eigenaar?

**Uitgangskaart:** één controleerbare afspraak met een ketenpartner.

<!--
⏱ 75–85. Begin individueel. Laat bij de onderdelenlijst zowel één bruikbaar gegeven als één onbeantwoorde vraag opschrijven.

Verwacht: gebruikte componenten en versies, actuele en juiste gegevens zijn ook nodig, concreet benoemde eigenaar. Vraag expliciet wat de onderdelenlijst niet vertelt: bijvoorbeeld of een kwetsbaarheid in deze configuratie misbruikbaar is. Bewaar één open vraag als input voor de governancekaart.

Vraag een student zijn ketenafspraak te verbinden met een eigenaar uit B1. Een partij buiten Naaste noemen is nog niet genoeg om de eigen opvolging te organiseren.
--> 

---

## Deel 4 · Afsluiting

<!--
⏱ 85. Overgang. Ketenkaart en ketenafspraak horen bij elkaar; laat beide klaarzetten om te bewaren.
-->

---

## Voor het volgende blok

**Team:** bewaar ketenkaart en ketenafspraak B5.

**Individueel, 20 minuten:** kies één handeling die een medewerker bij Naaste veilig moet kunnen uitvoeren. Beschrijf wat hem daarin helpt en wat hem belemmert.

Begrippen: afhankelijkheid, onderaannemer, SBOM, leveranciersafspraak, terugval.

<!--
⏱ 85–89. B5 bewaren met teamnaam en bloknummer: kaart, afspraak en resterende vragen. Laat een student aanwijzen welke afhankelijkheid nu een duidelijkere eigenaar of vervolgstap heeft.

Voor blok 6 beschrijft ieder in twintig minuten buiten deze les één veilige handeling, met wat helpt en belemmert. Maak de brug expliciet: de ketenafspraak moet straks ook voor de medewerker uitvoerbaar zijn.
--> 

---

## Materiaal & bronnen

- [NIST, SBOM](https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-supply-chain-security-guidance-20)
- [NCSC, Cbw](https://www.ncsc.nl/cyberbeveiligingswet-nis2/meldplicht)
- [Werkbladen week 3](werkbladen-week3.md)
- [Casus en oefenafspraken](casus-naaste-week3.md)

<!--
⏱ 89–90. Wijs de kaart en de scenario’s aan. Laat de verbinding met de eigen assets zichtbaar blijven: dezelfde zorgnotitie is ook buiten Naaste nog A1.

Vóór de les klaarleggen en controleren: Print B5 met scenario’s en onderdelenlijst. Leg A1–A6 zichtbaar neer. Niemand onderzoekt echte leveranciers of systemen.

Bronpeildatum van deze les: 7 september 2026. Voorbeelden en oefennormen zijn fictief, tenzij expliciet als bronfeit aangeduid. Antwoorden staan waar nodig in deze notities en in de docenthandleiding.
--> 

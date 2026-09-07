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
⏱ 0–2. Gebruik de tekeningen uit blok 4. Houd de assetnummers uit week 1 aan. De afhankelijkheden op werkblad B5 zijn fictieve uitbreidingen van Naaste. Laat aannames zichtbaar naast de kaart staan.
--> 

---

## Na dit blok kun je

1. een ketenkaart maken met data, toegang en dienstverlening;
2. een leverancier onderscheiden van een softwarecomponent;
3. uitleggen wat een SBOM helpt beantwoorden;
4. voor een kritieke afhankelijkheid een controle- en terugvalafspraak maken.

<!--
⏱ 2–4. Laat studenten het leerdoel aanwijzen dat ze al deels beheersen. Vraag om een voorbeeld, niet alleen een hand. De opdracht en de afsluitende vragen controleren deze doelen.
--> 

---

## Vandaag

| Tijd | Onderdeel |
|---|---|
| 0–25 | Verhaal, terugblik en begrippen |
| 25–65 | Aan het werk in casusteams |
| 65–85 | Terug & verdieping |
| 85–90 | Afsluiting |

<!--
⏱ 4–5. Benoem de opbrengst en waar die in blok 9 terugkomt. De tijdvakken bij de docentnotities zijn leidend. Overgangen op één tijdstip nemen geen extra minuten in beslag.
--> 

---

## Deel 1 · Verhaal

### De app werkt, de medicatie-informatie veroudert

<!--
⏱ 5. Laat iemand de route van apotheek naar verzorgende vertellen. Vraag op welk punt de informatie kan vastlopen.
--> 

---

## Een onzichtbare schakel

De app is bereikbaar. Toch toont het medicatieoverzicht gegevens van gisteren.

De bouwer meldt: “Onze server is beschikbaar.”

Welke belofte aan de verzorgende blijft onvervuld?

<!--
⏱ 5–10. Verwacht actualiteit en betrouwbaarheid van informatie. Maak het onderscheid tussen beschikbaarheid van een server en bruikbare dienstverlening. Er hoeft geen aanvaller te zijn. Zorginhoudelijke beslissingen horen bij bevoegde zorgprofessionals, de opdracht gaat over de informatieketen.
--> 

---

## Drie verbindingen

| Verbinding | Voorbeeld bij Naaste |
|---|---|
| Gegevens | Apotheek levert medicatiegegevens |
| Toegang | Bouwer kan onderhoud uitvoeren |
| Dienst | Hosting houdt de toepassing bereikbaar |

Teken bij elke verbinding wat misgaat als zij uitvalt of misbruikt wordt.

<!--
⏱ 10–15. Laat de kaart breder worden dan een netwerkdiagram. De mantelzorger, de helpdesk en de contactpersoon van de leverancier horen ook bij het proces. Een technische student mag protocollen toevoegen, maar moet de betekenis in gewone taal blijven uitleggen.
--> 

---

## Afhankelijkheid en vertrouwen

Een leverancier kan weer andere partijen inschakelen.

Vragen voor Naaste:
- Waar staan kopieën van gegevens?
- Wie kan erbij?
- Wie meldt een incident aan wie?
- Wie kan een kwetsbare component vervangen?
- Hoe werkt de zorg als een dienst uitvalt?

<!--
⏱ 15–20. Teken zelf één onbekende achter de bouwer, bijvoorbeeld de testhoster. Zeg expliciet dat dit een oefenaanname is. De ketenkaart maakt zichtbaar waar vragen nodig zijn, niet dat iedere onbekende leverancier onveilig is. Bespreek welke afspraak doorgegeven moet worden aan onderaannemers.
--> 

---

## SBOM: softwareonderdelen in beeld

Een **Software Bill of Materials** beschrijft softwarecomponenten en hun onderlinge relaties.

Daarmee kun je gericht onderzoeken of een gemelde kwetsbaarheid een gebruikt onderdeel raakt.

Daarna zijn nog beoordeling, herstel en controle nodig.

<!--
⏱ 20–25. Bron: https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-supply-chain-security-guidance-20. Vergelijk dit met een onderdelenlijst, zonder te suggereren dat de lijst ook kwaliteit garandeert. Laat een student het onderscheid met de ketenkaart benoemen: componenten versus bredere relaties, mensen, diensten en gegevens. Op B5 staat een kleine fictieve onderdelenlijst, geen volledige standaardconforme SBOM.
--> 

---

## Deel 2 · Aan het werk

### De keten van Naaste

<!--
⏱ 25. Iedereen gebruikt B5. Laat een niet-technische student de legenda uitleggen en een technische student controleren of de verbindingen logisch zijn.
--> 

---

## Ronde 1 · De ketenkaart

Teken Naaste, de bouwer, de apotheek, hosting, verzorgenden en mantelzorgers.

Voeg per verbinding toe:
- data, toegang of dienst;
- betrokken asset;
- gevolg van uitval of misbruik.

Markeer minstens twee onbekende schakels.

<!--
⏱ 25–40. De bekende partijen staan in de basiscasus. De extra testhoster en gebruikte componenten staan alleen op B5 als oefenuitbreiding. Laat de map leesbaar blijven met een eenvoudige legenda. Bij twijfel wordt een verbinding als aanname gemarkeerd, niet weggepoetst.
--> 

---

## Ronde 2 · Twee verstoringen

Kies één scenario per duo:

**A:** de bouwer meldt een mogelijk kwetsbaar softwareonderdeel.

**B:** de apotheekkoppeling levert geen nieuwe gegevens.

Welke informatie vraag je op, wie beslist en welke terugvalroute heb je nodig?

<!--
⏱ 40–55. Geef de feiten uit B5. Bij scenario A zijn component en versie bekend, maar exploitatie en blootstelling niet. Een bekende kwetsbaarheid bewijst nog geen inbraak. Bij B mag het team geen medicatieadvies geven: zij ontwerpen het signaleren van veroudering en de route naar bevoegde zorgverleners. Laat beide duo’s vijf minuten hun antwoord uitleggen.
--> 

---

## Ronde 3 · Een ketenafspraak

Vul voor de kritischste verbinding in:

**afspraak · eigenaar · bewijs · controle · escalatie · terugval**

Test: blijft de afspraak bruikbaar als de vaste contactpersoon van de leverancier afwezig is?

<!--
⏱ 55–65. Voorbeeld: incidentcontact met vervanger en geverifieerde bereikbaarheid. Een formulering als “leverancier is verantwoordelijk” mist wat die doet en hoe Naaste dat controleert. Laat een termijn onderbouwen als oefenkeuze. In de praktijk moeten contracten en wettelijke termijnen daarop worden afgestemd.
--> 

---

## Deel 3 · Terug & verdieping

### Wat besteedt Naaste uit?

<!--
⏱ 65. Laat twee groepen dezelfde afhankelijkheid vergelijken. Verschillende maatregelen kunnen logisch zijn als hun aannames verschillen.
--> 

---

## Contract en uitvoering

“De leverancier meldt incidenten direct.”

Wat ontbreekt nog om deze afspraak te laten werken?

Denk aan aanleiding, bereikbaar kanaal, inhoud van de melding en opvolging bij Naaste.

<!--
⏱ 65–75. Oogst ook de vraag wie een melding ontvangt tijdens een weekend en hoe Naaste de afspraak oefent. Verbind met B1 en B3. Een contractuele afspraak kan verantwoordelijkheden verdelen, maar beëindigt niet automatisch de eigen verplichtingen van Naaste. Een contacttest is een eenvoudige controle die studenten kunnen ontwerpen zonder een echte leverancier te bellen.
--> 

---

## Zonder je aantekeningen

1. Welke vraag helpt een SBOM beantwoorden?
2. Waarom is “server bereikbaar” onvoldoende bij A2?
3. Welke afhankelijkheid op jullie kaart heeft nog geen eigenaar?

**Uitgangskaart:** één controleerbare afspraak met een ketenpartner.

<!--
⏱ 75–85. Verwacht: gebruikte componenten en versies, actuele en juiste gegevens zijn ook nodig, concreet benoemde eigenaar. Vraag expliciet wat de onderdelenlijst niet vertelt: bijvoorbeeld of een kwetsbaarheid in deze configuratie misbruikbaar is. Bewaar één open vraag als input voor de governancekaart.
--> 

---

## Deel 4 · Afsluiting

<!--
⏱ 85. Overgang. Laat het teamresultaat opslaan en benoem de individuele voorbereiding.
-->

---

## Voor het volgende blok

**Team:** bewaar ketenkaart en ketenafspraak B5.

**Individueel, 20 minuten:** kies één handeling die een medewerker bij Naaste veilig moet kunnen uitvoeren. Beschrijf wat hem daarin helpt en wat hem belemmert.

Begrippen: afhankelijkheid, onderaannemer, SBOM, leveranciersafspraak, terugval.

<!--
⏱ 85–89. Laat ieder team zijn bestand opslaan met teamnaam en bloknummer. De individuele voorbereiding valt buiten deze 90 minuten. Vraag één student hardop te benoemen welke open vraag nog meegaat.
--> 

---

## Materiaal & bronnen

- [NIST, SBOM](https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-supply-chain-security-guidance-20)
- [NCSC, Cbw](https://www.ncsc.nl/cyberbeveiligingswet-nis2/meldplicht)
- [Werkbladen week 3](werkbladen-week3.md)
- [Casus en oefenafspraken](casus-naaste-week3.md)

<!--
⏱ 89–90. Voorbereiding docent: Print B5 met scenario’s en onderdelenlijst. Leg A1–A6 zichtbaar neer. Niemand onderzoekt echte leveranciers of systemen. Bronnen geraadpleegd op 7 september 2026. Voorbeelden en oefennormen zijn fictief, tenzij expliciet als bronfeit aangeduid. Antwoorden staan waar nodig in deze notities en in de docenthandleiding.
--> 

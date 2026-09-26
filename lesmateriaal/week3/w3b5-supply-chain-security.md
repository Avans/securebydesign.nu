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
| 0–25 | Verhaal, terugblik en begrippen |
| 25–65 | Aan het werk in casusteams |
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

## Drie verbindingen

| Verbinding | Voorbeeld bij Naaste |
|---|---|
| Gegevens | Apotheek levert medicatiegegevens |
| Toegang | Bouwer kan onderhoud uitvoeren |
| Dienst | Hosting houdt de toepassing bereikbaar |

Teken bij elke verbinding wat misgaat als zij uitvalt of misbruikt wordt.

<!--
⏱ 10–15. Laat iemand zonder technische achtergrond de route van één zorgnotitie navertellen. Een verbinding die hij niet kan uitleggen vraagt een duidelijker label.

Laat de kaart breder worden dan een netwerkdiagram. De mantelzorger, de helpdesk en de contactpersoon van de leverancier horen ook bij het proces. Een technische student mag protocollen toevoegen, maar moet de betekenis in gewone taal blijven uitleggen.

Je wilt drie soorten verbindingen herkenbaar houden, zonder de kaart vol te tekenen. Vraag bij elk extra detail wat de lezer erdoor kan besluiten.
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
⏱ 15–20. Hier is een vraagteken nuttiger dan een extra verzonnen bedrijfsnaam. Laat zien hoe je een onbekende afhankelijkheid tekent zonder haar als feit te presenteren.

Teken zelf één onbekende achter de bouwer, bijvoorbeeld de testhoster. Zeg expliciet dat dit een oefenaanname is. De ketenkaart maakt zichtbaar waar vragen nodig zijn, niet dat iedere onbekende leverancier onveilig is. Bespreek welke afspraak doorgegeven moet worden aan onderaannemers.

Vraag wie bij Naaste die informatie bij de bouwer kan ophalen. Dan wordt onzekerheid een uit te voeren actie in plaats van een vaag ongemak.
--> 

---

## SBOM: softwareonderdelen in beeld

Een **Software Bill of Materials** beschrijft softwarecomponenten en hun onderlinge relaties.

Daarmee kun je gericht onderzoeken of een gemelde kwetsbaarheid een gebruikt onderdeel raakt.

Daarna zijn nog beoordeling, herstel en controle nodig.

<!--
⏱ 20–25. Pak de fictieve onderdelenlijst uit B5 erbij en laat een student aanwijzen wat hij erop kan terugvinden. Vraag daarna wat hij nog steeds niet weet.

Bron: https://www.nist.gov/itl/executive-order-14028-improving-nations-cybersecurity/software-supply-chain-security-guidance-20. Vergelijk dit met een onderdelenlijst, zonder te suggereren dat de lijst ook kwaliteit garandeert. Laat een student het onderscheid met de ketenkaart benoemen: componenten versus bredere relaties, mensen, diensten en gegevens. Op B5 staat een kleine fictieve onderdelenlijst, geen volledige standaardconforme SBOM.

Als de klas de lijst als keurmerk behandelt, ga terug naar het verschil tussen weten welke onderdelen je hebt en weten hoe ze in deze toepassing functioneren.
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

Markeer minstens twee onbekende schakels.

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

Vul voor de kritischste verbinding in:

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

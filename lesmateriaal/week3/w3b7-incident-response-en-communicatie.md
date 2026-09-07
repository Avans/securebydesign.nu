---
marp: true
theme: default
paginate: true
lang: nl
title: "W3 · blok 7 — Incident response en communicatie"
description: "Handelen met onvolledige informatie"
---

# Incident response en communicatie

## Handelen met onvolledige informatie

**Week 3 · blok 7** · Governance & organisatie · les
90 minuten

<!--
⏱ 0–2. Gebruik incident-naaste-student.md en de docenthandleiding. Deze oefenversie maakt de tijdlijn van de bestaande breach-writeup consistent en laat onbewezen downloads open. Deel de docentuitwerking nog niet uit. De werkronde duurt 45 minuten, met vijf minuten transfer in de nabespreking.
--> 

---

## Na dit blok kun je

1. een incidenttijdlijn maken en feiten van vermoedens scheiden;
2. respons koppelen aan zorgcontinuïteit, bewijs en eigenaarschap;
3. een eerste bericht aan betrokkenen formuleren;
4. een post-mortemvraag vertalen naar een concrete verbeterafspraak.

<!--
⏱ 2–4. Laat studenten het leerdoel aanwijzen dat ze al deels beheersen. Vraag om een voorbeeld, niet alleen een hand. De opdracht en de afsluitende vragen controleren deze doelen.
--> 

---

## Vandaag

| Tijd | Onderdeel |
|---|---|
| 0–20 | Verhaal en eerste oordeel |
| 20–65 | Tijdlijn, analyse en communicatie in teams |
| 65–85 | Terug & verdieping, inclusief transfer |
| 85–90 | Afsluiting |

<!--
⏱ 4–5. Benoem de opbrengst en waar die in blok 9 terugkomt. De tijdvakken bij de docentnotities zijn leidend. Overgangen op één tijdstip nemen geen extra minuten in beslag.
--> 

---

## Deel 1 · Verhaal

### Een melding van buiten

<!--
⏱ 5. Laat studenten hun feit, vermoeden en vraag uit de voorbereiding naast elkaar leggen.
--> 

---

## Het eerste oordeel

Een onderzoeker meldt dat zorggegevens van Naaste zichtbaar zijn in een testomgeving.

Schrijf in één zin op wat volgens jou moet gebeuren. Leg die zin omgekeerd neer.

Wat moet je eerst weten om verder te beslissen?

<!--
⏱ 5–9. Neem twee vragen aan zonder het hele incident te vertellen. Een vraag naar de aard van de gegevens is bruikbaar. “Wie is de schuldige?” brengt het team nog niet bij een volgende handeling. Laat de eerste zinnen liggen tot de debrief.
--> 

---

## Respons als onderdeel van beheersing

De organisatie bereidt zich vooraf voor en leert tijdens en na incidenten.

Bij een incident gaat het om **detecteren, reageren en herstellen**.

Daarom liggen rollen, contacten en herstelafspraken al klaar vóór een melding.

<!--
⏱ 9–13. NIST SP 800-61r3 uit 2025 verbindt incidentrespons aan CSF 2.0. Bron: https://doi.org/10.6028/NIST.SP.800-61r3. Presenteer een oudere vierfasencyclus niet als de actuele NIST-indeling. Voor deze les gebruiken we eenvoudige werkvragen: wat weten we, wat beschermen we nu, wie beslist, wanneer beoordelen we herstel?
--> 

---

## De eerste respons

- Bevestig ontvangst en registreer tijdstippen.
- Beoordeel het signaal via een vertrouwde route.
- Beperk blootstelling en bescherm zorgcontinuïteit.
- Bewaar relevant bewijs waar dat veilig kan.
- Beoordeel meld- en communicatieverplichtingen.

<!--
⏱ 13–17. Deze activiteiten kunnen tegelijk lopen. Wacht met het stoppen van ernstige schade niet op een volledig bewijsdossier. Laat bevoegde specialisten afwegen hoe isoleren en vastleggen samen kunnen gaan. De les omvat geen onderzoek aan echte data of echte systemen. Koppel alle acties aan een verantwoordelijke rol.
--> 

---

## Een bruikbaar eerste bericht

Een eerste bericht geeft:

**wat bekend is, wat nog onbekend is, mogelijke gevolgen, genomen maatregelen, handelingsadvies en een contactpunt.**

Het noemt ook wanneer de volgende update komt.

<!--
⏱ 17–20. Benoem dat de tekst voor deze les een communicatie-oefening is. Een formele datalekmelding moet aan de toepasselijke eisen voldoen. Vermijd geruststelling die niet door feiten wordt gedragen. “We weten nog niet wie gegevens heeft ingezien” is informatie, mits het bericht ook zegt wat Naaste doet en waar mensen terechtkunnen. Bron voor de vereiste onderdelen: EDPB, zie bronnenlijst.
--> 

---

## Deel 2 · Aan het werk

### De tijdlijn en een eerste bericht

<!--
⏱ 20. Deel delen A en B van de studentcasus uit. B bevat zes kaartjes in gemengde volgorde. De volledige docentuitwerking blijft bij de docent.
--> 

---

## Ronde 1 · De tijdlijn

Leg de zes gebeurtenissen op volgorde.

Markeer:
1. begin van de blootstelling;
2. eerste externe melding;
3. bevestiging van het datalek;
4. beperking van de blootstelling;
5. informeren van betrokkenen.

Schrijf bij elk gat welke rol of afspraak ontbreekt.

<!--
⏱ 20–35. Laat teams tien minuten reconstrueren en vijf minuten de gaten duiden. In de oefenversie is 5 februari om 11:00 het expliciet bevestigde moment. Eerdere bekendheid is een beargumenteerde onderzoeksvraag. Gebruik geen slogan over “116 dagen” uit de website, want die past niet bij de gebeurtenissen van 3 november tot 11 februari.
--> 

---

## Ronde 2 · De ontwerpkeuze eronder

Bespreek:

- Hoe konden echte gegevens in deze omgeving belanden?
- Welke afspraak had dat moeten begrenzen?
- Wie had de werking van die afspraak kunnen controleren?

Noteer ook **één ding dat wel goed ging**.

<!--
⏱ 35–45. Verwacht testdata-afspraak, eigenaar van omgevingen, veilige meldroute en controle bij de bouwer. Goede respons: de omgeving gaat na bevestiging snel offline. Vermijd de conclusie dat phishingtraining bewezen effectief was omdat iemand een legitieme melding verwijderde. Benoem de begrijpelijke voorzichtigheid én de ontbrekende route.
--> 

---

## Ronde 3 · Bericht aan cliënten

Schrijf maximaal **120 woorden**, vanuit Naaste op **5 februari om 12:00**.

Gebruik alleen informatie die op dat moment bekend was.

Neem onzekerheid, mogelijke gevolgen, maatregelen, advies en contact op. Noem een volgende update.

<!--
⏱ 45–55. De context op deel A beschrijft welke gegevens en aantallen om 11:00 zijn bevestigd. De latere krant en melding bij de AP mogen niet als reeds gebeurd in het bericht staan. Een fictief kanaal mag als oefenvoorziening worden voorgesteld. Gebruik geen bestaand e-mailadres of telefoonnummer. Een voorbeeld staat alleen in de docenthandleiding.
--> 

---

## Ronde 4 · Lezerstest

Ruil de berichten. Lees als mantelzorger.

Kun je beantwoorden:
- kan dit mijn naaste raken?
- wat kan ik nu doen?
- wat weet Naaste nog niet?
- waar en wanneer krijg ik informatie?

Herstel één onduidelijke zin.

<!--
⏱ 55–65. Laat de lezer eerst zonder uitleg reageren. Beoordeel helderheid en feitelijkheid, niet wie de mooiste formulering heeft. Een diagnose, naam of concrete cliëntinformatie is nooit nodig in deze oefenmail.
--> 

---

## Deel 3 · Terug & verdieping

### De lessen achter het incident

<!--
⏱ 65. Laat de eerste oordelen weer omdraaien. Vraag wat de tijdlijn aan die eerste reactie heeft veranderd.
--> 

---

## De meldtermijn berekenen

**Oefenfeit:** uiterlijk 5 februari, 11:00 bestaat redelijke zekerheid over het datalek.

De AP-melding volgt op 8 februari, 17:00.

Hoeveel tijd is verstreken? Welke eerdere signalen moet je ook onderzoeken?

<!--
⏱ 65–72. Er zijn 78 uur verstreken, dus zes uur voorbij 72 uur, zelfs bij dit laatste bevestigde beginpunt. Bij eerdere bekendheid is de termijn eerder begonnen. Dit is geen keuze tussen twee even vrije startdata. Een te late melding vraagt uitleg en moet alsnog plaatsvinden. Of alle feiten juridisch voldoende waren op 22 januari of 4 februari vraagt nadere beoordeling. Bron: EDPB.
--> 

---

## Post-mortem en herstel

Kies één verbetering voor Naaste.

Noteer op B7:
**oorzaak of ontbrekende afspraak, maatregel, eigenaar, deadline, bewijs en vervolgcontrole.**

Welke voorwaarde moet gelden voordat een afgesloten omgeving weer in gebruik mag?

<!--
⏱ 72–80. Laat eerst vier minuten een verbeterafspraak schrijven en daarna vier minuten terugkoppelen. Herstel is niet alleen “de server draait”: toegang, gegevenskwaliteit, monitoring en passende zorgcontinuïteit moeten zijn beoordeeld. Kies voor het eigen scenario relevante criteria en een bevoegde beslisser. Neem geen medische procedure op.
--> 

---

## Zonder je aantekeningen

1. Waarom is afwezigheid van logs geen bewijs dat niemand data las?
2. Welke informatie hoort in een eerste bericht?
3. Wie controleert of de verbeterafspraak is uitgevoerd?

Bewaar één concrete afspraak voor het spel en blok 9.

<!--
⏱ 80–85. Vraag individuele antwoorden. Het eerste antwoord moet onderscheid maken tussen geen waarneming en geen gebeurtenis. Bij het derde antwoord volstaat niet “de organisatie”: laat een rol uit B1 noemen. Dit is tevens de vijf minuten transfer uit het oorspronkelijke lesvoorstel.
--> 

---

## Deel 4 · Afsluiting

<!--
⏱ 85. Overgang. Laat het teamresultaat opslaan en benoem de individuele voorbereiding.
-->

---

## Voor het volgende blok

**Team:** bewaar tijdlijn, bericht en verbeterafspraak B7.

**Individueel, 15 minuten:** lees de korte spelintroductie in w3b8-backdoors-en-breaches.md. Kies een rol waarin je minder vanzelfsprekend terechtkomt.

Begrippen: incidentrespons, bekendheid, containment, herstel, post-mortem.

<!--
⏱ 85–89. Laat ieder team zijn bestand opslaan met teamnaam en bloknummer. De individuele voorbereiding valt buiten deze 90 minuten. Vraag één student hardop te benoemen welke open vraag nog meegaat.
--> 

---

## Materiaal & bronnen

- [NIST SP 800-61r3](https://doi.org/10.6028/NIST.SP.800-61r3)
- [EDPB, datalekken](https://www.edpb.europa.eu/sme/assess-the-risks/data-breaches_en)
- [Oefencasus Naaste](incident-naaste-student.md)
- [Werkbladen week 3](werkbladen-week3.md)
- [Casus en oefenafspraken](casus-naaste-week3.md)

<!--
⏱ 89–90. Voorbereiding docent: Knip de zes gebeurteniskaartjes uit deel B of laat ze digitaal ordenen. Houd docenthandleiding-week3.md bij de hand. De websiteversie is achtergrond, niet het uitdeelvel voor deze les. Bronnen geraadpleegd op 7 september 2026. Voorbeelden en oefennormen zijn fictief, tenzij expliciet als bronfeit aangeduid. Antwoorden staan waar nodig in deze notities en in de docenthandleiding.
--> 

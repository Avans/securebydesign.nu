---
marp: true
theme: default
paginate: true
lang: nl
title: "W1 · blok 2 — Wat kan er misgaan?"
description: "Producten, diensten, processen en systemen — schade en impact verkennen"
---

# Wat kan er misgaan?

## Producten, diensten, processen en systemen

**Week 1 · blok 2** — Mindset & cultuur
90 minuten

<!--
⏱ 0–2. Vorige les: wat veiligheid ís. Vandaag: hoe groot het speelveld is.

Waarschuwing vooraf voor jezelf: dit blok kan makkelijk ontsporen in een reeks spannende
verhalen. Het doel is niet ontzag, het is overzicht. Elke keer dat je een voorbeeld noemt,
sleep je het terug naar dezelfde vraag: wie draagt hier de schade?
-->

---

## Opening: jullie ene zin

Je hebt de casus **"Naaste"** gelezen en één ding opgeschreven dat mis kan gaan.

> Wie leest zijn zin voor?

<!--
⏱ 2–10. Haal er 8 tot 12 op, in hoog tempo, en schrijf ze in trefwoorden op het bord. Niet
becommentariëren, niet corrigeren, niet ordenen — dat doen we straks samen.

Wat je bijna zeker krijgt: gehackt, data op straat, wachtwoord, phishing. Wat je bijna zeker
níét krijgt: de app doet het niet op zondagochtend, de koppeling met de apotheek geeft oude
gegevens door, een verzorgende schrijft bij de verkeerde cliënt.

Laat dat gat staan. Je komt er aan het eind van het verhaalgedeelte op terug — het is het
bewijs van je hele punt.
-->

---

## Na dit blok kun je

1. voorbeelden ordenen naar **product · dienst · proces · systeem**;
2. uitleggen waarom die vier verschillende soorten kwetsbaarheden hebben;
3. bij een voorbeeld **schade en impact** benoemen: wie, hoe erg, hoe lang, hoe zichtbaar;
4. minstens drie domeinen buiten de IT noemen waar security speelt;
5. uitleggen wat een **keten** met je risico doet.

<!--
⏱ 10–12. Doel 1 is de kapstok van vandaag en komt terug in vak 1 van het canvas (scope).
Doel 3 is het echte werk: schade benoemen zonder in techniek te vervallen.
-->

---

## Vandaag

| Tijd | Wat |
|---|---|
| 0–10 | **Opening** — jullie ene zin over "Naaste" |
| 10–33 | **Verhaal** — vier soorten, zes domeinen, en de keten |
| 33–75 | **Aan het werk** — domeincarrousel in groepjes van 4 |
| 75–85 | **Terug & verdieping** — schade, impact, en wat we niet noemden |
| 85–90 | **Afsluiting** — begrippenkaart en leeswerk |

<!--
⏱ 12–13. Kort.
-->

---

## Deel 1 · Verhaal

### Het speelveld is groter dan je scherm

<!--
⏱ 13. Overgang.
-->

---

## Vier soorten, vier soorten fouten

| | Wat het is | Waar het misgaat |
|---|---|---|
| **Product** | een ding dat je koopt of gebruikt | ontwerpkeuzes, standaardinstellingen, updates |
| **Dienst** | iets dat continu geleverd wordt | uitval, afhankelijkheid, de leverancier |
| **Proces** | de afgesproken werkwijze | uitzonderingen, haast, niemand die controleert |
| **Systeem** | het geheel van al die delen | de koppelingen ertussen |

<!--
⏱ 13–20. Neem per soort één concreet voorbeeld, en gebruik steeds hetzelfde onderwerp zodat het
verschil zichtbaar wordt. Bijvoorbeeld een pinpas:

- Product: de pas zelf en de chip erin.
- Dienst: het betaalnetwerk dat 24/7 moet werken.
- Proces: hoe je een nieuwe pas aanvraagt en hoe iemand zich daarbij legitimeert.
- Systeem: het geheel — en de aanvaller die niet de chip kraakt maar het aanvraagproces
  gebruikt om een pas op jouw naam te krijgen.

Dat laatste is de kernboodschap van de slide: aanvallers kiezen zelden het onderdeel waar het
meeste geld in de beveiliging is gestoken. Ze kiezen de naad ertussen.
-->

---

## Domein 1 · Telecom

- **sms-spoofing** — de afzendernaam in een sms is gewoon een tekstveld
- **IMEI-cloning** — het "unieke" nummer van een telefoon is niet zo uniek
- **stingray** — een nepzendmast waar telefoons uit zichzelf mee verbinden

> Alle drie misbruiken hetzelfde: iets waarvan iedereen aanneemt dat het klopt.

<!--
⏱ 20–24. Sms-spoofing is het sterkste voorbeeld voor deze zaal, omdat iedereen ooit een
"MijnOverheid"- of bank-sms in dezelfde draad heeft zien binnenkomen als de echte. Dat is geen
hack: de afzendernaam is nooit bedoeld geweest als bewijs van identiteit, en telefoons zetten
berichten met dezelfde naam in dezelfde draad.

Kernvraag aan de zaal: wiens fout is dit? De aanvaller misbruikt niets kapots — hij gebruikt het
systeem zoals het is ontworpen. Dat is precies een ontwerpkwaliteit die ontbreekt.

Stingray kort houden; het is vooral illustratief voor "je apparaat vertrouwt de omgeving".
-->

---

## Domein 2 · De fysieke wereld

- een **USB-stick** op de parkeerplaats
- **energiecentrales** en waterzuivering: systemen uit de jaren 80 aan een modern netwerk
- **openbare infrastructuur**: bruggen, sluizen, verkeerslichten
- **robots** en machines die naast mensen staan

> Hier is de schade niet digitaal. Hier valt iets om.

<!--
⏱ 24–28. Verbind terug met Stuxnet uit blok 1: het luchtgat dat geen luchtgat was.

Het punt bij industriële systemen is dat ze zijn ontworpen voor beschikbaarheid en veiligheid
in de zin van *safety* — een sluis moet open kunnen, altijd. Ze zijn níét ontworpen voor een
vijandige omgeving, want die was er niet toen ze werden gebouwd. Toen kwam er een netwerkkabel bij.

Bij robots: benoem dat security en safety hier samenvallen. Een gemanipuleerde sensorwaarde is
niet "data die niet klopt", het is een arm die beweegt waar iemand staat. Dat is integriteit (I)
met lichamelijke gevolgen.
-->

---

## Domein 3 · De keten

Bijna niets wordt nog door één partij gemaakt.

Bij "Naaste":

**zorgorganisatie → externe bouwer → hostingpartij → koppeling met de apotheek → telefoons van verzorgenden**

> Je risico is zo groot als de zwakste partij in je keten — en die heb je niet in dienst.

<!--
⏱ 28–33. Dit is de belangrijkste slide van het verhaalgedeelte, en de opmaat naar week 3.

Vraag aan de zaal: wie van deze vijf kan de zorgorganisatie aansturen? (de bouwer, via een
contract) Wie niet? (de telefoon van de verzorgende — dat is haar eigen toestel) Bij wie ligt
het risico als het misgaat? (bij de zorgorganisatie, altijd — die staat in de krant)

Dat verschil tussen "wie draagt het risico" en "wie kan er iets aan doen" is het motorblok van
blok 5 (stakeholders). Laat het hier alleen vallen; niet uitdiepen.

Terug naar het bord met hun ene zinnen: hoeveel gingen er over de keten? Meestal geen enkele.
-->

---

## Deel 2 · Aan het werk

### Domeincarrousel — groepjes van 4

<!--
⏱ 33. Overgang. Groepjes van 4, gemengd. Elk groepje krijgt één domein toegewezen (niet zelf
kiezen), plus een flap of A3.
-->

---

## De opdracht — ronde 1 (15 min)

Je groepje krijgt **één domein**. Vul de vier vakken:

| Product | Dienst |
|---|---|
| **Proces** | **Systeem** |

Per vak: minstens twee dingen die daar mis kunnen gaan.

> Bij elk item één zin: **wie merkt het, en wat is die persoon kwijt?**

<!--
⏱ 33–50. De domeinen die je uitdeelt (kies er zes tot acht, afhankelijk van de groepsgrootte):

1. Wijkzorg — de casus "Naaste"
2. Openbaar vervoer
3. Een middelbare school
4. Drinkwater / energienet
5. Een webshop met eigen bezorging
6. Een gemeentelijke balie (paspoort, uittreksels)
7. Een sportvereniging met vrijwilligers
8. Een productiehal met machines en robots

Wat je rondlopend doet:
- Vakken "proces" en "dienst" blijven leeg bij technische groepjes. Eén vraag helpt altijd:
  "wat gebeurt er als degene die dit normaal goedkeurt, ziek is?"
- De zin over wie het merkt is verplicht. Zonder mens erin is het een woordenlijst.
- Verbied het woord "hacken" in de vakken. Ze mogen het gebruiken als ze erbij zeggen wat er
  dan precies gebeurt.
-->

---

## De opdracht — ronde 2 (15 min)

**Doorschuiven.** Je groepje loopt naar de flap van de buren.

Op andermans flap doe je drie dingen:

1. zet een **★** bij het item met de grootste schade
2. zet een **?** bij een item dat je niet begrijpt of niet gelooft
3. voeg **één item** toe dat zij misten — bij voorkeur in hun leegste vak

Je mag niets doorstrepen.

<!--
⏱ 50–65. De carrousel doet twee dingen: ze zien een tweede domein, en ze moeten andermans werk
lezen in plaats van alleen produceren.

"Je mag niets doorstrepen" serieus nemen — anders krijg je correctiegedrag in plaats van
aanvulgedrag. Het vraagteken is het instrument voor twijfel.

Loop mee en let op de sterren: staan ze allemaal bij spectaculaire items (hack, gijzeling) of
ook bij saaie items met veel impact (uitval, verkeerde gegevens)? Dat is je materiaal voor de
verdieping straks.
-->

---

## De opdracht — ronde 3 (10 min)

Terug naar je eigen flap.

- Lees de **?** — kun je uitleggen wat je bedoelde?
- Kies je **top 3 grootste schade** en zet ze op volgorde.
- Bedenk per top-3-item: hoe **lang** duurt de schade? Een uur, een week, of voor altijd?

<!--
⏱ 65–75. Die laatste vraag is de verdiepingsvraag van het blok en wordt vaak overgeslagen.
Duur is een dimensie van impact die studenten niet vanzelf zien: een uur geen wifi is
irritant, een gelekte diagnose is levenslang.

Zeg het hardop als je rondloopt: "en over een jaar? merkt iemand het dan nog?"

Laatste 2 minuten: elke groep kiest de ene zin die ze straks voorlezen.
-->

---

## Deel 3 · Terug & verdieping

<!--
⏱ 75. Overgang. Snel tempo: één zin per groep, niet meer. Jij ordent ze op het bord.
-->

---

## Vier vragen bij schade

| Vraag | Waarom hij ertoe doet |
|---|---|
| **Wie** draagt de schade? | vaak niet degene die de keuze maakte |
| **Hoe erg** is het voor die persoon? | geld, gezondheid, reputatie, vrijheid |
| **Hoe lang** duurt het? | een uur · een week · voor altijd |
| **Wie ziet het?** | schade die niemand opmerkt, wordt niet gerepareerd |

<!--
⏱ 75–82. Dit is het gereedschap dat blijft hangen. Zet het op het bord naast hun top-3-items en
loop er één of twee doorheen.

Kernpunt bij "wie draagt de schade": bij "Naaste" maakt de teamleider de keuze om snel inloggen
mogelijk te maken, maar de cliënt draagt de schade als een telefoon wordt gestolen. Die
scheiding tussen beslisser en slachtoffer is dé reden dat we stakeholders in kaart brengen (blok 5).

Kernpunt bij "wie ziet het": een lek dat niemand merkt, duurt gemiddeld maanden. Onzichtbare
schade is niet minder schade — dat is het bruggetje naar monitoring in week 2.
-->

---

## Wat we bijna nooit noemen

Terug naar het bord van vanochtend:

- ✅ hacken, datalek, wachtwoord, phishing
- ❌ het werkt niet meer (**B**)
- ❌ de gegevens kloppen niet (**I**)
- ❌ de leverancier, de koppeling, de keten
- ❌ per ongeluk

> Ongeveer de helft van wat er misgaat, gaat mis zónder aanvaller.

<!--
⏱ 82–85. Het rondje sluit hier. Wijs terug naar de zinnen die je vanochtend opschreef en laat de
zaal zelf zien wat er ontbrak.

Zeg erbij: "per ongeluk" is geen tweederangs risico. Een verzorgende die bij de verkeerde cliënt
schrijft, doet exact evenveel schade aan de integriteit van dat dossier als een aanvaller —
en het gebeurt vaker. Dat is waarom we in blok 6 abuse cases ook vanuit de gebruiker en de
beheerder schrijven, niet alleen vanuit de aanvaller.
-->

---

## Deel 4 · Afsluiting

<!--
⏱ 85. Overgang.
-->

---

## Voor het volgende blok

**Individueel, ± 30 minuten:**

1. Begrippenkaart bij: `product · dienst · proces · systeem · schade · impact · keten`
2. Kies **één item** van jullie flap en schrijf er drie zinnen bij: wat gaat er mis, wie merkt het, hoe lang duurt het?
3. Kijk om je heen op weg naar huis en noteer **één ding** dat zo is ontworpen dat de veilige manier ook de makkelijkste is.

<!--
⏱ 85–90. Opdracht 3 is de opmaat naar blok 3 (principes), in het bijzonder "veilig moet
makkelijk zijn" (P07). Voorbeelden die ze meebrengen: een deur die vanzelf in het slot valt,
een pinautomaat die je pas teruggeeft vóór het geld, een fiets met een ringslot dat vastzit aan
de fiets zodat je hem niet kunt vergeten.

Fotografeer alle flappen voor je de zaal verlaat. Ze komen terug in blok 6 als de teams hun
assets zoeken.

Bruggetje: vandaag hebben we honderd dingen verzameld die mis kunnen gaan. Morgen kijken we naar
de handvol regels waarmee ontwerpers dat proberen te voorkomen — en waarom die regels ouder zijn
dan het internet.
-->

---

## Materiaal & bronnen

- Flappen of A3-vellen, één per groepje, plus stiften
- Domeinkaartjes (één domein per groepje) → print
- Casus **"Naaste"** → Brightspace
- Praatplaat **Fundament** → [securebydesign.nu/fundament](https://securebydesign.nu/fundament)

<!--
Docentchecklist vóór dit blok:
[ ] 6–8 domeinkaartjes geprint
[ ] Flappen + stiften, genoeg voor alle groepjes
[ ] Wandruimte of tafels vrij voor de carrousel
[ ] Bord vrij voor de openingszinnen — die heb je aan het eind terug nodig
[ ] Camera: alle flappen fotograferen vóór opruimen
-->

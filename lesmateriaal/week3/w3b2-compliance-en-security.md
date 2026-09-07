---
marp: true
theme: default
paginate: true
lang: nl
title: "W3 · blok 2 — Compliance en security"
description: "Regels, bewijs en het werkelijke risico"
---

# Compliance en security

## Regels, bewijs en het werkelijke risico

**Week 3 · blok 2** · Governance & organisatie · les
90 minuten

<!--
⏱ 0–2. Gebruik de individuele voorbeelden uit blok 1. Vandaag leren studenten claims beoordelen. De inhoud en toepasselijkheid van AVG, NIS2/Cbw en CRA komen in blok 4, zodat deze twee lessen verschillende vragen beantwoorden.
--> 

---

## Na dit blok kun je

1. wetgeving, normen, raamwerken en assurance onderscheiden;
2. bij een claim benoemen welk bewijs en welke scope ontbreken;
3. een compliance-eis koppelen aan een risico en een controle;
4. uitleggen waarom een certificaat geen garantie op incidentvrij werken is.

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

### Een leverancier heeft een certificaat

<!--
⏱ 5. Start met een fictieve offerte. Er is geen echt bedrijf of certificaat nodig.
--> 

---

## De offerte

“Wij zijn ISO 27001-gecertificeerd. Uw gegevens zijn bij ons veilig.”

Wat zou je willen zien vóór je de overeenkomst tekent?

Schrijf individueel één vraag over **scope** en één over **werking**.

<!--
⏱ 5–10. Verwachte vragen: welke rechtspersoon, dienst, locatie en periode dekt het certificaat? Valt de testomgeving eronder? Wie controleert toegang? Behandel het certificaat als relevante informatie, maar trek er geen conclusies uit over systemen die buiten de scope vallen.
--> 

---

## Vier soorten houvast

| Soort | Voorbeeld | Functie |
|---|---|---|
| Wetgeving | AVG, Cbw, CRA | Verplichtingen binnen een toepassingsgebied |
| Norm | ISO/IEC 27001 | Eisen aan een managementsysteem |
| Raamwerk | NIST CSF 2.0 | Structuur voor gewenste security-uitkomsten |
| Assurance | SOC 2-rapport | Onderzoek en rapportage over beheersing |

<!--
⏱ 10–16. Laat studenten de termen in gewone taal teruggeven. ISO is de organisatie, ISO/IEC 27001 de norm. NIST is een instituut, CSF het bedoelde raamwerk. SOC 2 is geen EU-wet en geen ISO-certificaat. HIPAA is Amerikaanse gezondheidswetgeving, geen standaardplicht voor elke Nederlandse zorgapp. Hier alleen herkennen, geen apart HIPAA-college. Bronnen: ISO-overzicht, NIST CSF en AICPA SOC-bron in bronnen-week3.md.
--> 

---

## Een controle heeft een beperkte reikwijdte

**Claim:** vertrekkende medewerkers verliezen hun toegang.

**Bewijs:** drie uitgevoerde uitdienstmeldingen en bijbehorende accountcontroles.

**Open vraag:** omvat de controle ook accounts bij de bouwer, actieve sessies en tijdelijke krachten?

<!--
⏱ 16–21. Leg uit dat een steekproef bewijs binnen grenzen geeft. Laat studenten benoemen wat ze nog niet weten. Een beleidstekst bewijst de afspraak, uitgevoerde records ondersteunen uitvoering, een onafhankelijke controle helpt werking beoordelen. Claim niet dat één voorbeeld volledige compliance bewijst.
--> 

---

## Eis, maatregel en effect

Voor Naaste:

- **Eis:** toegang past bij iemands taak.
- **Maatregel:** teamleider keurt rechten goed en laat ze intrekken.
- **Bewijs:** aanvraag, uitvoering en controle horen bij elkaar.
- **Effect:** onbevoegde toegang wordt minder waarschijnlijk.

Welk restrisico blijft over?

<!--
⏱ 21–25. Gebruik een nieuwsgierige bevoegde medewerker als resterend risico. Goede toekenning van rechten voorkomt niet ieder misbruik door iemand die terecht toegang heeft. Een maatregel kan nuttig zijn zonder alle risico weg te nemen. De formulering op de slide is een oefeneis, geen letterlijk wetsartikel.
--> 

---

## Deel 2 · Aan het werk

### Claims uit een fictief leveranciersdossier

<!--
⏱ 25. Open werkblad B2. Elk team onderzoekt alle vier claims. Rollen wisselen ten opzichte van blok 1.
--> 

---

## Ronde 1 · Wat wordt er beweerd?

Onderzoek de vier claims op B2:

1. “De leverancier is gecertificeerd.”
2. “Iedereen heeft de training afgerond.”
3. “De back-up slaagt elke nacht.”
4. “De privacyverklaring staat online.”

Noteer per claim: betekenis, ontbrekend bewijs en mogelijk restrisico.

<!--
⏱ 25–40. Geef de vier bijbehorende dossierfeiten uit B2 meteen mee. Studenten hoeven geen internetonderzoek te doen. Training kan afgerond zijn zonder dat de meldroute wordt gebruikt. Een geslaagde back-up zegt nog niet dat herstel werkt. De privacyverklaring bewijst geen juiste inrichting van toegang of bewaartermijnen.
--> 

---

## Ronde 2 · Een controle ontwerpen

Kies twee claims. Formuleer:

- een concrete controlevraag;
- welk bewijs je opvraagt;
- wie het beoordeelt;
- wat je doet bij een tekortkoming.

Koppel elke controle aan één asset en risico van Naaste.

<!--
⏱ 40–55. Vraag steeds of de controle echt het geclaimde effect onderzoekt. “Vraag of ze veilig zijn” is geen controle. “Laat het verslag van de laatste hersteltest zien, inclusief afwijkingen en opvolging” is bruikbaar. Laat de groep zelf een haalbare frequentie kiezen en die als oefenkeuze markeren.
--> 

---

## Ronde 3 · Leveranciersgesprek

Twee studenten spelen inkoper, twee leverancier.

De leverancier antwoordt uitsluitend met de dossierfeiten. Bij ontbrekende informatie zegt hij: **dat moeten we uitzoeken**.

Na vijf minuten wisselen jullie. Noteer één voorwaarde voor akkoord.

<!--
⏱ 55–65. Bij drie studenten combineert één de leverancier- en notitierol. Corrigeer verzonnen bewijs direct. Het doel is professioneel doorvragen zonder absolute garanties te eisen. Een passende voorwaarde kan een hersteltest vóór ingebruikname zijn, met een aangewezen beoordelaar.
--> 

---

## Deel 3 · Terug & verdieping

### Hoeveel zegt het bewijs?

<!--
⏱ 65. Oogst twee voorwaarden en laat een ander team de koppeling met het risico uitleggen.
--> 

---

## Twee uitersten

“We voldoen aan regels, dus er kan niets gebeuren.”

“Er kan toch iets gebeuren, dus regels hebben geen nut.”

Welke denkfout zit in iedere uitspraak? Geef een voorbeeld uit het dossier.

<!--
⏱ 65–75. Beide uitspraken verwarren een bijdrage aan beheersing met absolute zekerheid. Laat de studenten het nuttige deel van de controle behouden. Bespreek ook dat aantoonbare naleving een eigen verplichting kan zijn, zelfs wanneer een team een risico laag inschat. Vermijd het beeld dat compliance slechts papierwerk is.
--> 

---

## Zonder je aantekeningen

1. Tot welke categorie behoort NIST CSF?
2. Welk bewijs ontbreekt bij “de back-up is gelukt”?
3. Welke vraag stel je over de scope van een certificaat?

**Uitgangskaart:** herschrijf één te brede securityclaim zodat hij past bij het beschikbare bewijs.

<!--
⏱ 75–85. Antwoorden: raamwerk, bewijs van bruikbaar herstel, dekking van dienst en relevante omgevingen. Een goede herschrijving begrenst de claim: “De nachtelijke kopie is gemaakt. Herstel voor deze toepassing hebben we nog niet getest.” Laat drie studenten hun formulering voorlezen en let op ongefundeerde zekerheid.
--> 

---

## Deel 4 · Afsluiting

<!--
⏱ 85. Overgang. Laat het teamresultaat opslaan en benoem de individuele voorbereiding.
-->

---

## Voor het volgende blok

**Team:** bewaar het bewijsregister B2.

**Individueel, 20 minuten:** lees de openbare ISO-introductie. Leg in vijf zinnen uit hoe je één gekozen controle zou onderhouden.

Begrippen: compliance, scope, norm, raamwerk, bewijs, restrisico.

<!--
⏱ 85–89. Laat ieder team zijn bestand opslaan met teamnaam en bloknummer. De individuele voorbereiding valt buiten deze 90 minuten. Vraag één student hardop te benoemen welke open vraag nog meegaat.
--> 

---

## Materiaal & bronnen

- [ISO/IEC 27001](https://www.iso.org/standard/27001)
- [NIST CSF 2.0](https://www.nist.gov/cyberframework)
- [AICPA, SOC](https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services)
- [Werkbladen week 3](werkbladen-week3.md)
- [Casus en oefenafspraken](casus-naaste-week3.md)

<!--
⏱ 89–90. Voorbereiding docent: Print B2 inclusief dossierfeiten. Gebruik fictieve leveranciersclaims, geen echte vertrouwelijke auditrapporten. Bronnen geraadpleegd op 7 september 2026. Voorbeelden en oefennormen zijn fictief, tenzij expliciet als bronfeit aangeduid. Antwoorden staan waar nodig in deze notities en in de docenthandleiding.
--> 

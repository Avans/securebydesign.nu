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
⏱ 0–2. Pak een individueel voorbeeld uit de voorbereiding: een regel die op papier bestaat. Vraag wat je daarmee al weet over het dagelijkse werk. Vandaag leren studenten een claim kleiner en controleerbaar maken.

Laat de les niet afglijden naar “certificaten zeggen niets”. Ze zeggen iets binnen grenzen. De juridische toepasselijkheid van AVG, NIS2/Cbw en CRA komt in blok 4; hier oefenen we het beoordelen van bewijs.
--> 

---

## Na dit blok kun je

1. wetgeving, normen, raamwerken en assurance onderscheiden;
2. bij een claim benoemen welk bewijs en welke scope ontbreken;
3. een compliance-eis koppelen aan een risico en een controle;
4. uitleggen waarom een certificaat geen garantie op incidentvrij werken is.

<!--
⏱ 2–4. Vraag bij het leerdoel over bewijs om één voorbeeld: wat zou aantonen dat een back-up bruikbaar is? Neem een antwoord en bewaar het voor de werkronde.

Je zoekt vandaag het verschil tussen een afspraak, uitvoering en werking. Wie die drie uit elkaar kan houden, kan straks een leveranciersclaim onderzoeken.
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
⏱ 4–5. B2 wordt het bewijsregister voor blok 9. Benoem vooral het gesprek in de derde ronde: teams moeten met hun vragen een leverancier tot een bruikbare afspraak brengen.

Ze hoeven vandaag geen garanties te verzamelen, maar duidelijk te maken wat bekend is en wat nog gecontroleerd moet worden. Houd de overgangsslides kort.
--> 

---

## Deel 1 · Verhaal

### Een leverancier heeft een certificaat

<!--
⏱ 5. Overgang. Leg een fictieve offerte voor. Vraag de klas haar even te lezen alsof zij voor Naaste moet inkopen; een echt bedrijf of certificaat is niet nodig.
--> 

---

## De offerte

“Wij zijn ISO 27001-gecertificeerd. Uw gegevens zijn bij ons veilig.”

Wat zou je willen zien vóór je de overeenkomst tekent?

Schrijf individueel: geldt het certificaat ook voor onze testomgeving, en hoe zien we of de afspraken in het dagelijks werk werken? Dat zijn vragen over **scope** en **werking**.

<!--
⏱ 5–10. Laat eerst iemand benoemen wat hem geruststelt aan de offerte. Vraag daarna: “Staat er ook dat juist de omgeving die wij gaan gebruiken is onderzocht?” Dat is het moment waarop scope betekenis krijgt.

Verwachte vragen: welke rechtspersoon, dienst, locatie en periode dekt het certificaat? Valt de testomgeving eronder? Wie controleert toegang? Behandel het certificaat als relevante informatie, maar trek er geen conclusies uit over systemen die buiten de scope vallen.

Als de klas het certificaat nu waardeloos noemt, ga één stap terug: welk deel van de claim wordt er wél door ondersteund?
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
⏱ 10–16. Dit rijtje kan snel een afkortingenquiz worden. Laat bij elk begrip zeggen wat je ermee kunt: een verplichting begrijpen, een aanpak kiezen of bewijs beoordelen.

Laat studenten de termen in gewone taal teruggeven. ISO is de organisatie, ISO/IEC 27001 de norm. NIST is een instituut, CSF het bedoelde raamwerk. SOC 2 is geen EU-wet en geen ISO-certificaat. HIPAA is Amerikaanse gezondheidswetgeving, geen standaardplicht voor elke Nederlandse zorgapp. Hier alleen herkennen, geen apart HIPAA-college. Bronnen: ISO-overzicht, NIST CSF en AICPA SOC-bron in bronnen-week3.md.

Vraag één student een verkeerd gebruikte term te herstellen in een zin van de leverancier. Het herkennen moet een gesprek helpen, niet alleen een definitie opleveren.
--> 

---

## Voordoen · Een groen back-upbericht

**B2:** elke nacht een groene taakmelding. De laatste hersteltest was achttien maanden geleden, vóór de huidige appversie.

| Denkstap | Uitwerking |
|---|---|
| Wat ondersteunt dit? | De back-uptaak rapporteert succes |
| Wat weet ik nog niet? | Of de huidige app bruikbaar herstelt |
| Waarom doet dat ertoe? | A1 kan na uitval onbeschikbaar blijven |
| Welke controle helpt? | Herstelproef met huidige versie en controle van gegevens |

Een groene taakmelding is nog geen geslaagde herstelproef.

<!--
⏱ 16–21. Denk vijf minuten hardop vanuit één claim uit B2. Ik zie een groene melding en wil daar graag “we kunnen herstellen” van maken. Maar dat is een grotere conclusie dan het bewijs ondersteunt. Wijs het verschil aan tussen een kopie maken en de toepassing met die gegevens weer bruikbaar krijgen.

Verbind iedere rij met de vorige: ontbrekend bewijs is relevant omdat zorgnotities na een storing nodig blijven. Een herstelproef moet de huidige toepassing en gegevens beoordelen; alleen zien dat een bestand bestaat is onvoldoende. Gebruik uitsluitend de dossierfeiten. De oude hersteltest is niet waardeloos, maar onderbouwt de huidige versie niet vanzelf.

Laat een student de begrensde conclusie in één zin teruggeven. Dit voorbeeld staat straks als referentie in het register; de andere drie claims moeten teams zelf onderzoeken.
-->

---

## Samen proberen · Iedereen volgde de training

**B2:** het portaal toont 100% afronding. Er is geen verslag van een oefening met de meldroute.

**Al ingevuld:** de registratie ondersteunt dat iedereen de module afrondde.

Vul samen aan:
1. Welke uitspraak over veilig handelen kun je nog niet doen?
2. Welke korte proef geeft daar informatie over?
3. Welk risico voor Naaste helpt die proef onderzoeken?

Gebruik: **afspraak → uitvoering → bewijs van werking**.

<!--
⏱ 21–25. Eén minuut individueel, twee minuten samen invullen, één minuut de redenering terughalen. Verwacht “nog een training”; vraag eerst welke handeling je wilt zien. Een medewerker die in een oefensituatie het juiste meldpunt vindt levert ander bewijs dan een afgeronde module.

Koppel de proef aan A1: bereikt een vermoeden van blootstelling van zorgnotities iemand die het beoordeelt? Laat studenten ook de grens benoemen: één geslaagde oefening bewijst niet dat iedereen altijd goed handelt. De maatregel kan het risico verkleinen zonder het weg te nemen.

Laat één student eis, maatregel en beoogd effect terugzeggen: meldingen bereiken een beoordelaar, een bereikbare route wordt geoefend, signalen blijven minder snel liggen. Dit is een oefeneis, geen letterlijk wetsartikel. De ontbrekende vervolgstappen werken teams op B2 uit.
-->

---

## Deel 2 · Aan het werk

### Claims uit een fictief leveranciersdossier

<!--
⏱ 25. Overgang naar B2. Verdeel het fictieve dossier inclusief de feiten. Elk team onderzoekt alle vier claims; wissel de rollen ten opzichte van blok 1.
--> 

---

## Ronde 1 · Wat wordt er beweerd?

Onderzoek de vier claims op B2:

1. “De leverancier is gecertificeerd.”
2. “Iedereen heeft de training afgerond.”
3. “De back-up slaagt elke nacht.”
4. “De privacyverklaring staat online.”

Neem de back-upclaim als voorgedane referentie. Werk de andere drie claims zelf uit: betekenis, ontbrekend bewijs en mogelijk restrisico. Maak de trainingsclaim vollediger dan onze gezamenlijke eerste stap.

<!--
⏱ 25–40. Vijftien minuten: controleer kort de voorgedane back-upclaim en gebruik de rest voor de andere drie. Laat teams bij elke claim eerst de bewering onderstrepen en daarna het dossierfeit ernaast leggen. Dat voorkomt dat ze meteen een nieuwe maatregel gaan verzinnen.

Geef de vier bijbehorende dossierfeiten uit B2 meteen mee. Studenten hoeven geen internetonderzoek te doen. Training kan afgerond zijn zonder dat de meldroute wordt gebruikt. Een geslaagde back-up zegt nog niet dat herstel werkt. De privacyverklaring bewijst geen juiste inrichting van toegang of bewaartermijnen.

Loop rond met één vraag: “Welk stukje van deze bewering kun je nu al aantonen?” Het ontbrekende bewijs hoort als vraag in B2, niet als zelfbedacht feit.
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
⏱ 40–55. De lastigste stap is een controle kiezen die iets zegt over de werking. Een document opvragen is alleen nuttig als studenten kunnen uitleggen wat zij erin zoeken.

Vraag steeds of de controle echt het geclaimde effect onderzoekt. “Vraag of ze veilig zijn” is geen controle. “Laat het verslag van de laatste hersteltest zien, inclusief afwijkingen en opvolging” is bruikbaar. Laat de groep zelf een haalbare frequentie kiezen en die als oefenkeuze markeren.

Vraag bij een hersteltest: welke uitkomst zou jullie oordeel veranderen? Als het antwoord niets uitmaakt, controleert het team waarschijnlijk de verkeerde claim.
--> 

---

## Ronde 3 · Leveranciersgesprek

Twee studenten spelen inkoper, twee leverancier.

De leverancier antwoordt uitsluitend met de dossierfeiten. Bij ontbrekende informatie zegt hij: **dat moeten we uitzoeken**.

Na vijf minuten wisselen jullie. Noteer één voorwaarde voor akkoord.

<!--
⏱ 55–65. Laat de leverancier een onduidelijke vraag eerst letterlijk beantwoorden. “Zijn jullie veilig?” levert dan een beleefd “ja” op. De vrager moet zelf ontdekken waarom hij daar niet verder mee kan.

Bij drie studenten combineert één de leverancier- en notitierol. Corrigeer verzonnen bewijs direct. Het doel is professioneel doorvragen zonder absolute garanties te eisen. Een passende voorwaarde kan een hersteltest vóór ingebruikname zijn, met een aangewezen beoordelaar.

Beloon de vervolgvraag die de afspraak concreter maakt. Een stevig gesprek hoeft geen verhoor te worden; de leverancier mag ook eerlijk zeggen dat bewijs ontbreekt.
--> 

---

## Deel 3 · Terug & verdieping

### Hoeveel zegt het bewijs?

<!--
⏱ 65. Overgang. Laat twee teams een leveranciersvoorwaarde noemen. Een ander team legt uit welk risico die voorwaarde helpt beheersen.
--> 

---

## Twee uitersten

“We voldoen aan regels, dus er kan niets gebeuren.”

“Er kan toch iets gebeuren, dus regels hebben geen nut.”

Welke denkfout zit in iedere uitspraak? Geef een voorbeeld uit het dossier.

<!--
⏱ 65–75. Laat studenten eerst kiezen welke uitspraak zij het meest herkennen en waarom. Beide uitersten maken het gesprek te gemakkelijk: blind vertrouwen of alles terzijde schuiven.

Beide uitspraken verwarren een bijdrage aan beheersing met absolute zekerheid. Laat de studenten het nuttige deel van de controle behouden. Bespreek ook dat aantoonbare naleving een eigen verplichting kan zijn, zelfs wanneer een team een risico laag inschat. Vermijd het beeld dat compliance slechts papierwerk is.

Laat ze één uitspraak opnieuw formuleren met behoud van wat de controle wél oplevert. De nuance moet zichtbaar worden in hun eigen zin.
--> 

---

## Zonder je aantekeningen

1. Tot welke categorie behoort NIST CSF?
2. Welk bewijs ontbreekt bij “de back-up is gelukt”?
3. Welke vraag stel je over de scope van een certificaat?

**Uitgangskaart:** herschrijf één te brede securityclaim zodat hij past bij het beschikbare bewijs.

<!--
⏱ 75–85. Eerst individueel antwoorden, dan pas vergelijken. Zo hoor je of studenten zelf het verschil tussen bewijs en zekerheid kunnen uitleggen.

Antwoorden: raamwerk, bewijs van bruikbaar herstel, dekking van dienst en relevante omgevingen. Een goede herschrijving begrenst de claim: “De nachtelijke kopie is gemaakt. Herstel voor deze toepassing hebben we nog niet getest.” Laat drie studenten hun formulering voorlezen en let op ongefundeerde zekerheid.

Vraag bij de herschreven claim welke vervolgstap logisch is. Je wilt een zin waarmee een opdrachtgever verder kan, niet alleen een voorzichtigere formulering.
--> 

---

## Deel 4 · Afsluiting

<!--
⏱ 85. Overgang. Laat de schrijver B2 openen. Controleer op de volgende slide wat het team bewaart en wat ieder zelf voorbereidt.
-->

---

## Voor het volgende blok

**Team:** bewaar het bewijsregister B2.

**Individueel, 20 minuten:** lees de openbare ISO-introductie. Leg in vijf zinnen uit hoe je één gekozen controle zou onderhouden.

Begrippen: compliance, scope, norm, raamwerk, bewijs, restrisico.

<!--
⏱ 85–89. Laat B2 bewaren met teamnaam en bloknummer. Vraag welk bewijs nog ontbreekt en wie het zou moeten beoordelen. Daarmee verbind je het bewijsregister aan eigenaarschap uit blok 1.

De individuele voorbereiding duurt twintig minuten buiten deze les: de openbare ISO-introductie lezen en in vijf zinnen beschrijven hoe je één controle onderhoudt. Dat is de volgende stap: zorgen dat een afspraak blijft werken.
--> 

---

## Materiaal & bronnen

- [ISO/IEC 27001](https://www.iso.org/standard/27001)
- [NIST CSF 2.0](https://www.nist.gov/cyberframework)
- [AICPA, SOC](https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services)
- [Werkbladen week 3](werkbladen-week3.md)
- [Casus en oefenafspraken](casus-naaste-week3.md)

<!--
⏱ 89–90. Laat de klas weten waar B2 en de bronnen staan. De vraag die blijft hangen: welk bewijs heb je voor precies deze claim?

Vóór de les klaarleggen en controleren: Print B2 inclusief dossierfeiten. Gebruik fictieve leveranciersclaims, geen echte vertrouwelijke auditrapporten.

Bronpeildatum van deze les: 7 september 2026. Voorbeelden en oefennormen zijn fictief, tenzij expliciet als bronfeit aangeduid. Antwoorden staan waar nodig in deze notities en in de docenthandleiding.
--> 

# OPF Secure by Design v0.2 — leesbare weergave

**Uitleesdatum: 27 september 2026.** Dit document beschrijft het door Mark aangeleverde OPF zoals het is opgeslagen. Voor de gewenste wijzigingen zie [Impact van de voorgestelde weekopbouw op het OPF](opf-impact-weekopbouw-mark.md). Dit is een leesbare extractie van de planning, inzet, normen en open punten; geen vervangend rekenbestand.

## 1. Bron en manier van lezen

- Bronbestand: **OPF Secure by Design concept v0.2.xlsm**, aangeleverd vanuit de OneDrive-map `ATD - Security by Design - General/OPF/`. Het bestand is niet via deze leesweergave beschikbaar.
- Bronvingerafdruk SHA-256: `ee99626cbf0ec2f858329345021e93a0ac9fc9222d016c353d6f8c7a3ab558dd`.
- Werkmapnaam in `Module!B4`: **Secure by Design v0.2 - CONCEPT kalender/normen open**.

Het oorspronkelijke `.xlsm`-bestand is alleen gelezen. Macro’s zijn niet uitgevoerd; formules zijn niet in Excel herberekend. Berekeningsuitkomsten hieronder zijn de **opgeslagen waarden**, onafhankelijk nagerekend waar de ingevoerde uren en factoren dat toelaten. De gebruikte eerste spreadsheetlezer struikelde over een lettertypewaarde in de stijlinformatie. Daarom zijn celinhoud, formules en opgeslagen uitkomsten rechtstreeks uit de Excel-XML gelezen, zonder de bron te wijzigen.

De omzetting bevat alle **83 benoemde activiteitregels** uit `Onderdelen`, de populatie, de relevante normering, kalender en open posten. Lege sjabloonregels, generieke lokalenlijsten, revisiehistorie en de duizenden interne formulecellen zijn niet woordelijk overgenomen. De tabbladen staan onderaan beschreven. ‘Niet ingevuld’ betekent niet dat er geen werk nodig is.

## 2. Hoofdoverzicht

| Onderdeel | Bron | Studenten | Opgeslagen DBU | Wat is erin begroot? |
|---|---|---:|---:|---|
| Fundament | Module!A8:W8 | 30 | 140,40 | 36 lessen van 90 minuten met één docent, inclusief volledige voorbereidingsfactor |
| Professioneel Profiel | Module!A9:W9 | 30 | 62,40 | Clinics, werkplaatsen en gedeelde feedback in week 5–10; alleen aanwezigheid begroot |
| Project | Module!A10:W10 | 30 | 241,80 | Tutorcontact, zes onderwijsactiviteiten, Business Understanding, midterm en Eind Event |
| **Totaal** | **Module!W28** | **30 unieke studenten** | **444,60** | **Voorlopig subtotaal; open toets-, organisatie- en beoordelingsuren ontbreken** |

Dezelfde 30 studenten doen aan de drie onderdelen mee; de aantallen worden niet tot 90 opgeteld. `Populaties!A4:C9` bevat zes teams van vijf; `Populaties!D20` is 30. De kleinste roostereenheid is vijf (`B1`). De namen SBD-G1 t/m SBD-G6 zijn groepscodes, geen ingevulde studentnamen.

`Module!C8:C10` bevat nog geen EC-verdeling. `Module!B3` is P1&2 en `B5` is 10 DBU/student/15 EC, maar de werkmap noemt kalender en normen zelf nog concept. De normbegroting in `Module!X28` is daardoor 0 en `Z28` geeft `#DIV/0!`. Er kan geen betrouwbare budgetruimte of overschrijdingspercentage worden afgeleid.

### Controle van uren versus DBU

| Activiteiten | Inzet vóór normfactor, docenturen | Voorbereidingsuren in huidige invoer | Opgeslagen DBU |
|---|---:|---:|---:|
| Fundament, rijen 7–42 | 54 | 54 | 140,40 |
| Profielclinics, werkplaatsen en feedback, rijen 49–66 | 48 | 0 | 62,40 |
| Zes tutoren, rijen 91–96 | 84 | 0 | 109,20 |
| Projectonderwijs, rijen 97–102 | 9 | 0 | 11,70 |
| Business Understanding, rij 103 | 21 | 0 | 27,30 |
| Midterm, rij 104 | 18 | 0 | 23,40 |
| Eind Event, rij 105 | 54 | 0 | 70,20 |
| **Totaal** | **288** | **54** | **444,60** |

De controle is **(288 + 54) × 1,3 = 444,60 DBU**. De 288 uren zijn gesommeerde docentaanwezigheid, niet studentcontacturen. Business Understanding en event bevatten volgens de eigen toelichting ook pauzes en andere dagonderdelen. Een voorbereiding van 0 bij `gc?` betekent hier ‘nog niet begroot’, niet dat voorbereiden niet nodig is.

## 3. Kolommen en eenheden

| Kolom in Onderdelen | Betekenis |
|---|---|
| B / F | Activiteitscode / roosternaam |
| D / E | Geselecteerde populatie / berekend aantal deelnemers |
| H / I / J | Maximale groepsgrootte / berekende groepsgrootte / aantal groepen |
| M / N | Overschreven aantal docenten / docenten gelijktijdig |
| O / P | Kostenfactor / voorbereidingsfactor |
| R:AA | P1, lesweek 1–10; in de huidige invoer gebruikt als minorweek 1–10 |
| AC:AL | P2, lesweek 1–10; in de huidige invoer gebruikt als minorweek 11–20 |
| BJ | Door het sjabloon meegetelde lesuren; geen volledige studentstudielast |
| BK:BN / BS | Berekende vergoedingen voor contact, voorbereiding, organisatie, toetsing / totaal in DBU |
| BX / BY / CA | Begin van week / einde van week / voorganger |
| CB / CC / CD / CE | Faciliteiten / opmerkingen / docentomschrijving / open punten |

**Let op verschillende invoereenheden.** Voor onderwijs met `wc`, `gc`, en voor `ts`/`ass` worden de weekwaarden in de hier bekeken formules door twee gedeeld: 3 = 1,5 uur. `fb` gebruikt minuten; `tr` gebruikt klokuren. Dit blijkt uit bijvoorbeeld `Docenturen!W43`, `W44` en `X45`. Vul dus niet overal hetzelfde getal in voor een activiteit van 90 minuten.

Voor het huidige model geldt bij `wc` een voorbereidingsfactor 1 en bij `gc?` 0. Onderwijs en toetsing hebben de voorlopige factor 1,3 (`Activiteittypen!C12:E14`, `TBM normen!B8:B9`). Voor organisatie geldt 1,1 en voor ontwikkeling 1 (`TBM normen!B7:B10`). Een vraagteken in de activiteitscode is een open status; het wordt voor de berekening verwijderd, niet als uitsluiting behandeld (`Interpretaties!B7` en overeenkomstige rijen).

## 4. Fundament: alle huidige lessen

Alle onderstaande lessen hebben code `wc`, populatie `(ALL)`, één docent en 3 contacthalfuren. Per les is 1,5 uur uitvoering plus 1,5 uur voorbereiding begroot: 3,90 DBU. De weekkolommen zijn hier een positionele beschrijving van de huidige invoer, geen bevestigde kalender.

| Rij Onderdelen | Roosternaam (kolom F) | Weekcel | Duur | DBU (BS) |
|---|---|---|---:|---:|
| 7 | F1.1 Intro Secure by Design | R7 = 3 | 1,5 uur | 3,9 |
| 8 | F1.2 Wat kan er misgaan | R8 = 3 | 1,5 uur | 3,9 |
| 9 | F1.3 Securityprincipes | R9 = 3 | 1,5 uur | 3,9 |
| 10 | F1.4 Menselijk gedrag en securitycultuur | R10 = 3 | 1,5 uur | 3,9 |
| 11 | F1.5 Stakeholders en verantwoordelijkheden | R11 = 3 | 1,5 uur | 3,9 |
| 12 | F1.6 Assets en misbruikscenario’s | R12 = 3 | 1,5 uur | 3,9 |
| 13 | F1.7 Securitycontext en abuse cases | R13 = 3 | 1,5 uur | 3,9 |
| 14 | F1.8 Securitybingo en kennismaking | R14 = 3 | 1,5 uur | 3,9 |
| 15 | F1.9 Securitycontextcanvas | R15 = 3 | 1,5 uur | 3,9 |
| 16 | F2.1 Aanvallersdenken | S16 = 3 | 1,5 uur | 3,9 |
| 17 | F2.2 Digitale en organisatorische dreigingen | S17 = 3 | 1,5 uur | 3,9 |
| 18 | F2.3 Incidentanalyse | S18 = 3 | 1,5 uur | 3,9 |
| 19 | F2.4 OWASP en MITRE | S19 = 3 | 1,5 uur | 3,9 |
| 20 | F2.5 Risico-inschatting | S20 = 3 | 1,5 uur | 3,9 |
| 21 | F2.6 Eerste ontwerpmaatregelen | S21 = 3 | 1,5 uur | 3,9 |
| 22 | F2.7 Monitoring en detectie | S22 = 3 | 1,5 uur | 3,9 |
| 23 | F2.8 Dreigingsspel en attack trees | S23 = 3 | 1,5 uur | 3,9 |
| 24 | F2.9 Risicoprofiel en ontwerpmaatregelen | S24 = 3 | 1,5 uur | 3,9 |
| 25 | F3.1 Governance en eigenaarschap | T25 = 3 | 1,5 uur | 3,9 |
| 26 | F3.2 Compliance versus security | T26 = 3 | 1,5 uur | 3,9 |
| 27 | F3.3 ISO 27001 op hoofdlijnen | T27 = 3 | 1,5 uur | 3,9 |
| 28 | F3.4 NIS2, AVG en CRA | T28 = 3 | 1,5 uur | 3,9 |
| 29 | F3.5 Supply chain security | T29 = 3 | 1,5 uur | 3,9 |
| 30 | F3.6 Organisatorische maatregelen | T30 = 3 | 1,5 uur | 3,9 |
| 31 | F3.7 Incident response en crisiscommunicatie | T31 = 3 | 1,5 uur | 3,9 |
| 32 | F3.8 Backdoors & Breaches | T32 = 3 | 1,5 uur | 3,9 |
| 33 | F3.9 Governancekaart en responsafspraken | T33 = 3 | 1,5 uur | 3,9 |
| 34 | F4.1 Securityrequirements | U34 = 3 | 1,5 uur | 3,9 |
| 35 | F4.2 Maatregelen kiezen | U35 = 3 | 1,5 uur | 3,9 |
| 36 | F4.3 Architectuur en ontwerpprincipes | U36 = 3 | 1,5 uur | 3,9 |
| 37 | F4.4 Threat modelling | U37 = 3 | 1,5 uur | 3,9 |
| 38 | F4.5 Van requirement naar ontwerpkeuze | U38 = 3 | 1,5 uur | 3,9 |
| 39 | F4.6 Security in de lifecycle | U39 = 3 | 1,5 uur | 3,9 |
| 40 | F4.7 Testen en valideren | U40 = 3 | 1,5 uur | 3,9 |
| 41 | F4.8 Peerreviewcarrousel | U41 = 3 | 1,5 uur | 3,9 |
| 42 | F4.9 Dossier en toetsvoorbereiding | U42 = 3 | 1,5 uur | 3,9 |

### Nog niet begrote toetsactiviteiten

| Rij | Huidige omschrijving | Code | Huidige invulling |
|---|---|---|---|
| 43 | Fundament kennistoets - duur open | ts? | Toetsduur, toetsweek en bezetting nog bepalen; geen weekwaarde ingevuld |
| 44 | Fundament toetsconstructie - uren open | tr? | Toetsconstructie-uren nog bepalen; geen weekwaarde ingevuld |
| 45 | Fundament nakijken - tijd open | fb? | Nakijktijd per student nog bepalen; geen weekwaarde ingevuld |

Er is in deze versie nog geen afzonderlijke kennistoetsherkansingsregel met duur of week ingevuld.

## 5. Professioneel Profiel: week 5–10

Rijen 49–66: hele groep van 30, één docent gedurende het hele blok, code `gc?`. Gedeelde feedback voor profiel en project is één keer bij Profiel geboekt. De hoeveelheid hieronder komt rechtstreeks uit de weekcellen, niet uit het aantal activiteitregels.

| Rij | Roosternaam | Weekcel en contacthalfuren | Klokuren | DBU (BS) |
|---|---|---|---:|---:|
| 49 | P5.1 Verdieping & intake voorbereiden | V49 = 9 | 4,5 | 5,85 |
| 50 | P5.2 Eerste proef | V50 = 9 | 4,5 | 5,85 |
| 51 | P5.3 Zichtbare voortgang | V51 = 3 | 1,5 | 1,95 |
| 52 | P6.1 Keuzeclinic & onderzoeksopzet | W52 = 9 | 4,5 | 5,85 |
| 53 | P6.2 Profielonderzoek opzetten | W53 = 6 | 3 | 3,9 |
| 54 | P6.3 Keuzes toetsen | W54 = 3 | 1,5 | 1,95 |
| 55 | P7.1 Keuzeclinic & bewijs | X55 = 6 | 3 | 3,9 |
| 56 | P7.2 Eerste onderzoeksronde | X56 = 9 | 4,5 | 5,85 |
| 57 | P7.3 Een inzicht delen | X57 = 3 | 1,5 | 1,95 |
| 58 | P8.1 Verdieping & validatie | Y58 = 6 | 3 | 3,9 |
| 59 | P8.2 Profielresultaat toetsen | Y59 = 6 | 3 | 3,9 |
| 60 | P8.3 Review & mini-oefening | Y60 = 3 | 1,5 | 1,95 |
| 61 | P9.1 Clinic gedeeld knelpunt | Z61 = 3 | 1,5 | 1,95 |
| 62 | P9.2 Expertise voor het team | Z62 = 6 | 3 | 3,9 |
| 63 | P9.3 Kennis delen & bijsturen | Z63 = 3 | 1,5 | 1,95 |
| 64 | P10.1 Conclusies & beperkingen | AA64 = 3 | 1,5 | 1,95 |
| 65 | P10.2 Profieltussenreview | AA65 = 6 | 3 | 3,9 |
| 66 | P10.3 Feedback & vervolgafspraken | AA66 = 3 | 1,5 | 1,95 |

| Activiteit | Totaal klokuren | Bronrijen |
|---|---:|---|
| Lessen en clinics | 18 | 49, 52, 55, 58, 61, 64 |
| Profielwerkplaatsen, inclusief tussenreview | 21 | 50, 53, 56, 59, 62, 65 |
| Gezamenlijke feedback | 9 | 51, 54, 57, 60, 63, 66 |
| **Totaal** | **48** | **49–66** |

| Rij | Open activiteit | Code | Ontbreekt |
|---|---|---|---|
| 67 | Portfoliobeoordeling — tijd open | fb? | Beoordelingsstatus, beoordelaars en nakijktijd |
| 68 | Toetsconstructie profiel — tijd open | tr? | Toetsconstructie- en ontwikkeltijd |

## 6. Project: begeleiding, onderwijs en mijlpalen

### Tutorcontact

Elke tutorregel heeft code `gc?`, één eigen team van vijf, één tutor en telkens 2 contacthalfuren = 60 minuten. Weken in de tabel volgen de huidige positionele weekindeling.

| Rij | Team | Huidige weken | Uren per tutor over hele periode | DBU |
|---|---|---|---:|---:|
| 91 | (SBD-G1) | 5–13 en 15–19 (14 momenten) | 14 | 18,2 |
| 92 | (SBD-G2) | 5–13 en 15–19 (14 momenten) | 14 | 18,2 |
| 93 | (SBD-G3) | 5–13 en 15–19 (14 momenten) | 14 | 18,2 |
| 94 | (SBD-G4) | 5–13 en 15–19 (14 momenten) | 14 | 18,2 |
| 95 | (SBD-G5) | 5–13 en 15–19 (14 momenten) | 14 | 18,2 |
| 96 | (SBD-G6) | 5–13 en 15–19 (14 momenten) | 14 | 18,2 |

Samen: **84 tutoruren**. In week 5–10 valt het uur binnen projectwerktijd. Week 14 bevat de midterm in plaats van het gewone gesprek. Week 11 heeft in de huidige invoer zowel Business Understanding als gewoon tutorcontact; week 19 heeft zowel het Eind Event als gewoon tutorcontact. Plan deze niet dubbel op hetzelfde tijdstip.

### Onderwijsactiviteiten en gezamenlijke momenten

| Rij | Roosternaam | Weekcel | Duur programma | Docenten tegelijk (N) | Aanwezigheidsuren | DBU (BS) |
|---|---|---|---:|---:|---:|---:|
| 97 | J12 Werkatelier bewijs & validatie | AD97 = 3 | 1,5 uur | 1 | 1,5 | 1,95 |
| 98 | J13 Intervisie praktijksituaties | AE98 = 3 | 1,5 uur | 1 | 1,5 | 1,95 |
| 99 | J15 Van bevinding naar advies | AG99 = 3 | 1,5 uur | 1 | 1,5 | 1,95 |
| 100 | J16 Workshop kennisoverdracht | AH100 = 3 | 1,5 uur | 1 | 1,5 | 1,95 |
| 101 | J17 Peerreview conceptoplevering | AI101 = 3 | 1,5 uur | 1 | 1,5 | 1,95 |
| 102 | J18 Presentatiecoaching oplevering | AJ102 = 3 | 1,5 uur | 1 | 1,5 | 1,95 |
| 103 | J11 Business Understanding middag | AC103 = 7 | 3,5 uur | 6 | 21 | 27,3 |
| 104 | J14 Midterm - alle tutoren | AF104 = 6 | 3 uur | 6 | 18 | 23,4 |
| 105 | J19 Eind Event - alle tutoren | AK105 = 18 | 9 uur | 6 | 54 | 70,2 |

De bronnotities geven nadere betekenis:

- **Rij 103:** Business Understanding 13:00–16:30. Alle zes tutoren de hele middag: 21 aanwezigheidsuren, inclusief 15 minuten pauze. Geen losse presentaties daarbovenop boeken.
- **Rij 104:** zes teams × 30 minuten, alle zes tutoren het gehele programma: 18 docenturen. Vervangt gewoon tutorcontact in week 14.
- **Rij 105:** Eind Event 09:00–18:00, alle zes tutoren aanwezig: 54 aanwezigheidsuren inclusief pauzes, lunch, opbouw en borrel. Profielworkshops en projectpresentaties zijn eenmaal binnen deze dag geboekt. Dit is in deze aangeleverde v0.2 al ingevuld, ook al was de volledige eventbezetting in de eerdere losse voorbereidingsnotitie nog open.

### Zelfstandig projectwerk

Code `zs`, nul docenten, kostenfactor nul. De zes projectteams werken parallel. De tabel toont de uren per student/team, niet zesmaal zoveel studielast.

| Rij | Roosternaam | Weekcel | Zelfstandig, uur | Apart tutorcontact | Totale projecttijd per student |
|---|---|---|---:|---:|---:|
| 106 | J5 Zelfstandig projectwerk | V106 = 4 | 2 | 1 uur | 3 uur |
| 107 | J6 Zelfstandig projectwerk | W107 = 7 | 3,5 | 1 uur | 4,5 uur |
| 108 | J7 Zelfstandig projectwerk | X108 = 7 | 3,5 | 1 uur | 4,5 uur |
| 109 | J8 Zelfstandig projectwerk | Y109 = 10 | 5 | 1 uur | 6 uur |
| 110 | J9 Zelfstandig projectwerk | Z110 = 13 | 6,5 | 1 uur | 7,5 uur |
| 111 | J10 Zelfstandig projectwerk | AA111 = 13 | 6,5 | 1 uur | 7,5 uur |

Totaal week 5–10: **27 uur zelfstandig + 6 uur tutorcontact = 33 uur projecttijd per student**. Het tutoruur mag dus niet nóg eens bij die 33 uur worden opgeteld. `Onderdelen!BJ106:BJ111` toont 0 omdat het tabblad `Lesuren` de code `zs` niet meetelt; de ingevulde weekcellen betekenen wel degelijk studentwerktijd. Vier projectdagen per week vanaf week 11 zijn niet als complete hoeveelheid zelfstandige studenturen uitgewerkt in deze invoer.

| Rij | Open activiteit | Code | Wat ontbreekt? |
|---|---|---|---|
| 112 | Bedrijfsbezoek / oplevering — open | gc? | Omvang, begeleiding, aanwezigheid bij het bedrijf en eventuele reistijd |
| 113 | Projectbeoordeling — tijd open | fb? | Beoordelingsstatus, beoordelaars en nakijktijd |
| 114 | Herkansing week 20 — omvang open | ass? | Omvang, bezetting en exacte planning |

## 7. Kalender: huidige invulling, nog niet bevestigd

De activiteitnamen gebruiken doorlopende minorweken. Het tabblad `Weken` bevat periode-/lesweken met een bestaande kalender. Dat is niet automatisch dezelfde telling. Hieronder staan de twintig kolommen waarin deze versie activiteiten plaatst.

| Positie in minorplanning | Kolom Onderdelen | Kalenderlabel uit Weken | Capaciteit uit Weken |
|---|---|---|---:|
| 1 | R | P1 lw1 (kw36) 31/08/2026 | 1 |
| 2 | S | P1 lw2 (kw37) 07/09/2026 | 1 |
| 3 | T | P1 lw3 (kw38) 14/09/2026 | 1 |
| 4 | U | P1 lw4 (kw39) 21/09/2026 | 1 |
| 5 | V | P1 lw5 (kw40) 28/09/2026 | 1 |
| 6 | W | P1 lw6 (kw41) 05/10/2026 | 1 |
| 7 | X | P1 lw7 (kw42) 12/10/2026 | 1 |
| 8 | Y | Herfstvakantie | 0 |
| 9 | Z | P1 lw9 (kw44) 26/10/2026 | 1 |
| 10 | AA | P1 lw10 (kw45) 02/11/2026 | 1 |
| 11 | AC | P2 lw1 (kw46) 09/11/2026 | 1 |
| 12 | AD | P2 lw2 (kw47) 16/11/2026 | 1 |
| 13 | AE | P2 lw3 (kw48) 23/11/2026 | 1 |
| 14 | AF | P2 lw4 (kw49) 30/11/2026 | 1 |
| 15 | AG | P2 lw5 (kw50) 07/12/2026 | 1 |
| 16 | AH | P2 lw6 (kw51) 14/12/2026 | 1 |
| 17 | AI | P2 lw7 (kw1) 04/01/2027 | 1 |
| 18 | AJ | P2 lw8 (kw2) 11/01/2027 | 1 |
| 19 | AK | P2 lw9 (kw3) 18/01/2027 | 1 |
| 20 | AL | P2 lw10 (kw4) 25/01/2027 | 1 |

**Concreet conflict:** `Weken!E10` = Herfstvakantie en `F10` = 0, terwijl er al activiteiten in de bijbehorende kolom Y staan. Een herkansing in ‘week 8’ mag daarom niet zonder kalenderkeuze in kolom Y worden gezet. Eerst bepalen of onderwijsweken vakantie overslaan en hoe die op periodes en data worden afgebeeld. Bij wijziging van die mapping verschuiven mogelijk ook alle latere celposities.

## 8. Bestaande rekenproblemen en grenzen

| Vindplaats | Waarneming | Betekenis voor gebruik |
|---|---|---|
| Module!Z28 | `=Y28/X28` geeft `#DIV/0!`; X28 = 0 | EC/normbegroting ontbreekt; budgetvergelijking nog niet bruikbaar |
| Interpolaties!H5 | `=Interpretaties!#REF!` geeft `#REF!` | Bestaande kapotte verwijzing in een kopcel; geen reden om de waarde als nul te presenteren |
| Docenturen!CX4 en CZ4 | Opgeslagen totaal 748,80; CX4 telt CX6:CX844 op | Dit bereik bevat naast detailregels ook de subtotaalregels CX47 = 62,40 en CX89 = 241,80. Het verschil met Module!W28 is precies 304,20 = 62,40 + 241,80. Deze interne totaaltelling telt die twee onderdelen dubbel |
| BasisdataRef: namen SmAU, SmHW, SmSW | Benoemde verwijzingen bevatten `#REF!` | Bestaande technische referenties, niet gerepareerd in deze omzetting |
| Open activiteiten | Geen duur of week ingevuld, opgeslagen kosten 0 | Geen bewijs dat toetsing, beoordeling of organisatie niets kost |

Voor deze analyse is **444,60 DBU uit de drie moduleonderdelen** gebruikt, bevestigd door optelling van de 83 activiteitregels en onafhankelijke reconstructie van uren en factoren. Het interne getal 748,80 is niet als begroting overgenomen. Er is geen volledige audit van alle macro’s, exportfuncties of Excel-berekeningen uitgevoerd.

## 9. Werkmapstructuur

| Tabblad | Functie in deze leesversie |
|---|---|
| Module | Algemene gegevens, modules, deelnemers, EC en begroting |
| Populaties | Zes teams van vijf en de totale groep |
| Onderdelen | Actieve activiteiten, uren, bezetting en opmerkingen |
| Referentie | Vergelijkingsversie; niet gebruikt als huidige planning |
| Activiteittypen | Betekenis codes en factoren |
| Faciliteiten | Generieke faciliteitenlijst; concrete ruimtekeuzes ontbreken in de actieve invoer |
| Lestijden | Lesuren en dagtijden van het sjabloon |
| Weken | Kalender, lesweeklabels en capaciteit |
| TBM normen | Normfactoren en rekeneenheden |
| Basisdata | Afgeleide gegevens voor rooster/export |
| Interpretaties | Normalisatie van invoer, waaronder vraagtekens |
| Interpolaties | Spreiding en doorrekening van weekinvoer |
| Lesuren | Berekende lesuren; telt niet alle studentwerktijd |
| Contacturen | Berekende contacturen |
| Docenturen | Berekende docentvergoedingen en interne totalen |
| Faciliteituren | Afgeleide ruimte-inzet |
| OnderdelenCFD | Verborgen sjabloon-/opmaakondersteuning, geen celinhoud aangetroffen |
| OnderdelenCF | Verborgen sjabloon-/opmaakondersteuning, geen celinhoud aangetroffen |
| BasisdataRef | Verborgen referentieondersteuning, geen celinhoud aangetroffen |

De voorgestelde mutaties, met dezelfde rijnummers als deze bron, staan in [OPF-impact weekopbouw Mark](opf-impact-weekopbouw-mark.md).

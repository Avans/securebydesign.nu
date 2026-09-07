---
marp: true
theme: default
paginate: true
lang: nl
title: "W1 · blok 1 — Intro Secure by Design"
description: "Veiligheid als ontwerpkwaliteit, niet als eindcontrole"
---

# Secure by Design

## Veiligheid als ontwerpkwaliteit

**Week 1 · blok 1** — Mindset & cultuur
90 minuten

<!--
⏱ 0–2. Dit is het allereerste blok van de minor. De toon die je hier zet houdt vier weken.

Zeg in je eigen woorden, maar zeg deze drie dingen wél:
1. Dit is geen hackcursus. Wie kwam voor Kali Linux: dat komt na deze vier weken.
2. Dit is voor tech én non-tech. De scheidslijn is techniek-comfort, niet voorkennis —
   security is voor iedereen in deze zaal nieuw.
3. Aan het eind van week 1 heeft elk team één ingevuld canvas. Daar werken we vanaf nu naartoe.

Open niet met een demo, niet met een aanval, niet met een eng verhaal. Dat is precies het frame
dat we deze minor níét willen.
-->

---

## Waar we deze vier weken heen gaan

| Week | Thema | Wat je maakt |
|---|---|---|
| **1** | Mindset & cultuur — *waarom & wie* | **Security Context Canvas** |
| 2 | De boze buitenwereld — *dreigingen & aanvallers* | Risicoprofiel-laag |
| 3 | Regels & ketens — *governance* | Governance-laag |
| 4 | Ontwerpen & bouwen — *requirements & lifecycle* | Secure-by-design dossier |

Eén casus. Vier lagen. Eén kennistoets.

<!--
⏱ 2–5. Laat zien dat er een lijn is; studenten willen weten waar het heen gaat.

Benoem dat het canvas uit week 1 níét wordt weggegooid — het groeit door. De assetnummers die
ze donderdag verzinnen (A1, A2, A3) gebruiken ze in week 4 nog steeds. Dat maakt het werk van
deze week serieus.

Zeg ook: de praktijk dient het onthouden. Spel, canvas en opdrachten zijn er om de stof te laten
beklijven vóór de kennistoets — niet om je nu al zelfstandig security-architect te maken.
-->

---

## Na dit blok kun je

1. uitleggen waarom veiligheid een **ontwerpkwaliteit** is en geen eindcontrole;
2. **B, I en V** (beschikbaarheid, integriteit, vertrouwelijkheid) benoemen én toepassen op een alledaags voorbeeld;
3. bij een incident aanwijzen **welke van de drie** het zwaarst geraakt werd;
4. in eigen woorden zeggen wat *security first* betekent voor een ontwerpkeuze;
5. de begrippen van vandaag terugvinden op je eigen **begrippenkaart**.

<!--
⏱ 5–7. Lees ze niet voor. Noem doel 2 en 3 hardop — die twee komen letterlijk terug op de
kennistoets en in blok 6 (assets) als ophaalmoment.

Doel 5 is een procesafspraak: de begrippenkaart start vandaag en loopt vier weken door.
-->

---

## Vandaag

| Tijd | Wat |
|---|---|
| 0–25 | **Verhaal** — veiligheid als ontwerpkwaliteit, BIV, drie beroemde fouten |
| 25–65 | **Aan het werk** — mini-incidenten ontleden in groepjes van 3–4 |
| 65–83 | **Terug & verdieping** — oogsten, en waarom V níét altijd het zwaarst weegt |
| 83–90 | **Afsluiting** — begrippenkaart, leeswerk, casus voor morgen |

<!--
⏱ 7–8. Kort tonen. Studenten hebben houvast nodig aan het ritme; vanaf blok 2 herkennen ze het.
-->

---

## Deel 1 · Verhaal

### Veiligheid als ontwerpkwaliteit

<!--
⏱ 8. Overgangsslide. Vanaf hier ben jij 20 minuten aan het woord, met twee momenten waarop je
de zaal aan het werk zet (de openingsvraag en het BIV-rondje).
-->

---

## Wat betekent "veilig ontworpen"?

Denk aan iets alledaags:

- een **pinautomaat** op een winkelstraat
- een **fietsslot**
- de **balie** van een huisartsenpraktijk
- de **deur** van dit lokaal

> Wat is daaraan veilig ontworpen — en wat is eraan vastgeplakt?

<!--
⏱ 8–14. Dit is een gesprek, geen slide. Verzamel 6–8 antwoorden op het bord in twee kolommen:
"zit in het ontwerp" en "zit er later aan geplakt".

Wat je wilt uitlokken: het fietsslot is een aangeplakte maatregel, de pinautomaat heeft
veiligheid in het ontwerp (geen contant geld zichtbaar, camera, dagelijkse limiet, kaart+pin).
De balie is een mooie: de fysieke opstelling bepaalt of de volgende patiënt meeluistert.

Corrigeer niemand. De tweede kolom is meestal veel voller dan de eerste — dat is je bruggetje.
Zeg dan: "Dit is waar deze minor over gaat: wat in de linkerkolom had gekund."
-->

---

## Security is geen eindcontrole

Het klassieke patroon:

**bedenken → bouwen → opleveren → *en dan* security**

Wat daar misgaat:

- de goedkoopste momenten om iets te veranderen zijn dan al voorbij
- security wordt de afdeling die **nee** zegt
- veiligheid landt als een **lijstje maatregelen**, niet als een keuze

<!--
⏱ 14–17. Hier zit de kernboodschap van het hele blok.

Vertel het als verhaal, niet als theorie: bij oplevering kost een wijziging tien keer zo veel als
op de tekentafel, dus wordt hij niet gedaan, dus komt er een compenserende maatregel bovenop.
Zo krijg je gebouwen met tralies in plaats van gebouwen met een goede plattegrond.

En: security-als-eindcontrole maakt van veiligheid iemand anders zijn probleem. In deze minor is
het de ontwerper zijn probleem — dus dat van iedereen in deze zaal, technisch of niet.
-->

---

## Security first

Niet: *"is het al veilig?"* aan het eind
Maar: *"wat is hier de veilige keuze?"* bij elke keuze

Drie vragen die je altijd kunt stellen:

1. Wat gaat hier kapot als het misgaat — en bij **wie**?
2. Wie zou hier iets aan hebben?
3. Wat is de veilige stand als we **niets** doen?

<!--
⏱ 17–19. Deze drie vragen zijn het gereedschap dat ze de hele week gebruiken; ze komen terug in
het canvas (vak 2, vak 6, vak 9). Zeg dat erbij.

Vraag 3 is de minst intuïtieve en de belangrijkste: de standaardstand ís de stand die 95% van de
gebruikers houdt. Daar komen we donderdag op terug bij "secure by default".
-->

---

## B, I en V

| | Betekent | Gaat mis als |
|---|---|---|
| **B**eschikbaarheid | het werkt als het moet | niemand kan erbij |
| **I**ntegriteit | de gegevens kloppen | er staat iets onjuists |
| **V**ertrouwelijkheid | alleen wie het mag, ziet het | iemand kijkt mee |

Internationaal: **CIA** — *confidentiality, integrity, availability*

<!--
⏱ 19–23. Uitleggen, en dan meteen laten toepassen. Neem twee voorbeelden en vraag de zaal welke
letter er sneuvelt:

- Ziekenhuis plat door ransomware → B (en pas daarna V).
- Verkeerde bloedgroep in een dossier → I. Dit is de belangrijkste van de drie en de minst
  genoemde: laat de zaal even voelen dat "de gegevens kloppen niet" erger kan zijn dan
  "de gegevens liggen op straat".
- Medisch dossier van een BN'er in de krant → V.

Zeg erbij: de volgorde verschilt per casus én per betrokkene. Die volgorde onderbouwen is precies
wat ze vrijdag op het canvas doen (vak 3).
-->

---

## Drie beroemde fouten

### 1 · OV-chipkaart (2008)

Het beveiligingsontwerp werd **geheim gehouden**. Onderzoekers kraakten het alsnog — en toen was
er geen tweede laag.

> Het slot mag bekend zijn. Alleen de sleutel is geheim.

<!--
⏱ 23–26. Je vertelt drie korte verhalen. Doel is niet de techniek maar het patroon: elke keer
faalde een principe, niet een product.

Bij de OV-chipkaart: de Mifare Classic-chip gebruikte zwakke, zelfbedachte cryptografie waarvan
het ontwerp niet openbaar was. Toen het uitlekte en werd geanalyseerd, was er niets achter.
Kosten van vervanging: honderden miljoenen, jarenlang.

Dit principe heet "geen security door geheimhouding" (P06) en ligt donderdag als kaartje op tafel.
Noem het nummer nog niet — laat ze donderdag zelf de match maken.
-->

---

## Drie beroemde fouten

### 2 · DigiNotar (2011)

Een Nederlandse partij die **vertrouwen** uitgaf voor de halve overheid werd gehackt. Valse
certificaten, wekenlang stil gehouden.

> Als vertrouwen zelf het product is, is verzwijgen de dodelijke fout.

<!--
⏱ 26–28. DigiNotar gaf certificaten uit: het digitale bewijs dat je met de echte site praat.
Aanvallers gaven valse certificaten uit voor onder meer Google, waarmee Iraanse gebruikers
werden afgeluisterd. DigiNotar wist het weken eerder en meldde het niet. Het bedrijf bestond
binnen twee maanden niet meer, en de Nederlandse overheid moest halsoverkop overstappen.

Twee dingen om te benoemen:
- Dit was geen softwarefout maar een keten- en gedragsfout. Governance (week 3) en
  incidentrespons (week 3) hangen hieraan.
- Eén partij was een single point of trust. Dat is het tegenovergestelde van defense in depth.
-->

---

## Drie beroemde fouten

### 3 · Stuxnet (2010)

Malware die **fysieke machines** saboteerde in een fabriek zónder internetverbinding. Binnen­gekomen
via een USB-stick, jarenlang onopgemerkt.

> "Er zit geen kabel aan" is geen beveiliging. En security stopt niet bij het scherm.

<!--
⏱ 28–31. Stuxnet richtte zich op de centrifuges van het Iraanse nucleaire programma: het liet ze
net iets te snel draaien terwijl de meters normale waarden toonden. Dat laatste is het punt —
dit was een aanval op integriteit (I), niet op vertrouwelijkheid.

Twee lessen die je hier legt:
- Een luchtgat (air gap) is een aanname, geen maatregel. Mensen lopen met sticks naar binnen.
- De schade was fysiek. Security gaat over producten, processen, mensen en machines — niet
  alleen over data. Dat is de opening van blok 2, morgen.
-->

---

## Het patroon

Geen van drieën was een fout in de **code**:

| | Wat faalde |
|---|---|
| OV-chipkaart | een **ontwerpprincipe** |
| DigiNotar | een **proces** en de communicatie |
| Stuxnet | een **aanname** over de omgeving |

<!--
⏱ 31–33. Dit is de slide waar het blok om draait. Zeg hem langzaam.

Elk van deze drie was te zien op de tekentafel, door iemand die de goede vraag stelde. Dat is de
vaardigheid die we vier weken lang oefenen — en daar heb je geen programmeerachtergrond voor
nodig. Kijk daarbij expliciet de non-tech kant van de zaal aan.
-->

---

## Deel 2 · Aan het werk

### Vier mini-incidenten, groepjes van 3–4

<!--
⏱ 33. Overgang. Vanaf hier praat jij nog maar weinig.

Groepjes van 3–4, gemengd tech/non-tech — deel ze zelf in, laat ze niet zelf kiezen. Dit zijn
NIET de vaste casusteams; die vorm je in blok 5. Zeg dat erbij, anders raken ze in de war.
-->

---

## De opdracht

Je krijgt **vier korte incidenten**. Per incident:

1. **Wat ging er stuk?** Kies B, I of V — en zet ze op volgorde.
2. **Wie merkte het als eerste?** Noem een mens, geen systeem.
3. **Waar had dit voorkomen kunnen worden?** Kies één: *ontwerp · proces · gedrag · aanname*.
4. **Eén zin:** wat had de ontwerper anders moeten doen?

⏱ 10 minuten per incident · je hoeft niet alle vier af te hebben

<!--
⏱ 33–37. Uitleggen en vooral de regels benoemen:

- Vraag 2 is niet optioneel. "Het systeem merkte het" bestaat niet — er is altijd iemand die
  belt, klaagt of niet verder kan. Dit dwingt weg van techniek.
- Vraag 4 mag géén maatregel zijn ("ze hadden MFA moeten doen"). Het moet een keuze zijn.
  Verschil: een maatregel plak je erop, een keuze zit in het ontwerp.
- Onaf is prima. Drie goed doordacht is beter dan vier afgeraffeld.

Deel de incidenten uit op papier (één A4 per groepje) zodat er niets op een scherm gebeurt.
-->

---

## De vier incidenten

**1 · De verkeerde bijlage.** Een medewerker mailt een deelnemerslijst naar de hele lijst in plaats van naar de organisator. 340 namen, adressen en dieetwensen.

**2 · De trage ochtend.** Bij een thuiszorgorganisatie is het roosterysteem een ochtend uit de lucht. Niemand weet wie waar wordt verwacht.

**3 · Het kloppende getal.** In een webshop staat bij één product al drie weken een verkeerde voorraad. Klanten bestellen wat er niet is.

**4 · De laadpaal.** Iemand ontdekt dat de app van een laadpaal met een simpele truc iemand anders zijn sessie kan starten. De rekening gaat naar de ander.

<!--
⏱ 37–65. 28 minuten werktijd. Loop rond, ga zitten bij groepjes, zeg weinig.

Wat je in de gaten houdt per incident:
- 1 is V, maar hier zit ook een procesfout (waarom kon dit in één handeling?). Groepjes die
  "beter opletten" opschrijven bij vraag 4: vraag "en de volgende keer dat iemand moe is?"
- 2 is B, puur. Dit is het incident dat laat zien dat security niet over geheimen gaat. Als een
  groepje zegt "dit is geen securityincident" — dat is de beste discussie van het uur. Laat hem lopen.
- 3 is I, en is expres saai. Geen aanvaller, geen hack, gewoon een getal dat niet klopt.
  Vraag: wie draagt hier de schade? (de klant, en pas daarna de webshop)
- 4 is de enige met een aanvaller. Technische studenten storten zich hierop. Stuur ze terug naar
  vraag 2 en 3.

Twee vragen die je rondlopend gebruikt:
  "wie mist dit als eerste?" en "wat had er op de tekentafel anders gekund?"

Laatste 5 minuten: zeg dat ze hun beste zin bij vraag 4 markeren — die halen we op.
-->

---

## Deel 3 · Terug & verdieping

### Wat kwam er boven

<!--
⏱ 65. Overgang. Haal per incident twee groepjes op, niet meer. Schrijf alleen de
BIV-volgorde en de gemarkeerde zin op het bord.
-->

---

## Oogst

Per incident, kort:

- welke letter kwam bovenaan — en was iedereen het daarover eens?
- welke zin bij vraag 4 was een **keuze** en niet een **maatregel**?
- wie merkte het als eerste?

<!--
⏱ 65–75. Tempo houden: maximaal 2,5 minuut per incident.

Waar je op stuurt:
- Bij incident 2 hoor je hopelijk verschil van mening over "is dit security?". Beslis niet te
  snel; laat twee kanten aan het woord en sluit dan af met: beschikbaarheid staat niet voor
  niets vooraan in BIV.
- Verzamel de zinnen bij vraag 4 op het bord. Die lijst is de eerste versie van wat donderdag
  de principekaartjes worden. Fotografeer het bord — je hebt het donderdag nodig.
-->

---

## Verdieping · V is niet automatisch de ergste

Wat studenten meestal denken: **V > I > B**
Wat in de praktijk vaak geldt:

| Context | Zwaarst | Waarom |
|---|---|---|
| Zorgdossier | **I** | verkeerde medicatie schaadt direct |
| Spoedeisende hulp | **B** | een systeem dat plat ligt kost tijd |
| Klokkenluidersmeldpunt | **V** | één naam is genoeg voor schade |

> De volgorde onderbouwen is het werk. Drie vinkjes zetten is dat niet.

<!--
⏱ 75–81. Dit is de verdieping van het blok en de directe voorbereiding op vak 3 van het canvas.

Voeg toe: de volgorde verschilt ook per betrokkene binnen dezelfde casus. Bij een zorgapp weegt
voor de organisatie I het zwaarst (aansprakelijkheid), maar voor de cliënt kan V zwaarder wegen
(mijn buurman hoeft niet te weten dat ik dementie heb). Dat spanningsveld is geen probleem —
het is het gesprek dat je vrijdag op het canvas wilt hebben.

Als je tijd over hebt: vraag de zaal de BIV-volgorde voor deze onderwijsinstelling. Cijfers (I),
Brightspace tijdens toetsweek (B), of het dossier van een student (V)? Er is geen goed antwoord.
-->

---

## Deel 4 · Afsluiting

<!--
⏱ 81. Overgang.
-->

---

## De begrippenkaart

Vanaf vandaag houd je er één bij — één A4, digitaal of op papier.

Per begrip: **de term · één zin in je eigen woorden · één voorbeeld uit de les**

Vandaag toegevoegd:
`ontwerpkwaliteit` · `eindcontrole` · `beschikbaarheid` · `integriteit` · `vertrouwelijkheid` · `security first` · `aanname`

<!--
⏱ 81–85. Waarom dit ertoe doet, hardop zeggen: de kennistoets aan het eind van week 4 toetst
begrippen. Wie ze wekelijks in eigen woorden opschrijft, hoeft niet te stampen.

"In je eigen woorden" is de hele truc — een gekopieerde definitie levert niets op. Zeg dat je
in blok 7 steekproefsgewijs vraagt om een begrip uit te leggen zonder te kijken.
-->

---

## Voor het volgende blok

**Individueel, ± 30 minuten:**

1. Vul je begrippenkaart aan met de zeven begrippen van vandaag.
2. Lees de **casusbeschrijving "Naaste"** (Brightspace, 1 A4) — de wijkzorg-app waar we deze hele minor mee werken.
3. Noteer bij die casus **één ding dat volgens jou mis kan gaan**. Eén zin. Neem hem morgen mee.

<!--
⏱ 85–90. Zorg dat de casus vóór dit blok in Brightspace staat.

De ene zin is bewust minimaal: het is de opening van blok 2, en het geeft je een gratis
inventarisatie van wat de klas al ziet. Vraag ze de zin op te schrijven, niet in te leveren —
dat verlaagt de drempel en niemand kan "vergeten" zeggen.

Sluit af met het bruggetje: vandaag ging over wat veiligheid ís. Morgen: wat er allemaal mis
kan gaan — en dat is een langere lijst dan je denkt.
-->

---

## Materiaal & bronnen

- Praatplaat **Fundament** → [securebydesign.nu/fundament](https://securebydesign.nu/fundament)
- **Security Context Canvas** (waar we vrijdag naartoe werken) → [securebydesign.nu/canvas](https://securebydesign.nu/canvas)
- Casus **"Naaste"** → Brightspace
- Vier mini-incidenten (A4 per groepje) → Brightspace / print

<!--
Docentchecklist vóór dit blok:
[ ] Vier incidenten geprint, één A4 per groepje
[ ] Casus "Naaste" klaargezet in Brightspace
[ ] Bord of flap vrij voor twee kolommen ("in het ontwerp" / "eraan geplakt")
[ ] Camera bij de hand: het bord met de zinnen uit vraag 4 heb je in blok 3 nodig
[ ] Groepsindeling 3–4 vooraf gemaakt, gemengd tech/non-tech
-->

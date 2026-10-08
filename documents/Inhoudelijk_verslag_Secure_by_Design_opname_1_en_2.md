# Inhoudelijk verslag – ontwikkeling minor Secure by Design

## Korte context en leeswijzer

Dit verslag brengt twee opnamen samen van een inhoudelijk overleg tussen het Avans-ontwikkelteam van de minor **Secure by Design** en een externe securityprofessional/trainer. Het gesprek dient om de onderwijsambitie aan de beroepspraktijk te toetsen, bruikbare cases te verzamelen en het conceptcurriculum kritisch door te nemen. Ook de professionalisering van docenten komt aan bod. Mark wordt als organisator en ontwikkelaar herkenbaar genoemd; daarnaast stellen twee collega’s zich voor. Omdat niet elke spreekbeurt betrouwbaar aan een persoon is te koppelen, gebruikt dit verslag vooral de aanduidingen **ontwikkelteam** en **externe expert**.

| Bron | Oorspronkelijk bestand | Speelduur | Zwaartepunt |
|---|---|---:|---|
| **Opname 1** | `9e04c7b8-e98d-4905-a3fd-1319832e5ff1.mp3` | 00:52:07 | Aanleiding, opleidingsdoel, benodigde basiskennis en securitypraktijk |
| **Opname 2** | `05502274-a315-4578-8595-a7e0de080f70.mp3` | 01:20:43 | IT/IoT/OT, cases, curriculum, didactiek, toetsing en vervolg |

**Verwerking:** beide bestanden zijn over hun volledige speelduur verwerkt via een werktranscript met lokale spraakherkenning. Het volledige werktranscript is inhoudelijk doorgenomen; enkele onduidelijke passages zijn met een tweede spraakmodel gecontroleerd. De totale duur is circa **2 uur, 12 minuten en 50 seconden**. De inhoud is thematisch geordend en geparafraseerd; dit is geen woordelijke transcriptie. Informele opmerkingen, praktische onderbrekingen en technische problemen bij het presenteren zijn alleen opgenomen als ze inhoudelijke betekenis hebben.

**Tijdverwijzingen** staan steeds per opname en beginnen bij het begin van dat bestand. Ze geven een zoekvenster, geen exact afgebakend citaat. Start bij het terugluisteren zo nodig iets vóór het genoemde moment.

**Status van uitspraken:** een advies, een enthousiaste reactie en een besluit zijn niet hetzelfde. Dit verslag onderscheidt de gepresenteerde onderwijsopzet, gedeelde conclusies, wijzigingsvoorstellen en expliciete vervolgvragen. Bij actiepunten zonder duidelijke eigenaar of termijn is dat vermeld. De opnamedatum is niet vastgesteld; verwijzingen als “dit jaar”, “volgende week” en “november” zijn daarom niet naar een kalenderdatum vertaald.

**Brongetrouwheid:** praktijkcijfers, voorbeelden van incidenten en uitspraken over wetgeving worden weergegeven als bijdragen aan het gesprek. Ze zijn niet afzonderlijk gecontroleerd. Sommige voorbeelden worden door de sprekers zelf uit het geheugen verteld. Waar een naam, normversie of detail onzeker blijft, wordt geen schijnzekerheid toegevoegd.

## Managementsamenvatting

De minor ontstaat vanuit een regionale behoefte aan meer securitykennis bij afgestudeerden van technische en aanverwante opleidingen. In het gesprek worden Brabantse hightechbedrijven, de Brabantse Ontwikkelings Maatschappij en Brabant House of Cyber genoemd als belangrijke aanjagers. Binnen dit programma wordt onderscheid gemaakt tussen cyberweerbaarheid van organisaties en **veiligheid meenemen vanaf het ontwerp**. Het Avans-team werkt aan Secure by Design in Den Bosch; de verwante minor Cyberweerbaarheid wordt bij Breda geplaatst. Een derde lijn rond forensische analyse wordt als ontwikkeling genoemd. **[Opname 1, 00:00:17–00:03:07]**

Het centrale leerdoel is dat studenten een **bruikbare gesprekspartner voor een CISO of andere securityprofessional** worden. Dat vraagt niet alleen herkenning van afkortingen, maar ook inzicht in samenhang, risico’s en de betekenis van keuzes voor een organisatie. Het team stelt een breed fundament en vervolgens gerichte verdieping voor. De externe expert ondersteunt die richting, maar waarschuwt voor de ambitie: zelfs ervaren professionals beheersen niet het hele securitydomein. Studenten moeten ook hun grenzen kennen, gerichte vragen kunnen stellen en weten wanneer andere expertise nodig is. **[Opname 1, 00:10:42–00:19:06]**

Voor de basiskennis worden vier samenhangende bouwstenen benoemd: **assetmanagement, identity and access management, vulnerability management en incidentrespons**. Assetmanagement wordt nadrukkelijk als vertrekpunt toegevoegd: zonder te weten welke systemen en middelen aanwezig zijn, zijn de andere activiteiten moeilijk uitvoerbaar. Het belang van een overzichtelijk beeld van het IT-landschap loopt hier doorheen. **[Opname 1, 00:19:57–00:34:24]**

De inhoudelijke rode draad is **risicogestuurd ontwerpen**. Eerst begrijpen wat een organisatie doet en bezit, daarna dreigingen en bedrijfsimpact bepalen, en vervolgens eisen, maatregelen en ontwerpkeuzes afleiden. Security wordt verbonden met bedrijfscontinuïteit, beschikbare capaciteit en proportionaliteit. Dilemma’s als onmiddellijk patchen versus verstoring voorkomen, of cloudgebruik versus meer eigen controle, illustreren dat een veilige keuze afhankelijk is van de context. **[Opname 1, 00:26:50–00:40:54; opname 2, 00:42:25–00:56:06]**

De bespreking van **IT, IoT en OT** verbreedt Secure by Design voorbij applicaties. Ook netwerken, gebouwapparatuur, industriële productieprocessen en uitgeleverde machines kunnen het onderwerp zijn. Bij OT raakt security bovendien aan fysieke veiligheid. De grenzen tussen de categorieën worden besproken en zijn niet voor iedereen vanzelfsprekend; hun functie en relaties blijken belangrijker dan alleen het etiket. **[Opname 2, 00:02:54–00:19:25]**

Er zijn twee soorten cases nodig: aansprekende incidentverhalen voor bewustwording en **uitgewerkte oefencases** waarop studenten theorie kunnen toepassen. Genoemd worden een klein bedrijfsnetwerk, verbonden gebouwapparatuur, industriële machines, supplychainrisico’s en een conceptuele pakketkluis. De pakketkluis krijgt een positieve reactie omdat zij fysieke beveiliging, digitale toegang en gebruiksgemak samenbrengt. Er wordt gevraagd aanvullende cases aan Mark door te geven. **[Opname 2, 00:00:25–00:02:29 en 00:11:30–00:24:59]**

De gepresenteerde onderwijsopzet beslaat twintig weken: vier weken fundament, een persoonlijk professioneel profiel, een bedrijfsproject en een afsluitend event. De eerste vier weken gaan over mindset en cultuur, dreigingen, governance en organisatie, en ontwerpen en testen. De expert waardeert de onderwerpen, maar adviseert prioritering, minder overlap, een herkenbare plaats voor NIST en het daadwerkelijk toepassen van één of twee controls. Het team verduidelijkt dat een aantal blokken juist oefening, herhaling en terugkoppeling bevat. De discussie gaat daardoor zowel over inhoudelijke omvang als over hoe die omvang op de curriculumkaart zichtbaar wordt. **[Opname 2, 00:25:03–00:40:17 en 00:54:06–01:01:24]**

De beoogde toetsing combineert een kennistoets met portfolio, presentatie en praktijkwerk. AI mag bij onderzoek en uitwerking worden gebruikt; studenten moeten hun keuzes en begrip zelf kunnen uitleggen. In het slot worden ethiek en alternatieve threatmodelingmethoden aanvullend aangestipt. Het gesprek eindigt met voldoende input voor verdere uitwerking, maar zonder een definitief herziene curriculumversie, volledige actieverdeling of planning. **[Opname 2, 01:01:25–01:20:43]**

## Hoofdonderwerpen

| Onderwerp | Centrale vraag | Belangrijkste vindplaats |
|---|---|---|
| Regionale aanleiding en docentontwikkeling | Waarom is de minor nodig en welke kennis moet het team aanvullen? | Opname 1, 00:00:17–00:09:58 |
| Opleidingsdoel en ambitieniveau | Wanneer is een student een geloofwaardige gesprekspartner? | Opname 1, 00:10:42–00:19:06 |
| Jargon en overzicht van het landschap | Welke basis helpt studenten samenhang te begrijpen? | Opname 1, 00:19:57–00:26:42 |
| Operationele securitybasis | Wat moet bekend zijn over assets, toegang, kwetsbaarheden en incidenten? | Opname 1, 00:26:50–00:34:24 |
| Risico, continuïteit en proportionaliteit | Hoe onderbouw je maatregelen en ontwerpkeuzes? | Opname 1, 00:34:24–00:40:54; opname 2, 00:42:25–00:56:06 |
| OSINT en menselijk gedrag | Hoe worden studenten zich bewust van hun eigen kwetsbaarheid? | Opname 1, 00:44:48–00:51:20 |
| IT, IoT, OT en fysieke veiligheid | Wat verandert met de omgeving en de bedrijfsfunctie? | Opname 2, 00:02:54–00:19:25 |
| Casuïstiek en pakketkluis | Welke voorbeelden inspireren en welke zijn bruikbaar als opdracht? | Opname 2, 00:00:25–00:24:59 |
| Fundament en curriculumfeedback | Wat hoort in de eerste vier weken en wat kan worden samengevoegd? | Opname 2, 00:25:03–01:01:24 |
| Controls, requirements en validatie | Hoe maak je maatregelen aantoonbaar en herleidbaar? | Opname 2, 00:35:49–00:47:28 en 00:50:57–00:54:06 |
| Profiel, bedrijfsproject en toetsing | Hoe groeit de student van basiskennis naar eigen toepassing? | Opname 2, 01:01:25–01:10:05 |
| Ethiek, werkvormen en methoden | Welke aanvullingen verdienen een plaats in onderwijs en docenttraining? | Opname 2, 01:10:05–01:20:43 |

## Kern van de discussies

### 1. Aanleiding: securityonderwijs dat aansluit bij het Brabantse werkveld

**Bron: opname 1, 00:00:17–00:05:43.**

Mark schetst dat bedrijven zoals ASML, VDL en Neways enkele jaren eerder hebben aangegeven dat studenten te weinig securitykennis meenemen. De behoefte wordt breder neergezet dan alleen een gespecialiseerde ICT-opleiding: ook mensen uit andere technische en bedrijfskundige opleidingen krijgen in hun werk met beveiligingsvraagstukken te maken.

Brabant House of Cyber wordt beschreven als een gezamenlijke onderwijsontwikkeling vanuit die vraag, met betrokkenheid van verschillende onderwijsniveaus. Er wordt ook een relatie gelegd met regionale financiering en de Beethoven-middelen. Mark noemt uit het hoofd circa veertien miljoen euro voor de onderwijsontwikkeling en circa achthonderd miljoen euro aan Beethoven-middelen in Brabant. Deze bedragen zijn achtergrondinformatie uit zijn toelichting; de exacte omvang en samenhang worden niet gecontroleerd of financieel uitgewerkt.

Binnen het programma worden twee al lopende lijnen en een derde in ontwikkeling genoemd:

- **Cyberweerbaarheid:** gericht op de organisatie en het weerbaar maken daarvan.
- **Secure by Design:** security vanaf het begin meenemen bij ontwerp en inrichting.
- **Forensische analyse:** genoemd als volgende lijn; personele betrokkenheid wordt slechts terloops en onzeker aangeduid.

Naast het bouwen van een minor ziet Mark een bredere opdracht om het securitydenken binnen de academie te versterken. De training voor het ontwikkelteam wordt daarom verbonden aan professionalisering van collega’s. Aanvankelijk was het idee met drie ontwikkelaars een training te volgen, maar de belangstelling blijkt snel groter: circa zestien à zeventien collega’s tonen interesse.

Dat enthousiasme levert een praktisch probleem op: meerdere docenten drie cursusdagen gezamenlijk laten volgen is lastig door onderwijsverplichtingen en deeltijddagen. Een eerste uitvoering wordt in november genoemd en een tweede training is volgens Mark al ingekocht. Openstelling voor collega’s buiten de eigen opleiding is een mogelijkheid, geen uitgewerkt besluit met voorwaarden.

### 2. De bijeenkomst als kritische toets van de onderwijsambitie

**Bron: opname 1, 00:05:44–00:14:07.**

De ontwikkelaars brengen verschillende achtergronden mee: organisatie en governance, ondernemerschap en AI, embedded systems en internettoepassingen, technische automatisering en risicomanagement. De introducties maken duidelijk dat er relevante ervaring aanwezig is, maar dat het team juist actuele securitykennis en praktijkperspectief wil toevoegen.

Het team nodigt de externe expert expliciet uit kritisch te reageren. De gewenste opbrengst is een programma dat bedrijven relevant vinden én studenten een uitdagend, aantrekkelijk halfjaar biedt. Plezier is daarbij geen los doel: het moet helpen dat de inhoud beklijft. Tegelijk wordt gezegd dat er serieus geleerd en gewerkt mag worden.

Er worden drie hoofdvragen voor het overleg geformuleerd:

1. Welke bagage heeft een junior nodig om met securityprofessionals te kunnen spreken?
2. Welke praktijkvoorbeelden en cases kunnen studenten inspireren en aan het denken zetten, juist ook in de industrie?
3. Hoe verhoudt het huidige conceptcurriculum zich tot die beroepspraktijk?

De minor moet studenten interesseren voor verdere ontwikkeling, maar kan hen in twintig weken niet tot volledige securityexpert opleiden. Over dat uitgangspunt bestaat al vroeg overeenstemming.

### 3. Gesprekspartner worden: een breed fundament, gerichte verdieping en zelfkennis

**Bron: opname 1, 00:14:08–00:19:06.**

Het ontwikkelteam onderscheidt twee niveaus. Na ongeveer vier weken moeten studenten genoeg basis hebben om termen te herkennen en een eerste gesprek bij een opdrachtgever te volgen. Zij hoeven niet overal onmiddellijk antwoord op te kunnen geven, maar moeten wel kunnen plaatsen waar een vraag over gaat en gericht verder kunnen zoeken.

Daarna kiezen zij een onderwerp voor verdieping, bijvoorbeeld softwareontwikkeling, ISO 27001, OT of architectuur. Door er langere tijd aan te werken, moet hun bijdrage binnen dat onderwerp inhoudelijk sterker worden. Een professioneel profiel en mogelijk een badge moeten zichtbaar maken welke basis en verdieping de student heeft opgebouwd.

De expert vindt dit een goede richting, maar noemt haar ambitieus. Security is breed en versnipperd; ook ervaren CISO’s beschikken over verschillende specialismen. Iemand uit governance heeft bijvoorbeeld technische expertise naast zich nodig. De vergelijking met een breed overzicht en beperkte diepte wordt gebruikt om duidelijk te maken wat in een minor haalbaar is.

Het team verduidelijkt daarop dat het geen alomvattende deskundigheid verwacht. Het gaat om een stevige basis, een herkenbare verdieping en voldoende vertrouwen om professioneel mee te praten. De expert voegt daar een essentieel criterium aan toe: **hoe ga je om met wat je niet weet?** Zelfkennis, samenwerking en weten waar expertise te vinden is horen bij het beroepsbeeld.

De minor krijgt daarmee ook een oriënterende functie. Studenten kunnen ontdekken of zij verder willen in security, bijvoorbeeld via aanvullende scholing. Zowel enthousiasme voor het vak als een geïnformeerde keuze om een andere richting te nemen wordt als zinvolle opbrengst gezien.

### 4. Eerst het landschap begrijpen, daarna de details

**Bron: opname 1, 00:19:57–00:26:42.**

De expert noemt twee dingen die hij aan het begin van zijn loopbaan miste: begrip van het jargon en een totaalbeeld van de omgeving. Afkortingen zijn in IT en security alomtegenwoordig. Wie daarin nog geen houvast heeft, kan moeilijk volgen waar een gesprek werkelijk over gaat.

Daarnaast helpt een overzicht op het hoogste niveau: welke rol spelen applicaties, netwerken, cloud, lokale systemen, e-mail en toegangsbeheer, en hoe hangen die samen? De expert vertelt dat hij via PLC-techniek en industriële security het vak is ingerold en pas later zicht kreeg op de bredere IT-omgeving. Hij zou studenten liever eerst een soort wereldkaart geven en daarop aanwijzen waar hun verdieping zich bevindt.

Identity and access management wordt als begrijpelijk voorbeeld gebruikt. De vraag wie een sleutel krijgt, waartoe die toegang geeft en wie dat bepaalt, verbindt digitale beveiliging met de fysieke wereld. Zo wordt het principe begrijpelijk voordat studenten in producten of technische details duiken.

AI kan helpen bij het verkennen van die basis, maar het team benadrukt dat de student in een gesprek zelf begrip moet tonen. Een goed gegenereerd document is nog geen bewijs dat iemand de samenhang kan uitleggen.

Er wordt gezocht naar een bruikbaar model of leermiddel voor het hele landschap. Niemand heeft meteen een compleet overzicht paraat. De expert komt vervolgens met NIST als toegankelijke kapstok voor de securitykant. In het gesprek wordt naar “NIST 2” verwezen; de context is het NIST-framework en niet de Europese NIS2-richtlijn. De exacte benaming en versie moeten bij de onderwijsuitwerking helder blijven.

### 5. Vier bouwstenen van de securitypraktijk

**Bron: opname 1, 00:26:50–00:34:24.**

Op de vraag welke onderwerpen een CISO dagelijks bezighouden, noemt de expert aanvankelijk drie gebieden:

- **Identity and access management:** wie kan waar bij en waarom?
- **Vulnerability management:** welke kwetsbaarheden zijn er, hoe worden ze beoordeeld en hoe worden ze verholpen?
- **Incidentrespons:** hoe reageren we op signalen dat iets misgaat?

Bij de verdere uitleg wordt **assetmanagement** als noodzakelijke vierde bouwsteen toegevoegd. Eigenlijk komt die eerst: de organisatie moet weten welke laptops, telefoons, servers en andere middelen zij heeft, inclusief wat daarop draait. Zonder dat beeld ontbreekt de basis om toegang, kwetsbaarheden of incidenten goed te beheren.

Incidentrespons wordt verbonden met het soort asset, de kritikaliteit ervan en de bedrijfsimpact. Dezelfde gebeurtenis kan op een gewone werkplek iets anders betekenen dan op een cruciale server. De expert onderscheidt signalen van een aanval van signalen dat een omgeving al is gecompromitteerd. De plaats in de aanvalsketen beïnvloedt wat nog mogelijk is.

Ook worden drie routes genoemd waarlangs een incident zichtbaar kan worden: detectie door systemen, een melding door een medewerker, en een bericht van een klant of leverancier. De derde route maakt duidelijk dat een organisatie afhankelijk is van de veiligheid en meldingen van andere partijen.

Het team merkt op beperkte eigen praktijkervaring met incidentmanagement te hebben. Studenten moeten niet alleen het perspectief van grote bedrijven met gespecialiseerde afdelingen leren kennen. Een mkb-context, waarin minder mensen en middelen beschikbaar zijn, is eveneens relevant.

### 6. Patchen: snelheid afwegen tegen continuïteit

**Bron: opname 1, 00:27:15–00:29:47.**

Bij vulnerability management ontstaat een concreet dilemma. De expert stelt dat de tijd tussen bekendwording van een kwetsbaarheid en misbruik korter wordt en dat AI daarbij een rol speelt. De in het gesprek genoemde tijdsvergelijkingen zijn illustratief; zij vormen geen algemene patchtermijn.

Aan de ene kant kan een organisatie kwetsbaarheden automatisch laten verhelpen, aangeduid als *zero-touch patching*. Aan de andere kant kan een wijziging zelf verstoring veroorzaken. Het CrowdStrike-voorbeeld wordt gebruikt om te laten zien hoe groot de gevolgen van een foutieve update kunnen zijn.

Daarom bespreekt de expert gefaseerd uitrollen: eerst een pilotgroep, daarna uitbreiding, met voldoende ruimte om verdere uitrol te stoppen als problemen optreden. Ook wordt het wachten op ervaringen van anderen genoemd. Geen van deze strategieën wordt als altijd de juiste neergezet; de afweging hangt af van de kwetsbaarheid en het operationele risico.

Voor het team is juist deze afweging nieuwe, bruikbare input. Het gaat niet alleen om weten dat een patch nodig is, maar om ontwerpen hoe updates verantwoord kunnen worden ingevoerd. Dat kan onderdeel worden van het curriculum.

### 7. Ontwerpkeuzes onderbouwen vanuit dreiging, bedrijf en budget

**Bron: opname 1, 00:34:24–00:40:54.**

Het team vraagt of assetmanagement en infrastructuur ook werkelijk bij het ontwerpkarakter van de minor horen. Een voorbeeld is standaardiseren op een bepaald platform: heeft zo’n keuze een securityargument, of is zij vooral beheer?

De expert verbindt cybersecurity met bedrijfscontinuïteit en risicobeheersing. Inrichting van het landschap, keuze voor cloud of lokale systemen en standaardisatie van apparaten hebben gevolgen voor beschikbaarheid, beheerbaarheid en het aanvalsoppervlak.

Hij beschrijft een opeenvolging van:

1. het algemene dreigingslandschap begrijpen;
2. bepalen welke dreigingen voor deze organisatie relevant zijn;
3. de risico’s en impact prioriteren;
4. daaruit keuzes voor architectuur, assets en maatregelen afleiden.

Een uniform platform kan bijvoorbeeld beter beheersbaar zijn als er maar één persoon beschikbaar is voor patching. De onderbouwing komt dan uit capaciteit en risico, niet uit een algemene voorkeur voor Apple of Windows.

Budget wordt nadrukkelijk in de afweging betrokken. Een mkb-bedrijf kan niet dezelfde voorzieningen organiseren als een zeer grote technologieorganisatie. De expert verwijst naar proportionaliteit, maar stelt dat “geen geld” op zichzelf geen toereikende verantwoording is om beveiliging te laten liggen. Als praktijkindicatie noemt hij een securitybudget van ongeveer tien tot vijftien procent van de IT-uitgaven. Dat wordt niet als vastgestelde norm afgesproken.

### 8. Urgentie, OSINT en de menselijke kant van security

**Bron: opname 1, 00:41:16–00:51:20.**

Het team vraagt hoe vaak ernstige incidenten daadwerkelijk voorkomen. De expert ziet naar eigen zeggen meer succesvolle aanvallen, maar wijst ook op een communicatieprobleem: als de securitywereld jarenlang dezelfde waarschuwing geeft, kunnen mensen ervoor afstompen. Hij verwijst naar rapporten van Gartner en CrowdStrike en noemt uit het geheugen een toenamepercentage. Exact rapport, meetperiode en definitie worden niet vastgesteld.

AI wordt besproken als versneller van aanvallen en mogelijk ook als ondersteuning van verdediging. De opmerkingen hierover drukken vooral urgentie en onzekerheid uit; ze vormen geen uitgewerkte voorspelling of productkeuze.

Daarna verschuift het gesprek naar OSINT en social engineering. Studenten die bij een hightechbedrijf werken, kunnen via hun openbare profiel worden benaderd. Als voorbeeld wordt een recruiter genoemd die informatie probeert los te krijgen of een kandidaat een programmeeropdracht met te installeren software laat uitvoeren.

De expert adviseert OSINT in ieder geval op hoofdlijnen mee te nemen, met nadruk op het beschermen van het eigen professionele profiel. Het team ziet mogelijkheden voor ervaringsgerichte werkvormen. Een eerdere onderwijsactiviteit over laaggeletterdheid, waarbij veel studenten zonder voldoende begrip een ingewikkeld document tekenden, illustreert hoe snel mensen op een overtuigend verzoek ingaan.

Ook de makkelijke toegang tot een securitybijeenkomst op basis van een bekende naam wordt als voorbeeld aangehaald. De les is dat vertrouwen, gemak en menselijke routines beveiligingsprocessen kunnen ondergraven. Ideeën zoals een QR-code-oefening worden verkend, maar niet als uitvoeringsplan vastgesteld.

Bij mogelijke verdieping buiten de opleiding noemt de expert de One Conference in Den Haag, een evenement in Utrecht waarvan de naam niet paraat is, en activiteiten van de RDI. Dit zijn aanknopingspunten om verder uit te zoeken; studententoegang, data en concrete bezoeken worden niet afgesproken.

### 9. Secure by Design in IT, IoT en OT

**Bron: opname 2, 00:00:25–00:11:29.**

Na de pauze vraagt het team om cases die zowel inspireren als bruikbaar zijn als opdracht. De maakindustrie moet herkenbaar terugkomen vanwege de regionale context. Tegelijk kunnen andere voor studenten minder bekende omgevingen, zoals de zorg, helpen hun perspectief te verbreden.

De expert begint met een indeling van de omgeving. In het gesprek ontstaat daarbij geen volkomen strakke taxonomie; de deelnemers toetsen de begrippen aan concrete voorbeelden.

| Omgeving | Betekenis in deze discussie | Ontwerpvragen die worden opgeroepen |
|---|---|---|
| **IT** | Ondersteunende informatievoorziening, werkplekken, netwerken en applicaties | Hoe richten we verbindingen en toegang in zodat de organisatie veilig kan werken? |
| **IoT** | Verbonden apparaten, onder meer liften, gebouwbeheer, verlichting en koffieapparaten | Welke verbindingen zijn nodig, wat beheert de leverancier en hoe beperken we toegang? |
| **OT** | Technologie voor het primaire industriële proces, zoals machines, PLC’s en robots; ook besturing in uitgeleverde producten | Hoe beveiligen we productie en besturing, en hoe voorkomen we gevolgen voor fysieke veiligheid? |

Een docent wijst erop dat de eigen CISO sommige onderwijsapparatuur als OT aanduidt. De expert gebruikt vanuit de maakindustrie een andere afbakening. Dat verschil is inhoudelijk relevant: begrippen worden vanuit de bedrijfsfunctie gebruikt en kunnen in een andere sector anders worden ingevuld.

De tegenstelling tussen ondersteunende middelen en de technologie waarmee een bedrijf zijn primaire opbrengst realiseert, helpt de deelnemers om de indeling te begrijpen. Zij is bedoeld als didactische kapstok, niet als volledige definitie voor iedere organisatie.

Bij IoT valt op dat apparaten wel in het eigen gebouw staan, maar vaak niet volledig onder eigen beheer vallen. Meerdere leveranciers kunnen toegang nodig hebben. Juist die afhankelijkheden horen in het ontwerp thuis.

Voor OT worden twee situaties onderscheiden: de technologie waarmee een producent zelf produceert, en de besturing in het apparaat dat hij aan een klant levert. De tweede wordt onderdeel van de operationele omgeving van die klant. Uitlezen, onderhoud of aansturen op afstand brengt vervolgens verbindingen met IT tot stand. Secure by Design moet dus over die grenzen heen kijken.

### 10. Van inspirerend incident naar bruikbare oefencase

**Bron: opname 2, 00:11:30–00:24:59.**

De expert stelt voor een netwerk als tastbaar startpunt te gebruiken. Een fictief bedrijf kan bijvoorbeeld twintig laptops, vijf printers en een belangrijke applicatie hebben. Studenten moeten uitzoeken wat met wat communiceert en welke verbindingen toegestaan horen te zijn.

Een **dataflowdiagram** wordt daarbij sterk aanbevolen. De discussie raakt aan de opmerking dat dergelijke diagrammen uit een curriculum zouden zijn gehaald omdat ze weinig meer werden gebruikt. Zowel de expert als een docent ziet juist veel waarde in het zichtbaar maken van relaties. De precieze naam van het diagram is minder belangrijk dan een begrijpelijk logisch ontwerp.

Het ontwerp kan vervolgens laten zien waar grenzen liggen en wat wel en niet met elkaar mag communiceren. Op applicatieniveau ontstaat een vergelijkbare vraag bij API’s en componenten; daar wordt STRIDE als methode genoemd. Het netwerkvoorbeeld heeft volgens de expert het voordeel dat routers, firewalls en verbindingen voor studenten concreter zijn.

Bij IoT ontstaat een case rond gebouwbeheer. Mag een lift communiceren met andere apparatuur? Welke toegang krijgt een leverancier? Welke verbinding heeft een koffieapparaat nodig? Het eigen schoolgebouw kan hiervoor inspiratie leveren. Er wordt bijvoorbeeld besproken dat apparatuur internettoegang kan hebben zonder brede toegang tot het gewone interne netwerk.

Bij OT verschuift de vraag naar software voor machines en toegangsrechten tot besturing. Het CNC-voorbeeld maakt de koppeling tussen security en **safety** zichtbaar: ongewenst gedrag van een machine kan letsel veroorzaken. In deze context is een incident meer dan gegevensverlies of een onbereikbare applicatie.

De sprekers noemen voorbeelden om de gevolgen aansprekend te maken: een Amerikaanse waterinstallatie, een video van een motor of compressor die door aansturing kapotgaat, Stuxnet, SolarWinds, Kaseya en een onvolledig herinnerd voorbeeld met windturbines. De details van enkele incidenten blijven onzeker. SolarWinds wordt in het gesprek expliciet bijgesteld naar een supplychainvoorbeeld in plaats van zonder meer een OT-incident.

De supplychain wordt bovendien breder getrokken dan softwareupdates. Een deelnemer gebruikt onderzoek naar drones als aanleiding om te vragen of de laatste fysieke overdracht en het transport voldoende worden meegenomen. Een product kan technisch onderzocht zijn en toch bij assemblage, vervoer of aflevering worden gemanipuleerd. Cryptografie wordt in dit verband eveneens als relevant onderwerp genoemd, zonder verdere uitwerking.

Het team formuleert hier een concrete behoefte: **aanvullende cases graag naar Mark doorgeven**. Het gaat zowel om verhalen die nieuwsgierigheid opwekken als om een fictief bedrijf of systeem waarop studenten na een theorieles een opdracht kunnen uitvoeren. Zelf incidentverhalen laten opzoeken is een mogelijkheid, maar vervangt geen goed ontworpen oefencase.

De **pakketkluis** wordt voorgesteld als conceptuele ontwerpopdracht. Er kan waarde in liggen, de kluis moet niet voor onbevoegden opengaan en een gebruiker moet met een app toegang kunnen krijgen. Tegelijk moet de oplossing begrijpelijk blijven voor mensen die weinig technische stappen willen uitvoeren. De expert reageert positief op de combinatie van fysieke en digitale beveiliging. Het idee is al voor voorlichting gebruikt; definitieve inzet als centrale onderwijsopdracht wordt hier nog niet vastgelegd.

### 11. De gepresenteerde minor: fundament, profiel, project en eindevent

**Bron: opname 2, 00:25:03–00:30:33 en 01:01:25–01:09:26.**

Het team toont de opzet via de website `SecureByDesign.nu`, bedoeld om het programma transparant te maken voor studenten en feedback mogelijk te maken. Een introductiefilm benadrukt verbonden systemen, versnelling door AI, snellere aanvallen en ontwerpen met een dreiging voor ogen. Ook noemt de film detecteren, patchen en herstellen, de menselijke kant van cybersecurity en het leren denken als ontwerper, adviseur en aanvaller. Veiligheid meenemen vanaf de eerste ontwerpbeslissing is de verbindende boodschap.

De minor wordt als een programma van **twintig weken** gepresenteerd met vier hoofdelementen:

1. **Fundament:** vier weken gezamenlijke basiskennis en begrippen.
2. **Professioneel profiel:** de student kiest een richting, onderzoekt die en deelt de uitkomsten.
3. **Bedrijfsproject:** toepassing bij een partner uit Brabant House of Cyber.
4. **Eindevent:** kennis en projectresultaten zichtbaar maken voor studenten en bedrijven.

De doelgroep is breed. Ook een student met een bedrijfskundige achtergrond moet een route kunnen kiezen, bijvoorbeeld via organisatie, processen, wetgeving of ISO. Een technisch georiënteerde student kan een andere verdieping nemen.

De onderdelen zijn geen volledig losstaande fasen. Bedrijven kunnen al in week twee projecten introduceren. Rond week vijf of zes wordt het profiel nadrukkelijker opgepakt en start het project met business understanding, scoping en een plan. Een kennistoets wordt rond week zes genoemd. Later verschuift het zwaartepunt naar het project, in groepen van ongeveer vier à vijf studenten.

De mondelinge toelichting bevat verschillende globale aanduidingen voor de lengte van de verdieping. Zij is daarom vooral te lezen als een verschuiving van aandacht: eerst veel gezamenlijke instructie, vervolgens meer persoonlijk onderzoek en uiteindelijk meer projectwerk. Een definitief rooster of exacte urenverdeling wordt niet vastgesteld.

Voor het eindevent denkt het team aan workshops waarin studenten anderen meenemen in hun werk en een podium voor sterke onderzoeken of resultaten. Bedrijven kunnen daarbij deelnemen. Concrete organisatie, selectie en datum blijven open.

### 12. Vier weken fundament: goede onderwerpen, maar een volle kaart

**Bron: opname 2, 00:29:18–00:35:46 en 00:57:17–01:01:24.**

Het fundament krijgt vier weekthema’s:

| Week | Gepresenteerd thema | Betekenis die in het gesprek wordt verduidelijkt |
|---|---|---|
| **1** | Mindset en cultuur | Waarom beveiligen we, wie zijn de spelers, welke basisprincipes en welk gedrag horen daarbij? |
| **2** | Dreigingen en aanvallers | Waartegen verdedigen we ons, vanuit zowel aanvaller als verdediger bekeken? |
| **3** | Governance en organisatie | Hoe organiseren we beveiliging, verantwoordelijkheden, frameworks en relevante regelgeving? |
| **4** | Ontwerpen en testen | Wat doen we concreet met dreigingen, risico’s, eisen en maatregelen in het ontwerp? |

Week één bevat onder meer een kick-off, voorbeelden van wat mis kan gaan, securityprincipes, OSINT, menselijk gedrag en meldcultuur, stakeholders, assets en misbruikscenario’s, en een sociaal element. Er wordt gesproken over negen blokken van anderhalf uur, oftewel 13,5 uur. De spreiding over drie of vier dagen wordt tijdens het gesprek niet eenduidig afgerond.

De expert ziet inhoudelijk geen vreemde onderwerpen. Hij is juist positief over assets en misbruikscenario’s vroeg in het programma, over het gebruik van bronnen voor dreigingsscenario’s (MITRE en vermoedelijk OWASP; die laatste naam is minder duidelijk verstaanbaar) en over het expliciete verschil tussen compliance en security. Zijn zorg is hoeveel nieuwe informatie studenten werkelijk kunnen opnemen.

Het team herkent dat de kaart vol oogt, maar geeft een belangrijke toelichting: niet elk blok is nieuwe leerstof. Sommige blokken dienen om terug te kijken, te oefenen of een weekopdracht te bespreken. Een recap kan op papier als extra onderwerp worden gelezen terwijl de didactische bedoeling juist verwerking is.

De expert adviseert de kern te prioriteren. In de eerste week zou hij securityprincipes en hun achterliggende gedachte vooropzetten, gevolgd door menselijk gedrag. *Least privilege* en *defense in depth* worden genoemd, maar alleen namen kennen is onvoldoende.

Stakeholders, belangen en verantwoordelijkheden kunnen volgens de deelnemers naar het organisatiedeel in week drie verschuiven. Ook wordt voorgesteld overlappende organisatorische blokken samen te voegen. Deze ideeën krijgen instemming als richting; de precieze herziene blokindeling wordt niet afgerond.

Aan het einde van deze bespreking concludeert het team dat de hoofdlijn nog steeds klopt. De vervolgstap is vooral didactisch indikken, verbanden verduidelijken en waar nodig onderwerpen combineren.

### 13. Frameworks en controls: begrijpen door toepassen

**Bron: opname 2, 00:33:37–00:40:17 en 01:10:05–01:11:28.**

De expert waardeert dat **compliance versus security** expliciet op de kaart staat. Hij ziet ook in bedrijven nog geregeld dat voldoen aan een kader wordt verward met daadwerkelijk beheersen van veiligheidsrisico’s.

Hij adviseert NIST herkenbaar naast ISO te zetten. In het gesprek wordt NIST als toegankelijk en vrij beschikbaar vergeleken met ISO. Het team brengt een andere zorg in: alle frameworks uitvoerig behandelen zou de basisfase te groot maken. Studenten moeten eerst weten dat zulke kaders bestaan en waarvoor zij dienen; verdieping kan later in hun profiel.

De expert stelt een concretere aanpak voor: kies voor een oefening één kader en werk **één of twee controls** uit. Laat studenten eerder geleerde kennis daarop toepassen. Een voorbeeld is de dekking van assetmonitoring: als een bedrijf twintig laptops bezit en er negentien worden gezien, wat betekent dat en wat doe je met de ontbrekende laptop?

Daarnaast moet worden gekeken naar verschillende soorten assets. Een maatregel die voor laptops is ingericht, kan nog tekortschieten voor telefoons, servers, switches of andere apparatuur. De expert gebruikt daarvoor de termen breedte en diepte. De kern van zijn betoog is dat studenten niet alleen opschrijven dat een control bestaat, maar leren vragen **hoe volledig en hoe aantoonbaar** die werkt.

Ook een indeling in techniek, organisatie en het juridische aspect wordt als kapstok voorgesteld. *People, process and technology* komt eveneens ter sprake. Het team ziet deze elementen al in de opzet terug, maar ze zijn nog niet overal expliciet benoemd.

Later wordt voorgesteld frameworks en wetgeving duidelijker als verschillende onderdelen te presenteren en vrijgemaakte ruimte voor toepassing te gebruiken. Productgerichte regelgeving voor de maakindustrie wordt als mogelijk aandachtspunt genoemd. De afkortingen lijken op CRA en CER, maar zijn niet overal duidelijk verstaanbaar; ook de sprekers corrigeren elkaar over hun betekenis. De sprekers zoeken zelf naar de afbakening tussen de gebruikte afkortingen; er volgt geen definitieve selectie van te behandelen regelgeving.

### 14. Van risico naar requirements, maatregelen en validatie

**Bron: opname 2, 00:40:38–00:47:28 en 00:50:57–00:56:06.**

Een ontwerpvoorbeeld maakt de link met monitoring tastbaar. Een verbinding of API die normaal weinig gegevens verstuurt, hoeft niet onbeperkt verkeer te kunnen verwerken. De deelnemers bespreken beperkingen en signalering bij afwijkend gedrag. Het punt is dat een fout of misbruik niet alleen door een gebruiker voorkomen hoeft te worden: het ontwerp kan gevolgen begrenzen en detectie ondersteunen.

Bij de vraag hoe securityrequirements worden geformuleerd, blijkt dat het betreffende lesonderdeel nog niet volledig is uitgewerkt. De expert grijpt terug op dreigingslandschap, organisatieprofiel en risicomatrix. Ook de **risk appetite** moet meewegen: welke risico’s wil de organisatie beperken en welke accepteert zij bewust?

Maturity komt als hulpmiddel ter sprake, met een verwijzing naar een model met vijf niveaus. De naam CMM wordt genoemd nadat de deelnemers zoeken naar de juiste afkorting; de precieze modelvariant wordt niet vastgesteld. De algemene gedachte is dat een organisatie een passend doel kan kiezen en dat zelfs een hoge volwassenheid geen garantie is dat zij nooit wordt aangevallen.

Het vastleggen van keuzes wordt verbonden aan een **Statement of Applicability**. De didactische waarde daarvan is dat studenten kunnen uitleggen waarom een maatregel van toepassing is en waarom een andere keuze passend is. In het gesprek worden normdetails en wettelijke verwijzingen niet zorgvuldig uit elkaar uitgewerkt; dit verslag neemt daaruit vooral de eis van onderbouwde, traceerbare afwegingen mee.

Over hulpmiddelen ontstaat een nuanceverschil. Templates en compliance-software kunnen helpen om vragen te stellen en controls te ordenen. Maar een externe tool kan niet zelfstandig bepalen wat passend is voor een organisatie die hij niet werkelijk kent. De deelnemers vinden elkaar in het beeld van ondersteuning bij het nadenken, zonder die verantwoordelijkheid aan het systeem over te dragen.

De expert adviseert het ontwerpdeel onder een **risicogestuurde aanpak** te hangen. Tijdens het gesprek circuleren verschillende Engelse labels; er wordt geen definitieve moduletitel gekozen. De inhoudelijke keten is wel duidelijk:

**Organisatie en assets → dreigingen → risicoprofiel → requirements → ontwerp en maatregelen → bewijs en validatie.**

Het team herkent mogelijke overlap tussen requirements uitleggen en requirements naar een ontwerp vertalen. Samenvoegen of anders ordenen kan ruimte maken. De expert geeft als praktijkvolgorde: begrijpen wat aanwezig is, de kritische processen en diensten bepalen, de risico’s beoordelen en de verdediging daarop inrichten.

### 15. Cloud, eigen beheer en een veranderend beroepsbeeld

**Bron: opname 2, 00:47:28–00:50:57; aansluitend op opname 1, 00:35:54–00:36:34.**

De sprekers bespreken dat sommige organisaties volgens hun ervaring meer lokaal willen beheren, onder meer omwille van gevoelige data en geopolitieke afhankelijkheden. Ook lokale AI-modellen worden genoemd. Deze opmerkingen zijn praktijkobservaties van de deelnemers, geen onderbouwde algemene markttrend.

De expert brengt daartegenover dat cloud-first voor andere organisaties aantrekkelijk blijft door **capability en capacity**: onvoldoende deskundige mensen of te weinig beschikbare capaciteit om alles zelf te beheren. Meer lokale controle vraagt bijvoorbeeld ook kennis voor infrastructuur en back-ups.

De afweging is daarmee wederkerig. Uitbesteden kan de organisatie ontlasten, maar creëert afhankelijkheden; eigen beheer kan meer grip geven, maar vergroot de behoefte aan expertise. Dit sluit aan op het eerdere pleidooi voor organisatiegericht risicodenken.

Het team verkent daarnaast of het ICT-beroepsbeeld door AI opnieuw breder wordt, met meer aandacht voor systeembeheer, infrastructuur en conceptuele architectuur naast programmeren. Dit blijft een gedachtewisseling, geen besluit over uitstroomprofielen.

De expert illustreert dat brede basiskennis nu al nodig is: securitymeldingen komen in zijn praktijk vaak eerst bij IT terecht. Die moet kunnen beoordelen wat escalatie verdient en wat een vals alarm is. Het genoemde aandeel vals-positieve meldingen wordt als praktijkuitspraak behandeld, niet als algemene sectorstatistiek.

### 16. Professioneel profiel, projectbegeleiding en bewijs van eigen begrip

**Bron: opname 2, 01:01:25–01:10:05.**

Het professioneel profiel is een vrije onderzoeksopdracht die uitmondt in een portfolio en een presentatie. Het team toont voorbeeldroutes: een technisch profiel rond een veilige slimme deur met IoT en mogelijk cryptografie, en een meer organisatorische route rond een zorgorganisatie. Ook een veilige CI/CD-pipeline, geautomatiseerde beveiligingstests en incidentmanagement worden als mogelijke interesses genoemd.

Een opmerking van de expert over de volgorde van threatmodeling en het bouwen van een honeypot leidt tot een verduidelijking. De voorbeelden op de website zijn **geen verplichte leerlijn** en ook geen lijst lessen die allemaal worden aangeboden. Studenten kunnen een of meer onderwerpen kiezen en eigen voorstellen inbrengen. Het team vergelijkt dit met een open buffet.

Die vrijheid moet leiden tot een onderzoekende houding. Studenten moeten hun voortgang en resultaten laten zien, maar vooral vertellen wat zij hebben onderzocht en geleerd. Het team wil dat kennis ook aan medestudenten wordt overgedragen.

AI-gebruik wordt ruim toegestaan als hulpmiddel bij onderzoek en uitwerking. Het team stelt zelfs dat een groot deel ermee mag worden gedaan, zolang de student zelf begrip heeft. Tijdens de presentatie en het gesprek valt iemand die zijn eigen werk niet begrijpt alsnog door de mand. Dit sluit aan op de eerdere kritiek op documenten die veel inhoud bevatten maar geen eigen kennis aantonen.

Voor de fundamentkennis kiest het team juist een **klassieke kennistoets**, later ook als multiplechoice-toets aangeduid. Jargon en basisbegrippen moeten zelfstandig beschikbaar zijn. De expert ondersteunt dat met voorbeelden zoals vulnerability management, identity and access management, authenticatie en autorisatie. De vergelijking met beroepscertificeringen dient om te laten zien dat een kennistoets in het securityveld niet ongebruikelijk is.

Het bedrijfsproject vraagt daarnaast begeleiding. Studenten moeten de organisatie en de vraag achter de vraag begrijpen, de opdracht afbakenen, een plan maken en bewijs en validatie organiseren. Het team wil workshops inzetten om hen daarin te helpen, in plaats van hen langere tijd volledig zelfstandig te laten werken.

Een vervolgvraag aan de expert is of hij een securityspecifieke projectaanpak of stappenplan kent dat als aanvulling op die algemene projectbegeleiding kan dienen. Ook wordt gevraagd Brabantse bedrijven die geschikte opdrachten hebben door te verwijzen. Er wordt tijdens het gesprek geen concrete nieuwe opdrachtgever of projectopdracht vastgelegd.

### 17. Sociale werkvormen, ethiek en leren voor een onbekende toekomst

**Bron: opname 2, 01:11:29–01:17:18.**

Na de curriculumfeedback volgen voorbeelden van minder voor de hand liggende informatielekken: lichtsignalen van apparatuur, optische overdracht en voor mensen niet hoorbare signalen bij AI. Ze worden associatief en deels uit het geheugen besproken. De functie is vooral studenten nieuwsgierig maken en laten zien dat dreigingen buiten de bekende voorbeelden kunnen liggen.

Documentaires en fictieve verhalen worden verkend als materiaal voor het sociale blok. Het team wil daarbij niet alleen iets laten kijken, maar daarna een gesprek of debat voeren. Een aantrekkelijk gezamenlijk moment kan bovendien helpen studenten bij dat blok te betrekken.

De discussie over AI, digitale relaties en mensachtige robots leidt naar een bredere onderwijsvraag: studenten worden voorbereid op een toekomst waarvan de docenten nog niet weten hoe zij eruitziet. De snelheid van technologische verandering wordt geïllustreerd met de eigen jeugd en met AI als leercoach voor een kind.

Hieruit volgt de constatering dat **ethiek** in de huidige Secure by Design-opzet weinig zichtbaar is. Een deelnemer wijst erop dat dit sterker terugkomt in de verwante minor Cyberweerbaarheid. Er wordt ook een verband gelegd met waardengericht ontwerpen, maar dat wordt niet nader uitgewerkt.

De expliciete afronding is dat ethiek **in de notities moet worden meegenomen**. Er wordt geen afzonderlijke ethiekmodule vastgesteld. De vraag naar omvang en plaats blijft open: een sociaal gesprek, een ontwerpprincipe of een structureler onderdeel van het curriculum.

### 18. Docenttraining en de keuze voor threatmodelingmethoden

**Bron: opname 2, 01:17:18–01:20:43.**

Bij de afronding komt de driedaagse training opnieuw ter sprake. De trainer geeft aan de docenten door de inhoud te willen leiden en hen vooral veel te laten doen. Het team benadrukt dat een deel van de deelnemende docenten nog weinig voorkennis heeft. Beginnen bij het doel van een framework en daarna een concrete methode toepassen past bij die doelgroep.

De expert begrijpt de keuze voor **STRIDE**, maar wil laten zien dat er meer methoden zijn. Hij plaatst STRIDE vooral in de context van software en applicaties en noemt **PASTA** als een methode die hij meer met het gehele systeem verbindt. Het team legt uit dat één methode kiezen praktische voordelen biedt: modellen, leermateriaal en houvast voor de les. Ook het regionale werkveld heeft STRIDE genoemd.

De deelnemers besluiten niet om STRIDE te vervangen. De kern is dat studenten en docenten begrijpen **waarom** een model wordt gebruikt, en beseffen dat het niet de enige mogelijkheid is. Aan het slot wordt **DREAD** nog als oudere methode genoemd. De vergelijking blijft een aanknopingspunt voor de training; er wordt geen formele methodeselectie afgerond.

## Standpunten en argumenten

| Discussiepunt | Inbreng ontwikkelteam | Inbreng externe expert | Nuance of uitkomst |
|---|---|---|---|
| **Gesprekspartner als leerdoel** | Studenten moeten na het fundament kunnen aanhaken en door verdieping professioneel bijdragen. | Het vak is te breed om in een minor volledig te beheersen; ken ook je beperkingen. | Brede basis en gerichte verdieping krijgen steun. “Gesprekspartner” vraagt nog concrete beoordelingscriteria. **[Opname 1, 00:14:08–00:19:06]** |
| **Ontwerpgericht karakter** | De minor moet zich onderscheiden van opleidingen waarin vooral gebouwd, gehackt of getest wordt. | Ook infrastructuur, assets en operationele processen bevatten ontwerpkeuzes. | Secure by Design wordt breder dan applicatieontwerp, zonder dat alle beheertaken leerdoelen hoeven te worden. **[Opname 1, 00:34:24–00:38:28]** |
| **Mkb als context** | Studenten moeten keuzes kunnen begrijpen bij beperkte budgetten en capaciteit. | Maatregelen moeten passen bij risico en bedrijf; gebrek aan geld is geen volledige onderbouwing. | Proportionaliteit betekent een gemotiveerde keuze, geen algemene vrijstelling. **[Opname 1, 00:38:29–00:40:54]** |
| **Inhoudelijke omvang** | De onderwerpen zijn nodig; de kaart bevat ook oefenen, herhalen en verwerken. | De onderwerpen kloppen, maar er komt veel op studenten af; prioriteer en verminder overlap. | Niet alleen schrappen: ook duidelijker laten zien wat nieuw leren en wat verwerking is. **[Opname 2, 00:31:57–00:35:46 en 00:58:25–00:59:25]** |
| **Frameworks** | Bekendheid met verschillende kaders is nodig, maar diepgaande studie kan in het profiel. | NIST verdient een plek; laat studenten enkele controls werkelijk toepassen en meten. | Overzicht combineren met een beperkte, concrete oefening. **[Opname 2, 00:33:56–00:38:47]** |
| **Templates en software** | Hulpmiddelen kunnen passende controls zichtbaar maken en het proces ondersteunen. | Een tool kent de organisatie onvoldoende om de afweging zelfstandig over te nemen. | Gebruik hulpmiddelen voor structuur en vragen, met eigen onderbouwing. **[Opname 2, 00:45:57–00:47:28]** |
| **Cloud en eigen beheer** | Meer lokaal werken kan passen bij datagevoeligheid en behoefte aan controle. | Cloud kan juist nodig zijn door gebrek aan deskundigheid en capaciteit. | De context bepaalt de keuze; er is geen algemene voorkeursarchitectuur afgesproken. **[Opname 2, 00:47:28–00:49:16]** |
| **AI en toetsing** | AI mag helpen, maar de student moet zelfstandig uitleggen; basiskennis krijgt een kennistoets. | Herkenning en begrip van fundamentele begrippen zijn relevant voor de beroepspraktijk. | Product, presentatie en kennistoets tonen verschillende aspecten van leren. **[Opname 2, 01:02:24–01:03:44 en 01:07:15–01:07:41]** |
| **Threatmodeling** | STRIDE geeft houvast, beschikbaar materiaal en aansluiting op feedback uit het werkveld. | Laat ook het doel van modellen en andere methoden zien. | Geen vervanging besloten; verbreding van bewustzijn en training wordt verkend. **[Opname 2, 01:18:09–01:20:37]** |

## Belangrijke observaties

1. **De behoefte is vooral verbinding tussen bestaande kennis en actuele securitypraktijk.** Het ontwikkelteam heeft uiteenlopende technische en organisatorische ervaring. Het zoekt aanvulling in incidenten, concrete keuzes en de manier waarop securityprofessionals hun werk structureren. **[Opname 1, 00:03:15–00:09:47]**

2. **Een gedeelde taal moet gekoppeld zijn aan een gedeeld beeld.** Alleen afkortingen leren is onvoldoende. De student moet kunnen plaatsen wat een systeem of proces in het geheel doet en waarom dat ertoe doet. **[Opname 1, 00:19:57–00:26:42]**

3. **Assetmanagement blijkt breder dan een inventaris van laptops.** Verbonden gebouwapparatuur, systemen onder leveranciersbeheer, productieapparatuur en uitgeleverde machines komen allemaal in beeld. Dat verbreedt zowel de cases als het begrip van verantwoordelijkheid. **[Opname 1, 00:30:33–00:31:28; opname 2, 00:06:36–00:11:15]**

4. **Aanval en verdediging zijn twee perspectieven op hetzelfde risico.** De dreigingenweek hoeft geen losse opsomming van aanvallen te zijn. De expert adviseert de buitenwereld te verbinden met wat intern beschermd moet worden. **[Opname 2, 00:56:40–00:57:12]**

5. **De maakindustrie vraagt expliciete aandacht voor fysieke gevolgen.** De OT-cases brengen letsel, machinegedrag en productveiligheid in het gesprek. Die aspecten verdwijnen als security alleen als vertrouwelijkheid van data wordt behandeld. **[Opname 2, 00:15:32–00:18:07]**

6. **Meetbaarheid maakt het verschil tussen een control benoemen en de werking begrijpen.** De casus met negentien van twintig laptops laat zien waarom dekking, uitzonderingen en bewijs onderdeel van het onderwijs moeten zijn. **[Opname 2, 00:35:49–00:38:02]**

7. **Vrije profielkeuze kan op een curriculumkaart op een verplichte route lijken.** De discussie over honeypot en threatmodeling laat zien dat het didactische karakter van de voorbeelden expliciet moet zijn. **[Opname 2, 01:06:12–01:07:14]**

8. **Praktijkverhalen moeten nog naar leermateriaal worden vertaald.** Veel voorbeelden worden genoemd, maar opdrachtbeschrijvingen, uitgangssituaties en beoordelingscriteria worden niet uitgewerkt. Enthousiasmerende casuïstiek en toetsbare opdrachten blijven verschillende producten. **[Opname 2, 00:21:23–00:24:59]**

9. **Er blijven inhoudelijke precisievragen bestaan.** NIST en NIS2 moeten duidelijk uit elkaar worden gehouden; bij maturity, normcontrols, productregelgeving en fysieke weerbaarheid zijn benamingen of details niet volledig uitgewerkt. Exacte uitspraken over wettelijke verplichtingen of incidenten vereisen controle voordat ze als lesfeit worden gebruikt. **[Opname 1, 00:26:11–00:26:42; opname 2, 00:42:56–00:46:16 en 01:10:34–01:11:28]**

10. **Ethiek komt laat maar expliciet op tafel.** Er wordt vastgesteld dat het onderwerp weinig zichtbaar is, en gevraagd het in de notities mee te nemen. De koppeling met security en ontwerp wordt nog niet geconcretiseerd. **[Opname 2, 01:16:36–01:17:18]**

## Besluiten en conclusies

### Gepresenteerde uitgangspunten van de onderwijsopzet

Deze punten worden door het team als bestaande of beoogde opzet toegelicht; het zijn geen nieuw genomen besluiten tijdens dit overleg:

- Een twintig weken durende minor met fundament, professioneel profiel, bedrijfsproject en eindevent. **[Opname 2, 00:27:41–00:29:17]**
- Vier gezamenlijke basisweken, met daarna meer ruimte voor eigen onderzoek en toepassing. **[Opname 2, 00:29:18–00:30:33 en 01:02:06–01:04:09]**
- Een brede doelgroep met zowel technische als organisatorische verdiepingsmogelijkheden. **[Opname 2, 00:28:06–00:28:43 en 01:04:11–01:05:17]**
- Toetsing van basiskennis via een kennistoets, naast portfolio, presentatie en projectwerk. **[Opname 2, 01:02:24–01:03:44 en 01:08:48–01:09:15]**
- Docenttraining is al ingekocht; de eerst genoemde uitvoering ligt in november, zonder bevestigde kalenderdatum in deze opnamen. **[Opname 1, 00:04:23–00:05:16]**

### Gedeelde inhoudelijke conclusies

- De minor moet een professionele basis en gerichte verdieping bieden; volledige securityexpertise is niet haalbaar binnen de duur. **[Opname 1, 00:13:53–00:19:06]**
- De hoofdrichting van het curriculum is bruikbaar. Verdere uitwerking vraagt vooral prioritering, samenhang en didactische verwerking. **[Opname 2, 00:32:39–00:33:53 en 01:01:14–01:01:24]**
- Risico en bedrijfscontext moeten de verbinding vormen tussen dreigingen, requirements, controls en ontwerp. **[Opname 2, 00:51:23–00:56:06]**
- Er zijn aanvullende en uitgewerkte cases nodig; IT/IoT/OT geeft daarvoor een bruikbare eerste ordening. **[Opname 2, 00:21:23–00:24:59]**
- Studenten moeten hun eigen begrip tonen, ook wanneer zij AI gebruiken bij het maken van werk. **[Opname 1, 00:21:46–00:22:16; opname 2, 01:07:15–01:07:41]**

### Expliciet genoteerde vervolgpunten en nog voorlopige keuzes

Het team vraagt aanvullende cases en bedrijfssuggesties, de expert wil de website nader bekijken en ethiek moet in de notities worden opgenomen. **[Opname 2, 00:21:49–00:21:56, 01:06:09–01:06:15, 01:09:17–01:09:21 en 01:16:36–01:17:18]**

Voorstellen zoals stakeholders naar week drie verplaatsen, blokken samenvoegen, NIST zichtbaarder opnemen en één of twee controls laten toepassen krijgen positieve reacties. De precieze verwerking wordt niet definitief vastgelegd. De pakketkluis wordt als geschikte case gezien, maar niet formeel als verplichte centrale opdracht aangewezen. STRIDE wordt niet vervangen. Een afgerond nieuw curriculum, een uitvoeringsplanning en een volledig toegewezen actielijst zijn in de opnamen niet aanwezig.

## Openstaande punten

| Open punt | Wat nog duidelijk moet worden | Bron |
|---|---|---|
| **Meetbaar eindniveau** | Welk gedrag en welke kennis bewijzen dat een student een bruikbare gesprekspartner is, na het fundament en na verdieping? | Opname 1, 00:14:08–00:19:06 |
| **Overzicht van het landschap** | Welk eenvoudig model of leermiddel geeft studenten het totaalbeeld van systemen, verbindingen en rollen? | Opname 1, 00:23:34–00:26:42 |
| **Prioritering fundament** | Wat is verplicht basisniveau, wat wordt oefening en wat kan naar het profiel? | Opname 2, 00:34:31–00:38:47 en 00:57:32–01:01:24 |
| **Frameworks en wetgeving** | Welke kaders worden alleen geïntroduceerd, welke worden toegepast en welke productgerichte regels horen bij de maakindustrie? | Opname 2, 00:33:56–00:38:47 en 01:10:05–01:11:28 |
| **Requirements en bewijs** | Hoe wordt de route van risico naar eis, ontwerpkeuze en validatie concreet in de lessen geoefend? | Opname 2, 00:41:57–00:45:57 en 00:50:57–00:54:06 |
| **Uitgewerkte cases** | Welke uitgangssituaties, gegevens, opdrachten en beoordelingscriteria horen bij netwerk, IoT, OT en pakketkluis? | Opname 2, 00:11:30–00:24:59 |
| **Planning en belasting** | Hoe overlappen fundament, profiel en project precies, en hoe worden les- en werkuren verdeeld? | Opname 2, 00:32:14–00:32:37 en 01:02:01–01:04:09 |
| **Profielbegeleiding** | Hoe wordt vrije keuze voldoende afgebakend en blijft eigen begrip aantoonbaar? | Opname 2, 01:05:07–01:07:41 |
| **Bedrijfsprojecten** | Welke partners en opdrachten zijn beschikbaar, en welke securityspecifieke aanpak wordt toegevoegd? | Opname 2, 01:07:44–01:09:21 |
| **Ethiek** | Wat wordt het leerdoel en waar krijgt het onderwerp een herkenbare plaats? | Opname 2, 01:16:36–01:17:18 |
| **Training en eindevent** | Hoe worden voorkennis, oefenmateriaal, praktische voorbereiding en het slotpodium uitgewerkt? | Opname 2, 00:28:52–00:29:14 en 01:17:30–01:20:37 |

## Concrete actiepunten

**Statuslegenda:** *expliciete vraag* is een daadwerkelijk uitgesproken verzoek; *uitgesproken intentie* is een voornemen van een spreker; *voorgestelde uitwerking* is een concrete vervolgstap bij een besproken advies, zonder dat deze al als taak is toegewezen. De laatste categorie is redactioneel geconcretiseerd om opvolging mogelijk te maken. Voor geen van onderstaande acties is in de opnamen een harde deadline vastgesteld.

| Nr. | Actie en beoogde opbrengst | Eigenaar volgens het gesprek | Status | Bron |
|---:|---|---|---|---|
| 1 | Aanvullende incidentverhalen en bruikbare oefencases aan Mark doorgeven, bij voorkeur met bron en context. | Externe expert wordt gevraagd; Mark is ontvanger. | Expliciete vraag | Opname 2, 00:21:49–00:21:56 en 00:23:39–00:24:03 |
| 2 | De websitelink doorgeven voor nadere inhoudelijke beoordeling; feedback op curriculum en profielvoorbeelden verzamelen. | Ontwikkelteam voor de link; expert geeft aan te willen kijken. Afzender niet vastgesteld. | Expliciete vraag en uitgesproken intentie | Opname 2, 01:06:09–01:06:15 |
| 3 | Geschikte Brabantse bedrijven naar het team verwijzen voor mogelijke projectopdrachten. | Externe expert wordt gevraagd; contactroute via team. | Expliciete vraag | Opname 2, 01:09:17–01:09:21 |
| 4 | Een securityspecifieke projectaanpak of stappenplan aandragen als aanvulling op scoping, business understanding en validatie. | Expert wordt bevraagd; uitwerking nog niet toegezegd. | Expliciete vraag | Opname 2, 01:07:56–01:08:44 |
| 5 | Ethiek als aandachtspunt opnemen en daarna bepalen waar het in het programma past. | Ontwikkelteam; individuele eigenaar niet genoemd. | Expliciete aanwijzing om te noteren | Opname 2, 01:16:36–01:17:18 |
| 6 | De fundamentkaart herzien: principes en gedrag prioriteren, stakeholders bij governance plaatsen en overlap beoordelen. Opbrengst: een aangepaste indeling met zichtbaar onderscheid tussen leerstof en verwerking. | Niet toegewezen; ligt bij het ontwikkelteam. | Voorgestelde uitwerking | Opname 2, 00:34:57–00:35:46 en 00:57:32–01:01:24 |
| 7 | NIST herkenbaar positioneren en de keuze tussen kennismaken, toepassen en verdiepen per framework verduidelijken. | Niet toegewezen. | Voorgestelde uitwerking | Opname 1, 00:26:11–00:26:42; opname 2, 00:33:56–00:38:47 |
| 8 | Een oefening met één of twee controls uitwerken, met aandacht voor assetdekking, uitzonderingen en aantoonbare werking. | Niet toegewezen. | Voorgestelde uitwerking | Opname 2, 00:35:49–00:38:47 en 01:10:15–01:10:32 |
| 9 | De ontwerpweek verbinden aan een zichtbare keten van dreiging en risico naar requirement, maatregel, ontwerp en validatie. | Niet toegewezen. | Voorgestelde uitwerking | Opname 2, 00:42:25–00:45:57 en 00:51:23–00:54:06 |
| 10 | Netwerk-, IoT- en OT-voorbeelden omzetten naar opdrachten; de pakketkluis nader uitwerken als mogelijke gecombineerde case. | Niet toegewezen. | Voorgestelde uitwerking | Opname 2, 00:11:30–00:24:59 |
| 11 | Genoemde rapporten, incidenten en juridische termen controleren voordat ze in lesmateriaal komen. Opbrengst: betrouwbare bronnen en correcte afbakening. | Niet toegewezen. | Voorgestelde uitwerking bij uitgesproken zoekvragen | Opname 1, 00:42:14–00:44:44; opname 2, 00:16:42–00:19:07 en 01:10:34–01:11:28 |
| 12 | Zoeken naar een eenvoudig totaalbeeld van het IT/securitylandschap en naar toegankelijke evenementen of gastbijdragen. | Niet toegewezen. | Voorgestelde uitwerking bij uitgesproken zoekvragen | Opname 1, 00:23:54–00:26:42 en 00:50:17–00:51:20 |
| 13 | In de docenttraining beginnen bij het doel van frameworks, veel laten oefenen en naast STRIDE ook andere methoden duiden. | Trainer spreekt een intentie uit; precieze invulling nog open. | Uitgesproken intentie | Opname 2, 01:17:41–01:19:29 |

## Tijdindex voor terugluisteren

Deze index volgt de gespreksvolgorde en helpt passages snel terug te vinden. Hij omvat beide bestanden van begin tot einde.

### Opname 1 — 00:52:07

| Tijdvak | Inhoud |
|---|---|
| 00:00:00–00:03:07 | Informele opening; regionale aanleiding, Brabant House of Cyber en onderwijsrichtingen |
| 00:03:07–00:05:43 | Docentontwikkeling, belangstelling voor training en praktische planning |
| 00:05:43–00:08:49 | Introducties en achtergronden van het team |
| 00:08:49–00:14:07 | Doel van de bijeenkomst, kritische feedback en de drie hoofdvragen |
| 00:14:07–00:19:57 | Gesprekspartner worden, fundament, verdieping en grenzen van expertise |
| 00:19:57–00:26:50 | Jargon, totaalbeeld van het landschap, AI als hulpmiddel en NIST |
| 00:26:50–00:30:33 | IAM, vulnerability management, patchdilemma en vraag naar incidentmanagement |
| 00:30:33–00:34:24 | Assetmanagement, kritikaliteit, signalen en meldroutes bij incidenten |
| 00:34:24–00:38:29 | Ontwerpkarakter, continuïteit, threat landscape, threat profile en architectuur |
| 00:38:29–00:41:16 | Mkb, proportionaliteit, budget en bedrijfscontinuïteit |
| 00:41:16–00:44:48 | Frequentie en urgentie van incidenten, rapporten en AI |
| 00:44:48–00:50:17 | OSINT, recruiters, menselijk gedrag en ervaringsgerichte voorbeelden |
| 00:50:17–00:51:28 | Evenementen en externe kennisbronnen |
| 00:51:28–00:52:07 | Pauze en overgang naar bredere toepassing van Secure by Design |

### Opname 2 — 01:20:43

| Tijdvak | Inhoud |
|---|---|
| 00:00:00–00:02:54 | Hervatting, behoefte aan cases en de maakindustrie als context |
| 00:02:54–00:11:30 | IT/IoT/OT, leveranciers, primaire processen en uitgeleverde machines; praktische presentatieonderbrekingen |
| 00:11:30–00:15:32 | Netwerkcase, dataflowdiagrammen, afbakening en IoT-verbindingen |
| 00:15:32–00:19:52 | OT, fysieke veiligheid en incidentvoorbeelden |
| 00:19:52–00:24:03 | Drones, fysieke supplychain, casebehoefte en mogelijke verdieping |
| 00:24:03–00:25:03 | Conceptuele pakketkluis en gebruiksgemak |
| 00:25:03–00:29:18 | Website, introductiefilm en opzet van de twintig weken |
| 00:29:18–00:34:57 | Vier fundamentweken, omvang, positieve feedback en NIST naast ISO |
| 00:34:57–00:40:17 | Overlap verminderen, controls toepassen en people/process/technology |
| 00:40:17–00:45:57 | Monitoring en begrenzing, requirements, risk appetite, maturity en verantwoording |
| 00:45:57–00:50:57 | Templates, compliance-software, cloud en lokaal beheer, beroepsbeeld en triage |
| 00:50:57–00:56:18 | Risicogestuurde ontwerpaanpak, requirements en prioritering |
| 00:56:18–01:01:25 | Principes en gedrag, stakeholders verplaatsen, recap en betekenis van de vier weken |
| 01:01:25–01:05:17 | Professioneel profiel, planning, kennistoets, voorbeelden en start project |
| 01:05:17–01:07:44 | Vrije profielkeuze, websitefeedback, portfolio, presentatie en AI |
| 01:07:44–01:10:05 | Projectbegeleiding, bedrijven, stappenplan en verdere curriculumuitwerking |
| 01:10:05–01:11:29 | Frameworks, wetgeving, controls en productgerichte regelgeving |
| 01:11:29–01:16:36 | Aansprekende voorbeelden, documentaires, sociale werkvormen en technologische toekomst |
| 01:16:36–01:17:18 | Ethiek en het verzoek dit in de notities mee te nemen |
| 01:17:18–01:20:43 | Afronding, docenttraining, STRIDE, PASTA, DREAD en praktische afsluiting |

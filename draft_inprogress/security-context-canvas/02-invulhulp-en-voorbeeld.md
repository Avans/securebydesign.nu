# Invulhulp + uitgewerkt voorbeeld — Security Context Canvas

> **Status:** voorstel · **Versie:** 0.1 · **Laatst bijgewerkt:** 2026-08-31 · **Eigenaar:** Stefan
> Deel A wordt de tekst van de 9 vraagkaartjes (A6) én de placeholdertekst in de Word-versie.
> Deel B is het docentvoorbeeld — niet uitdelen vóór de gallery walk.

---

# Deel A — De negen vakken

Per vak: de vraag op het canvas, de hulpvragen op het kaartje, en wat "af" is.

### 1 · Casus & scope — *waar hebben we het precies over?*
- Wat is het product, de dienst of het proces? Beschrijf het in twee zinnen aan iemand van buiten.
- Wat hoort er nog net wél bij? Denk aan leveranciers, apparaten, het papieren proces ernaast, de mensen thuis.
- Wat laten we bewust buiten beschouwing — en waarom?
> **Af als:** er staat minstens één ding *buiten* de scope, met een reden erbij.

### 2 · Waarde & belofte — *waarom doet dit ertoe?*
- Welke waarde levert dit op, en voor wie?
- Wat verwachten mensen stilzwijgend als ze dit gebruiken? ("dat mijn gegevens niet op straat liggen", "dat het gewoon werkt")
- Wat gebeurt er met die belofte als het misgaat?
> **Af als:** er staat een verwachting die nergens in een contract of ontwerp is opgeschreven.

### 3 · BIV-profiel — *beschikbaarheid, integriteit of vertrouwelijkheid?*
- Wat is hier de ergste schade: dat iemand meekijkt (V), dat gegevens niet kloppen (I), of dat het niet werkt (B)?
- Zet ze op volgorde en schrijf er één zin bij.
- Voor welke groep is jouw volgorde anders?
> **Af als:** er staat een volgorde mét onderbouwing, geen drie vinkjes.

### 4 · Stakeholders & belangen — *wie zijn erbij betrokken?*
- Wie heeft belang bij deze casus, en wie heeft er invloed op de ontwerpkeuzes?
- Wat wil elk van hen eigenlijk? Waar botsen die belangen?
- Wie betaalt, wie beslist, wie draagt het risico — zijn dat dezelfde partijen?
> **Af als:** er staan minstens twee belangen die met elkaar botsen.

### 5 · Gebruikers & gedrag — *wat doen mensen echt?*
- Hoe gebruiken mensen dit op een gewone drukke dag?
- Waar snijden ze de bocht af omdat de veilige route te omslachtig is?
- Welke gewoonte of routine maakt dit kwetsbaar?
> **Af als:** er staat één concrete work-around die mensen zullen verzinnen.

### 6 · Wie zou dit willen misbruiken? — *eerste bedreigers*
- Wie zou hier iets aan hebben? Denk breed: buitenstaanders, maar ook eigen mensen en toeval.
- Wat is hun motief — geld, aandacht, wraak, nieuwsgierigheid, of gewoon een fout?
- Hoe komen ze überhaupt in de buurt?
> **Af als:** er staat minstens één bedreiger die géén hacker van buiten is.
> *(Diepgang volgt in week 2 met de attackerspersona — hier alleen verkennen.)*

### 7 · Assets & kroonjuwelen — *wat moet beschermd worden?*
- Welke gegevens, systemen, apparaten, processen en reputatie staan op het spel?
- Nummer ze: **A1, A2, A3 …** Deze nummers gebruik je de rest van de minor.
- Welke drie zijn de kroonjuwelen — zonder die drie is er geen casus meer?
> **Af als:** de assets genummerd zijn en er drie zijn aangemerkt als kroonjuweel.

### 8 · Abuse cases — *hoe gaat iemand dit misbruiken?*
Schrijf er minstens drie, altijd in dit format:
> **Als** ⟨wie⟩ ⟨wat doet⟩, **dan** ⟨welke schade⟩ **op** ⟨assetnummer⟩.
- Neem er één vanuit een gebruiker, één vanuit een aanvaller, één vanuit een beheerder of leverancier.
> **Af als:** elke abuse case eindigt op een assetnummer uit vak 7. Zonder assetnummer is het een dreiging, geen abuse case.

### 9 · Ontwerpprincipes & eerste keuzes — *wat betekent dat voor ons ontwerp?*
- Pak de principekaartjes van lesblok 3. Welke twee zijn hier het meest van toepassing?
- Schrijf per principe één concrete keuze op: *principe → dus wij kiezen …*
- Welke keuze kost gemak? Benoem die ruil.
> **Af als:** er staan twee principes met elk een concrete keuze — geen losse principenamen.

### ⚑ Aannames & open vragen
- Wat hebben we aangenomen omdat het niet in de casus stond?
- Wat zouden we willen weten, en aan wie zouden we het vragen?

### ➜ Meenemen naar week 2
- Welk risico vinden we op dit moment het scherpst, en waarom? Eén zin.

---

# Deel B — Uitgewerkt voorbeeld (docentversie)

**Voorgestelde doorlopende casus: wijkzorg-app "Naaste"** *(nog niet vastgesteld — zie voorstel §7.3)*

> Een kleine thuiszorgorganisatie (ca. 60 medewerkers) laat een app bouwen waarmee mantelzorgers meekijken met de zorg voor hun naaste: welke zorgmomenten er zijn geweest, korte notities van de verzorgende, en een chat met het team. Verzorgenden gebruiken de app op hun eigen telefoon. De medicatiegegevens komen via een koppeling uit het systeem van de apotheek. Een externe partij bouwt en beheert de app.

Deze casus is gekozen omdat hij in alle negen vakken iets te bieden heeft, zonder dat er techniek nodig is om erover mee te praten: bijzondere persoonsgegevens, eigen apparaten, een keten met derden, en mensen die onder tijdsdruk werken.

### Voorbeeldvulling

**1 · Scope.** De app, de koppeling met de apotheek, de telefoons van verzorgenden en de externe bouwer. Buiten scope: het personeelssysteem van de zorgorganisatie — dat raakt de cliëntzorg niet rechtstreeks.

**2 · Waarde & belofte.** Mantelzorgers voelen zich betrokken en gerustgesteld. De stilzwijgende belofte: *"wat hier staat, klopt, en alleen wij kunnen het zien."* Beide helften van die belofte kunnen apart sneuvelen.

**3 · BIV.** **I → V → B.** Onjuiste medicatienotities kunnen direct schade aan een cliënt geven; dat weegt zwaarder dan een lek. Voor de cliënt zelf ligt V mogelijk hoger — dat spanningsveld is het gesprek waard.

**4 · Stakeholders.** Cliënt, mantelzorger, verzorgende, teamleider, de externe bouwer, de apotheek, de zorgverzekeraar, de FG. Botsing: de teamleider wil dat verzorgenden snel kunnen inloggen; de FG wil sterke authenticatie.

**5 · Gedrag.** Verzorgende met acht cliënten op een ochtend blijft ingelogd op een telefoon die in de auto ligt. Notities worden 's avonds thuis bijgewerkt uit het hoofd — dat raakt integriteit.

**6 · Bedreigers.** Een nieuwsgierige buurman die zich voordoet als familie. Een ex-partner die via de mantelzorger-toegang wil meelezen. Een medewerker van de bouwer met productietoegang. En: een verzorgende die per ongeluk bij de verkeerde cliënt schrijft.

**7 · Assets.** A1 zorgnotities · A2 medicatiegegevens *(kroonjuweel)* · A3 identiteit/toegang mantelzorger *(kroonjuweel)* · A4 telefoons van verzorgenden · A5 chatgeschiedenis · A6 vertrouwen van cliënten in de organisatie *(kroonjuweel)*.

**8 · Abuse cases.**
- *Als* iemand zich bij de teamleider voordoet als familielid en toegang vraagt, *dan* leest een buitenstaander mee met de zorg — op **A3** en **A1**.
- *Als* een telefoon met een actieve sessie in een auto wordt gestolen, *dan* liggen notities en chats van meerdere cliënten op straat — op **A4**, **A1**, **A5**.
- *Als* de apotheekkoppeling stilletjes verouderde medicatie doorgeeft, *dan* handelt een verzorgende op onjuiste informatie — op **A2**.

**9 · Principes & keuzes.**
- *Least privilege* → een mantelzorger ziet alleen zijn eigen naaste, en alleen de zorgmomenten, niet de volledige historie.
- *Secure by default* → de app logt automatisch uit na inactiviteit. Kost gemak voor de verzorgende: die ruil benoemen we expliciet.

**⚑ Aannames.** We nemen aan dat de bouwer geen toegang heeft tot productiedata — dat weten we niet. Vraag aan de teamleider: wie kan er bij de gegevens van de externe partij?

**➜ Naar week 2.** Scherpste risico: **A3** — het toekennen van mantelzorger-toegang is nu een menselijke beslissing zonder controle, en dat opent alle andere assets.

---

*Let op: dit voorbeeld is te compleet voor wat teams in 50 minuten halen. Het is de docentreferentie, niet de norm. Zie de kwaliteitslat in het voorstel §5.*

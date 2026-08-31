// Breach write-up — example page (EN). Case material for week 3, block 7.
// Draft: not yet adopted, deliberately kept out of the main navigation.
export default {
  draft:
    'This case is under development and has not been adopted yet. The page is deliberately not in the menu; feel free to share the link, but read it as a proposal.',
  draftB: 'Draft — version 0.1.',

  hero: {
    kicker: 'Foundation · week 3 · block 7',
    titleLead: 'Breach ',
    titleEm: 'write-up',
    lede:
      'A breach write-up is the reconstructed history of one incident: what happened, how long nobody noticed, what was said to whom, and which design choice made all of it possible. Below is the seven-part format, followed by the fully worked example on the running case — the breach at the home-care app “Naaste”.'
  },

  chips: ['case material', '7 parts', '50 minutes', 'teams of 3–4', 'tech & non-tech', 'fictional, realistic'],

  sections: {
    s1: {
      no: '01',
      h: 'The format',
      sub: 'Seven fixed parts. The order is the teaching point: only once the timeline is on the table may you have an opinion about the cause, and only after “what went well” may you judge the communication. That is what turns a blame hunt into a post-mortem.'
    },
    s2: {
      no: '02',
      h: 'The example — the breach at “Naaste”',
      sub: 'The same case as the week 1 Security Context Canvas, three months on. The asset numbers (A1, A2 …) come straight from there; the assumption left dangling at the bottom of that canvas is the root cause here.'
    },
    s3: {
      no: '03',
      h: 'How the block runs',
      sub: 'The write-up is not a reading assignment. Teams rebuild the timeline themselves, and the discussion is about the gaps between the events — not about the attacker.'
    },
    s4: {
      no: '04',
      h: 'How it connects',
      sub: 'The write-up sits between two blocks that lean on it directly: the dependency map in block 5 exposes the supplier, and the game in block 8 makes you live through the same thing under time pressure. Block 9 asks for the <b>response agreements</b> that were missing here.'
    },
    s5: {
      no: '05',
      h: 'Want to think along?',
      sub: 'The case is still a proposal — feedback on the timeline, the tone of the communication or the severity of the incident is welcome. Use the feedback button at the bottom right, or get in touch.'
    }
  },

  // [number, part, what goes in it, colour variable]
  format: [
    ['01', 'The facts', 'Who, what, when, how much, and how it came to light — in five lines, without interpretation. Everything that gets disputed later is stated here undisputed.', 'var(--w3)'],
    ['02', 'The timeline', 'From first foothold to recovery, with three marked moments: it starts, someone notices, someone tells. The gaps between them are the lesson.', 'var(--w2)'],
    ['03', 'The design choice underneath', 'Ask why three times, until you are past the human error. Under every mistake lies a choice someone once made — or never made.', 'var(--w4)'],
    ['04', 'What went well', 'A mandatory part. Without it the write-up becomes an indictment, and then it teaches you nothing about your own design.', 'var(--w3)'],
    ['05', 'The communication', 'What was said literally, to whom and when — and how it landed. This is usually where trust breaks, not in the technology.', 'var(--w1)'],
    ['06', 'Recovery & post-mortem', 'The list of measures, with the state of play six months later. A measure that never gets finished is a decision.', 'var(--w4)'],
    ['07', 'What we do not know', 'The loose ends, written down honestly. A write-up that has an answer for everything is made up.', 'var(--w2)']
  ],
  formatNote:
    'Two rules keep this format usable. <b>No names of people</b> — roles yes, because the question is which role did not exist, not who was asleep. And <b>every claim gets a timestamp</b>: “they reported it too late” is an opinion, “the report went out 17 days after the first e-mail” is a fact you can build a design conversation on.',

  doc: {
    kicker: 'Worked example · teacher version',
    title: 'The breach at the home-care app “Naaste”',
    lede:
      'A fictional incident in the running case, written the way a public post-mortem would read. Realistically assembled from recurring patterns: a copy of production data outside production, a report landing on the wrong doormat, and an organisation that is not the first to tell the news.',
    print: 'Print / save as pdf',
    h1: 'The facts',
    h2: 'The timeline',
    h2sub: 'Three moments are marked. What sits between them — 79 days blind, 14 days deaf, 6 days silent — is what this block is about.',
    h3: 'The design choice underneath',
    h3sub: 'Ask why three times. The first layer is what went wrong; the third layer is what you can actually change in a design.',
    pull: 'Nobody decided that production data was allowed to leave. There was also nobody who could decide that it was not.',
    h4: 'What went well',
    h4sub: 'Deliberately placed before the communication section, so the discussion afterwards is about design rather than blame.',
    h5: 'The communication',
    h5sub: 'Four messages, exactly as they went out. Each one is defensible on its own; together they tell the story of an organisation protecting itself rather than its clients.',
    landed: 'How it landed:',
    h6: 'Recovery & post-mortem',
    h6sub: 'The post-mortem was held three weeks after the breach. This is the list of measures with the state of play four months later — the part that is usually missing from real write-ups.',
    h7: 'What we do not know',
    h7sub: 'The honest loose ends. For this block they matter more than the facts: they show what you should have set up in advance in order to know.'
  },

  // [label, value]
  facts: [
    ['Who', 'Home-care organisation “Naaste”, around 60 staff, 1,412 clients. App built and maintained by an external nine-person agency.'],
    ['What', 'A full copy of the production database sat for over eleven weeks in the builder’s test environment, reachable from the open internet with a default password.'],
    ['Which data', 'Care notes (A1) and medication data (A2) of 1,412 clients over six months, plus the chat history with informal carers (A5) and 214 carer accounts (A3).'],
    ['How long', '79 days between the copy being placed and the first report from outside; 116 days before clients heard about it.'],
    ['How it surfaced', 'An external researcher e-mailed info@ — where it sat for two weeks. Clients eventually read about it in the regional newspaper.']
  ],

  timeline: [
    {
      d: '3 Nov', t: '09:12', mark: 'T0 · it starts',
      h: 'A developer copies production data into a test environment',
      p: 'A ticket reports that medication data is not syncing for some clients. The developer cannot reproduce it with test data and pulls a copy of the production database into the agency’s sandbox. Nobody forbids this; there is no agreement permitting it either. The action is not recorded anywhere.'
    },
    {
      d: '3 Nov', t: '17:40',
      h: 'The bug is found and fixed — the copy stays',
      p: 'The sandbox runs a dashboard for logs and database inspection, reachable from the internet, with the credentials it shipped with. For test data that was never a problem.'
    },
    { gap: ['79 days with nobody looking', '79 d', 'No monitoring on the sandbox, no inventory of environments, no periodic check by “Naaste” at the builder. The contract covers availability and support, not what may happen to data.'] },
    {
      d: '14 Jan', t: '02:40',
      h: 'An automated scanner finds the dashboard',
      p: 'Not aimed at the care organisation: a scanner sweeping the whole internet for known dashboards with default passwords. Over the next two nights the database is downloaded in parts.'
    },
    {
      d: '22 Jan', t: '16:20', mark: 'someone notices',
      h: 'A researcher e-mails info@naaste.nl',
      p: 'A security researcher comes across the dataset, recognises Dutch care data and sends a polite report to the only address on the website. There is no security.txt, no reporting point, no procedure.'
    },
    {
      d: '22 Jan', t: '16:55',
      h: 'The office manager marks the e-mail as phishing',
      p: 'The message asks for confirmation that the domain belongs to the organisation and contains a link. That is exactly the pattern from last year’s awareness training. It goes to the spam folder — the training worked, the organisation did not.'
    },
    { gap: ['14 days with nobody listening', '14 d', 'There is no second channel. The researcher tries the phone number on the site; it reaches care planning, who have no idea where to put such a question.'] },
    {
      d: '4 Feb', t: '11:30',
      h: 'The researcher finds the data protection officer via LinkedIn',
      p: 'He adds that he will go public in two weeks, and tips off a regional journalist so it cannot stay quiet.'
    },
    {
      d: '5 Feb', t: '08:50',
      h: 'The director hears about it and calls the builder',
      p: 'There is no incident procedure. The director, the DPO and the team lead spend the morning working out who is responsible for what. At the agency, nobody initially knows which environment is meant.'
    },
    {
      d: '5 Feb', t: '11:30',
      h: 'The sandbox goes offline',
      p: 'Within two and a half hours of the first phone call. From here on it moves fast — which is exactly why the slow half before it weighs so heavily.'
    },
    {
      d: '6–7 Feb', t: '—',
      h: 'The scope turns out to be impossible to establish',
      p: 'The sandbox kept no access logs. It is visible that the dashboard was exposed, not who visited or what was taken. The sentence “we have no indication that data was downloaded” is literally true and utterly misleading.'
    },
    {
      d: '8 Feb', t: '17:00',
      h: 'Notification to the Dutch data protection authority',
      p: 'Three days after the director heard about it — but seventeen days after the organisation received the first report. Whether the 72-hour clock started on 22 January or 5 February is the sharpest discussion question of this block.'
    },
    { gap: ['6 days with nobody telling', '6 d', 'Meanwhile the team works internally towards “a complete picture”. Clients, informal carers and care workers know nothing. The journalist already has his deadline set.'] },
    {
      d: '11 Feb', t: '06:30', mark: 'someone tells',
      h: 'The article appears',
      p: 'Clients and informal carers read it in the paper. That morning care workers get questions on the doorstep they cannot answer — they were never informed.'
    },
    {
      d: '11 Feb', t: '09:15',
      h: 'The e-mail to clients goes out',
      p: 'Two and a half hours after the newspaper, in a tone written for the regulator. See part 5.'
    },
    {
      d: '12–22 Feb', t: '—',
      h: 'The damage shows up somewhere other than expected',
      p: '41 informal carers withdraw their access, two clients move to another provider. The team lead loses a week and a half almost entirely to phone calls. Two care workers later say they started doubting whether to put notes in the app at all — and that hits the reliability of the client record (A1).'
    }
  ],

  // [question, answer]
  layers: [
    [
      'What went wrong?',
      'A test environment holding real client data was exposed with a default password.'
    ],
    [
      'Why was that possible?',
      'Because a copy of production data was allowed to exist outside production. The test environment was set up for made-up data and was never reassessed once real data arrived. The security matched what was supposed to be there, not what actually was.'
    ],
    [
      'Why had nobody decided that?',
      'Because the question “may production data leave production, and who decides?” was on nobody’s plate. The care organisation assumed the builder handled it; the builder assumed the client would say so if it were not allowed. That same assumption was already sitting at the bottom of the week 1 Security Context Canvas — as an open question, not as a risk with an owner.'
    ]
  ],

  good: [
    'After the first phone call the environment was offline within two and a half hours. The technical response was not the problem.',
    'The researcher reported it properly and allowed ample time. That the organisation did not use that time is not on him.',
    'The awareness training worked: the office manager correctly recognised the phishing pattern. What was missing was a route for a genuine report from outside.',
    'The DPO acted within a day of hearing about it, and pushed to notify the authority despite pressure to wait for “a complete picture”.',
    'A post-mortem was held, with the builder in the room. That is less obvious than it sounds.'
  ],

  // [when, to whom, what was said, how it landed]
  comms: [
    [
      '11 Feb 09:15',
      'e-mail to all clients and informal carers',
      'A limited amount of data was unintentionally accessible at an external supplier. There has been no hack of the “Naaste” app.',
      'Both sentences are true and both read as ducking. “Limited” covers 1,412 client records, and “it wasn’t the app” interests nobody whose medication data was in there. On top of that the message came after the newspaper — which made it a reaction rather than an announcement.'
    ],
    [
      '11 Feb 09:15',
      'what the e-mail did not say',
      '— no date when it started, no numbers, no answer to “was my data in there?”',
      'The helpdesk took 90 calls asking exactly that, with no answer available. Every call repeated the mistake the e-mail had already made. One line with a date and a number would have prevented most of them.'
    ],
    [
      '11 Feb 12:40',
      'app message to care workers',
      'Please refer client questions to the team lead.',
      'Care workers had been in people’s homes since eight that morning. They were the face of the organisation and were informed last — precisely the wrong way round. This is the mistake that cost the most trust, and the cheapest one to avoid.'
    ],
    [
      '14 Feb',
      'response to the journalist',
      'We take privacy very seriously and took immediate measures.',
      'The standard line. It was quoted verbatim in the follow-up article, with the seventeen-day timeline printed underneath. A sentence you cannot back up with a timeline makes the story worse, not better.'
    ]
  ],

  status: { done: 'done', half: 'partial', open: 'not done' },

  // [measure, state of play, status]
  measures: [
    ['Ban on copies of production data outside production, written into the processor agreement', 'Contract amended at the June renewal. The test environment has used generated data ever since.', 'done'],
    ['A reporting point for vulnerabilities: security.txt and an address that reaches the DPO', 'Arranged within two weeks. Two reports have come in since, both picked up within a day.', 'done'],
    ['Incident procedure with roles, escalation path and a spokesperson', 'A four-page draft exists, never rehearsed. At the next outage nobody reached for it.', 'half'],
    ['Logging on all of the builder’s environments, including non-production', 'Production is covered. No budget was freed for the other environments.', 'half'],
    ['Communication playbook: staff first, then those affected, then the press', 'Noted as an action point, no owner assigned. Four months on, unchanged.', 'open'],
    ['Annual supplier review of environments and access', 'Agreed for the autumn. No date, no checklist, no identifiable owner.', 'open']
  ],

  unknowns: [
    'Whether the dataset was actually taken in full, and by whom. Without logging on the sandbox that can no longer be established — and that is a design choice, not bad luck.',
    'Whether the data is still circulating somewhere. There is no indication of it, but here “no indication” literally means: we have no way to look.',
    'Exactly when the GDPR 72-hour clock started running. On receipt at info@ (22 January) or when the management learned of it (5 February)? The organisation uses the second reading; the first is defensible and would make the notification seventeen days late.',
    'How many clients left for this reason. Two said so out loud; how many walked away quietly cannot be traced.',
    'Whether care workers have been writing less in the app since. Two said they were; if it is wider, the breach shifts into the reliability of the client record (A1) — and you only notice that when something goes wrong in the care itself.'
  ],

  // [time, what, explanation]
  work: [
    ['5 min', 'Hand out the facts only', 'Part 1 on paper, nothing more. What happened here? Teams write their first judgement on a sticky note and turn it face down — they pick it back up at the end.'],
    ['15 min', 'Rebuild the timeline', 'Teams get the events loose and shuffled, and lay them out on the table. The task is not the order but the gaps: where is there time in which nobody does anything, and what should have filled it?'],
    ['10 min', 'Ask why three times', 'From the mistake to the design choice. Stop only when the answer is something you can change in a design or an agreement — not something someone should have done better.'],
    ['10 min', 'Rewrite the communication', 'Each team rewrites the 11 February e-mail in at most 120 words, to be sent on 5 February. Read them out, and the class votes: which one would you want to receive about your own mother?'],
    ['10 min', 'Back to your own case', 'The five transfer questions below. The answers travel on as response agreements into the governance map of block 9.']
  ],
  transferH: 'Back to your own case — five questions',
  transfer: [
    'Where in your chain is there a copy of real data outside the place it belongs? Who decided that?',
    'If a stranger finds a vulnerability in your case today: where do they send it, and who reads that within a day?',
    'Which assumption on your Security Context Canvas still has no owner? Put a name next to it today.',
    'Who hears it first, who second, who third — and who writes it? Fix the order before you need it.',
    'Which sentence would you never want to read back in the paper, with a timeline printed underneath?'
  ],

  // [phase, artefact, what it adds, colour variable]
  growth: [
    ['Week 1 · block 9', 'Security Context Canvas', 'the assumption that becomes the cause', 'var(--w1)'],
    ['Week 3 · block 5', 'Dependency map', 'the supplier with production access', 'var(--w3)'],
    ['Week 3 · block 7', 'Breach write-up', 'timeline, communication, post-mortem', 'var(--w2)'],
    ['Week 3 · block 9', 'Governance map', 'roles + response agreements on the case', 'var(--w4)']
  ],

  contactLink: 'contact',
  title: 'Breach write-up · Secure by Design'
}

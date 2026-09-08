// Secure by Design — Phase 2: Professional Profile. Inspiration plate (EN).
// Same shape as the NL file; standards/proper nouns kept intact.

export default {
  hero: {
    kicker: 'Secure by Design · Phase 2 · plate',
    title: 'The <em>Professional Profile</em>',
    lede: 'Phase 1 brought everyone to one shared foundation. In phase 2 you step off at a station and go deep: you pick one or more cybersecurity topics, carry out practical research on them for a fictional client, and deliver a prototype or report. The real company project also starts in week 5. Week 10 is an interim review; your profile and portfolio continue developing towards the workshops in week 19.'
  },

  chips: [
    'phase 2 · weeks 5–10',
    'free choice of topic',
    '1 or more topics',
    'practical research',
    'prototype or report',
    'fictional client',
    'interim review week 10 · workshops week 19',
    'tech & non-tech'
  ],

  // display labels for the lean enum (values stay bouw|onderzoek|beide)
  leanLabels: { bouw: 'build', onderzoek: 'research', beide: 'both' },

  sections: {
    opdracht: {
      no: '01',
      heading: 'The assignment',
      sub: 'You are free in your choice, but these boundaries apply to everyone — tech and non-tech alike.'
    },
    verdieping: {
      no: '02',
      heading: 'Choose your deep dive',
      sub: 'Inspiration, not a menu to pick-and-be-done with: feel free to combine, or come up with your own topic. The topics hang under the same stations as in phase 1. Click a topic for a build angle and a research angle plus a possible client.'
    },
    voorbeelden: {
      no: '03',
      heading: 'Two example routes',
      sub: 'Two worked-out approaches to give direction — one build-focused, one research-focused.'
    },
    toets: {
      no: '05',
      heading: 'From choice to interim review and knowledge transfer',
      sub: "Your portfolio develops with your work: initial results in week 10, further specialisation and knowledge transfer towards week 19."
    }
  },

  filter: {
    label: 'Show',
    all: 'All',
    bouw: 'More building',
    onderzoek: 'More research'
  },

  kaders: [
    ['Free choice', 'K1', 'Pick one topic or combine a few. Inventing your own topic is allowed, as long as it fits within cybersecurity and the Secure-by-Design mindset.'],
    ['Practical research', 'K2', "It's about doing: not just reading, but researching, testing, building or validating. A demonstrable practical core is required."],
    ['Prototype or report', 'K3', 'Your deliverable is a working prototype, or a well-founded report/advice. What fits your topic and your angle is up to you.'],
    ['Fictional client', 'K4', 'Aim your work at a fictional client with a real problem. That forces scope, relevance and professional communication.'],
    ['Interim review & knowledge transfer', 'K5', 'Week 10 reviews your initial result and portfolio. Continue developing towards an active workshop with related profiles in week 19. Strong work may also receive a keynote slot.'],
    ['Tech and non-tech', 'K6', 'Every topic can be approached technically (building) or organisationally/research-wise. Choose the angle that suits you.']
  ],

  // lines: [code, title, [topics...]] — topic: { tt, lean, hook, over, tech, nontech, klant }
  lines: [
    ['S1', 'Product & baseline security', [
      { tt: 'Secure IoT / embedded devices', lean: 'bouw', hook: 'Secure firmware on cheap hardware', over: 'Securing devices with limited computing power (ESP32/RP2040): communication, updates, storage.', tech: 'Prototype with encrypted communication, a secure boot concept and signed OTA updates.', nontech: 'Research into the biggest IoT risks + design guideline for a product line.', klant: 'Hardware startup launching a smart device.' },
      { tt: 'Cryptography in practice', lean: 'beide', hook: 'Managing keys and secrets well', over: 'Not the maths, but correct application: key management, secrets, certificates, common mistakes.', tech: 'Set up secrets management in an application + demonstrate wrong vs. right.', nontech: 'Policy and guideline for key and certificate management in an organisation.', klant: 'Scale-up that grew fast and has no secrets policy.' },
      { tt: 'Secure-by-default product design', lean: 'beide', hook: 'Secure as the default setting', over: 'How to design defaults, configuration and user flows so that secure is the easy path.', tech: 'Redesign an insecure flow into a working prototype.', nontech: 'Design guidelines + review checklist for a product team.', klant: 'SaaS company with complaints about insecure default settings.' }
    ]],
    ['S2', 'Mindset, culture & awareness', [
      { tt: 'Security awareness campaign', lean: 'onderzoek', hook: 'Change behaviour, not scare people', over: 'Designing a campaign that really sticks: audiences, message, channels, measuring impact.', tech: 'Build an interactive training module or microlearning.', nontech: 'Campaign plan with audience analysis, materials and a measurement setup.', klant: 'Organisation after a data breach caused by human action.' },
      { tt: 'Phishing simulation & training', lean: 'beide', hook: 'Learning from a safe fake attack', over: 'The setup and ethics of phishing simulations and the follow-up training.', tech: 'Your own (ethical) simulation setup + landing page and measurement dashboard.', nontech: 'Playbook + ethical framework + training approach for HR/IT.', klant: 'Educational institution that wants to make staff more resilient.' },
      { tt: 'Measure & improve security culture', lean: 'onderzoek', hook: 'How securely does an organisation really think?', over: 'Mapping culture and improving it on purpose: measurement instruments, interventions, resistance.', tech: 'Dashboard/survey tool to track culture indicators.', nontech: 'Baseline measurement + intervention plan based on a culture model.', klant: "SME that mostly sees 'security' as an IT party trick." }
    ]],
    ['S3', 'Hacker mindset & offensive', [
      { tt: 'Ethical hacking of a web app', lean: 'bouw', hook: 'Attack to learn to defend', over: 'Finding vulnerabilities in a (own or test) application in a structured way, within clear boundaries.', tech: 'Pentest on a test environment + reproducible exploits and fixes.', nontech: 'Methodical test report with findings, risks and recommendations.', klant: 'Web agency that wants assurance about a new application.' },
      { tt: 'OSINT research', lean: 'beide', hook: 'What can be found publicly?', over: 'Using open sources to map the exposure of an organisation or product.', tech: 'Tooling/script that gathers and summarises public information.', nontech: 'OSINT report on the digital footprint + reduction advice.', klant: 'Company that wants to know what attackers already know about them.' },
      { tt: 'Social engineering (within bounds)', lean: 'onderzoek', hook: 'The human as an attack vector', over: 'How manipulation works and how to defend against it — strictly ethical and with consent.', tech: 'Controlled test setup (e.g. a vishing script) with a measurable outcome.', nontech: 'Analysis of techniques + resilience advice and behavioural rules.', klant: 'Reception/service-desk organisation that gets called a lot.' }
    ]],
    ['S4', 'Governance, compliance & supply chain', [
      { tt: 'NIS2 readiness assessment', lean: 'onderzoek', hook: 'Ready for the new duty of care', over: 'What an organisation must arrange to comply with NIS2 and actually become more secure.', tech: 'Self-assessment tool that scores NIS2 readiness.', nontech: 'Gap analysis + prioritised roadmap towards compliance.', klant: 'Healthcare or utility organisation newly in scope of NIS2.' },
      { tt: 'Privacy by design / GDPR', lean: 'beide', hook: 'Privacy as a design choice', over: 'Data protection from the design onward: data minimisation, legal bases, DPIA thinking.', tech: 'Prototype that implements data minimisation and consent properly.', nontech: 'DPIA-light + privacy-by-design guideline for a product.', klant: "App builder processing minors' personal data." },
      { tt: 'Introduce ISO 27001-light', lean: 'onderzoek', hook: 'Structure in information security', over: 'The core of a management system: policy, risks, controls, improvement cycle.', tech: 'Simple register/tool for risks and controls.', nontech: 'Concise ISMS starter kit: policy, risk analysis, control set.', klant: 'Growing company that needs to offer clients ISO assurance.' },
      { tt: 'Supply chain & SBOM management', lean: 'beide', hook: 'Do you trust your suppliers blindly?', over: 'Controlling dependencies on software, suppliers and services; SBOM in practice.', tech: 'Pipeline that automatically generates an SBOM and reports vulnerabilities.', nontech: 'Supplier risk policy + process for dependency management.', klant: 'Company that uses a lot of third-party open source and SaaS.' },
      { tt: 'CRA product conformity', lean: 'onderzoek', hook: 'Secure products on the EU market', over: 'What the Cyber Resilience Act requires of digital products and how you demonstrate it.', tech: 'Conformity checklist tool linked to product characteristics.', nontech: 'Conformity analysis + step-by-step plan towards CRA compliance.', klant: 'Manufacturer of a product with digital components.' }
    ]],
    ['S5', 'Threat modelling, detection & blue team', [
      { tt: 'Threat model + detection strategy', lean: 'beide', hook: 'Know where it goes wrong and see it', over: 'Modelling a system for threats and determining how you would detect attacks.', tech: 'Work out a threat model and build matching detection rules.', nontech: 'Threat model report + monitoring/detection advice.', klant: 'Fintech startup with a new payment integration.' },
      { tt: 'Set up logging & SIEM', lean: 'bouw', hook: 'From raw logs to alarm', over: 'Setting up central logging and detection with open-source tooling (e.g. Wazuh/ELK).', tech: 'Working SIEM setup with dashboards and a few use cases.', nontech: 'Logging strategy + use-case catalogue for a SOC.', klant: 'Hosting company that wants to spot attacks sooner.' },
      { tt: 'Build & analyse a honeypot', lean: 'bouw', hook: 'Bait for attackers', over: 'Luring attackers into a decoy environment and analysing their behaviour.', tech: 'Set up a honeypot, collect attack data and visualise it.', nontech: 'Analysis of observed attack patterns + defence advice.', klant: 'Research lab that wants to monitor current threats.' },
      { tt: 'Design SOC processes', lean: 'onderzoek', hook: 'Detection is also organisation', over: 'How a Security Operations team works: roles, triage, escalation, playbooks.', tech: 'Tooling/template for alert triage and playbook execution.', nontech: 'SOC setup plan with processes, roles and playbooks.', klant: 'Organisation that wants to professionalise detection.' }
    ]],
    ['S6', 'Architecture & requirements', [
      { tt: 'Zero trust architecture', lean: 'beide', hook: 'Trust nothing, verify everything', over: 'Basing access on continuous verification instead of a secure inside.', tech: 'Reference setup with identity-based access.', nontech: 'Zero-trust migration plan + principles for a network.', klant: "Company that no longer has a 'safe office network' after remote working." },
      { tt: 'Identity & Access Management', lean: 'beide', hook: 'The right person, the right access', over: 'Designing and managing identities, roles and permissions across systems.', tech: 'Prototype with role-based access and SSO/MFA.', nontech: 'IAM design + roles/permissions model and governance.', klant: 'Organisation where former employees turn out to still have access.' },
      { tt: 'API security', lean: 'bouw', hook: 'The back door of modern apps', over: 'Securing APIs: authentication, authorisation, rate limiting, abuse resistance.', tech: 'Build a secured API + show how an insecure variant breaks.', nontech: 'API security guideline + review checklist for developers.', klant: 'Platform that opens up its API to partners.' }
    ]],
    ['S7', 'SDLC, DevSecOps & CI/CD', [
      { tt: 'Secure CI/CD pipeline', lean: 'bouw', hook: 'Security baked into the build line', over: 'Automating security controls along the path from code to production.', tech: 'Pipeline with security gates that stop insecure builds.', nontech: 'Adoption plan + measurable gates for a DevOps team.', klant: 'Scale-up that wants to keep releasing fast and securely.' },
      { tt: 'Automate SAST / DAST / SCA', lean: 'bouw', hook: 'Let tools find the first mistakes', over: 'Setting up static, dynamic and dependency scanning and taming the noise.', tech: 'Integrated scanning with triaged, actionable output.', nontech: 'Tooling choice + process to follow up on findings.', klant: 'Team drowning in security alerts.' },
      { tt: 'Infrastructure-as-Code security', lean: 'bouw', hook: 'Secure infra, in code', over: 'Preventing misconfigurations in cloud/infra code and testing them automatically.', tech: 'IaC with policy-as-code that blocks insecure configurations.', nontech: 'Hardening baseline + review process for infra code.', klant: 'Company that rolls out its cloud entirely via code.' }
    ]],
    ['S8', 'Testing, pentest & incident response', [
      { tt: 'Pentest + report', lean: 'beide', hook: 'Find it before someone else does', over: 'Testing an application or environment in a structured way and reporting professionally.', tech: 'Carry out a pentest on a test target + reproducible findings.', nontech: 'Full pentest report with risks, evidence and advice.', klant: 'Company having a security test done for the first time.' },
      { tt: 'Incident response plan + tabletop', lean: 'onderzoek', hook: 'Rehearse the worst day', over: 'Drawing up a response plan and testing it via a tabletop exercise.', tech: 'Tooling/checklist that guides the team through an incident.', nontech: 'IR plan + worked-out tabletop with evaluation.', klant: 'SME without any playbook for a ransomware attack.' },
      { tt: 'Digital forensics mini-investigation', lean: 'bouw', hook: 'Reconstruct what happened', over: 'Securing and analysing traces after a (simulated) incident.', tech: 'Investigation on a prepared image + a well-founded timeline.', nontech: 'Forensic report + chain-of-custody procedure.', klant: 'Organisation that wants to know how an attacker got in.' },
      { tt: 'Responsible disclosure process', lean: 'onderzoek', hook: 'Give researchers a safe route', over: 'How to properly handle vulnerability reports from third parties.', tech: 'Working report page + internal handling-workflow prototype.', nontech: "Disclosure policy + internal procedure and SLAs.", klant: "Company that increasingly gets 'we found a vulnerability' emails." }
    ]],
    ['SO', 'Current & other themes', [
      { tt: 'AI security', lean: 'beide', hook: 'Attacks on and with AI', over: 'Risks of AI systems (prompt injection, data leaks, model abuse) and AI as a defence.', tech: 'Prototype that demonstrably abuses an AI application and mitigates it.', nontech: 'Risk analysis + guideline for safe use of AI tools.', klant: 'Company hastily putting an AI chatbot on customer data.' },
      { tt: 'Cloud security posture', lean: 'bouw', hook: 'Misconfiguration is the #1 cloud mistake', over: 'Configuring cloud environments securely and testing them continuously.', tech: 'Posture scan + hardening of a test environment.', nontech: 'Cloud baseline + control plan for a team.', klant: 'Company with a fast-grown, messy cloud.' },
      { tt: 'OT / ICS security', lean: 'onderzoek', hook: 'When IT and the physical world meet', over: 'Securing industrial systems, where safety and availability come first.', tech: 'Test setup/simulation of an industrial protocol.', nontech: 'Risk analysis + segmentation advice for a production environment.', klant: 'Manufacturer with old, connected machines.' },
      { tt: 'Post-quantum / quantum-safe crypto', lean: 'onderzoek', hook: 'Preparing for tomorrow', over: 'What the arrival of quantum computers means for current cryptography.', tech: 'Comparative test of post-quantum algorithms in a demo.', nontech: 'Migration impact analysis + advice for the coming years.', klant: 'Organisation with data that must stay confidential 10 years from now.' },
      { tt: 'Deepfakes & disinformation', lean: 'onderzoek', hook: 'Seeing is no longer believing', over: 'Synthetic media as a threat and how organisations arm themselves.', tech: 'Detection demo or awareness tool around fake media.', nontech: 'Resilience analysis + protocol against CEO fraud/deepfakes.', klant: 'Organisation with public spokespeople and payment authority.' }
    ]]
  ],

  skeletonNote: {
    label: 'Same backbone',
    text: ' — both routes follow the same steps: topic → client → research question → practical research → deliverable → portfolio → presentation. Use that order as a template for your own route.'
  },

  // examples: [variant, tag, title, [[label, value]...]]
  examples: [
    ['build', 'Example route A · building', 'Secure smart doorbell', [
      ['Topic(s)', 'Secure IoT/embedded devices + Cryptography in practice (S1)'],
      ['Fictional client', "Hardware startup 'BelVeilig' wanting to launch a smart video doorbell."],
      ['Research question', 'How do you design the doorbell\'s firmware and communication secure-by-design, within the limits of cheap hardware?'],
      ['Practical research', 'Threat model on the device and the data flows; comparison of crypto libraries on an ESP32; measuring the performance impact of encryption.'],
      ['Deliverable', 'Working prototype: encrypted communication, signed OTA updates and a secure-boot concept, with technical justification.'],
      ['Portfolio', 'Threat model, design decisions with trade-offs, test results, source code and reflection.'],
      ['Final presentation', "Live demo for the 'client' explaining the key trade-offs and residual risks."]
    ]],
    ['research', 'Example route B · research', 'Making a healthcare organisation NIS2-ready', [
      ['Topic(s)', 'NIS2 readiness assessment + Security awareness campaign (S4 + S2)'],
      ['Fictional client', "Mid-sized home-care organisation 'ThuisZorg Brabant' newly in scope of NIS2."],
      ['Research question', 'What must the organisation arrange to comply with NIS2 and genuinely become more secure, and how do you get the staff on board?'],
      ['Practical research', 'Gap analysis against the NIS2 obligations; risk assessment of core processes; (fictional) personas and interviews; benchmark of awareness approaches.'],
      ['Deliverable', 'Advisory report with a prioritised roadmap, plus a worked-out awareness campaign concept with sample material.'],
      ['Portfolio', 'Gap analysis, risk matrix, roadmap, campaign plan, substantiation with sources and reflection.'],
      ['Final presentation', "Executive advice to the 'board' with clear choices and a cost/benefit consideration."]
    ]]
  ],

  lessons: {
  "heading": "Learning programme · weeks 5–10",
  "intro": "Your profile and real company project start together in week 5. Nine 1.5-hour timetable blocks per week shift from shared teaching towards application, with regular depth and feedback. Workshops are supported working time, not nine classroom lessons.",
  "labels": {
    "week": "Week",
    "core": "Core",
    "activity": "Activity",
    "output": "Output"
  },
  "types": {
    "les": "Lessons & clinics",
    "atelier": "Profile workshop",
    "project": "Company project",
    "feedback": "Feedback & knowledge sharing",
    "tutor": "Tutor meeting"
  },
  "allocation": {
    "caption": "Timetable allocation · 1.5-hour blocks",
    "activity": "Activity",
    "total": "Total",
    "rows": [
      {
        "label": "Lessons & clinics",
        "values": [
          3,
          3,
          2,
          2,
          1,
          1
        ]
      },
      {
        "label": "Profile workshop",
        "values": [
          3,
          2,
          3,
          2,
          2,
          2
        ]
      },
      {
        "label": "Company project",
        "values": [
          2,
          3,
          3,
          4,
          5,
          5
        ]
      },
      {
        "label": "Feedback & knowledge sharing",
        "values": [
          1,
          1,
          1,
          1,
          1,
          1
        ]
      }
    ]
  },
  "notes": [
    "From week 6, clinics follow profile choices. Working sessions have specific tasks and agreed tutor availability.",
    "Protect the weekly feedback block: show visible work and discuss profile and project. From week 7, practise short explanations or a mini-workshop.",
    "Week 10 is an interim review, not profile completion. Continue development and your portfolio through the project, focused study and the week 19 workshop.",
    "The company assignment and individual profile question remain identifiable but can inform each other. Block allocations can shift if an intake is delayed."
  ],
  "links": [
    {
      "path": "/project",
      "label": "Continue the project · weeks 11–19"
    },
    {
      "path": "/eindevent",
      "label": "Profile workshops at the final event"
    }
  ],
  "weeks": [
    {
      "n": 5,
      "title": "Explore",
      "goal": "Profile + company project",
      "blocks": [
        {
          "title": "Specialisation & intake preparation",
          "core": "Explore topics, scope an initial question and practise an intake.",
          "activity": "Compare research angles and practise probing a client request.",
          "output": "Two possible profile topics and intake questions.",
          "type": "les",
          "badge": "Block 1–3"
        },
        {
          "title": "First experiment",
          "core": "Compare topics through a small practical investigation.",
          "activity": "Run a small experiment and record what you want to learn.",
          "output": "Initial findings and personal learning goals.",
          "type": "atelier",
          "badge": "Block 4–6"
        },
        {
          "title": "Team & assignment",
          "core": "Start the real company project alongside your profile.",
          "activity": "Form a team, read the brief and prepare first client contact.",
          "output": "Team agreements, initial brief and intake schedule.",
          "type": "project",
          "badge": "Block 7–8"
        },
        {
          "title": "Visible progress",
          "core": "Make your initial choices discussable.",
          "activity": "Show your experiment and questions to peers and your tutor.",
          "output": "Feedback and specific next actions.",
          "type": "feedback",
          "badge": "Block 9"
        }
      ]
    },
    {
      "n": 6,
      "title": "Choose",
      "goal": "Profile + company project",
      "blocks": [
        {
          "title": "Topic clinic & research design",
          "core": "Choose a specialisation and a suitable method.",
          "activity": "Justify your choice, scope and success criteria; attend a relevant clinic.",
          "output": "Research question, method and success criteria.",
          "type": "les",
          "badge": "Block 1–3"
        },
        {
          "title": "Set up profile research",
          "core": "Make your individual investigation feasible.",
          "activity": "Design an experiment or research plan with sources and resources.",
          "output": "Profile research plan.",
          "type": "atelier",
          "badge": "Block 4–5"
        },
        {
          "title": "Intake & problem understanding",
          "core": "Understand the business and the underlying problem.",
          "activity": "Conduct the intake; record stakeholders, scope, authorisation and data agreements before execution.",
          "output": "Problem understanding, mandate and client agreements.",
          "type": "project",
          "badge": "Block 6–8"
        },
        {
          "title": "Review choices",
          "core": "Discuss your profile choice and the client problem.",
          "activity": "Show your plan and intake findings; separate facts, assumptions and open questions.",
          "output": "Updated plans and follow-up client questions.",
          "type": "feedback",
          "badge": "Block 9"
        }
      ]
    },
    {
      "n": 7,
      "title": "Investigate",
      "goal": "Profile + company project",
      "blocks": [
        {
          "title": "Topic clinic & evidence",
          "core": "Deepen your topic and assess evidence quality.",
          "activity": "Attend a relevant clinic and compare sources or methods.",
          "output": "Justified research choices.",
          "type": "les",
          "badge": "Block 1–2"
        },
        {
          "title": "First research iteration",
          "core": "Conduct your profile research.",
          "activity": "Collect and analyse initial data or build an experiment; record a reproducible method.",
          "output": "Initial findings with evidence.",
          "type": "atelier",
          "badge": "Block 3–5"
        },
        {
          "title": "Approach & initial project research",
          "core": "Develop the project approach and begin within agreed scope.",
          "activity": "Specify questions, methods, roles and schedule; conduct an initial investigation.",
          "output": "Draft project plan and initial evidence.",
          "type": "project",
          "badge": "Block 6–8"
        },
        {
          "title": "Share an insight",
          "core": "Practise knowledge transfer towards week 19.",
          "activity": "Explain an insight or lead a mini-exercise in five minutes; discuss project progress.",
          "output": "Peer feedback on content and explanation, plus actions.",
          "type": "feedback",
          "badge": "Block 9"
        }
      ]
    },
    {
      "n": 8,
      "title": "Try & test",
      "goal": "Profile + company project",
      "blocks": [
        {
          "title": "Depth & validation",
          "core": "Design a check for your own result.",
          "activity": "Use workshop questions to shape a clinic and create a validation plan.",
          "output": "Validation plan with testable criteria.",
          "type": "les",
          "badge": "Block 1–2"
        },
        {
          "title": "Test profile results",
          "core": "Check whether your initial result holds up.",
          "activity": "Run a test, discuss limitations and adjust your research.",
          "output": "Test findings and revised research plan.",
          "type": "atelier",
          "badge": "Block 3–4"
        },
        {
          "title": "Try a direction with the client",
          "core": "Check the value of your approach.",
          "activity": "Discuss findings and try a direction; update scope and plan using feedback.",
          "output": "Client feedback and a supported next direction.",
          "type": "project",
          "badge": "Block 5–8"
        },
        {
          "title": "Review & mini-exercise",
          "core": "Learn from each other’s tests and explanations.",
          "activity": "Show a result and have a peer complete a short exercise.",
          "output": "Improvements for research, project and knowledge transfer.",
          "type": "feedback",
          "badge": "Block 9"
        }
      ]
    },
    {
      "n": 9,
      "title": "Connect",
      "goal": "Profile + company project",
      "blocks": [
        {
          "title": "Clinic on a shared obstacle",
          "core": "Deepen an issue affecting multiple students.",
          "activity": "Bring questions and work with related profiles on a common obstacle.",
          "output": "A useful insight or method for the next step.",
          "type": "les",
          "badge": "Block 1"
        },
        {
          "title": "Expertise for your team",
          "core": "Investigate an open question and make insights useful.",
          "activity": "Develop a tool, guideline or demonstration from relevant profile insights.",
          "output": "Profile evidence and an applicable knowledge contribution.",
          "type": "atelier",
          "badge": "Block 2–3"
        },
        {
          "title": "Research & develop",
          "core": "Continue the company assignment with justified choices.",
          "activity": "Investigate, develop or test; connect profile knowledge to project decisions where relevant.",
          "output": "Project results with justified choices.",
          "type": "project",
          "badge": "Block 4–8"
        },
        {
          "title": "Share & adjust",
          "core": "Check whether others can use your expertise.",
          "activity": "Have peers try your contribution and discuss project decisions with your tutor.",
          "output": "Usability feedback and revised actions.",
          "type": "feedback",
          "badge": "Block 9"
        }
      ]
    },
    {
      "n": 10,
      "title": "Take stock",
      "goal": "Profile + company project",
      "blocks": [
        {
          "title": "Conclusions & limitations",
          "core": "Draw conclusions supported by evidence.",
          "activity": "Practise explaining results, uncertainty and limitations.",
          "output": "Supported conclusions without overclaiming.",
          "type": "les",
          "badge": "Block 1"
        },
        {
          "title": "Profile interim review",
          "core": "Record your first research result; the profile continues.",
          "activity": "Show your research, reflect on learning goals and plan further development towards week 19.",
          "output": "Interim portfolio and profile/workshop development plan.",
          "type": "atelier",
          "badge": "Block 2–3"
        },
        {
          "title": "Project progress review",
          "core": "Prepare the transition to four project days.",
          "activity": "Review early results and client feedback; plan the next period and prepare Business Understanding.",
          "output": "Project progress record, updated plan and presentation material.",
          "type": "project",
          "badge": "Block 4–8"
        },
        {
          "title": "Feedback & next steps",
          "core": "Make the next step specific for profile and project.",
          "activity": "Discuss visible work, research questions and planning with peers and your tutor.",
          "output": "Follow-up agreements and potential workshop groupings.",
          "type": "feedback",
          "badge": "Block 9"
        }
      ]
    }
  ]
},

  steps: [
    ['Choose & explore', 'Pick one or more topics that genuinely draw you in.'],
    ['Scope & client', 'Choose a fictional client and demarcate the problem.'],
    ['Research question', 'Formulate a sharp, practical question you can answer.'],
    ['Practical research', 'Build a prototype or do focused research — deliver evidence.'],
    ['Portfolio', 'Record context, choices, process and results.'],
    ['Interim review → knowledge transfer', 'Week 10: show your initial result and next steps. Continue developing and share your expertise in a profile workshop at the final event in week 19.']
  ],

  portfolioPanel: {
    heading: 'In your portfolio',
    items: [
      ['Problem & context', 'who the client is and why this topic'],
      ['Research question & scope', 'what exactly you investigate, and what not'],
      ['Approach & method', 'how you went about it'],
      ['The work', 'the prototype or report itself'],
      ['Substantiation & sources', 'choices justified with reliable sources'],
      ['Testing & validation', "how you know it works / is correct"],
      ['Reflection & next steps', 'what you learned, what you would do differently']
    ]
  },

  toetsPanel: {
    heading: 'What is assessed',
    items: [
      ['Depth', 'how far you went into the topic'],
      ['Practical research', 'quality and relevance of what you did or built'],
      ['Secure-by-design thinking', 'do you visibly apply the phase 1 foundation'],
      ['Substantiation', 'are choices argued and source-backed'],
      ['Professional communication', 'does your story land with the client'],
      ['Reflection', 'do you look critically at your own work and process']
    ]
  },

  footer: {
    left: 'Phase 2 plate — Professional Profile · a sequel to the Secure-by-Design foundation.',
    right: 'Click a topic for angles · filter by building / research.'
  }
}

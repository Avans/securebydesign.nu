// Secure by Design — Phase 2: Professional Profile. Inspiration plate (EN).
// Same shape as the NL file; standards/proper nouns kept intact.

export default {
  hero: {
    kicker: 'Secure by Design · Phase 2 · plate',
    title: 'The <em>Professional Profile</em>',
    lede: 'Phase 1 brought everyone to one shared foundation. In phase 2 you step off at a station and go deep: you pick one or more cybersecurity topics, carry out practical research on them for a fictional client, and deliver a prototype or report. Your portfolio and final presentation form the assessment.'
  },

  chips: [
    'phase 2',
    'free choice of topic',
    '1 or more topics',
    'practical research',
    'prototype or report',
    'fictional client',
    'portfolio + final presentation',
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
      no: '04',
      heading: 'From choice to assessment',
      sub: "Here's how the track runs, and this is what goes into your portfolio and final presentation."
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
    ['Assessment = portfolio + presentation', 'K5', 'You are assessed on your portfolio (process, choices, evidence) and a final presentation in which you defend your work to the client.'],
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

  steps: [
    ['Choose & explore', 'Pick one or more topics that genuinely draw you in.'],
    ['Scope & client', 'Choose a fictional client and demarcate the problem.'],
    ['Research question', 'Formulate a sharp, practical question you can answer.'],
    ['Practical research', 'Build a prototype or do focused research — deliver evidence.'],
    ['Portfolio', 'Record context, choices, process and results.'],
    ['Final presentation', 'Defend your work and advice to the client.']
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

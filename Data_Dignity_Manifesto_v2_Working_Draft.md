# Data Dignity Manifesto v2.0

**Uniting Global Aid Networks + Protecting Data Dignity via Secure Data Federation**

**Status**: Working Draft  
**Version**: 2.0  
**Based On**: Roundtable Assessment (February 1, 2026)  
**Original Document**: Data Dignity Manifesto v1.0 (October 11, 2024)  
**Issuing Organization**: Trusted Humanitarian Resources (501(c)(3))

---

## Document Overview

This document represents a comprehensive revision of the Data Dignity Manifesto v1.0, incorporating feedback from an expert roundtable comprising representatives from UNHCR, ICRC, UN OCHA, ID.me, W3C, Stanford University, Microsoft Azure, and community data stewards representing affected populations.

### Guiding Principle

> *Data is not just an asset—it's an extension of the person it represents.*

### Revision Summary
| Aspect | v1.0 | v2.0 |
|--------|------|------|
| Major sections | 9 | 11 (+ Threat Model, Technical Architecture) |
| Foundational principles | 13 | 13 principles + 10 implementation subsections |
| Technical appendices | 0 | 7 detailed specifications |
| Estimated length | ~74 pages | ~120 pages |
| Field testing | Not required | Mandatory pilots before deployment |
| Offline capability | Not addressed | Foundational requirement |

---

# PART I: VISION & CONTEXT

## Executive Summary

We live in an era where personal data has become the crux of both innovation and exploitation. In our fast-paced world, data has emerged as the new currency driving frequent interactions between individuals and organizations. As data increasingly shapes our lives—determining access to services, influencing decisions, and defining our identities—it is essential to evolve and redefine the relationship between individuals and the entities that control their personal information.

Without advocating for this digital evolution, we risk a future where personal data is used not to empower, but to manipulate and exploit—impeding fundamental human rights.

**Data sets are an extension of each person's voice.** Stripping away control over when and how personal data is used robs individuals of their voice, their autonomy, and their ability to make choices. The ethical responsibility of organizations is to respect the individuality embedded within each data point they collect. When organizations view data as merely a commodity, they disregard the inherent rights and dignity of the individuals behind that data.

Therefore, ethical data management is not optional—it is a fundamental obligation.

### Our Core Beliefs

**We believe data must be managed ethically, transparently, and in a manner that upholds the dignity and sovereignty of every person.**

- **Individuals are the ultimate owners of their personal data. Full stop.** Organizations and companies should hold a revocable lease on unique personal data in order to provide useful services or products, but their lease ought to be conditional and temporary.

- **We believe that transparency builds trust.** Every action to access data, perform algorithmic decision-making, and conduct data transfer should be traceable, auditable, and understandable by the individuals whose data is involved.

- **Consent should be granular, dynamic, and automated.** The era of blanket consent, reliant upon broadly-written static legal templates, is over. Consent deserves a living agreement, capable of evolving as circumstances and contexts change.

- **Data dignity must respect context and risk.** Not all data is created equal, and not all contexts are the same. Data collected in conflict zones or shared in the context of humanitarian assistance carries different risks than data used in ride sharing or social media apps.

- **Data should be usable without compromising dignity.** Organizations must adopt privacy-preserving technologies to conduct data analysis without exposing raw data points.

- **Identity is a human right, not a corporate asset.** Decentralized identity models allow individuals to control their digital identities and choose what to share, modify, or revoke.

- **We believe that data dignity should be globally relevant and adaptable.** Data dignity is not limited to any one country or culture. It should be a universal standard that respects local regulations and customs while maintaining a core set of values.

- **We believe in shared accountability and collaboration.** Data dignity cannot be achieved in isolation—it requires collaboration across governments, NGOs, sectors, industries, and borders.

- **We believe that data dignity must evolve as technology evolves.** This manifesto is a living document, designed to adapt to new challenges such as the rise of artificial intelligence, quantum computing, and new data collection methods.

### Acknowledgment of Structural Realities

This revised manifesto acknowledges what the original did not state explicitly: **consent in humanitarian contexts exists within structural power asymmetry.** When individuals must provide data to receive food, shelter, or medical care, their consent is inherently constrained. We cannot eliminate this power differential, but we can design systems that minimize its impact on meaningful choice.

We therefore commit to these operational principles:

1. **Essential humanitarian services shall never be conditional on data sharing** beyond minimum identification required for deduplication.

2. **Systems must function in the environments where they are most needed**—including low-connectivity settings, active conflict zones, and mass displacement emergencies.

3. **We will be honest about technological limitations.** Some capabilities described herein are production-ready; others remain aspirational. We will clearly distinguish between them.

4. **Perfect security is impossible; appropriate protection is achievable.** We design for defense-in-depth against realistic adversaries, not theoretical perfection.

### Join Us

This manifesto is a call to action. We invite everyone—organizations, individuals, governments, and communities—to join us in this movement. By signing on to support our manifesto, you're committing to a new standard of data governance that prioritizes the dignity and rights of every individual.

Data is power. Let's ensure power is used responsibly, ethically, and in a way that empowers us all.

---

## I. Introduction: Establishing the Need for Data Dignity

### I.1 Context and Motivation

Our commitment to data dignity is rooted in our mission to protect the most vulnerable—refugees, displaced persons, and individuals in crisis. Safeguarding personal data is essential to ensuring that those in need can access humanitarian aid without fear of exploitation or misuse. This framework upholds the dignity of each individual while advancing our charitable purpose of supporting global humanitarian efforts.

#### The Scale of Humanitarian Data

The scope of this challenge is immense. According to UNHCR, over 117 million people worldwide have been forcibly displaced as of 2024—the highest number ever recorded. This includes:

- **43.4 million refugees** under UNHCR and UNRWA mandates
- **62.5 million internally displaced persons** (IDPs)
- **6.9 million asylum seekers**
- **5.8 million others in need of international protection**

Each of these individuals interacts with humanitarian data systems. Registration databases, biometric enrollment, assistance tracking, protection case management, resettlement processing—every touchpoint generates personal data that, if mishandled, can have life-altering consequences.

Beyond displacement, natural disasters affect an average of **350 million people annually**, each creating temporary but urgent data collection requirements. The humanitarian sector collectively manages personal data on hundreds of millions of individuals, often in contexts where traditional data protection mechanisms are weakest and the stakes are highest.

#### Data as Identity

In an increasingly digital world, personal data is more than just information—it represents our identities, preferences, behaviors, and even our hopes and fears. Each digital footprint paints a vivid picture of our lives. When misused or mishandled, this data can lead to surveillance, discrimination, or violence, especially for vulnerable populations such as refugees or those living under authoritarian regimes.

For a refugee, their data profile may include:

- **Identity information**: Name, date of birth, nationality, ethnicity, family relationships
- **Biometric data**: Fingerprints, iris scans, facial photographs
- **Location history**: Flight path, current location, intended destination
- **Protection concerns**: Reasons for flight, persecution fears, security incidents
- **Health information**: Medical conditions, vaccination records, disabilities
- **Assistance history**: Services received, household composition, vulnerability assessments

This data, in aggregate, constitutes a comprehensive portrait of the individual—one that could be weaponized by hostile actors, exploited by criminal networks, or misused by governments seeking to persecute specific populations.

#### The Consequences of Data Mismanagement

Historically, the deep connection between data and personal identity has often been overlooked, with tragic consequences. We must learn from these failures:

**The Afghan Interpreters Crisis (2021)**

During the U.S. withdrawal from Afghanistan, personal data on Afghan nationals who had assisted international forces—including names, photographs, biometric records, and employment histories—was at risk of falling into Taliban hands. The consequences of this data exposure included targeted persecution, violence against families, and in some cases, death. This catastrophic failure demonstrated that data management in conflict contexts is not merely an administrative concern—it is a matter of life and death.

**Biometric Data Vulnerabilities**

Humanitarian organizations have increasingly adopted biometric registration to prevent fraud and ensure assistance reaches intended recipients. However, this creates concentrated repositories of sensitive data:

- In 2017, concerns emerged about the security of biometric databases containing records of Rohingya refugees, with implications for their safety if accessed by Myanmar authorities
- Biometric data collected for humanitarian purposes has been subpoenaed by host country governments for immigration enforcement
- The permanence of biometric identifiers means that a single breach creates lifetime vulnerability—unlike passwords, fingerprints cannot be changed

**Cross-Border Data Sharing Failures**

Data shared between humanitarian organizations and governments has, in documented cases, been used for purposes contrary to protection principles:

- Refugee registration data shared with host countries has been used to facilitate deportations
- Information collected for assistance purposes has been accessed by intelligence services
- Protection-sensitive data has been transmitted across insecure channels, intercepted, and exploited

**Systemic Biases in Data-Driven Systems**

The humanitarian sector increasingly relies on algorithmic systems for resource allocation, fraud detection, and prioritization. These systems can embed and amplify biases:

- Predictive models trained on historical data may perpetuate discrimination against marginalized groups
- Automated eligibility systems may exclude vulnerable individuals who don't fit standardized categories
- Fraud detection algorithms may disproportionately flag legitimate claims from certain populations

These examples are part of a broader pattern where marginalized communities face systemic biases embedded in data-driven systems—from predictive policing to automated decision-making in social services. The humanitarian sector is not immune to these risks.

#### Building on Existing Frameworks

This manifesto does not emerge in a vacuum. We build upon and complement the foundational work of humanitarian data protection:

**UNHCR Data Protection Policy (2015, updated 2018)**

UNHCR's policy establishes principles for processing personal data of persons of concern, including requirements for lawful and fair processing, purpose limitation, data minimization, accuracy, storage limitation, and security. This manifesto extends these principles into the technical architecture domain.

**ICRC Handbook on Data Protection in Humanitarian Action (2017, updated 2020)**

The ICRC Handbook provides comprehensive guidance on applying data protection principles in humanitarian contexts, with particular attention to the unique challenges of armed conflict. Our framework operationalizes these principles through specific technical standards and implementation guidelines.

**OCHA Data Responsibility Guidelines (2021)**

The UN Office for the Coordination of Humanitarian Affairs has established guidelines for responsible data management in humanitarian response. This manifesto aligns with these guidelines while providing deeper technical specification for implementation.

**The Humanitarian Data Exchange (HDX) Standards**

HDX has established standards for sharing humanitarian data across organizations. Our credential and interoperability specifications are designed to complement and integrate with HDX infrastructure.

**International Humanitarian Law (IHL)**

The fundamental principles of humanity, impartiality, neutrality, and independence that govern humanitarian action must extend to data management. Data practices that compromise these principles—such as sharing protection-sensitive data with parties to a conflict—violate not just privacy norms but the foundations of humanitarian action itself.

#### Beyond Privacy: The Meaning of Data Dignity

Data dignity goes beyond privacy and security—it is about agency. Privacy protects individuals from unwanted intrusion. Security protects data from unauthorized access. But dignity encompasses something more fundamental: the recognition that data represents a person, and that person has inherent worth and rights that must be respected in every data transaction.

Data dignity empowers individuals to:

- **Maintain control** over their personal information across systems and organizations
- **Make informed decisions** about how their data is used, with whom it is shared, and for what purposes
- **Revoke access** when circumstances change or trust is broken
- **Understand** how algorithmic systems use their data to make decisions that affect their lives
- **Seek redress** when their data rights are violated

The principles outlined in this manifesto aim to protect individuals, foster trust, and build a future where data serves humanity—not the other way around.

#### A Note on Terminology

Throughout this manifesto, we use specific terms with precise meanings:

| Term | Definition |
|------|------------|
| **Data Subject** | The individual whose personal data is being processed |
| **Data Controller** | The organization that determines the purposes and means of processing |
| **Data Processor** | An entity that processes data on behalf of a controller |
| **Personal Data** | Any information relating to an identified or identifiable individual |
| **Sensitive Data** | Personal data requiring heightened protection (health, ethnicity, religion, political opinion, biometrics) |
| **Consent** | Freely given, specific, informed, and unambiguous indication of agreement to data processing |
| **Data Dignity** | The recognition that personal data represents an extension of the individual, deserving ethical treatment that respects autonomy and agency |

#### The Path Forward

This manifesto seeks to redefine how data is governed, protected, and shared in humanitarian contexts. It establishes that data dignity is a fundamental human right—not a privilege to be granted by organizations, but an inherent attribute of personhood that must be respected.

The sections that follow translate these principles into specific technical standards, governance frameworks, and implementation guidelines. Our goal is not merely to articulate values, but to provide a practical roadmap for organizations committed to upholding data dignity in their operations.

We recognize that implementation will be challenging. The humanitarian sector operates under resource constraints, in difficult environments, with legacy systems and competing priorities. This manifesto does not demand perfection—it demands commitment to continuous improvement toward a standard that respects the dignity of every individual whose data we hold.

---

### I.2 Purpose of the Manifesto

The Data Dignity Manifesto is a commitment to creating a world where data is managed ethically, transparently, and in a way that upholds the dignity of every individual. It seeks to bridge the gap between advanced technological systems and fundamental human rights, ensuring that every person—whether an American citizen, a refugee, or a resident of any nation—can trust that their data will be used to benefit them, not to harm them.

#### Scope and Applicability

This manifesto has a defined scope of applicability:

**Primary Scope: Humanitarian Operations**

The manifesto is designed first and foremost for humanitarian contexts:

- Refugee registration and protection
- Internally displaced persons (IDP) assistance
- Disaster response and recovery
- Health emergencies and epidemic response
- Food security and nutrition programs
- Protection services for vulnerable populations
- Resettlement and durable solutions processing

In these contexts, the stakes are highest, the populations most vulnerable, and the need for robust data dignity protections most urgent. Every principle and technical specification in this manifesto has been evaluated against the operational realities of humanitarian response.

**Secondary Scope: Broader Data Governance**

While designed for humanitarian operations, many principles in this manifesto are applicable to broader data governance contexts:

- Social services and public benefits administration
- Healthcare systems
- Educational institutions
- Non-profit and civil society organizations
- Development programs

Organizations in these sectors may adopt relevant portions of the manifesto while adapting implementation details to their specific contexts.

**Out of Scope**

This manifesto does not address:

- Commercial data monetization frameworks
- Advertising and marketing data practices
- Social media platform governance
- Consumer data brokerage

These contexts involve fundamentally different power dynamics, incentive structures, and regulatory environments. While some principles may be relevant, the manifesto should not be applied uncritically to commercial contexts.

#### Intended Audiences

This manifesto is intended for technologists, policymakers, civil society, and individuals alike. It provides a comprehensive framework for ethical data governance that can be adopted by organizations, governments, and humanitarian agencies.

**For Technologists**

The manifesto offers practical guidance on building systems that respect data dignity and protect user rights. Part III (Foundational Principles) provides the conceptual framework, while the Technical Appendices offer detailed specifications for:

- Identity management and credential systems
- Consent management architectures
- Privacy-preserving computation
- Offline-capable system design
- Interoperability with existing humanitarian platforms

Technologists should treat this manifesto as both a requirements document and an architectural guide.

**For Policymakers**

The manifesto outlines key principles that can be translated into regulations and policies to safeguard data dignity as a fundamental human right. Key sections for policymakers include:

- Part I (Vision & Context) for foundational principles
- Part IV (Implementation Guidelines) for governance structures
- Part V (Metrics and Compliance) for accountability frameworks
- Part VI (Enforcement) for penalty structures and oversight mechanisms

Policymakers should consider how existing legal frameworks (GDPR, CCPA, national data protection laws) can be strengthened to incorporate data dignity principles, particularly for vulnerable populations.

**For Civil Society and Individuals**

The manifesto offers assurance that the digital systems shaping everyday life are being designed and operated with their best interests and data sovereignty in mind. For affected communities:

- Section I.3 acknowledges the power asymmetries you face
- Section I.4 guarantees that essential aid is never conditional on data consent
- Section III.11 ensures you have a voice in governance through accessible participation mechanisms
- Part IV establishes grievance mechanisms for when your rights are violated

For civil society organizations advocating for data rights, this manifesto provides a comprehensive framework for evaluating humanitarian data practices and holding organizations accountable.

#### Relationship to Existing Standards

This manifesto is designed to **complement, not replace**, existing data protection frameworks:

| Existing Framework | Relationship |
|-------------------|--------------|
| UNHCR Data Protection Policy | Extends principles into technical architecture; provides implementation specifications |
| ICRC Handbook on Data Protection | Operationalizes guidance for armed conflict contexts; adds compartmentalization requirements |
| OCHA Data Responsibility Guidelines | Aligns with and provides deeper technical specification; designed for interoperability |
| GDPR | Compliant with and exceeds requirements; adds humanitarian-specific provisions |
| CCPA | Compliant with applicable requirements |
| ISO 27001/27701 | Certification against these standards is recommended; manifesto adds humanitarian-specific controls |

Organizations implementing this manifesto should maintain compliance with all applicable legal requirements. Where the manifesto exceeds legal requirements, organizations should implement the higher standard.

#### A Living Document

The Data Dignity Manifesto is designed to serve as a living document, evolving with the technological landscape and responding to the changing needs of the populations it aims to protect. The governance structures described in Part IV establish processes for:

- Regular review and update of principles
- Community input and feedback integration
- Technical specification updates as technologies evolve
- Incorporation of lessons learned from implementation

Version control, change documentation, and community notification processes ensure that updates are transparent and stakeholder input is incorporated.

---

### I.3 Power Asymmetry Acknowledgment

*This section addresses a critical gap identified in the original manifesto: the failure to explicitly acknowledge that consent in humanitarian contexts exists within structural power asymmetry.*

#### The Structural Reality

We must be honest about a fundamental tension in humanitarian data governance: **individuals provide data because they need assistance.** When a refugee registers with UNHCR, they do so not because they freely choose to share their personal information, but because registration is the gateway to protection, assistance, and durable solutions. When a disaster survivor provides their details to a relief organization, they do so because they need food, water, and shelter.

This creates an inherent power differential between humanitarian organizations and the people they serve:

- Organizations control access to resources that beneficiaries need for survival
- Beneficiaries may fear that refusing data requests will result in denial of services
- The urgency of humanitarian crises leaves little time for careful deliberation about data implications
- Language barriers, trauma, and unfamiliar systems compound the difficulty of truly informed consent

**This power asymmetry is a baseline condition, not an edge case.** Every humanitarian data interaction occurs within this structural reality. A manifesto that ignores this fact—that pretends consent in humanitarian contexts is equivalent to consent in commercial transactions—would be dishonest and ultimately ineffective.

#### What This Means for "Consent"

Traditional consent frameworks assume a relatively level playing field: individuals can walk away from transactions they find objectionable, they have time to consider their options, and the consequences of refusal are limited. None of these assumptions hold in humanitarian contexts.

This does not mean consent is meaningless in humanitarian settings—but it does mean we must be realistic about what consent can achieve:

| Traditional Consent | Humanitarian Consent |
|--------------------|---------------------|
| Freely given | Constrained by survival needs |
| Informed | Limited by language, trauma, system complexity |
| Specific | Often bundled with service access |
| Revocable | May fear consequences of revocation |

We must design systems that **minimize coercion** and **maximize meaningful choice**, while acknowledging that we cannot fully eliminate the structural constraints.

#### Design Implications

Acknowledging power asymmetry leads to specific design requirements:

**1. Decouple Essential Services from Data Consent**

The most critical design implication is that essential services must never be conditional on data sharing beyond minimum identification. This is addressed in detail in Section I.4.

**2. Multiple Opportunities for Consent Adjustment**

Because initial consent occurs under duress (the urgency of crisis), individuals must have multiple opportunities to adjust their consent as their situation stabilizes:

- Re-consent prompts after initial emergency phase
- Regular consent review intervals
- Easy-to-access consent modification interfaces
- Proactive outreach to explain consent options

**3. Retrospective Consent Adjustment**

Individuals must be able to retroactively modify consent decisions made during crisis:

- No penalty for retrospective consent narrowing
- Data deletion upon request (within technical constraints)
- Clear information about what retrospective changes affect

**4. Minimize Consent Complexity During Crisis**

The tiered consent model (Section III.3) is designed to reduce cognitive burden during emergencies. Rather than requiring granular decisions about dozens of data elements, beneficiaries make simple tier selections. Granular customization is available for those who want it, but is not required.

**5. Staff Training on Consent Dynamics**

Field staff must understand the consent dynamics they operate within:

- Recognition that beneficiaries may feel pressured even without explicit coercion
- Training on non-coercive consent facilitation
- Awareness of body language and cultural factors affecting consent interactions
- Clear escalation paths when consent concerns arise

#### What We Can and Cannot Achieve

We are honest about the limits of what data dignity can accomplish within structural power asymmetry:

**We CANNOT:**
- Eliminate the power differential between organizations and beneficiaries
- Make humanitarian consent fully equivalent to commercial consent
- Remove all incentives for beneficiaries to share more data than they might otherwise prefer
- Guarantee that no individual will ever feel pressured

**We CAN:**
- Ensure that essential aid is never withheld based on consent choices
- Provide meaningful choices within the constraints of humanitarian operations
- Give individuals multiple opportunities to adjust consent over time
- Create accountability mechanisms when consent principles are violated
- Design systems that minimize coercion even if they cannot eliminate it
- Be transparent about the constraints and tradeoffs

This honest framing differentiates the Data Dignity Manifesto from corporate privacy frameworks that assume—often incorrectly—that consent is freely given. By acknowledging the structural realities of humanitarian contexts, we can design more effective protections.

---

### I.4 Aid Conditionality Prohibition

*This section establishes the manifesto's most inviolable principle: essential humanitarian services shall never be conditional on data sharing.*

#### The Principle

**Essential humanitarian services shall NEVER be conditional on data sharing beyond minimum identification required for deduplication.**

This principle admits no exceptions. No "operational necessity" override. No "emergency circumstances" caveat. No "resource constraints" justification.

The logic is straightforward: if a person will die without food, and we have food to give them, we cannot withhold that food because they declined to share their ethnicity, health status, or location history. To do so would be to use data as a weapon against the very people we exist to serve.

This principle is derived from the fundamental humanitarian imperative: **to save lives and alleviate suffering without discrimination.**

#### Essential Services Defined

The following services are classified as "essential" and are subject to the unconditional access requirement:

| Service Category | Specific Services | Maximum Data Required |
|-----------------|-------------------|----------------------|
| **Food and Nutrition** | Emergency food distribution, therapeutic feeding, nutrition supplements | Name/identifier, household size, distribution record |
| **Water** | Safe drinking water provision, water treatment, emergency water trucking | Location/distribution point, household size |
| **Emergency Shelter** | Emergency shelter materials, emergency accommodation, winterization | Name/identifier, household size, location |
| **Emergency Medical Care** | Life-saving medical treatment, emergency surgery, epidemic response treatment | Name/identifier, medical information necessary for treatment |
| **Protection from Physical Harm** | Evacuation from danger, safe shelter from violence, emergency protection response | Name/identifier, protection concern (as needed for response) |
| **Family Tracing** | Tracing services for unaccompanied minors, family reunification | Name, family information, last known locations |

Note: The data requirements listed are **maximums**. If an individual cannot or will not provide even this minimum data, they must still receive services. Anonymous service provision is preferable to service denial.

#### The Graduated Consent Model

While essential services are unconditional, additional services may be enabled by broader data sharing. This creates a graduated model:

**Tier 0: Unconditional Essential Services**
- Available to all, regardless of consent choices
- Requires only minimum identification for deduplication (may be anonymous if necessary)
- No consent form required beyond acknowledgment of service receipt

**Tier 1: Basic Humanitarian Services**
- Includes: Non-emergency health services, education referrals, livelihood assessments
- Requires: Basic consent to data collection and storage
- Benefit: Enables comprehensive case management

**Tier 2: Extended Services**
- Includes: Resettlement referrals, skills training, economic inclusion programs
- Requires: Consent to data sharing with relevant partners
- Benefit: Enables access to durable solutions pathways

**Tier 3: Program Improvement**
- Includes: Participation in program evaluations, feedback mechanisms
- Requires: Consent to anonymized data use for research and improvement
- Benefit: Contributes to improved services for all

**Tier 4: Cross-Organization Sharing**
- Includes: Coordinated multi-agency case management, inter-agency referrals
- Requires: Consent to data sharing across specified organizations
- Benefit: Enables holistic service coordination

**Critical Design Requirement:** Movement between tiers must never affect access to Tier 0 services. An individual can revoke all consent above Tier 0 at any time without losing access to essential services.

#### Communication to Beneficiaries

Clear communication about the graduated model is essential. At registration, beneficiaries must be told in their language:

> "You will receive food, water, shelter, and emergency medical care regardless of what data you choose to share with us. Additional services may require additional information, but you can always access basic assistance."

This statement must be made:
- Verbally in the beneficiary's language
- In writing (where literacy permits)
- Through visual aids for low-literacy populations
- Before any consent decisions are requested

#### Staff Obligations

Staff are the frontline implementers of the aid conditionality prohibition. Their obligations include:

**Training Requirements**
- All staff involved in service delivery must complete training on consent as a protected right
- Training must include scenarios illustrating appropriate and inappropriate consent interactions
- Refresher training annually
- Training completion records maintained

**Consent Facilitation Scripts**
Standard scripts for consent conversations must:
- Explicitly state that essential services are unconditional
- Avoid language that implies services depend on consent
- Provide clear explanations of what each consent tier enables
- Include prompts for staff to confirm beneficiary understanding

**Prohibited Behaviors**
The following behaviors constitute violations of the aid conditionality prohibition:
- Stating or implying that essential services require consent beyond minimum identification
- Delaying essential services pending consent decisions
- Expressing disapproval of consent refusal
- Pressuring beneficiaries to consent to higher tiers
- Discriminating in service quality based on consent level

**Supervision and Accountability**
- Supervisors must monitor consent interactions
- Spot checks of consent processes must be conducted
- Staff who violate the prohibition are subject to disciplinary action
- Repeated violations result in removal from beneficiary-facing roles

#### Grievance Mechanism

Beneficiaries who believe they have been denied services based on consent choices, or who have been pressured to consent, must have access to a grievance mechanism:

**Accessibility**
- Multiple reporting channels (in-person, phone, written, digital)
- Available in relevant languages
- Anonymous reporting option
- Accessible in all service delivery locations

**Process**
- Acknowledgment of grievance within 48 hours
- Investigation completed within 14 days
- Beneficiary informed of outcome
- Appeals process available

**Remediation**
- If violation confirmed: immediate service restoration
- Staff accountability actions as appropriate
- Systemic issues escalated for policy review
- Aggregate grievance data analyzed for patterns

#### Monitoring and Enforcement

Beyond individual grievances, systematic monitoring ensures the aid conditionality prohibition is upheld:

**Data Analysis**
- Track correlation between consent levels and service access
- Flag anomalies where low-consent individuals have lower service uptake
- Investigate distribution site-level variations

**Audit Program**
- Regular audits of consent processes at service delivery points
- "Mystery beneficiary" exercises to test consent interactions
- Document review of consent records

**Penalties for Violation**
- Individual staff: Progressive discipline up to termination
- Organizational units: Corrective action plans, enhanced monitoring
- Systematic violations: Certification suspension (see Part V)

This prohibition is not merely policy—it is the ethical foundation of humanitarian data dignity. Without it, data dignity becomes a tool of coercion rather than protection.

---

# PART II: THREAT MODEL & SECURITY FOUNDATIONS

*This section addresses a critical gap identified in the original manifesto: the complete absence of a threat model. As noted by the Stanford Cryptography Lead during the expert roundtable: "Without knowing who we're defending against, all security claims are meaningless. You cannot design cryptographic protections without adversary assumptions. This is Security 101."*

*The threat model must be established before any technical claims can be evaluated or implemented. All cryptographic choices, architectural decisions, and operational procedures in this manifesto are derived from the adversary analysis presented in this section.*

---

## II.1 Introduction to Security Foundations

### Why Threat Modeling Matters

Security is not a feature to be added—it is a property that emerges from designing systems with specific adversaries in mind. A system that is "secure" against a curious administrator may be trivially compromised by a nation-state actor. A system designed to resist network intrusion may fail completely when an armed group physically seizes a server.

The humanitarian sector faces a uniquely challenging threat landscape:

- **High-value targets**: Data on persecuted minorities, political dissidents, and vulnerable populations is valuable to multiple adversaries
- **Hostile operating environments**: Many humanitarian operations occur in active conflict zones, failed states, or authoritarian contexts
- **Resource constraints**: Security budgets and expertise are limited relative to the threats faced
- **Diverse adversary motivations**: From profit-seeking criminals to state-sponsored persecution
- **Physical accessibility**: Field equipment operates in environments where physical security cannot be guaranteed

This threat model provides the foundation for all security decisions in the Data Dignity framework. Every control, every cryptographic choice, every architectural decision should trace back to a specific threat this model identifies.

### Threat Modeling Methodology

This threat model follows a structured approach:

1. **Adversary Identification**: Who might attack the system and why?
2. **Capability Assessment**: What resources and techniques do adversaries possess?
3. **Data Classification**: What are we protecting and how sensitive is it?
4. **Attack Scenario Analysis**: How might adversaries attempt to compromise the system?
5. **Trust Boundary Definition**: Where are the boundaries between trusted and untrusted components?
6. **Control Mapping**: What controls mitigate each identified threat?

The model is designed to be updated as the threat landscape evolves. Organizations implementing this framework should conduct annual threat model reviews and update assessments when significant changes occur in their operating environment.

---

## II.2 Adversary Classification

Understanding who might attack humanitarian data systems—and why—is essential for designing appropriate defenses. We identify six primary adversary classes relevant to humanitarian data protection.

### II.2.1 Adversary Taxonomy

#### Class 1: Curious Insider

**Description**: Authorized staff members who exceed their need-to-know, accessing data out of personal curiosity, for gossip, or to satisfy requests from family or community members.

**Typical Profile**:
- Registration clerks, data entry staff, field officers
- Legitimate system access within their role
- Limited technical sophistication
- May not perceive their actions as harmful

**Capabilities**:
- Query access to systems they are authorized to use
- Limited data export (screenshots, manual transcription)
- Social knowledge of beneficiaries and communities
- Ability to correlate data across sources they can access

**Motivations**:
- Personal curiosity about specific individuals
- Social pressure from community members
- Desire to help (or harm) specific individuals
- Financial gain from small-scale data sale

**Example Scenarios**:
- Aid worker looks up information on a neighbor's family
- Staff member shares registration details with community leader
- Employee checks whether a specific person has registered

**Required Mitigations**:
- Role-based access control with least privilege
- Audit logging of all data access
- Anomaly detection for unusual query patterns
- Regular access reviews
- Clear policies and training on acceptable use
- Cultural awareness training on data privacy

#### Class 2: Malicious Insider

**Description**: Staff members with privileged access who deliberately abuse their position for financial gain, ideological reasons, or under coercion.

**Typical Profile**:
- System administrators, database managers, IT staff
- Senior program staff with broad access
- May have been compromised or coerced by external actors
- Higher technical sophistication than curious insiders

**Capabilities**:
- Administrative access to systems
- Ability to export data in bulk
- Ability to modify audit logs (if not properly protected)
- Knowledge of system architecture and security controls
- Ability to create unauthorized accounts or elevate privileges

**Motivations**:
- Financial gain from large-scale data sale
- Ideological alignment with adversary (e.g., nationalist sympathies)
- Coercion by state actors or armed groups
- Grievance against organization or specific populations
- Espionage on behalf of external actors

**Example Scenarios**:
- IT administrator exports entire registration database for sale
- Coerced staff member provides access credentials to armed group
- Disgruntled employee leaks sensitive protection data
- Compromised administrator installs backdoor for persistent access

**Required Mitigations**:
- Separation of duties for sensitive operations
- Multi-party authorization for bulk data access
- Tamper-evident audit logging (append-only, cryptographically signed)
- Background checks and vetting for privileged roles
- Behavioral monitoring for anomalous activity
- Hardware security modules for key management
- Regular rotation of administrative credentials

#### Class 3: Criminal Organization

**Description**: External criminal actors seeking data for exploitation, fraud, or trafficking purposes.

**Typical Profile**:
- Organized criminal networks
- Human trafficking organizations
- Fraud rings targeting vulnerable populations
- Moderate to high technical sophistication
- Profit-motivated with established monetization channels

**Capabilities**:
- Phishing and social engineering campaigns
- Credential theft through malware
- Purchase of credentials from insiders
- Network intrusion using known vulnerabilities
- Exploitation of unpatched systems
- Identity fraud and impersonation

**Motivations**:
- Human trafficking (data identifies vulnerable individuals)
- Extortion (threatening to expose sensitive information)
- Financial fraud (using identity data for benefit claims)
- Ransom (encrypting systems and demanding payment)
- Sale of data to other adversaries

**Example Scenarios**:
- Trafficking network purchases registration data to identify unaccompanied minors
- Fraud ring uses beneficiary identities to claim benefits in third countries
- Ransomware attack encrypts humanitarian organization's systems
- Phishing campaign targets staff to steal credentials

**Required Mitigations**:
- Strong authentication (multi-factor required for sensitive access)
- Email security (phishing detection, DMARC, user training)
- Endpoint protection (EDR, regular patching)
- Network segmentation (limit lateral movement)
- Data encryption at rest and in transit
- Incident response procedures
- Threat intelligence sharing across humanitarian sector

#### Class 4: State Actor (Legal Authority)

**Description**: Government entities using lawful authority to compel data disclosure, including host country governments, transit countries, and countries of origin.

**Typical Profile**:
- Immigration authorities
- Law enforcement agencies
- Intelligence services operating within legal frameworks
- Courts issuing subpoenas or warrants
- May have significant resources and persistence

**Capabilities**:
- Legal compulsion (subpoenas, court orders, national security letters)
- Lawful intercept of communications
- Border data demands (device inspection, cloud data requests)
- Pressure on local staff (who may be subject to local law)
- Mutual legal assistance treaties (MLATs) for cross-border requests
- Regulatory leverage over organizations operating in their jurisdiction

**Motivations**:
- Immigration enforcement (identifying undocumented individuals)
- National security (monitoring specific populations)
- Law enforcement (investigating alleged crimes)
- Political persecution (under color of law)
- Intelligence gathering on diaspora communities

**Example Scenarios**:
- Host country demands access to registration database for immigration enforcement
- Country of origin requests data on refugees through MLAT
- Border officials demand access to devices containing beneficiary data
- Court orders humanitarian organization to produce records

**Required Mitigations**:
- Data minimization (don't collect what you can't protect)
- Jurisdictional data segregation (sensitive data not stored in hostile jurisdictions)
- Legal review processes for all government data requests
- Privilege and confidentiality protections where applicable
- Transparency reporting on government requests
- Staff training on responding to legal demands
- Technical measures to ensure legal process is followed (no informal access)
- Engagement with host government on data protection agreements

#### Class 5: State Actor (Hostile)

**Description**: Nation-state intelligence services or state-sponsored actors using offensive cyber capabilities to target humanitarian data, typically the country of origin seeking information on refugees who have fled.

**Typical Profile**:
- Intelligence services of authoritarian regimes
- State-sponsored hacking groups (APT actors)
- Military cyber units
- Highest level of sophistication and resources
- Persistent, patient, and well-funded

**Capabilities**:
- Advanced persistent threats (APT)
- Zero-day vulnerability exploitation
- Supply chain compromise
- Physical access through intelligence operations
- Compromise of staff through recruitment or coercion
- Signals intelligence (interception of communications)
- Sophisticated social engineering
- Long-term presence in compromised networks

**Motivations**:
- Targeting refugees for persecution, even in exile
- Identifying dissidents and political opponents
- Mapping diaspora networks and opposition movements
- Gathering intelligence on humanitarian operations
- Retribution against those who fled

**Example Scenarios**:
- APT group from country of origin compromises UNHCR systems to identify refugees
- Intelligence service recruits local staff member to provide ongoing access
- State-sponsored actors compromise software used by humanitarian organizations
- Diplomatic facilities used to conduct close-access operations against humanitarian data

**Required Mitigations**:
- Defense-in-depth architecture (assume breach, limit blast radius)
- Network segmentation and zero-trust principles
- Endpoint detection and response with behavioral analysis
- Threat intelligence integration (APT indicators)
- Supply chain security (software integrity verification)
- Compartmentalization of sensitive data (see Section III.6.5)
- Enhanced vetting for staff with access to sensitive populations
- Confidential computing for sensitive processing
- Assumption that network may be compromised; protect data at rest
- Geographic and jurisdictional separation of sensitive data from hostile states
- Regular penetration testing by qualified firms

#### Class 6: Armed Non-State Actor

**Description**: Militia groups, rebel forces, criminal gangs, or terrorist organizations that may target humanitarian data through physical means.

**Typical Profile**:
- Armed groups in conflict zones
- Criminal gangs controlling territory
- Terrorist organizations
- Variable technical sophistication (often low to moderate)
- Willing and able to use violence
- May have physical access to humanitarian facilities

**Capabilities**:
- Physical seizure of devices and equipment
- Coercion and violence against staff
- Checkpoint data demands
- Raiding humanitarian facilities
- Forcing staff to provide access under duress
- Physical surveillance of humanitarian operations

**Motivations**:
- Targeting populations by ethnicity, religion, or political affiliation
- Identifying individuals for recruitment, extortion, or violence
- Controlling humanitarian access as leverage
- Looting valuable equipment
- Intelligence on humanitarian operations and population movements

**Example Scenarios**:
- Armed group seizes laptops during checkpoint stop
- Militia raids registration center and takes servers
- Staff member coerced at gunpoint to provide system access
- Armed group demands beneficiary lists as condition of humanitarian access

**Required Mitigations**:
- Full-disk encryption on all devices (with keys not stored on device)
- Remote wipe capabilities
- Minimal local data storage (sync and purge)
- Physical security assessments for facilities
- Staff security training (including behavior under duress)
- Duress codes and silent alarms
- Data compartmentalization (field devices don't contain full database)
- Tamper-evident and tamper-resistant hardware
- Dead man's switch (automatic lockout if device doesn't check in)
- Rapid incident response for device seizure
- Security protocols for humanitarian access negotiations

### II.2.2 Capability Levels

Adversary capabilities can be categorized into four levels, which help calibrate defensive measures:

| Level | Name | Capabilities | Typical Adversaries |
|-------|------|--------------|---------------------|
| **1** | **Basic** | Social engineering, phishing, credential theft, exploitation of known vulnerabilities with public tools | Curious insiders, opportunistic criminals |
| **2** | **Intermediate** | Custom malware, network intrusion, persistent access, moderate evasion capabilities | Criminal organizations, malicious insiders with technical skills |
| **3** | **Advanced** | Zero-day exploitation, advanced persistent threats, sophisticated evasion, custom tooling | State actors, sophisticated criminal organizations |
| **4** | **Nation-State** | All of the above plus: physical access operations, supply chain compromise, hardware implants, signals intelligence, human intelligence operations | Hostile state actors, intelligence services |

**Design Principle**: Systems should be designed to resist Level 2 adversaries in all configurations, Level 3 adversaries for sensitive data, and Level 4 adversaries for the most critical data (with acknowledgment that perfect defense against nation-states is not achievable, but detection and limiting damage is possible).

---

## II.3 Data Sensitivity Classification

Not all data requires the same level of protection. Classification enables appropriate resource allocation and helps staff understand handling requirements.

### II.3.1 Classification Levels

#### Level 1: Public

**Definition**: Information that is intended for public release or whose disclosure would cause no harm.

**Examples**:
- Aggregate statistics (e.g., "10,000 refugees registered in Camp X")
- Published reports and assessments
- Anonymized and aggregated trend data
- Public-facing organizational information

**Required Protections**:
- Integrity (prevent unauthorized modification)
- Availability (ensure access when needed)
- No confidentiality requirements

**Handling**: May be shared freely. No special handling required.

#### Level 2: Internal

**Definition**: Information intended for internal organizational use whose disclosure could cause minor harm or operational inconvenience.

**Examples**:
- Staff directories and contact information
- Internal operational documents
- Program planning materials
- Non-sensitive correspondence

**Required Protections**:
- Access control (authorized staff only)
- Audit logging
- Basic encryption in transit

**Handling**: Share within organization on need-to-know basis. Do not post publicly.

#### Level 3: Sensitive

**Definition**: Personal data and operational information whose disclosure could cause significant harm to individuals or operations.

**Examples**:
- Names and basic demographics of beneficiaries
- Assistance history and program enrollment
- Case management notes (non-protection)
- Health information (general)
- Financial information

**Required Protections**:
- Encryption at rest and in transit
- Strict access control with role-based permissions
- Comprehensive audit logging
- Consent-based access
- Secure disposal procedures

**Handling**: Access limited to those with specific need. Consent required for collection and sharing. Secure storage and transmission mandatory.

#### Level 4: Critical

**Definition**: Highly sensitive personal data whose disclosure could result in severe harm including physical danger, persecution, or death.

**Examples**:
- Location data in conflict zones
- Ethnicity, tribe, or clan affiliation (in contexts of ethnic conflict)
- Political opinion or affiliation
- Religious belief (in contexts of religious persecution)
- Sexual orientation or gender identity (in contexts of persecution)
- Biometric data (fingerprints, iris scans, facial images)
- Protection concerns and security incidents
- Witness statements and protection case details
- HIV status or other stigmatized health conditions

**Required Protections**:
- Maximum encryption (AES-256 or equivalent)
- Compartmentalization (access limited to specific roles/compartments)
- Multi-party authorization for access
- Offline-capable encryption (data protected even without network)
- Hardware security modules for key management
- Enhanced audit logging with tamper evidence
- Geographic restrictions on data storage
- Confidential computing for processing
- Strict data minimization

**Handling**: Access only with specific authorization and documented justification. Enhanced vetting for staff with access. Regular access reviews. Incident response procedures for potential exposure.

### II.3.2 Context-Dependent Classification

Data classification is not static—the same data element may require different classification levels depending on context:

| Data Element | Stable Context | Active Conflict | Persecution Context |
|--------------|----------------|-----------------|---------------------|
| Name | Level 3 (Sensitive) | Level 3-4 | Level 4 (Critical) |
| Location | Level 3 (Sensitive) | Level 4 (Critical) | Level 4 (Critical) |
| Ethnicity | Level 3 (Sensitive) | Level 4 (Critical) | Level 4 (Critical) |
| Photo | Level 3 (Sensitive) | Level 3-4 | Level 4 (Critical) |
| Assistance history | Level 3 (Sensitive) | Level 3 (Sensitive) | Level 3-4 |

**Classification Review Triggers**:
- Change in security situation in operating area
- New conflict or persecution patterns identified
- Government policy changes affecting population
- Identification of new adversary interest in specific data
- Incident involving data of the type in question

Organizations must establish procedures for classification review and have authority to elevate classification when circumstances warrant.

### II.3.3 Classification Marking and Handling

All data must be marked with its classification level, and systems must enforce handling requirements:

**Marking Requirements**:
- Databases must include classification metadata for each data element
- Documents must display classification prominently
- Systems must prevent mixing of classification levels without appropriate controls
- Users must be informed of data classification before access

**Handling Matrix**:

| Action | Level 1 | Level 2 | Level 3 | Level 4 |
|--------|---------|---------|---------|---------|
| Store unencrypted | ✓ | ✗ | ✗ | ✗ |
| Store encrypted | ✓ | ✓ | ✓ | ✓ (enhanced) |
| Transmit unencrypted | ✓ | ✗ | ✗ | ✗ |
| Transmit encrypted | ✓ | ✓ | ✓ | ✓ (enhanced) |
| Share externally | ✓ | With approval | With consent + agreement | Exceptional only |
| Store in cloud | ✓ | ✓ | With controls | Confidential computing only |
| Store on mobile device | ✓ | ✓ | Encrypted only | Minimized, encrypted, remote wipe |
| Print | ✓ | ✓ | Controlled | Exceptional only |
| Retain indefinitely | ✓ | Review required | Time-limited | Strictly time-limited |

---

## II.4 Attack Scenarios and Mitigations

This section analyzes priority attack scenarios relevant to humanitarian data systems, providing specific mitigations for each.

### II.4.1 Scenario 1: Registration Database Compromise by State Actor

**Threat**: A hostile state actor (typically the country of origin) compromises the humanitarian organization's registration database to identify refugees who have fled.

**Attack Path**:
1. Reconnaissance on humanitarian organization's infrastructure
2. Spear-phishing campaign targeting IT staff
3. Credential compromise and initial access
4. Lateral movement to database servers
5. Data exfiltration (possibly over extended period to avoid detection)
6. Use of data to target refugees (denial of documents, pressure on family members, persecution upon return)

**Impact**: Severe—potential physical harm or death to identified individuals.

**Mitigations**:

| Control Type | Specific Controls |
|--------------|-------------------|
| **Preventive** | Network segmentation isolating registration systems; Multi-factor authentication for all access; Email security with advanced threat protection; Endpoint detection and response; Geographic access restrictions; Supply chain security |
| **Detective** | Security information and event management (SIEM); Anomaly detection for data access patterns; Threat intelligence integration; Regular penetration testing; Database activity monitoring |
| **Responsive** | Incident response plan specific to state actor compromise; Notification procedures for affected individuals; Coordination with protection actors; Legal response procedures |
| **Recovery** | Backup and recovery procedures; Credential rotation; System rebuild from known-good images; Post-incident review |

### II.4.2 Scenario 2: Field Device Seizure by Armed Group

**Threat**: An armed group seizes laptops, tablets, or phones containing beneficiary data at a checkpoint or during a facility raid.

**Attack Path**:
1. Armed group establishes checkpoint or conducts raid
2. Devices physically seized from staff
3. Attempts to access data on devices
4. If successful: data used to identify and target individuals

**Impact**: Severe—data on seized devices could be used for immediate targeting.

**Mitigations**:

| Control Type | Specific Controls |
|--------------|-------------------|
| **Preventive** | Full-disk encryption with strong keys not stored on device; Pre-boot authentication; Minimal local data storage (sync and purge); Removable storage prohibited; Physical security protocols; Route planning to avoid high-risk areas |
| **Detective** | Device check-in requirements (dead man's switch); GPS tracking for high-risk areas (with consent); Tamper detection |
| **Responsive** | Remote wipe capability; Immediate credential revocation; Incident reporting procedures; Security coordination with relevant actors |
| **Recovery** | Device replacement procedures; Data recovery from secure backups; Affected individual notification (if safe to do so) |

**Special Considerations**:
- Staff must be trained on behavior during seizure (do not resist, do not volunteer passwords)
- Duress codes should trigger silent wipe while appearing to comply
- Encryption must be strong enough to resist extended offline attack

### II.4.3 Scenario 3: Insider Data Sale to Traffickers

**Threat**: A staff member with database access sells beneficiary data to human trafficking networks, who use it to identify and target vulnerable individuals.

**Attack Path**:
1. Insider identifies monetization opportunity (approached by traffickers or self-initiated)
2. Uses legitimate access to query specific data (unaccompanied minors, single women, etc.)
3. Exports data through screenshots, photos of screen, or USB
4. Provides data to trafficking network
5. Traffickers use data to locate and exploit victims

**Impact**: Severe—direct facilitation of trafficking and exploitation.

**Mitigations**:

| Control Type | Specific Controls |
|--------------|-------------------|
| **Preventive** | Least-privilege access (staff only access what they need); Query restrictions on sensitive categories; USB and screenshot blocking on sensitive systems; Background checks and vetting; Data Loss Prevention (DLP) tools; Ethics training and clear consequences |
| **Detective** | Audit logging of all queries; Anomaly detection (unusual query patterns, off-hours access); Correlation of access with job responsibilities; Regular access reviews; Anonymous reporting mechanisms |
| **Responsive** | Investigation procedures; Coordination with law enforcement (where appropriate); Termination and potential prosecution; Notification to affected individuals and protection actors |
| **Recovery** | Access revocation; Credential rotation; Review of all data accessed by insider; Enhanced monitoring for similar patterns |

### II.4.4 Scenario 4: Cross-Border Data Request by Persecuting Government

**Threat**: The government of a refugee's country of origin uses legal mechanisms (MLAT, diplomatic pressure, court orders in third country) to obtain data on specific individuals.

**Attack Path**:
1. Country of origin identifies target individual (dissident, opposition figure, etc.)
2. Legal request submitted through official channels to host country or organization
3. Pressure applied through diplomatic or legal means
4. If complied with: data used for persecution (denial of passport renewal, pressure on family, targeting upon return)

**Impact**: Severe—legal mechanisms used to facilitate persecution.

**Mitigations**:

| Control Type | Specific Controls |
|--------------|-------------------|
| **Preventive** | Legal review required for all government data requests; Privilege and confidentiality protections; Data minimization (don't hold data you don't need); Jurisdictional planning (don't store sensitive data in jurisdictions with MLAT to hostile states); Encryption with keys outside requesting jurisdiction |
| **Detective** | Tracking of all government requests; Pattern analysis across requests; Transparency reporting |
| **Responsive** | Legal challenge procedures; Engagement with UNHCR and protection actors; Notification to individual (if safe and permitted); Escalation to senior leadership; Public advocacy (where appropriate) |
| **Recovery** | Review of data protection arrangements; Potential relocation of data; Policy advocacy |

**Special Considerations**:
- Organizations must have clear policies on responding to government requests
- Staff must know to escalate—never respond to informal requests
- Legal review must consider protection implications, not just legal compliance

### II.4.5 Scenario 5: Aid Conditionality Coercion by Local Authorities

**Threat**: Local authorities (camp management, local government, security forces) pressure humanitarian organizations to share data or make aid conditional on data sharing.

**Attack Path**:
1. Local authority demands access to registration data or conditions humanitarian access on data sharing
2. Pressure applied through denial of access, bureaucratic obstacles, or threats
3. If complied with: data used for control, surveillance, or targeting

**Impact**: Moderate to Severe—undermines humanitarian principles and may endanger individuals.

**Mitigations**:

| Control Type | Specific Controls |
|--------------|-------------------|
| **Preventive** | Clear data sharing agreements negotiated before operations; Headquarters approval required for any authority data sharing; Training on responding to pressure; Documentation of all requests |
| **Detective** | Monitoring of local authority requests; Pattern analysis; Staff reporting mechanisms |
| **Responsive** | Escalation procedures to headquarters and coordination bodies; Engagement with UNHCR and OCHA; Documentation for advocacy; Potential suspension of operations if principles compromised |
| **Recovery** | Review of operating arrangements; Renegotiation of agreements; Advocacy at appropriate levels |

### II.4.6 Scenario 6: Biometric Data Theft for Identity Fraud

**Threat**: Criminal actors steal biometric data (fingerprints, iris scans, facial images) for identity fraud or sale to other adversaries.

**Attack Path**:
1. Compromise of biometric database through network intrusion or insider
2. Exfiltration of biometric templates or raw images
3. Use for: identity fraud, creation of false documents, sale to state actors, deepfake creation

**Impact**: Severe and permanent—unlike passwords, biometrics cannot be changed.

**Mitigations**:

| Control Type | Specific Controls |
|--------------|-------------------|
| **Preventive** | Biometric data stored separately from biographical data; One-way template storage where possible (cannot reconstruct original); Encryption with organization-controlled keys; Network segmentation for biometric systems; Enhanced access controls |
| **Detective** | Dedicated monitoring for biometric system access; Integrity checking of biometric databases; Anomaly detection |
| **Responsive** | Incident response specific to biometric compromise; Notification to affected individuals; Coordination with identity document issuers |
| **Recovery** | Limited—biometrics cannot be "reset"; Focus on mitigating downstream harm; Enhanced monitoring for fraud |

**Special Considerations**:
- Biometric data requires the highest level of protection given its permanence
- Organizations should critically evaluate whether biometric collection is necessary
- If collected, biometrics should be stored as templates rather than raw images where possible

---

## II.5 Trust Boundaries

Trust boundaries define where security controls must be applied as data moves between components with different trust levels.

### II.5.1 Trust Zones

The Data Dignity architecture defines five trust zones, from lowest to highest trust:

#### Zone 1: User Devices (Lowest Trust)

**Components**: Beneficiary smartphones, shared community devices, kiosk terminals

**Trust Level**: Minimal
- Devices may be shared among multiple users
- Devices may be seized, stolen, or inspected at checkpoints
- Users may be coerced to provide access
- Devices may be compromised by malware
- Physical security cannot be assured

**Security Posture**:
- Assume device is compromised or may be compromised
- Store minimal data locally
- All sensitive data encrypted with keys not stored on device
- Session-based access that expires quickly
- No cached credentials for sensitive systems
- Remote wipe capability

#### Zone 2: Field Infrastructure (Low-Medium Trust)

**Components**: Field office computers, local servers, field network equipment

**Trust Level**: Low to Medium
- Physical security varies significantly by location
- May be in areas accessible to local authorities or armed groups
- Staff vetting may be limited by operational constraints
- Network connectivity may traverse untrusted infrastructure
- Power and environmental controls may be unreliable

**Security Posture**:
- Full-disk encryption on all devices
- Local data minimization (sync to hub, don't accumulate)
- Network traffic encrypted regardless of local network trust
- Enhanced monitoring given higher risk environment
- Physical security measures appropriate to context
- Regular security assessments

#### Zone 3: Regional Hub (Medium-High Trust)

**Components**: Regional office servers, regional network infrastructure, regional staff systems

**Trust Level**: Medium to High
- Better physical security than field locations
- More reliable infrastructure
- Enhanced staff vetting possible
- Still potentially subject to host government legal authority
- More controlled network environment

**Security Posture**:
- Defense-in-depth architecture
- Network segmentation
- Enhanced access controls
- Comprehensive audit logging
- Regular security assessments
- Incident response capability

#### Zone 4: Cloud Infrastructure (Variable Trust)

**Components**: Cloud-hosted applications, cloud storage, cloud computing resources

**Trust Level**: Depends on configuration
- Physical security typically excellent
- Network security typically strong
- BUT: subject to cloud provider access, government legal authority in cloud jurisdiction
- Trust increases significantly with confidential computing

**Security Posture**:
- Confidential computing required for sensitive data
- Encryption with organization-controlled keys (not cloud provider keys)
- Geographic restrictions on data storage
- Contractual protections with cloud provider
- Regular security assessments of cloud configuration
- Clear understanding of shared responsibility model

#### Zone 5: Blockchain/Distributed Ledger (Consensus-Based Trust)

**Components**: Distributed ledger for consent records, credential status, audit trails

**Trust Level**: Based on consensus mechanism
- No single party controls the ledger
- Integrity protected by cryptographic consensus
- Availability depends on network health
- Confidentiality NOT provided by blockchain itself—sensitive data must not be stored on-chain

**Security Posture**:
- Only hashes, pointers, and consent status on-chain
- Sensitive data always off-chain
- Permissioned ledger (not public chain)
- Clear governance of ledger participants
- Key management for ledger interaction

### II.5.2 Cross-Boundary Data Flows

Data crossing trust boundaries requires specific protections:

| From → To | Required Protections |
|-----------|---------------------|
| User Device → Field | TLS encryption; authentication; session management; input validation |
| Field → Regional Hub | VPN or encrypted tunnel; mutual authentication; data integrity verification |
| Regional → Cloud | TLS + application-layer encryption; confidential computing for sensitive workloads |
| Any → Blockchain | Only non-sensitive data; cryptographic signing; hash verification |
| Cloud → Field (sync) | Encrypted payload; integrity verification; authentication; delta sync only |
| Regional → External Partner | Data sharing agreement; encrypted transfer; audit logging; purpose limitation |

### II.5.3 Trust Assumptions

The following assumptions underlie this security architecture. If any assumption is violated, compensating controls must be implemented:

**We ASSUME**:
- Encryption algorithms (AES-256, ChaCha20) are not broken
- Cryptographic hash functions (SHA-256, SHA-3) are collision-resistant
- Properly implemented TLS 1.3 protects data in transit
- Hardware security modules, when used correctly, protect keys
- Staff who pass vetting are not initially compromised (though they may be compromised later)
- Cloud providers with confidential computing do not have access to data inside enclaves

**We DO NOT ASSUME**:
- Network infrastructure is trustworthy (always encrypt)
- Physical security of field locations (minimize local data)
- Devices will not be seized (encrypt, enable remote wipe)
- Staff will not be coerced (design for coercion resistance)
- Legal demands will not be made (jurisdictional planning)
- Nation-state adversaries cannot eventually compromise any single control (defense in depth)
- Users will follow security procedures perfectly (design for human error)

### II.5.4 Security Architecture Principles

Based on the threat model and trust analysis, the following principles guide all security architecture decisions:

1. **Defense in Depth**: No single control is relied upon. Multiple layers of defense ensure that compromise of one layer does not lead to complete system compromise.

2. **Least Privilege**: Users, processes, and systems have only the minimum access required for their function. Privileges are granted temporarily and revoked when no longer needed.

3. **Zero Trust for Sensitive Data**: For Level 4 (Critical) data, assume that networks are compromised and verify explicitly at every access. Never rely on network location as a security control.

4. **Data Minimization**: Don't collect data you don't need. Don't retain data longer than necessary. Don't replicate data to additional locations without justification.

5. **Encryption Everywhere**: Data is encrypted at rest and in transit, regardless of network trust level. Keys are managed securely and separately from data.

6. **Assume Breach**: Design systems assuming that adversaries will eventually gain access. Focus on detection, containment, and limiting blast radius.

7. **Offline Resilience**: Security controls must function when connectivity is unavailable. Encryption must not depend on network access.

8. **Human-Centered Security**: Security measures must be usable by real staff in real conditions. Unusable security will be bypassed.

9. **Transparency and Auditability**: Security controls produce audit trails. Affected individuals can understand how their data is protected.

10. **Continuous Improvement**: The threat landscape evolves. Security measures must be regularly reviewed and updated.

---

## II.6 Threat Model Governance

### II.6.1 Review and Update Procedures

This threat model must be treated as a living document:

**Annual Review**:
- Full threat model review annually
- Assessment of new adversary capabilities and tactics
- Review of incidents (internal and sector-wide)
- Update of mitigations based on lessons learned
- Sign-off by security leadership

**Triggered Reviews**:
- Significant security incident
- Change in operating environment (new conflict, political change)
- Introduction of new systems or data types
- Identification of new adversary interest
- Changes in legal/regulatory environment

**Review Process**:
1. Gather threat intelligence and incident data
2. Assess changes in adversary landscape
3. Evaluate effectiveness of current controls
4. Identify gaps and new risks
5. Propose updated mitigations
6. Review with stakeholders
7. Approve and implement changes
8. Communicate updates to relevant staff

### II.6.2 Threat Intelligence Integration

Organizations implementing this framework should:

- Participate in humanitarian sector threat intelligence sharing (e.g., CiviCERT)
- Monitor public threat intelligence sources for relevant indicators
- Maintain relationships with national CERTs where appropriate
- Document and share (appropriately) incidents for sector learning
- Track adversary tactics, techniques, and procedures (TTPs) relevant to humanitarian operations

### II.6.3 Security Governance Structure

Implementation of this threat model requires appropriate governance:

**Roles**:
- **Chief Information Security Officer (CISO)** or equivalent: Overall accountability for security
- **Data Protection Officer (DPO)**: Ensuring data protection compliance
- **Security Operations**: Day-to-day security monitoring and response
- **Security Architecture**: Design of security controls
- **Risk Management**: Assessment and prioritization of security investments

**Processes**:
- Security risk assessment for new initiatives
- Security review of third-party relationships
- Incident response procedures
- Security awareness training
- Vulnerability management
- Access certification and review

---

*This threat model provides the foundation for all technical security measures described in subsequent sections. Every cryptographic choice, every architectural decision, every operational procedure should trace back to a specific threat identified here. Security controls that cannot be justified against this threat model should be questioned—they may be security theater rather than effective protection.*

---

# PART III: FOUNDATIONAL PRINCIPLES

*This section establishes the thirteen foundational principles of data dignity. These principles, originally articulated in the Data Dignity Manifesto v1.0, have been strengthened and operationalized based on expert roundtable feedback. Each principle now includes specific implementation guidelines, technical requirements, and real-world scenarios to guide practical application.*

*The principles are designed to work together as a coherent framework. Organizations implementing data dignity should adopt all principles, recognizing that selective implementation may undermine the framework's effectiveness.*

---

## III.1 Data as an Extension of Self

### The Principle

**Personal data is not merely information—it is an extension of the person it represents.**

This foundational principle reframes how we understand personal data. When an organization collects a person's name, their photograph, their location history, their health status, or their family relationships, they are not simply gathering facts. They are capturing elements of that person's identity, their story, their vulnerabilities, and their aspirations.

This framing has profound implications:

- **Ethical weight**: Actions affecting personal data carry ethical weight similar to actions affecting the person directly. Exposing someone's data to harm is not categorically different from exposing the person to harm.

- **Respect and dignity**: Just as we expect others to treat us with respect, we should expect organizations to treat our data with respect—handling it carefully, using it only for agreed purposes, and protecting it from misuse.

- **Consent as self-determination**: Consent to data processing is an exercise of self-determination. Undermining consent undermines autonomy.

- **Harm recognition**: Data breaches, unauthorized access, and misuse are not merely technical failures or compliance violations—they are harms to the individuals whose data is affected.

For humanitarian contexts, this principle is especially significant. Refugee data represents not just administrative records but the documented existence of people who have often lost everything else. For individuals who lack official recognition from any state, their data in humanitarian systems may be the only formal acknowledgment of their existence and their needs.

### Implementation Guidelines

#### Individual Control Mechanisms

Individuals must have meaningful control over their personal data. This requires:

**Personal Data Dashboard**

Every individual whose data is held in Data Dignity-compliant systems must have access to a personal data dashboard that shows:

- What data is held about them
- Who has accessed their data and when
- What consent permissions are currently active
- How to modify consent or request data changes
- Status of any pending requests or issues

The dashboard must be:

- Available in the individual's preferred language
- Accessible across literacy levels (visual/audio options)
- Functional offline with sync when connectivity available
- Secure against unauthorized access
- Usable on low-end mobile devices

**Offline-Accessible Consent Status**

Beneficiaries must be able to verify their consent status even without internet connectivity:

- Paper-based consent summary card (optional, user-requested)
- Offline-capable mobile application showing cached consent status
- QR code or similar that encodes basic consent status
- Clear last-updated timestamp

**Audio/Visual Consent Status for Low-Literacy Users**

For individuals who cannot read:

- Audio playback of consent status in local language
- Icon-based visual representation of consent choices
- Color-coded status indicators (green = shared, yellow = limited, red = not shared)
- Staff-assisted review available on request

#### Transparent Data Use Policies

Organizations must communicate clearly about how they use personal data:

**Reading Level Requirements**

All beneficiary-facing data use communications must:

- Be written at a maximum 6th grade reading level (Flesch-Kincaid)
- Use sentences of 15 words or fewer on average
- Avoid legal jargon, technical terms, and acronyms
- Define any necessary technical terms in plain language

**Multi-Language Requirements**

Data use policies and consent materials must be available in:

- A minimum of 20 languages for global deployment
- All languages representing more than 5% of the served population in any location
- Audio versions for all languages
- Professionally translated (not machine-translated only)

**Visual/Icon-Based Explanations**

Supplement text with:

- Icons representing data types (family, health, location, etc.)
- Visual flowcharts showing data sharing relationships
- Pictographic consent options
- Video explanations for complex concepts

#### Auditable Access Logs

Every access to personal data must be logged in a way that is:

**Tamper-Evident**

- Logs stored in append-only format
- Cryptographically signed to prevent modification
- Regularly backed up to independent systems
- Hash-chained for integrity verification

**User-Accessible**

- Individuals can view logs of access to their own data
- Logs presented in understandable format (not raw technical logs)
- Explanation of what each access means
- Ability to flag concerning access for review

**Offline-Capable**

- Logs captured locally when offline
- Synced to central systems when connectivity available
- Conflict resolution for any discrepancies
- Local logs protected against tampering

#### Secure Data Trusts

The concept of data trusts—where organizations act as fiduciaries holding data on behalf of individuals—requires robust governance:

**Governance Requirements for Trustees**

Organizations acting as data trustees must:

- Have clear data protection policies and procedures
- Designate a Data Protection Officer or equivalent
- Maintain appropriate technical and organizational security measures
- Submit to regular audits of data protection practices
- Participate in sector coordination on data protection

**Beneficiary Representation in Trust Governance**

Data trusts serving humanitarian beneficiaries must include:

- Beneficiary representatives in governance structures
- Regular consultation with affected communities
- Accessible feedback mechanisms
- Published reports on trust activities in accessible formats

**Geographic/Jurisdictional Considerations**

Data trusts must consider:

- Legal jurisdiction of trust operations
- Data residency requirements and sovereignty concerns
- Protection against compelled disclosure
- Cross-border data transfer restrictions

### Real-World Scenarios

#### Scenario 1: Healthcare Data Dignity

*Maria, a refugee from Venezuela, receives healthcare services at a clinic operated by a humanitarian organization in Colombia.*

Under data dignity principles:

- Maria is informed, in Spanish at an appropriate reading level, what health data will be collected
- She can choose to share her full health history or only information relevant to the current visit
- She receives a card summarizing her consent choices that she can reference
- Her health data is stored encrypted, accessible only to her healthcare providers
- She can view through a mobile app who has accessed her health records
- If she moves to another location, she can authorize transfer of her records or request deletion
- Her HIV status, if any, is classified as Level 4 (Critical) data with enhanced protections

#### Scenario 2: Conflict Zone Registration

*Ahmed, a Syrian refugee, registers with UNHCR in Jordan. His brother is still in Syria and could face retaliation if Ahmed's location or political opinions became known to Syrian authorities.*

Under data dignity principles:

- Ahmed's registration data is classified as Level 4 (Critical) given the risk context
- Data revealing his political opinions or his family's location is compartmentalized
- His data is not stored in any jurisdiction accessible to Syrian legal authority
- Access to his file requires specific authorization and is logged
- He can verify at any time who has accessed his information
- If he has concerns about a specific access, he can raise a grievance
- His data cannot be shared with any government without his explicit consent and legal review

#### Scenario 3: Mass Displacement Emergency

*Following an earthquake in Turkey, thousands of people register for emergency assistance. Staff are overwhelmed and connectivity is limited.*

Under data dignity principles:

- Registration collects only essential data (Tier 0) during emergency phase
- Consent for additional data collection is deferred until individuals are in stable situations
- Offline registration captures data locally with sync when connectivity restored
- Individuals receive a simple card confirming their registration
- Within 30 days, individuals are offered the opportunity to review and adjust their consent
- Those who cannot be located for consent follow-up have their data retained under minimal consent provisions
- All emergency-phase data collection is flagged for quality review

#### Scenario 4: Cross-Border Movement

*Fatima, an Afghan refugee registered with UNHCR in Pakistan, is resettled to Canada.*

Under data dignity principles:

- Fatima is informed what data will be shared with Canadian authorities and why
- She can review the specific data elements before transfer
- She can request correction of any inaccurate information
- Sensitive data (e.g., persecution details) is shared only with her explicit consent
- Upon arrival in Canada, she receives confirmation of what data was transferred
- Her data in Pakistan systems is retained only as long as necessary, then deleted or anonymized
- She can request a copy of her complete file for her own records

---

## III.2 Revocable Lease Model

### The Principle

**Organizations hold a revocable lease on personal data—not ownership. Individuals retain ultimate control and can revoke access at any time, for any reason.**

Traditional data governance often treats personal data as an asset that, once collected, belongs to the collecting organization. The revocable lease model inverts this assumption: organizations are custodians, not owners. They hold data temporarily, for specific purposes, subject to conditions that the individual can modify.

This model recognizes that:

- **Data collection is a privilege, not a right**: Organizations should be grateful for the trust individuals place in them by sharing personal data.

- **Circumstances change**: Consent given at one time may no longer be appropriate as situations evolve.

- **Power should reside with individuals**: Even when individuals cannot exercise active control, the system should be designed to protect their interests.

- **Revocation must be meaningful**: The ability to revoke consent is meaningless if data has already been shared with dozens of parties who are not bound by revocation.

### The Precedence Principle: Erasure Over Immutability

*This section addresses a critical tension identified in the original manifesto: the apparent contradiction between blockchain immutability and the right to erasure.*

**The right to erasure takes precedence over blockchain immutability.**

This principle is inviolable. The architectural implications are:

1. **Sensitive personal data is NEVER stored on-chain.** Blockchain records contain only:
   - Hashes of data (which cannot be reversed to reveal the original)
   - Pointers to off-chain storage locations
   - Consent status indicators
   - Audit trail entries

2. **Off-chain deletion renders on-chain pointers meaningless.** When personal data is deleted from off-chain storage:
   - The on-chain hash no longer corresponds to any existing data
   - The on-chain pointer leads to nothing
   - The blockchain record becomes a historical artifact, not a data exposure risk

3. **Cryptographic deletion is acceptable.** Where true deletion is technically difficult:
   - Destroying the encryption key renders data irrecoverable
   - This is functionally equivalent to deletion
   - Proof of key destruction can be provided

4. **On-chain tombstones mark deletion.** When data is deleted:
   - A tombstone record is added to the blockchain
   - This provides immutable proof that deletion occurred
   - The original data cannot be recovered even by the organization

### Implementation Guidelines

#### Real-Time Consent Management

Consent must be manageable in real-time, allowing individuals to adjust permissions as circumstances change:

**Consent Modification Interface**

- Available through mobile app, web portal, and in-person at service points
- Changes take effect immediately upon confirmation
- Clear explanation of implications before changes are confirmed
- Ability to "undo" recent changes within a grace period (e.g., 24 hours)

**Offline Consent Capture**

When connectivity is unavailable:

- Consent changes captured locally on device
- Changes queued for sync when connectivity restored
- Individual receives confirmation of pending change
- System resolves any conflicts using defined rules (generally: most recent intent prevails, most restrictive interpretation in case of ambiguity)

**Maximum Offline Duration**

- Consent records should sync within 7 days maximum
- After 30 days without sync, system flags for manual review
- After 90 days, consent status considered stale; re-consent recommended for sensitive operations

#### Automated Revocation Processes

When an individual revokes consent, the revocation must propagate through all systems holding their data:

**Revocation Propagation Timeline**

| Data Sensitivity | Propagation Deadline |
|-----------------|---------------------|
| Level 4 (Critical) | 24 hours |
| Level 3 (Sensitive) | 72 hours |
| Level 2 (Internal) | 7 days |

**Partner Notification Requirements**

When consent is revoked for data that has been shared with partners:

- Partners notified within 24 hours of revocation
- Partners required to confirm deletion within propagation deadline
- Audit trail records notification and confirmation
- Failure to confirm triggers escalation

**Verification of Revocation Completion**

- System generates verification report after propagation deadline
- Report lists all systems/partners that held data and their deletion confirmation
- Any exceptions flagged for investigation
- Individual can request copy of verification report

#### Proof of Revocation

Individuals receive cryptographic proof that their revocation has been processed:

**Revocation Receipt**

- Digitally signed by the organization
- Contains: timestamp, scope of revocation, systems affected, confirmation of processing
- Verifiable by third parties without revealing personal data
- Stored on blockchain for immutable record (metadata only, not personal data)

**Third-Party Verification**

- Independent auditors can verify that revocation was processed
- Verification possible without accessing the (now-deleted) personal data
- Supports regulatory compliance demonstrations

#### Aid Conditionality Integration

**Critical**: Revocation of consent does NOT revoke access to essential services.

**Graduated Impact of Revocation**

| Consent Revoked | Impact on Services |
|----------------|-------------------|
| All consent above Tier 0 | Essential services continue; extended services suspended until consent restored |
| Tier 4 (Cross-Organization) | Partner organizations no longer receive data; services from those partners may be affected |
| Tier 3 (Program Improvement) | No service impact; individual excluded from research/evaluation |
| Tier 2 (Extended Services) | Extended services (resettlement referral, livelihoods) may be limited |
| Tier 1 (Basic Services) | Full humanitarian services limited; essential services continue |

**Clear Communication of Revocation Impact**

Before processing revocation, individuals must be informed:

- What services may be affected
- What services will continue regardless
- How to restore consent if desired
- That they can seek clarification before confirming

---

## III.3 Tiered Consent and Smart Contract Automation

### The Principle

**Consent should be meaningful, manageable, and enforceable. The tiered consent model provides simplicity by default with granularity available for those who want it. Smart contracts automate enforcement, ensuring consent is respected even when humans might fail.**

The original manifesto called for "granular, dynamic consent." Roundtable feedback, particularly from the Community Data Steward and UNHCR CDO, identified that unlimited granularity creates unmanageable complexity for beneficiaries—especially those with limited literacy, digital experience, or cognitive bandwidth due to trauma and displacement.

The revised approach balances simplicity with control:

- **Default to tiers**: Most individuals select from predefined consent tiers that bundle related permissions
- **Granular customization available**: Sophisticated users can adjust individual permissions within tiers
- **Smart contract enforcement**: Consent choices are encoded in smart contracts that automatically enforce permissions

### The Tiered Consent Model

#### Tier 0: Essential Identity (Unconditional)

**Data Collected**: Minimum required for deduplication (typically: name or identifier, approximate age, household size)

**Services Enabled**: All essential humanitarian services:
- Food and nutrition assistance
- Safe drinking water
- Emergency shelter
- Emergency medical care
- Protection from immediate physical harm

**Revocable**: Not applicable—this tier ensures unconditional access to essential services. Individuals cannot "opt out" of receiving essential services due to data concerns; rather, essential services are provided with minimal data requirements.

**Key Point**: Tier 0 is not about consent; it is about ensuring that data requirements never prevent access to life-saving assistance.

#### Tier 1: Basic Humanitarian Services

**Data Collected**: Demographics, household composition, basic needs assessment, contact information, assistance received

**Services Enabled**: Full humanitarian services beyond essentials:
- Non-emergency healthcare
- Education enrollment
- Shelter beyond emergency
- WASH (water, sanitation, hygiene) programs
- Protection services (non-emergency)
- General assistance programs

**Revocable**: Yes, at any time. Revocation returns individual to Tier 0 services only.

#### Tier 2: Extended Services

**Data Collected**: Education history, skills and livelihoods, employment history, extended family information, protection concerns (detailed), future intentions

**Services Enabled**: Durable solutions pathways:
- Resettlement case preparation
- Complementary pathways referral
- Livelihoods and economic inclusion programs
- Higher education scholarship referrals
- Voluntary repatriation counseling

**Revocable**: Yes, at any time. Revocation returns individual to Tier 1 services.

#### Tier 3: Program Improvement

**Data Collected**: Anonymized outcomes, feedback and satisfaction data, participation in monitoring activities

**Services Enabled**: 
- Priority consideration for pilot programs
- Participation in research studies (with additional consent)
- Access to feedback mechanisms and community consultations
- Recognition as program advisors

**Revocable**: Yes, at any time. Revocation has no impact on Tier 1/2 services.

#### Tier 4: Cross-Organization Sharing

**Data Collected**: As per selected tiers, but shared with specified partner organizations

**Services Enabled**:
- Coordinated multi-agency case management
- Inter-agency referrals
- Access to specialized services provided by partners
- Comprehensive support across humanitarian actors

**Revocable**: Yes, on a per-partner basis. Individual can share with Organization A but not Organization B.

### Consent UX Requirements

*This section addresses the critical gap identified by the Community Data Steward: "The consent forms aid agencies use now are already confusing in English. How will this work for someone who speaks Tigrinya, can't read, and is exhausted from displacement?"*

#### Reading Level and Comprehension

All consent materials must meet these standards:

| Requirement | Standard | Rationale |
|-------------|----------|-----------|
| Reading level | Maximum 6th grade (Flesch-Kincaid) | Accessible to adults with limited formal education |
| Sentence length | Maximum 15 words average | Reduces cognitive load |
| Jargon | None | Legal and technical terms confuse |
| Glossary | Required for any necessary technical terms | Ensures understanding when terms unavoidable |

**Validation**: Before deployment, consent materials must be tested with target populations and achieve >80% comprehension on key concepts.

#### Visual Design Requirements

Consent interfaces must be visually accessible:

- **Icon-based options**: Every consent choice has an associated icon, not just text
- **Color coding**: Consistent colors across all interfaces (green = share, yellow = limited sharing, red = don't share)
- **Progress indicators**: Clear indication of where user is in consent process and what remains
- **Touch targets**: Minimum 48x48 pixels for mobile interfaces
- **High contrast**: Meets WCAG AA standards for visual accessibility
- **Simple layouts**: Uncluttered screens with clear visual hierarchy

#### Modality Options

Consent must be obtainable through multiple modalities:

**Text-Based** (for literate users with devices)
- Mobile application
- Web portal
- Paper forms (with subsequent digitization)

**Audio-Based** (for users with limited literacy)
- Recorded explanations in local languages
- Interactive voice response systems
- Staff reading consent options aloud from standardized scripts

**Video-Based** (for complex concepts)
- Animated explainers showing data flow
- Scenario-based videos showing implications of choices
- Available offline via pre-loaded content

**In-Person Assisted** (for those who need support)
- Trained staff using standardized scripts
- Visual aids for staff to use with beneficiaries
- Supervised to prevent undue influence
- Available in private settings

#### Cognitive Load Reduction

Consent processes must minimize cognitive burden:

**Progressive Disclosure**
- Don't present all options simultaneously
- Start with tier selection, then allow drilling down
- Save detailed customization for those who want it

**Recommended Defaults**
- System suggests appropriate tier based on services requested
- Clear explanation of why recommendation made
- Easy to override recommendation

**"Decide Later" Option**
- For non-essential data, allow deferral of decision
- Schedule reminder to revisit
- Essential services not affected by deferral

**Preference Memory**
- Remember choices across sessions
- Don't re-ask for unchanged situations
- Clear indication of what was previously decided

#### Testing Requirements

Consent UX must be validated before deployment:

**Mandatory Testing**
- Usability testing with actual refugee populations
- Testing across literacy levels (including non-literate)
- Testing across age groups (including elderly)
- Testing under stress conditions (simulated or natural)
- Testing with various digital familiarity levels

**Success Criteria**
- >80% task completion rate
- >80% comprehension of key concepts
- <5% rate of "I didn't understand what I agreed to"
- Positive qualitative feedback from majority of testers

**Ongoing Monitoring**
- Track consent completion rates
- Monitor for patterns suggesting confusion
- Regular user feedback collection
- Iterate based on findings

### Smart Contract Specifications

Consent choices are encoded in smart contracts that automatically enforce permissions:

#### Platform Requirements

Smart contracts for consent management must run on:

**Permissioned Ledger** (not public blockchain)
- Only authorized humanitarian organizations participate
- No exposure of transactions to public
- Governance by consortium of implementing organizations

**Candidate Platforms**:
- Hyperledger Fabric (preferred for complex logic)
- Hyperledger Besu (if Ethereum compatibility desired)
- R3 Corda (for financial services integration)

**NOT Acceptable**:
- Public Ethereum mainnet (cost, privacy concerns)
- Any platform requiring gas fees per transaction
- Any platform without clear governance model

**Gas-Free or Predictable-Cost Model**
- Transactions must not require payment from beneficiaries
- Costs borne by implementing organizations
- Predictable budgeting for transaction costs

#### Offline Considerations

Smart contracts must account for offline operation:

**When Contract Unavailable**
- Local cache of consent status enables service delivery
- Changes queued locally for later submission
- Clear indication to user that change is pending

**Cached Consent State**
- Devices cache current consent status for offline verification
- Cache validity period: 7 days for routine operations, 24 hours for sensitive operations
- Stale cache triggers re-verification when connectivity restored

**Reconciliation on Reconnection**
- Queued changes submitted to smart contract
- Conflicts resolved (most recent intent prevails)
- User notified of any reconciliation issues

---

## III.4 Verified Data Erasure and Integrity

### The Principle

**When individuals request deletion of their data, deletion must be complete, verifiable, and permanent. Data integrity must be maintained throughout the data lifecycle, with cryptographic proof of both integrity and erasure.**

The right to erasure—the right to have one's personal data deleted—is fundamental to data dignity. But this right is only meaningful if:

1. Deletion is actually complete (including backups and partner systems)
2. Deletion can be verified by the individual
3. Deletion is irreversible (data cannot be recovered)

At the same time, data integrity is essential: individuals must be able to trust that their data has not been modified without authorization.

### Erasure vs. Blockchain: Resolution

As established in Section III.2, **the right to erasure takes precedence over blockchain immutability.** This section provides technical detail on implementation.

#### The Hybrid On-Chain/Off-Chain Model

**On-Chain (Blockchain)**:
- Consent status (enumerated: Tier 0, 1, 2, 3, 4)
- Hash of personal data (SHA-256 or equivalent)
- Timestamp of data creation and modifications
- Access log entries (who accessed, when, for what purpose)
- Deletion tombstones (proof that data was deleted)

**Off-Chain (Encrypted Storage)**:
- All personal data
- Biometric templates
- Documents and images
- Case notes and narratives
- Any information that could identify an individual

#### Deletion Process

When an individual requests deletion:

1. **Request Validation**: Verify identity of requester; confirm scope of deletion request

2. **Dependency Check**: Identify all systems and partners holding the data

3. **Deletion Execution**:
   - Delete from primary off-chain storage
   - Delete from all backups (or mark for deletion at next backup cycle)
   - Notify partners of deletion requirement
   - Delete encryption keys if cryptographic deletion used

4. **Blockchain Update**:
   - Add tombstone record indicating deletion
   - Tombstone includes: timestamp, hash of deleted data, deletion confirmation

5. **Verification**:
   - System generates deletion verification report
   - Report provided to individual as proof
   - Report verifiable by third parties

6. **Partner Confirmation**:
   - Track partner deletion confirmations
   - Escalate if confirmation not received within deadline
   - Document any exceptions

#### Cryptographic Proof of Erasure

Individuals receive cryptographic proof that their data has been deleted:

**Deletion Certificate**
- Digitally signed by the organization
- Contains: timestamp, data hash (of deleted data), deletion confirmation, partner confirmations
- Verifiable without revealing what data was deleted
- Admissible for regulatory compliance

**Blockchain Verification**
- Tombstone record on blockchain provides immutable proof
- Anyone can verify that deletion occurred at stated time
- Cannot be repudiated by the organization

### Partner System Propagation

Deletion must propagate to all systems that received the data:

#### Notification Requirements

When deletion is requested:

- All partners who received the data are notified within 24 hours
- Notification includes: data subject identifier, scope of deletion, deadline for confirmation

#### Confirmation Requirements

Partners must:

- Confirm deletion within the propagation deadline (24-72 hours depending on sensitivity)
- Provide their own deletion proof
- Document any data that cannot be deleted (with justification)

#### Audit Trail

The system maintains a complete audit trail:

- When each partner was notified
- When each partner confirmed deletion
- Any exceptions or issues
- Resolution of any exceptions

### Data Destruction Protocols

*This section addresses the scenario raised by the ICRC DPO: "What happens when a server or device is seized by hostile forces?"*

#### Physical Capture Scenarios

When devices or infrastructure may be physically seized:

**Pre-Capture Preparation**
- Full-disk encryption on all devices (keys not stored on device)
- Minimal local data storage (sync to secure remote, then purge)
- Remote wipe capability configured and tested
- Tamper-evident hardware where available
- Dead man's switch configured (auto-lockout if no check-in)

**During Capture**
- Staff trained on behavior during device seizure
- Do not resist or volunteer information
- Use duress code if possible (triggers silent wipe)
- Assume device is compromised from moment of seizure

**Post-Capture Response**
- Immediate remote wipe attempt
- Revoke all credentials that may have been on device
- Rotate encryption keys
- Notify affected individuals if data may have been compromised
- Incident investigation and lessons learned

#### Prevention Measures

**Hardware Security Modules (HSMs)**
- Critical encryption keys stored in HSMs
- HSMs tamper-resistant and tamper-evident
- Keys destroyed if tampering detected

**Encryption Requirements**
- Full-disk encryption: AES-256 or equivalent
- Keys derived from passphrases not stored on device
- Pre-boot authentication required

**Data Minimization**
- Field devices hold only data necessary for current operations
- Sync to secure hub, then purge local copy
- Regular audits of local data holdings

**Tamper-Evident Hardware**
- Tamper-evident seals on critical equipment
- Intrusion detection sensors where available
- Regular inspection for signs of tampering

#### Detection Mechanisms

**Check-In Requirements**
- Devices must check in with central system at defined intervals
- Missed check-in triggers alert
- Consecutive missed check-ins trigger automatic lockout

**Tamper Detection**
- Hardware sensors detect case opening
- Sensor trigger initiates key destruction
- Alert sent to security operations

**Anomaly Detection**
- Unusual access patterns flagged
- Geographic anomalies detected (device appears in unexpected location)
- Time anomalies detected (access at unusual hours)

#### Response Procedures

**Remote Wipe**
- Capability to remotely wipe any managed device
- Wipe command prioritized over other traffic
- Confirmation of wipe completion (or failure)

**Key Rotation**
- Emergency key rotation procedures
- All keys potentially compromised are rotated
- Backward compatibility maintained during transition

**Incident Response**
- Clear procedures for device seizure incidents
- Defined roles and responsibilities
- Communication templates
- Legal engagement procedures

#### Staff Protocols

**Training Requirements**
- All staff trained on device security procedures
- Annual refresher training
- Specific training for high-risk locations

**Behavior Under Duress**
- Do not physically resist device seizure
- Do not volunteer passwords or access
- Use duress code if trained and safe to do so
- Remember: your safety is more important than any data

**Post-Incident Support**
- Psychological support for staff involved in security incidents
- No-blame culture for security incidents (unless negligence involved)
- Lessons learned shared across organization

---

## III.5 Data Minimization and Purpose Limitation

### The Principle

**Collect only the data you need. Use it only for the purpose agreed. Delete it when that purpose is fulfilled.**

Data minimization and purpose limitation are twin principles that constrain the tendency of organizations to collect and retain ever-larger volumes of personal data. In humanitarian contexts, where data collection often occurs under duress and data exposure can have severe consequences, these principles take on heightened importance.

The principle operates at multiple levels:

- **Collection minimization**: Don't collect data you don't need for the specified purpose
- **Retention minimization**: Don't keep data longer than necessary
- **Access minimization**: Don't give more people access than required
- **Purpose limitation**: Don't use data for purposes beyond what was consented

### Why Minimization Matters

Every data element collected creates:

- **Privacy risk**: More data means more potential for exposure
- **Security burden**: More data requires more protection resources
- **Consent complexity**: More data elements mean more complex consent processes
- **Liability exposure**: More data creates more legal and ethical responsibility

In humanitarian contexts specifically:

- Registration processes that collect unnecessary data slow down assistance delivery
- Extensive data collection can be traumatic for individuals recounting difficult experiences
- Data collected "just in case" becomes a liability if circumstances change
- Over-collection erodes trust with beneficiaries

### Implementation Guidelines

#### Data Collection Minimization

**Data Needs Assessment**

Before any data collection activity:

1. **Define the purpose**: What specific objective requires this data?
2. **Identify minimum data**: What is the absolute minimum data needed to achieve this purpose?
3. **Challenge additions**: For any data element beyond the minimum, justify why it is essential
4. **Document rationale**: Record the justification for each data element collected

**Collection Form Design**

Data collection forms must enforce minimization:

- Required fields limited to essential data elements
- Optional fields clearly marked and genuinely optional
- No "nice to have" fields that aren't directly necessary
- Regular review of forms to remove fields no longer needed

**Alerts for Over-Collection**

Systems should alert when collection appears to exceed purpose requirements:

- Flagging when staff collect optional fields for high percentage of records
- Warning when data collected doesn't match stated collection purpose
- Supervisor review triggered by over-collection patterns

#### Purpose Limitation

**Machine-Readable Purpose Specifications**

Each data collection must have a machine-readable purpose specification that includes:

- Enumerated list of permitted uses
- Permitted data recipients (by category or specifically named)
- Time limitations on use
- Geographic restrictions (if any)

**Automated Enforcement**

The data access layer must enforce purpose limitations:

- Access requests include stated purpose
- System verifies purpose is permitted for requested data
- Access denied if purpose not permitted
- All access logged with stated purpose

**Purpose Expansion Protocol**

If an organization wishes to use data for a purpose not originally specified:

1. Assess whether new purpose is compatible with original purpose
2. If compatible and low-risk: may proceed with documentation
3. If not clearly compatible: obtain fresh consent for new purpose
4. If consent not obtainable: do not use for new purpose

#### Retention Minimization

**Retention Schedules**

Each data type must have a defined retention period:

| Data Type | Default Retention | Extension Conditions |
|-----------|-------------------|---------------------|
| Emergency registration | 2 years after case closure | Active legal requirement |
| Full case file | 5 years after case closure | Ongoing obligation or individual request |
| Biometrics | Until purpose fulfilled + 1 year | Individual request for longer retention |
| Consent records | Duration of data retention + 7 years | Regulatory requirement |
| Audit logs | 7 years | Legal hold |

**Automated Deletion**

- Systems must flag data approaching retention limit
- Deletion workflows initiated automatically
- Manual review required before permanent deletion
- Deletion logged and reported

**Active Monitoring of Holdings**

- Regular (quarterly) review of data holdings
- Identification of data no longer serving purpose
- Proactive deletion of unnecessary data
- Reporting on data minimization efforts

#### Purpose Boundary Encoding

**Technical Implementation**

Purpose limitations must be technically encoded, not just policy:

```
{
  "data_element": "health_condition",
  "permitted_purposes": ["medical_treatment", "protection_assessment"],
  "prohibited_purposes": ["resettlement_screening", "research"],
  "permitted_recipients": ["medical_staff", "protection_officers"],
  "retention_days": 730,
  "geographic_restriction": "no_transfer_outside_region"
}
```

**Enforcement Points**

Purpose encoding must be checked at:

- Data collection (purpose recorded)
- Data access (purpose verified)
- Data sharing (recipient and purpose verified)
- Data export (all constraints checked)

**Audit Trail**

Every access and use must be logged with:

- Who accessed
- When accessed
- What purpose stated
- Whether purpose was verified as permitted
- Outcome (access granted or denied)

---

## III.6 Contextual Data Dignity Protocols

### The Principle

**Data protection must be calibrated to context. The same data element may require different protections in different situations. What is appropriate in a stable environment may be inadequate in a conflict zone.**

Context matters profoundly for data protection. A refugee's name and location in a peaceful resettlement country carries different risks than the same data in an active conflict zone where that person's ethnic group is being targeted. Data dignity protocols must be responsive to these contextual variations.

### Context Factors

Key contextual factors that affect required protection levels:

| Factor | Impact on Protection Requirements |
|--------|----------------------------------|
| **Active conflict** | Maximum protection; compartmentalization required; assume hostile actors present |
| **Authoritarian government** | Enhanced protection against state access; jurisdictional planning essential |
| **Persecution patterns** | Data elements related to persecution (ethnicity, religion, politics) elevated to Critical |
| **Criminal threat** | Protection against trafficking, extortion; biometric security elevated |
| **Stable environment** | Standard protections may be appropriate |

### Sensitivity Classification System

As detailed in Part II (Threat Model), data is classified into four sensitivity levels. Context determines how data elements are classified:

**Context-Driven Classification Example: "Ethnicity"**

| Context | Classification | Rationale |
|---------|---------------|-----------|
| Stable multicultural environment | Level 3 (Sensitive) | Requires protection but not immediately dangerous |
| Country with ethnic tensions | Level 4 (Critical) | Could be used for targeting |
| Active ethnic conflict | Level 4 (Critical) + Compartmentalized | Maximum protection; segregate by conflict party |

Organizations must maintain context assessments for each operating environment and adjust data classification accordingly.

### Retrospective Consent Mechanisms

In emergencies, fully informed consent may not be possible. The retrospective consent mechanism allows:

1. **Minimal consent at emergency**: Basic consent for essential services during crisis
2. **Stabilization period**: Allow individual's situation to stabilize
3. **Full consent opportunity**: Proactive outreach to obtain fuller consent when circumstances permit
4. **Retrospective adjustment**: Right to narrow or expand consent based on fuller understanding

Timeline requirements:

- Retrospective consent opportunity must be offered within 30 days of emergency registration
- Multiple attempts to reach individuals required
- If unreachable after good-faith effort, minimal consent provisions apply
- Right to adjust consent remains available indefinitely

### Emergency Override Protocol

*This section addresses the critical gap identified by the UNHCR CDO: "In a cholera outbreak or mass displacement event, we need to share health and location data across agencies within hours, not days. The manifesto has no emergency protocol."*

#### Emergency Categories

| Level | Name | Criteria | Authorization | Time Bound | Example |
|-------|------|----------|---------------|------------|---------|
| **1** | **Life-Threatening** | Imminent risk to life for significant number of people | Humanitarian Coordinator or designated delegate | 72 hours, renewable | Disease outbreak, active violence, natural disaster |
| **2** | **Time-Sensitive Crisis** | Urgent operational need that cannot wait for standard consent processes | Agency Head or Senior Manager | 7 days, renewable | Mass displacement, rapid needs assessment, urgent protection response |
| **3** | **Accelerated Operations** | Important operational efficiency but not critical | Department Head | 14 days, non-renewable | Program scaling, partner coordination, consolidated reporting |

#### Pre-Authorized Emergency Sharing

During registration, individuals may opt-in to pre-authorized emergency sharing:

> "In life-threatening emergencies, such as disease outbreaks or security incidents, your data may be shared with health authorities or protection actors without additional consent. You will be notified within 30 days if your data is shared under this provision."

Pre-authorization characteristics:

- Opt-in, not opt-out (default is no pre-authorization)
- Clear explanation in plain language
- Those who decline still receive all services
- Pre-authorization scope is limited (health and immediate protection only)

#### Override Process

When emergency sharing is required without pre-authorization:

1. **Emergency Declaration**
   - Authorized individual declares emergency
   - Documentation of emergency justification
   - Scope of data sharing defined
   - Duration specified (within category limits)

2. **Data Sharing Execution**
   - Data shared only with entities necessary for emergency response
   - Minimum data principle applies (only what's needed for the emergency)
   - Receiving entities acknowledge emergency terms
   - All sharing logged with emergency reference

3. **Time-Bound Authorization**
   - Authorization expires at declared end time
   - Extensions require re-authorization with fresh justification
   - Automatic termination if not renewed

4. **Notification to Data Subjects**
   - Within 30 days of emergency, individuals notified that their data was shared
   - Notification includes: what data, with whom, for what purpose, under what authority
   - Opportunity to adjust consent for future sharing
   - Explanation of grievance mechanism

5. **Post-Hoc Review**
   - Independent review of emergency override within 90 days
   - Assessment of whether override was justified
   - Lessons learned documented
   - Findings published (anonymized)

#### Audit and Accountability

All emergency overrides are subject to enhanced accountability:

- **Separate logging**: Emergency overrides logged in dedicated audit trail
- **Enhanced detail**: Full justification recorded, not just action
- **Independent review**: Oversight body reviews all Level 1 and Level 2 overrides
- **Transparency reporting**: Aggregated statistics on emergency overrides published annually
- **Consequence for abuse**: Unjustified emergency override subject to disciplinary action

### Compartmentalized Trust Model

*This section addresses the ICRC's need to maintain neutrality while operating across conflict front lines, where data from one party must never reach another.*

#### Purpose and Principles

Organizations operating in conflict contexts must sometimes maintain strict separation between data related to different parties to the conflict. This is essential for:

- **Operational neutrality**: Neither party can accuse the organization of favoring the other
- **Protection of individuals**: Data about one group's members doesn't reach that group's adversaries
- **Continued access**: Both parties permit operations because trust is maintained

#### Compartment Design

**Compartment Structure**

Compartments correspond to conflict parties or geographic zones:

- Compartment A: Data related to population in Party A-controlled area
- Compartment B: Data related to population in Party B-controlled area
- Compartment C: Data from neutral zones or crossing populations

**Key Separation**

Each compartment has:

- Independent encryption keys (generated separately, stored separately)
- Separate key management infrastructure
- No single key or credential that can access multiple compartments

**Access Restrictions**

- Staff assigned to specific compartments based on operational area
- No staff member has access to all compartments
- Role-based access within compartments
- Cross-compartment access requires exceptional authorization

#### Technical Implementation

**Attribute-Based Encryption (ABE)**

Compartmentalization implemented through ABE:

- Data encrypted with compartment-specific attributes
- Decryption requires matching attributes in user's credentials
- Even with database access, data in other compartments unreadable

**Infrastructure Separation**

For highest-sensitivity compartments:

- Physically separate servers (or logically isolated with hardware-level controls)
- Air-gapped systems where necessary
- Separate network paths
- Hardware security modules per compartment

**Access Control Enforcement**

- Compartment membership encoded in user credentials
- Access layer enforces compartment boundaries
- Attempted cross-compartment access logged and alerted
- Anomalous access patterns trigger investigation

#### Compartment Bridging

In limited circumstances, data may need to cross compartments (e.g., individual relocating across front lines):

**Permitted Circumstances**

- Individual physically moves from one compartment to another
- Conflict resolution requires aggregate data sharing
- Individual requests transfer of their own data

**Authorization Requirements**

- Multi-party authorization (e.g., 2-of-3 senior staff from different organizations)
- Documented justification
- Individual consent where applicable
- Legal review where required

**Bridge Characteristics**

- Time-limited (automatic closure after defined period)
- Scope-limited (only specified data, not full access)
- Fully audited (every access logged)
- Revocable (can be closed early if circumstances change)

#### Neutrality Protection

The compartmentalization design ensures:

- **Neither party can extract data about the other**: Even if a party compromises one compartment, other compartments remain protected
- **Symmetric reporting**: Any aggregates provided to conflict parties are identical (same level of detail, same metrics)
- **Verifiable without revealing contents**: Zero-knowledge proofs can demonstrate compliance with protection standards without revealing compartment contents
- **Independent oversight**: External auditors can verify compartmentalization without accessing protected data

---

## III.7 Data Acquired Under Duress and Coercion

### The Principle

**Data obtained through coercion lacks valid consent and must be treated with extreme caution. But in humanitarian contexts, some degree of coercion is inherent—we must design for this reality rather than pretending it doesn't exist.**

The original manifesto stated that "data acquired under duress must not be used." This principle is correct but incomplete. The roundtable, particularly the Community Data Steward and ICRC DPO, emphasized a crucial reframe: **in humanitarian contexts, coercion is the baseline condition, not an edge case.**

When someone provides data because they need food, shelter, or protection, their consent is inherently constrained. This doesn't make the data unusable—that would make humanitarian operations impossible—but it does require us to design systems that minimize coercion and protect against its worst manifestations.

### Distinguishing Types of Coercion

#### Structural Coercion (Baseline)

The inherent power asymmetry in humanitarian relationships:

- Beneficiaries provide data to receive assistance
- Organizations control access to resources
- Consent is never fully "free" when survival needs are involved
- This is the reality of humanitarian operations, not an aberration

**Response to Structural Coercion**:
- Essential services not conditional on consent (see Section I.4)
- Tiered consent reduces pressure for over-sharing
- Multiple opportunities to adjust consent
- Retroactive withdrawal rights
- Ongoing acknowledgment of power dynamics

#### Acute Coercion (Exceptional)

Specific situations of direct threat or pressure:

- Detention settings (person has no freedom to refuse)
- Third-party coercion (family member, community leader, armed actor demanding consent)
- Explicit threats (consent or face consequences)
- Interrogation contexts

**Response to Acute Coercion**:
- Data flagged as potentially compromised
- Enhanced review before use
- Exclusion from sensitive purposes
- Right to retroactive withdrawal with full deletion
- Protection referral where appropriate

### Duress Detection Methodology

*The original manifesto called for "indicators and mechanisms to detect when data might have been obtained under duress" but provided no methodology. This section fills that gap.*

#### Contextual Risk Indicators

Certain contexts automatically elevate duress risk:

| Context Factor | Risk Level | System Response |
|----------------|------------|-----------------|
| **Active conflict in registration area** | High | Enhanced review flag; delayed processing option offered; private re-consent scheduled |
| **Detention setting** | Critical | Minimal data collection only; assume duress for all non-essential data; flag for protection |
| **Third party present during consent** | Medium | Offer private re-consent opportunity; note presence in record |
| **Consent obtained in <2 minutes** | Medium | Quality flag for supervisor review; ensure understanding verified |
| **Mass registration event (>100/day/staff)** | Medium | Random sampling for quality review; extended re-consent window |
| **Consent for unusual data sharing** | Medium | Confirmation prompt; cooling-off period before activation |

#### Behavioral Indicators

Patterns in consent behavior that may indicate duress:

- **Sudden blanket changes**: All permissions granted or revoked at once (may indicate external pressure)
- **Inconsistent patterns**: Consent choices inconsistent with stated preferences or needs
- **Repeated access without change**: Individual accesses consent interface multiple times but makes no changes (possible coerced attempt)
- **Immediate acceptance**: Consent given immediately upon first explanation with no questions (may indicate perceived pressure)

System response to behavioral indicators:

- Flag for human review
- Outreach to offer private consent review
- No negative consequences (individual may have legitimate reasons)

#### Procedural Safeguards

Built-in protections against coercion:

**Safe Words**

Individuals can use a code phrase during consent that signals duress:

- Staff trained to recognize safe word
- Safe word triggers: consent recorded as usual (to avoid alerting coercer), but flagged for review
- Follow-up in safe environment
- Data treated as potentially compromised

**Delayed Consent**

For non-essential data, individuals can defer consent:

- "Decide later" option available
- 48-72 hour delay before re-asking
- Essential services not affected by deferral
- Reduces pressure of immediate decision

**Private Re-Consent**

Automatic offer to review consent in private setting:

- If third party present during initial consent
- When individual returns for follow-up services
- Scheduled re-consent for high-risk contexts
- Conducted in private by trained staff

**Consent Decay**

High-sensitivity consent expires and requires re-confirmation:

- Level 4 data sharing: Re-confirmation every 6 months
- Cross-organization sharing: Re-confirmation annually
- Automated reminders before expiration
- Expired consent reverts to more restrictive tier

#### Post-Hoc Review

After-the-fact review of consent validity:

**Audit Sampling**

- Random sample of consent records from high-risk contexts
- Outreach to verify consent was understood and voluntary
- Interviews conducted by staff not involved in original consent

**Retroactive Withdrawal Rights**

- Individuals can withdraw consent at any time for any reason
- Retroactive withdrawal triggers data deletion
- No penalty for retroactive withdrawal
- No requirement to explain reasons

**Pattern Analysis**

- Analysis of consent patterns across populations and locations
- Investigation of anomalies suggesting systematic coercion
- Findings inform training and process improvement

---

## III.8 Algorithmic Transparency, Explainability, and Fairness

### The Principle

**Every algorithmic system affecting individuals' lives must be transparent, explainable, and fair. Individuals have the right to understand how decisions about them are made and to contest those decisions.**

Humanitarian organizations increasingly use algorithmic systems for consequential decisions: who receives limited resources, who is flagged for fraud investigation, who is prioritized for resettlement, who is identified as vulnerable. These systems can process information faster and more consistently than humans—but they can also embed biases, make errors, and produce outcomes that no human would endorse.

Data dignity requires that algorithmic systems be:

- **Transparent**: Organizations must disclose when algorithms are used in decision-making
- **Explainable**: Individuals must be able to understand why a particular decision was reached
- **Contestable**: Individuals must have mechanisms to challenge algorithmic decisions
- **Fair**: Algorithms must not discriminate against protected groups or perpetuate historical biases
- **Auditable**: External reviewers must be able to assess algorithmic systems for compliance

### Transparency Requirements

#### Disclosure of Algorithmic Decision-Making

Organizations must inform individuals when algorithms influence decisions affecting them:

**Notification Standards**

- Clear statement that algorithmic processing is used
- Plain-language explanation of what the algorithm does
- Disclosure of main factors considered by the algorithm
- Information about human oversight of algorithmic decisions
- Explanation of how to contest decisions

**Documentation Requirements**

For each algorithmic system affecting beneficiaries, organizations must maintain:

- Purpose and intended use of the algorithm
- Data inputs and their sources
- Logic or model type (rule-based, machine learning, etc.)
- Known limitations and failure modes
- Validation and testing results
- Bias assessment findings
- Human oversight procedures
- Audit history

#### Algorithmic Impact Assessments

Before deploying any algorithmic system affecting beneficiaries, organizations must conduct an impact assessment:

| Assessment Area | Key Questions |
|----------------|---------------|
| **Purpose** | Is algorithmic processing necessary? Could simpler methods achieve the goal? |
| **Accuracy** | How accurate is the system? What are false positive/negative rates? |
| **Fairness** | Does the system perform equally across protected groups? |
| **Transparency** | Can decisions be explained to affected individuals? |
| **Contestability** | How can individuals challenge decisions? |
| **Human Oversight** | What human review exists before decisions are implemented? |
| **Harm Potential** | What harm could result from errors? How is harm mitigated? |

Impact assessments must be reviewed by independent parties and updated when systems are materially changed.

### Explainability Frameworks

#### Levels of Explanation

Different audiences require different levels of explanation:

**Individual Beneficiaries**

When an algorithmic decision affects an individual, they must receive:

- Plain-language explanation of the decision
- Key factors that influenced the decision
- How their specific circumstances were considered
- What would need to change for a different decision
- How to contest the decision

Example: "Your application for the livelihoods program was not prioritized because the system identified that your household already has income above the threshold. The main factors were: reported income from the needs assessment, household size, and presence of working-age adults. If your income situation has changed, you can request a reassessment."

**Oversight Bodies**

Internal compliance, external auditors, and governance bodies need:

- Technical documentation of algorithmic logic
- Training data descriptions and provenance
- Model performance metrics
- Bias assessment results
- Audit trail of decisions
- Incident reports and remediation

**Public Transparency**

Organizations should publish:

- Summary descriptions of algorithmic systems in use
- Aggregate performance statistics
- Bias assessment findings (anonymized)
- Commitment to explainability standards
- Contact information for inquiries

#### Technical Approaches to Explainability

Different algorithmic approaches require different explainability techniques:

| Algorithm Type | Explainability Approach |
|---------------|------------------------|
| Rule-based systems | Direct rule tracing; show which rules fired |
| Decision trees | Path visualization; show branch decisions |
| Linear models | Feature importance; coefficient interpretation |
| Complex ML models | LIME, SHAP, or similar local explanation methods |
| Deep learning | Attention visualization; example-based explanation |

For complex models where true explainability is difficult, organizations should consider whether simpler, more explainable models might be appropriate despite potentially lower accuracy.

### Mechanisms for Contesting Decisions

#### Individual Challenge Rights

Individuals affected by algorithmic decisions have the right to:

1. **Request explanation**: Detailed explanation of how the decision was reached
2. **Provide additional information**: Submit information the algorithm may not have considered
3. **Request human review**: Have a human reviewer examine the algorithmic decision
4. **Appeal**: Formal appeal process with independent review
5. **Receive timely response**: Response within defined timelines

**Timeline Requirements**

| Request Type | Response Deadline |
|-------------|-------------------|
| Explanation request | 7 days |
| Additional information submission | Acknowledged within 48 hours; decision revised or affirmed within 14 days |
| Human review request | 14 days |
| Formal appeal | 30 days |

#### Human Review Standards

Human review of algorithmic decisions must meet these standards:

- Reviewer has authority to override algorithmic decision
- Reviewer has access to full case information, not just algorithm output
- Reviewer is trained on algorithm limitations and common errors
- Reviewer documents reasoning for upholding or overriding decision
- Patterns in overrides inform algorithm improvement

#### Collective Challenge Mechanisms

Beyond individual challenges, communities should have mechanisms to raise concerns about algorithmic systems:

- Community feedback channels
- Representation on algorithmic governance bodies
- Ability to request systemic audits
- Participation in algorithm design consultations

### Bias Monitoring and Fairness

#### Humanitarian-Specific Algorithmic Concerns

Humanitarian algorithms present particular fairness challenges:

**Prioritization Algorithms**

When resources are limited, algorithms may prioritize who receives assistance. Risks include:

- Historical biases in training data affecting who is deemed "most vulnerable"
- Systematic under-counting of certain populations in needs assessments
- Criteria that disadvantage populations with different family structures or cultural practices
- Feedback loops where algorithmic prioritization affects future data

**Fraud Detection Algorithms**

Algorithms that flag potentially fraudulent claims risk:

- Higher false positive rates for marginalized populations
- Penalizing individuals for circumstances beyond their control
- Creating barriers that deter legitimate claimants
- Encoding biases about which populations are "suspicious"

**Predictive Vulnerability Models**

Algorithms predicting future vulnerability or needs risk:

- Self-fulfilling prophecies where predictions affect outcomes
- Privacy violations from sensitive data used in predictions
- Stigmatization of populations predicted to be "high risk"
- Errors that deny services to those who don't fit predicted patterns

**Resettlement and Durable Solutions Matching**

Algorithms matching refugees to resettlement countries or other solutions risk:

- Biases affecting which populations are considered "good candidates"
- Optimization for receiving country preferences over refugee interests
- Perpetuating historical patterns of discrimination

#### Fairness Metrics and Assessment

Organizations must monitor algorithmic systems for bias:

**Protected Characteristics**

Fairness must be assessed across:

- Nationality/country of origin
- Ethnicity/tribe/clan
- Religion
- Gender
- Age
- Disability status
- Family composition
- Other context-relevant characteristics

**Fairness Metrics**

Multiple fairness metrics should be tracked:

| Metric | Definition | Application |
|--------|------------|-------------|
| **Demographic parity** | Equal positive rates across groups | Ensure assistance reaches all groups proportionally |
| **Equalized odds** | Equal true/false positive rates across groups | Ensure fraud detection is equally accurate for all |
| **Calibration** | Predictions equally accurate across groups | Ensure vulnerability predictions reliable for all |
| **Individual fairness** | Similar individuals treated similarly | Prevent arbitrary differences in treatment |

**Assessment Process**

- Baseline fairness assessment before deployment
- Ongoing monitoring of fairness metrics
- Threshold-triggered reviews when disparities exceed acceptable levels
- Regular (at least annual) comprehensive fairness audits
- Documentation of findings and remediation actions

#### Remediation Requirements

When bias is detected:

1. **Immediate**: Suspend automated decisions pending investigation for severe bias
2. **Short-term**: Implement human review for affected populations
3. **Medium-term**: Retrain or adjust algorithm to address bias
4. **Long-term**: Address root causes in data collection and system design
5. **Ongoing**: Enhanced monitoring to ensure bias does not recur

Remediation must include:

- Notification to affected individuals where feasible
- Review of past decisions that may have been affected
- Correction of erroneous decisions
- Compensation or remediation for harm caused

---

## III.9 Privacy-Preserving Technologies

### The Principle

**Data should be usable without compromising dignity. Privacy-preserving technologies enable analysis and collaboration while protecting individual privacy.**

The original manifesto advocated for differential privacy, secure multi-party computation (SMPC), and zero-knowledge proofs (ZKPs) as enabling technologies. Expert roundtable feedback, particularly from the Stanford Cryptography Lead, emphasized the need for honest assessment of these technologies' readiness and appropriate use cases.

This section provides that honest assessment, specifying which technologies are production-ready, which remain aspirational, and the specific parameters required for each.

### Technology Readiness Assessment

#### Production-Ready Technologies

The following privacy-preserving technologies are ready for deployment in humanitarian contexts:

**Differential Privacy for Aggregate Queries**

- **Status**: Production-ready
- **Use cases**: Statistical queries over populations, trend analysis, aggregate reporting
- **Limitations**: Not suitable for individual-level queries; requires careful parameter selection
- **Deployment examples**: Google, Apple, US Census Bureau

**Zero-Knowledge Proofs for Specific Claims**

- **Status**: Production-ready for defined proof types
- **Use cases**: Age verification, set membership (e.g., "person is registered refugee"), credential validity
- **Limitations**: Complex proofs remain computationally expensive; requires careful circuit design
- **Deployment examples**: ZCash, various identity systems

**Encryption at Rest and in Transit**

- **Status**: Production-ready
- **Use cases**: All sensitive data storage and transmission
- **Limitations**: Requires key management infrastructure
- **Deployment examples**: Universal in modern systems

**Confidential Computing**

- **Status**: Production-ready with caveats
- **Use cases**: Processing sensitive data in cloud environments
- **Limitations**: Side-channel vulnerabilities exist; limited enclave memory; performance overhead
- **Deployment examples**: Azure Confidential Computing, AWS Nitro Enclaves

#### Aspirational Technologies

The following technologies show promise but are not ready for routine deployment:

**SMPC for Cross-Organization Computation**

- **Status**: NOT production-ready for routine operations
- **Reality check**: SMPC incurs computational overhead of 10,000x or more compared to plaintext computation. It requires all parties to be online simultaneously, has complex setup, and is fragile to participant dropout.
- **Appropriate use cases**: Specific high-value computations where parties genuinely cannot share data, such as cross-agency deduplication or joint fraud detection. These should be rare, planned operations—not routine queries.
- **Inappropriate use cases**: Routine data queries, real-time operations, anything requiring offline capability

**Fully Homomorphic Encryption**

- **Status**: Research-stage
- **Current limitations**: Performance remains impractical for most applications (thousands of times slower than plaintext)
- **Future potential**: May become viable as performance improves

**Complex Zero-Knowledge Proofs**

- **Status**: Emerging
- **Current limitations**: Proofs beyond simple claims remain expensive to generate and verify
- **Future potential**: Advances in proof systems (SNARKs, STARKs) continue to expand practical applications

### III.9.1 Differential Privacy Governance

Differential privacy adds calibrated noise to query results, providing mathematical guarantees against re-identification while enabling useful aggregate analysis.

#### Privacy Budget Management

Each individual has a "privacy budget" that limits how much information can be learned about them through queries:

**Budget Allocation**

| Time Period | Budget (ε) | Rationale |
|-------------|-----------|-----------|
| Per day | 0.1 | Limits rapid information extraction |
| Per month | 1.0 | Allows reasonable operational queries |
| Per year | 3.0 | Cumulative ceiling |
| Lifetime | 10.0 | Absolute maximum |

**Budget Tracking**

- Automated tracking of privacy budget consumption per individual
- Real-time budget checking before query execution
- Alerts when budget thresholds approached (75%, 90%)
- Query denial when budget exhausted
- Budget reset procedures (time-based or administrative)

**Query Auditing**

- All DP-enabled queries logged
- Composition tracking to ensure cumulative privacy loss stays within bounds
- Regular audits of query patterns and budget consumption
- Investigation of anomalous query behavior

#### Parameter Specifications

Differential privacy parameters must be carefully selected based on query type and sensitivity:

| Query Type | ε (epsilon) | δ (delta) | Noise Mechanism | Notes |
|------------|-------------|-----------|-----------------|-------|
| Large population counts (n>1000) | 1.0 | 10⁻⁶ | Laplace | Standard for operational statistics |
| Small population counts (n<100) | 0.1 | 10⁻⁸ | Laplace with thresholding | Small groups need more protection; suppress counts below threshold |
| Location aggregates | 0.5 | 10⁻⁷ | Geo-indistinguishability | Special mechanisms for location data |
| Averages/means | 1.0 | 10⁻⁶ | Laplace on bounded data | Requires known data bounds |
| Histograms | 0.5 per bin | 10⁻⁷ | Laplace | Budget split across bins |
| Individual-level queries | NOT PERMITTED | — | — | DP is not appropriate for individual queries |

**Composition Governance**

When multiple queries are run:

- Sequential composition: Total ε is sum of individual ε values
- Parallel composition: Total ε is max of ε values (for disjoint subsets)
- Advanced composition: Tighter bounds available with (ε, δ)-DP

Organizations must specify and document which composition theorem applies and track cumulative privacy loss accordingly.

### III.9.2 Zero-Knowledge Proof Specifications

Zero-knowledge proofs allow proving a statement is true without revealing the underlying data.

#### Supported Proof Types

The following proof types are specified for humanitarian use:

| Claim | Protocol | Parameters | Prover Time | Verifier Time |
|-------|----------|------------|-------------|---------------|
| Age ≥ 18 | Bulletproofs (range proof) | 64-bit range | ~200ms | ~50ms |
| Age in range (e.g., 5-12 for education) | Bulletproofs | 64-bit range | ~200ms | ~50ms |
| Country in approved list | Groth16 (set membership) | BLS12-381 curve | ~500ms | ~10ms |
| Credential not revoked | Merkle proof + signature | SHA-256, 20-level tree | ~50ms | ~20ms |
| Credential issued by authorized party | Signature verification in ZK | BLS signatures | ~300ms | ~15ms |
| Vulnerability score above threshold | Range proof | 64-bit range | ~200ms | ~50ms |

#### Implementation Requirements

**Circuit Auditing**

- All ZKP circuits must be audited by qualified cryptographers
- Audits must verify correctness (valid proofs only for true statements)
- Audits must verify soundness (cannot create valid proofs for false statements)
- Audit reports published for transparency

**Trusted Setup (where required)**

For protocols requiring trusted setup (e.g., Groth16):

- Multi-party computation ceremony with diverse participants
- At least one participant must be trustworthy for security
- Ceremony transcripts published
- Powers-of-tau from established ceremonies acceptable

**Verification Infrastructure**

- Verification keys distributed to all relying parties
- Key integrity verified through multiple channels
- Offline verification capability (cached verification keys)
- Key rotation procedures for compromised or deprecated circuits

### III.9.3 Key Management Architecture

Cryptographic keys underpin all security measures. Proper key management is essential.

#### Key Generation

**Entropy Requirements**

- Hardware random number generators required for high-value keys
- Minimum 256 bits of entropy for symmetric keys
- Compliance with NIST SP 800-90A for random number generation

**Key Generation Ceremonies**

For organizational or shared keys:

- Multi-party generation (no single party knows full key)
- Witnessed ceremonies with documented procedures
- Split knowledge: key shares held by different individuals
- Audit trail of all generation events

**Individual Keys**

For beneficiary-controlled keys:

- Generated on user device where possible
- Backed up through key recovery mechanism (see Section III.10.6)
- Never transmitted in plaintext

#### Key Storage

| Key Type | Storage Requirement | Access Control |
|----------|--------------------|--------------------|
| Master organizational keys | Hardware Security Module (HSM) | Multi-party authorization |
| Service encryption keys | HSM or secure key vault | Automated access with audit |
| Individual beneficiary keys | Device secure enclave or encrypted storage | Biometric or PIN unlock |
| Session keys | Memory only, never persisted | Automatic expiration |

**Geographic Distribution**

- No single geographic location holds all key material
- Backup key shares in separate jurisdictions
- Recovery possible even if one location compromised

#### Key Rotation

| Key Type | Rotation Schedule | Emergency Rotation Trigger |
|----------|-------------------|---------------------------|
| Master keys | Annual | Suspected compromise, personnel change |
| Service keys | Quarterly | Suspected compromise, vulnerability discovery |
| Session keys | Per session or daily maximum | Any anomaly |
| Individual keys | User-initiated | Suspected compromise, device loss |

**Rotation Procedures**

- Overlap period where both old and new keys valid
- Automated re-encryption of data with new keys
- Audit trail of all rotations
- Verification that rotation completed successfully

#### Post-Quantum Considerations

Current cryptographic systems may be vulnerable to future quantum computers:

**Timeline Assessment**

- Cryptographically relevant quantum computers: Estimated 10-20 years
- Long-term data protection needs: Exceeds this horizon
- Action required: Begin planning now for data with long-term sensitivity

**Migration Strategy**

- Inventory of cryptographic dependencies
- Prioritization based on data sensitivity and retention period
- Hybrid classical/post-quantum approaches during transition
- Monitoring NIST post-quantum standardization (CRYSTALS-Kyber, CRYSTALS-Dilithium selected)
- Target: Post-quantum readiness within 5 years for Level 4 data

### III.9.4 Confidential Computing Requirements

Confidential computing protects data during processing by isolating computations in hardware-enforced trusted execution environments (TEEs).

#### When Required

| Scenario | Requirement Level |
|----------|-------------------|
| Level 4 (Critical) data processing in cloud | Mandatory |
| Level 3 (Sensitive) data processing in shared infrastructure | Required |
| Cross-organization data processing | Required |
| Processing by third-party service providers | Required |
| Processing on controlled, dedicated infrastructure | Recommended |

#### Acceptable Technologies

The following TEE technologies are acceptable:

| Technology | Provider | Notes |
|------------|----------|-------|
| Intel SGX | Intel processors | Mature, widely deployed; some side-channel vulnerabilities identified |
| AMD SEV-SNP | AMD processors | Strong isolation; larger trusted computing base |
| ARM TrustZone | ARM processors | Common in mobile; smaller enclaves |
| AWS Nitro Enclaves | AWS | Cloud-native; hypervisor-based isolation |
| Azure Confidential Computing | Microsoft Azure | Supports SGX and AMD SEV |

#### Attestation Requirements

Before releasing sensitive data to a TEE, the data owner must verify the TEE's integrity:

**Remote Attestation Process**

1. TEE generates attestation report (signed by hardware)
2. Report sent to data owner
3. Data owner verifies:
   - Hardware authenticity (using manufacturer root of trust)
   - Software running in enclave matches expected code
   - Enclave configuration meets security requirements
4. Only after successful verification is data released

**Attestation Records**

- All attestation events logged
- Attestation reports retained for audit
- Alerts on attestation failures

#### Limitations Acknowledgment

Organizations must understand confidential computing limitations:

- **Side-channel vulnerabilities**: Multiple attacks demonstrated against SGX
- **Memory constraints**: Enclave memory is limited
- **Performance overhead**: Encryption/decryption at enclave boundary
- **Trust assumptions**: Hardware manufacturer must be trusted
- **Not a silver bullet**: Part of defense-in-depth, not complete solution

Compensating controls:

- Defense-in-depth (don't rely solely on TEE)
- Data minimization (limit data processed in TEE)
- Monitoring for anomalies even within TEE workloads
- Regular security reviews and updates

---

## III.10 Federated Identity and Decentralized Identity Models

### The Principle

**Identity is a human right, not a corporate asset. Individuals should control their digital identities—choosing what to share, with whom, and for how long.**

Traditional identity systems place control with issuers and verifiers: governments issue identity documents, organizations maintain databases, and individuals have little say in how their identity information flows. Decentralized identity models invert this relationship, giving individuals custody of their own credentials while maintaining the ability to prove claims about themselves when needed.

For humanitarian contexts, this shift is profound:

- **Portability**: Refugees can carry verifiable credentials across borders and organizations
- **Privacy**: Individuals can prove specific claims (e.g., "I am over 18") without revealing underlying data (e.g., date of birth)
- **Resilience**: Identity survives organizational failures, conflicts, and displacement
- **Dignity**: Individuals control their identity rather than being controlled by it

This section specifies the technical infrastructure required to realize this vision: decentralized identifiers (DIDs), verifiable credentials (VCs), trust registries, identity proofing protocols, and key recovery mechanisms.

### Core Concepts

#### Decentralized Identifiers (DIDs)

A DID is a globally unique identifier that:

- Is controlled by the individual (not a central authority)
- Can be resolved to a DID Document containing cryptographic keys
- Enables verifiable digital signatures
- Does not require a central registry (depending on DID method)

Example DID: `did:key:z6MkhaXgBZDvotDkL5257faiztiGiC2QtKLGpbnnEGta2doK`

#### Verifiable Credentials (VCs)

A VC is a tamper-evident digital credential that:

- Contains claims about a subject (e.g., "Maria is a registered refugee")
- Is cryptographically signed by an issuer
- Can be verified without contacting the issuer
- Can be selectively disclosed (reveal only needed claims)

#### Self-Sovereign Identity (SSI)

SSI is an identity model where:

- Individuals hold their own credentials (in a "wallet")
- Individuals choose when and with whom to share credentials
- Verification happens peer-to-peer, not through central authorities
- Individuals can revoke access to their credentials

### III.10.1 Trust Registry Specification

A trust registry answers the question: "Who is authorized to issue what credentials?" Without a trust registry, anyone could issue credentials claiming anything, rendering the system meaningless.

#### Registry Contents

The humanitarian trust registry contains:

| Field | Description | Example |
|-------|-------------|---------|
| Issuer DID | Decentralized identifier of authorized issuer | `did:web:unhcr.org` |
| Issuer Name | Human-readable organization name | United Nations High Commissioner for Refugees |
| Authorized Credential Types | What credentials this issuer can issue | Refugee Status Determination, Asylum Seeker Certificate |
| Validity Period | When this authorization is valid | 2024-01-01 to 2026-12-31 |
| Revocation Status | Whether authorization has been revoked | Active |
| Jurisdiction | Geographic or legal scope | Global |
| Contact Information | For verification and disputes | trust-registry@unhcr.org |

#### Governance Model

The trust registry is governed by a consortium of major humanitarian organizations:

**Consortium Members**

- UNHCR (lead for refugee/displacement credentials)
- ICRC (lead for conflict-context credentials)
- WHO/health cluster (lead for health credentials)
- UNICEF/education cluster (lead for education credentials)
- WFP (lead for assistance credentials)
- Representative civil society organizations
- Affected community representatives

**Issuer Onboarding Process**

Organizations seeking authorization to issue credentials must:

1. **Application**: Submit application with organizational documentation
2. **Organizational Verification**: Verification of legal status, operational history, and humanitarian mandate
3. **Technical Compliance Check**: 
   - DID method meets humanitarian requirements (see Section III.10.2)
   - Signing algorithms are approved (Ed25519, ECDSA P-256)
   - Credential formats comply with schema specifications
4. **Policy Compliance Check**:
   - Data protection policies meet manifesto requirements
   - Staff training on credential issuance
   - Audit history demonstrates compliance
5. **Governance Approval**: Consortium vote on authorization
6. **Onboarding**: Technical integration and testing
7. **Ongoing Monitoring**: Periodic re-certification (every 2 years)

**Credential Type Authorization Matrix**

Not all issuers can issue all credential types:

| Credential Type | Authorized Issuers |
|----------------|-------------------|
| Refugee Status Determination | UNHCR only |
| Asylum Seeker Registration | Government authorities, UNHCR |
| Subsidiary Protection Status | Government authorities |
| Vaccination Certificate | WHO-accredited health providers |
| Education Credentials | Accredited educational institutions |
| Humanitarian Assistance Record | Registered humanitarian organizations |
| Skills/Livelihoods Credentials | Certified training providers |
| Protection Assessment | UNHCR, ICRC, accredited protection actors |

#### Registry Distribution

**Global Primary Registry**

- Maintained by consortium secretariat
- Cryptographically signed for integrity
- Version-controlled with change history
- Available via HTTPS API

**Regional Registries**

For performance and sovereignty:

- Regional replicas in each major humanitarian region
- Synchronization with global registry (max 24-hour lag)
- Local caching for latency reduction
- Fallback to global if regional unavailable

**Offline Snapshots**

For field operations without connectivity:

- Daily registry snapshots available for download
- Signed by consortium for integrity verification
- Validity period: 7 days for standard credentials, 24 hours for critical credentials
- Graceful degradation when snapshot expired (accept with flag)

#### Federation Model

Multiple trust registries may exist (e.g., regional, thematic). Federation enables interoperability:

**Cross-Registry Trust Anchors**

- Registries publish their signing keys
- Other registries can recognize these keys as trusted
- Creates web of trust across registries

**Conflict Resolution**

When registries disagree about an issuer's authorization:

- Most restrictive interpretation applies
- Conflict flagged for governance resolution
- Temporary acceptance with audit flag
- Resolution within 72 hours

### III.10.2 Identity Proofing Protocol

*This section addresses a critical gap identified by the ID.me Architect: "You cannot have identity without proofing. The manifesto assumes identity exists. But how do you know that the person claiming to be Ahmed is actually Ahmed?"*

Identity proofing establishes the binding between a real-world person and their digital identity. In humanitarian contexts, this is uniquely challenging: many individuals lack documents, come from countries where document fraud is common, or have documents in scripts unfamiliar to staff.

#### Identity Assurance Levels

Following NIST 800-63-3, we define Identity Assurance Levels (IALs) appropriate for humanitarian contexts:

**IAL1: Self-Assertion with Biometric Deduplication**

- **Evidence Required**: Self-asserted name and basic information
- **Verification**: Biometric capture (fingerprint and/or iris) checked against existing records for deduplication
- **Confidence**: Low—but sufficient to establish that this is a unique individual not previously registered
- **Appropriate For**: Emergency food distribution, initial registration, basic services
- **Fraud Risk**: Minimal—biometric deduplication prevents double-registration

**IAL1+: Informal Evidence with Staff Assessment**

- **Evidence Required**: Any informal evidence (family photos, letters, witness statements)
- **Verification**: Staff interview assessing consistency of narrative; biometric match to any previous records
- **Confidence**: Low-Medium—staff judgment adds some assurance
- **Appropriate For**: Program enrollment, non-emergency services
- **Fraud Risk**: Low—inconsistencies flagged for review

**IAL2: Documentary Evidence**

- **Evidence Required**: Government-issued identity document (expired or damaged acceptable)
- **Verification**: Visual inspection of document; biometric match to document photo; basic document authentication
- **Confidence**: Medium—document provides external corroboration
- **Appropriate For**: Resettlement referral, higher-value services
- **Fraud Risk**: Medium—document fraud possible but raises bar

**IAL2+: Verified Documentary Evidence**

- **Evidence Required**: Valid government-issued identity document plus secondary evidence (utility bill, bank statement, etc.)
- **Verification**: Document chip read (if available), issuer verification (if possible), biometric match
- **Confidence**: Medium-High—multiple evidence sources
- **Appropriate For**: Travel document issuance, high-stakes decisions
- **Fraud Risk**: Lower—multiple independent checks

**IAL3: High Assurance**

- **Evidence Required**: Multiple document types, biometrics, in-person interview
- **Verification**: Cross-referencing of all evidence, in-depth interview, supervisor review
- **Confidence**: High—comprehensive assessment
- **Appropriate For**: Highest-stakes decisions, fraud investigation resolution
- **Fraud Risk**: Lowest achievable in humanitarian contexts

#### Proofing for Document-Less Populations

Many humanitarian beneficiaries lack documents entirely. The following procedures enable identity proofing without documents:

**Biometric-Primary Enrollment**

- Biometric capture establishes unique identity
- Self-asserted biographical information recorded
- Achieves IAL1—sufficient for essential services
- Flag in record indicates document-less enrollment

**Community Vouching**

- Community leaders or multiple community members attest to identity
- Vouching recorded with vouchsafe identities
- Can elevate to IAL1+ with sufficient vouching
- Cultural appropriateness considerations (gender, clan dynamics)

**Witness Statements**

- Detailed statements from individuals who know the person
- Staff assessment of statement credibility
- Can support elevation to IAL1+

**Progressive Proofing**

- Initial registration at IAL1
- Evidence accumulated over time
- Assurance level upgraded as evidence supports
- No service disruption during upgrade process

#### Edge Cases

**Minors**

- Guardian consent required for registration
- Age-appropriate explanation of process
- Biometrics collected only where necessary (age >5 typically)
- Child-friendly interview techniques
- Best interest determination integrated with proofing

**Elderly Individuals**

- Accommodation for mobility and sensory limitations
- Extended interview time
- Family member assistance permitted (with monitoring for undue influence)
- Historical knowledge questions can support proofing

**Individuals with Cognitive Impairments**

- Supported decision-making model
- Guardian or representative involvement
- Simplified explanations and consent processes
- Assessment of capacity for each decision

**Trauma-Affected Individuals**

- Trauma-informed proofing techniques
- Breaks and delays permitted
- No pressure for detailed narratives
- Referral to protection/psychosocial services if needed

### III.10.3 Key Recovery Mechanism

*This section addresses a critical gap identified by the ID.me Architect: "What happens when someone loses their phone, forgets their PIN, or has their device seized? Without key recovery, identity is lost forever."*

Key recovery enables individuals to regain access to their digital identity when keys are lost, compromised, or inaccessible. The mechanism must balance security (preventing unauthorized recovery) with usability (enabling legitimate recovery).

#### Recovery Options

**Threshold Institutional Recovery (Primary)**

How it works:
- At enrollment, key shares distributed to 3 humanitarian organizations
- Recovery requires cooperation of 2-of-3 organizations
- No single organization can recover unilaterally

Pros:
- No single point of failure
- Organizational accountability
- Works for any user

Cons:
- Requires inter-organizational coordination
- May take 24-72 hours

Recommended for: All users (default)

**Biometric Re-Enrollment (Secondary)**

How it works:
- Individual presents to registration point
- Re-proofed at original IAL or higher
- New key generated and linked to existing identity

Pros:
- Always available (user doesn't need to remember/keep anything)
- Works even if all devices lost

Cons:
- Requires in-person visit
- Full re-proofing overhead

Recommended for: Backup for all users

**Social Recovery (Optional)**

How it works:
- User designates K-of-N trusted contacts
- Contacts hold key shares
- Recovery requires K contacts to cooperate

Pros:
- User-controlled
- Decentralized

Cons:
- Requires stable social network
- Coordination challenges

Recommended for: Sophisticated users who opt in

#### Recovery Process

1. **Request Initiation**: Individual requests recovery through available channel (in-person, phone, online)

2. **Identity Verification**: Re-proofing at original IAL or higher
   - For IAL1: Biometric match to original enrollment
   - For IAL2+: Documentary evidence plus biometric

3. **Waiting Period**: 24-72 hours depending on risk level
   - Allows for fraud detection
   - User can cancel during this period
   - Notifications sent to registered contacts

4. **Key Reconstruction**: Recovery mechanism executes
   - Threshold: Organizations coordinate to reconstruct
   - Biometric: New key generated and linked
   - Social: Contacts provide shares

5. **Credential Migration**: Previous credentials migrated to new key
   - Cryptographic re-signing as needed
   - Audit trail maintained

6. **Notification**: Confirmation sent via all registered channels

#### Anti-Coercion Features

Recovery must resist coerced recovery attempts:

**Duress Codes**

- User can provide a "duress code" instead of normal PIN
- System appears to comply with recovery
- Actually: alerts security, provides decoy credentials
- Real credentials remain protected

**Time-Delayed Recovery**

- Mandatory waiting period for all recovery
- Notifications sent immediately upon request
- User or security can cancel during waiting period

**Geographic Restrictions**

- Recovery requests from unusual locations flagged
- Additional verification for cross-border recovery
- Option to restrict recovery to specific countries

**Cooling-Off Period**

- Recovered credentials have limited functionality initially
- Full functionality restored after additional period
- Allows fraud detection window

### III.10.4 Verifiable Presentation Protocol

When an individual presents credentials to a verifier, the presentation protocol ensures:

- Holder controls what is disclosed
- Verifier can trust the credentials are authentic
- Neither party can be impersonated
- Presentations cannot be replayed

#### Selective Disclosure

Individuals choose exactly which attributes to reveal:

| Scenario | Full Credential | Selective Disclosure |
|----------|----------------|---------------------|
| Age verification for adult services | Name: Maria Lopez, DOB: 1985-03-15, Nationality: Colombian, Refugee Status: Confirmed | Proves: "Age ≥ 18" (without revealing exact date or other attributes) |
| Eligibility for assistance | Full household assessment data | Proves: "Eligible for Program X" (without revealing assessment details) |
| Skills verification | Complete education and employment history | Proves: "Has certification in skill Y" (without revealing other credentials) |

Technical implementation uses zero-knowledge proofs (see Section III.9.2) to prove claims without revealing underlying data.

#### Holder Binding

Verifiers must confirm that the person presenting credentials actually controls them:

**Challenge-Response Protocol**

1. Verifier sends random challenge (nonce)
2. Holder signs challenge with credential private key
3. Verifier verifies signature against credential public key
4. Fresh challenge prevents replay of captured presentations

**Biometric Binding (High-Stakes)**

For high-stakes presentations:

- Credential contains biometric template
- Presentation includes live biometric capture
- Verifier confirms match between template and live capture
- Prevents credential sharing/theft

#### Replay Protection

Presentations are protected against capture and replay:

- Nonces ensure each presentation is unique
- Timestamps limit validity window (typically 5 minutes)
- Verifier-specific binding prevents presenting to unintended verifier
- Single-use presentations where required

### III.10.5 Credential Revocation

Credentials must be revocable when circumstances change:

#### Revocation Triggers

| Trigger | Example | Process |
|---------|---------|---------|
| Fraud discovered | Credential issued based on false information | Issuer-initiated revocation |
| Error correction | Data entry error in credential | Issuer revokes, re-issues corrected credential |
| Holder request | Individual wants credential removed | Holder-initiated revocation |
| Status change | Refugee status ceases (citizenship acquired) | Issuer revokes upon status change |
| Issuer policy | Credential type discontinued | Mass revocation with transition period |

#### Revocation Mechanism

**StatusList2021 Format**

- Bitstring where each position corresponds to a credential
- Bit = 0: credential valid; Bit = 1: credential revoked
- Compressed and signed by issuer
- Privacy-preserving: checking one credential doesn't reveal which credential checked

**Propagation Timeline**

| Severity | Example | Max Propagation Time |
|----------|---------|---------------------|
| Critical | Discovered fraud affecting safety | 24 hours |
| High | Error affecting eligibility | 72 hours |
| Standard | Routine status change | 7 days |

**Offline Revocation Checking**

- Verifiers cache status lists
- Cache validity: 24 hours for critical credentials, 7 days for standard
- Graceful degradation when cache expired:
  - Accept with flag for post-verification
  - Or reject and request online verification

---

## III.11 Data Dignity DAOs for Decentralized Governance

### The Principle

**Data governance should be participatory, transparent, and accountable. Decentralized Autonomous Organizations (DAOs) provide mechanisms for affected communities to have voice in how their data is governed.**

Traditional humanitarian data governance is top-down: organizations make decisions about data, and affected populations have little say. DAOs offer an alternative model where governance rules are encoded in smart contracts, decisions are made through transparent voting, and communities have meaningful input.

However, the roundtable identified a critical tension: DAOs cannot supersede established humanitarian coordination mechanisms. The Humanitarian Coordinator's authority, cluster coordination, and the Inter-Agency Standing Committee must remain intact for operational effectiveness.

This section specifies how DAOs complement—rather than replace—existing humanitarian governance.

### Authority Mapping

Clear delineation of what DAOs control versus what remains with existing authorities:

| Decision Type | Existing Authority | DAO Role |
|---------------|-------------------|----------|
| **Individual consent** | Data subject | DAO enforces individual consent choices through smart contracts |
| **Technical standards** | OCHA, UNHCR IT | DAO proposes standards; technical bodies approve and implement |
| **Operational data sharing** | Cluster leads, HCT | DAO provides advisory input; operational authorities decide |
| **Policy changes** | Inter-Agency Standing Committee | DAO proposals escalated as input; IASC decides |
| **Emergency overrides** | Humanitarian Coordinator | DAO receives notification and audit log; reviews post-hoc |
| **Certification criteria** | Data Dignity Advisory Board | DAO governance over certification program |
| **Transparency reporting** | Individual organizations | DAO aggregates and publishes transparency reports |

### DAO Scope

**The DAO handles:**

- Enforcement of individual consent choices (smart contracts execute consent rules)
- Technical standard proposals and review
- Community feedback aggregation and representation
- Transparency reporting and accountability
- Certification program governance
- Dispute resolution for consent violations
- Long-term governance of the Data Dignity framework

**Existing structures handle:**

- Day-to-day operational coordination
- Emergency response decisions
- Inter-governmental relations
- Resource allocation
- Staff management
- Procurement and contracting

### Governance Structure

#### DAO Participants

| Participant Type | Role | Weight |
|-----------------|------|--------|
| **Affected communities** | Primary stakeholders; voice in governance | Proportional to population served |
| **Humanitarian organizations** | Implementing partners; technical expertise | Based on data volume and compliance record |
| **Technical experts** | Security, privacy, standards specialists | Advisory, non-voting |
| **Civil society** | Advocacy, accountability | Balanced representation |
| **Regulators** | Legal and regulatory perspective | Observer status |

#### Voting Mechanisms

**Population-Based Weighting (Not Token-Based)**

Unlike commercial DAOs that use token-based voting (which advantages the wealthy), humanitarian DAOs use population-based weighting:

- Voting weight proportional to represented population
- Prevents wealthy organizations from dominating
- Ensures affected communities have proportional voice

**Voting Thresholds**

| Decision Type | Threshold | Rationale |
|--------------|-----------|-----------|
| Technical standard adoption | 60% | Balance between adoption and deliberation |
| Policy recommendation | 67% | Higher bar for policy influence |
| Certification criteria change | 75% | Stability for implementing organizations |
| Emergency procedure activation | 50% + HC concurrence | Speed with accountability |
| DAO charter amendment | 80% | Constitutional-level changes require broad consensus |

### Offline and Low-Tech Participation

*This section addresses the Community Data Steward's concern: "Token-based voting excludes the most vulnerable. How does a refugee in a camp with no phone participate in a DAO?"*

#### Participation Tiers

**Digital Direct Participation**

For individuals with smartphones and connectivity:
- Mobile application for voting
- Direct submission of proposals
- Real-time participation in governance

**Community Representative Model**

For populations without digital access:
- Communities elect Data Stewards to represent them
- Stewards participate digitally on behalf of constituents
- Regular community meetings to gather input
- Stewards report back on decisions

**Paper-Based Input**

For gathering broad input:
- Physical feedback forms distributed at service points
- Forms collected, digitized, and aggregated
- Input considered in proposals and decisions
- Confirmation of receipt provided

**In-Person Assemblies**

For major decisions:
- Community meetings convened before significant votes
- Multilingual facilitation
- Results aggregated into DAO governance
- Documented for transparency

#### Data Steward Model

**Election Process**

- Communities nominate candidates
- Elections facilitated by neutral party
- Secret ballot where culturally appropriate
- Term: 2 years
- Re-election permitted (max 2 consecutive terms)

**Steward Responsibilities**

- Attend DAO governance meetings (in person or virtual)
- Gather community input before votes
- Vote according to community preferences
- Report outcomes back to community
- Raise community concerns to DAO

**Accountability**

- Regular reporting to constituents
- Recall mechanism if steward fails duties
- Compensation/recognition for service
- Training and support provided

### Conflict Resolution

When DAO decisions conflict with operational authorities:

#### Escalation Path

1. **Working Level Resolution**: DAO representatives and operational staff attempt resolution
2. **Mediation**: Neutral mediator (e.g., OCHA representative) facilitates discussion
3. **Formal Appeal**: Either party can appeal to Data Dignity Advisory Board
4. **Final Decision**: Advisory Board decision is binding on DAO matters; operational authority decision is binding on operational matters

#### Emergency Override Provisions

In genuine emergencies, operational authorities may override DAO-managed consent:

- Override must be documented with justification
- DAO notified within 24 hours
- Post-hoc review by DAO
- Accountability for unjustified overrides

---

## III.12 Privacy and Dignity Testing Tools

### The Principle

**Data dignity compliance must be verified through systematic testing. Testing tools enable organizations to validate that their systems respect data dignity principles before deployment and continuously during operation.**

Building data dignity into systems requires more than good intentions—it requires verification. Testing tools catch violations before they harm individuals, identify regressions, and provide evidence for certification.

### Testing Framework

#### CI/CD Integration

Data dignity testing should be integrated into continuous integration/continuous deployment pipelines:

**Pre-Commit Checks**
- Privacy linting on code changes
- Consent requirement verification
- Data classification compliance

**Build-Time Testing**
- Automated compliance test suite
- Synthetic data testing for privacy properties
- Credential workflow validation

**Deployment Gates**
- Full compliance scan before production deployment
- Penetration testing triggers for security changes
- Rollback capability if issues detected

#### Compliance Test Suites

Pre-built test suites verify specific data dignity requirements:

| Test Suite | What It Tests | Frequency |
|------------|---------------|-----------|
| Consent Enforcement | Consent rules correctly enforced | Every deployment |
| Data Minimization | Only required data collected | Weekly |
| Access Control | Role-based access correctly enforced | Daily |
| Encryption | Data encrypted at rest and in transit | Continuous |
| Audit Logging | All access logged correctly | Daily |
| Retention | Data deleted per retention policy | Weekly |
| Offline Operation | System functions without connectivity | Monthly |

### Humanitarian-Specific Test Scenarios

Standard testing is insufficient for humanitarian contexts. Additional scenarios include:

#### Offline Operation Testing

- Simulate extended connectivity loss (7+ days)
- Verify consent changes queued correctly
- Confirm essential services continue
- Test sync and reconciliation on reconnection
- Validate offline credential verification

#### Emergency Override Testing

- Simulate emergency scenarios
- Verify override authorization works correctly
- Confirm override audit trail generated
- Test post-hoc consent reconciliation
- Validate notification mechanisms

#### Consent Tier Transition Testing

- Test movement between consent tiers
- Verify service access changes appropriately
- Confirm data sharing adjusts to new tier
- Test consent decay and re-consent
- Validate retroactive consent withdrawal

#### Duress Safeguard Testing

- Test duress code activation
- Verify duress alerts sent correctly
- Confirm decoy responses work
- Test recovery anti-coercion features
- Validate delayed consent mechanisms

### III.12.1 Harm Reduction Protocols

*This section addresses the Community Data Steward's concern: "What happens when the system fails? Does a refugee go hungry because of a software bug?"*

#### Guiding Principle

**System failure shall NEVER prevent essential aid delivery. Technical problems are our problem, not beneficiaries' problem.**

This principle is inviolable. Every system design, every test plan, every operational procedure must ensure that technical failures do not translate into aid denial.

#### Failure Mode Analysis

| Failure Mode | Impact | Fallback Procedure |
|--------------|--------|-------------------|
| **Complete system outage** | Cannot verify identity or consent | Manual distribution with paper documentation; reconcile post-restoration |
| **Credential verification failure** | Cannot verify individual's credentials | Accept with flag for later verification; never deny essential services |
| **Consent system malfunction** | Cannot determine consent status | Assume minimum consent (Tier 1); provide essential services; reconcile when system restored |
| **Cryptographic verification failure** | Cannot verify credential authenticity | Accept with flag; supervisor approval; later verification |
| **Connectivity loss** | Cannot sync or verify online | Cached data + offline mode; continue essential services; sync and reconcile when connected |
| **Device seizure/loss** | Field staff lose access | Backup procedures; paper fallback; remote wipe; service continuity |

#### Fallback Levels

**Level 1: Degraded Digital**
- Use cached credentials and consent status
- Offline verification where possible
- Flag for reconciliation
- Full services continue

**Level 2: Manual Override**
- Staff authorization to proceed without digital verification
- Paper documentation of services provided
- Supervisor approval required
- Reconciliation within 72 hours

**Level 3: Emergency Blanket**
- Aid delivered without individual verification
- Used only in system-wide failure or mass emergency
- Aggregate tracking only
- Full reconciliation post-emergency

#### Service Continuity Requirements

| Metric | Requirement | Rationale |
|--------|-------------|-----------|
| **Recovery Time Objective (RTO)** | 4 hours for essential services | Beneficiaries should not wait more than half a day |
| **Recovery Point Objective (RPO)** | 24 hours for consent records | One day of consent changes may need manual reconciliation |
| **Backup availability** | 99.9% | Backups must be available when primary fails |
| **Fallback training** | Annual refresher for all staff | Staff must know manual procedures |

#### User Communication

When systems fail, beneficiaries must be informed:

- Clear explanation that system is temporarily unavailable
- Assurance that services will continue
- Timeline for resolution (if known)
- Alternative contact for urgent issues
- Confirmation when systems restored

---

## III.13 Data Dignity by Culture and Education

### The Principle

**Data dignity must be embedded in organizational culture, not just technical systems. Training, policies, champions, and awareness campaigns transform data dignity from an aspiration into a lived reality.**

Technical systems can enforce rules, but they cannot create understanding. Smart contracts can execute consent choices, but they cannot ensure that staff understand why consent matters. The most sophisticated privacy-preserving technology is useless if deployed by personnel who don't comprehend its purpose or users who don't trust it.

This section addresses the human infrastructure of data dignity: the training programs, cultural norms, leadership commitment, and community education required to make data dignity real.

### Organizational Culture

#### Leadership Commitment

Data dignity begins at the top. Senior leadership must:

**Visible Championship**
- Executive-level sponsor for data dignity
- Regular communication about data dignity priorities
- Accountability for data dignity outcomes in leadership reviews
- Resource allocation demonstrating commitment

**Policy Authority**
- Data dignity policies approved at highest organizational level
- Clear authority for data protection officers
- Integration of data dignity into strategic planning
- Board-level reporting on data dignity metrics

**Incentive Alignment**
- Performance metrics include data dignity compliance
- Recognition programs for data dignity excellence
- Consequences for violations proportionate to harm
- Career advancement tied to responsible data practices

#### Policies and Procedures

Comprehensive policies must govern all aspects of data handling:

**Core Policy Documents**
- Data Protection Policy: Overarching principles and requirements
- Privacy Notice: Beneficiary-facing explanation of data practices
- Data Classification Guide: How to classify and handle data
- Consent Procedures: How to obtain and manage consent
- Data Sharing Agreements: Templates and approval processes
- Incident Response Plan: What to do when things go wrong
- Retention Schedule: How long data is kept and when deleted

**Procedure Integration**
- Data dignity integrated into standard operating procedures
- Registration procedures include consent facilitation
- Service delivery procedures include data handling requirements
- Referral procedures include data sharing protocols
- Exit procedures include data retention/deletion

### Staff Training Programs

#### Training Curriculum

**Foundation Training (All Staff)**

Required for all personnel with any access to beneficiary data:

| Module | Duration | Content | Assessment |
|--------|----------|---------|------------|
| Data Dignity Principles | 2 hours | Why data dignity matters; core principles; manifesto overview | Quiz (>80% pass) |
| Data Classification | 1 hour | Classification levels; handling requirements; examples | Practical exercise |
| Consent Fundamentals | 2 hours | Tiered consent model; facilitation techniques; coercion avoidance | Role-play assessment |
| Security Basics | 2 hours | Password hygiene; phishing awareness; device security; incident reporting | Quiz + simulation |
| Beneficiary Rights | 1 hour | Access rights; correction rights; deletion rights; grievance mechanisms | Quiz |

**Role-Specific Training**

Additional training based on job function:

| Role | Additional Training | Duration |
|------|---------------------|----------|
| Registration Staff | Advanced consent facilitation; duress recognition; identity proofing | 8 hours |
| Case Managers | Protection data handling; compartmentalization; confidentiality | 6 hours |
| IT Staff | Technical security controls; access management; incident response | 16 hours |
| Managers | Policy implementation; staff accountability; audit response | 4 hours |
| Data Analysts | Privacy-preserving analysis; aggregation requirements; bias monitoring | 8 hours |

**Specialized Training**

For specific high-risk functions:

- System Administrators: Advanced security, key management, privileged access
- Data Protection Officers: Legal compliance, audit management, incident investigation
- Senior Leadership: Strategic oversight, regulatory engagement, accountability

#### Training Delivery

**Pre-Deployment Requirement**

Staff must complete foundation training before accessing beneficiary data:
- Minimum 90% completion rate for deployed teams
- No exceptions for "urgent operational need"
- Completion verified before system access granted

**Delivery Methods**

Training accessible through multiple modalities:
- In-person workshops (preferred for sensitive topics)
- E-learning modules (for scalability)
- Mobile-friendly micro-learning (for field accessibility)
- Peer-to-peer learning (for practical skills)
- Simulation exercises (for incident response)

**Language and Accessibility**

- Training available in all staff working languages
- Visual aids for complex concepts
- Accommodation for different learning styles
- Accessibility for staff with disabilities

#### Refresher and Continuous Learning

**Annual Refresher**
- Mandatory annual refresher for all staff (2 hours minimum)
- Updated content reflecting new threats, policy changes, lessons learned
- Re-certification for role-specific training

**Continuous Learning**
- Monthly security awareness communications
- Quarterly data dignity updates
- Incident debriefs (anonymized) for organizational learning
- Access to advanced training for professional development

#### Staff Capacity Assessment

*This section addresses the UNHCR CDO's concern: "Staff capacity is wildly underestimated. You can't deploy sophisticated consent systems to field staff who are already overwhelmed."*

**Realistic Capacity Assessment**

Before deploying data dignity systems:

- Assess current staff workload and capacity
- Identify training gaps and time required to close them
- Ensure adequate staffing levels for new procedures
- Plan for transition period with reduced productivity

**Simplified Job Aids**

Field staff need practical, simple tools:

- One-page consent facilitation guide
- Quick-reference cards for data classification
- Decision trees for common scenarios
- Scripts for consent conversations
- Visual aids for beneficiary communication

**Help Desk Support**

Staff must have access to support:

- Dedicated help desk for data dignity questions
- Response time standards (4 hours for urgent, 24 hours for routine)
- Escalation path for complex issues
- Knowledge base of common questions and answers

**Field-Based Champions**

Data dignity champions should be deployed in field locations, not just headquarters:

- At least one champion per major field location
- Champions have protected time for data dignity duties
- Champions serve as local resource and escalation point
- Regular convening of champions for knowledge sharing

### Data Dignity Champions

#### Role Definition

Data Dignity Champions are staff members who take on additional responsibility for promoting data dignity within their teams:

**Responsibilities**
- Serve as local resource for data dignity questions
- Monitor compliance within their area
- Escalate concerns to Data Protection Officer
- Facilitate local training and awareness
- Advocate for resources and attention to data dignity

**Selection Criteria**
- Respected by peers
- Strong understanding of data dignity principles
- Good communication skills
- Sufficient seniority to influence practices
- Willingness to challenge inappropriate behavior

**Support Provided**
- Initial champion training (16 hours)
- Quarterly champion convenings
- Access to DPO for guidance
- Recognition in performance reviews
- Protected time for champion duties (minimum 10% of role)

#### Champion Network

Champions form a network across the organization:

- Regular communication channels (online community, newsletter)
- Quarterly meetings (virtual or in-person)
- Annual champion conference
- Peer support for challenging situations
- Collective voice for systemic improvements

### Awareness Campaigns

#### Staff Awareness

Beyond formal training, ongoing awareness keeps data dignity top-of-mind:

**Regular Communications**
- Monthly data dignity newsletter
- Security awareness tips
- Success stories and lessons learned
- Policy updates and reminders

**Engagement Activities**
- Data Dignity Day (annual awareness event)
- Scenario discussions in team meetings
- Recognition for good practices
- Gamification of security awareness

**Visible Reminders**
- Posters in offices
- Desktop backgrounds with key messages
- Email signatures with data dignity commitment
- Intranet presence with resources

#### Beneficiary Education

Beneficiaries must understand their data rights to exercise them meaningfully:

**Community Awareness Sessions**

Regular sessions in communities served:

- What data is collected and why
- Rights to access, correct, and delete
- How to adjust consent
- How to raise concerns
- Available in local languages
- Facilitated by trusted community members where possible

**Age-Appropriate Education**

Tailored approaches for different ages:

| Age Group | Approach |
|-----------|----------|
| Children (5-12) | Simple concepts through games and stories |
| Adolescents (13-17) | Interactive sessions; digital literacy focus |
| Adults | Community sessions; one-on-one during registration |
| Elderly | Respectful, patient explanation; family involvement if appropriate |

**Materials Development**

Awareness materials in accessible formats:

- Visual explainers (minimal text)
- Audio recordings in local languages
- Video content for community viewing
- Simple printed materials for distribution
- Mobile-friendly digital content

**Youth Ambassador Programs**

Young people as data dignity advocates:

- Youth trained as peer educators
- Youth-to-youth awareness sessions
- Youth input into program design
- Leadership development opportunity

### Reporting Mechanisms

#### Internal Reporting

Staff must be able to report data dignity concerns safely:

**Reporting Channels**
- Direct to supervisor
- Direct to Data Protection Officer
- Anonymous hotline/online form
- Through Data Dignity Champion

**Protection for Reporters**
- No retaliation policy
- Anonymous reporting option
- Confidential investigation
- Feedback to reporter on outcome (if not anonymous)

**Response Standards**
- Acknowledgment within 48 hours
- Initial assessment within 7 days
- Resolution within 30 days (complex cases may take longer)
- Escalation for serious matters

#### Beneficiary Reporting

Beneficiaries must be able to raise concerns:

**Accessible Channels**
- In-person at service points
- Phone hotline (toll-free)
- Written submission (suggestion boxes)
- Through community leaders
- Through Data Stewards (see Section III.11)

**Language and Accessibility**
- All channels available in local languages
- Support for low-literacy users
- Accessible locations
- No requirement to identify (anonymous option)

**Response Commitment**
- All concerns acknowledged within 48 hours
- Investigation for substantive concerns
- Feedback to complainant (if identified)
- Aggregate reporting on concerns and resolutions

---

# PART IV: IMPLEMENTATION GUIDELINES

*This part provides practical guidance for organizations implementing data dignity principles. It addresses governance structures, technical standards, legal alignment, funding mechanisms, and integration with existing systems.*

---

## IV.1 Data Dignity Advisory Board and Governance

### Purpose

The Data Dignity Advisory Board provides strategic oversight for implementation of the manifesto, ensuring that principles are translated into effective practice across the humanitarian sector.

### Advisory Board Structure

#### Composition

The Advisory Board comprises diverse stakeholders:

| Seat Category | Number | Selection Method |
|---------------|--------|------------------|
| Humanitarian Organizations | 5 | Major humanitarian actors (UNHCR, ICRC, WFP, UNICEF, OCHA rotation) |
| Affected Communities | 4 | Elected through DAO community steward process |
| Technical Experts | 3 | Appointed based on expertise (security, privacy, identity) |
| Civil Society | 2 | Appointed by civil society coalition |
| Academic/Research | 2 | Appointed based on relevant research expertise |
| Government/Regulatory | 2 | Observer status (no vote to maintain independence) |

**Total voting members**: 16
**Quorum**: 11 members
**Chair**: Rotating annually among humanitarian organization seats

#### Terms and Accountability

- Terms: 3 years, renewable once
- Staggered terms for continuity
- Annual report to stakeholders
- Subject to recall by appointing constituency
- Conflict of interest disclosure required

### Advisory Board Responsibilities

**Strategic Oversight**
- Approve revisions to the manifesto
- Set priorities for implementation
- Monitor sector-wide adoption
- Advocate for resources and attention

**Standards Governance**
- Approve technical standards (on recommendation from technical bodies)
- Approve credential schemas
- Approve trust registry governance
- Approve certification criteria

**Dispute Resolution**
- Final appeal for certification disputes
- Resolution of cross-organizational conflicts
- Interpretation of manifesto provisions

**Coordination**
- Coordinate with existing humanitarian coordination mechanisms
- Engage with regulatory bodies
- Represent data dignity in global forums

### DAO Integration

The Advisory Board operates alongside the Data Dignity DAO (see Section III.11):

**Division of Responsibilities**

| Function | Advisory Board | DAO |
|----------|---------------|-----|
| Strategic direction | Primary | Input |
| Technical standards | Approval | Proposal and review |
| Individual consent enforcement | Oversight | Primary (smart contract) |
| Community representation | Seats reserved | Primary voice |
| Certification decisions | Final authority | Input |
| Day-to-day operations | Delegated | Operational |

**Interaction Mechanisms**
- DAO proposals escalated to Advisory Board quarterly
- Advisory Board decisions published for DAO review
- Joint sessions for major decisions
- DAO community stewards serve on Advisory Board

### Integration with Humanitarian Coordination

The Advisory Board respects existing humanitarian coordination structures:

**Relationship to Inter-Agency Standing Committee (IASC)**
- Advisory Board reports to IASC on data dignity matters
- Policy recommendations escalated to IASC for sector-wide adoption
- IASC representatives have observer status on Advisory Board

**Relationship to Humanitarian Country Teams (HCTs)**
- Advisory Board sets global standards
- HCTs adapt implementation to country context
- Advisory Board provides technical support to HCTs
- Country-level data dignity issues escalated to Advisory Board if unresolved

**Relationship to Cluster System**
- Technical standards developed in consultation with relevant clusters
- Cluster leads consulted on operational implications
- Cluster IM focal points trained on data dignity requirements

---

## IV.2 Blockchain for Transparency and Governance

### Purpose

Blockchain technology provides immutable audit trails, automated consent enforcement through smart contracts, and decentralized governance mechanisms. This section specifies how blockchain should be used—and critically, how it should not be used.

### Appropriate Use of Blockchain

Blockchain is appropriate for:

| Use Case | Why Blockchain Adds Value |
|----------|--------------------------|
| Consent audit trail | Immutable record that consent was given/modified/revoked |
| Credential status | Decentralized verification without contacting issuer |
| Governance voting | Transparent, tamper-evident voting records |
| Data sharing agreements | Immutable record of what was agreed |
| Compliance attestations | Verifiable proof of compliance claims |

Blockchain is NOT appropriate for:

| Anti-Pattern | Why to Avoid |
|--------------|--------------|
| Storing personal data | Immutability conflicts with right to erasure; privacy risk |
| Real-time operations | Latency too high for service delivery |
| Low-connectivity contexts | Requires synchronization infrastructure |
| High-volume transactions | Cost and scalability concerns |

### The Immutability Principle

**The right to erasure takes absolute precedence over blockchain immutability.**

This is achieved through architectural separation:

**On-Chain (Immutable)**
- Consent transaction hashes
- Consent status indicators (granted/revoked)
- Credential status (valid/revoked)
- Data sharing agreement hashes
- Audit event records

**Off-Chain (Deletable)**
- All personal data
- Consent form content
- Credential content
- Shared data content

When personal data is deleted off-chain:
- On-chain hash no longer corresponds to any data
- On-chain pointer leads nowhere
- Tombstone record added indicating deletion
- Practical effect is complete erasure

### Platform Specifications

#### Permissioned Ledger Requirement

Public blockchains (Bitcoin, Ethereum mainnet) are NOT suitable for humanitarian data dignity:

- Transaction costs unpredictable
- Governance by token holders, not humanitarian stakeholders
- Energy consumption concerns
- Regulatory uncertainty

Permissioned ledgers are required, with:

- Known, vetted node operators
- Governance by humanitarian consortium
- Predictable (ideally zero) transaction costs
- Lower energy consumption
- Clear regulatory status

#### Recommended Platforms

| Platform | Type | Suitable For | Considerations |
|----------|------|--------------|----------------|
| Hyperledger Fabric | Permissioned | Complex smart contracts, private channels | Mature, widely adopted |
| Hyperledger Besu | Permissioned/Public compatible | EVM compatibility desired | Growing adoption |
| Corda | Permissioned | Financial/legal use cases | Strong privacy features |

**Evaluation Criteria**
- Smart contract capability
- Privacy features (channels, private data)
- Scalability for humanitarian scale
- Governance flexibility
- Ecosystem maturity
- Hosting options

#### Ledger Governance

The permissioned ledger requires clear governance:

**Node Operators**
- Minimum 7 node operators for decentralization
- Geographically distributed
- Mix of humanitarian organizations and neutral parties
- Clear onboarding and offboarding procedures

**Consensus Mechanism**
- PBFT or similar for finality
- No proof-of-work (energy concerns)
- Fault tolerance for node failures

**Upgrade Procedures**
- Protocol upgrades require supermajority of operators
- Testing requirements before production deployment
- Rollback procedures for failed upgrades

### Smart Contract Specifications

Smart contracts automate consent enforcement:

#### Consent Contract

```
Contract: ConsentManager

Functions:
- grantConsent(subjectDID, tier, scope, duration) → consentHash
- modifyConsent(subjectDID, consentHash, newTier, newScope) → newConsentHash
- revokeConsent(subjectDID, consentHash) → tombstoneHash
- checkConsent(subjectDID, requesterDID, dataType) → boolean
- getConsentHistory(subjectDID) → consentEvents[]

Events:
- ConsentGranted(subjectDID, tier, timestamp)
- ConsentModified(subjectDID, oldTier, newTier, timestamp)
- ConsentRevoked(subjectDID, timestamp)

Access Control:
- Only subject can grant/modify/revoke their consent
- Any authorized party can check consent
- History viewable by subject and auditors
```

#### Credential Status Contract

```
Contract: CredentialRegistry

Functions:
- registerCredential(credentialHash, issuerDID, subjectDID, type) → registrationHash
- revokeCredential(credentialHash, issuerDID, reason) → revocationHash
- checkStatus(credentialHash) → {valid: boolean, revoked: boolean, revocationReason?: string}
- getCredentialsBySubject(subjectDID) → credentialHashes[]

Events:
- CredentialRegistered(credentialHash, issuerDID, type, timestamp)
- CredentialRevoked(credentialHash, issuerDID, reason, timestamp)

Access Control:
- Only authorized issuers can register credentials
- Only issuing authority can revoke
- Anyone can check status
```

### Zero-Knowledge Proofs on Blockchain

ZKPs enable privacy-preserving verification on-chain:

**Use Cases**
- Prove credential valid without revealing credential content
- Prove consent granted without revealing consent details
- Prove membership in authorized group without revealing identity

**Implementation**
- ZKP circuits deployed as part of smart contracts
- Verification on-chain, proof generation off-chain
- Circuit specifications in Appendix E

---

## IV.3 Technical Standards and Best Practices

### Standards Framework

Data dignity requires alignment with established technical standards. This section specifies mandatory standards, recommended standards, and humanitarian-specific extensions.

### Mandatory Standards

Organizations implementing data dignity MUST comply with:

#### Identity Standards

| Standard | Version | Scope | Requirement |
|----------|---------|-------|-------------|
| W3C DID Core | 1.0 | Decentralized identifiers | All DIDs must conform |
| W3C Verifiable Credentials | 1.1 | Credential format | All VCs must conform |
| W3C DID Resolution | 1.0 | DID resolution | Resolvers must conform |

#### Security Standards

| Standard | Version | Scope | Requirement |
|----------|---------|-------|-------------|
| ISO/IEC 27001 | 2022 | Information security management | Certification required for data controllers |
| ISO/IEC 27701 | 2019 | Privacy information management | Certification required for data controllers |
| NIST SP 800-63 | 3 | Digital identity guidelines | IAL/AAL/FAL mappings must conform |

#### Humanitarian Standards

| Standard | Version | Scope | Requirement |
|----------|---------|-------|-------------|
| OCHA Data Responsibility Guidelines | 2021 | Humanitarian data management | Full compliance required |
| UNHCR Data Protection Policy | 2018 | Refugee data protection | Compliance required for refugee data |
| Sphere Standards | 2018 | Humanitarian quality | Data practices must support Sphere compliance |

### Recommended Standards

Organizations SHOULD also consider:

| Standard | Scope | Recommendation |
|----------|-------|----------------|
| ISO 18013-5 | Mobile driving licenses / credentials | Reference for mobile credential implementation |
| NIST Cybersecurity Framework | Cybersecurity risk management | Framework for security program |
| CIS Controls | Security best practices | Technical control baseline |
| OWASP | Application security | Secure development practices |

### Humanitarian-Specific Extensions

Where existing standards are insufficient, humanitarian-specific extensions are defined:

#### Offline Capability Extensions

Standard identity protocols assume connectivity. Humanitarian extensions address offline scenarios:

- **Offline DID Resolution**: Cached DID documents with validity periods
- **Offline Credential Verification**: Cached revocation lists, degraded-mode verification
- **Offline Consent Capture**: Local consent recording with sync protocol

See Appendix A (Offline-First Architecture) for detailed specifications.

#### Low-Literacy Extensions

Standard consent flows assume literacy. Humanitarian extensions provide:

- **Visual Consent Protocol**: Icon-based consent with standardized meanings
- **Audio Consent Protocol**: Recorded consent explanations with verbal confirmation
- **Assisted Consent Protocol**: Staff-facilitated consent with safeguards

See Section III.3 (Consent UX Requirements) for detailed specifications.

### Interoperability Testing

#### Purpose

Interoperability testing ensures that systems from different organizations can exchange credentials, verify consent, and share data according to data dignity principles.

#### Pre-Certification Requirements

Before receiving data dignity certification, systems must demonstrate:

| Requirement | Test Method | Pass Criteria |
|-------------|-------------|---------------|
| Credential issuance | Issue test credentials to certified test wallet | Credentials verifiable by 3+ other certified systems |
| Credential verification | Verify test credentials from 3+ issuers | All valid credentials accepted, all invalid rejected |
| Consent propagation | Consent change in test scenario | Change reflected in partner systems within SLA |
| Revocation propagation | Revoke test credential | Revocation detected by verifiers within SLA |
| Offline operation | 7-day offline simulation | System functions within degraded-mode specifications |

#### Test Environment

A shared test environment enables interoperability testing:

- Hosted by neutral party (Data Dignity Advisory Board secretariat)
- Test DIDs, credentials, and consent records available
- Automated testing tools
- Human-reviewed certification for edge cases

#### Certification Maintenance

Interoperability certification must be maintained:

- Annual re-testing required
- Re-testing triggered by major system changes
- Breaking changes must be notified 90 days in advance
- Grace period for compliance after standard updates

### Deployment Models

#### Decision Framework

Organizations must select appropriate deployment models based on their context:

**Assessment Questions**

1. **Data Sovereignty**: Are there legal or policy requirements for data location?
   - If yes: On-premise or humanitarian private cloud required
   - If no: Cloud options available

2. **Connectivity**: What is typical connectivity in operating locations?
   - Reliable: Cloud-first viable
   - Intermittent: Hybrid with edge caching
   - Minimal: Edge-first required

3. **IT Capacity**: What is organizational IT capability?
   - High: Self-hosted options feasible
   - Medium: Managed services recommended
   - Low: Fully managed required

4. **Data Sensitivity**: What classification level is typical?
   - Level 4 (Critical): Confidential computing required
   - Level 3 (Sensitive): Encryption mandatory, cloud possible with controls
   - Level 2 (Internal): Standard cloud acceptable

#### Deployment Options

**Public Cloud**

Using major cloud providers (AWS, Azure, GCP):

- *Suitable for*: Non-sensitive workloads, organizations without IT capacity
- *Requirements*: Encryption with organization-controlled keys, contractual protections
- *Considerations*: Data sovereignty, cost at scale, provider lock-in

**Humanitarian Private Cloud**

Cloud infrastructure operated by/for humanitarian sector:

- *Suitable for*: Sensitive data, regulatory requirements
- *Examples*: UNHCR cloud, WFP infrastructure, humanitarian hosting consortia
- *Requirements*: Compliance with humanitarian data protection policies
- *Considerations*: Limited capacity, cost sharing models

**Federated**

Each organization hosts own infrastructure:

- *Suitable for*: Large organizations with IT capacity
- *Requirements*: Interoperability compliance, security certification
- *Considerations*: Higher cost, more control, interoperability complexity

**Hybrid**

Combination of above:

- *Suitable for*: Most realistic for diverse humanitarian ecosystem
- *Example*: Sensitive data on-premise, analytics in cloud, shared services federated
- *Requirements*: Clear data classification and routing
- *Considerations*: Complexity, multiple security perimeters

**Edge-First**

Local processing with periodic synchronization:

- *Suitable for*: Field operations, low-connectivity contexts
- *Requirements*: Offline-capable systems, robust sync protocols
- *Considerations*: Limited compute, data consistency challenges

---

## IV.4 Integration with Legal Frameworks

### Regulatory Alignment

Data dignity principles must be implemented in compliance with applicable legal frameworks. This section provides guidance on alignment with major regulatory regimes.

#### GDPR Alignment

The EU General Data Protection Regulation provides the most comprehensive data protection framework globally. Data dignity principles are designed to meet or exceed GDPR requirements:

| GDPR Requirement | Data Dignity Implementation |
|------------------|---------------------------|
| Lawful basis (Art. 6) | Consent as primary basis; legitimate interests for essential services |
| Consent requirements (Art. 7) | Tiered consent model exceeds GDPR specificity requirements |
| Special categories (Art. 9) | Level 4 classification for sensitive data; explicit consent required |
| Data subject rights (Arts. 15-22) | Full implementation via personal data dashboard |
| Data protection by design (Art. 25) | Core manifesto principle |
| Security (Art. 32) | Threat model and technical controls exceed typical implementation |
| International transfers (Art. 46) | Jurisdictional controls; standard contractual clauses where needed |
| DPO requirement (Art. 37) | Required for all data controllers |

**GDPR Compliance Checklist**

Organizations operating in EU or processing EU resident data should verify:

- [ ] Data protection impact assessment completed
- [ ] DPO appointed and registered
- [ ] Privacy notices meet transparency requirements
- [ ] Consent mechanisms meet validity requirements
- [ ] Data subject rights processes implemented
- [ ] Security measures documented and tested
- [ ] International transfer mechanisms in place
- [ ] Breach notification procedures established
- [ ] Records of processing maintained

#### Other Regulatory Frameworks

**CCPA/CPRA (California)**

- Consumer rights largely parallel data subject rights
- "Do not sell" right addressed by consent model
- Additional disclosure requirements met by transparency mechanisms

**LGPD (Brazil)**

- Similar structure to GDPR
- Additional requirements for data localization addressed by deployment model
- DPO equivalent required

**POPIA (South Africa)**

- Eight conditions for lawful processing aligned with manifesto principles
- Information regulator notification requirements

**Country-Specific Considerations**

Organizations should conduct legal review for each operating country, considering:

- Data localization requirements
- Government access provisions
- Cross-border transfer restrictions
- Sector-specific regulations (health, financial)
- Conflict with humanitarian principles

#### International Humanitarian Law

Data protection in armed conflict contexts must consider IHL:

**Fundamental Principles**
- Humanity: Data practices must not cause unnecessary suffering
- Distinction: Data must not be used to target civilians
- Proportionality: Data collection must be proportionate to humanitarian need
- Precaution: Measures must be taken to minimize data-related harm

**ICRC Professional Standards**
- Data practices must support ICRC mandate
- Confidentiality protections for ICRC operations
- Cross-line operations require compartmentalization

**Humanitarian Privileges**
- Data may be protected from disclosure under humanitarian privileges
- Legal review required before any government disclosure
- Advocacy for recognition of humanitarian data protection

---

## IV.5 Industry Incentives and Funding

### Incentive Mechanisms

Adoption of data dignity principles requires incentives beyond moral commitment:

#### Certification Program

The Data Dignity Certification Program recognizes organizations meeting manifesto standards:

**Certification Levels**

| Level | Requirements | Benefits |
|-------|--------------|----------|
| **Committed** | Signed manifesto; implementation plan approved | Listed as committed organization; access to resources |
| **Implementing** | Core systems compliant; staff trained | Use of "Implementing" mark; priority for pilots |
| **Certified** | Full compliance verified by audit | Use of "Certified" mark; eligibility for funding |
| **Exemplary** | Exceeds requirements; contributes to ecosystem | Featured recognition; speaking opportunities |

**Certification Process**
1. Self-assessment against certification criteria
2. Gap analysis and remediation plan
3. Third-party audit
4. Certification decision by Advisory Board
5. Annual re-certification

**Certification Criteria**

Detailed criteria in Part V (Metrics and Compliance).

#### Funding Mechanisms

**Dedicated Funding Streams**

Advocacy for data dignity funding:

- Dedicated allocation in humanitarian appeals
- Donor consortium for data dignity infrastructure
- Innovation funding for data dignity technology
- Capacity building funding for implementation

**Grant Programs**

Grants for data dignity implementation:

- Implementation grants: Support organizations achieving certification
- Innovation grants: Fund development of data dignity tools
- Research grants: Support academic research on data dignity
- Community grants: Fund affected community participation

**Cost Sharing**

Shared infrastructure reduces per-organization costs:

- Shared trust registry infrastructure
- Shared certification audit pools
- Shared training resources
- Shared technology platforms

#### Public-Private Partnerships

Engagement with private sector:

**Technology Partnerships**
- Cloud providers offering humanitarian pricing
- Identity technology providers contributing expertise
- Security firms providing pro-bono assessments

**Corporate Sponsors**
- Corporate funding for data dignity infrastructure
- Employee volunteer programs
- Technology donations

**Social Enterprise Models**
- Data dignity services provided on sustainable basis
- Revenue from certification reinvested in ecosystem

---

## IV.6 Legislative and Policy Advocacy

### Advocacy Agenda

Data dignity requires supportive legal and policy environment:

#### Priority Advocacy Areas

**Recognition of Humanitarian Data Protection**
- Legal recognition of humanitarian data as specially protected
- Exemptions from government access demands for humanitarian data
- Cross-border data transfer facilitation for humanitarian purposes

**Data Dignity Rights**
- Legal recognition of data dignity as human right
- Enforceable consent requirements
- Right to data portability across organizations
- Right to meaningful explanation of algorithmic decisions

**Accountability Mechanisms**
- Legal liability for data dignity violations
- Collective redress mechanisms
- Regulatory oversight of humanitarian data practices

**Technology Governance**
- Legal frameworks for decentralized identity
- Recognition of DAO governance structures
- Standards for privacy-preserving technologies

#### Advocacy Methods

**Policy Engagement**
- Participation in regulatory consultations
- Submission of position papers
- Expert testimony to legislative bodies
- Engagement with data protection authorities

**Coalition Building**
- Alliance with digital rights organizations
- Coalition with humanitarian organizations
- Academic partnerships for evidence base
- Private sector engagement

**Public Awareness**
- Public campaigns on data dignity
- Media engagement
- Publication of research and reports
- Community education

---

## IV.7 Legal Considerations for Blockchain and DAOs

### Blockchain Legal Issues

#### Data Protection on Blockchain

**Right to Erasure**
- Architectural separation ensures erasure possible
- Legal analysis confirms off-chain deletion satisfies erasure requirements
- On-chain tombstones provide evidence of erasure

**Data Controller Responsibilities**
- Node operators may be joint controllers
- Governance agreements specify controller responsibilities
- DPO oversight of blockchain operations

**Cross-Border Data Flows**
- Distributed ledger inherently cross-border
- Node placement considers data protection jurisdictions
- Standard contractual clauses between node operators

#### Smart Contract Legal Status

**Contract Formation**
- Smart contracts can implement legal agreements
- Off-chain agreement required for legal enforceability
- Smart contract as execution mechanism, not replacement for legal agreement

**Liability**
- Liability for smart contract errors addressed in governance agreements
- Insurance requirements for critical smart contracts
- Audit requirements before deployment

### DAO Legal Status

#### Legal Entity Options

DAOs require legal structure for accountability:

| Option | Jurisdiction | Characteristics |
|--------|--------------|-----------------|
| Foundation | Switzerland, Netherlands | Established framework; board governance |
| Nonprofit Association | Various | Flexible; member governance |
| DAO LLC | Wyoming, Marshall Islands | Emerging framework; limited adoption |
| Unincorporated Association | UK, others | Simple; limited liability protection |

**Recommended Approach**
- Swiss foundation as primary legal entity
- DAO smart contracts as operational layer
- Foundation board includes DAO-elected representatives
- Clear mapping between DAO governance and legal requirements

#### Regulatory Compliance

**Financial Regulations**
- DAO treasury management must comply with financial regulations
- No token sales (avoids securities issues)
- Transparent financial reporting

**Data Protection**
- DAO as data controller for any personal data processed
- DPO appointed
- GDPR compliance (if EU nexus)

**Tax Status**
- Nonprofit/charitable status where possible
- Transparent tax reporting
- Compliance with anti-money laundering requirements

---

## IV.8 Regulatory Body Collaboration

### Engagement Strategy

Data dignity implementation benefits from regulatory collaboration:

#### Data Protection Authorities

**European Data Protection Board (EDPB)**
- Engagement on humanitarian data protection guidance
- Input on international transfer mechanisms
- Participation in sandbox programs

**National DPAs**
- Country-specific guidance requests
- Notification and registration where required
- Incident reporting relationships
- Consultation on novel technologies

#### Humanitarian Coordination Bodies

**OCHA**
- Alignment with Data Responsibility Guidelines
- Integration with humanitarian coordination mechanisms
- Information management community engagement

**UNHCR**
- Data protection policy alignment
- PRIMES integration pathway
- Refugee data standards coordination

**ICRC**
- Conflict context guidance
- Cross-line operations standards
- Professional standards alignment

#### Standards Bodies

**W3C**
- Participation in DID and VC working groups
- Contribution of humanitarian requirements
- Feedback on standard development

**ISO**
- Participation in relevant technical committees
- Contribution of humanitarian perspective
- Adoption of relevant ISO standards

**NIST**
- Alignment with digital identity guidelines
- Cybersecurity framework adoption
- Feedback on humanitarian applicability

---

## IV.9 Escalation and Penalty Structures

### Compliance Framework

Data dignity requires accountability mechanisms with meaningful consequences:

#### Violation Categories

| Category | Description | Examples |
|----------|-------------|----------|
| **Minor** | Procedural violations without harm | Late training completion; documentation gaps |
| **Moderate** | Violations creating risk of harm | Consent process errors; security control gaps |
| **Serious** | Violations causing actual harm | Data breach affecting individuals; consent violations |
| **Severe** | Deliberate violations or serious harm | Intentional data misuse; repeated serious violations |

#### Response Framework

**Minor Violations**
- Notification and corrective action plan
- Timeline for remediation (30 days)
- Follow-up verification
- No public disclosure

**Moderate Violations**
- Formal warning
- Mandatory corrective action (60 days)
- Enhanced monitoring
- Potential certification impact

**Serious Violations**
- Investigation by independent party
- Mandatory remediation plan
- Certification suspension pending remediation
- Potential public disclosure
- Notification to affected individuals

**Severe Violations**
- Immediate certification revocation
- Public disclosure
- Referral to regulatory authorities
- Exclusion from data dignity ecosystem
- Potential legal action

#### Appeals Process

Organizations subject to sanctions may appeal:

1. Internal review by different staff
2. Appeal to Advisory Board
3. Independent arbitration (binding)

---

## IV.10 Individual Grievance Mechanisms

### Grievance Framework

Individuals whose data dignity rights are violated must have accessible redress:

#### Complaint Channels

**Organizational Level**
- Complaint to data-holding organization
- DPO as primary contact
- Multiple channels (in-person, phone, written, digital)
- Response within 14 days

**Sector Level**
- Complaint to Data Dignity Advisory Board
- For unresolved organizational complaints
- For systemic issues
- Response within 30 days

**Regulatory Level**
- Complaint to data protection authority
- For serious violations
- For legal enforcement
- Timelines per regulatory framework

#### Complaint Handling Standards

| Standard | Requirement |
|----------|-------------|
| Accessibility | Available in local languages; multiple channels; no literacy requirement |
| Acknowledgment | Within 48 hours |
| Investigation | Conducted impartially; complainant informed of process |
| Resolution | Substantive response within timeline; explanation of outcome |
| Appeal | Right to appeal adverse decisions |
| Confidentiality | Complainant identity protected unless disclosure necessary |
| Non-retaliation | No adverse action against complainants |

#### Remedies

Available remedies for valid complaints:

| Remedy | When Appropriate |
|--------|------------------|
| Correction | Data errors |
| Deletion | Unauthorized data retention |
| Consent reset | Consent violations |
| Apology | Any violation |
| Process change | Systemic issues |
| Compensation | Documented harm (exceptional) |
| Disciplinary action | Staff misconduct |

#### Collective Complaints

Beyond individual complaints, communities can raise collective concerns:

- Through Data Stewards
- Through community organizations
- Through Advisory Board affected community seats
- Response includes systemic review and action

---

# PART V: METRICS AND COMPLIANCE REPORTING

*This part establishes the measurement framework for data dignity implementation. Metrics enable organizations to track progress, identify gaps, and demonstrate accountability. Standardized reporting ensures comparability across the sector.*

---

## V.1 Key Metrics Framework

### Purpose

Metrics transform abstract principles into measurable outcomes. Without measurement, data dignity remains aspirational rather than operational.

### Core Metrics

#### Consent Metrics

| Metric | Definition | Target | Measurement Method |
|--------|------------|--------|-------------------|
| **Consent Completion Rate** | % of eligible individuals with valid consent records | >95% | System audit |
| **Consent Comprehension Rate** | % of tested individuals demonstrating understanding | >80% | Sample surveys |
| **Consent Modification Rate** | % of individuals who modify consent after initial grant | Track (no target) | System data |
| **Consent UX Completion Time** | Average time to complete consent process | <10 minutes | System timing |
| **Decide Later Resolution Rate** | % of "decide later" selections resolved within 30 days | >90% | System audit |

#### Data Protection Metrics

| Metric | Definition | Target | Measurement Method |
|--------|------------|--------|-------------------|
| **Encryption Coverage** | % of sensitive data encrypted at rest | 100% | Technical audit |
| **Access Control Compliance** | % of access requests properly authorized | >99% | Log analysis |
| **Data Minimization Score** | Data elements collected vs. required | <110% of minimum | Data audit |
| **Retention Compliance** | % of data deleted within retention period | >99% | System audit |
| **Breach Incidents** | Number of data breaches per year | 0 target | Incident reports |

#### Operational Metrics

| Metric | Definition | Target | Measurement Method |
|--------|------------|--------|-------------------|
| **Offline Resilience** | Days system can operate without connectivity | >14 days | Testing |
| **Emergency Override Frequency** | Emergency overrides per 1000 service events | <1 | System data |
| **Override Reconciliation Rate** | % of overrides reconciled within SLA | >95% | Audit |
| **System Availability** | Uptime for consent/credential systems | >99.5% | Monitoring |
| **Grievance Resolution Time** | Average days to resolve complaints | <14 days | Tracking system |

#### Staff Metrics

| Metric | Definition | Target | Measurement Method |
|--------|------------|--------|-------------------|
| **Training Completion Rate** | % of staff completing required training | >90% | Training system |
| **Refresher Compliance** | % of staff current on annual refresher | >85% | Training system |
| **Incident Reporting Rate** | Staff-reported incidents per quarter | Track (increase is positive) | Incident system |
| **Champion Coverage** | % of locations with active Data Dignity Champion | 100% | Organization data |

#### Community Engagement Metrics

| Metric | Definition | Target | Measurement Method |
|--------|------------|--------|-------------------|
| **DAO Participation Rate** | % of eligible community members participating | >20% | DAO data |
| **Data Steward Coverage** | Population per elected Data Steward | <5000:1 | DAO records |
| **Community Awareness** | % of surveyed beneficiaries aware of data rights | >70% | Sample surveys |
| **Grievance Submission Rate** | Grievances per 1000 beneficiaries per year | Track (moderate rate positive) | Tracking system |

### Humanitarian-Specific Metrics

Beyond standard data protection metrics, humanitarian contexts require:

**Duress Detection Metrics**
- Duress flag rate: % of consent events flagged for potential duress
- Follow-up completion rate: % of flagged events with follow-up
- Consent modification after follow-up: Rate of consent changes after private re-consent

**Aid Conditionality Metrics**
- Service access correlation: Statistical correlation between consent level and service access (should be zero for essential services)
- Conditional aid complaints: Complaints about aid being conditional on consent
- Tier 0 service rate: % of individuals accessing only Tier 0 services

**Conflict Context Metrics**
- Compartmentalization compliance: % of cross-compartment access properly authorized
- Data destruction readiness: Time to execute emergency data destruction
- Physical security incidents: Device seizures, facility intrusions

### Measurement Frequency

| Metric Category | Frequency | Responsible Party |
|-----------------|-----------|-------------------|
| Consent metrics | Monthly | DPO |
| Data protection metrics | Quarterly | IT Security |
| Operational metrics | Monthly | Operations |
| Staff metrics | Quarterly | HR |
| Community engagement | Semi-annually | Community liaison |

---

## V.2 Annual Data Dignity Report

### Purpose

The Annual Data Dignity Report provides comprehensive accountability to stakeholders, demonstrating progress, acknowledging challenges, and committing to improvements.

### Report Structure

**Executive Summary**
- Overall data dignity score
- Key achievements
- Significant challenges
- Priority commitments for coming year

**Metrics Dashboard**
- All core metrics with trend analysis
- Comparison to targets
- Comparison to prior year
- Benchmarking against sector (where available)

**Compliance Status**
- Certification status and audit findings
- Remediation progress on prior findings
- New compliance initiatives
- Regulatory engagement

**Incidents and Response**
- Summary of data protection incidents (anonymized)
- Response actions taken
- Lessons learned
- Prevention measures implemented

**Community Voice**
- Summary of community feedback
- Grievance statistics and resolution
- DAO activities and decisions
- Data Steward reports

**Technology and Infrastructure**
- System updates and improvements
- Security enhancements
- Interoperability progress
- Innovation initiatives

**Training and Culture**
- Training completion statistics
- Awareness campaign activities
- Champion network activities
- Staff feedback

**Looking Forward**
- Priorities for coming year
- Resource requirements
- Planned improvements
- Commitments

### Publication and Distribution

- Published within 90 days of year end
- Available in multiple languages
- Accessible formats (including audio summary)
- Presented at community meetings
- Submitted to Advisory Board

---

## V.3 Public Accountability and Oversight

### Community Oversight

**Oversight Board Composition**
- Majority affected community members
- Includes Data Steward representatives
- Independent experts
- Civil society representatives

**Oversight Responsibilities**
- Review annual reports
- Commission independent audits
- Hear community concerns
- Make recommendations to management

**Accountability Mechanisms**
- Public meetings (at least quarterly)
- Published meeting minutes
- Response required to recommendations
- Escalation to Advisory Board if concerns unaddressed

### Independent Audit Program

**Audit Types**

| Audit Type | Frequency | Scope | Auditor |
|------------|-----------|-------|---------|
| Compliance audit | Annual | Full manifesto requirements | Accredited auditor |
| Technical security audit | Annual | Security controls and architecture | Security firm |
| Privacy audit | Biennial | Privacy practices and data flows | Privacy specialist |
| Community experience audit | Annual | Beneficiary perspective on data dignity | Community-based auditors |

**Auditor Qualifications**
- Independence from audited organization
- Relevant certifications (ISO 27001 Lead Auditor, CIPP, etc.)
- Humanitarian sector experience preferred
- Training on data dignity manifesto requirements

**Audit Transparency**
- Audit findings published (with appropriate redactions)
- Remediation plans published
- Progress updates on remediation
- Audit history maintained

---

## V.4 Data Dignity Certification

### Certification Framework

#### Scoring Criteria

| Domain | Weight | Key Criteria |
|--------|--------|--------------|
| **Consent Management** | 20% | Tiered consent implemented; UX tested; modification accessible |
| **Data Protection** | 20% | Encryption; access control; minimization; retention compliance |
| **Security** | 15% | Threat model; controls implemented; incident response |
| **Identity** | 15% | Proofing protocol; key recovery; credential lifecycle |
| **Governance** | 10% | Advisory board; DAO integration; community representation |
| **Transparency** | 10% | Algorithmic transparency; audit trails; public reporting |
| **Training & Culture** | 10% | Staff training; champions; awareness |

#### Certification Levels

| Level | Score Required | Additional Requirements |
|-------|---------------|------------------------|
| **Committed** | N/A | Signed manifesto; implementation plan |
| **Implementing** | >50% | Core systems in progress |
| **Certified** | >75% | All mandatory requirements met |
| **Exemplary** | >90% | Exceeds requirements; ecosystem contribution |

#### Certification Process

1. **Self-Assessment**: Organization completes self-assessment against criteria
2. **Gap Analysis**: Identify gaps and develop remediation plan
3. **Implementation**: Close gaps per remediation plan
4. **Evidence Submission**: Submit documentation of compliance
5. **Audit**: Third-party audit of compliance
6. **Decision**: Advisory Board certification decision
7. **Maintenance**: Annual re-certification

---

# PART VI: ENFORCEMENT AND ACCOUNTABILITY

*This part establishes the enforcement mechanisms that give data dignity principles teeth. Without meaningful accountability, even well-intentioned principles can be ignored.*

---

## VI.1 Multi-Tiered Enforcement

### Enforcement Philosophy

Enforcement should be:
- **Proportionate**: Responses match severity of violation
- **Corrective**: Primary goal is remediation, not punishment
- **Transparent**: Process and outcomes are visible
- **Fair**: Due process and appeal rights protected
- **Effective**: Actually changes behavior

### Enforcement Tiers

#### Tier 1: Self-Reporting and Correction

**Mechanism**: Organizations identify and correct violations through internal monitoring

**Process**:
- Internal audit identifies issue
- Corrective action implemented
- Self-report to DPO
- Documentation of correction

**Consequences**: None if corrected promptly and properly documented

**Incentive**: Self-reporting demonstrates mature data dignity culture

#### Tier 2: External Monitoring and Guidance

**Mechanism**: External parties identify issues through monitoring or complaints

**Process**:
- Issue identified through audit, complaint, or monitoring
- Organization notified
- Corrective action required within defined timeline
- Follow-up verification

**Consequences**: Required remediation; notation in certification record

**Escalation Trigger**: Failure to remediate within timeline

#### Tier 3: Formal Investigation

**Mechanism**: Serious allegations or repeated issues trigger formal investigation

**Process**:
- Investigation authorized by DPO or Advisory Board
- Independent investigator appointed
- Evidence gathered
- Findings and recommendations issued
- Organization response required

**Consequences**: May include certification suspension; public disclosure; required remediation

**Escalation Trigger**: Findings of deliberate violation or serious harm

#### Tier 4: Sanctions

**Mechanism**: Serious violations result in meaningful sanctions

**Process**:
- Advisory Board review of investigation findings
- Hearing for accused organization
- Sanction decision
- Appeal available

**Available Sanctions**:
- Certification revocation
- Public disclosure of violations
- Exclusion from data sharing ecosystem
- Referral to regulatory authorities
- Requirement for external monitor

### Automated Compliance Monitoring

Technology enables continuous compliance monitoring:

**System Monitoring**
- Automated checks of encryption, access control, retention
- Alerts for policy violations
- Dashboard for compliance status

**Anomaly Detection**
- Unusual data access patterns
- Consent manipulation indicators
- Security anomalies

**Reporting**
- Automated compliance reports
- Trend analysis
- Early warning indicators

---

## VI.2 Third-Party Audits

### Audit Program

#### Audit Requirements

| Organization Type | Audit Frequency | Audit Scope |
|------------------|-----------------|-------------|
| Major data controllers (>100k records) | Annual | Full compliance |
| Medium data controllers (10k-100k records) | Biennial | Full compliance |
| Small data controllers (<10k records) | Triennial or self-assessment | Core requirements |
| Certified organizations | Annual | Certification maintenance |

#### Auditor Accreditation

Auditors must be accredited by the Advisory Board:

**Accreditation Requirements**
- Organizational independence from auditees
- Relevant professional certifications
- Demonstrated humanitarian sector expertise
- Completion of data dignity auditor training
- Ongoing professional development

**Auditor Registry**
- Public list of accredited auditors
- Auditor performance tracking
- Complaints mechanism for audit quality

### Audit Methodology

#### Pre-Audit

- Scope agreement
- Documentation request
- Pre-audit questionnaire
- Audit plan

#### On-Site Audit

- Document review
- System testing
- Staff interviews
- Beneficiary interviews (where feasible)
- Observation of processes

#### Audit Report

- Findings against each requirement
- Severity classification
- Evidence references
- Recommendations
- Management response

### Privacy-Preserving Audits

Audits must not themselves create privacy risks:

- Auditors bound by confidentiality
- Beneficiary data accessed only when necessary
- Anonymized/aggregated data preferred
- Audit records secured
- Data destroyed after retention period

---

# PART VII: ADOPTION AND EVOLUTION

*This part addresses how the manifesto is adopted by organizations and how it evolves over time to address new challenges.*

---

## VII.1 Invitation to Join

### Signatory Program

Organizations commit to data dignity by becoming signatories:

#### Signatory Categories

| Category | Requirements | Benefits |
|----------|--------------|----------|
| **Humanitarian Organizations** | Commitment to implement; timeline for certification | Full participation in governance; access to shared resources |
| **Technology Partners** | Products meet data dignity requirements | Listing as approved technology; co-development opportunities |
| **Academic/Research** | Research supports data dignity; ethical research practices | Access to data for research; collaboration opportunities |
| **Civil Society** | Advocacy for data dignity; community representation | Participation in governance; community liaison role |
| **Government/Regulatory** | Supportive policy environment | Observer status; input on standards |

#### Becoming a Signatory

1. **Review**: Review manifesto and assess fit
2. **Commit**: Sign commitment statement
3. **Plan**: Develop implementation plan
4. **Submit**: Submit plan to Advisory Board
5. **Onboard**: Complete onboarding process
6. **Implement**: Execute implementation plan
7. **Certify**: Achieve certification

### Outreach and Advocacy

**Sector Engagement**
- Presentations at humanitarian coordination forums
- Integration with cluster IM coordination
- Engagement with major humanitarian organizations

**Technology Community**
- Engagement with identity and privacy technology communities
- Participation in standards bodies
- Open source contributions

**Policy Community**
- Engagement with data protection authorities
- Advocacy with governments
- Input to regulatory development

---

## VII.2 Pilot Projects and Research

### Mandatory Pilots

Before full deployment, certain capabilities require piloting:

#### Offline Functionality Pilot

**Requirement**: System must be piloted in genuine low-connectivity humanitarian setting

**Specifications**:
- Location: Active humanitarian operation with <50% connectivity reliability
- Duration: Minimum 30 days
- Scale: >1000 beneficiaries
- Success criteria: System operates without degradation for 14+ consecutive days offline

#### Consent UX Pilot

**Requirement**: Consent interface must be tested with target population

**Specifications**:
- Population: Actual refugees/affected persons (not proxies)
- Diversity: Multiple literacy levels, ages, digital familiarity
- Conditions: Realistic registration/service delivery settings
- Success criteria: >80% comprehension; >90% completion rate; positive user feedback

#### Integration Pilot

**Requirement**: Integration with existing systems must be piloted

**Specifications**:
- Systems: At least one major humanitarian system (PRIMES, SCOPE, etc.)
- Duration: 90 days
- Scale: Meaningful data exchange
- Success criteria: Successful bidirectional data flow with consent enforcement

### Research Partnerships

**Priority Research Areas**
- Privacy-preserving technologies for humanitarian contexts
- Consent comprehension and decision-making
- Community governance models
- Offline-first architectures
- Biometric protection
- Algorithmic fairness in humanitarian decisions

**Research Ethics**
- All research involving beneficiaries requires ethics review
- Informed consent for research participation
- Privacy protections for research data
- Community benefit from research

**Knowledge Sharing**
- Open publication of research findings
- Practitioner-accessible summaries
- Integration of findings into manifesto updates

---

## VII.3 Community Engagement

### Ongoing Engagement

Data dignity requires continuous community engagement, not just initial consultation:

**Online Platforms**
- Community forum for ongoing discussion
- Knowledge base of resources
- Q&A platform

**Regular Convenings**
- Annual Data Dignity Conference
- Regional workshops
- Thematic working groups

**Feedback Mechanisms**
- Continuous feedback collection
- Regular surveys
- Focus groups for major changes

---

## VII.4 Global Adoption

### International Strategy

**Multi-Level Engagement**

| Level | Focus | Activities |
|-------|-------|------------|
| Global | Standards and principles | IASC engagement; UN system adoption |
| Regional | Regional adaptation | Regional coordinator engagement; regional convenings |
| National | Country implementation | HCT engagement; government dialogue |
| Local | Community implementation | Community engagement; local adaptation |

**Regional Adaptation**

The manifesto provides global principles; regional adaptation addresses:

- Local legal requirements
- Cultural considerations
- Language accessibility
- Regional infrastructure
- Local partnerships

**Cross-Border Coordination**

Refugee movements cross borders; data dignity must too:

- Harmonized standards enable data portability
- Cross-border data sharing agreements
- Regional trust registry federation
- Coordination with national data protection authorities

---

## VII.5 Continuous Evolution

### Update Process

The manifesto is a living document:

**Scheduled Reviews**
- Annual review of all sections
- Quarterly review of technical appendices
- Immediate review upon significant developments

**Change Categories**

| Category | Process | Approval |
|----------|---------|----------|
| Editorial (typos, clarifications) | DPO review | DPO approval |
| Technical (specifications, parameters) | Technical committee review | Advisory Board approval |
| Substantive (principles, requirements) | Full community consultation | Advisory Board supermajority |
| Fundamental (core principles) | Extended consultation; community vote | Advisory Board + DAO supermajority |

**Version Management**
- Semantic versioning (major.minor.patch)
- Changelog maintained
- Previous versions archived
- Transition periods for breaking changes

### Emerging Technology Monitoring

**Monitoring Areas**
- Privacy-enhancing technologies
- Identity technologies
- Artificial intelligence
- Quantum computing
- Blockchain/distributed ledger

**Response Process**
1. Technology watch identifies relevant development
2. Assessment of implications for data dignity
3. Working group convened if significant
4. Guidance or manifesto update as needed

---

# PART VIII: CONCLUSION

## VIII.1 Call to Action

This manifesto represents a commitment to a future where data empowers rather than exploits, where individuals control their digital identities, and where humanitarian organizations are trusted stewards of the most sensitive information.

The journey ahead is challenging. The humanitarian sector operates in some of the world's most difficult environments, with limited resources, competing priorities, and complex constraints. Data dignity adds another layer of requirements to already demanding operations.

But the alternative—continuing with data practices that expose vulnerable individuals to harm—is not acceptable. The examples of data misuse that motivated this manifesto are not hypothetical; they have caused real harm to real people. We have an obligation to do better.

### What We Ask

**Of Humanitarian Organizations**:
- Sign the manifesto and commit to implementation
- Allocate resources for data dignity
- Prioritize data dignity in system design
- Train staff and build culture
- Engage affected communities

**Of Technology Providers**:
- Build data dignity into products
- Support interoperability standards
- Contribute expertise and resources
- Respect humanitarian principles

**Of Donors and Funders**:
- Fund data dignity implementation
- Include data dignity in funding requirements
- Support shared infrastructure
- Recognize long-term investment needed

**Of Governments and Regulators**:
- Recognize humanitarian data protection
- Support cross-border data portability
- Engage constructively with humanitarian sector
- Protect humanitarian data from misuse

**Of Affected Communities**:
- Engage in governance structures
- Provide feedback on data dignity implementation
- Hold organizations accountable
- Advocate for your data rights

**Of All Signatories**:
- Honor your commitments
- Share lessons learned
- Support others in implementation
- Evolve the manifesto together

### Our Commitment

As stewards of this manifesto, we commit to:

- Maintaining this as a living document responsive to changing needs
- Supporting organizations in implementation
- Building shared infrastructure
- Advocating for supportive policies
- Centering affected communities in governance
- Being honest about what we can and cannot achieve
- Continuously improving based on experience

### The Vision

We envision a future where:

- Every person controls their digital identity
- Consent is meaningful and respected
- Data enables assistance without creating risk
- Algorithms are transparent and fair
- Communities have voice in data governance
- Technology serves human dignity

This is not a utopian vision. Every element described in this manifesto is technically achievable with current technology. The barriers are organizational, financial, and political—not technological.

Data dignity is possible. It requires commitment, investment, and collaboration. It requires placing the dignity of affected individuals at the center of every data decision.

**Data is power. Let's ensure that power serves those who need it most.**

---

*Issued by Trusted Humanitarian Resources (501(c)(3))*

*Version 2.0*

*This document is a living resource, developed in collaboration with humanitarian organizations, affected communities, technology experts, and civil society. We invite your engagement and feedback.*

---

# TECHNICAL APPENDICES

*The following appendices provide detailed technical specifications for implementing data dignity. They are designed to be updated more frequently than the core manifesto as technology evolves.*

---

## Appendix A: Offline-First Architecture Specification

*This appendix provides detailed specifications for offline-capable systems, addressing one of the most critical gaps identified in the expert roundtable.*

### A.1 Design Principles

1. **Offline by Default**: Systems must function without connectivity; connectivity enhances but is not required
2. **Graceful Degradation**: Reduced functionality is acceptable; service denial is not
3. **Eventual Consistency**: Data will sync when connectivity available; conflicts resolved deterministically
4. **Minimal Sync**: Only necessary data synced; minimize bandwidth requirements
5. **Secure Offline**: Security controls function without network verification

### A.2 Tiered Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      CLOUD TIER                              │
│  - Master data store                                         │
│  - Global services (trust registry, credential status)      │
│  - Analytics and reporting                                   │
│  - Backup and disaster recovery                              │
└─────────────────────────────────────────────────────────────┘
                              │
                    (Intermittent connectivity)
                              │
┌─────────────────────────────────────────────────────────────┐
│                      HUB TIER                                │
│  - Regional/country data store                               │
│  - Cached global services                                    │
│  - Sync coordination                                         │
│  - Regional reporting                                        │
└─────────────────────────────────────────────────────────────┘
                              │
                    (Low/no connectivity)
                              │
┌─────────────────────────────────────────────────────────────┐
│                      EDGE TIER                               │
│  - Local data for operational needs                         │
│  - Offline credential verification                          │
│  - Consent capture with queue                               │
│  - Service delivery support                                  │
└─────────────────────────────────────────────────────────────┘
```

### A.3 Offline DID Methods

For offline scenarios, the following DID methods are appropriate:

| Method | Offline Capability | Use Case |
|--------|-------------------|----------|
| `did:key` | Full (self-contained) | Individual identifiers |
| `did:peer` | Full (bilateral) | Pairwise relationships |
| `did:web` | Cached resolution | Organizational identifiers |

### A.4 Sync Protocol

**Sync Trigger Events**
- Scheduled sync (configurable interval, default 6 hours when connected)
- Manual sync (user-initiated)
- Priority sync (consent revocation, critical updates)
- Opportunistic sync (connectivity detected)

**Conflict Resolution Rules**
1. Most recent timestamp wins for consent changes
2. Most restrictive interpretation for ambiguous consent
3. Credential revocation always wins over validity
4. Manual resolution for complex conflicts

**Sync Payload Minimization**
- Delta sync only (changes since last sync)
- Compressed payloads
- Prioritized sync (critical data first)
- Resumable transfers

### A.5 Offline Credential Verification

**Cached Verification Data**
- Trust registry snapshot (validity: 7 days)
- Revocation lists (validity: 24 hours for critical, 7 days for standard)
- Issuer public keys

**Degraded Verification**
- Accept credentials with expired cache + flag for later verification
- Never deny essential services due to verification failure
- Log degraded verifications for reconciliation

---

## Appendix B: Humanitarian System Integration

*This appendix provides specifications for integrating with existing humanitarian systems.*

### B.1 Target Systems

| System | Owner | Function | Integration Priority |
|--------|-------|----------|---------------------|
| PRIMES | UNHCR | Refugee registration | High |
| SCOPE | WFP | Beneficiary management | High |
| HDX | OCHA | Data exchange | Medium |
| KOBO | OCHA | Data collection | Medium |
| ActivityInfo | Various | Project monitoring | Medium |

### B.2 Integration Patterns

**Wrapper Pattern**
- Consent layer wraps existing system
- All access through consent-aware API
- Minimal changes to existing system

**Bridge Pattern**
- Data dignity system and existing system connected by bridge
- Bridge handles consent checking, credential verification
- Systems remain independent

**Sidecar Pattern**
- Data dignity functions deployed alongside existing system
- Shared data store with consent enforcement
- Gradual migration path

### B.3 API Specifications

*Detailed API specifications to be developed in collaboration with system owners.*

---

## Appendix C: Verifiable Credential Schemas

*This appendix defines standard credential schemas for humanitarian use.*

### C.1 Basic Identity Credential

```json
{
  "@context": ["https://www.w3.org/2018/credentials/v1", "https://data-dignity.org/credentials/v1"],
  "type": ["VerifiableCredential", "HumanitarianIdentityCredential"],
  "credentialSubject": {
    "id": "did:key:z6Mk...",
    "givenName": "string",
    "familyName": "string",
    "dateOfBirth": "date",
    "nationality": "ISO 3166-1 alpha-3",
    "sex": "enum: male|female|other|unknown",
    "identityAssuranceLevel": "enum: IAL1|IAL1+|IAL2|IAL2+|IAL3"
  }
}
```

### C.2 Protection Status Credential

```json
{
  "@context": ["https://www.w3.org/2018/credentials/v1", "https://data-dignity.org/credentials/v1"],
  "type": ["VerifiableCredential", "ProtectionStatusCredential"],
  "credentialSubject": {
    "id": "did:key:z6Mk...",
    "protectionStatus": "enum: refugee|asylum-seeker|stateless|idp|other",
    "statusGrantDate": "date",
    "statusExpiryDate": "date",
    "grantingAuthority": "string"
  }
}
```

*Additional schemas for health, education, assistance, skills credentials to be defined.*

---

## Appendix D: DID Method Evaluation

*This appendix provides evaluation framework and recommendations for DID methods.*

### D.1 Evaluation Criteria

| Criterion | Weight | Description |
|-----------|--------|-------------|
| Offline Capability | 25% | Can credentials be verified without connectivity? |
| Cost | 20% | Transaction costs for create, update, resolve |
| Scalability | 15% | Performance at humanitarian scale (millions of DIDs) |
| Recovery | 15% | Key recovery mechanisms available |
| Governance | 15% | Who controls the method? |
| Maturity | 10% | Production readiness |

### D.2 Method Evaluations

*Detailed evaluations of did:key, did:peer, did:web, did:ion, and other relevant methods.*

---

## Appendix E: Cryptographic Protocol Specifications

*This appendix provides detailed specifications for cryptographic protocols.*

### E.1 Zero-Knowledge Proof Circuits

*Circuit specifications for age proofs, set membership, credential validity.*

### E.2 Differential Privacy Parameters

*Detailed parameter tables for different query types and sensitivity levels.*

### E.3 Key Management Procedures

*Detailed procedures for key generation, storage, rotation, and recovery.*

---

## Appendix F: Reference Architecture

*This appendix provides reference architecture diagrams using C4 model.*

### F.1 Context Diagram

*System context showing data dignity system in relation to users, external systems, and regulators.*

### F.2 Container Diagram

*Major containers: Identity Service, Consent Service, Credential Service, Governance Service, Integration Layer.*

### F.3 Component Diagrams

*Internal components of each container.*

### F.4 Deployment Diagrams

*Deployment options: cloud, hybrid, edge-first.*

---

## Appendix G: Infrastructure Requirements

*This appendix specifies infrastructure requirements for implementation.*

### G.1 Hardware Requirements

| Component | Specification | Notes |
|-----------|--------------|-------|
| Field devices | Android 8+ or iOS 12+; 2GB RAM; 16GB storage | Must support encryption |
| Edge servers | 4 cores; 8GB RAM; 256GB SSD; UPS | Optional for larger operations |
| Hub servers | 8 cores; 32GB RAM; 1TB SSD; redundant power | Per-country or per-region |

### G.2 Network Requirements

| Scenario | Bandwidth | Latency | Notes |
|----------|-----------|---------|-------|
| Full online | 1 Mbps per concurrent user | <500ms | Optimal operation |
| Intermittent | 256 Kbps burst | Variable | Sync-based operation |
| Offline | None | N/A | Full offline capability required |

### G.3 Cost Model

*Cost estimation framework for implementation at different scales.*

---

*End of Data Dignity Manifesto v2.0*

---

## Document History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | October 11, 2024 | Initial manifesto |
| 2.0 | [Date] | Comprehensive revision based on expert roundtable; added threat model, offline architecture, identity proofing, consent UX requirements, governance integration |

## Feedback

We welcome feedback on this manifesto. Please contact:

- Email: manifesto@data-dignity.org
- Web: https://data-dignity.org/feedback
- GitHub: https://github.com/data-dignity/manifesto

## License

This manifesto is released under Creative Commons Attribution 4.0 International (CC BY 4.0). Organizations are free to adopt, adapt, and build upon this work, with attribution to Trusted Humanitarian Resources.


---

*End of Data Dignity Manifesto v2.0*

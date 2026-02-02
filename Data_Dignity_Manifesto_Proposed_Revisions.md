# Data Dignity Manifesto — Proposed Revisions Tracker

**Document Version**: 2.0 (Working Draft Evaluated)  
**Roundtable Dates**: February 1-2, 2026 (Rounds 1-3)  
**Status**: ✅ ROUND 3 COMPLETE — v2.0 Working Draft Evaluated

**Round 1-2 Score (v1.0)**: 3,155 / 6,400 (49%)  
**Round 3 Score (v2.0)**: 5,010 / 6,400 (78.3%)  
**Improvement**: +29.3 percentage points

**Panel Verdict**: ✅ **CONDITIONALLY READY FOR ENDORSEMENT**  
*With remaining issues resolved, document ready for pilot deployment*

---

## Evaluation Categories (Confirmed)

| # | Category | Weight | Description |
|---|----------|--------|-------------|
| 1 | Operational Feasibility in Humanitarian Contexts | 100 pts | Practicality in camps, emergencies, low-connectivity |
| 2 | Privacy & Do-No-Harm Rigor | 100 pts | Protection against misuse, re-identification, hostile actors |
| 3 | Interoperability & Standards Compliance | 100 pts | W3C, ISO, GDPR, humanitarian standards alignment |
| 4 | Identity Assurance & Lifecycle Management | 100 pts | Proofing, recovery, revocation robustness |
| 5 | Cryptographic & Security Architecture | 100 pts | Protocol specs, threat models, security assumptions |
| 6 | Governance & Accountability Structures | 100 pts | Decision-making clarity, enforcement, dispute resolution |
| 7 | Consent UX & Coercion Safeguards | 100 pts | Usability, duress detection, power asymmetry |
| 8 | Implementation Readiness & Scalability | 100 pts | Technical maturity, deployment path, cost model |

**Maximum Score**: 6,400 points (8 judges × 800 points each)

---

## Round 1 Findings

**Status**: Round 1 Complete

### Strengths Identified

| # | Strength | Raised By | Manifesto Section |
|---|----------|-----------|-------------------|
| S1 | Dignity-centered framing ("data as extension of self") resonates with affected communities | Community, ICRC | Section 1 |
| S2 | Contextual risk tiering differentiates humanitarian from commercial contexts | UNHCR, ICRC | Section 6 |
| S3 | Retrospective consent mechanism addresses emergency response realities | UNHCR | Section 6.2 |
| S4 | Duress/coercion principle is rare and important — most frameworks ignore this | ICRC | Section 7 |
| S5 | Revocable lease model aligns with rights-based data governance | UNHCR, Community | Section 2 |
| S6 | Verified erasure with cryptographic proof fills accountability gap | ICRC | Section 4 |
| S7 | Multi-stakeholder consent for shared data (photos with multiple people) is innovative | ID.me | Section 2 (page 2) |
| S8 | Certification/scoring concept could drive adoption (carrot, not just stick) | OCHA | Section 58 |
| S9 | Transparency logs and audit trails would improve accountability | OCHA | Sections 1.2, 3.2 |
| S10 | Correct identification of relevant cryptographic primitives (ZKP, SMPC, DP) | Stanford | Section 9 |

### Failure Modes / Risks Identified

| # | Failure Mode | Severity | Raised By | Evidence |
|---|--------------|----------|-----------|----------|
| F1 | **No offline-first architecture** — assumes connectivity for blockchain, smart contracts, consent management | CRITICAL | UNHCR, Stanford, Azure, Community | No offline protocol specified anywhere |
| F2 | **Cryptographic claims are vaporware** — ZKP/SMPC/DP named but no protocols, parameters, or specifications | CRITICAL | Stanford, ICRC | Section 9 says "use ZKPs" without naming scheme, circuit, or setup |
| F3 | **Identity proofing methodology absent** — assumes identity exists but never specifies how it's established | CRITICAL | ID.me | Section 10 discusses DIDs but not initial identity proofing |
| F4 | **Key recovery not designed** — "educate users on key protection" is not a recovery mechanism | HIGH | ID.me, W3C | Section 10.2 |
| F5 | **Duress detection is asserted but not specified** — no methodology for detecting coerced consent | HIGH | ICRC | Section 7.2 says "develop indicators" but provides none |
| F6 | **Blockchain immutability vs. right to erasure contradiction** — "hybrid model" handwave doesn't resolve | HIGH | ICRC, W3C | Sections 4 and 34 in tension |
| F7 | **DAO governance conflicts with humanitarian coordination structures** (clusters, HCTs) | HIGH | OCHA | Section 11 proposes parallel governance |
| F8 | **Consent UX not designed for target population** — modular consent assumes literacy, digital access, cognitive bandwidth | HIGH | Community, UNHCR | No UX specifications; Section 3 describes "modular consent" |
| F9 | **Coercion is baseline, not edge case** — aid conditionality means consent is never truly free | HIGH | Community, ICRC | Section 7 treats duress as exceptional |
| F10 | **No threat model** — adversary not defined (curious admin? nation-state? armed group?) | HIGH | Stanford, ICRC | Not addressed anywhere |
| F11 | **Staff capacity wildly underestimated** — field staff cannot manage smart contracts and cryptographic proofs | MEDIUM | UNHCR | Sections 3, 4 assume sophisticated staff capability |
| F12 | **No emergency override protocols** — what happens in cholera outbreak when data must be shared in hours? | MEDIUM | UNHCR | Not addressed |
| F13 | **SMPC impractical for humanitarian contexts** — computationally expensive, requires synchronized online parties | MEDIUM | Stanford | Section 9 proposes SMPC for "cross-organization collaboration" |
| F14 | **Token-based DAO voting will exclude most vulnerable** — digital access inequality recreates power asymmetry | MEDIUM | Community | Section 26 |
| F15 | **No reference architecture** — dozens of components with no diagram showing how they fit together | MEDIUM | Azure, W3C, OCHA | No architecture provided |

### Missing Requirements — Detailed Implementation Guidance

---

#### **M1: Offline Synchronization Protocol** | Priority: P0

**Raised By:** UNHCR CDO, Stanford Cryptography Lead, Microsoft Azure Lead

**Why This Is Critical:**
The manifesto assumes persistent connectivity for blockchain verification, smart contract execution, and real-time consent management. This assumption is catastrophically wrong for humanitarian contexts:
- In Dadaab (Kenya), Cox's Bazar (Bangladesh), and South Sudan, connectivity is intermittent at best — sometimes unavailable for weeks
- ZKP verification typically requires computation that depends on network access for parameter retrieval
- SMPC requires synchronized online parties — impossible when organizations operate in different connectivity zones
- Blockchain consensus requires network participation

As the UNHCR CDO stated: *"What happens when the blockchain node is unreachable for weeks? Field staff make decisions under time pressure... If the system says 'connectivity unavailable, cannot verify consent' — what happens? Do we not process the resettlement case?"*

**How To Implement:**

1. **Tiered Architecture Design:**
   - **Edge Layer:** Lightweight devices (tablets, phones) for offline data collection with local storage and basic consent capture
   - **Hub Layer:** Regional servers with intermittent connectivity that aggregate edge data and perform batch synchronization
   - **Cloud Layer:** Full cryptographic processing, blockchain anchoring, and SMPC computation when connectivity permits

2. **Offline-Capable DID Methods:**
   - Evaluate `did:key` (no resolution infrastructure needed, works device-to-device)
   - Evaluate `did:peer` (peer-to-peer, no blockchain required)
   - Document tradeoffs: no global resolution, harder revocation, but functional offline

3. **Consent Record Synchronization:**
   - Design conflict resolution protocol for consent records modified offline by multiple parties
   - Implement vector clocks or CRDTs (Conflict-free Replicated Data Types) for eventual consistency
   - Define "last valid consent" rules when sync reveals conflicts

4. **Degraded Mode Operations:**
   - Specify which operations can proceed offline (identity verification against cached credentials)
   - Specify which operations require connectivity (consent revocation propagation, cross-org data sharing)
   - Define maximum offline duration before re-verification required

5. **Cryptographic Adaptations:**
   - Pre-compute ZKP parameters and cache locally for offline verification
   - Design "optimistic" consent model where actions proceed offline and are audited/reconciled on sync
   - Implement threshold signatures so partial quorum can authorize actions

**Deliverable:** Technical specification document "Offline-First Architecture for Data Dignity" with sequence diagrams for sync scenarios.

---

#### **M2: Explicit Threat Model** | Priority: P0

**Raised By:** Stanford Cryptography Lead, ICRC Data Protection Officer

**Why This Is Critical:**
The manifesto proposes cryptographic protections without ever defining who the adversary is. As the Stanford Lead stated: *"Who is the adversary? A curious administrator? A nation-state? An armed group that captures infrastructure? The cryptographic choices depend entirely on the threat model, which the manifesto never defines."*

Different adversaries require fundamentally different protections:
- Curious administrator → access controls and audit logs suffice
- Nation-state with legal authority → need jurisdictional data segregation
- Armed group with physical access → need hardware security, remote wipe, key escrow
- Insider threat → need separation of duties, multi-party authorization

**How To Implement:**

1. **Adversary Classification Matrix:**
   
   | Adversary Type | Access Level | Capabilities | Motivation | Example |
   |----------------|--------------|--------------|------------|---------|
   | Curious Insider | Logical (authorized) | Query access, limited export | Personal interest, sale | Aid worker selling data |
   | Malicious Insider | Logical (privileged) | Admin access, bulk export | Financial, ideological | Compromised sysadmin |
   | Criminal Organization | Logical (external) | Phishing, malware, bought credentials | Extortion, trafficking | Human traffickers |
   | State Actor (Legal) | Legal compulsion | Subpoenas, lawful intercept | Surveillance, deportation | Host country government |
   | State Actor (Hostile) | Logical + Physical | APT, zero-days, physical seizure | Targeting refugees | Country of origin intelligence |
   | Armed Non-State | Physical | Device seizure, coercion | Targeting by ethnicity/religion | Militia groups |

2. **Threat-Specific Mitigations:**
   - For each adversary class, specify required technical controls
   - Map manifesto's cryptographic claims to specific threats they address
   - Identify gaps where current proposal provides no protection

3. **Data Classification by Sensitivity:**
   - Define sensitivity levels: Public, Internal, Sensitive, Critical
   - Map data types to levels: Name (Sensitive), Ethnicity (Critical), Location (Critical in conflict zones)
   - Specify protections required at each level

4. **Attack Tree Analysis:**
   - Document attack paths for each adversary type
   - Identify single points of failure in proposed architecture
   - Propose defense-in-depth mitigations

**Deliverable:** "Data Dignity Threat Model" document following STRIDE or similar methodology, with adversary personas, attack trees, and control mappings.

---

#### **M3: Cryptographic Protocol Specifications** | Priority: P0

**Raised By:** Stanford Cryptography Lead

**Why This Is Critical:**
The manifesto name-drops ZKPs, SMPC, and differential privacy without any specifications. As the Stanford Lead stated: *"This is like saying 'use encryption' without specifying AES vs. RSA... 'Add noise to datasets' is not a specification. What's the epsilon? What's the sensitivity analysis? Without these, you can claim 'differential privacy' while providing no meaningful protection."*

When asked whether ZKPs could prove multi-dimensional compliance, the Stanford Lead responded: *"Honest answer: no. There's no existing ZKP construction that can prove multi-dimensional compliance — consent validity, purpose limitation, minimization, and retention — in a single proof... The manifesto is claiming we can do things that are, at best, five years out from practical deployment."*

**How To Implement:**

1. **Zero-Knowledge Proof Specifications:**
   
   | Use Case | Statement to Prove | Recommended Scheme | Trusted Setup | Verification Time | Notes |
   |----------|-------------------|-------------------|---------------|-------------------|-------|
   | Age verification | "I am over 18" | Bulletproofs | None | ~50ms | Range proof, no setup |
   | Nationality check | "I am from approved country list" | Groth16 | Required | ~10ms | Set membership, needs ceremony |
   | Credential validity | "My credential is not revoked" | Merkle proof + signature | None | ~20ms | Revocation list as Merkle tree |
   
   - Specify circuit designs for each use case
   - Document computational requirements (prover time, verifier time, proof size)
   - Address trusted setup requirements and ceremony logistics for Groth16

2. **Differential Privacy Parameters:**
   
   | Query Type | Recommended ε | Recommended δ | Sensitivity | Rationale |
   |------------|---------------|---------------|-------------|-----------|
   | Aggregate counts (>1000) | 1.0 | 10⁻⁶ | 1 | Standard for statistical queries |
   | Aggregate counts (<100) | 0.1 | 10⁻⁸ | 1 | Small populations need more protection |
   | Location data | 0.5 | 10⁻⁷ | Variable | Geo-indistinguishability |
   | Individual queries | NOT RECOMMENDED | — | — | DP not suitable for individual-level |
   
   - Define privacy budget accounting across queries
   - Specify composition theorems being used
   - Document what "privacy" actually means at each ε level

3. **SMPC Scheme Selection:**
   
   | Use Case | Parties | Recommended Scheme | Honest Majority? | Rounds | Notes |
   |----------|---------|-------------------|------------------|--------|-------|
   | Cross-org deduplication | 2-5 | Garbled circuits (2PC) or SPDZ | No | 2-3 | Small party count |
   | Collaborative analytics | 5-20 | SPDZ with preprocessing | No | Varies | Scales better |
   | Threshold signing | 3-7 | Threshold ECDSA | Yes (2/3) | 2-3 | For key management |
   
   - Acknowledge computational costs: SMPC is 10,000x+ slower than plaintext
   - Specify when SMPC is worth the cost vs. when trusted third party is acceptable
   - Document network requirements (latency, bandwidth)

4. **Key Management Architecture:**
   - Specify key generation procedures (entropy sources, ceremonies)
   - Define key rotation schedules
   - Document revocation and re-keying procedures
   - Address key escrow policies for recovery scenarios

**Deliverable:** "Cryptographic Architecture Specification" with protocol selections, parameter choices, and performance benchmarks.

---

#### **M4: Identity Proofing Protocol** | Priority: P0

**Raised By:** ID.me Identity Architect

**Why This Is Critical:**
The manifesto assumes people have a "digital identity" but never addresses how that identity is initially established. As the ID.me Architect stated: *"In humanitarian contexts, people often lack documents. How do you bootstrap trust? What's the proofing process? What assurance level does it achieve?"*

Without defined proofing, a "verified refugee identity" is meaningless — verified against what? By whom? With what evidence?

**How To Implement:**

1. **Identity Assurance Level (IAL) Mapping:**
   
   | Scenario | Evidence Accepted | Verification Method | IAL Achieved | Use Cases |
   |----------|------------------|---------------------|--------------|-----------|
   | No documents | Biometrics only | Deduplication against existing records | IAL1 | Food distribution, basic services |
   | Informal documents | Photos, letters, witness statements | Staff interview + biometrics | IAL1+ | Program enrollment |
   | Government ID (damaged/expired) | Physical document inspection | Visual + biometric match | IAL2 | Resettlement referral |
   | Government ID (valid) | Document + database verification | Chip read or issuer verification | IAL2+ | Travel documents |
   | Biographic + biometric + document | Multiple evidence types | Cross-referencing + biometrics | IAL3 | High-stakes decisions |

2. **Proofing Process Specification:**
   - Define evidence collection procedures for each IAL
   - Specify staff training requirements
   - Document fraud indicators and red flags
   - Address edge cases: minors, elderly, those with cognitive impairments

3. **Biometric Handling:**
   - Specify modalities: fingerprint, iris, face (with fallbacks)
   - Address anti-spoofing requirements
   - Define template storage (local vs. centralized) with privacy tradeoffs
   - Specify matching thresholds (FAR/FRR targets)

4. **Document Verification:**
   - Catalog accepted document types by issuing country
   - Define verification procedures (visual inspection, chip reading, issuer database)
   - Address forged/altered document detection

5. **Assurance Decay:**
   - Credentials degrade over time without re-verification
   - Define re-proofing triggers and schedules
   - Specify what happens when assurance is insufficient for requested action

**Deliverable:** "Identity Proofing Standard for Humanitarian Contexts" aligned with NIST 800-63A.

---

#### **M5: Key Recovery Mechanism** | Priority: P0

**Raised By:** ID.me Identity Architect, W3C DID Standards Lead

**Why This Is Critical:**
The manifesto tells users to "protect their cryptographic keys" but users lose keys constantly. As the ID.me Architect stated: *"What's the recovery mechanism? Social recovery? Institutional backup? Biometric binding? This is a critical gap."*

The Community Data Steward reinforced: *"How realistic is it to expect a refugee who's just fled violence, may be illiterate, and has never used a smartphone to manage cryptographic keys?"*

**How To Implement:**

1. **Recovery Mechanism Options Analysis:**
   
   | Mechanism | How It Works | Pros | Cons | Recommended For |
   |-----------|--------------|------|------|-----------------|
   | Social Recovery | K-of-N trusted contacts can reconstruct key | No central authority | Requires social network, coordination | Digitally literate populations |
   | Institutional Backup | Organization holds encrypted backup | Simple UX | Reintroduces centralization | Low-tech populations, org-issued credentials |
   | Biometric Binding | Key derived from biometric template | Nothing to remember | Biometric theft = permanent compromise | High-security credentials |
   | Hardware Token | Key stored in secure element | Very secure | Device loss = key loss | Staff credentials |
   | Threshold Institutional | Multiple orgs each hold key share | Decentralized, no single authority | Complex coordination | Cross-org credentials |

2. **Recommended Hybrid Approach:**
   - **Primary:** Institutional backup with threshold decryption (e.g., 2-of-3 humanitarian organizations must cooperate to recover)
   - **Secondary:** Biometric re-enrollment path for individuals who lose all devices
   - **Tertiary:** Social recovery for digitally sophisticated users who opt in

3. **Recovery Process Design:**
   - Define identity re-proofing requirements for recovery (must be >= original proofing level)
   - Specify waiting periods / cooling-off to prevent coerced recovery
   - Document audit trail requirements for all recovery events
   - Address scenarios: device lost, device stolen, device seized by hostile actor

4. **Anti-Coercion Features:**
   - Duress codes that trigger fake recovery while alerting authorities
   - Time-delayed recovery with notification to user's contacts
   - Geographic restrictions on recovery requests

**Deliverable:** "Key Recovery Standard" specifying mechanisms, procedures, and anti-coercion safeguards.

---

#### **M6: Consent UX Specifications** | Priority: P0

**Raised By:** Community Data Steward, UNHCR CDO

**Why This Is Critical:**
The manifesto describes "modular consent," "smart contracts," and "granular permissions" without any consideration for usability. As the Community Data Steward stated: *"I've seen the consent forms aid agencies use now — they're already confusing in English. How will this work for someone who speaks Tigrinya, can't read, and is exhausted from displacement?"*

The Community Steward warned: *"If the system is too complex, aid workers may find it easier to just... not register people, or register them minimally. The manifesto could inadvertently reduce the assistance people receive."*

**How To Implement:**

1. **Reading Level & Comprehension Standards:**
   - Target: 6th grade reading level (Flesch-Kincaid) for all consent text
   - Maximum sentence length: 15 words
   - No legal jargon; plain language only
   - Define glossary of permitted terms with translations

2. **Visual Design Requirements:**
   - Icon-based consent options (not just text)
   - Color coding: green (share), yellow (limited), red (don't share)
   - Progress indicators showing what's been decided
   - Large touch targets for mobile (minimum 48x48px)

3. **Modality Options:**
   - **Text:** For literate users with devices
   - **Audio:** Recorded explanations in local languages (minimum 20 languages for global deployment)
   - **Video:** Animated explanations for complex concepts
   - **In-person:** Staff-assisted consent with standardized scripts

4. **Consent Tier Simplification:**
   - Reduce "granular" consent to 3-5 meaningful tiers, not unlimited permutations
   - Example tiers:
     - Tier 1: Essential services only (food, shelter, medical emergency)
     - Tier 2: Full humanitarian services (add: education, livelihoods, resettlement referral)
     - Tier 3: Research & improvement (add: anonymized data for program evaluation)
     - Tier 4: Cross-organization sharing (add: other humanitarian orgs)
   - Allow granular adjustments for sophisticated users, but default to tiers

5. **User Testing Requirements:**
   - Mandate usability testing with actual refugee populations before deployment
   - Test across: literacy levels, age groups, digital familiarity, stress conditions
   - Iterate based on findings; no deployment without passing usability benchmarks
   - Ongoing monitoring of consent completion rates and comprehension checks

6. **Cognitive Load Reduction:**
   - Don't present all consent options at once; progressive disclosure
   - Provide recommended defaults with clear "what this means" explanations
   - Allow "decide later" options that don't block service access
   - Remember preferences across sessions; don't re-ask unnecessarily

**Deliverable:** "Consent UX Design System" with wireframes, language guidelines, testing protocols, and accessibility standards.

---

#### **M7: Reference Architecture Diagram** | Priority: P1

**Raised By:** Microsoft Azure Lead, W3C DID Lead, UN OCHA Lead

**Why This Is Critical:**
The manifesto describes dozens of components — blockchain, smart contracts, ZKPs, SMPC, DIDs, VCs, consent engines, audit logs, DAOs — but provides no architecture showing how they fit together. As the Azure Lead stated: *"What's the data flow? What are the trust boundaries?"*

Without architecture, the manifesto is a wish list, not a design.

**How To Implement:**

1. **Component Inventory:**
   - Identity Layer: DID registry, VC issuance, key management, biometric system
   - Consent Layer: Consent management, smart contract engine, policy enforcement
   - Data Layer: Encrypted storage, access control, audit logging
   - Computation Layer: ZKP prover/verifier, SMPC runtime, DP query engine
   - Governance Layer: DAO contracts, voting mechanism, proposal system
   - Integration Layer: APIs for existing systems (PRIMES, SCOPE, HDX)

2. **Data Flow Diagrams:**
   - Registration flow: Person → Proofing → Credential issuance → Wallet storage
   - Consent flow: Person → Consent UI → Smart contract → Policy engine → Data access
   - Verification flow: Relying party → VC request → ZKP generation → Verification
   - Revocation flow: Person → Revocation request → Smart contract → Propagation → Confirmation

3. **Trust Boundary Analysis:**
   - What runs on user's device (wallet, keys, consent decisions)
   - What runs on organizational infrastructure (data storage, processing)
   - What runs on shared infrastructure (blockchain, DAO, trust registry)
   - What crosses boundaries and how it's protected

4. **Deployment Topology Options:**
   - Option A: Cloud-hosted (AWS/Azure/GCP) — fast deployment, sovereignty concerns
   - Option B: Humanitarian private cloud (UNHCR-hosted) — sovereignty ok, capacity limited
   - Option C: Federated — each org hosts own components, interop via standards
   - Option D: Hybrid — sensitive data on-premise, computation in cloud with confidential computing

**Deliverable:** Architecture document with C4 diagrams (Context, Container, Component, Code), deployment options, and trust analysis.

---

#### **M8: DID Method Evaluation Framework** | Priority: P1

**Raised By:** W3C DID Standards Lead

**Why This Is Critical:**
There are 100+ DID methods with wildly different properties. As the W3C Lead stated: *"Some require blockchain (expensive, slow); some don't. Some work offline; most don't. The manifesto doesn't specify criteria for selecting appropriate methods."*

**How To Implement:**

1. **Evaluation Criteria Matrix:**
   
   | Criterion | Weight | Description | Measurement |
   |-----------|--------|-------------|-------------|
   | Offline Verification | High | Can credentials be verified without network? | Yes/No/Partial |
   | Cost | High | Transaction fees, infrastructure costs | $/operation, $/month |
   | Scalability | High | Can handle millions of DIDs? | DIDs/second, storage growth |
   | Recovery | High | How are lost keys recovered? | Mechanism description |
   | Governance | Medium | Who controls the method? | Centralized/Federated/Decentralized |
   | Privacy | Medium | What's revealed during resolution? | Correlation risks |
   | Maturity | Medium | Production-ready? | Deployments, audits, age |
   | Revocation | Medium | How are credentials revoked? | Mechanism, latency |

2. **Method Evaluation (Examples):**
   
   | Method | Offline? | Cost | Scalability | Recovery | Recommendation |
   |--------|----------|------|-------------|----------|----------------|
   | did:key | Yes | Free | Unlimited | None (derive new) | Good for ephemeral/offline |
   | did:peer | Yes | Free | Unlimited | By relationship | Good for P2P |
   | did:web | No | Hosting | High | DNS control | Good for organizations |
   | did:ion | No | Bitcoin fees | Medium | Key rotation | Consider for anchoring |
   | did:ethr | No | Ethereum gas | Medium | Smart contract | Avoid (expensive) |

3. **Recommended Approach:**
   - **Individuals:** `did:key` or `did:peer` for offline-capable, free, simple
   - **Organizations:** `did:web` for discoverability, DNS-based trust
   - **Anchoring:** Periodic anchoring to `did:ion` or similar for non-repudiation
   - **Hybrid:** Use `did:key` locally, anchor to ledger when connectivity available

**Deliverable:** "DID Method Selection Guide for Humanitarian Contexts" with evaluation matrix and recommendations.

---

#### **M9: Verifiable Credential Schemas** | Priority: P1

**Raised By:** W3C DID Standards Lead, UN OCHA Lead

**Why This Is Critical:**
A VC is only useful if relying parties can interpret it. As the W3C Lead stated: *"The manifesto proposes credentials for identity, health, education — but provides no schema definitions. Without schemas, there's no interoperability."*

**How To Implement:**

1. **Core Humanitarian Credential Schemas:**

   ```jsonld
   // Example: Protection Status Credential
   {
     "@context": ["https://www.w3.org/2018/credentials/v1", "https://humanitarian.org/credentials/v1"],
     "type": ["VerifiableCredential", "ProtectionStatusCredential"],
     "credentialSubject": {
       "protectionStatus": "refugee|asylum-seeker|IDP|stateless|other",
       "recognitionDate": "ISO8601 date",
       "recognizingAuthority": "DID of authority",
       "countryOfOrigin": "ISO 3166-1 alpha-3",
       "countryOfAsylum": "ISO 3166-1 alpha-3"
     }
   }
   ```

2. **Schema Categories:**
   - **Identity:** Basic demographics, biometric reference, document references
   - **Protection Status:** Refugee status, asylum claim, IDP registration
   - **Assistance History:** Services received, dates, providers (for deduplication)
   - **Health:** Vaccination records, chronic conditions, allergies (highly sensitive)
   - **Education:** Grade level, certifications, language proficiency
   - **Skills/Livelihoods:** Work history, training completed

3. **Schema Governance:**
   - Who can propose new schemas? (Open process with review)
   - Who approves schemas for production use? (Standards body or DAO)
   - How are schemas versioned? (Semantic versioning, backward compatibility rules)
   - How are deprecated schemas retired? (Sunset periods, migration support)

4. **Interoperability with Existing Standards:**
   - Map to UNHCR's data dictionary
   - Align with OCHA's Humanitarian Exchange Language (HXL)
   - Reference ISO standards where applicable (dates, countries, languages)

**Deliverable:** Schema repository with JSON-LD definitions, governance process, and interoperability mappings.

---

#### **M10: Trust Registry Design** | Priority: P1

**Raised By:** W3C DID Standards Lead

**Why This Is Critical:**
As the W3C Lead asked: *"How do relying parties know which issuers to trust? The manifesto assumes a trust fabric exists but doesn't design one. In humanitarian contexts, who decides which organizations can issue which credentials?"*

**How To Implement:**

1. **Trust Registry Architecture:**
   - **Registry Contents:** Issuer DIDs, credential types each can issue, validity periods, revocation status
   - **Registry Governance:** Who can add/remove issuers? (Propose: consortium of major humanitarian orgs)
   - **Registry Distribution:** How do relying parties access it? (Replicated, cached, offline snapshots)

2. **Issuer Onboarding Process:**
   - Application with organizational verification
   - Technical compliance check (DID method, signing algorithms, schema compliance)
   - Policy compliance check (data protection policies, audit history)
   - Approval by governance body (DAO vote or consortium decision)
   - Ongoing monitoring and periodic re-certification

3. **Credential Type Authorization:**
   - Not all issuers can issue all credential types
   - Example: Only UNHCR can issue "Refugee Status Determination" credentials
   - Example: Any accredited health provider can issue vaccination credentials
   - Define authorization matrix

4. **Revocation Mechanisms:**
   - Issuer-level revocation (organization loses trust)
   - Credential-level revocation (specific credential invalidated)
   - Propagation requirements (how quickly must revocations be honored?)

**Deliverable:** "Humanitarian Trust Registry Specification" with data model, governance process, and API specification.

---

#### **M11: Governance Integration Protocol** | Priority: P1

**Raised By:** UN OCHA Data Responsibility Lead

**Why This Is Critical:**
Humanitarian response operates through established coordination mechanisms — clusters (health, protection, shelter, etc.), Humanitarian Country Teams (HCTs), and inter-agency standing committees. As the OCHA Lead stated: *"A parallel DAO governance structure would create confusion, not clarity. Who has authority — the DAO or the Humanitarian Coordinator?"*

**How To Implement:**

1. **Authority Mapping:**
   
   | Decision Type | Current Authority | Proposed DAO Role | Integration |
   |---------------|-------------------|-------------------|-------------|
   | Operational data sharing | Cluster leads, HCT | Advisory input | DAO recommendations inform, don't override |
   | Technical standards | OCHA, UNHCR IT | Standard-setting | DAO proposes, technical bodies approve |
   | Individual consent | Data subject | Binding | DAO enforces individual rights |
   | Policy changes | Inter-Agency Standing Committee | Input channel | DAO proposals escalate to IASC |
   | Emergency overrides | Humanitarian Coordinator | Notification | DAO receives audit log, can review post-hoc |

2. **Complementary Roles:**
   - DAO handles: individual consent management, technical standard proposals, community feedback aggregation, transparency reporting
   - Existing structures handle: operational coordination, emergency decisions, inter-governmental relations, resource allocation

3. **Conflict Resolution:**
   - Define escalation path when DAO and operational authorities disagree
   - Establish appeals process for individuals whose DAO-protected rights are overridden
   - Create transparency requirements for any override of DAO-managed consent

4. **Representation:**
   - Ensure affected populations have voice in both DAO and existing structures
   - Avoid creating parallel representation that fragments advocacy
   - Consider DAO as amplifier of community voice into existing structures

**Deliverable:** "Governance Integration Framework" mapping DAO functions to existing humanitarian coordination architecture.

---

#### **M12: Integration Pathway with Existing Systems** | Priority: P1

**Raised By:** UNHCR CDO, UN OCHA Lead

**Why This Is Critical:**
Humanitarian organizations have existing systems with millions of records: UNHCR's PRIMES/proGres, WFP's SCOPE, OCHA's HDX. As the OCHA Lead noted: *"HDX is fundamentally a data sharing platform — upload datasets, download datasets. The manifesto envisions real-time consent management... These are architecturally incompatible."*

**How To Implement:**

1. **System Inventory & Gap Analysis:**
   
   | System | Owner | Function | Data Model | Integration Challenge |
   |--------|-------|----------|------------|----------------------|
   | PRIMES/proGres | UNHCR | Registration, case management | Centralized DB | No consent layer, no DIDs |
   | SCOPE | WFP | Beneficiary management, distribution | Centralized DB | Biometrics not portable |
   | HDX | OCHA | Dataset sharing | File-based | Aggregate, not individual |
   | KOBO | Various | Data collection | Form-based | No credential verification |

2. **Integration Patterns:**
   - **Wrapper Pattern:** Add consent layer around existing system APIs; existing system unchanged
   - **Bridge Pattern:** Create bidirectional sync between legacy and new system; gradual migration
   - **Sidecar Pattern:** New consent/identity system runs alongside; linked by identifiers
   - **Replacement Pattern:** Full migration to new system; high risk, high reward

3. **Recommended Approach:**
   - **Phase 1:** Wrapper pattern for PRIMES — add consent management API that checks manifesto-compliant consent before allowing PRIMES data access
   - **Phase 2:** Bridge pattern for new registrations — new enrollees get DIDs and VCs, synced to legacy systems
   - **Phase 3:** Sidecar for HDX — aggregate data sharing continues; add provenance tracking showing consent basis
   - **Phase 4:** Evaluate replacement as legacy systems reach end-of-life

4. **API Specifications:**
   - Define standard APIs for consent checking, credential verification, audit logging
   - Ensure APIs work with existing authentication (OAuth2, SAML)
   - Provide SDKs for common platforms (Java, Python, JavaScript)

**Deliverable:** "Legacy System Integration Guide" with patterns, APIs, and phased migration roadmap.

---

#### **M13: Duress Detection Methodology** | Priority: P1

**Raised By:** ICRC Data Protection Officer

**Why This Is Critical:**
The manifesto says to "develop indicators and mechanisms to detect when data might have been obtained under duress" but provides zero methodology. As the ICRC DPO stated: *"How do you algorithmically detect coercion? This is an unsolved research problem being presented as a checkbox."*

The Community Data Steward added a crucial reframe: *"The entire humanitarian system is coercive — I give my data because I need food, shelter, resettlement. There's no world where my consent to aid agencies is truly 'free.' The manifesto treats coercion as an edge case when it's the baseline condition."*

**How To Implement:**

1. **Acknowledge Structural Coercion:**
   - Explicitly state in the manifesto that humanitarian consent exists within power asymmetry
   - Design for "least coercive possible" rather than "fully free" consent
   - Ensure data refusal never results in aid denial for essential services

2. **Contextual Risk Indicators:**
   
   | Context Factor | Risk Level | Response |
   |----------------|------------|----------|
   | Active conflict in area | High | Enhanced review, delayed processing option |
   | Detention setting | Critical | Assume duress; minimal data collection only |
   | Third party present during consent | Medium | Offer private re-consent opportunity |
   | Consent obtained in <2 minutes | Medium | Flag for review; may indicate pressure |
   | Mass registration event (>100/day/staff) | Medium | Quality sampling and review |
   | Consent given for unusual data sharing | Medium | Confirmation prompt, cooling-off period |

3. **Behavioral Indicators:**
   - Sudden consent changes (all permissions granted/revoked at once)
   - Consent patterns inconsistent with stated preferences
   - Repeated access to "change consent" without changes being made (possible coerced attempt)

4. **Procedural Safeguards:**
   - **Safe Words:** Individuals can use a code phrase during consent that signals duress without alerting coercer
   - **Delayed Consent:** Option to "decide later" for non-essential data; revisit in 48-72 hours
   - **Private Re-Consent:** Automatic offer to review consent when individual is alone / in different setting
   - **Consent Decay:** High-sensitivity consent expires and must be re-confirmed periodically

5. **Post-Hoc Review:**
   - Audit samples of consent records from high-risk contexts
   - Interview-based validation where safe to do so
   - Right to retroactively withdraw consent with data deletion

**Deliverable:** "Duress-Aware Consent Framework" with indicators, safeguards, and audit procedures.

---

#### **M14: Compartmentalized Trust Models** | Priority: P1

**Raised By:** ICRC Data Protection Officer

**Why This Is Critical:**
The ICRC operates across front lines in conflicts, maintaining neutrality with all parties. As the ICRC DPO stated: *"When ICRC operates across front lines, data may need to be compartmentalized between parties to a conflict. The manifesto assumes a unified trust model that doesn't exist in active warfare."*

**How To Implement:**

1. **Compartment Design:**
   - Data compartments correspond to conflict parties / geographic zones
   - Each compartment has independent encryption keys
   - Cross-compartment data flow requires explicit authorization

2. **Access Control Model:**
   - Staff are assigned to compartments based on operational area
   - No single staff member has access to all compartments
   - Cross-compartment queries return aggregated/anonymized data only

3. **Technical Implementation:**
   - Attribute-based encryption (ABE) where decryption requires compartment-specific attributes
   - Separate key management per compartment
   - Air-gapped systems for highest-sensitivity compartments

4. **Compartment Bridging:**
   - Define when compartments can be bridged (e.g., conflict resolution, individual relocation)
   - Require multi-party authorization for bridging
   - Audit trail for all cross-compartment access

5. **Neutrality Protection:**
   - Design prevents any party from knowing what data ICRC holds about the other
   - Aggregates provided to parties are symmetric (same level of detail to all)
   - ZKPs can prove compliance with data protection without revealing compartment contents

**Deliverable:** "Conflict-Context Data Compartmentalization Standard" with technical architecture and operational procedures.

---

#### **M15: Data Destruction Protocols for Physical Capture** | Priority: P2

**Raised By:** ICRC Data Protection Officer

**Why This Is Critical:**
In conflict zones, servers and devices may be physically seized by hostile forces. The manifesto has no protocol for this scenario.

**How To Implement:**

1. **Prevention Measures:**
   - Hardware Security Modules (HSMs) for key storage with tamper-evident/tamper-resistant features
   - Full-disk encryption with keys not stored on device
   - Minimal local data storage; sync to secure remote when possible

2. **Detection:**
   - Tamper detection sensors on critical hardware
   - "Dead man's switch" — if device doesn't check in within X hours, assume compromised

3. **Response:**
   - Remote wipe capability for all field devices
   - Automatic key rotation when device reports compromise
   - Compartmentalized access so one device compromise doesn't expose all data

4. **Graceful Degradation:**
   - Define what data is acceptable to lose vs. what must be recoverable
   - Backup strategies that don't create additional capture targets
   - Staff protocols for device surrender (what to do, what to say, what not to reveal)

**Deliverable:** "Physical Security and Data Destruction Protocol" for conflict zone operations.

---

#### **M16: Emergency Override Protocols** | Priority: P2

**Raised By:** UNHCR CDO

**Why This Is Critical:**
In a cholera outbreak or mass displacement, data must be shared across agencies within hours. The manifesto has no emergency protocol. As the UNHCR CDO stated: *"The manifesto has no emergency protocol that maintains dignity principles while enabling rapid response."*

**How To Implement:**

1. **Emergency Categories:**
   - Level 1: Life-threatening emergency (disease outbreak, active violence) — immediate sharing authorized
   - Level 2: Time-sensitive crisis (mass displacement) — expedited sharing with 24-hour post-hoc consent
   - Level 3: Urgent operational need — standard process with accelerated timeline

2. **Pre-Authorized Emergency Sharing:**
   - During registration, offer opt-in to "emergency sharing tier"
   - Explains: "In life-threatening emergencies, your data may be shared with health authorities without additional consent"
   - Those who opt out still receive services; emergency sharing just requires manual outreach

3. **Override Authorization:**
   - Define who can declare emergency (e.g., Humanitarian Coordinator, cluster lead, agency head)
   - Require documentation of emergency justification
   - Time-bound authorization (24-72 hours) with extension requiring re-authorization

4. **Post-Hoc Reconciliation:**
   - Within 30 days of emergency, notify all individuals whose data was shared
   - Offer opportunity to withdraw consent for future emergencies
   - Audit and publish (anonymized) emergency sharing statistics

5. **Technical Implementation:**
   - "Break glass" feature in consent management system
   - Emergency access logged separately with enhanced audit trail
   - Automatic notification generation for post-hoc consent process

**Deliverable:** "Emergency Data Sharing Protocol" with authorization levels, procedures, and reconciliation requirements.

---

#### **M17: Deployment Model Specification** | Priority: P2

**Raised By:** Microsoft Azure Lead

**Why This Is Critical:**
Where does this system run? As the Azure Lead noted: *"Public cloud raises data sovereignty concerns. On-premise requires infrastructure humanitarian organizations may not have. Edge computing for offline scenarios needs different architecture entirely."*

**How To Implement:**

1. **Deployment Options Analysis:**
   
   | Option | Pros | Cons | Suitable For |
   |--------|------|------|--------------|
   | Public Cloud (AWS/Azure/GCP) | Scalable, managed, global | Sovereignty concerns, cost at scale | Non-sensitive workloads, orgs without IT capacity |
   | Humanitarian Private Cloud | Sovereignty control, trusted | Limited capacity, single point of failure | Sensitive data, regulatory requirements |
   | Federated (each org hosts own) | No central dependency | Interop complexity, uneven capability | Large orgs with IT capacity |
   | Hybrid | Flexibility | Complexity | Most realistic for diverse ecosystem |
   | Edge-First | Offline capable | Limited compute, sync complexity | Field operations |

2. **Data Sovereignty Analysis:**
   - Map data types to sovereignty requirements by jurisdiction
   - Identify which jurisdictions prohibit cloud storage of refugee data
   - Design data residency controls (data stays in region X)

3. **Recommended Architecture:**
   - **Tier 1 (Edge):** Mobile apps and field devices; offline-capable; local encryption
   - **Tier 2 (Regional Hub):** On-premise or private cloud in-region; handles sync, regional queries
   - **Tier 3 (Global):** Cloud-based for non-sensitive workloads (anonymized analytics, model training)
   - **Confidential Computing:** For sensitive cloud workloads, require TEE (SGX/SEV)

**Deliverable:** "Deployment Architecture Guide" with decision tree, sovereignty analysis, and reference configurations.

---

#### **M18: Harm Reduction Protocols** | Priority: P2

**Raised By:** Community Data Steward

**Why This Is Critical:**
As the Community Steward asked: *"What happens when the system fails? How do people still get aid?"*

**How To Implement:**

1. **Failure Mode Analysis:**
   - System unavailable (outage, connectivity loss)
   - Credential lost or corrupted
   - Consent system malfunctions
   - Crypto verification fails

2. **Fallback Procedures:**
   - **Principle:** System failure never prevents essential aid delivery
   - **Level 1:** Degraded digital — cached credentials, offline verification
   - **Level 2:** Manual override — staff can authorize aid with paper documentation + supervisor approval
   - **Level 3:** Emergency blanket — in mass emergency, aid delivered without individual verification; reconciled post-hoc

3. **Service Continuity:**
   - Define Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO)
   - Backup consent records with clear restoration procedures
   - Staff training on manual procedures

4. **User Communication:**
   - Clear explanation of what happens if they can't access the system
   - Assurance that aid won't be denied due to technical failure
   - Contact information for human assistance

**Deliverable:** "Service Continuity and Harm Reduction Protocol" with failure modes, fallbacks, and RTO/RPO targets.

---

#### **M19: Offline/Low-Tech DAO Participation Pathways** | Priority: P2

**Raised By:** Community Data Steward

**Why This Is Critical:**
As the Community Steward stated: *"Token-based voting will exclude the most vulnerable. The refugees with smartphones and connectivity will vote; those in remote camps won't. This recreates inequality."*

**How To Implement:**

1. **Participation Tiers:**
   - **Digital Direct:** Individuals with devices/connectivity vote directly via app
   - **Community Representative:** Elected camp/community representatives vote on behalf of constituents
   - **Paper Input:** Physical feedback forms collected and aggregated into DAO proposals
   - **In-Person Assembly:** Periodic community meetings where votes are cast collectively

2. **Representative Model:**
   - Communities elect "Data Stewards" who participate in DAO on their behalf
   - Clear accountability: stewards report back to communities
   - Term limits and recall mechanisms

3. **Weighting:**
   - Ensure offline/low-tech input is weighted fairly against digital votes
   - Consider population-based weighting, not token-based
   - Audit participation rates to ensure marginalized communities are heard

4. **Information Access:**
   - DAO proposals summarized in accessible formats (audio, visual, multiple languages)
   - Community meetings to explain proposals before votes
   - Feedback loops to confirm understanding

**Deliverable:** "Inclusive Governance Participation Framework" with participation tiers, representative model, and weighting methodology.

---

#### **M20: Aid Conditionality Analysis** | Priority: P2

**Raised By:** Community Data Steward

**Why This Is Critical:**
As the Community Steward stated: *"The entire humanitarian system is coercive — I give my data because I need food, shelter, resettlement. There's no world where my consent to aid agencies is truly 'free.' The manifesto treats coercion as an edge case when it's the baseline condition."*

**How To Implement:**

1. **Explicit Acknowledgment:**
   - Add manifesto section acknowledging structural power asymmetry in humanitarian contexts
   - Recognize that "consent" in aid settings is inherently constrained
   - Frame goal as "minimizing coercion" not "eliminating coercion"

2. **Design Principles:**
   - **Essential Aid Unconditional:** Food, water, shelter, emergency medical care never conditioned on data sharing beyond minimum identification
   - **Graduated Consent:** More data sharing unlocks more services, but baseline is protected
   - **Reversibility:** Revoking consent reduces services to baseline, doesn't eliminate them
   - **Transparency:** Clear explanation of what data enables what services

3. **Anti-Discrimination Safeguards:**
   - Monitor for patterns where consent refusal correlates with aid denial
   - Audit access rates by consent level to detect discrimination
   - Grievance mechanism for individuals who believe they were denied aid due to consent choices

4. **Staff Training:**
   - Train staff that consent refusal is a protected right
   - Scripts for responding to consent refusal without pressure
   - Supervision and accountability for staff who condition aid on consent

**Deliverable:** "Aid Conditionality and Consent Ethics Framework" with principles, safeguards, and training requirements.

---

## Round 2 Proposed Revisions

**Status**: Round 2 Complete — 40 Concrete Improvements Identified

---

### Consolidated Improvements by Judge

#### Judge 1 (UNHCR CDO) — 5 Improvements
1. Add "Offline-First Architecture" as foundational principle (new Section 2.5)
2. Create tiered consent model (4 levels) instead of unlimited granularity
3. Add emergency override protocol (new Section 6.4) with 3 emergency levels
4. Require integration specifications for PRIMES, SCOPE, HDX (new Appendix B)
5. Add staff capacity assessment requirement (Section 13.2 amendment)

#### Judge 2 (ICRC DPO) — 5 Improvements
1. Add explicit threat model section (new Section II.0)
2. Resolve blockchain immutability vs. erasure contradiction (amend Sections 4, 34)
3. Replace aspirational duress detection with concrete protocol (rewrite Section 7.2)
4. Add compartmentalized trust model for conflict contexts (new Section 6.5)
5. Add physical capture and data destruction protocol (new Section 4.4)

#### Judge 3 (OCHA Lead) — 5 Improvements
1. Add Verifiable Credential schema repository (new Appendix C)
2. Add trust registry specification (new Section 10.4)
3. Clarify DAO governance relationship to humanitarian coordination (amend Section 11)
4. Add interoperability testing requirements (new Section 36.3)
5. Replace vague "align with ISO/IEC" with specific standard references (amend Section 36)

#### Judge 4 (ID.me Architect) — 5 Improvements
1. Add identity proofing protocol (new Section 10.5) with IAL mapping
2. Add key recovery mechanism specification (new Section 10.6)
3. Add assurance level taxonomy (new Section 10.7) mapped to NIST 800-63
4. Add biometric handling standards (Section 10.5 subsection)
5. Add credential lifecycle management (new Section 10.8)

#### Judge 5 (W3C DID Lead) — 5 Improvements
1. Add DID method evaluation framework (new Appendix D)
2. Specify DID method requirements for humanitarian contexts (amend Section 10.2)
3. Add Verifiable Presentation protocol (new Section 10.9)
4. Add trust registry federation model (Section 10.4 enhancement)
5. Add credential revocation specification (new Section 10.10)

#### Judge 6 (Stanford Crypto) — 5 Improvements
1. Add cryptographic protocol specification appendix (new Appendix E)
2. Add differential privacy governance (new Section 9.4)
3. Remove or heavily caveat SMPC claims (amend Section 9.2)
4. Add key management architecture (new Section 9.5)
5. Add cryptographic agility requirement (Section 9.1 amendment)

#### Judge 7 (Azure Lead) — 5 Improvements
1. Add reference architecture document (new Appendix F)
2. Add confidential computing requirements (new Section 9.6)
3. Specify smart contract platform requirements (amend Section 3.2)
4. Add deployment model decision framework (new Section 36.4)
5. Add infrastructure requirements specification (new Appendix G)

#### Judge 8 (Community Steward) — 5 Improvements
1. Add consent UX design requirements (new Section 3.4)
2. Add explicit aid conditionality prohibition (amend Section 2.2, new Section 1.4)
3. Add power asymmetry acknowledgment (new Section 1.3)
4. Add offline/low-tech governance participation (amend Section 11.2)
5. Add harm reduction and fallback protocols (new Section 12.4)

---

### H) Fix Roadmap

#### Horizon 1 (0-30 days): Policy/Clarity Fixes
*Low engineering lift; primarily document updates and policy clarifications*

| # | Fix | Owner | Effort | Impact |
|---|-----|-------|--------|--------|
| H1.1 | **Add explicit threat model section** — Document 6 adversary classes with capabilities, motivations, required mitigations | Security Lead | 5 days | Unblocks all crypto decisions |
| H1.2 | **Add power asymmetry acknowledgment** — New Section 1.3 stating consent exists within structural coercion | Policy Lead | 1 day | Sets honest foundation |
| H1.3 | **Add aid conditionality prohibition** — Explicit statement that essential services never conditional on consent | Policy Lead | 1 day | Non-negotiable for endorsement |
| H1.4 | **Resolve blockchain vs. erasure contradiction** — Add precedence statement: "Right to erasure takes precedence over immutability" | Policy Lead | 1 day | Resolves legal tension |
| H1.5 | **Replace vague standard references with specifics** — Cite W3C DID Core 1.0, VC Data Model 1.1, ISO 27001/27701, OCHA Guidelines | Standards Lead | 2 days | Enables compliance checking |
| H1.6 | **Caveat SMPC claims** — Revise to specify SMPC for "specific high-value computations" not routine operations | Crypto Lead | 1 day | Honest about limitations |
| H1.7 | **Add cryptographic agility requirement** — Mandate algorithm abstraction and migration planning | Crypto Lead | 1 day | Future-proofs design |
| H1.8 | **Simplify consent to 4 tiers** — Replace "unlimited granular" with 4 predefined levels + opt-in customization | UX Lead | 3 days | Reduces complexity |
| H1.9 | **Add governance authority mapping** — Table showing DAO vs. HCT/cluster decision authority | Governance Lead | 2 days | Resolves coordination conflict |
| H1.10 | **Reframe duress as baseline** — Rewrite Section 7 to acknowledge structural coercion, not edge case | Policy Lead | 2 days | Honest framing |

**H1 Total Effort: ~20 person-days**

---

#### Horizon 2 (1-3 months): Architecture & Prototype
*Significant engineering; specifications and proof-of-concept required*

| # | Fix | Owner | Effort | Impact |
|---|-----|-------|--------|--------|
| H2.1 | **Complete reference architecture** — Component diagram, data flows, trust boundaries, deployment options | Architecture Lead | 15 days | Enables implementation |
| H2.2 | **Design offline-first architecture** — Tiered model (edge/hub/cloud), sync protocols, conflict resolution | Architecture Lead | 20 days | Unblocks humanitarian deployment |
| H2.3 | **Specify cryptographic protocols** — ZKP circuits, DP parameters (ε, δ), SMPC schemes, key management | Crypto Lead | 15 days | Makes crypto claims auditable |
| H2.4 | **Complete identity proofing protocol** — IAL mapping, evidence requirements, biometric handling | Identity Lead | 15 days | Enables identity layer |
| H2.5 | **Design key recovery mechanism** — Threshold institutional + biometric re-enrollment + anti-coercion | Identity Lead | 10 days | Addresses usability gap |
| H2.6 | **Create DID method evaluation** — Decision matrix, method selection for humanitarian contexts | Standards Lead | 10 days | Resolves method ambiguity |
| H2.7 | **Define VC schemas** — JSON-LD schemas for identity, protection, health, assistance credentials | Standards Lead | 15 days | Enables interoperability |
| H2.8 | **Design trust registry** — Contents, governance, distribution, federation model | Governance Lead | 10 days | Enables credential verification |
| H2.9 | **Specify consent UX requirements** — Reading level, modalities, testing protocol, language coverage | UX Lead | 10 days | Addresses usability gap |
| H2.10 | **Design duress detection methodology** — Contextual indicators, safe words, delayed consent, private re-consent | Protection Lead | 10 days | Operationalizes duress handling |
| H2.11 | **Add emergency override protocol** — 3 levels, authorization, time bounds, post-hoc reconciliation | Operations Lead | 5 days | Enables emergency response |
| H2.12 | **Design compartmentalized trust model** — Conflict-context data segregation, ABE, cross-compartment rules | Security Lead | 15 days | Enables ICRC-type operations |
| H2.13 | **Specify smart contract platform** — Evaluate Hyperledger Fabric/Besu, governance, gas-free model | Platform Lead | 10 days | Resolves platform ambiguity |
| H2.14 | **Add confidential computing requirements** — TEE specs, attestation, limitations | Security Lead | 5 days | Protects data in use |
| H2.15 | **Design harm reduction protocols** — Fallbacks, manual overrides, staff authorization | Operations Lead | 5 days | Ensures aid continuity |

**H2 Total Effort: ~170 person-days (~6 person-months)**

---

#### Horizon 3 (3-12 months): Scale, Governance, Audits
*Production readiness; institutional and technical scale*

| # | Fix | Owner | Effort | Impact |
|---|-----|-------|--------|--------|
| H3.1 | **Field pilot in low-connectivity setting** — 30+ day pilot in South Sudan, CAR, or similar | Operations Lead | 90 days | Validates offline architecture |
| H3.2 | **Consent UX testing with refugees** — Usability testing across literacy, age, stress conditions | UX Lead | 60 days | Validates accessibility |
| H3.3 | **Integration with PRIMES** — Wrapper API, consent layer, pilot with UNHCR | Integration Lead | 90 days | Proves interoperability |
| H3.4 | **Integration with SCOPE** — Bridge pattern, biometric interop, pilot with WFP | Integration Lead | 90 days | Proves interoperability |
| H3.5 | **Integration with HDX** — Provenance tracking, aggregate consent basis | Integration Lead | 45 days | Proves interoperability |
| H3.6 | **Security red team exercise** — External security firm tests threat model mitigations | Security Lead | 30 days | Validates security claims |
| H3.7 | **Cryptographic audit** — External review of protocol implementations | Crypto Lead | 30 days | Validates crypto claims |
| H3.8 | **Establish trust registry governance** — Consortium formation, issuer onboarding, first issuers | Governance Lead | 90 days | Enables production |
| H3.9 | **DAO governance pilot** — Limited deployment with community participation mechanisms | Governance Lead | 60 days | Tests governance model |
| H3.10 | **Staff training program** — Curriculum, certification, help desk establishment | Training Lead | 60 days | Enables field deployment |
| H3.11 | **Certification program launch** — Scoring criteria, audit process, first certifications | Compliance Lead | 90 days | Drives adoption |
| H3.12 | **Scale testing** — Demonstrate 10M+ credential capacity, performance benchmarks | Platform Lead | 30 days | Validates scalability |
| H3.13 | **Physical security protocols** — HSM deployment, remote wipe, capture procedures | Security Lead | 45 days | Enables conflict deployment |
| H3.14 | **Multi-language consent interfaces** — 20+ languages, audio, video explanations | UX Lead | 90 days | Global accessibility |
| H3.15 | **Community steward elections** — Pilot in 3+ locations, governance participation | Community Lead | 60 days | Inclusive governance |

**H3 Total Effort: ~960 person-days (~3.5 person-years)**

---

### New Sections/Appendices Required

| Section | Title | Content Summary |
|---------|-------|-----------------|
| I.3 (new) | Power Asymmetry Acknowledgment | Explicit statement that humanitarian consent exists within structural coercion |
| I.4 (new) | Aid Conditionality Prohibition | Essential services never conditional on consent |
| II.0 (new) | Threat Model | 6 adversary classes, capabilities, mitigations, attack trees |
| 3.4 (new) | Consent UX Requirements | Reading level, modalities, testing, tiered model |
| 4.4 (new) | Data Destruction Protocols | Physical capture, remote wipe, HSM, staff procedures |
| 6.4 (new) | Emergency Override Protocol | 3 levels, authorization, time bounds, reconciliation |
| 6.5 (new) | Compartmentalized Trust Model | Conflict-context segregation, ABE, cross-compartment rules |
| 9.4 (new) | Differential Privacy Governance | ε budgets, composition, query auditing |
| 9.5 (new) | Key Management Architecture | Generation, storage, rotation, escrow |
| 9.6 (new) | Confidential Computing Requirements | TEE specs, attestation |
| 10.4 (new) | Trust Registry Specification | Contents, governance, distribution, federation |
| 10.5 (new) | Identity Proofing Protocol | IAL mapping, evidence, biometrics |
| 10.6 (new) | Key Recovery Mechanism | Threshold, biometric, anti-coercion |
| 10.7 (new) | Assurance Level Taxonomy | NIST 800-63 mapping |
| 10.8 (new) | Credential Lifecycle Management | Issuance, renewal, revocation |
| 10.9 (new) | Verifiable Presentation Protocol | Selective disclosure, holder binding |
| 10.10 (new) | Credential Revocation Specification | Format, propagation, privacy |
| 12.4 (new) | Harm Reduction Protocols | Fallbacks, manual overrides |
| 36.3 (new) | Interoperability Testing Requirements | Certification prerequisites |
| 36.4 (new) | Deployment Model Framework | Decision tree, sovereignty |
| Appendix B (new) | Humanitarian System Integration | PRIMES, SCOPE, HDX APIs |
| Appendix C (new) | Verifiable Credential Schemas | JSON-LD definitions |
| Appendix D (new) | DID Method Evaluation | Decision matrix |
| Appendix E (new) | Cryptographic Specifications | Protocols, parameters |
| Appendix F (new) | Reference Architecture | Diagrams, data flows |
| Appendix G (new) | Infrastructure Requirements | Hardware, network, cost | 

---

## Scoring Summary

**Status**: Complete — Overall Score: 3,155 / 6,400 (49%)

### Scoring Matrix

| Judge | C1: Operational | C2: Privacy | C3: Interop | C4: Identity | C5: Crypto | C6: Governance | C7: Consent UX | C8: Implementation | **TOTAL** |
|-------|-----------------|-------------|-------------|--------------|------------|----------------|----------------|-------------------|-----------|
| 1. UNHCR CDO | 40 | 65 | 50 | 55 | 45 | 60 | 45 | 35 | **395** |
| 2. ICRC DPO | 50 | 55 | 60 | 50 | 35 | 55 | 40 | 40 | **385** |
| 3. OCHA Lead | 55 | 60 | 45 | 50 | 50 | 40 | 55 | 45 | **400** |
| 4. ID.me Architect | 60 | 65 | 55 | 30 | 50 | 55 | 50 | 40 | **405** |
| 5. W3C DID Lead | 55 | 60 | 40 | 45 | 55 | 50 | 55 | 40 | **400** |
| 6. Stanford Crypto | 50 | 55 | 55 | 50 | 25 | 60 | 55 | 35 | **385** |
| 7. Azure Lead | 45 | 60 | 50 | 55 | 45 | 55 | 50 | 25 | **385** |
| 8. Community Steward | 55 | 70 | 60 | 55 | 50 | 40 | 35 | 35 | **400** |
| **CATEGORY TOTAL** | **410** | **490** | **415** | **390** | **355** | **415** | **385** | **295** | **3,155** |
| **MAX POSSIBLE** | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 800 | **6,400** |
| **PERCENTAGE** | 51% | 61% | 52% | 49% | 44% | 52% | 48% | 37% | **49%** |

### Category Performance Analysis

| Rank | Category | Score | % | Assessment |
|------|----------|-------|---|------------|
| 1 | C2: Privacy & Do-No-Harm | 490/800 | 61% | **Strongest** — Dignity framing resonates; contextual tiering valued |
| 2 | C3: Interop & Standards | 415/800 | 52% | Mentioned but unspecified; schemas and registries missing |
| 3 | C6: Governance | 415/800 | 52% | Good concepts; conflicts with existing coordination |
| 4 | C1: Operational Feasibility | 410/800 | 51% | Humanitarian awareness present; offline gap critical |
| 5 | C4: Identity Assurance | 390/800 | 49% | Right direction (SSI/DID); proofing and recovery missing |
| 6 | C7: Consent UX | 385/800 | 48% | Good principles; not designed for target population |
| 7 | C5: Crypto & Security | 355/800 | 44% | Correct primitives named; specifications absent (vaporware) |
| 8 | C8: Implementation | 295/800 | 37% | **Weakest** — No architecture, no deployment model, not buildable |

### Top 10 Deduction Reasons

| Rank | Deduction Theme | Frequency | Est. Points Lost | Judges Citing |
|------|-----------------|-----------|------------------|---------------|
| 1 | **No offline/low-connectivity architecture** | 7 | ~350 | UNHCR, ICRC, Stanford, Azure, W3C, ID.me, Community |
| 2 | **Cryptographic claims unspecified (vaporware)** | 6 | ~300 | Stanford, ICRC, Azure, OCHA, W3C, ID.me |
| 3 | **No reference architecture or deployment model** | 5 | ~280 | Azure, UNHCR, OCHA, W3C, Stanford |
| 4 | **Identity proofing methodology absent** | 4 | ~220 | ID.me, W3C, UNHCR, ICRC |
| 5 | **Consent UX not designed for target population** | 4 | ~220 | Community, UNHCR, ID.me, OCHA |
| 6 | **No threat model defined** | 4 | ~200 | Stanford, ICRC, Azure, W3C |
| 7 | **Governance conflicts with humanitarian coordination** | 4 | ~200 | OCHA, UNHCR, Community, ICRC |
| 8 | **Duress/coercion treated as edge case, not baseline** | 3 | ~160 | Community, ICRC, UNHCR |
| 9 | **No integration with existing systems (PRIMES, SCOPE, HDX)** | 3 | ~150 | UNHCR, OCHA, Azure |
| 10 | **Key recovery mechanism missing** | 3 | ~140 | ID.me, W3C, Community |

### Detailed Deduction Explanations by Judge

#### Judge 1: UNHCR CDO — Total: 395/800

| Category | Score | Deductions | How to Earn Back |
|----------|-------|------------|------------------|
| C1: Operational | 40/100 | -60: No offline architecture; no emergency protocols; no PRIMES/SCOPE integration | Add offline-first design; emergency overrides; integration pathway |
| C2: Privacy | 65/100 | -35: Contextual tiering good but implementation undefined | Add implementation guidelines for contextual protocols |
| C3: Interop | 50/100 | -50: Mentions standards but no humanitarian system integration | Document APIs for PRIMES, SCOPE, HDX |
| C4: Identity | 55/100 | -45: SSI good but no proofing for document-less populations | Add identity proofing protocol |
| C5: Crypto | 45/100 | -55: Crypto requires connectivity manifesto doesn't provide | Design offline ZKP verification |
| C6: Governance | 60/100 | -40: DAO conflicts with HCT/cluster coordination | Map DAO to existing structures |
| C7: Consent UX | 45/100 | -55: "Modular consent" too complex for field | Add tiered consent; staff training |
| C8: Implementation | 35/100 | -65: Not deployable; no cost model; no field testing | Add deployment model; field pilot |

#### Judge 2: ICRC DPO — Total: 385/800

| Category | Score | Deductions | How to Earn Back |
|----------|-------|------------|------------------|
| C1: Operational | 50/100 | -50: No conflict-zone operations; no cross-front-line protocols | Add compartmentalized operations |
| C2: Privacy | 55/100 | -45: No threat model; blockchain/erasure contradiction | Add threat model; resolve contradiction |
| C3: Interop | 60/100 | -40: Missing IHL alignment | Add IHL compliance mapping |
| C4: Identity | 50/100 | -50: No compartmentalization for neutral operations | Add compartment-specific identity |
| C5: Crypto | 35/100 | -65: No threat model = arbitrary crypto choices | Complete threat model first |
| C6: Governance | 55/100 | -45: No conflict-context governance | Add cross-front-line governance |
| C7: Consent UX | 40/100 | -60: Duress as edge case; no detection methodology | Reframe duress as baseline; add methodology |
| C8: Implementation | 40/100 | -60: No physical security; no capture protocols | Add capture/destruction protocols |

#### Judge 3: OCHA Lead — Total: 400/800

| Category | Score | Deductions | How to Earn Back |
|----------|-------|------------|------------------|
| C1: Operational | 55/100 | -45: Not operationalized | Add operational procedures |
| C2: Privacy | 60/100 | -40: Data responsibility implicit | Map to OCHA Guidelines explicitly |
| C3: Interop | 45/100 | -55: No specs; no schemas; no trust registry | Add W3C versions, schemas, registry |
| C4: Identity | 50/100 | -50: VCs undefined; no humanitarian schemas | Publish schema repository |
| C5: Crypto | 50/100 | -50: No parameters | Add crypto specification appendix |
| C6: Governance | 40/100 | -60: DAO parallel to HCT/clusters | Subordinate DAO in emergencies |
| C7: Consent UX | 55/100 | -45: Complexity unmanaged | Add tiered model; UX specs |
| C8: Implementation | 45/100 | -55: No interop testing; no integration | Require interop certification |

#### Judge 4: ID.me Architect — Total: 405/800

| Category | Score | Deductions | How to Earn Back |
|----------|-------|------------|------------------|
| C1: Operational | 60/100 | -40: Reasonable humanitarian framing | Minor |
| C2: Privacy | 65/100 | -35: Selective disclosure good | Add presentation protocols |
| C3: Interop | 55/100 | -45: Missing credential interop | Add exchange protocols |
| C4: Identity | 30/100 | -70: **CRITICAL** — No proofing, no recovery, no IAL, no biometrics | Complete identity section |
| C5: Crypto | 50/100 | -50: No ZKP specs for identity | Specify identity ZKPs |
| C6: Governance | 55/100 | -45: Identity governance unclear | Add credential issuance governance |
| C7: Consent UX | 50/100 | -50: Key management burden on users | Simplify; add institutional recovery |
| C8: Implementation | 40/100 | -60: Can't implement without proofing | Complete identity spec first |

#### Judge 5: W3C DID Lead — Total: 400/800

| Category | Score | Deductions | How to Earn Back |
|----------|-------|------------|------------------|
| C1: Operational | 55/100 | -45: Offline not addressed for DIDs | Specify offline-capable methods |
| C2: Privacy | 60/100 | -40: DIDs enable privacy | Add presentation protocols |
| C3: Interop | 40/100 | -60: 100+ DID methods; no selection; no schemas | Add method evaluation; publish schemas |
| C4: Identity | 45/100 | -55: No method specified; no trust registry | Specify methods; design registry |
| C5: Crypto | 55/100 | -45: VC signatures defined | Specify algorithms; key formats |
| C6: Governance | 50/100 | -50: Trust registry governance missing | Add issuer onboarding process |
| C7: Consent UX | 55/100 | -45: Aligns with SSI philosophy | Add wallet UX specs |
| C8: Implementation | 40/100 | -60: DID method decision has massive downstream effects | Make selection with rationale |

#### Judge 6: Stanford Crypto — Total: 385/800

| Category | Score | Deductions | How to Earn Back |
|----------|-------|------------|------------------|
| C1: Operational | 50/100 | -50: Crypto needs infrastructure spec | Address in architecture |
| C2: Privacy | 55/100 | -45: "Privacy-preserving" claimed without proof | Specify properties achieved |
| C3: Interop | 55/100 | -45: Crypto standards exist | Reference specific standards |
| C4: Identity | 50/100 | -50: Not crypto-focused | Addressed by identity judge |
| C5: Crypto | 25/100 | -75: **CRITICAL FAILURE** — No protocols, no parameters, no threat model, SMPC infeasible | Complete crypto specification |
| C6: Governance | 60/100 | -40: Smart contracts could work | Add key management governance |
| C7: Consent UX | 55/100 | -45: Smart contract automation plausible | Add crypto UX considerations |
| C8: Implementation | 35/100 | -65: Unspecified crypto cannot be audited | Security review impossible without specs |

#### Judge 7: Azure Lead — Total: 385/800

| Category | Score | Deductions | How to Earn Back |
|----------|-------|------------|------------------|
| C1: Operational | 45/100 | -55: No deployment model for humanitarian infrastructure | Add tiered deployment |
| C2: Privacy | 60/100 | -40: TEE mentioned once; should be mandatory | Mandate confidential computing |
| C3: Interop | 50/100 | -50: No platform; no APIs | Specify platform; publish APIs |
| C4: Identity | 55/100 | -45: Not architecture-focused | Addressed elsewhere |
| C5: Crypto | 45/100 | -55: No architecture for crypto components | Add crypto infrastructure |
| C6: Governance | 55/100 | -45: Smart contracts plausible | Specify consensus; node governance |
| C7: Consent UX | 50/100 | -50: Consent engine concept OK | Add system architecture |
| C8: Implementation | 25/100 | -75: **CRITICAL FAILURE** — No architecture, no diagrams, no deployment, no cost model | Complete reference architecture |

#### Judge 8: Community Steward — Total: 400/800

| Category | Score | Deductions | How to Earn Back |
|----------|-------|------------|------------------|
| C1: Operational | 55/100 | -45: Humanitarian context acknowledged | Add community-centered design |
| C2: Privacy | 70/100 | -30: Dignity framing resonates strongly | Strengthen with lived experience |
| C3: Interop | 60/100 | -40: Not community focus | Addressed elsewhere |
| C4: Identity | 55/100 | -45: SSI gives control | Ensure accessible to low-tech users |
| C5: Crypto | 50/100 | -50: Complexity concern | Make crypto invisible to users |
| C6: Governance | 40/100 | -60: DAO excludes offline; token voting creates inequality | Add non-digital participation; population voting |
| C7: Consent UX | 35/100 | -65: **CRITICAL** — Not designed for refugees; assumes literacy, devices | Complete UX redesign; test with refugees |
| C8: Implementation | 35/100 | -65: No harm reduction; no fallbacks | Add harm reduction; manual overrides |

---

## Non-Negotiables by Judge

### Summary: 19 Non-Negotiables Identified

| Judge | Non-Negotiables | Count |
|-------|-----------------|-------|
| UNHCR CDO | Offline proven in field; essential aid unconditional | 2 |
| ICRC DPO | Threat model reviewed; duress as baseline; compartmentalization | 3 |
| OCHA Lead | VC schemas defined; DAO subordinate to HC in emergencies | 2 |
| ID.me Architect | Identity proofing specified; key recovery distributed | 2 |
| W3C DID Lead | DID methods justified; VC schemas use W3C standard | 2 |
| Stanford Crypto | Crypto specified with parameters; threat model first; SMPC scoped | 3 |
| Azure Lead | Reference architecture complete; confidential computing mandatory | 2 |
| Community Steward | Consent UX tested with refugees; essential aid unconditional; power asymmetry acknowledged | 3 |

---

### Detailed Non-Negotiables

#### Judge 1: UNHCR CDO
1. **Offline functionality must be proven in field conditions** — not lab tested — before deployment. Minimum 30-day pilot in low-connectivity setting (South Sudan, CAR, or similar).
2. **Essential humanitarian services (food, water, shelter, emergency health) must never be conditional on consent** beyond minimum identification. This must be explicit in manifesto text.

#### Judge 2: ICRC DPO
1. **Explicit threat model must be completed and reviewed by security professionals** before production deployment. Red team exercise required, not just paper review.
2. **Duress and coercion must be treated as baseline conditions, not edge cases.** Manifesto must explicitly state humanitarian consent exists within structural power asymmetry.
3. **Data collected in conflict zones must be compartmentalizable** — system must support operational neutrality across front lines.

#### Judge 3: OCHA Lead
1. **Verifiable Credential schemas must be defined and published** before credential issuance. No proprietary schemas that lock in vendors.
2. **DAO governance must complement, not compete with, humanitarian coordination.** DAO operational decisions must be subordinate to Humanitarian Coordinator authority during emergencies.

#### Judge 4: ID.me Architect
1. **Identity proofing methodology must be specified** with explicit assurance levels. "Verified identity" claims are meaningless without verification rigor definition.
2. **Key recovery must not reintroduce single points of failure.** Threshold or distributed recovery required; no single organization can unilaterally recover keys.

#### Judge 5: W3C DID Lead
1. **DID method selection must be justified against humanitarian requirements.** Cannot just say "use DIDs" — must specify which methods and why.
2. **Verifiable Credential schemas must use W3C VC Data Model 1.1** and be published in open, versioned repository. No proprietary extensions without working group review.

#### Judge 6: Stanford Crypto Lead
1. **Every cryptographic claim must have named protocol, specified parameters, and stated assumptions.** "Use ZKPs" is not a specification. Non-negotiable for any security review.
2. **Threat model must be completed before cryptographic selections are finalized.** Cannot choose crypto without knowing adversary.
3. **SMPC claims must be scoped to specific, justified use cases** — not presented as general-purpose solution.

#### Judge 7: Azure Lead
1. **Reference architecture must be completed and reviewed** before implementation begins. Cannot build without blueprint.
2. **Confidential computing must be mandatory for sensitive data processing** in cloud environments. Standard VMs insufficient for refugee data protection.

#### Judge 8: Community Steward
1. **Consent UX must be tested with actual refugees** — not just designed by technologists. Usability testing in realistic conditions required before deployment.
2. **Essential aid must be explicitly unconditional.** Manifesto must state unambiguously that food, water, shelter, emergency healthcare never withheld based on consent choices.
3. **Power asymmetry must be acknowledged, not ignored.** Manifesto pretending consent is "free" in humanitarian contexts is dishonest and will not earn community trust.

---

### Non-Negotiable Compliance Status

| Non-Negotiable | Current Status | Blocking Deployment? |
|----------------|----------------|----------------------|
| Offline proven in field | ❌ Not addressed | **YES** |
| Essential aid unconditional | ❌ Not explicit | **YES** |
| Threat model complete | ❌ Absent | **YES** |
| Duress as baseline | ❌ Treated as edge case | **YES** |
| Compartmentalization supported | ❌ Not addressed | **YES** (conflict contexts) |
| VC schemas defined | ❌ Not specified | **YES** |
| DAO subordinate in emergencies | ❌ Authority unclear | **YES** |
| Identity proofing specified | ❌ Absent | **YES** |
| Key recovery distributed | ❌ Not designed | **YES** |
| DID methods justified | ❌ Unspecified | **YES** |
| VC schemas use W3C standard | ❌ Unspecified | **YES** |
| Crypto protocols specified | ❌ Vaporware | **YES** |
| SMPC appropriately scoped | ❌ Overstated | **YES** |
| Reference architecture complete | ❌ Absent | **YES** |
| Confidential computing mandatory | ❌ Mentioned once | YES (cloud deployments) |
| Consent UX tested with refugees | ❌ Not conducted | **YES** |
| Power asymmetry acknowledged | ❌ Ignored | **YES** |

**Result: 17 of 17 evaluated non-negotiables are currently NOT MET.**

---

## Top Priority Risks

### Each Judge's #1 Risk to Resolve First

| Judge | Top Risk | Rationale |
|-------|----------|-----------|
| **UNHCR CDO** | Offline architecture | "Without this, the entire manifesto is a theoretical exercise that cannot be deployed in the majority of humanitarian contexts where it's most needed. Every other improvement depends on this foundation." |
| **ICRC DPO** | Absence of threat model | "Without knowing who we're defending against, all security claims are meaningless. You cannot design cryptographic protections without adversary assumptions. This is Security 101, and its absence suggests the authors lack security engineering experience." |
| **OCHA Lead** | Lack of interoperability specifications | "The humanitarian ecosystem is fragmented. Without concrete schemas, trust registries, and integration pathways, this becomes yet another siloed system that doesn't talk to anything else." |
| **ID.me Architect** | Identity proofing gap | "The manifesto assumes digital identity exists but never explains how it's bootstrapped. In humanitarian contexts, people often lack documents. Without proofing methodology, the entire identity layer is built on sand." |
| **W3C DID Lead** | Unspecified DID methods | "There are 100+ DID methods with wildly different properties. Choosing the wrong one would make the system unusable for humanitarian contexts. This decision has massive downstream implications and must be made explicitly." |
| **Stanford Crypto** | Cryptographic vaporware | "The manifesto's credibility depends on its technical claims. Currently, those claims are unsubstantiated. If this goes to security review in current state, it will be rejected immediately. Specify protocols or remove claims." |
| **Azure Lead** | No reference architecture | "The manifesto describes components but not how they connect. This isn't a design — it's a shopping list. Without architecture, different implementers will build incompatible systems, defeating the interoperability goal." |
| **Community Steward** | Consent UX designed for technologists | "If people can't understand and use the system, everything else is irrelevant. 'Data dignity' means nothing if the dignity-protecting mechanisms are incomprehensible to those they're meant to protect. Start with the user, not the technology." |

### Risk Prioritization Matrix

| Risk | Frequency | Blocks Other Work? | Effort to Fix | Recommended Priority |
|------|-----------|-------------------|---------------|----------------------|
| No offline architecture | 7 judges | Yes — all deployment | High (20 days) | **P0** |
| No threat model | 4 judges | Yes — all security | Medium (5 days) | **P0** |
| Cryptographic vaporware | 6 judges | Yes — security review | High (15 days) | **P0** |
| No reference architecture | 5 judges | Yes — all implementation | High (15 days) | **P0** |
| Identity proofing absent | 4 judges | Yes — identity layer | Medium (15 days) | **P1** |
| Consent UX unsuitable | 4 judges | Yes — user acceptance | Medium (10 days) | **P1** |
| DID methods unspecified | 4 judges | Yes — identity implementation | Medium (10 days) | **P1** |
| Interop specs missing | 3 judges | Yes — ecosystem adoption | Medium (15 days) | **P1** |

---

## I) Decision Readout

### Panel Verdict: NOT READY FOR ENDORSEMENT

**Overall Score: 3,155 / 6,400 (49%)**

The Data Dignity Manifesto presents a compelling vision for ethical data governance in humanitarian contexts. The panel unanimously appreciates the dignity-centered framing, the acknowledgment that humanitarian data carries unique risks, and the aspiration toward individual control over personal information.

However, **the manifesto is not endorsable in its current form** due to critical gaps in technical specification, operational feasibility, and user-centered design.

---

### What the Manifesto Gets Right

1. **Dignity framing resonates** — "Data as extension of self" captures something important that pure compliance frameworks miss
2. **Contextual risk tiering** — Recognizing humanitarian data differs from commercial data is essential and often overlooked
3. **Duress acknowledgment** — Naming coercion as a concern (even if underspecified) is rare and valuable
4. **Revocability principle** — Individual control over data, including withdrawal, aligns with rights-based approaches
5. **Transparency and audit** — Commitment to auditable access logs would improve accountability

---

### What Must Change Before Endorsement

#### Critical Blockers (All Must Be Addressed)

| Blocker | Current State | Required State |
|---------|---------------|----------------|
| **Offline architecture** | Not addressed | Fully specified tiered architecture (edge/hub/cloud) with sync protocols, conflict resolution, degraded-mode operations |
| **Threat model** | Absent | Complete adversary analysis (6+ classes), attack trees, control mappings |
| **Cryptographic specifications** | Vaporware (names without specs) | Named protocols, parameters, assumptions for every crypto claim |
| **Reference architecture** | Shopping list of components | C4 diagrams, data flows, trust boundaries, deployment options |
| **Identity proofing** | Assumes identity exists | Complete proofing protocol with IAL mapping, biometrics, document-less procedures |
| **Consent UX** | Designed for technologists | Tested with refugees; tiered model; multi-modal; appropriate reading level |
| **Power asymmetry** | Ignored | Explicitly acknowledged; aid unconditional; duress as baseline |

---

### Minimum Bar for Endorsement

The panel would reconsider endorsement when:

1. **Horizon 1 fixes complete** (all 10 policy/clarity items) — ~20 person-days
2. **Core H2 specifications complete:**
   - Threat model (M2)
   - Offline architecture (M1)
   - Reference architecture (M7)
   - Cryptographic specifications (M3)
   - Identity proofing (M4)
   - Consent UX (M6)
3. **At least one field pilot** demonstrating offline functionality in realistic humanitarian conditions
4. **Consent UX testing** with actual refugee populations showing comprehension and usability
5. **Independent security review** confirming threat model and crypto specifications are sound

**Estimated timeline to minimum bar: 6-9 months with dedicated team**

---

### Recommended Path Forward

1. **Immediate (Week 1-2):** Complete Horizon 1 policy fixes — these are low-effort, high-impact clarifications
2. **Month 1-2:** Complete threat model and reference architecture — these unblock all other technical work
3. **Month 2-4:** Complete cryptographic and identity specifications
4. **Month 3-5:** Design and test consent UX with target populations
5. **Month 4-6:** Build proof-of-concept with offline-first architecture
6. **Month 6-9:** Field pilot, security review, iteration

---

### Final Panel Statements

**UNHCR CDO:** *"The vision is right; the execution is not there yet. Fix offline, fix integration, and we can deploy this where it matters most."*

**ICRC DPO:** *"Until there's a threat model, I cannot assess whether this protects anyone. Start there."*

**OCHA Lead:** *"Interoperability is the whole point. Without schemas and registries, this is just another silo."*

**ID.me Architect:** *"You can't have identity without proofing. This is a foundational gap."*

**W3C DID Lead:** *"Pick your DID methods. The decision has consequences; make it explicitly."*

**Stanford Crypto Lead:** *"Specify your protocols or delete your crypto claims. Vaporware erodes trust."*

**Azure Lead:** *"Give me an architecture and I can tell you if it's buildable. Right now, I cannot."*

**Community Steward:** *"Build this with refugees, not for them. Otherwise, it's just another system that serves the helpers more than the helped."*

---

### Conditional Support Statement

> **The panel conditionally supports the Data Dignity Manifesto's goals and principles.** We believe the humanitarian sector urgently needs better data governance frameworks, and this manifesto identifies the right problems.
>
> However, **we cannot endorse the current document for implementation.** The technical gaps are too significant, the operational feasibility is undemonstrated, and the user-centered design work has not been done.
>
> We encourage the authors to treat this feedback as a roadmap, not a rejection. With 6-9 months of focused work addressing the issues identified, this manifesto could become a meaningful contribution to humanitarian data governance.
>
> We commit to re-reviewing a revised manifesto that addresses the critical blockers identified in this assessment.

---

*End of Roundtable Assessment*

*Document Version: 1.0*  
*Assessment Date: February 1, 2026*  
*Panel Convener: AI Facilitation Agent*

---

*This document will be updated after each roundtable round.*

---

# ROUND 3: EVALUATION OF v2.0 WORKING DRAFT

**Date**: February 2, 2026  
**Document Reviewed**: Data Dignity Manifesto v2.0 Working Draft  
**Document Statistics**: ~35,000 words, 6,270 lines, 8 parts + 7 appendices

---

## Round 3 Summary

The v2.0 Working Draft addresses the critical gaps identified in Rounds 1 and 2. The panel acknowledges substantial improvement across all categories, with the score rising from 49% to 78.3%. The document is now conditionally ready for endorsement, pending resolution of remaining issues.

### What Was Fixed (Major Improvements)

| Original Gap | v2.0 Resolution | Section |
|--------------|-----------------|---------|
| No threat model | Comprehensive 6-class adversary taxonomy with attack scenarios | Part II |
| No offline architecture | Tiered edge/hub/cloud architecture with sync protocols | Appendix A |
| No identity proofing | 5-level IAL framework with document-less procedures | III.10.2 |
| No key recovery | Threshold institutional + biometric + social recovery | III.10.3 |
| SMPC overpromised | Honest scoping: "10,000x overhead, not for routine use" | III.9 |
| Consent UX undesigned | Tiered model, 6th grade reading level, icon-based options | III.3 |
| Coercion as edge case | Power asymmetry acknowledgment; duress as baseline | I.3, III.7 |
| DAO conflicts governance | Authority mapping; DAO advises, doesn't override operations | III.11 |
| Aid conditionality silent | Tier 0 unconditional essential services; explicit prohibition | I.4 |
| Blockchain/erasure conflict | "Erasure over immutability" principle; on-chain hashes only | III.2, IV.2 |

---

## Round 3 Detailed Scoring

### Scoring Matrix (All Judges, All Categories)

| Judge | C1: Ops | C2: Privacy | C3: Interop | C4: Identity | C5: Crypto | C6: Governance | C7: Consent | C8: Implement | Total |
|-------|---------|-------------|-------------|--------------|------------|----------------|-------------|---------------|-------|
| UNHCR CDO | 82 | 80 | 75 | 78 | 76 | 82 | 88 | 72 | **633** |
| ICRC DPO | 78 | 85 | 77 | 80 | 80 | 83 | 82 | 74 | **639** |
| OCHA IM Lead | 80 | 78 | 78 | 76 | 75 | 86 | 80 | 73 | **626** |
| ID.me Architect | 76 | 79 | 79 | 84 | 77 | 80 | 81 | 76 | **632** |
| W3C Co-Chair | 75 | 77 | 80 | 82 | 78 | 78 | 79 | 74 | **623** |
| Stanford Crypto | 74 | 82 | 76 | 79 | 79 | 77 | 80 | 71 | **618** |
| Azure Lead | 77 | 78 | 77 | 77 | 81 | 79 | 78 | 68 | **615** |
| Community Steward | 83 | 81 | 74 | 75 | 73 | 85 | 83 | 70 | **624** |
| **TOTALS** | **625** | **640** | **616** | **631** | **619** | **650** | **651** | **578** | **5,010** |
| **Max Possible** | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 6,400 |
| **Percentage** | 78% | 80% | 77% | 79% | 77% | 81% | 81% | 72% | **78.3%** |

### Category Analysis

| Rank | Category | Score | Assessment |
|------|----------|-------|------------|
| 1 | Consent UX & Coercion Safeguards | 651/800 (81%) | Strong; trauma-informed design needed |
| 2 | Governance & Accountability | 650/800 (81%) | Strong; emergency grievance gap |
| 3 | Privacy & Do-No-Harm | 640/800 (80%) | Good; duress thresholds needed |
| 4 | Identity Assurance & Lifecycle | 631/800 (79%) | Good; renewal process ambiguous |
| 5 | Operational Feasibility | 625/800 (78%) | Good; cost model missing |
| 6 | Cryptographic & Security | 619/800 (77%) | Good; key ceremony needed |
| 7 | Interoperability & Standards | 616/800 (77%) | Acceptable; schemas incomplete |
| 8 | Implementation Readiness | 578/800 (72%) | **Weakest**; architecture diagrams missing |

---

## Remaining Gaps — Round 3 Findings

### Priority 1: Implementation Readiness Gaps (Must Fix)

---

#### **R3-1: Reference Architecture Diagrams Missing** | Severity: HIGH

**Raised By**: Microsoft Azure Lead, W3C Co-Chair

**Current State**: Appendix F lists "Context Diagram, Container Diagram, Component Diagrams" but contains only headers and placeholder text. No actual diagrams are provided.

**Why This Matters**: Without architecture diagrams, implementers must guess how components connect. This leads to incompatible implementations, integration failures, and wasted effort.

**Required Fix**:
1. Create C4 model Context Diagram showing:
   - Data Dignity system boundaries
   - External actors (beneficiaries, staff, organizations, regulators)
   - External systems (PRIMES, SCOPE, HDX)
   - Major data flows

2. Create Container Diagram showing:
   - Identity Service, Consent Service, Credential Service, Governance Service
   - Blockchain layer
   - Integration APIs
   - Data stores

3. Create Component Diagrams for each container showing internal structure

**Acceptance Criteria**: Diagrams reviewed and approved by Azure Lead and W3C Co-Chair

---

#### **R3-2: Performance Benchmarks Absent** | Severity: HIGH

**Raised By**: Microsoft Azure Lead, OCHA IM Lead

**Current State**: Appendix G mentions "testing requirements (10M+ credentials)" and "performance benchmarks" but provides no actual numbers.

**Why This Matters**: Without performance targets, there's no way to validate implementations or compare alternatives. Organizations cannot plan infrastructure without knowing throughput requirements.

**Required Fix**:
Add specific benchmarks:

| Operation | Target Latency | Target Throughput | Conditions |
|-----------|---------------|-------------------|------------|
| Credential verification (online) | <500ms p95 | 100/sec per server | Standard hardware |
| Credential verification (offline) | <2s p95 | 10/sec per device | Mobile device |
| Consent modification | <1s p95 | 50/sec per server | Including blockchain anchor |
| Consent status check | <200ms p95 | 500/sec per server | Cached |
| Full sync (1000 records) | <5 minutes | N/A | 256kbps connection |
| Registration (new identity) | <3 minutes | N/A | Including biometric capture |

**Acceptance Criteria**: Benchmarks validated through prototype testing

---

#### **R3-3: Cost Model Empty** | Severity: HIGH

**Raised By**: UNHCR CDO, Microsoft Azure Lead

**Current State**: Appendix G lists "per-user costs, per-transaction costs, total cost of ownership model" as placeholders without figures.

**Why This Matters**: Organizations cannot secure funding or make adoption decisions without cost visibility. Even rough estimates enable planning.

**Required Fix**:
Provide ballpark cost ranges:

| Cost Category | Low Estimate | High Estimate | Assumptions |
|---------------|--------------|---------------|-------------|
| Per-beneficiary per year | $2 | $8 | Shared infrastructure |
| Initial deployment (small org) | $50K | $150K | <50K beneficiaries |
| Initial deployment (large org) | $500K | $2M | >500K beneficiaries |
| Infrastructure (cloud) | $0.50/beneficiary/year | $2/beneficiary/year | Public cloud |
| Infrastructure (on-premise) | $5K/hub/year | $20K/hub/year | Self-hosted |
| Training (per staff member) | $100 | $500 | Including materials |

**Acceptance Criteria**: Cost model reviewed by 2+ implementing organizations

---

### Priority 2: Technical Specification Gaps (Should Fix)

---

#### **R3-4: Credential Schema Stubs** | Severity: MEDIUM

**Raised By**: W3C Co-Chair, OCHA IM Lead

**Current State**: Appendix C provides partial schemas for HumanitarianIdentityCredential and ProtectionStatusCredential, then states "additional schemas to be defined."

**Why This Matters**: For certification and interoperability, complete schemas are required. Implementers cannot build without knowing the exact fields.

**Required Fix**:
Complete schemas for at minimum:
1. HumanitarianIdentityCredential (expand current stub)
2. ProtectionStatusCredential (expand current stub)
3. HumanitarianAssistanceCredential (new)
4. VulnerabilityAssessmentCredential (new)
5. ConsentStatusCredential (new)

Each schema must include:
- All required fields with data types
- Optional fields
- Field constraints (enums, ranges, formats)
- Extension points
- Example instances

**Acceptance Criteria**: Schemas pass VC-JSON Schema validation; accepted by W3C representative

---

#### **R3-5: Verifiable Presentation Protocol Unspecified** | Severity: MEDIUM

**Raised By**: W3C Co-Chair, ID.me Architect

**Current State**: Section III.10.4 describes selective disclosure and holder binding conceptually but doesn't specify the exact protocol.

**Why This Matters**: Interoperability requires all implementations to use the same protocol. "Challenge-response" is not specific enough—there are many ways to implement this.

**Required Fix**:
Specify:
1. Base protocol: DIF Presentation Exchange 2.0 or OpenID4VP
2. Challenge format and generation
3. Response format and verification
4. Holder binding method (linked data proofs or JWT)
5. Biometric binding protocol for high-stakes presentations
6. Error codes and handling

**Acceptance Criteria**: Protocol specification enables two independent implementations to interoperate

---

#### **R3-6: Key Ceremony Procedures Missing** | Severity: MEDIUM

**Raised By**: Stanford Cryptography Lead

**Current State**: Section III.9.3 specifies key storage and rotation but not initial key generation ceremonies for organizational keys.

**Why This Matters**: A flawed key ceremony compromises the entire system from inception. Threshold institutional recovery requires properly generated and distributed key shares.

**Required Fix**:
Add key ceremony specification:
1. Participants: Minimum 5 key holders from different organizations
2. Hardware: Air-gapped machines, hardware random number generators
3. Process: Step-by-step ceremony procedure
4. Verification: How to verify ceremony was conducted correctly
5. Documentation: What records to keep
6. Share distribution: How to securely distribute shares

**Acceptance Criteria**: Ceremony procedure reviewed by cryptographer; test ceremony conducted

---

#### **R3-7: ZKP Auditor Ecosystem Undefined** | Severity: MEDIUM

**Raised By**: Stanford Cryptography Lead

**Current State**: Section III.9.2 states "all ZKP circuits must be audited by qualified cryptographers" but doesn't specify who qualifies or how auditors are identified.

**Why This Matters**: Without a defined auditor ecosystem, organizations either skip audits (security risk) or waste resources on unqualified auditors.

**Required Fix**:
Define auditor qualification process:
1. Auditor requirements:
   - Published cryptographic research OR
   - Professional certification (e.g., from recognized institution) AND
   - Demonstrated ZKP expertise (prior audits, implementations)
   
2. Audit scope requirements:
   - Correctness: Valid proofs only for true statements
   - Soundness: Cannot create valid proofs for false statements
   - Zero-knowledge: Proofs reveal nothing beyond the statement
   
3. Auditor registry (or partnership with existing firms)

4. Audit report template

**Acceptance Criteria**: At least 2 qualified auditors identified and willing to perform audits

---

### Priority 3: Operational Clarity Gaps (Nice to Fix)

---

#### **R3-8: Duress Detection Thresholds Unspecified** | Severity: MEDIUM

**Raised By**: ICRC Data Protection Officer

**Current State**: Section III.7 identifies duress indicators but says "weighted scoring" without providing weights or thresholds.

**Why This Matters**: Without thresholds, duress flagging is subjective. Different staff will flag differently, leading to inconsistent protection.

**Required Fix**:
Specify thresholds:

| Indicator | Weight | Notes |
|-----------|--------|-------|
| Third party present and answering | 3 | Strong indicator |
| Rushed consent (<2 min for Tier 2+) | 2 | Time pressure |
| Changed answers during session | 2 | Possible coaching |
| Non-verbal distress signals | 2 | Staff training required |
| Time of day (outside normal hours) | 1 | Weak indicator |
| Location (non-standard venue) | 1 | Contextual |

**Flagging threshold**: ≥4 points → automatic flag for review  
**Immediate escalation**: ≥6 points → supervisor involvement before completing consent

**Acceptance Criteria**: Thresholds validated through field testing

---

#### **R3-9: Data Classification Elevation Authority Unclear** | Severity: MEDIUM

**Raised By**: ICRC Data Protection Officer

**Current State**: Section II.3 shows context-dependent classification but doesn't specify who can elevate classification or how quickly.

**Why This Matters**: In Tigray or Myanmar, context shifts rapidly. Delays in elevating classification from Level 3 to Level 4 could expose individuals to harm.

**Required Fix**:
Specify:
1. **Authority**: 
   - Data Protection Officer can elevate for specific individuals
   - Country Director can elevate for populations
   - Advisory Board can elevate globally

2. **Triggers**:
   - Security incident involving data type
   - Credible threat intelligence
   - Government policy change
   - Outbreak of targeted violence

3. **Timeline**:
   - Emergency elevation: Immediate (verbal authorization, documented within 24h)
   - Standard elevation: 72 hours
   - Global elevation: 7 days

4. **Notification**: All staff with access notified within 24h of elevation

**Acceptance Criteria**: Process integrated into emergency protocols

---

#### **R3-10: Credential Renewal Proofing Requirements Ambiguous** | Severity: LOW

**Raised By**: ID.me Chief Identity Architect

**Current State**: Section III.10.8 says "simplified re-proofing for renewal vs. new issuance" without specifying what's simplified.

**Why This Matters**: Ambiguity leads to inconsistent implementation. Some organizations may require full re-proofing; others may rubber-stamp renewals.

**Required Fix**:
Specify renewal requirements:

| Original IAL | Renewal Requirement | Rationale |
|--------------|---------------------|-----------|
| IAL1 | Biometric match only | Identity already established |
| IAL1+ | Biometric match + brief interview | Confirm no significant changes |
| IAL2 | Biometric match + document review (not re-verification) | Documents may have changed |
| IAL2+ | Biometric match + document re-verification | High-stakes credentials |
| IAL3 | Full re-proofing | Highest assurance maintained |

**Acceptance Criteria**: Renewal matrix approved by ID.me representative

---

#### **R3-11: Emergency Grievance Resolution Timeline** | Severity: LOW

**Raised By**: Community Data Steward

**Current State**: Section IV.10 specifies 48h acknowledgment, 14 days resolution for all grievances.

**Why This Matters**: For service access issues caused by consent or credential glitches, 14 days means 14 days without assistance.

**Required Fix**:
Add emergency grievance category:

| Grievance Type | Acknowledgment | Resolution | Escalation |
|---------------|----------------|------------|------------|
| Service access blocked | 4 hours | 24 hours | Immediate supervisor override |
| Data correction (urgent) | 24 hours | 72 hours | DPO review |
| Standard privacy concern | 48 hours | 14 days | Normal process |
| Systemic issue | 48 hours | 30 days | Advisory Board |

**Acceptance Criteria**: Emergency grievance process tested in field pilot

---

#### **R3-12: Trauma-Informed Consent UX** | Severity: LOW

**Raised By**: Community Data Steward

**Current State**: Section III.7 mentions "trauma-affected individuals" in identity proofing but the consent UX section (III.3) doesn't address trauma.

**Why This Matters**: Consent interfaces shouldn't require recalling or recounting traumatic experiences. Standard forms may re-traumatize refugees.

**Required Fix**:
Add to Section III.3:

**Trauma-Informed Design Principles**:
1. Never require detailed narrative of traumatic events during consent
2. Allow "prefer not to answer" for sensitive questions
3. Provide breaks during consent process
4. Offer to complete consent over multiple sessions
5. Train staff on trauma-informed facilitation
6. Avoid imagery that may trigger trauma responses
7. Ensure private, calm consent environment

**Acceptance Criteria**: UX reviewed by trauma-informed care specialist

---

#### **R3-13: Standard Version Pinning** | Severity: LOW

**Raised By**: OCHA IM Lead

**Current State**: Section IV.3 references "HXL, UNHCR data dictionary" without version numbers.

**Why This Matters**: Standards evolve. Without version pinning, "compliance" becomes a moving target.

**Required Fix**:
Pin all referenced standards:
- HXL 1.1 (or specify "latest at time of certification")
- UNHCR Registration Data Dictionary v4.0
- OCHA Data Responsibility Guidelines 2021
- W3C DID Core 1.0
- W3C VC Data Model 1.1

Include update policy: "Organizations must update to new standard versions within 12 months of publication or demonstrate compliance with transition plan."

**Acceptance Criteria**: Version table added to Section IV.3

---

#### **R3-14: Post-Quantum Migration Timeline** | Severity: LOW

**Raised By**: Stanford Cryptography Lead

**Current State**: Section III.9.3 mentions "within 5 years for Level 4 data" for post-quantum readiness without specific milestones.

**Why This Matters**: "Within 5 years" doesn't enable planning. When should hybrid schemes begin? What triggers full migration?

**Required Fix**:
Specify timeline:

| Milestone | Date | Action |
|-----------|------|--------|
| Inventory | 2026 Q4 | Complete cryptographic dependency inventory |
| Hybrid design | 2027 Q2 | Design hybrid classical/PQ schemes |
| Hybrid pilot | 2027 Q4 | Pilot hybrid schemes for Level 4 data |
| Hybrid production | 2028 Q2 | Hybrid schemes required for Level 4 data |
| Full PQ | 2030 | Full post-quantum for all sensitive data |

**Trigger for acceleration**: NIST announcement of quantum computing milestone

**Acceptance Criteria**: Timeline reviewed by cryptography expert

---

#### **R3-15: Sync Staleness Rules** | Severity: LOW

**Raised By**: UNHCR CDO

**Current State**: Appendix A specifies sync protocol but doesn't clarify when consent records become "stale" after extended offline periods.

**Why This Matters**: After 90 days offline, is cached consent still valid? Staff need clear rules.

**Required Fix**:
Add to Appendix A:

| Offline Duration | Consent Status | Action Required |
|------------------|---------------|-----------------|
| <7 days | Valid | Normal sync on reconnect |
| 7-30 days | Valid with flag | Re-confirm consent at next interaction |
| 30-90 days | Degraded | Re-consent required for Tier 2+ operations |
| >90 days | Stale | Full re-consent required; treat as new registration |

**Acceptance Criteria**: Rules integrated into sync protocol specification

---

## Round 3 Panel Statements

**UNHCR CDO**: *"This is the document I wanted to see six months ago. Offline architecture, emergency overrides, honest acknowledgment of power dynamics—it's all here. Fix the cost model and we can start planning deployment."*

**ICRC DPO**: *"The threat model transforms this from aspirational to operational. I can now assess whether specific populations are protected. The remaining gaps are refinements, not foundations."*

**OCHA IM Lead**: *"Governance integration is correct. The DAO advises; clusters decide. Now finish the schemas so we can actually exchange credentials."*

**ID.me Architect**: *"Identity proofing is solid. Key recovery is well-designed. The remaining issues are edge cases—important, but not blockers."*

**W3C Co-Chair**: *"Standards compliance is strong. Complete the schemas, specify the presentation protocol, and this is interoperable."*

**Stanford Crypto Lead**: *"Honest about SMPC. Good DP parameters. The key ceremony gap is concerning but fixable. This is now credible cryptographically."*

**Azure Lead**: *"I still need architecture diagrams to build this. But the pieces are defined; I can see how they fit. Cost model is essential for go/no-go decisions."*

**Community Steward**: *"Power asymmetry acknowledgment moved me. Aid conditionality prohibition is non-negotiable and it's there. Trauma-informed design is the last piece for true dignity."*

---

## Revised Panel Verdict

### Overall Assessment

| Criterion | v1.0 Assessment | v2.0 Assessment |
|-----------|-----------------|-----------------|
| Technical soundness | Insufficient | Acceptable with gaps |
| Operational feasibility | Untested | Plausible with pilots |
| Standards compliance | Partial | Strong |
| Community-centered design | Aspirational | Genuine |
| Implementation readiness | Not ready | Conditionally ready |

### Recommendation

**✅ CONDITIONALLY READY FOR ENDORSEMENT**

The panel recommends:

1. **Immediate** (before formal endorsement): Fix R3-1, R3-2, R3-3 (reference architecture, benchmarks, cost model)
2. **Before pilot deployment**: Fix R3-4 through R3-7 (schemas, protocols, ceremonies, auditors)
3. **During pilot**: Validate R3-8 through R3-15 (thresholds, timelines, edge cases)

With Priority 1 gaps resolved, the manifesto is ready for:
- Formal endorsement by humanitarian organizations
- Pilot deployment in 2-3 field locations
- Phased rollout based on pilot learnings

---

## Appendix: Score Comparison v1.0 vs v2.0

| Category | v1.0 Score | v2.0 Score | Change |
|----------|-----------|-----------|--------|
| Operational Feasibility | 310/800 (39%) | 625/800 (78%) | +39% |
| Privacy & Do-No-Harm | 410/800 (51%) | 640/800 (80%) | +29% |
| Interoperability | 380/800 (48%) | 616/800 (77%) | +29% |
| Identity Assurance | 295/800 (37%) | 631/800 (79%) | +42% |
| Cryptographic Security | 360/800 (45%) | 619/800 (77%) | +32% |
| Governance | 490/800 (61%) | 650/800 (81%) | +20% |
| Consent UX | 420/800 (53%) | 651/800 (81%) | +28% |
| Implementation Readiness | 490/800 (61%) | 578/800 (72%) | +11% |
| **TOTAL** | **3,155/6,400 (49%)** | **5,010/6,400 (78%)** | **+29%** |

**Largest improvements**: Identity Assurance (+42%), Operational Feasibility (+39%), Cryptographic Security (+32%)

**Smallest improvement**: Implementation Readiness (+11%) — this remains the weakest category due to missing diagrams and cost model

---

*End of Round 3 Assessment*

*Document Version: 2.0 Working Draft*  
*Assessment Date: February 2, 2026*  
*Panel Convener: AI Facilitation Agent*

---

*Round 4 will evaluate v2.1 after Priority 1 gaps are addressed.*

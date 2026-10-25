# AURA — Enterprise Knowledge Intelligence
> **Autonomous Multimodal Synthesis & Enterprise Reasoning Testbed**  
> *Academic Prototype (v0.5.4 · ~50–60% Planned Scope · Illustrative Demo Mode)*  
> **Institution:** Dr. D. Y. Patil Institute of Technology (DIT), Pimpri, Pune — Department of Computer Engineering (BE Capstone Project)

---

## 1. Overview & Google Stitch Source Mapping

This project implements the design system and user interfaces exported from **Google Stitch**:

* **Stitch Project:** `AURA Enterprise Knowledge Intelligence` (`projects/6924177731007402178`)
* **Primary Screen:** `AURA — Overview Dashboard` (`screens/c2d0cdb0de5247d1839c68f6cee35de9`)
* **Interactive Chat & Synthesis Screen:** `AURA — Ask AURA (Chat & Reasoning)` (`screens/268150a10b894e948be4c94c6a419638`)
* **Flow & Architecture:** `AURA Enterprise Intelligence Flow` (`screens/4653578c801c4e4fb1b8e1a54f135960`)

---

## 2. Key Features & Implementation Details

### A. Overview Dashboard (`OverviewDashboard.js`)
* **Prototype Transparency Banner:** Explicitly displays `Prototype v0.5 ~50-60% Scope · Illustrative Demo Mode` and academic attribution `DIT PUNE · BE CAPSTONE`.
* **Academic Prototype Verification Card:** Highlights the experimental status, DYP-PUNE-CS identifier, and emphasizes that metrics are illustrative demo data.
* **Reasoning Engine Status Bar:** Shows real-time/simulated status `REASONING ENGINE READY` with compute latency (~1.2s avg).
* **Editorial Hero:** Prominently displays *"Your knowledge, connected."* with concise value proposition for multi-agent reasoning.
* **Autonomous Multimodal Synthesis Card:** Styled with deep oceanic navy (`#131b2e`), ambient cyan glow, watermark geometry, and primary CTA buttons (`Ask AURA` and `Explore Knowledge`).
* **Try Enterprise Reasoning Prompts:** 4 interactive prompt cards:
  1. *“What changed in the latest release?”* (GitHub Commits, Jira Issues, `Rel: v2.4.1`)
  2. *“Which issues are related to this repository?”* (Neo4j Graph, Jira Sprint, `Hop: 2-deg`)
  3. *“What evidence supports this project decision?”* (Confluence, Architecture Doc, `ADR-109`)
  4. *“Which documents describe this requirement?”* (PDF Specs, PRD Corpus, `Sem-Rank: 0.89`)
  *Selecting any prompt populates the query into the Ask AURA synthesis engine.*
* **Connected Knowledge Spaces Snapshot:** Displays the semantic network topology visual with the `nomic-embed-text-v1.5` 1,536-dim vector embedding badge.
* **Source Connector Status Cards:**
  * **Internal Specs & Policies (Demo):** 42 Docs Indexed across PDF, Markdown & Confluence (Connected)
  * **Jira Sprints & Epics (Demo):** 184 Issues parsed & graph-linked (Syncing, 88%)
  * **GitHub Code & PRs:** 12 Repositories tracked (Awaiting Auth, PAT Scope Req)
* **Recent Inferences & Evidence Feed:**
  * Grounded traces with confidence metrics: `AURA-EX-842` (94% Evidence Coverage), `AURA-EX-839` (Unverified Telemetry), and `AURA-EX-831` (Verified Fact).
* **System Health & Transparency:**
  * Status breakdown for LLM Supervisor (`Llama-3-70b`), Vector Retrieval (`ChromaDB / Milvus`), and Knowledge Graph (`Conceptual Mock Neo4j`).
  * Live Supervisor Window Allocation progress bar (`12,480 / 32,768 tokens (38%)`).

### B. Interactive Ask AURA Interface (`AskAuraView.js`)
* Displays conversational query bubble with strict-grounding telemetry (`top-k=8, neo4j:active`).
* Categorized breakdown blocks with distinct semantic indicators:
  * **Supported Fact (Green):** Confidence 96.8% with clickable citation chips (`[Doc: Arch-Decision-014]`, `[GH: PR #182]`).
  * **Evidence-backed Interpretation (Cyan):** With citation `[Doc: RFC-Telemetry-v2]`.
  * **Flagged Jira Impediment (Amber):** Warning indicator with stale activity tag (`18d untouched`).
  * **Epistemic Limit & Grounding Gap (Muted Grey):** Explicit hedge against unverified claims.
* Interactive Tab Switching:
  * **Retrieved Evidence (4):** Ranked document chunks with similarity scores (`rel: 0.94`, `rel: 0.91`, etc.).
  * **Execution & Agents (5):** Step-by-step multi-agent execution pipeline (Supervisor Query Routing, Vector Retrieval in ChromaDB, Graph Traversal in Neo4j, Cross-Verification, Constrained Answer Synthesis).
* Interactive Query Input Composer:
  * Includes suggestion chips, token consumption tracker, and dynamic prompt submission.

### C. Evidence Dossier Modal (`EvidenceModal.js`)
* Inspect original source text segments, similarity scores (e.g. `0.942`), knowledge base provenance, and knowledge graph links (`[:DOCUMENT_CITES_RFC]`).
* Full keyboard and backdrop dismissal support.

### D. Navigation Drawer & Accessible Bottom Bar
* Slide-out navigation drawer with institutional provenance information.
* Bottom navigation bar with 5 destinations: Overview, Ask AURA, Sources, Evidence, and Lab.

---

## 3. Demo Data vs. Real Backend Architecture

The project maintains strict separation between presentation, demonstration mocks, and future live backend APIs:

* `src/services/mockData.js`: Contains all illustrative demonstration data, academic testbed metadata, and simulated traces.
* `src/services/api.js`: Unified service layer with graceful network fallback. When `VITE_AURA_API_URL` is set and endpoints respond, it connects to live backends; otherwise, it provides labelled demo data without masking simulated metrics as live system measurements.

---

## 4. Local Development & Build Commands

### Prerequisites
* Node.js v18+ (tested on Node v24.19)
* npm v9+

### Running Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### Production Build
```bash
# Compile and bundle
npm run build

# Preview production bundle
npm run preview
```
All bundle assets compile without external build dependencies or warnings.

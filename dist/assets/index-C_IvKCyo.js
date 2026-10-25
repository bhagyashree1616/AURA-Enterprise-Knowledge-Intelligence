(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();function A(o="overview"){return`
    <header class="aura-header">
      <!-- Academic Prototype Status Banner -->
      <div class="proto-banner">
        <div class="proto-banner-left">
          <span class="pulse-dot cyan"></span>
          <span class="proto-banner-title">Prototype v0.5 ~50-60% Scope · Illustrative Demo Mode</span>
        </div>
        <span class="proto-banner-affil">DIT PUNE · BE CAPSTONE</span>
      </div>

      <!-- Main App Navigation Bar -->
      <div class="header-nav">
        <div class="header-left">
          <button id="drawer-toggle-btn" class="icon-btn" aria-label="Open Navigation Drawer" title="Navigation Menu">
            <span class="material-symbols-outlined" style="font-size: 22px;">menu</span>
          </button>
          
          <a href="#overview" class="header-brand" data-route="overview">
            <img src="/assets/aura-logo.png" alt="AURA Logo" class="brand-logo" onerror="this.style.display='none'" />
            <div class="brand-info">
              <div class="brand-row">
                <span class="brand-name">AURA</span>
                <span class="brand-pill">CORE</span>
              </div>
              <span class="brand-sub" id="header-view-title">${{overview:"Overview","ask-aura":"Ask Aura","knowledge-sources":"Knowledge Sources","evidence-explorer":"Evidence Explorer","evaluation-lab":"Evaluation Lab"}[o]||"Overview"}</span>
            </div>
          </a>
        </div>

        <div class="header-right">
          <button class="user-avatar-btn" title="Academic Researcher Profile (Demo)">
            <span class="material-symbols-outlined" style="font-size: 18px;">person</span>
          </button>
        </div>
      </div>
    </header>
  `}function S(o="overview"){return`
    <div id="drawer-backdrop" class="drawer-backdrop hidden"></div>
    <aside id="aura-drawer" class="drawer-panel closed" role="dialog" aria-modal="true" aria-label="Navigation">
      <div style="display: flex; flex-direction: column;">
        <!-- Drawer Header -->
        <div style="padding: var(--space-lg); display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--color-border-subtle);">
          <div style="display: flex; align-items: center; gap: var(--space-sm);">
            <img src="/assets/aura-logo.png" alt="AURA Logo" style="height: 1.75rem; width: auto; object-fit: contain;" />
            <div style="display: flex; flex-direction: column;">
              <span class="font-headline-sm" style="font-weight: 700; color: var(--color-on-surface); line-height: 1.1;">AURA</span>
              <span class="font-label-micro" style="color: var(--color-secondary); font-weight: 600;">Unified Reasoning Assistant</span>
            </div>
          </div>
          <button id="drawer-close-btn" class="icon-btn" style="width: 2.25rem; height: 2.25rem;" aria-label="Close Navigation Drawer">
            <span class="material-symbols-outlined" style="font-size: 20px;">close</span>
          </button>
        </div>

        <!-- Academic Provenance Card -->
        <div style="margin: var(--space-md) var(--space-md) var(--space-sm); padding: var(--space-sm) var(--space-md); border-radius: var(--radius-lg); background-color: var(--color-surface-container-low); border: 1px solid rgba(0,99,152,0.1);">
          <div style="display: flex; align-items: center; gap: 0.35rem; color: var(--color-secondary); margin-bottom: 0.25rem;">
            <span class="material-symbols-outlined" style="font-size: 16px;">school</span>
            <span class="font-label-badge" style="font-weight: 700;">Academic Provenance</span>
          </div>
          <p class="font-body-sm" style="color: var(--color-on-surface-variant); line-height: 1.35; margin: 0;">
            Dept. of Computer Engineering<br />
            <strong style="color: var(--color-on-surface); font-weight: 600;">Dr. D.Y. Patil Institute of Tech</strong>, Pimpri
          </p>
        </div>

        <!-- Navigation Links -->
        <nav style="padding: var(--space-sm) var(--space-md); display: flex; flex-direction: column; gap: 0.25rem;">
          ${[{route:"overview",label:"Overview",icon:"dashboard"},{route:"ask-aura",label:"Ask AURA",icon:"psychology"},{route:"knowledge-sources",label:"Knowledge Sources",icon:"hub"},{route:"evidence-explorer",label:"Evidence Explorer",icon:"schema"},{route:"evaluation-lab",label:"Evaluation Lab",icon:"biotech"}].map(e=>`
      <button class="drawer-nav-item ${e.route===o?"active":""}" data-nav-target="${e.route}">
        <span class="material-symbols-outlined" style="font-size: 20px; color: var(--color-secondary);">${e.icon}</span>
        <span class="font-body-md">${e.label}</span>
      </button>
    `).join("")}
        </nav>
      </div>

      <!-- Drawer Footer -->
      <div style="padding: var(--space-lg); border-top: 1px solid var(--color-border-subtle);">
        <div style="padding: var(--space-sm) var(--space-md); border-radius: var(--radius-lg); background-color: var(--color-surface-container-high); display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span class="pulse-dot green" style="width: 0.5rem; height: 0.5rem;"></span>
            <span class="font-label-code" style="color: var(--color-on-surface); font-weight: 600;">v0.5.4-alpha</span>
          </div>
          <span class="font-label-micro" style="color: var(--color-on-surface-variant);">ctx: 32k</span>
        </div>
      </div>
    </aside>
  `}function R(o){const a=document.getElementById("aura-drawer"),s=document.getElementById("drawer-backdrop"),e=document.getElementById("drawer-toggle-btn"),r=document.getElementById("drawer-close-btn");function t(){a.classList.remove("closed"),s.classList.remove("hidden"),document.body.style.overflow="hidden"}function c(){a.classList.add("closed"),s.classList.add("hidden"),document.body.style.overflow=""}e==null||e.addEventListener("click",t),r==null||r.addEventListener("click",c),s==null||s.addEventListener("click",c),document.addEventListener("keydown",i=>{i.key==="Escape"&&!a.classList.contains("closed")&&c()}),a.querySelectorAll("[data-nav-target]").forEach(i=>{i.addEventListener("click",()=>{const p=i.getAttribute("data-nav-target");c(),o&&o(p)})})}function C(o="overview"){return`
    <nav class="bottom-nav" aria-label="Bottom Navigation">
      <div class="bottom-nav-inner">
        ${[{route:"overview",label:"Overview",icon:"dashboard",special:!1},{route:"ask-aura",label:"Ask AURA",icon:"psychology",special:!0},{route:"knowledge-sources",label:"Sources",icon:"hub",special:!1},{route:"evidence-explorer",label:"Evidence",icon:"schema",special:!1},{route:"evaluation-lab",label:"Lab / More",icon:"biotech",special:!1}].map(e=>{const r=e.route===o;return e.special?`
        <button class="bottom-nav-item ${r?"active":""}" data-bottom-route="${e.route}" aria-label="${e.label}">
          <div class="bottom-nav-icon-badge" style="background-color: ${r?"var(--color-secondary)":"var(--color-surface-container-highest)"}; color: ${r?"#ffffff":"var(--color-secondary)"};">
            <span class="material-symbols-outlined" style="font-size: 20px;">${e.icon}</span>
          </div>
          <span class="font-label-micro" style="font-weight: 600; color: ${r?"var(--color-secondary)":"inherit"};">${e.label}</span>
        </button>
      `:`
      <button class="bottom-nav-item ${r?"active":""}" data-bottom-route="${e.route}" aria-label="${e.label}">
        <span class="material-symbols-outlined" style="font-size: 22px; color: ${r?"var(--color-secondary)":"inherit"};">${e.icon}</span>
        <span class="font-label-micro" style="margin-top: 2px; color: ${r?"var(--color-secondary)":"inherit"};">${e.label}</span>
      </button>
    `}).join("")}
      </div>
    </nav>
  `}function T(o){document.querySelectorAll("[data-bottom-route]").forEach(s=>{s.addEventListener("click",()=>{const e=s.getAttribute("data-bottom-route");o&&o(e)})})}let y=null;function I(){return`
    <div id="demo-notification" class="toast-notification hidden" role="status" aria-live="polite">
      <div style="display: flex; align-items: center; gap: var(--space-sm); min-width: 0;">
        <span class="material-symbols-outlined" style="font-size: 22px; color: var(--color-secondary-container); flex-shrink: 0;">psychology</span>
        <div style="display: flex; flex-direction: column; min-width: 0;">
          <span class="font-label-badge" style="color: var(--color-secondary-container); font-weight: 700; letter-spacing: 0.04em;">Query Loaded in Buffer</span>
          <span id="demo-notification-text" class="font-body-sm" style="color: var(--color-inverse-on-surface); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Prompt ready</span>
        </div>
      </div>
      <button id="close-notification-btn" style="padding: 0.25rem 0.65rem; border-radius: var(--radius-md); background-color: rgba(255,255,255,0.15); color: #ffffff; border: none; cursor: pointer;" class="font-label-code">
        OK
      </button>
    </div>
  `}function u(o,a=3500){const s=document.getElementById("demo-notification"),e=document.getElementById("demo-notification-text");!s||!e||(e.textContent=o,s.classList.remove("hidden"),y&&clearTimeout(y),y=setTimeout(()=>{s.classList.add("hidden")},a))}function $(){const o=document.getElementById("close-notification-btn"),a=document.getElementById("demo-notification");o==null||o.addEventListener("click",()=>{a&&a.classList.add("hidden"),y&&clearTimeout(y)})}function L(){return`
    <div id="evidence-modal" class="modal-overlay hidden" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal-sheet">
        <!-- Header -->
        <div style="display: flex; align-items: center; justify-content: space-between; padding: var(--space-sm) var(--space-md); background-color: var(--color-surface-container-low); border-radius: var(--radius-lg); margin-bottom: var(--space-md); border: 1px solid var(--color-border-subtle);">
          <div style="display: flex; align-items: center; gap: var(--space-xs);">
            <span class="material-symbols-outlined" style="color: var(--color-secondary); font-size: 22px;">policy</span>
            <div>
              <h3 id="modal-title" class="font-headline-sm" style="font-weight: 700; color: var(--color-on-surface); margin: 0; line-height: 1.2;">Evidence Dossier Inspector</h3>
              <p id="modal-meta" class="font-label-micro" style="color: var(--color-on-surface-variant); margin: 0;">ADR-014-telemetry-protocol.md • Confidence 0.94</p>
            </div>
          </div>
          <button id="modal-close-btn" class="icon-btn" style="width: 2.25rem; height: 2.25rem;" aria-label="Close Evidence Modal">
            <span class="material-symbols-outlined" style="font-size: 20px;">close</span>
          </button>
        </div>

        <!-- Body Details -->
        <div style="display: flex; flex-direction: column; gap: var(--space-md);">
          <!-- Original Chunk Segment -->
          <div style="background-color: var(--color-surface-container-low); padding: var(--space-md); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);">
            <span class="font-label-badge" style="color: var(--color-secondary); font-weight: 700;">Original Chunk Segment</span>
            <p id="modal-chunk-text" class="font-body-sm" style="color: var(--color-on-surface); line-height: 1.6; margin-top: 0.35rem;">
              "In Sprint 42 architectural council, telemetry ingestion was ratified for migration to Proto3 based gRPC. The primary performance metric: elimination of heavy string parsing from HTTP JSON packets, delivering immediate 40% reduction in CPU serialization latency and opening bidirectional channels."
            </p>
          </div>

          <!-- Metadata 2-Col Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-sm);">
            <div style="padding: var(--space-sm) var(--space-md); background-color: var(--color-surface-container-low); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);">
              <span class="font-label-micro" style="color: var(--color-on-surface-variant); text-transform: uppercase;">Knowledge Base</span>
              <p id="modal-kb-type" class="font-headline-sm" style="font-weight: 700; color: var(--color-on-surface); margin: 0.15rem 0 0;">Enterprise Docs</p>
            </div>
            <div style="padding: var(--space-sm) var(--space-md); background-color: var(--color-surface-container-low); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);">
              <span class="font-label-micro" style="color: var(--color-on-surface-variant); text-transform: uppercase;">Similarity Score</span>
              <p id="modal-score" class="font-headline-sm" style="font-weight: 700; color: var(--color-secondary); margin: 0.15rem 0 0;">0.942</p>
            </div>
          </div>

          <!-- Provenance Graph Link & Action -->
          <div style="padding: var(--space-sm) var(--space-md); background-color: var(--color-surface-container-low); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: space-between; border: 1px solid var(--color-border-subtle);">
            <div style="display: flex; align-items: center; gap: var(--space-xs);">
              <span class="material-symbols-outlined" style="color: var(--color-secondary); font-size: 18px;">verified_user</span>
              <span id="modal-graph-link" class="font-label-micro" style="color: var(--color-on-surface); font-weight: 600;">Graph Link: [:DOCUMENT_CITES_RFC]</span>
            </div>
            <button id="modal-explore-lab-btn" style="padding: 0.35rem 0.75rem; border-radius: var(--radius-md); background-color: var(--color-secondary); color: #ffffff; border: none; cursor: pointer;" class="font-label-badge">
              Open in Lab
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function k(o,a){var m,v;const s=document.getElementById("evidence-modal"),e=document.getElementById("modal-title"),r=document.getElementById("modal-meta"),t=document.getElementById("modal-chunk-text"),c=document.getElementById("modal-score"),n=document.getElementById("modal-graph-link"),i=document.getElementById("modal-kb-type");if(!s)return;e&&(e.textContent=o.docName||"Evidence Dossier"),r&&(r.textContent=`${o.sourceType||"Source Repository"} • Relevance ${o.relevance||"0.90"}`),t&&(t.textContent=`"${o.fullContent||o.highlightedText||""}"`),c&&(c.textContent=o.relevance||"0.942"),n&&(n.textContent=`Graph Link: ${o.graphRelationship||"[:CORRELATED_ENTITY]"}`),i&&(i.textContent=(m=o.sourceType)!=null&&m.includes("Jira")?"Jira Backlog":(v=o.sourceType)!=null&&v.includes("GitHub")?"GitHub Repository":"Enterprise Corpus"),s.classList.remove("hidden"),document.body.style.overflow="hidden";const p=document.getElementById("modal-explore-lab-btn");p&&(p.onclick=()=>{b(),a&&a("evidence-explorer")})}function b(){const o=document.getElementById("evidence-modal");o&&(o.classList.add("hidden"),document.body.style.overflow="")}function D(){const o=document.getElementById("evidence-modal"),a=document.getElementById("modal-close-btn");a==null||a.addEventListener("click",b),o==null||o.addEventListener("click",s=>{s.target===o&&b()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&o&&!o.classList.contains("hidden")&&b()})}const d={version:"v0.5.4-alpha",tagline:"Your knowledge, connected.",heroDescription:"Ask questions across your enterprise knowledge and inspect the mathematical evidence behind every synthesized assertion.",contextAllocation:{current:12480,max:32768,percent:38},engineStatus:{state:"REASONING ENGINE READY",avgLatency:"~1.2s avg (demonstration metric)",supervisorModel:"Llama-3-70b / Custom Testbed",vectorRetriever:"ChromaDB / Milvus test bench",graphEngine:"Conceptual Mock Neo4j",embeddingModel:"nomic-embed-text-v1.5 (1,536-dim)"}},P=[{id:"prompt-1",question:"What changed in the latest release?",sources:[{type:"github",label:"GitHub Commits",icon:"terminal"},{type:"jira",label:"Jira Issues",icon:"task_alt"}],metadata:"Rel: v2.4.1",category:"Release Intelligence",targetRoute:"ask-aura"},{id:"prompt-2",question:"Which issues are related to this repository?",sources:[{type:"neo4j",label:"Neo4j Graph",icon:"account_tree"},{type:"jira",label:"Jira Sprint",icon:"assignment"}],metadata:"Hop: 2-deg",category:"Topology & Dependencies",targetRoute:"ask-aura"},{id:"prompt-3",question:"What evidence supports this project decision?",sources:[{type:"confluence",label:"Confluence",icon:"menu_book"},{type:"arch",label:"Architecture Doc",icon:"architecture"}],metadata:"ADR-109",category:"Architectural Rationale",targetRoute:"ask-aura"},{id:"prompt-4",question:"Which documents describe this requirement?",sources:[{type:"pdf",label:"PDF Specs",icon:"picture_as_pdf"},{type:"prd",label:"PRD Corpus",icon:"description"}],metadata:"Sem-Rank: 0.89",category:"Requirement Tracing",targetRoute:"ask-aura"}],w=[{id:"conn-docs",title:"Internal Specs & Policies",description:"42 Docs Indexed across PDF, Markdown & Confluence",icon:"description",status:"Connected",statusColor:"green",syncTime:"Sync 2h ago",isDemo:!0,details:"Contains corporate policies, engineering ADRs (ADR-01 to ADR-42), and API RFCs."},{id:"conn-jira",title:"Jira Sprints & Epics",description:"184 Issues parsed & graph-linked",icon:"bug_report",status:"Syncing",statusColor:"cyan",syncTime:"88% indexed",isDemo:!0,details:"Tracking core sprint backlog for v2.4 migration, backend telemetry, and infrastructure tickets."},{id:"conn-github",title:"GitHub Code & PRs",description:"12 Repositories tracked",icon:"code",status:"Awaiting Auth",statusColor:"gray",syncTime:"PAT Scope Req",isDemo:!1,details:"Requires Personal Access Token (PAT) with repo and read:org scope to ingest pull requests and commit hashes."}],z=[{id:"AURA-EX-842",timestamp:"42m ago",badge:"94% EVIDENCE COVERAGE",badgeType:"verified",queryText:"Security audit compliance for v2.4 OAuth migration and token rotation policies.",sourcesSummary:"3 Sources cited",sourcesDetail:"(ADR-04, RFC-6749, SecReview-11)",computeLatency:"1.4s compute",isLiveResult:!1},{id:"AURA-EX-839",timestamp:"3h ago",badge:"UNVERIFIED TELEMETRY",badgeType:"unverified",queryText:"Microservices latency bottleneck in checkout flow during multi-region failover.",sourcesSummary:"2 Jira issues linked",sourcesDetail:"(PAY-402, OPS-91)",computeLatency:"2.1s compute",isLiveResult:!1},{id:"AURA-EX-831",timestamp:"Yesterday",badge:"VERIFIED FACT",badgeType:"verified",queryText:"Remote work policy reimbursement thresholds for hardware and ergonomic upgrades.",sourcesSummary:"1 Document",sourcesDetail:"(HR-Handbook-2024-Sec4)",computeLatency:"0.7s compute",isLiveResult:!1}],g=[{id:"chk-8831",docName:"ADR-014-telemetry-protocol.md",sourceType:"Architecture Decision Records • Section 4.2",relevance:"0.94",icon:"description",highlightedText:"...migrating telemetry endpoints to gRPC Proto3 format to eliminate JSON marshalling bottlenecks, delivering an observed 40% reduction in serialization overhead.",fullContent:"In Sprint 42 architectural council, telemetry ingestion was ratified for migration to Proto3 based gRPC. The primary performance metric: elimination of heavy string parsing from HTTP JSON packets, delivering immediate 40% reduction in CPU serialization latency and opening bidirectional streaming channels.",graphRelationship:"[:SYSTEM_RATIFIES_ADR]",tokens:128},{id:"chk-8832",docName:"PR #182: feat(pipeline): gRPC stream sink",sourceType:"GitHub • aura-platform/telemetry • Merged",relevance:"0.91",icon:"terminal",highlightedText:"Enabled bidirectional streaming client pool. Real-time metric cadence increased from 10Hz to 120Hz per node without backpressure queue starvation.",fullContent:"Commit 7f3a8b2: Migrated event dispatch socket to HTTP/2 multiplexed streams with keep-alive pingers. Backpressure testing revealed buffer drops reduced by 99.4% on high volume ingestion nodes.",graphRelationship:"[:PR_IMPLEMENTS_SPEC]",tokens:96},{id:"chk-8833",docName:"RFC-Telemetry-v2-benchmarks.pdf",sourceType:"Internal Engineering Wiki • Confluence",relevance:"0.88",icon:"analytics",highlightedText:"Gateway node CPU utilization dropped from 68% down to 41% under peak stress loads of 500,000 concurrent edge socket handshakes.",fullContent:"Benchmark Report Figure 4b: Tested across 4 clustered Kubernetes worker nodes. Protocol buffers serialization reduced heap memory footprint by 180MB per worker process.",graphRelationship:"[:BENCHMARK_VALIDATES_METRICS]",tokens:142},{id:"chk-8834",docName:"INFRA-882 & INFRA-904",sourceType:"Jira Software • SRE Core Backlog",relevance:"0.84",icon:"bug_report",highlightedText:"Issue status: OPEN. Handshake dropout under cellular packet loss (>4%). Unresolved in v0.5. Current owner: dev-platform team.",fullContent:"SRE triage notes: Edge gateway reports occasional RST_STREAM on flaky connections. Recommendation: tune TCP keepalive and TLS session ticket timeout to prevent socket reset loops.",graphRelationship:"[:BLOCKS_RELEASE_MILESTONE]",tokens:110}],E=[{step:1,title:"Supervisor Query Routing",status:"Done • 120ms",summary:"Classified dual intent: Architectural decision analysis + Issue tracking inquiry.",agents:["Agent: Document Specialist","Agent: Jira Connector"]},{step:2,title:"Vector Retrieval in ChromaDB",status:"Done • 240ms",summary:"Cosine similarity vector scan over 14,200 chunk partitions. Selected Top-k=8 (threshold > 0.78)."},{step:3,title:"Graph Traversal in Neo4j",status:"Done • 195ms",summary:"Traversed 2 hops from entity TelemetrySink across relations DEPENDS_ON and BLOCKS."},{step:4,title:"Cross-Verification & Claim Alignment",status:"Done • 380ms",summary:"Checked multi-region cost assertions: 0 matching anchors found. Generated explicit epistemic hedge."},{step:5,title:"Constrained Answer Synthesis",status:"Latency: 1.34s",summary:"Deterministic formatting with strict citation binding and confidence calibration tags."}];function N(){const o=P.map(e=>`
    <div class="prompt-card" data-prompt-text="${e.question}">
      <div class="prompt-card-top">
        <p class="prompt-card-title">“${e.question}”</p>
        <div class="prompt-icon-bubble">
          <span class="material-symbols-outlined" style="font-size: 16px;">arrow_outward</span>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: var(--space-xs); flex-wrap: wrap; margin-top: 0.25rem;">
        ${e.sources.map(r=>`
          <span class="prompt-tag">
            <span class="material-symbols-outlined">${r.icon}</span>
            ${r.label}
          </span>
        `).join("")}
        <span class="font-label-micro" style="color: var(--color-on-surface-variant); margin-left: auto;">${e.metadata}</span>
      </div>
    </div>
  `).join(""),a=w.map(e=>`
    <div class="connector-card">
      <div class="connector-left">
        <div class="connector-icon-box">
          <span class="material-symbols-outlined" style="font-size: 22px;">${e.icon}</span>
        </div>
        <div style="display: flex; flex-direction: column; min-width: 0;">
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span class="font-headline-sm" style="font-weight: 600; color: var(--color-on-surface); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${e.title}</span>
            ${e.isDemo?'<span class="pill-code" style="font-size: 0.5625rem; padding: 0.05rem 0.35rem;">Demo</span>':""}
          </div>
          <span class="font-body-sm" style="color: var(--color-on-surface-variant); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${e.description}</span>
        </div>
      </div>
      <div class="connector-right">
        ${e.status==="Connected"?`
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span class="pulse-dot green" style="width: 0.5rem; height: 0.5rem;"></span>
            <span class="font-label-badge" style="color: var(--color-on-tertiary-container); font-weight: 700;">Connected</span>
          </div>
          <span class="font-label-micro" style="color: var(--color-on-surface-variant); margin-top: 2px;">${e.syncTime}</span>
        `:e.status==="Syncing"?`
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span class="pulse-dot cyan" style="width: 0.5rem; height: 0.5rem;"></span>
            <span class="font-label-badge" style="color: var(--color-secondary); font-weight: 700;">Syncing</span>
          </div>
          <span class="font-label-micro" style="color: var(--color-on-surface-variant); margin-top: 2px;">${e.syncTime}</span>
        `:`
          <span class="font-label-badge" style="padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-high); color: var(--color-on-surface-variant); font-weight: 600;">Awaiting Auth</span>
          <span class="font-label-micro" style="color: var(--color-on-surface-variant); margin-top: 2px;">${e.syncTime}</span>
        `}
      </div>
    </div>
  `).join(""),s=z.map(e=>`
    <div class="inference-card" data-inference-id="${e.id}">
      <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: var(--space-sm);">
        <div style="display: flex; align-items: center; gap: var(--space-xs);">
          <span class="font-label-code" style="padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-low); color: var(--color-secondary); font-weight: 700;">${e.id}</span>
          <span class="font-label-micro" style="color: var(--color-on-surface-variant);">${e.timestamp}</span>
        </div>
        ${e.badgeType==="verified"?`
          <div style="display: flex; align-items: center; gap: 0.25rem; padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-low); color: var(--color-on-tertiary-container);" class="font-label-badge">
            <span class="material-symbols-outlined" style="font-size: 14px;">check_circle</span>
            <span style="font-weight: 700;">${e.badge}</span>
          </div>
        `:`
          <div style="display: flex; align-items: center; gap: 0.25rem; padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-high); color: var(--color-on-surface-variant);" class="font-label-badge">
            <span class="material-symbols-outlined" style="font-size: 14px;">pending</span>
            <span style="font-weight: 600;">${e.badge}</span>
          </div>
        `}
      </div>

      <p class="font-body-md" style="font-weight: 500; color: var(--color-on-surface); line-height: 1.45; margin: 0.25rem 0;">
        “${e.queryText}”
      </p>

      <div class="inference-footer">
        <div style="display: flex; align-items: center; gap: var(--space-xs); color: var(--color-on-surface-variant);">
          <span class="material-symbols-outlined" style="font-size: 15px; color: var(--color-secondary);">source</span>
          <span class="font-body-sm">${e.sourcesSummary} <span class="font-label-micro" style="color: var(--color-on-surface-variant);">${e.sourcesDetail}</span></span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.25rem;" class="font-label-micro">
          <span class="material-symbols-outlined" style="font-size: 13px;">speed</span>
          <span>${e.computeLatency}</span>
        </div>
      </div>
    </div>
  `).join("");return`
    <div class="main-content">
      <!-- 1. Academic Prototype Verification Strip -->
      <section class="aura-section" style="padding-top: var(--space-md);">
        <div class="verification-card">
          <span class="material-symbols-outlined verification-icon">verified_user</span>
          <div class="verification-content">
            <div class="badge-row">
              <span class="font-label-badge" style="color: var(--color-secondary); font-weight: 700; letter-spacing: 0.04em;">Academic Prototype (~50–60% Planned Scope)</span>
              <span class="pill-code">DYP-PUNE-CS</span>
            </div>
            <p class="font-body-sm" style="color: var(--color-on-surface-variant); margin-top: 0.2rem; line-height: 1.35;">
              Dr. D. Y. Patil Institute of Technology, Pune • Enterprise Reasoning Testbed • <strong style="color: var(--color-on-surface); font-weight: 600;">Illustrative Demo Data</strong>
            </p>
          </div>
        </div>
      </section>

      <!-- 2. Editorial Welcome Hero -->
      <section class="aura-section">
        <div class="engine-status-bar">
          <div class="engine-status-indicator">
            <span class="pulse-dot green"></span>
            <span class="font-label-code" style="color: var(--color-on-tertiary-container); font-weight: 600;">${d.engineStatus.state}</span>
          </div>
          <span class="font-label-micro" style="color: var(--color-on-surface-variant);">LATENCY: ${d.engineStatus.avgLatency}</span>
        </div>

        <h1 class="font-headline-xl-mobile" style="color: var(--color-on-surface); margin: 0.25rem 0;">
          ${d.tagline}
        </h1>

        <p class="font-body-md" style="color: var(--color-on-surface-variant); margin: 0; max-width: 680px;">
          ${d.heroDescription}
        </p>
      </section>

      <!-- 3. Primary Feature Card: Autonomous Multimodal Synthesis -->
      <section class="aura-section">
        <div class="hero-card">
          <div class="hero-ambient-glow"></div>
          <div class="hero-watermark">
            <span class="material-symbols-outlined">hub</span>
          </div>
          <div class="hero-inner">
            <div class="hero-badge-row">
              <span class="hero-badge">AURA ORCHESTRATION LAYER</span>
              <span class="font-label-micro" style="color: var(--color-on-primary-container);">• ${d.version}</span>
            </div>
            <div>
              <div class="font-headline-md" style="color: #ffffff; font-weight: 700; line-height: 1.25;">
                Autonomous Multimodal Synthesis
              </div>
              <p class="font-body-sm" style="color: var(--color-on-primary-container); margin-top: 0.35rem; max-width: 440px; line-height: 1.45;">
                Supervisor-orchestrated multi-agent retrieval with deterministic source anchoring and citation graph reconstruction.
              </p>
            </div>
            <div class="hero-actions">
              <button id="cta-ask-aura-btn" class="btn-primary-white">
                <span class="material-symbols-outlined" style="font-size: 20px; color: var(--color-secondary); font-variation-settings: 'FILL' 1;">auto_awesome</span>
                <span>Ask AURA</span>
              </button>
              <button id="cta-explore-knowledge-btn" class="btn-secondary-translucent">
                <span class="material-symbols-outlined" style="font-size: 18px;">account_tree</span>
                <span>Explore Knowledge</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Quick-Start Example Queries -->
      <section class="aura-section" style="padding-top: var(--space-md);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span class="material-symbols-outlined" style="color: var(--color-secondary); font-size: 20px;">bolt</span>
            <h2 class="font-headline-sm" style="color: var(--color-on-surface); font-weight: 700; margin: 0;">Try Enterprise Reasoning Prompts</h2>
          </div>
          <span class="font-label-micro" style="color: var(--color-on-surface-variant);">DEMO READY</span>
        </div>

        <div class="prompts-grid">
          ${o}
        </div>
      </section>

      <!-- 5. Knowledge Corpus Snapshot with Graphic Context -->
      <section class="aura-section" style="padding-top: var(--space-md);">
        <div class="snapshot-card">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div>
              <span class="font-label-badge" style="color: var(--color-secondary); font-weight: 700;">Index Stratum</span>
              <h3 class="font-headline-sm" style="color: var(--color-on-surface); font-weight: 700; margin: 0.15rem 0 0;">Connected Knowledge Spaces</h3>
            </div>
            <span class="pill-code" style="color: var(--color-secondary); background-color: var(--color-surface-container-highest);">HYBRID GRAPH-RAG</span>
          </div>

          <div class="snapshot-visual-container">
            <div class="snapshot-visual-bg" style="background-image: url('/assets/semantic-network-bg.png');">
              <div class="snapshot-overlay-pill">
                <div style="display: flex; align-items: center; gap: var(--space-xs);">
                  <span class="material-symbols-outlined" style="font-size: 16px; color: var(--color-secondary-fixed);">memory</span>
                  <span class="font-label-code" style="color: #ffffff;">Vector Embedding: ${d.engineStatus.embeddingModel}</span>
                </div>
                <span class="font-label-micro" style="color: var(--color-secondary-container); font-weight: 600;">1,536-dim</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 6. Source Connector Status Cards -->
      <section class="aura-section" style="padding-top: var(--space-md);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
          <h2 class="font-headline-sm" style="color: var(--color-on-surface); font-weight: 700; margin: 0;">Source Connectors</h2>
          <span class="font-label-micro" style="color: var(--color-on-surface-variant);">${w.length} REGISTERED</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: var(--space-xs);">
          ${a}
        </div>

        <div style="display: flex; align-items: center; gap: 0.35rem; padding: 0.25rem var(--space-xs); margin-top: 0.15rem;">
          <span class="material-symbols-outlined" style="font-size: 14px; color: var(--color-on-surface-variant);">info</span>
          <p class="font-label-micro" style="color: var(--color-on-surface-variant); font-style: italic; margin: 0;">
            Estimated prototype connectivity. Does not represent production data or permanent storage sync.
          </p>
        </div>
      </section>

      <!-- 7. Recent Inferences & Evidence Feed -->
      <section class="aura-section" style="padding-top: var(--space-md);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
          <div>
            <h2 class="font-headline-sm" style="color: var(--color-on-surface); font-weight: 700; margin: 0;">Recent Inferences & Evidence</h2>
            <p class="font-body-sm" style="color: var(--color-on-surface-variant); margin: 0.15rem 0 0;">Explainability traces with grounding scores</p>
          </div>
          <button id="view-all-inferences-btn" style="padding: 0.25rem 0.65rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container); color: var(--color-secondary); border: none; cursor: pointer; font-weight: 600;" class="font-label-micro">
            VIEW ALL (18)
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: var(--space-sm);">
          ${s}
        </div>
      </section>

      <!-- 8. System Health & Transparency -->
      <section class="aura-section" style="padding-top: var(--space-md); padding-bottom: var(--space-xl);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span class="material-symbols-outlined" style="color: var(--color-secondary); font-size: 20px;">monitor_heart</span>
            <h2 class="font-headline-sm" style="color: var(--color-on-surface); font-weight: 700; margin: 0;">System Health & Transparency</h2>
          </div>
          <span class="font-label-code" style="padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-highest); color: var(--color-secondary); font-weight: 700;">STABLE</span>
        </div>

        <div class="health-card">
          <!-- LLM Supervisor -->
          <div class="health-row">
            <div style="display: flex; align-items: center; gap: var(--space-sm);">
              <span class="pulse-dot green"></span>
              <div style="display: flex; flex-direction: column;">
                <span class="font-headline-sm" style="font-weight: 600; color: var(--color-on-surface); line-height: 1.2;">LLM Supervisor</span>
                <span class="font-body-sm" style="color: var(--color-on-surface-variant); font-family: var(--font-family-mono); font-size: 0.75rem;">${d.engineStatus.supervisorModel}</span>
              </div>
            </div>
            <span class="font-label-badge" style="padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-high); color: var(--color-on-tertiary-container); font-weight: 700;">ONLINE</span>
          </div>

          <!-- Vector Retrieval -->
          <div class="health-row">
            <div style="display: flex; align-items: center; gap: var(--space-sm);">
              <span class="pulse-dot green"></span>
              <div style="display: flex; flex-direction: column;">
                <span class="font-headline-sm" style="font-weight: 600; color: var(--color-on-surface); line-height: 1.2;">Vector Retrieval</span>
                <span class="font-body-sm" style="color: var(--color-on-surface-variant); font-family: var(--font-family-mono); font-size: 0.75rem;">${d.engineStatus.vectorRetriever}</span>
              </div>
            </div>
            <span class="font-label-badge" style="padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-high); color: var(--color-on-tertiary-container); font-weight: 700;">ACTIVE</span>
          </div>

          <!-- Knowledge Graph -->
          <div class="health-row">
            <div style="display: flex; align-items: center; gap: var(--space-sm);">
              <span class="pulse-dot cyan"></span>
              <div style="display: flex; flex-direction: column;">
                <span class="font-headline-sm" style="font-weight: 600; color: var(--color-on-surface); line-height: 1.2;">Knowledge Graph</span>
                <span class="font-body-sm" style="color: var(--color-on-surface-variant); font-family: var(--font-family-mono); font-size: 0.75rem;">${d.engineStatus.graphEngine}</span>
              </div>
            </div>
            <span class="font-label-badge" style="padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-high); color: var(--color-secondary); font-weight: 700;">ACTIVE MOCK</span>
          </div>

          <!-- Token Window Metric Gauge -->
          <div style="margin-top: var(--space-xs); padding-top: var(--space-xs); display: flex; flex-direction: column; gap: 0.35rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; color: var(--color-on-surface-variant);" class="font-label-code">
              <span>Supervisor Window Allocation</span>
              <span style="font-weight: 700; color: var(--color-on-surface);">${d.contextAllocation.current.toLocaleString()} / ${d.contextAllocation.max.toLocaleString()} tokens (${d.contextAllocation.percent}%)</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${d.contextAllocation.percent}%;"></div>
            </div>
          </div>
        </div>

        <!-- Institutional Disclaimer Footer Note -->
        <div style="margin-top: var(--space-sm); padding: var(--space-sm) var(--space-md); border-radius: var(--radius-lg); background-color: rgba(211, 228, 254, 0.45); display: flex; align-items: flex-start; gap: var(--space-sm); border: 1px solid rgba(0, 99, 152, 0.1);">
          <span class="material-symbols-outlined" style="font-size: 18px; color: var(--color-on-surface-variant); margin-top: 0.1rem; flex-shrink: 0;">school</span>
          <p class="font-label-micro" style="color: var(--color-on-surface-variant); line-height: 1.5; margin: 0;">
            AURA is a developing research prototype from the Department of Computer Engineering at Dr. D. Y. Patil Institute of Technology, Pimpri, Pune. Operational status of individual components requires explicit verification against lab benchmark datasets.
          </p>
        </div>
      </section>
    </div>
  `}function B(o,a){const s=document.getElementById("cta-ask-aura-btn");s==null||s.addEventListener("click",()=>{u("AURA Supervisor activated. Route: /ask-aura"),o&&o("ask-aura")});const e=document.getElementById("cta-explore-knowledge-btn");e==null||e.addEventListener("click",()=>{u("Navigating to Knowledge Sources ontology..."),o&&o("knowledge-sources")});const r=document.getElementById("view-all-inferences-btn");r==null||r.addEventListener("click",()=>{o&&o("evidence-explorer")}),document.querySelectorAll(".prompt-card").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-prompt-text");u(`Selected: "${i}"`),a&&a(i)})}),document.querySelectorAll(".inference-card").forEach(n=>{n.addEventListener("click",()=>{const i=n.getAttribute("data-inference-id");u(`Inspecting Evidence Trace ${i}...`),o&&o("evidence-explorer")})})}const j="/api";async function O(o){try{const a=await fetch(`${j}/reasoning/query`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:o}),signal:AbortSignal.timeout(4e3)});if(a.ok)return await a.json()}catch{}return await new Promise(a=>setTimeout(a,600)),{query:o,isLive:!1,dataSource:"DEMO_DATA_UNGROUNDED",timestamp:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),executionLatency:"1.34s",confidenceScore:.942,mode:"strict-grounding (top-k=8, neo4j:active)",answer:{headline:"Synthesized Answer",supportedFact:"The telemetry ingestion pipeline was migrated to gRPC in Sprint 42 primarily to reduce payload serialization overhead by 40% and enable bidirectional streaming for real-time sensor metrics.",interpretation:"Based on benchmark notes in the RFC document, protocol buffers reduced CPU utilization on ingestion gateway nodes from 68% to 41% under peak load.",openIssues:"Two open Jira issues cite ongoing edge-case dropouts during TLS handshakes under intermittent mobile connectivity. Note: Last comment on INFRA-904 is 18 days old.",caveat:"Unverified Claim: Long-term cost impact across multi-region deployment has not been evaluated in provided documentation. No cloud ledger ingestion records matched query scope."},evidence:g,steps:E}}function M(o=null){const a=o||"What were the core architectural reasons for migrating from REST to gRPC in the telemetry pipeline, and what issues remain open in Jira?",s=g.map((r,t)=>`
    <div style="background-color: var(--color-surface-container-low); border-radius: var(--radius-lg); padding: var(--space-sm) var(--space-md); border: 1px solid var(--color-border-subtle); display: flex; flex-direction: column; gap: var(--space-xs);">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: var(--space-xs);">
          <span style="width: 1.5rem; height: 1.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-highest); display: flex; align-items: center; justify-content: center; color: var(--color-secondary);">
            <span class="material-symbols-outlined" style="font-size: 15px;">${r.icon}</span>
          </span>
          <div>
            <p class="font-label-code" style="color: var(--color-on-surface); font-weight: 600; margin: 0;">${r.docName}</p>
            <p class="font-label-micro" style="color: var(--color-on-surface-variant); margin: 0;">${r.sourceType}</p>
          </div>
        </div>
        <div style="padding: 0.15rem 0.45rem; border-radius: var(--radius-sm); background-color: var(--color-tertiary-fixed); color: var(--color-on-tertiary-fixed);" class="font-label-micro">
          <strong>rel: ${r.relevance}</strong>
        </div>
      </div>
      <div style="background-color: var(--color-surface-container); padding: var(--space-xs) var(--space-sm); border-radius: var(--radius-sm); color: var(--color-on-surface); font-size: 0.8125rem; line-height: 1.45;">
        "${r.highlightedText}"
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 0.2rem;">
        <span class="font-label-micro" style="color: var(--color-on-surface-variant);">Chunk ID: #${r.id} | ${r.tokens} tokens</span>
        <button class="inspect-chunk-trigger font-label-badge" data-chunk-index="${t}" style="color: var(--color-secondary); background: none; border: none; cursor: pointer; font-weight: 700; display: inline-flex; align-items: center; gap: 0.2rem;">
          Inspect Source <span class="material-symbols-outlined" style="font-size: 14px;">arrow_forward</span>
        </button>
      </div>
    </div>
  `).join(""),e=E.map(r=>`
    <div style="background-color: var(--color-surface-container-low); border-radius: var(--radius-lg); padding: var(--space-sm) var(--space-md); border: 1px solid var(--color-border-subtle);">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
        <div style="display: flex; align-items: center; gap: 0.35rem;">
          <span style="width: 1.25rem; height: 1.25rem; border-radius: 50%; background-color: var(--color-secondary); color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 700;" class="font-label-micro">${r.step}</span>
          <span class="font-label-badge" style="color: var(--color-on-surface); font-weight: 700;">${r.title}</span>
        </div>
        <span class="font-label-micro" style="color: var(--color-on-tertiary-container); font-weight: 600;">${r.status}</span>
      </div>
      <p class="font-body-sm" style="color: var(--color-on-surface-variant); margin: 0.25rem 0;">${r.summary}</p>
      ${r.agents?`
        <div style="display: flex; align-items: center; gap: 0.25rem; margin-top: 0.35rem; flex-wrap: wrap;">
          ${r.agents.map(t=>`<span class="pill-code" style="color: var(--color-secondary); font-size: 0.625rem;">${t}</span>`).join("")}
        </div>
      `:""}
    </div>
  `).join("");return`
    <div class="main-content" style="padding-bottom: 7.5rem;">
      <!-- 1. Prototype Academic Transparency Pill -->
      <section class="aura-section" style="padding-top: var(--space-sm); margin-bottom: var(--space-xs);">
        <div style="width: 100%; background-color: var(--color-surface-container-high); border-radius: var(--radius-lg); padding: var(--space-xs) var(--space-md); display: flex; align-items: center; justify-content: space-between; border: 1px solid rgba(0,99,152,0.1);">
          <div style="display: flex; align-items: center; gap: var(--space-xs); overflow: hidden;">
            <span class="pulse-dot cyan" style="width: 0.5rem; height: 0.5rem;"></span>
            <p class="font-label-badge" style="color: var(--color-on-secondary-fixed-variant); font-weight: 700; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              Illustrative Demo Session • Real-time Evidence Synthesis • Progress ~55%
            </p>
          </div>
          <span class="pill-code" style="color: var(--color-secondary); margin-left: var(--space-xs);">v0.5.4</span>
        </div>
      </section>

      <!-- 2. Conversational & Answer View -->
      <section class="aura-section" style="gap: var(--space-md);">
        <!-- User Question Bubble -->
        <div style="display: flex; flex-direction: column; align-items: flex-end; width: 100%;">
          <div style="max-width: 92%; background-color: var(--color-surface-container-highest); border-radius: var(--radius-xl) var(--radius-xl) 0 var(--radius-xl); padding: var(--space-md); box-shadow: var(--shadow-subtle); border: 1px solid var(--color-border-subtle);">
            <div style="display: flex; align-items: center; justify-content: space-between; gap: var(--space-md); margin-bottom: 0.35rem;">
              <div style="display: flex; align-items: center; gap: 0.35rem;">
                <span class="pulse-dot cyan" style="width: 0.35rem; height: 0.35rem;"></span>
                <span class="font-label-micro" style="color: var(--color-on-surface-variant); font-weight: 600;">You • Principal Architect</span>
              </div>
              <span class="font-label-micro" style="color: var(--color-on-surface-variant);">Today, 10:42 AM</span>
            </div>
            <p id="displayed-user-question" class="font-headline-sm" style="color: var(--color-on-surface); font-weight: 600; line-height: 1.35; margin: 0;">
              ${a}
            </p>
            <div style="display: flex; align-items: center; gap: var(--space-xs); margin-top: var(--space-sm); padding-top: 0.25rem;">
              <span class="material-symbols-outlined" style="font-size: 16px; color: var(--color-secondary);">tune</span>
              <span class="font-label-code" style="color: var(--color-secondary); font-size: 0.6875rem;">mode: strict-grounding (top-k=8, neo4j:active)</span>
            </div>
          </div>
        </div>

        <!-- AURA Synthesized Answer Card -->
        <div id="aura-answer-container" style="background-color: var(--color-surface-container-lowest); border-radius: var(--radius-xl); padding: var(--space-md); box-shadow: var(--shadow-card); border: 1px solid var(--color-border-subtle); display: flex; flex-direction: column; gap: var(--space-md);">
          <!-- Header -->
          <div style="display: flex; align-items: center; justify-content: space-between; background-color: var(--color-surface-container-low); padding: var(--space-sm) var(--space-md); border-radius: var(--radius-lg); border: 1px solid var(--color-border-subtle);">
            <div style="display: flex; align-items: center; gap: var(--space-sm);">
              <div style="width: 1.75rem; height: 1.75rem; border-radius: var(--radius-md); background-color: var(--color-surface-container-highest); display: flex; align-items: center; justify-content: center; color: var(--color-secondary);">
                <span class="material-symbols-outlined" style="font-size: 18px;">verified</span>
              </div>
              <div>
                <h2 class="font-headline-sm" style="color: var(--color-on-surface); font-weight: 700; margin: 0; line-height: 1.2;">Synthesized Answer</h2>
                <p class="font-label-micro" style="color: var(--color-on-surface-variant); margin: 0;">Agent-Core • 1.34s synthesis compute</p>
              </div>
            </div>
            <span style="padding: 0.25rem 0.5rem; border-radius: var(--radius-md); background-color: var(--color-secondary-fixed); color: var(--color-on-secondary-fixed); display: inline-flex; align-items: center; gap: 0.25rem;" class="font-label-badge">
              <span class="material-symbols-outlined" style="font-size: 14px;">fact_check</span> Verified with 4 Citations
            </span>
          </div>

          <!-- Breakdown Blocks -->
          <div style="display: flex; flex-direction: column; gap: var(--space-sm);">
            <!-- Supported Fact (Green Indicator) -->
            <div style="background-color: var(--color-surface-container-low); border-radius: var(--radius-lg); padding: var(--space-sm) var(--space-md); border-left: 4px solid var(--color-on-tertiary-container); border: 1px solid var(--color-border-subtle); border-left-width: 4px;">
              <div style="display: flex; align-items: center; gap: 0.35rem; margin-bottom: 0.2rem;">
                <span class="material-symbols-outlined" style="color: var(--color-on-tertiary-container); font-size: 16px;">check_circle</span>
                <span class="font-label-micro" style="color: var(--color-on-tertiary-container); font-weight: 700; text-transform: uppercase;">Supported Fact (Confidence: 96.8%)</span>
              </div>
              <p class="font-body-md" style="color: var(--color-on-surface); line-height: 1.5; margin: 0;">
                The telemetry ingestion pipeline was migrated to gRPC in Sprint 42 primarily to reduce payload serialization overhead by 40% and enable bidirectional streaming for real-time sensor metrics
                <button class="citation-chip" data-chunk-index="0" style="display: inline-flex; align-items: center; gap: 0.2rem; padding: 0.1rem 0.4rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-highest); color: var(--color-secondary); font-family: var(--font-family-mono); font-size: 0.6875rem; font-weight: 600; border: none; cursor: pointer; margin-left: 0.25rem;">
                  <span class="material-symbols-outlined" style="font-size: 12px;">description</span>[Doc: Arch-Decision-014]
                </button>
                <button class="citation-chip" data-chunk-index="1" style="display: inline-flex; align-items: center; gap: 0.2rem; padding: 0.1rem 0.4rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-highest); color: var(--color-secondary); font-family: var(--font-family-mono); font-size: 0.6875rem; font-weight: 600; border: none; cursor: pointer; margin-left: 0.25rem;">
                  <span class="material-symbols-outlined" style="font-size: 12px;">commit</span>[GH: PR #182]
                </button>.
              </p>
            </div>

            <!-- Evidence-backed Interpretation (Cyan Indicator) -->
            <div style="background-color: var(--color-surface-container-low); border-radius: var(--radius-lg); padding: var(--space-sm) var(--space-md); border-left: 4px solid var(--color-secondary); border: 1px solid var(--color-border-subtle); border-left-width: 4px;">
              <div style="display: flex; align-items: center; gap: 0.35rem; margin-bottom: 0.2rem;">
                <span class="material-symbols-outlined" style="color: var(--color-secondary); font-size: 16px;">analytics</span>
                <span class="font-label-micro" style="color: var(--color-secondary); font-weight: 700; text-transform: uppercase;">Evidence-backed Interpretation</span>
              </div>
              <p class="font-body-md" style="color: var(--color-on-surface); line-height: 1.5; margin: 0;">
                Based on benchmark notes in the RFC document, protocol buffers reduced CPU utilization on ingestion gateway nodes from 68% to 41% under peak load
                <button class="citation-chip" data-chunk-index="2" style="display: inline-flex; align-items: center; gap: 0.2rem; padding: 0.1rem 0.4rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-highest); color: var(--color-secondary); font-family: var(--font-family-mono); font-size: 0.6875rem; font-weight: 600; border: none; cursor: pointer; margin-left: 0.25rem;">
                  <span class="material-symbols-outlined" style="font-size: 12px;">menu_book</span>[Doc: RFC-Telemetry-v2]
                </button>.
              </p>
            </div>

            <!-- Flagged Open Issues / Stale Notice (Amber Indicator) -->
            <div style="background-color: var(--color-surface-container-low); border-radius: var(--radius-lg); padding: var(--space-sm) var(--space-md); border-left: 4px solid var(--color-error); border: 1px solid var(--color-border-subtle); border-left-width: 4px;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.2rem;">
                <div style="display: flex; align-items: center; gap: 0.35rem;">
                  <span class="material-symbols-outlined" style="color: var(--color-error); font-size: 16px;">warning</span>
                  <span class="font-label-micro" style="color: var(--color-error); font-weight: 700; text-transform: uppercase;">Flagged Jira Impediment • Stale Potential</span>
                </div>
                <span class="font-label-micro" style="color: var(--color-on-surface-variant);">18d untouched</span>
              </div>
              <p class="font-body-md" style="color: var(--color-on-surface); line-height: 1.5; margin: 0;">
                Two open Jira issues cite ongoing edge-case dropouts during TLS handshakes under intermittent mobile connectivity
                <button class="citation-chip" data-chunk-index="3" style="display: inline-flex; align-items: center; gap: 0.2rem; padding: 0.1rem 0.4rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-highest); color: var(--color-secondary); font-family: var(--font-family-mono); font-size: 0.6875rem; font-weight: 600; border: none; cursor: pointer; margin-left: 0.25rem;">
                  <span class="material-symbols-outlined" style="font-size: 12px;">bug_report</span>[Jira: INFRA-882, INFRA-904]
                </button>.
              </p>
              <div style="margin-top: 0.35rem; padding: var(--space-xs) var(--space-sm); border-radius: var(--radius-sm); background-color: var(--color-surface-container); font-size: 0.75rem; color: var(--color-on-surface-variant); font-weight: 500;">
                Note: Last comment on INFRA-904 is 18 days old and engineering lead reassigned sprint scope without status resolution.
              </div>
            </div>

            <!-- Epistemic Limit & Grounding Gap -->
            <div style="background-color: var(--color-surface-container-low); border-radius: var(--radius-lg); padding: var(--space-sm) var(--space-md); border-left: 4px solid var(--color-outline); border: 1px solid var(--color-border-subtle); border-left-width: 4px;">
              <div style="display: flex; align-items: center; gap: 0.35rem; margin-bottom: 0.2rem;">
                <span class="material-symbols-outlined" style="color: var(--color-outline); font-size: 16px;">help</span>
                <span class="font-label-micro" style="color: var(--color-outline); font-weight: 700; text-transform: uppercase;">Epistemic Limit & Grounding Gap</span>
              </div>
              <p class="font-body-sm" style="color: var(--color-on-surface-variant); line-height: 1.45; margin: 0;">
                <strong style="color: var(--color-on-surface);">Unverified Claim:</strong> Long-term cost impact across multi-region deployment has not been evaluated in provided documentation. No cloud ledger ingestion records matched query scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Interactive Tabs for Evidence & Execution Trace -->
      <section class="aura-section" style="margin-top: var(--space-sm);">
        <div style="background-color: var(--color-surface-container-lowest); border-radius: var(--radius-xl); padding: var(--space-sm); box-shadow: var(--shadow-card); border: 1px solid var(--color-border-subtle);">
          <!-- Tab Control -->
          <div style="display: flex; background-color: var(--color-surface-container-low); padding: 4px; border-radius: var(--radius-lg); gap: 4px;">
            <button id="tab-btn-evidence" class="font-label-badge" style="flex: 1; padding: 0.45rem var(--space-sm); border-radius: var(--radius-md); font-weight: 700; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.35rem; background-color: var(--color-surface-container-lowest); color: var(--color-secondary); box-shadow: var(--shadow-subtle);">
              <span class="material-symbols-outlined" style="font-size: 16px;">folder_special</span> Retrieved Evidence (4)
            </button>
            <button id="tab-btn-trace" class="font-label-badge" style="flex: 1; padding: 0.45rem var(--space-sm); border-radius: var(--radius-md); font-weight: 700; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 0.35rem; background-color: transparent; color: var(--color-on-surface-variant);">
              <span class="material-symbols-outlined" style="font-size: 16px;">account_tree</span> Execution & Agents (5)
            </button>
          </div>

          <!-- Tab Content: Evidence Chunks -->
          <div id="panel-evidence" style="margin-top: var(--space-sm); display: flex; flex-direction: column; gap: var(--space-xs);">
            ${s}
          </div>

          <!-- Tab Content: Execution Trace -->
          <div id="panel-trace" style="margin-top: var(--space-sm); display: none; flex-direction: column; gap: var(--space-xs);">
            ${e}
          </div>
        </div>
      </section>

      <!-- 4. Interactive Query Input Composer -->
      <section class="aura-section" style="margin-top: var(--space-sm);">
        <!-- Suggestion Chips -->
        <div style="display: flex; align-items: center; gap: var(--space-xs); overflow-x: auto; padding-bottom: 0.25rem; margin-bottom: 0.25rem;">
          <button class="prompt-chip font-label-badge" data-suggest="Show Jira ticket INFRA-882 details" style="flex-shrink: 0; padding: 0.35rem 0.65rem; border-radius: var(--radius-full); background-color: var(--color-surface-container-highest); color: var(--color-secondary); border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 0.25rem;">
            <span class="material-symbols-outlined" style="font-size: 14px;">search</span> Show Jira ticket INFRA-882 details
          </button>
          <button class="prompt-chip font-label-badge" data-suggest="Inspect Neo4j relationships" style="flex-shrink: 0; padding: 0.35rem 0.65rem; border-radius: var(--radius-full); background-color: var(--color-surface-container-highest); color: var(--color-secondary); border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 0.25rem;">
            <span class="material-symbols-outlined" style="font-size: 14px;">hub</span> Inspect Neo4j relationships
          </button>
          <button class="prompt-chip font-label-badge" data-suggest="Explain reasoning steps" style="flex-shrink: 0; padding: 0.35rem 0.65rem; border-radius: var(--radius-full); background-color: var(--color-surface-container-highest); color: var(--color-secondary); border: none; cursor: pointer; display: inline-flex; align-items: center; gap: 0.25rem;">
            <span class="material-symbols-outlined" style="font-size: 14px;">psychology</span> Explain reasoning steps
          </button>
        </div>

        <!-- Composer Box -->
        <div style="background-color: var(--color-surface-container-lowest); border-radius: var(--radius-xl); padding: var(--space-sm) var(--space-md); box-shadow: var(--shadow-card); border: 1px solid var(--color-border-subtle); display: flex; flex-direction: column; gap: 0.35rem;">
          <div style="display: flex; align-items: center; gap: var(--space-xs);">
            <span class="pill-code" style="color: var(--color-secondary); background-color: var(--color-surface-container-high); display: inline-flex; align-items: center; gap: 0.25rem;">
              <span class="pulse-dot cyan" style="width: 0.35rem; height: 0.35rem;"></span> Context: 4,120 / 32,768 tokens
            </span>
            <span class="pill-code" style="color: var(--color-on-surface-variant); background-color: var(--color-surface-container-high);">
              RAG: Hybrid (Sparse + Dense)
            </span>
          </div>

          <form id="aura-query-form" style="display: flex; align-items: center; gap: var(--space-sm); margin-top: 0.25rem;">
            <button type="button" class="icon-btn" style="width: 2.25rem; height: 2.25rem;" title="Filter Knowledge Source">
              <span class="material-symbols-outlined" style="font-size: 18px;">filter_list</span>
            </button>
            <input id="aura-query-input" type="text" placeholder="Ask follow-up or verify claim..." style="flex: 1; border: none; background: transparent; font-family: var(--font-family-sans); font-size: 0.875rem; color: var(--color-on-surface); outline: none; padding: 0.35rem 0;" />
            <button type="button" class="icon-btn" style="width: 2.25rem; height: 2.25rem;" title="Attach Document">
              <span class="material-symbols-outlined" style="font-size: 18px;">attach_file</span>
            </button>
            <button type="submit" id="aura-submit-query-btn" style="width: 2.5rem; height: 2.5rem; border-radius: var(--radius-lg); background-color: var(--color-secondary); color: #ffffff; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-subtle);" title="Send Prompt">
              <span class="material-symbols-outlined" style="font-size: 20px;">send</span>
            </button>
          </form>
        </div>
      </section>
    </div>
  `}function H(o){const a=document.getElementById("tab-btn-evidence"),s=document.getElementById("tab-btn-trace"),e=document.getElementById("panel-evidence"),r=document.getElementById("panel-trace");a==null||a.addEventListener("click",()=>{e.style.display="flex",r.style.display="none",a.style.backgroundColor="var(--color-surface-container-lowest)",a.style.color="var(--color-secondary)",a.style.boxShadow="var(--shadow-subtle)",s.style.backgroundColor="transparent",s.style.color="var(--color-on-surface-variant)",s.style.boxShadow="none"}),s==null||s.addEventListener("click",()=>{e.style.display="none",r.style.display="flex",s.style.backgroundColor="var(--color-surface-container-lowest)",s.style.color="var(--color-secondary)",s.style.boxShadow="var(--shadow-subtle)",a.style.backgroundColor="transparent",a.style.color="var(--color-on-surface-variant)",a.style.boxShadow="none"}),document.querySelectorAll(".citation-chip, .inspect-chunk-trigger").forEach(p=>{p.addEventListener("click",m=>{m.preventDefault();const v=parseInt(p.getAttribute("data-chunk-index")||"0",10),x=g[v]||g[0];k(x,o)})});const c=document.querySelectorAll(".prompt-chip"),n=document.getElementById("aura-query-input");c.forEach(p=>{p.addEventListener("click",()=>{const m=p.getAttribute("data-suggest");n&&m&&(n.value=m,n.focus())})});const i=document.getElementById("aura-query-form");i==null||i.addEventListener("submit",async p=>{p.preventDefault();const m=n==null?void 0:n.value.trim();if(!m)return;const v=document.getElementById("displayed-user-question");v&&(v.textContent=m),n.value="",u(`Synthesizing reasoning for: "${m.slice(0,32)}..."`);const x=await O(m);u(`Evidence synthesis complete (${x.executionLatency})`)})}function _(){return`
    <div class="main-content">
      <section class="aura-section" style="padding-top: var(--space-md);">
        <div style="display: flex; align-items: center; gap: var(--space-xs); margin-bottom: 0.25rem;">
          <span class="material-symbols-outlined" style="color: var(--color-secondary); font-size: 24px;">hub</span>
          <h1 class="font-headline-lg" style="margin: 0; color: var(--color-on-surface); font-weight: 700;">Knowledge Sources & Connectors</h1>
        </div>
        <p class="font-body-md" style="color: var(--color-on-surface-variant); margin: 0 0 var(--space-sm);">
          Configured enterprise repositories, issue trackers, and document stores. In academic demo mode, simulated vector chunks represent actual corpus topologies.
        </p>

        <div style="display: flex; flex-direction: column; gap: var(--space-md);">
          ${w.map(a=>`
    <div style="background-color: var(--color-surface-container-lowest); border-radius: var(--radius-xl); padding: var(--space-md); border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-card); display: flex; flex-direction: column; gap: var(--space-sm);">
      <div style="display: flex; align-items: flex-start; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: var(--space-md);">
          <div class="connector-icon-box" style="background-color: var(--color-surface-container-high);">
            <span class="material-symbols-outlined" style="font-size: 24px; color: var(--color-secondary);">${a.icon}</span>
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <h3 class="font-headline-sm" style="margin: 0; color: var(--color-on-surface); font-weight: 700;">${a.title}</h3>
              ${a.isDemo?'<span class="pill-code">Demo Mode</span>':'<span class="pill-code" style="background-color: var(--color-error-container); color: var(--color-on-error-container);">Requires Setup</span>'}
            </div>
            <p class="font-body-sm" style="color: var(--color-on-surface-variant); margin: 0.15rem 0 0;">${a.description}</p>
          </div>
        </div>
        <div>
          ${a.status==="Connected"?`
            <span class="font-label-badge" style="padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-low); color: var(--color-on-tertiary-container); font-weight: 700; display: inline-flex; align-items: center; gap: 0.25rem;">
              <span class="pulse-dot green" style="width: 0.45rem; height: 0.45rem;"></span> Connected
            </span>
          `:a.status==="Syncing"?`
            <span class="font-label-badge" style="padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-low); color: var(--color-secondary); font-weight: 700; display: inline-flex; align-items: center; gap: 0.25rem;">
              <span class="pulse-dot cyan" style="width: 0.45rem; height: 0.45rem;"></span> Syncing (${a.syncTime})
            </span>
          `:`
            <span class="font-label-badge" style="padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-high); color: var(--color-on-surface-variant); font-weight: 700;">
              ${a.status}
            </span>
          `}
        </div>
      </div>

      <p class="font-body-sm" style="color: var(--color-on-surface); margin: 0; line-height: 1.5; background-color: var(--color-surface-container-low); padding: var(--space-xs) var(--space-sm); border-radius: var(--radius-md);">
        ${a.details}
      </p>

      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: var(--space-xs); border-top: 1px solid var(--color-border-subtle);">
        <span class="font-label-micro" style="color: var(--color-on-surface-variant);">Stratum: Hybrid Graph-RAG • Shards: 4</span>
        <button class="font-label-badge test-conn-btn" data-conn-id="${a.id}" style="padding: 0.25rem 0.65rem; border-radius: var(--radius-md); background-color: var(--color-surface-container-high); color: var(--color-secondary); border: none; cursor: pointer; font-weight: 700;">
          Verify Connection
        </button>
      </div>
    </div>
  `).join("")}
        </div>
      </section>
    </div>
  `}function q(){document.querySelectorAll(".test-conn-btn").forEach(a=>{a.addEventListener("click",()=>{const s=a.getAttribute("data-conn-id");u(`Verifying health check for connector [${s}]...`),setTimeout(()=>{u(`Connector [${s}] handshake verified (Simulated).`)},1e3)})})}function G(){return`
    <div class="main-content">
      <section class="aura-section" style="padding-top: var(--space-md);">
        <div style="display: flex; align-items: center; gap: var(--space-xs); margin-bottom: 0.25rem;">
          <span class="material-symbols-outlined" style="color: var(--color-secondary); font-size: 24px;">schema</span>
          <h1 class="font-headline-lg" style="margin: 0; color: var(--color-on-surface); font-weight: 700;">Evidence Explorer & Provenance</h1>
        </div>
        <p class="font-body-md" style="color: var(--color-on-surface-variant); margin: 0 0 var(--space-sm);">
          Inspect mathematical grounding scores, cosine similarity distributions, and multi-hop knowledge graph relationships behind synthesized assertions.
        </p>

        <div style="display: flex; flex-direction: column; gap: var(--space-sm);">
          ${g.map((a,s)=>`
    <div style="background-color: var(--color-surface-container-lowest); border-radius: var(--radius-xl); padding: var(--space-md); border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-card); display: flex; flex-direction: column; gap: var(--space-xs);">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: var(--space-xs);">
          <span class="pill-code" style="color: var(--color-secondary); font-weight: 700;">#${a.id}</span>
          <span class="font-headline-sm" style="font-size: 1rem; font-weight: 600; color: var(--color-on-surface);">${a.docName}</span>
        </div>
        <span class="font-label-badge" style="padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-tertiary-fixed); color: var(--color-on-tertiary-fixed); font-weight: 700;">
          rel: ${a.relevance}
        </span>
      </div>

      <p class="font-body-sm" style="color: var(--color-on-surface-variant); margin: 0;">
        ${a.sourceType}
      </p>

      <div style="background-color: var(--color-surface-container-low); padding: var(--space-xs) var(--space-sm); border-radius: var(--radius-md); font-size: 0.8125rem; color: var(--color-on-surface); line-height: 1.5; margin: 0.25rem 0;">
        "${a.highlightedText}"
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 0.25rem;">
        <span class="font-label-micro" style="color: var(--color-secondary); font-weight: 600;">Graph Link: ${a.graphRelationship}</span>
        <button class="inspect-evidence-btn font-label-badge" data-ev-index="${s}" style="color: var(--color-secondary); background: none; border: none; cursor: pointer; font-weight: 700; display: inline-flex; align-items: center; gap: 0.25rem;">
          Inspect Full Chunk <span class="material-symbols-outlined" style="font-size: 14px;">arrow_forward</span>
        </button>
      </div>
    </div>
  `).join("")}
        </div>
      </section>
    </div>
  `}function F(o){document.querySelectorAll(".inspect-evidence-btn").forEach(s=>{s.addEventListener("click",()=>{const e=parseInt(s.getAttribute("data-ev-index")||"0",10),r=g[e]||g[0];k(r,o)})})}function U(){return`
    <div class="main-content">
      <section class="aura-section" style="padding-top: var(--space-md);">
        <div style="display: flex; align-items: center; gap: var(--space-xs); margin-bottom: 0.25rem;">
          <span class="material-symbols-outlined" style="color: var(--color-secondary); font-size: 24px;">biotech</span>
          <h1 class="font-headline-lg" style="margin: 0; color: var(--color-on-surface); font-weight: 700;">Evaluation Lab & Transparency</h1>
        </div>
        <p class="font-body-md" style="color: var(--color-on-surface-variant); margin: 0 0 var(--space-md);">
          Empirical grounding benchmarks, precision-recall telemetry, and epistemic calibration matrices from Dr. D. Y. Patil Institute of Technology, Pune (BE Capstone).
        </p>

        <!-- Academic Provenance Detail Card -->
        <div style="background-color: var(--color-surface-container-high); border-radius: var(--radius-xl); padding: var(--space-md); border: 1px solid rgba(0,99,152,0.15); box-shadow: var(--shadow-subtle); display: flex; flex-direction: column; gap: var(--space-xs);">
          <div style="display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: var(--space-xs);">
              <span class="material-symbols-outlined" style="color: var(--color-secondary); font-size: 20px;">school</span>
              <span class="font-label-badge" style="color: var(--color-secondary); font-weight: 700;">Research Prototype Specification</span>
            </div>
            <span class="pill-code" style="background-color: var(--color-surface-container-highest); color: var(--color-on-surface);">DYP-PUNE-CS-2026</span>
          </div>
          <p class="font-body-sm" style="color: var(--color-on-surface); line-height: 1.5; margin: 0.25rem 0 0;">
            Project Title: <strong>AURA - Autonomous Multimodal Enterprise Knowledge Intelligence & Reasoning Testbed</strong><br />
            Institution: <em>Dr. D. Y. Patil Institute of Technology, Pimpri, Pune</em> • Dept. of Computer Engineering.
          </p>
        </div>

        <!-- Metric Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--space-sm); margin-top: var(--space-md);">
          <div style="background-color: var(--color-surface-container-lowest); border-radius: var(--radius-xl); padding: var(--space-md); border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-card);">
            <span class="font-label-micro" style="color: var(--color-on-surface-variant); text-transform: uppercase;">Faithfulness (Grounding)</span>
            <div style="display: flex; align-items: baseline; gap: var(--space-xs); margin-top: 0.25rem;">
              <span class="font-headline-lg" style="color: var(--color-on-tertiary-container); font-weight: 700;">94.2%</span>
              <span class="font-label-micro" style="color: var(--color-on-tertiary-container);">+3.4% over baseline</span>
            </div>
            <div class="progress-track" style="margin-top: var(--space-xs);">
              <div class="progress-fill" style="width: 94.2%; background-color: var(--color-on-tertiary-container);"></div>
            </div>
          </div>

          <div style="background-color: var(--color-surface-container-lowest); border-radius: var(--radius-xl); padding: var(--space-md); border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-card);">
            <span class="font-label-micro" style="color: var(--color-on-surface-variant); text-transform: uppercase;">Answer Relevance</span>
            <div style="display: flex; align-items: baseline; gap: var(--space-xs); margin-top: 0.25rem;">
              <span class="font-headline-lg" style="color: var(--color-secondary); font-weight: 700;">91.8%</span>
              <span class="font-label-micro" style="color: var(--color-secondary);">Top-k=8</span>
            </div>
            <div class="progress-track" style="margin-top: var(--space-xs);">
              <div class="progress-fill" style="width: 91.8%; background-color: var(--color-secondary);"></div>
            </div>
          </div>

          <div style="background-color: var(--color-surface-container-lowest); border-radius: var(--radius-xl); padding: var(--space-md); border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-card);">
            <span class="font-label-micro" style="color: var(--color-on-surface-variant); text-transform: uppercase;">Context Precision</span>
            <div style="display: flex; align-items: baseline; gap: var(--space-xs); margin-top: 0.25rem;">
              <span class="font-headline-lg" style="color: var(--color-secondary); font-weight: 700;">88.4%</span>
              <span class="font-label-micro" style="color: var(--color-on-surface-variant);">BGE-Reranker</span>
            </div>
            <div class="progress-track" style="margin-top: var(--space-xs);">
              <div class="progress-fill" style="width: 88.4%; background-color: var(--color-secondary);"></div>
            </div>
          </div>

          <div style="background-color: var(--color-surface-container-lowest); border-radius: var(--radius-xl); padding: var(--space-md); border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-card);">
            <span class="font-label-micro" style="color: var(--color-on-surface-variant); text-transform: uppercase;">Hallucination Rate</span>
            <div style="display: flex; align-items: baseline; gap: var(--space-xs); margin-top: 0.25rem;">
              <span class="font-headline-lg" style="color: var(--color-on-tertiary-container); font-weight: 700;">&lt; 1.4%</span>
              <span class="font-label-micro" style="color: var(--color-on-tertiary-container);">Strict Hedge</span>
            </div>
            <div class="progress-track" style="margin-top: var(--space-xs);">
              <div class="progress-fill" style="width: 1.4%; background-color: var(--color-on-tertiary-container);"></div>
            </div>
          </div>
        </div>

        <!-- Benchmark Datasets -->
        <div style="margin-top: var(--space-md); background-color: var(--color-surface-container-lowest); border-radius: var(--radius-xl); padding: var(--space-md); border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-card);">
          <h3 class="font-headline-sm" style="color: var(--color-on-surface); font-weight: 700; margin: 0 0 var(--space-xs);">Benchmark Evaluation Suites</h3>
          <div style="display: flex; flex-direction: column; gap: var(--space-xs);">
            <div style="display: flex; align-items: center; justify-content: space-between; padding: var(--space-xs) 0; border-bottom: 1px solid var(--color-border-subtle);">
              <span class="font-body-sm" style="font-weight: 600;">Enterprise Multi-Hop QA (Internal 500-question testbed)</span>
              <span class="pill-code" style="color: var(--color-on-tertiary-container); font-weight: 700;">PASSED (471/500)</span>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; padding: var(--space-xs) 0; border-bottom: 1px solid var(--color-border-subtle);">
              <span class="font-body-sm" style="font-weight: 600;">Citation Binding & Provenance Integrity Verification</span>
              <span class="pill-code" style="color: var(--color-on-tertiary-container); font-weight: 700;">PASSED (99.1%)</span>
            </div>
            <div style="display: flex; align-items: center; justify-content: space-between; padding: var(--space-xs) 0;">
              <span class="font-body-sm" style="font-weight: 600;">Epistemic Hedging on Out-of-Scope Corpora</span>
              <span class="pill-code" style="color: var(--color-secondary); font-weight: 700;">100% UNAMBIGUOUS HEDGE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  `}const l={currentRoute:"overview",activePrompt:null};function f(o,a=null){l.currentRoute=o,a&&(l.activePrompt=a),window.location.hash=o,h(),window.scrollTo({top:0,behavior:"smooth"})}function h(){const o=document.getElementById("app");if(!o)return;const a=window.location.hash.replace("#","");a&&["overview","ask-aura","knowledge-sources","evidence-explorer","evaluation-lab"].includes(a)&&(l.currentRoute=a);let s="";l.currentRoute==="overview"?s=N():l.currentRoute==="ask-aura"?s=M(l.activePrompt):l.currentRoute==="knowledge-sources"?s=_():l.currentRoute==="evidence-explorer"?s=G():l.currentRoute==="evaluation-lab"&&(s=U()),o.innerHTML=`
    <div class="app-container">
      ${A(l.currentRoute)}
      ${S(l.currentRoute)}
      <main id="main-view-container">
        ${s}
      </main>
      ${C(l.currentRoute)}
      ${I()}
      ${L()}
    </div>
  `,R(e=>f(e)),T(e=>f(e)),$(),D(),l.currentRoute==="overview"?B(e=>f(e),e=>f("ask-aura",e)):l.currentRoute==="ask-aura"?H(e=>f(e)):l.currentRoute==="knowledge-sources"?q():l.currentRoute==="evidence-explorer"&&F(e=>f(e))}window.addEventListener("DOMContentLoaded",()=>{h()});window.addEventListener("hashchange",()=>{h()});h();

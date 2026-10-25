/**
 * AURA Enterprise Knowledge Intelligence - Mock / Demonstration Data
 * 
 * Note on Provenance:
 * All metrics, connection statuses, and reasoning traces in this module are illustrative 
 * academic testbed mock data for Dr. D. Y. Patil Institute of Technology, Pune (BE Capstone).
 * They represent simulated environment artifacts, not live production infrastructure telemetry.
 */

export const AURA_METADATA = {
  appName: 'AURA',
  subTitle: 'Unified Reasoning Assistant',
  edition: 'CORE',
  version: 'v0.5.4-alpha',
  scopeEstimate: '~50–60% Planned Scope',
  academicInstitution: 'Dr. D. Y. Patil Institute of Technology, Pimpri, Pune',
  department: 'Dept. of Computer Engineering',
  tagline: 'Your knowledge, connected.',
  heroDescription: 'Ask questions across your enterprise knowledge and inspect the mathematical evidence behind every synthesized assertion.',
  demoModeNotice: 'Illustrative Demo Data • Experimental Academic Testbed',
  contextAllocation: {
    current: 12480,
    max: 32768,
    percent: 38
  },
  engineStatus: {
    state: 'REASONING ENGINE READY',
    isOnline: true,
    avgLatency: '~1.2s avg (demonstration metric)',
    supervisorModel: 'Llama-3-70b / Custom Testbed',
    vectorRetriever: 'ChromaDB / Milvus test bench',
    graphEngine: 'Conceptual Mock Neo4j',
    embeddingModel: 'nomic-embed-text-v1.5 (1,536-dim)'
  }
};

export const REASONING_PROMPTS = [
  {
    id: 'prompt-1',
    question: 'What changed in the latest release?',
    sources: [
      { type: 'github', label: 'GitHub Commits', icon: 'terminal' },
      { type: 'jira', label: 'Jira Issues', icon: 'task_alt' }
    ],
    metadata: 'Rel: v2.4.1',
    category: 'Release Intelligence',
    targetRoute: 'ask-aura'
  },
  {
    id: 'prompt-2',
    question: 'Which issues are related to this repository?',
    sources: [
      { type: 'neo4j', label: 'Neo4j Graph', icon: 'account_tree' },
      { type: 'jira', label: 'Jira Sprint', icon: 'assignment' }
    ],
    metadata: 'Hop: 2-deg',
    category: 'Topology & Dependencies',
    targetRoute: 'ask-aura'
  },
  {
    id: 'prompt-3',
    question: 'What evidence supports this project decision?',
    sources: [
      { type: 'confluence', label: 'Confluence', icon: 'menu_book' },
      { type: 'arch', label: 'Architecture Doc', icon: 'architecture' }
    ],
    metadata: 'ADR-109',
    category: 'Architectural Rationale',
    targetRoute: 'ask-aura'
  },
  {
    id: 'prompt-4',
    question: 'Which documents describe this requirement?',
    sources: [
      { type: 'pdf', label: 'PDF Specs', icon: 'picture_as_pdf' },
      { type: 'prd', label: 'PRD Corpus', icon: 'description' }
    ],
    metadata: 'Sem-Rank: 0.89',
    category: 'Requirement Tracing',
    targetRoute: 'ask-aura'
  }
];

export const SOURCE_CONNECTORS = [
  {
    id: 'conn-docs',
    title: 'Internal Specs & Policies',
    description: '42 Docs Indexed across PDF, Markdown & Confluence',
    icon: 'description',
    status: 'Connected',
    statusColor: 'green',
    syncTime: 'Sync 2h ago',
    isDemo: true,
    details: 'Contains corporate policies, engineering ADRs (ADR-01 to ADR-42), and API RFCs.'
  },
  {
    id: 'conn-jira',
    title: 'Jira Sprints & Epics',
    description: '184 Issues parsed & graph-linked',
    icon: 'bug_report',
    status: 'Syncing',
    statusColor: 'cyan',
    syncTime: '88% indexed',
    isDemo: true,
    details: 'Tracking core sprint backlog for v2.4 migration, backend telemetry, and infrastructure tickets.'
  },
  {
    id: 'conn-github',
    title: 'GitHub Code & PRs',
    description: '12 Repositories tracked',
    icon: 'code',
    status: 'Awaiting Auth',
    statusColor: 'gray',
    syncTime: 'PAT Scope Req',
    isDemo: false,
    details: 'Requires Personal Access Token (PAT) with repo and read:org scope to ingest pull requests and commit hashes.'
  }
];

export const RECENT_INFERENCES = [
  {
    id: 'AURA-EX-842',
    timestamp: '42m ago',
    badge: '94% EVIDENCE COVERAGE',
    badgeType: 'verified',
    queryText: 'Security audit compliance for v2.4 OAuth migration and token rotation policies.',
    sourcesSummary: '3 Sources cited',
    sourcesDetail: '(ADR-04, RFC-6749, SecReview-11)',
    computeLatency: '1.4s compute',
    isLiveResult: false
  },
  {
    id: 'AURA-EX-839',
    timestamp: '3h ago',
    badge: 'UNVERIFIED TELEMETRY',
    badgeType: 'unverified',
    queryText: 'Microservices latency bottleneck in checkout flow during multi-region failover.',
    sourcesSummary: '2 Jira issues linked',
    sourcesDetail: '(PAY-402, OPS-91)',
    computeLatency: '2.1s compute',
    isLiveResult: false
  },
  {
    id: 'AURA-EX-831',
    timestamp: 'Yesterday',
    badge: 'VERIFIED FACT',
    badgeType: 'verified',
    queryText: 'Remote work policy reimbursement thresholds for hardware and ergonomic upgrades.',
    sourcesSummary: '1 Document',
    sourcesDetail: '(HR-Handbook-2024-Sec4)',
    computeLatency: '0.7s compute',
    isLiveResult: false
  }
];

export const MOCK_EVIDENCE_DOSSIER = [
  {
    id: 'chk-8831',
    docName: 'ADR-014-telemetry-protocol.md',
    sourceType: 'Architecture Decision Records • Section 4.2',
    relevance: '0.94',
    icon: 'description',
    highlightedText: '...migrating telemetry endpoints to gRPC Proto3 format to eliminate JSON marshalling bottlenecks, delivering an observed 40% reduction in serialization overhead.',
    fullContent: 'In Sprint 42 architectural council, telemetry ingestion was ratified for migration to Proto3 based gRPC. The primary performance metric: elimination of heavy string parsing from HTTP JSON packets, delivering immediate 40% reduction in CPU serialization latency and opening bidirectional streaming channels.',
    graphRelationship: '[:SYSTEM_RATIFIES_ADR]',
    tokens: 128
  },
  {
    id: 'chk-8832',
    docName: 'PR #182: feat(pipeline): gRPC stream sink',
    sourceType: 'GitHub • aura-platform/telemetry • Merged',
    relevance: '0.91',
    icon: 'terminal',
    highlightedText: 'Enabled bidirectional streaming client pool. Real-time metric cadence increased from 10Hz to 120Hz per node without backpressure queue starvation.',
    fullContent: 'Commit 7f3a8b2: Migrated event dispatch socket to HTTP/2 multiplexed streams with keep-alive pingers. Backpressure testing revealed buffer drops reduced by 99.4% on high volume ingestion nodes.',
    graphRelationship: '[:PR_IMPLEMENTS_SPEC]',
    tokens: 96
  },
  {
    id: 'chk-8833',
    docName: 'RFC-Telemetry-v2-benchmarks.pdf',
    sourceType: 'Internal Engineering Wiki • Confluence',
    relevance: '0.88',
    icon: 'analytics',
    highlightedText: 'Gateway node CPU utilization dropped from 68% down to 41% under peak stress loads of 500,000 concurrent edge socket handshakes.',
    fullContent: 'Benchmark Report Figure 4b: Tested across 4 clustered Kubernetes worker nodes. Protocol buffers serialization reduced heap memory footprint by 180MB per worker process.',
    graphRelationship: '[:BENCHMARK_VALIDATES_METRICS]',
    tokens: 142
  },
  {
    id: 'chk-8834',
    docName: 'INFRA-882 & INFRA-904',
    sourceType: 'Jira Software • SRE Core Backlog',
    relevance: '0.84',
    icon: 'bug_report',
    highlightedText: 'Issue status: OPEN. Handshake dropout under cellular packet loss (>4%). Unresolved in v0.5. Current owner: dev-platform team.',
    fullContent: 'SRE triage notes: Edge gateway reports occasional RST_STREAM on flaky connections. Recommendation: tune TCP keepalive and TLS session ticket timeout to prevent socket reset loops.',
    graphRelationship: '[:BLOCKS_RELEASE_MILESTONE]',
    tokens: 110
  }
];

export const MOCK_REASONING_STEPS = [
  {
    step: 1,
    title: 'Supervisor Query Routing',
    status: 'Done • 120ms',
    summary: 'Classified dual intent: Architectural decision analysis + Issue tracking inquiry.',
    agents: ['Agent: Document Specialist', 'Agent: Jira Connector']
  },
  {
    step: 2,
    title: 'Vector Retrieval in ChromaDB',
    status: 'Done • 240ms',
    summary: 'Cosine similarity vector scan over 14,200 chunk partitions. Selected Top-k=8 (threshold > 0.78).'
  },
  {
    step: 3,
    title: 'Graph Traversal in Neo4j',
    status: 'Done • 195ms',
    summary: 'Traversed 2 hops from entity TelemetrySink across relations DEPENDS_ON and BLOCKS.'
  },
  {
    step: 4,
    title: 'Cross-Verification & Claim Alignment',
    status: 'Done • 380ms',
    summary: 'Checked multi-region cost assertions: 0 matching anchors found. Generated explicit epistemic hedge.'
  },
  {
    step: 5,
    title: 'Constrained Answer Synthesis',
    status: 'Latency: 1.34s',
    summary: 'Deterministic formatting with strict citation binding and confidence calibration tags.'
  }
];

/**
 * AURA Service Integration Layer
 * 
 * Provides unified access to system metrics, knowledge connectors, reasoning queries,
 * and evidence retrieval. Gracefully detects whether real backend APIs are online,
 * and transparently serves labelled demonstration data with explicit provenance metadata.
 */

import {
  AURA_METADATA,
  SOURCE_CONNECTORS,
  RECENT_INFERENCES,
  REASONING_PROMPTS,
  MOCK_EVIDENCE_DOSSIER,
  MOCK_REASONING_STEPS
} from './mockData.js';

const API_BASE = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_AURA_API_URL)
  ? import.meta.env.VITE_AURA_API_URL
  : '/api';

/**
 * Fetch System & Orchestration Status
 */
export async function fetchSystemStatus() {
  try {
    const res = await fetch(`${API_BASE}/system/status`, {
      headers: { 'Accept': 'application/json' },
      signal: AbortSignal.timeout(2000)
    });
    if (res.ok) {
      const data = await res.json();
      return { ...data, isLive: true, dataSource: 'LIVE_BACKEND' };
    }
  } catch {
    // Graceful fallback to academic testbed demo state
  }

  return {
    ...AURA_METADATA,
    isLive: false,
    dataSource: 'ILLUSTRATIVE_DEMO'
  };
}

/**
 * Fetch Registered Source Connectors
 */
export async function fetchSourceConnectors() {
  try {
    const res = await fetch(`${API_BASE}/connectors`, {
      signal: AbortSignal.timeout(2000)
    });
    if (res.ok) {
      const data = await res.json();
      return { connectors: data, isLive: true };
    }
  } catch {
    // Fallback to mock connectors
  }

  return {
    connectors: SOURCE_CONNECTORS,
    isLive: false
  };
}

/**
 * Fetch Recent Inferences and Explainability Traces
 */
export async function fetchRecentInferences() {
  try {
    const res = await fetch(`${API_BASE}/inferences/recent`, {
      signal: AbortSignal.timeout(2000)
    });
    if (res.ok) {
      const data = await res.json();
      return { inferences: data, isLive: true };
    }
  } catch {
    // Fallback
  }

  return {
    inferences: RECENT_INFERENCES,
    isLive: false
  };
}

/**
 * Fetch Sample Prompts
 */
export async function fetchReasoningPrompts() {
  return REASONING_PROMPTS;
}

/**
 * Execute or Simulate an Enterprise Reasoning Query
 */
export async function executeReasoningQuery(question) {
  // If backend query endpoint is live
  try {
    const res = await fetch(`${API_BASE}/reasoning/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: question }),
      signal: AbortSignal.timeout(4000)
    });
    if (res.ok) {
      return await res.json();
    }
  } catch {
    // Fall back to multi-step demonstration simulation
  }

  // Realistic mock latency simulation for interactive demonstration
  await new Promise(resolve => setTimeout(resolve, 600));

  return {
    query: question,
    isLive: false,
    dataSource: 'DEMO_DATA_UNGROUNDED',
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    executionLatency: '1.34s',
    confidenceScore: 0.942,
    mode: 'strict-grounding (top-k=8, neo4j:active)',
    answer: {
      headline: 'Synthesized Answer',
      supportedFact: 'The telemetry ingestion pipeline was migrated to gRPC in Sprint 42 primarily to reduce payload serialization overhead by 40% and enable bidirectional streaming for real-time sensor metrics.',
      interpretation: 'Based on benchmark notes in the RFC document, protocol buffers reduced CPU utilization on ingestion gateway nodes from 68% to 41% under peak load.',
      openIssues: 'Two open Jira issues cite ongoing edge-case dropouts during TLS handshakes under intermittent mobile connectivity. Note: Last comment on INFRA-904 is 18 days old.',
      caveat: 'Unverified Claim: Long-term cost impact across multi-region deployment has not been evaluated in provided documentation. No cloud ledger ingestion records matched query scope.'
    },
    evidence: MOCK_EVIDENCE_DOSSIER,
    steps: MOCK_REASONING_STEPS
  };
}

/**
 * Fetch Evidence Chunk Details for Modal Inspector
 */
export function getEvidenceChunk(indexOrId) {
  if (typeof indexOrId === 'number') {
    return MOCK_EVIDENCE_DOSSIER[indexOrId] || MOCK_EVIDENCE_DOSSIER[0];
  }
  return MOCK_EVIDENCE_DOSSIER.find(c => c.id === indexOrId) || MOCK_EVIDENCE_DOSSIER[0];
}

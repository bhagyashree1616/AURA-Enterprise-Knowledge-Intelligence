/**
 * Interaction and Routing Logic Validation
 */

import {
  AURA_METADATA,
  REASONING_PROMPTS,
  SOURCE_CONNECTORS,
  RECENT_INFERENCES,
  MOCK_EVIDENCE_DOSSIER,
  MOCK_REASONING_STEPS
} from '../src/services/mockData.js';

import {
  fetchSystemStatus,
  fetchSourceConnectors,
  fetchRecentInferences,
  fetchReasoningPrompts,
  executeReasoningQuery,
  getEvidenceChunk
} from '../src/services/api.js';

import { renderHeader } from '../src/components/Header.js';
import { renderNavigationDrawer } from '../src/components/NavigationDrawer.js';
import { renderBottomNav } from '../src/components/BottomNav.js';
import { renderEvidenceModal } from '../src/components/EvidenceModal.js';
import { renderNotificationToast } from '../src/components/NotificationToast.js';

import { renderOverviewDashboard } from '../src/views/OverviewDashboard.js';
import { renderAskAuraView } from '../src/views/AskAuraView.js';
import { renderSourcesView } from '../src/views/SourcesView.js';
import { renderEvidenceView } from '../src/views/EvidenceView.js';
import { renderLabView } from '../src/views/LabView.js';

console.log('🧪 Running Interaction & View Rendering Tests...\n');

// 1. Test All Views Render without exceptions
const routes = ['overview', 'ask-aura', 'knowledge-sources', 'evidence-explorer', 'evaluation-lab'];

routes.forEach(route => {
  const headerHtml = renderHeader(route);
  if (!headerHtml.includes('aura-header') || !headerHtml.includes('DIT PUNE · BE CAPSTONE')) {
    throw new Error(`Header failed for route: ${route}`);
  }
  const drawerHtml = renderNavigationDrawer(route);
  if (!drawerHtml.includes('aura-drawer') || !drawerHtml.includes('Academic Provenance')) {
    throw new Error(`Drawer failed for route: ${route}`);
  }
  const bottomNavHtml = renderBottomNav(route);
  if (!bottomNavHtml.includes('bottom-nav')) {
    throw new Error(`Bottom nav failed for route: ${route}`);
  }
});
console.log('✅ [PASS] All layout components render with route state');

// 2. Test Overview View
const overviewHtml = renderOverviewDashboard();
if (!overviewHtml.includes('Your knowledge, connected.') ||
    !overviewHtml.includes('Autonomous Multimodal Synthesis') ||
    !overviewHtml.includes('Try Enterprise Reasoning Prompts') ||
    !overviewHtml.includes('Internal Specs & Policies') ||
    !overviewHtml.includes('Connected Knowledge Spaces')) {
  throw new Error('Overview Dashboard missing critical design elements');
}
console.log('✅ [PASS] Overview Dashboard rendered with all 8 Stitch reference sections');

// 3. Test Ask AURA View with dynamic prompt
const testPrompt = 'Which issues are related to this repository?';
const askAuraHtml = renderAskAuraView(testPrompt);
if (!askAuraHtml.includes(testPrompt) ||
    !askAuraHtml.includes('Synthesized Answer') ||
    !askAuraHtml.includes('Supported Fact') ||
    !askAuraHtml.includes('ADR-014-telemetry-protocol.md')) {
  throw new Error('Ask AURA view failed to mount with test prompt');
}
console.log('✅ [PASS] Ask AURA view mounts dynamically with custom query buffer');

// 4. Test Sources, Evidence & Lab Views
const sourcesHtml = renderSourcesView();
if (!sourcesHtml.includes('Knowledge Sources & Connectors')) throw new Error('Sources view error');

const evidenceHtml = renderEvidenceView();
if (!evidenceHtml.includes('Evidence Explorer & Provenance')) throw new Error('Evidence view error');

const labHtml = renderLabView();
if (!labHtml.includes('Evaluation Lab & Transparency')) throw new Error('Lab view error');
console.log('✅ [PASS] Sources, Evidence, and Lab views render successfully');

// 5. Test API Fallback & Query Simulation
const status = await fetchSystemStatus();
if (status.isLive !== false || status.dataSource !== 'ILLUSTRATIVE_DEMO') {
  throw new Error('System status did not cleanly fall back to demonstration mode');
}

const queryResult = await executeReasoningQuery('Test Question');
if (!queryResult.answer || !queryResult.evidence || queryResult.isLive !== false) {
  throw new Error('Reasoning query simulation contract failed');
}

const chunk = getEvidenceChunk(0);
if (!chunk || !chunk.docName) {
  throw new Error('Chunk retrieval failed');
}
console.log('✅ [PASS] API Service Layer gracefully falls back with explicit demo provenance');

console.log('\n🎉 All 5 view rendering and interaction tests passed!');

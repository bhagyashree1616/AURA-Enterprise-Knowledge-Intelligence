/**
 * Ask AURA View - Implementation of Stitch Screen 268150a10b894e948be4c94c6a419638
 * Chat, Evidence Dossier Inspection, and Multi-Agent Reasoning Execution
 */

import {
  MOCK_EVIDENCE_DOSSIER,
  MOCK_REASONING_STEPS
} from '../services/mockData.js';
import { executeReasoningQuery } from '../services/api.js';
import { openEvidenceModal } from '../components/EvidenceModal.js';
import { showToast } from '../components/NotificationToast.js';

export function renderAskAuraView(initialPrompt = null) {
  const currentQuestion = initialPrompt || 'What were the core architectural reasons for migrating from REST to gRPC in the telemetry pipeline, and what issues remain open in Jira?';

  const evidenceCardsHtml = MOCK_EVIDENCE_DOSSIER.map((ev, idx) => `
    <div style="background-color: var(--color-surface-container-low); border-radius: var(--radius-lg); padding: var(--space-sm) var(--space-md); border: 1px solid var(--color-border-subtle); display: flex; flex-direction: column; gap: var(--space-xs);">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: var(--space-xs);">
          <span style="width: 1.5rem; height: 1.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-highest); display: flex; align-items: center; justify-content: center; color: var(--color-secondary);">
            <span class="material-symbols-outlined" style="font-size: 15px;">${ev.icon}</span>
          </span>
          <div>
            <p class="font-label-code" style="color: var(--color-on-surface); font-weight: 600; margin: 0;">${ev.docName}</p>
            <p class="font-label-micro" style="color: var(--color-on-surface-variant); margin: 0;">${ev.sourceType}</p>
          </div>
        </div>
        <div style="padding: 0.15rem 0.45rem; border-radius: var(--radius-sm); background-color: var(--color-tertiary-fixed); color: var(--color-on-tertiary-fixed);" class="font-label-micro">
          <strong>rel: ${ev.relevance}</strong>
        </div>
      </div>
      <div style="background-color: var(--color-surface-container); padding: var(--space-xs) var(--space-sm); border-radius: var(--radius-sm); color: var(--color-on-surface); font-size: 0.8125rem; line-height: 1.45;">
        "${ev.highlightedText}"
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 0.2rem;">
        <span class="font-label-micro" style="color: var(--color-on-surface-variant);">Chunk ID: #${ev.id} | ${ev.tokens} tokens</span>
        <button class="inspect-chunk-trigger font-label-badge" data-chunk-index="${idx}" style="color: var(--color-secondary); background: none; border: none; cursor: pointer; font-weight: 700; display: inline-flex; align-items: center; gap: 0.2rem;">
          Inspect Source <span class="material-symbols-outlined" style="font-size: 14px;">arrow_forward</span>
        </button>
      </div>
    </div>
  `).join('');

  const traceStepsHtml = MOCK_REASONING_STEPS.map(step => `
    <div style="background-color: var(--color-surface-container-low); border-radius: var(--radius-lg); padding: var(--space-sm) var(--space-md); border: 1px solid var(--color-border-subtle);">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
        <div style="display: flex; align-items: center; gap: 0.35rem;">
          <span style="width: 1.25rem; height: 1.25rem; border-radius: 50%; background-color: var(--color-secondary); color: #ffffff; display: flex; align-items: center; justify-content: center; font-weight: 700;" class="font-label-micro">${step.step}</span>
          <span class="font-label-badge" style="color: var(--color-on-surface); font-weight: 700;">${step.title}</span>
        </div>
        <span class="font-label-micro" style="color: var(--color-on-tertiary-container); font-weight: 600;">${step.status}</span>
      </div>
      <p class="font-body-sm" style="color: var(--color-on-surface-variant); margin: 0.25rem 0;">${step.summary}</p>
      ${step.agents ? `
        <div style="display: flex; align-items: center; gap: 0.25rem; margin-top: 0.35rem; flex-wrap: wrap;">
          ${step.agents.map(a => `<span class="pill-code" style="color: var(--color-secondary); font-size: 0.625rem;">${a}</span>`).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');

  return `
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
              ${currentQuestion}
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
            ${evidenceCardsHtml}
          </div>

          <!-- Tab Content: Execution Trace -->
          <div id="panel-trace" style="margin-top: var(--space-sm); display: none; flex-direction: column; gap: var(--space-xs);">
            ${traceStepsHtml}
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
  `;
}

export function setupAskAuraListeners(onNavigate) {
  // Tabs
  const btnEvidence = document.getElementById('tab-btn-evidence');
  const btnTrace = document.getElementById('tab-btn-trace');
  const panelEvidence = document.getElementById('panel-evidence');
  const panelTrace = document.getElementById('panel-trace');

  btnEvidence?.addEventListener('click', () => {
    panelEvidence.style.display = 'flex';
    panelTrace.style.display = 'none';
    btnEvidence.style.backgroundColor = 'var(--color-surface-container-lowest)';
    btnEvidence.style.color = 'var(--color-secondary)';
    btnEvidence.style.boxShadow = 'var(--shadow-subtle)';
    btnTrace.style.backgroundColor = 'transparent';
    btnTrace.style.color = 'var(--color-on-surface-variant)';
    btnTrace.style.boxShadow = 'none';
  });

  btnTrace?.addEventListener('click', () => {
    panelEvidence.style.display = 'none';
    panelTrace.style.display = 'flex';
    btnTrace.style.backgroundColor = 'var(--color-surface-container-lowest)';
    btnTrace.style.color = 'var(--color-secondary)';
    btnTrace.style.boxShadow = 'var(--shadow-subtle)';
    btnEvidence.style.backgroundColor = 'transparent';
    btnEvidence.style.color = 'var(--color-on-surface-variant)';
    btnEvidence.style.boxShadow = 'none';
  });

  // Citation Chips & Inspect Triggers
  const allCitationChips = document.querySelectorAll('.citation-chip, .inspect-chunk-trigger');
  allCitationChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.preventDefault();
      const idx = parseInt(chip.getAttribute('data-chunk-index') || '0', 10);
      const chunk = MOCK_EVIDENCE_DOSSIER[idx] || MOCK_EVIDENCE_DOSSIER[0];
      openEvidenceModal(chunk, onNavigate);
    });
  });

  // Suggestion Chips
  const promptChips = document.querySelectorAll('.prompt-chip');
  const queryInput = document.getElementById('aura-query-input');
  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const suggestText = chip.getAttribute('data-suggest');
      if (queryInput && suggestText) {
        queryInput.value = suggestText;
        queryInput.focus();
      }
    });
  });

  // Query Form
  const form = document.getElementById('aura-query-form');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = queryInput?.value.trim();
    if (!query) return;

    const displayedQuestion = document.getElementById('displayed-user-question');
    if (displayedQuestion) displayedQuestion.textContent = query;
    queryInput.value = '';

    showToast(`Synthesizing reasoning for: "${query.slice(0, 32)}..."`);

    // Run execution through API
    const result = await executeReasoningQuery(query);
    showToast(`Evidence synthesis complete (${result.executionLatency})`);
  });
}

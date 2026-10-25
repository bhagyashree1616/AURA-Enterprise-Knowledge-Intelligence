/**
 * Overview Dashboard View - Complete Implementation of Stitch Screen c2d0cdb0de5247d1839c68f6cee35de9
 */

import {
  AURA_METADATA,
  REASONING_PROMPTS,
  SOURCE_CONNECTORS,
  RECENT_INFERENCES
} from '../services/mockData.js';
import { showToast } from '../components/NotificationToast.js';

export function renderOverviewDashboard() {
  const promptsHtml = REASONING_PROMPTS.map(p => `
    <div class="prompt-card" data-prompt-text="${p.question}">
      <div class="prompt-card-top">
        <p class="prompt-card-title">“${p.question}”</p>
        <div class="prompt-icon-bubble">
          <span class="material-symbols-outlined" style="font-size: 16px;">arrow_outward</span>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: var(--space-xs); flex-wrap: wrap; margin-top: 0.25rem;">
        ${p.sources.map(s => `
          <span class="prompt-tag">
            <span class="material-symbols-outlined">${s.icon}</span>
            ${s.label}
          </span>
        `).join('')}
        <span class="font-label-micro" style="color: var(--color-on-surface-variant); margin-left: auto;">${p.metadata}</span>
      </div>
    </div>
  `).join('');

  const connectorsHtml = SOURCE_CONNECTORS.map(c => `
    <div class="connector-card">
      <div class="connector-left">
        <div class="connector-icon-box">
          <span class="material-symbols-outlined" style="font-size: 22px;">${c.icon}</span>
        </div>
        <div style="display: flex; flex-direction: column; min-width: 0;">
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span class="font-headline-sm" style="font-weight: 600; color: var(--color-on-surface); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${c.title}</span>
            ${c.isDemo ? `<span class="pill-code" style="font-size: 0.5625rem; padding: 0.05rem 0.35rem;">Demo</span>` : ''}
          </div>
          <span class="font-body-sm" style="color: var(--color-on-surface-variant); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${c.description}</span>
        </div>
      </div>
      <div class="connector-right">
        ${c.status === 'Connected' ? `
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span class="pulse-dot green" style="width: 0.5rem; height: 0.5rem;"></span>
            <span class="font-label-badge" style="color: var(--color-on-tertiary-container); font-weight: 700;">Connected</span>
          </div>
          <span class="font-label-micro" style="color: var(--color-on-surface-variant); margin-top: 2px;">${c.syncTime}</span>
        ` : c.status === 'Syncing' ? `
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span class="pulse-dot cyan" style="width: 0.5rem; height: 0.5rem;"></span>
            <span class="font-label-badge" style="color: var(--color-secondary); font-weight: 700;">Syncing</span>
          </div>
          <span class="font-label-micro" style="color: var(--color-on-surface-variant); margin-top: 2px;">${c.syncTime}</span>
        ` : `
          <span class="font-label-badge" style="padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-high); color: var(--color-on-surface-variant); font-weight: 600;">Awaiting Auth</span>
          <span class="font-label-micro" style="color: var(--color-on-surface-variant); margin-top: 2px;">${c.syncTime}</span>
        `}
      </div>
    </div>
  `).join('');

  const inferencesHtml = RECENT_INFERENCES.map(inf => `
    <div class="inference-card" data-inference-id="${inf.id}">
      <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: var(--space-sm);">
        <div style="display: flex; align-items: center; gap: var(--space-xs);">
          <span class="font-label-code" style="padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-low); color: var(--color-secondary); font-weight: 700;">${inf.id}</span>
          <span class="font-label-micro" style="color: var(--color-on-surface-variant);">${inf.timestamp}</span>
        </div>
        ${inf.badgeType === 'verified' ? `
          <div style="display: flex; align-items: center; gap: 0.25rem; padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-low); color: var(--color-on-tertiary-container);" class="font-label-badge">
            <span class="material-symbols-outlined" style="font-size: 14px;">check_circle</span>
            <span style="font-weight: 700;">${inf.badge}</span>
          </div>
        ` : `
          <div style="display: flex; align-items: center; gap: 0.25rem; padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-high); color: var(--color-on-surface-variant);" class="font-label-badge">
            <span class="material-symbols-outlined" style="font-size: 14px;">pending</span>
            <span style="font-weight: 600;">${inf.badge}</span>
          </div>
        `}
      </div>

      <p class="font-body-md" style="font-weight: 500; color: var(--color-on-surface); line-height: 1.45; margin: 0.25rem 0;">
        “${inf.queryText}”
      </p>

      <div class="inference-footer">
        <div style="display: flex; align-items: center; gap: var(--space-xs); color: var(--color-on-surface-variant);">
          <span class="material-symbols-outlined" style="font-size: 15px; color: var(--color-secondary);">source</span>
          <span class="font-body-sm">${inf.sourcesSummary} <span class="font-label-micro" style="color: var(--color-on-surface-variant);">${inf.sourcesDetail}</span></span>
        </div>
        <div style="display: flex; align-items: center; gap: 0.25rem;" class="font-label-micro">
          <span class="material-symbols-outlined" style="font-size: 13px;">speed</span>
          <span>${inf.computeLatency}</span>
        </div>
      </div>
    </div>
  `).join('');

  return `
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
            <span class="font-label-code" style="color: var(--color-on-tertiary-container); font-weight: 600;">${AURA_METADATA.engineStatus.state}</span>
          </div>
          <span class="font-label-micro" style="color: var(--color-on-surface-variant);">LATENCY: ${AURA_METADATA.engineStatus.avgLatency}</span>
        </div>

        <h1 class="font-headline-xl-mobile" style="color: var(--color-on-surface); margin: 0.25rem 0;">
          ${AURA_METADATA.tagline}
        </h1>

        <p class="font-body-md" style="color: var(--color-on-surface-variant); margin: 0; max-width: 680px;">
          ${AURA_METADATA.heroDescription}
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
              <span class="font-label-micro" style="color: var(--color-on-primary-container);">• ${AURA_METADATA.version}</span>
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
          ${promptsHtml}
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
                  <span class="font-label-code" style="color: #ffffff;">Vector Embedding: ${AURA_METADATA.engineStatus.embeddingModel}</span>
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
          <span class="font-label-micro" style="color: var(--color-on-surface-variant);">${SOURCE_CONNECTORS.length} REGISTERED</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: var(--space-xs);">
          ${connectorsHtml}
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
          ${inferencesHtml}
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
                <span class="font-body-sm" style="color: var(--color-on-surface-variant); font-family: var(--font-family-mono); font-size: 0.75rem;">${AURA_METADATA.engineStatus.supervisorModel}</span>
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
                <span class="font-body-sm" style="color: var(--color-on-surface-variant); font-family: var(--font-family-mono); font-size: 0.75rem;">${AURA_METADATA.engineStatus.vectorRetriever}</span>
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
                <span class="font-body-sm" style="color: var(--color-on-surface-variant); font-family: var(--font-family-mono); font-size: 0.75rem;">${AURA_METADATA.engineStatus.graphEngine}</span>
              </div>
            </div>
            <span class="font-label-badge" style="padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-high); color: var(--color-secondary); font-weight: 700;">ACTIVE MOCK</span>
          </div>

          <!-- Token Window Metric Gauge -->
          <div style="margin-top: var(--space-xs); padding-top: var(--space-xs); display: flex; flex-direction: column; gap: 0.35rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; color: var(--color-on-surface-variant);" class="font-label-code">
              <span>Supervisor Window Allocation</span>
              <span style="font-weight: 700; color: var(--color-on-surface);">${AURA_METADATA.contextAllocation.current.toLocaleString()} / ${AURA_METADATA.contextAllocation.max.toLocaleString()} tokens (${AURA_METADATA.contextAllocation.percent}%)</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${AURA_METADATA.contextAllocation.percent}%;"></div>
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
  `;
}

export function setupOverviewListeners(onNavigate, onSelectPrompt) {
  // Ask AURA CTA Button
  const askAuraBtn = document.getElementById('cta-ask-aura-btn');
  askAuraBtn?.addEventListener('click', () => {
    showToast('AURA Supervisor activated. Route: /ask-aura');
    if (onNavigate) onNavigate('ask-aura');
  });

  // Explore Knowledge CTA Button
  const exploreBtn = document.getElementById('cta-explore-knowledge-btn');
  exploreBtn?.addEventListener('click', () => {
    showToast('Navigating to Knowledge Sources ontology...');
    if (onNavigate) onNavigate('knowledge-sources');
  });

  // View All Inferences Button
  const viewAllBtn = document.getElementById('view-all-inferences-btn');
  viewAllBtn?.addEventListener('click', () => {
    if (onNavigate) onNavigate('evidence-explorer');
  });

  // Prompt Cards
  const promptCards = document.querySelectorAll('.prompt-card');
  promptCards.forEach(card => {
    card.addEventListener('click', () => {
      const promptText = card.getAttribute('data-prompt-text');
      showToast(`Selected: "${promptText}"`);
      if (onSelectPrompt) {
        onSelectPrompt(promptText);
      }
    });
  });

  // Inference Cards (Clicking opens evidence trace)
  const inferenceCards = document.querySelectorAll('.inference-card');
  inferenceCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-inference-id');
      showToast(`Inspecting Evidence Trace ${id}...`);
      if (onNavigate) onNavigate('evidence-explorer');
    });
  });
}

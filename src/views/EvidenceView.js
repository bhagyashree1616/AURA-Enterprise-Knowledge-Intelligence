/**
 * Evidence Explorer View
 */

import { MOCK_EVIDENCE_DOSSIER, RECENT_INFERENCES } from '../services/mockData.js';
import { openEvidenceModal } from '../components/EvidenceModal.js';
import { showToast } from '../components/NotificationToast.js';

export function renderEvidenceView() {
  const dossierHtml = MOCK_EVIDENCE_DOSSIER.map((ev, idx) => `
    <div style="background-color: var(--color-surface-container-lowest); border-radius: var(--radius-xl); padding: var(--space-md); border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-card); display: flex; flex-direction: column; gap: var(--space-xs);">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: var(--space-xs);">
          <span class="pill-code" style="color: var(--color-secondary); font-weight: 700;">#${ev.id}</span>
          <span class="font-headline-sm" style="font-size: 1rem; font-weight: 600; color: var(--color-on-surface);">${ev.docName}</span>
        </div>
        <span class="font-label-badge" style="padding: 0.15rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-tertiary-fixed); color: var(--color-on-tertiary-fixed); font-weight: 700;">
          rel: ${ev.relevance}
        </span>
      </div>

      <p class="font-body-sm" style="color: var(--color-on-surface-variant); margin: 0;">
        ${ev.sourceType}
      </p>

      <div style="background-color: var(--color-surface-container-low); padding: var(--space-xs) var(--space-sm); border-radius: var(--radius-md); font-size: 0.8125rem; color: var(--color-on-surface); line-height: 1.5; margin: 0.25rem 0;">
        "${ev.highlightedText}"
      </div>

      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 0.25rem;">
        <span class="font-label-micro" style="color: var(--color-secondary); font-weight: 600;">Graph Link: ${ev.graphRelationship}</span>
        <button class="inspect-evidence-btn font-label-badge" data-ev-index="${idx}" style="color: var(--color-secondary); background: none; border: none; cursor: pointer; font-weight: 700; display: inline-flex; align-items: center; gap: 0.25rem;">
          Inspect Full Chunk <span class="material-symbols-outlined" style="font-size: 14px;">arrow_forward</span>
        </button>
      </div>
    </div>
  `).join('');

  return `
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
          ${dossierHtml}
        </div>
      </section>
    </div>
  `;
}

export function setupEvidenceListeners(onNavigate) {
  const buttons = document.querySelectorAll('.inspect-evidence-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-ev-index') || '0', 10);
      const chunk = MOCK_EVIDENCE_DOSSIER[idx] || MOCK_EVIDENCE_DOSSIER[0];
      openEvidenceModal(chunk, onNavigate);
    });
  });
}

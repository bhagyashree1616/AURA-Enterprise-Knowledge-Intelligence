/**
 * Evidence Dossier Inspector Modal Component
 */

export function renderEvidenceModal() {
  return `
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
  `;
}

export function openEvidenceModal(chunkData, onNavigateToLab) {
  const modal = document.getElementById('evidence-modal');
  const titleEl = document.getElementById('modal-title');
  const metaEl = document.getElementById('modal-meta');
  const chunkTextEl = document.getElementById('modal-chunk-text');
  const scoreEl = document.getElementById('modal-score');
  const graphEl = document.getElementById('modal-graph-link');
  const kbEl = document.getElementById('modal-kb-type');

  if (!modal) return;

  if (titleEl) titleEl.textContent = chunkData.docName || 'Evidence Dossier';
  if (metaEl) metaEl.textContent = `${chunkData.sourceType || 'Source Repository'} • Relevance ${chunkData.relevance || '0.90'}`;
  if (chunkTextEl) chunkTextEl.textContent = `"${chunkData.fullContent || chunkData.highlightedText || ''}"`;
  if (scoreEl) scoreEl.textContent = chunkData.relevance || '0.942';
  if (graphEl) graphEl.textContent = `Graph Link: ${chunkData.graphRelationship || '[:CORRELATED_ENTITY]'}`;
  if (kbEl) kbEl.textContent = chunkData.sourceType?.includes('Jira') ? 'Jira Backlog' : (chunkData.sourceType?.includes('GitHub') ? 'GitHub Repository' : 'Enterprise Corpus');

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  const labBtn = document.getElementById('modal-explore-lab-btn');
  if (labBtn) {
    labBtn.onclick = () => {
      closeEvidenceModal();
      if (onNavigateToLab) onNavigateToLab('evidence-explorer');
    };
  }
}

export function closeEvidenceModal() {
  const modal = document.getElementById('evidence-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

export function setupEvidenceModalListeners() {
  const modal = document.getElementById('evidence-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  closeBtn?.addEventListener('click', closeEvidenceModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeEvidenceModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeEvidenceModal();
    }
  });
}

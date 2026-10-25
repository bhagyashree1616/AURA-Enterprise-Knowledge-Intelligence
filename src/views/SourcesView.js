/**
 * Knowledge Sources View
 */

import { SOURCE_CONNECTORS } from '../services/mockData.js';
import { showToast } from '../components/NotificationToast.js';

export function renderSourcesView() {
  const cardsHtml = SOURCE_CONNECTORS.map(conn => `
    <div style="background-color: var(--color-surface-container-lowest); border-radius: var(--radius-xl); padding: var(--space-md); border: 1px solid var(--color-border-subtle); box-shadow: var(--shadow-card); display: flex; flex-direction: column; gap: var(--space-sm);">
      <div style="display: flex; align-items: flex-start; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: var(--space-md);">
          <div class="connector-icon-box" style="background-color: var(--color-surface-container-high);">
            <span class="material-symbols-outlined" style="font-size: 24px; color: var(--color-secondary);">${conn.icon}</span>
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.35rem;">
              <h3 class="font-headline-sm" style="margin: 0; color: var(--color-on-surface); font-weight: 700;">${conn.title}</h3>
              ${conn.isDemo ? `<span class="pill-code">Demo Mode</span>` : `<span class="pill-code" style="background-color: var(--color-error-container); color: var(--color-on-error-container);">Requires Setup</span>`}
            </div>
            <p class="font-body-sm" style="color: var(--color-on-surface-variant); margin: 0.15rem 0 0;">${conn.description}</p>
          </div>
        </div>
        <div>
          ${conn.status === 'Connected' ? `
            <span class="font-label-badge" style="padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-low); color: var(--color-on-tertiary-container); font-weight: 700; display: inline-flex; align-items: center; gap: 0.25rem;">
              <span class="pulse-dot green" style="width: 0.45rem; height: 0.45rem;"></span> Connected
            </span>
          ` : conn.status === 'Syncing' ? `
            <span class="font-label-badge" style="padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-low); color: var(--color-secondary); font-weight: 700; display: inline-flex; align-items: center; gap: 0.25rem;">
              <span class="pulse-dot cyan" style="width: 0.45rem; height: 0.45rem;"></span> Syncing (${conn.syncTime})
            </span>
          ` : `
            <span class="font-label-badge" style="padding: 0.2rem 0.5rem; border-radius: var(--radius-sm); background-color: var(--color-surface-container-high); color: var(--color-on-surface-variant); font-weight: 700;">
              ${conn.status}
            </span>
          `}
        </div>
      </div>

      <p class="font-body-sm" style="color: var(--color-on-surface); margin: 0; line-height: 1.5; background-color: var(--color-surface-container-low); padding: var(--space-xs) var(--space-sm); border-radius: var(--radius-md);">
        ${conn.details}
      </p>

      <div style="display: flex; align-items: center; justify-content: space-between; padding-top: var(--space-xs); border-top: 1px solid var(--color-border-subtle);">
        <span class="font-label-micro" style="color: var(--color-on-surface-variant);">Stratum: Hybrid Graph-RAG • Shards: 4</span>
        <button class="font-label-badge test-conn-btn" data-conn-id="${conn.id}" style="padding: 0.25rem 0.65rem; border-radius: var(--radius-md); background-color: var(--color-surface-container-high); color: var(--color-secondary); border: none; cursor: pointer; font-weight: 700;">
          Verify Connection
        </button>
      </div>
    </div>
  `).join('');

  return `
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
          ${cardsHtml}
        </div>
      </section>
    </div>
  `;
}

export function setupSourcesListeners() {
  const buttons = document.querySelectorAll('.test-conn-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-conn-id');
      showToast(`Verifying health check for connector [${id}]...`);
      setTimeout(() => {
        showToast(`Connector [${id}] handshake verified (Simulated).`);
      }, 1000);
    });
  });
}

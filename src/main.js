/**
 * AURA Application Core Entry Point
 */

import './styles/design-tokens.css';
import './styles/typography.css';
import './styles/components.css';

import { renderHeader } from './components/Header.js';
import { renderNavigationDrawer, setupDrawerListeners } from './components/NavigationDrawer.js';
import { renderBottomNav, setupBottomNavListeners } from './components/BottomNav.js';
import { renderNotificationToast, setupToastListeners, showToast } from './components/NotificationToast.js';
import { renderEvidenceModal, setupEvidenceModalListeners } from './components/EvidenceModal.js';

import { renderOverviewDashboard, setupOverviewListeners } from './views/OverviewDashboard.js';
import { renderAskAuraView, setupAskAuraListeners } from './views/AskAuraView.js';
import { renderSourcesView, setupSourcesListeners } from './views/SourcesView.js';
import { renderEvidenceView, setupEvidenceListeners } from './views/EvidenceView.js';
import { renderLabView } from './views/LabView.js';

// State Management
const state = {
  currentRoute: 'overview',
  activePrompt: null
};

function navigateTo(route, promptPayload = null) {
  state.currentRoute = route;
  if (promptPayload) {
    state.activePrompt = promptPayload;
  }
  window.location.hash = route;
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  // Derive route from window hash or state
  const hash = window.location.hash.replace('#', '');
  if (hash && ['overview', 'ask-aura', 'knowledge-sources', 'evidence-explorer', 'evaluation-lab'].includes(hash)) {
    state.currentRoute = hash;
  }

  let viewHtml = '';
  if (state.currentRoute === 'overview') {
    viewHtml = renderOverviewDashboard();
  } else if (state.currentRoute === 'ask-aura') {
    viewHtml = renderAskAuraView(state.activePrompt);
  } else if (state.currentRoute === 'knowledge-sources') {
    viewHtml = renderSourcesView();
  } else if (state.currentRoute === 'evidence-explorer') {
    viewHtml = renderEvidenceView();
  } else if (state.currentRoute === 'evaluation-lab') {
    viewHtml = renderLabView();
  }

  app.innerHTML = `
    <div class="app-container">
      ${renderHeader(state.currentRoute)}
      ${renderNavigationDrawer(state.currentRoute)}
      <main id="main-view-container">
        ${viewHtml}
      </main>
      ${renderBottomNav(state.currentRoute)}
      ${renderNotificationToast()}
      ${renderEvidenceModal()}
    </div>
  `;

  // Attach event listeners
  setupDrawerListeners((targetRoute) => navigateTo(targetRoute));
  setupBottomNavListeners((targetRoute) => navigateTo(targetRoute));
  setupToastListeners();
  setupEvidenceModalListeners();

  if (state.currentRoute === 'overview') {
    setupOverviewListeners(
      (targetRoute) => navigateTo(targetRoute),
      (promptText) => navigateTo('ask-aura', promptText)
    );
  } else if (state.currentRoute === 'ask-aura') {
    setupAskAuraListeners((targetRoute) => navigateTo(targetRoute));
  } else if (state.currentRoute === 'knowledge-sources') {
    setupSourcesListeners();
  } else if (state.currentRoute === 'evidence-explorer') {
    setupEvidenceListeners((targetRoute) => navigateTo(targetRoute));
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  renderApp();
});

window.addEventListener('hashchange', () => {
  renderApp();
});

// Initial kick-off
renderApp();

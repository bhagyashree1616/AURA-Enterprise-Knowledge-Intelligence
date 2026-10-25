/**
 * Header Component with Prototype Transparency Banner
 */

export function renderHeader(activeRoute = 'overview') {
  const titles = {
    'overview': 'Overview',
    'ask-aura': 'Ask Aura',
    'knowledge-sources': 'Knowledge Sources',
    'evidence-explorer': 'Evidence Explorer',
    'evaluation-lab': 'Evaluation Lab'
  };

  const currentTitle = titles[activeRoute] || 'Overview';

  return `
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
              <span class="brand-sub" id="header-view-title">${currentTitle}</span>
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
  `;
}

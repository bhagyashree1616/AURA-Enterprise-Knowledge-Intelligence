/**
 * Bottom Navigation Bar Component
 */

export function renderBottomNav(activeRoute = 'overview') {
  const tabs = [
    { route: 'overview', label: 'Overview', icon: 'dashboard', special: false },
    { route: 'ask-aura', label: 'Ask AURA', icon: 'psychology', special: true },
    { route: 'knowledge-sources', label: 'Sources', icon: 'hub', special: false },
    { route: 'evidence-explorer', label: 'Evidence', icon: 'schema', special: false },
    { route: 'evaluation-lab', label: 'Lab / More', icon: 'biotech', special: false }
  ];

  const tabsHtml = tabs.map(tab => {
    const isActive = tab.route === activeRoute;
    if (tab.special) {
      return `
        <button class="bottom-nav-item ${isActive ? 'active' : ''}" data-bottom-route="${tab.route}" aria-label="${tab.label}">
          <div class="bottom-nav-icon-badge" style="background-color: ${isActive ? 'var(--color-secondary)' : 'var(--color-surface-container-highest)'}; color: ${isActive ? '#ffffff' : 'var(--color-secondary)'};">
            <span class="material-symbols-outlined" style="font-size: 20px;">${tab.icon}</span>
          </div>
          <span class="font-label-micro" style="font-weight: 600; color: ${isActive ? 'var(--color-secondary)' : 'inherit'};">${tab.label}</span>
        </button>
      `;
    }

    return `
      <button class="bottom-nav-item ${isActive ? 'active' : ''}" data-bottom-route="${tab.route}" aria-label="${tab.label}">
        <span class="material-symbols-outlined" style="font-size: 22px; color: ${isActive ? 'var(--color-secondary)' : 'inherit'};">${tab.icon}</span>
        <span class="font-label-micro" style="margin-top: 2px; color: ${isActive ? 'var(--color-secondary)' : 'inherit'};">${tab.label}</span>
      </button>
    `;
  }).join('');

  return `
    <nav class="bottom-nav" aria-label="Bottom Navigation">
      <div class="bottom-nav-inner">
        ${tabsHtml}
      </div>
    </nav>
  `;
}

export function setupBottomNavListeners(onNavigate) {
  const buttons = document.querySelectorAll('[data-bottom-route]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-bottom-route');
      if (onNavigate) onNavigate(target);
    });
  });
}

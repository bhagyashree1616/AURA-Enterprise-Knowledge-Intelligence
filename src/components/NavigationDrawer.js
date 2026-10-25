/**
 * Navigation Drawer Component with Academic Provenance
 */

export function renderNavigationDrawer(activeRoute = 'overview') {
  const navItems = [
    { route: 'overview', label: 'Overview', icon: 'dashboard' },
    { route: 'ask-aura', label: 'Ask AURA', icon: 'psychology' },
    { route: 'knowledge-sources', label: 'Knowledge Sources', icon: 'hub' },
    { route: 'evidence-explorer', label: 'Evidence Explorer', icon: 'schema' },
    { route: 'evaluation-lab', label: 'Evaluation Lab', icon: 'biotech' }
  ];

  const itemsHtml = navItems.map(item => {
    const isActive = item.route === activeRoute;
    return `
      <button class="drawer-nav-item ${isActive ? 'active' : ''}" data-nav-target="${item.route}">
        <span class="material-symbols-outlined" style="font-size: 20px; color: var(--color-secondary);">${item.icon}</span>
        <span class="font-body-md">${item.label}</span>
      </button>
    `;
  }).join('');

  return `
    <div id="drawer-backdrop" class="drawer-backdrop hidden"></div>
    <aside id="aura-drawer" class="drawer-panel closed" role="dialog" aria-modal="true" aria-label="Navigation">
      <div style="display: flex; flex-direction: column;">
        <!-- Drawer Header -->
        <div style="padding: var(--space-lg); display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--color-border-subtle);">
          <div style="display: flex; align-items: center; gap: var(--space-sm);">
            <img src="/assets/aura-logo.png" alt="AURA Logo" style="height: 1.75rem; width: auto; object-fit: contain;" />
            <div style="display: flex; flex-direction: column;">
              <span class="font-headline-sm" style="font-weight: 700; color: var(--color-on-surface); line-height: 1.1;">AURA</span>
              <span class="font-label-micro" style="color: var(--color-secondary); font-weight: 600;">Unified Reasoning Assistant</span>
            </div>
          </div>
          <button id="drawer-close-btn" class="icon-btn" style="width: 2.25rem; height: 2.25rem;" aria-label="Close Navigation Drawer">
            <span class="material-symbols-outlined" style="font-size: 20px;">close</span>
          </button>
        </div>

        <!-- Academic Provenance Card -->
        <div style="margin: var(--space-md) var(--space-md) var(--space-sm); padding: var(--space-sm) var(--space-md); border-radius: var(--radius-lg); background-color: var(--color-surface-container-low); border: 1px solid rgba(0,99,152,0.1);">
          <div style="display: flex; align-items: center; gap: 0.35rem; color: var(--color-secondary); margin-bottom: 0.25rem;">
            <span class="material-symbols-outlined" style="font-size: 16px;">school</span>
            <span class="font-label-badge" style="font-weight: 700;">Academic Provenance</span>
          </div>
          <p class="font-body-sm" style="color: var(--color-on-surface-variant); line-height: 1.35; margin: 0;">
            Dept. of Computer Engineering<br />
            <strong style="color: var(--color-on-surface); font-weight: 600;">Dr. D.Y. Patil Institute of Tech</strong>, Pimpri
          </p>
        </div>

        <!-- Navigation Links -->
        <nav style="padding: var(--space-sm) var(--space-md); display: flex; flex-direction: column; gap: 0.25rem;">
          ${itemsHtml}
        </nav>
      </div>

      <!-- Drawer Footer -->
      <div style="padding: var(--space-lg); border-top: 1px solid var(--color-border-subtle);">
        <div style="padding: var(--space-sm) var(--space-md); border-radius: var(--radius-lg); background-color: var(--color-surface-container-high); display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span class="pulse-dot green" style="width: 0.5rem; height: 0.5rem;"></span>
            <span class="font-label-code" style="color: var(--color-on-surface); font-weight: 600;">v0.5.4-alpha</span>
          </div>
          <span class="font-label-micro" style="color: var(--color-on-surface-variant);">ctx: 32k</span>
        </div>
      </div>
    </aside>
  `;
}

export function setupDrawerListeners(onNavigate) {
  const drawer = document.getElementById('aura-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  const openBtn = document.getElementById('drawer-toggle-btn');
  const closeBtn = document.getElementById('drawer-close-btn');

  function openDrawer() {
    drawer.classList.remove('closed');
    backdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.add('closed');
    backdrop.classList.add('hidden');
    document.body.style.overflow = '';
  }

  openBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !drawer.classList.contains('closed')) {
      closeDrawer();
    }
  });

  const navButtons = drawer.querySelectorAll('[data-nav-target]');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-nav-target');
      closeDrawer();
      if (onNavigate) onNavigate(target);
    });
  });
}

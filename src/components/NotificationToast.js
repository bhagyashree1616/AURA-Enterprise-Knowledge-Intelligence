/**
 * Notification Toast Component
 */

let toastTimeout = null;

export function renderNotificationToast() {
  return `
    <div id="demo-notification" class="toast-notification hidden" role="status" aria-live="polite">
      <div style="display: flex; align-items: center; gap: var(--space-sm); min-width: 0;">
        <span class="material-symbols-outlined" style="font-size: 22px; color: var(--color-secondary-container); flex-shrink: 0;">psychology</span>
        <div style="display: flex; flex-direction: column; min-width: 0;">
          <span class="font-label-badge" style="color: var(--color-secondary-container); font-weight: 700; letter-spacing: 0.04em;">Query Loaded in Buffer</span>
          <span id="demo-notification-text" class="font-body-sm" style="color: var(--color-inverse-on-surface); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Prompt ready</span>
        </div>
      </div>
      <button id="close-notification-btn" style="padding: 0.25rem 0.65rem; border-radius: var(--radius-md); background-color: rgba(255,255,255,0.15); color: #ffffff; border: none; cursor: pointer;" class="font-label-code">
        OK
      </button>
    </div>
  `;
}

export function showToast(message, duration = 3500) {
  const toast = document.getElementById('demo-notification');
  const textEl = document.getElementById('demo-notification-text');
  if (!toast || !textEl) return;

  textEl.textContent = message;
  toast.classList.remove('hidden');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('hidden');
  }, duration);
}

export function setupToastListeners() {
  const closeBtn = document.getElementById('close-notification-btn');
  const toast = document.getElementById('demo-notification');
  closeBtn?.addEventListener('click', () => {
    if (toast) toast.classList.add('hidden');
    if (toastTimeout) clearTimeout(toastTimeout);
  });
}

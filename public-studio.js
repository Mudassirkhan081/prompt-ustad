/* Device-only controls. No network requests or account state. */
(() => {
  const section = document.createElement('div');
  section.className = 'data-tools';
  const exportButton = document.createElement('button');
  exportButton.type = 'button';
  exportButton.textContent = 'Back up saved prompts';
  const clearButton = document.createElement('button');
  clearButton.type = 'button';
  clearButton.textContent = 'Clear saved data';
  section.append(exportButton, clearButton);
  document.querySelector('.recent-section').append(section);
  const dialog = document.createElement('dialog');
  dialog.id = 'clear-data-dialog';
  dialog.setAttribute('aria-labelledby', 'clear-data-title');
  dialog.innerHTML = '<h2 id="clear-data-title">Clear saved prompts?</h2><p>This removes Prompt Ustad drafts, recent prompts and preferences from this browser. Download a backup first if you need to keep them.</p><div class="dialog-actions"><button class="secondary" type="button" id="cancel-clear">Keep my data</button><button class="primary" type="button" id="confirm-clear">Clear this browser</button></div>';
  document.body.append(dialog);
  clearButton.addEventListener('click', () => dialog.showModal());
  document.getElementById('cancel-clear').addEventListener('click', () => dialog.close());
  document.getElementById('confirm-clear').addEventListener('click', () => {
    try {
      window.PromptUstadClearing = true;
      Object.keys(localStorage).filter(k => k.startsWith('prompt-ustad-')).forEach(k => localStorage.removeItem(k));
      location.assign('/prompt-ustad/studio.html');
    } catch {
      window.PromptUstadClearing = false;
      dialog.querySelector('p').textContent = 'Browser storage could not be cleared. Use your browser’s site-data controls.';
    }
  });
  exportButton.addEventListener('click', () => {
    try {
      const records = Object.fromEntries(Object.keys(localStorage).filter(k => k.startsWith('prompt-ustad-')).map(k => [k, localStorage.getItem(k)]));
      const url = URL.createObjectURL(new Blob([JSON.stringify({ app: 'Prompt Ustad', version: 1, exportedAt: new Date().toISOString(), records }, null, 2)], { type: 'application/json' }));
      const link = document.createElement('a');
      link.href = url; link.download = 'prompt-ustad-backup.json'; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch {
      document.getElementById('status').textContent = 'Backup unavailable. Download the current prompt as text instead.';
    }
  });
})();

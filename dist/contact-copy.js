document.querySelectorAll('[data-copy-contact]').forEach(button => {
  button.addEventListener('click', async () => {
    const status = document.getElementById('copy-contact-status');
    try {
      await navigator.clipboard.writeText(button.dataset.copyContact);
      status.textContent = button.textContent === 'Copy email' ? 'Email copied.' : 'LinkedIn profile link copied.';
    } catch {
      const link = button.previousElementSibling;
      const range = document.createRange();
      range.selectNodeContents(link);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Automatic copying is unavailable. The text is selected; use your device’s Copy command.';
    }
  });
});

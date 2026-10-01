(() => {
  const showNotice = (message) => {
    let dialog = document.getElementById('copy-notice');
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.id = 'copy-notice';
      dialog.style.cssText = 'max-width:420px;width:calc(100% - 48px);border:1px solid #29434f;border-radius:16px;padding:28px;background:#102e3d;color:white;font:16px/1.5 Arial,sans-serif;box-shadow:0 20px 80px #0005';
      const text = document.createElement('p');
      text.id = 'copy-notice-text';
      dialog.append(text);
      const close = document.createElement('button');
      close.textContent = 'Close';
      close.style.cssText = 'margin-top:20px;border:0;border-radius:8px;padding:12px 24px;background:#d5ff9c;color:#102e3d;font:inherit;cursor:pointer';
      close.onclick = () => dialog.close();
      dialog.append(close);
      document.body.append(dialog);
    }
    dialog.querySelector('p').textContent = message;
    dialog.showModal();
  };
  document.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    showNotice('This form is part of the Worklume website preview. Submissions are not connected yet, and your information has not been sent.');
  }, true);
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link) return;
    if (link.getAttribute('href') === '#social') {
      event.preventDefault(); event.stopImmediatePropagation();
      showNotice('Worklume social channels will be announced at launch.');
    }
    if (link.getAttribute('href') === '#login') {
      event.preventDefault(); event.stopImmediatePropagation();
      showNotice('This is the Worklume website preview. Account login is not connected.');
    }
  }, true);
})();

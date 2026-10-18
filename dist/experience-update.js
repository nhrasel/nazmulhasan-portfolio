(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav');
  const mobile = window.matchMedia('(max-width: 760px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let scrim;
  if (menu && nav) {
    scrim = document.createElement('div');
    scrim.className = 'nav-scrim';
    scrim.setAttribute('aria-hidden', 'true');
    document.body.append(scrim);
    const pageRegions = [...document.querySelectorAll('body > main, body > footer')];
    const setOpen = (open, restoreFocus = false) => {
      open = Boolean(open && mobile.matches);
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('open', open);
      nav.inert = mobile.matches && !open;
      scrim.classList.toggle('is-open', open);
      document.body.classList.toggle('navigation-open', open);
      pageRegions.forEach(region => { region.inert = open; });
      if (restoreFocus) menu.focus();
    };
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      setOpen(open);
      if (open) nav.querySelector('a')?.focus();
    });
    scrim.addEventListener('click', () => setOpen(false, true));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', event => {
      if (menu.getAttribute('aria-expanded') !== 'true') return;
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false, true);
      }
      if (event.key === 'Tab') {
        const focusable = [menu, ...nav.querySelectorAll('a[href]')];
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
    mobile.addEventListener('change', () => setOpen(false));
    setOpen(false);
  }

  // Capture shared close actions before legacy gallery handlers, preserving their close events.
  function closeModal(modal) {
    if (!modal?.open || modal.classList.contains('is-closing')) return;
    if (reducedMotion.matches) { modal.close(); return; }
    modal.classList.add('is-closing');
    window.setTimeout(() => { if (modal.open) modal.close(); modal.classList.remove('is-closing'); }, 180);
  }
  document.addEventListener('click', event => {
    const close = event.target.closest('[data-close-modal]');
    if (!close) return;
    const modal = close.closest('dialog');
    if (!modal) return;
    event.preventDefault(); event.stopImmediatePropagation(); closeModal(modal);
  }, true);
  document.querySelectorAll('dialog').forEach(modal => {
    modal.addEventListener('cancel', event => { event.preventDefault(); closeModal(modal); });
    modal.addEventListener('click', event => {
      if (event.target !== modal) return;
      const box = modal.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) {
        event.stopImmediatePropagation(); closeModal(modal);
      }
    }, true);
    modal.addEventListener('close', () => modal.classList.remove('is-closing'));
  });
  document.querySelectorAll('[data-timeline]').forEach(button => {
    button.addEventListener('click', () => {
      const open = button.dataset.timeline === 'expand';
      document.querySelectorAll('.career-details').forEach(detail => { detail.open = open; });
    });
  });
  const interview = document.getElementById('interview-dialog');
  const play = document.querySelector('[data-interview-play]');
  if (interview && play) {
    const player = document.getElementById('interview-player');
    play.addEventListener('click', () => {
      const frame = document.createElement('iframe');
      frame.src = 'https://www.youtube-nocookie.com/embed/qbKQDD9brHw?autoplay=1';
      frame.title = 'Green TV The Brand Maker — Nazmul Hasan interview';
      frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      frame.setAttribute('allowfullscreen', '');
      player.replaceChildren(frame);
      interview.showModal();
      document.body.classList.add('modal-open');
    });
    interview.addEventListener('close', () => {
      player.replaceChildren();
      document.body.classList.remove('modal-open');
      play.focus();
    });
  }
})();

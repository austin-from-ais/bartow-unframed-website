(() => {
  'use strict';

  // --- Header scrolled state -----------------------------------------
  const header = document.querySelector('[data-header]');
  if (header) {
    const onScroll = () => {
      header.dataset.scrolled = window.scrollY > 12 ? 'true' : 'false';
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // --- Autoplay videos when they enter the viewport ------------------
  const videos = document.querySelectorAll('video[data-autoplay]');
  if ('IntersectionObserver' in window && videos.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const v = entry.target;
        if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
          const playPromise = v.play();
          if (playPromise && playPromise.catch) playPromise.catch(() => {});
        } else {
          v.pause();
        }
      });
    }, { threshold: [0, 0.35, 0.75] });

    videos.forEach((v) => io.observe(v));
  }

  // --- Sound toggle per mural card -----------------------------------
  document.querySelectorAll('[data-sound-toggle]').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const card = btn.closest('.mural-card');
      const video = card && card.querySelector('video');
      if (!video) return;

      const unmuting = video.muted;

      // Mute every other video so only one plays audio at a time.
      if (unmuting) {
        document.querySelectorAll('.mural-card video').forEach((other) => {
          if (other !== video) {
            other.muted = true;
            const otherBtn = other.closest('.mural-card')?.querySelector('[data-sound-toggle]');
            if (otherBtn) otherBtn.dataset.active = 'false';
          }
        });
      }

      video.muted = !unmuting;
      btn.dataset.active = unmuting ? 'true' : 'false';
      btn.setAttribute('aria-label', unmuting ? 'Mute video' : 'Unmute video');
    });
  });

  // --- Smooth-scroll offset for sticky header ------------------------
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const id = anchor.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      const headerH = header ? header.getBoundingClientRect().height : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

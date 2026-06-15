// Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        // pequeno delay escalonado para grupos
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => io.observe(el));

  // Animação da barra de progresso das fases (signature element)
  const progressWrap = document.getElementById('fase-progress');
  const fp1 = document.getElementById('fp1');
  const fp2 = document.getElementById('fp2');
  const fp3 = document.getElementById('fp3');

  const progressObs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      fp1.classList.add('animate');
      setTimeout(() => fp2.classList.add('animate'), 400);
      setTimeout(() => fp3.classList.add('animate'), 800);
      progressObs.disconnect();
    }
  }, { threshold: 0.3 });
  progressObs.observe(progressWrap);

  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

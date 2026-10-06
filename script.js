// Menu do mobile
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  burger.classList.toggle('is-open', open);
  burger.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Navbar, barra de progresso e link da seção atual em destaque
const nav = document.getElementById('nav');
const toTop = document.getElementById('toTop');
const progressBar = document.getElementById('progressBar');
const sections = document.querySelectorAll('main section[id]');
let ticking = false;

function aoRolar() {
  const y = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;

  nav.classList.toggle('is-scrolled', y > 20);
  toTop.classList.toggle('is-visible', y > 500);
  progressBar.style.width = (total > 0 ? (y / total) * 100 : 0) + '%';

  let atual = '';
  sections.forEach(sec => {
    if (y >= sec.offsetTop - 140) atual = sec.id;
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.classList.toggle('is-active', link.getAttribute('href') === '#' + atual);
  });

  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(aoRolar);
  }
}, { passive: true });

aoRolar();

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Seções aparecendo conforme entram na tela (em cascata)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;
    const irmaos = [...el.parentElement.querySelectorAll(':scope > .reveal')];
    const atraso = Math.min(irmaos.indexOf(el), 4) * 90;

    el.style.transitionDelay = atraso + 'ms';
    el.classList.add('is-visible');
    observer.unobserve(el);
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Brilho que acompanha o cursor nos cards
const cards = document.querySelectorAll(
  '.project, .skillcard, .contact__card, .course, .timeline__card, .about__card'
);

if (window.matchMedia('(hover: hover)').matches) {
  cards.forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

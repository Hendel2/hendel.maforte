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

// Navbar com fundo e link da seção atual em destaque
const nav = document.getElementById('nav');
const toTop = document.getElementById('toTop');
const sections = document.querySelectorAll('main section[id]');

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  nav.classList.toggle('is-scrolled', y > 20);
  toTop.classList.toggle('is-visible', y > 500);

  let atual = '';
  sections.forEach(sec => {
    if (y >= sec.offsetTop - 140) atual = sec.id;
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.classList.toggle('is-active', link.getAttribute('href') === '#' + atual);
  });
}, { passive: true });

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Seções aparecendo conforme entram na tela
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();

/* Menú móvil */
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

/* Header con sombra al hacer scroll */
const header = document.getElementById('header');
const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 20);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* Aparición al hacer scroll */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.rv, .rv-s, .figrow, .stats').forEach(el => io.observe(el));

/* Contadores animados */
function countUp(el, target) {
  const dur = 1200, t0 = performance.now();
  (function tick(now) {
    const p = Math.min((now - t0) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased).toString();
    if (p < 1) requestAnimationFrame(tick); else el.textContent = target.toString();
  })(t0);
}
const co = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { countUp(e.target, Number(e.target.dataset.count)); co.unobserve(e.target); }
  });
}, { threshold: 0.6 });
document.querySelectorAll('[data-count]').forEach(el => co.observe(el));

/* Enlace activo del menú */
const ids = ['negocio','diferencia','ninos','mvv','proceso','marca','tarjetas','brochure','equipo'];
const links = Array.from(nav?.querySelectorAll('a') || []);
const no = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const link = links.find(a => a.getAttribute('href') === '#' + e.target.id);
    if (link) { links.forEach(a => a.classList.remove('active')); link.classList.add('active'); }
  });
}, { threshold: 0.3 });
ids.map(id => document.getElementById(id)).filter(Boolean).forEach(s => no.observe(s));

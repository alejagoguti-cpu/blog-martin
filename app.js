const menuButton = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
menuButton?.addEventListener('click', () => {
  nav.classList.toggle('open');
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
}));

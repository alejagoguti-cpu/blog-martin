const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
document.querySelectorAll('[data-lightbox]').forEach(button => {
  button.addEventListener('click', () => {
    lightboxImage.src = button.dataset.lightbox;
    lightbox.showModal();
  });
});
document.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
lightbox?.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.close();
});

const video = document.getElementById('traffic-video');
const missing = document.getElementById('video-missing');
if (video && missing) {
  video.addEventListener('error', () => missing.hidden = false, true);
  const source = video.querySelector('source');
  source?.addEventListener('error', () => missing.hidden = false);
  video.addEventListener('canplay', () => missing.hidden = true);
}

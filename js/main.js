// ── Menu mobile
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
});

mobileClose.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
});

function closeMobile() {
  mobileMenu.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

// ── Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 60
    ? 'rgba(10,10,10,0.97)'
    : 'rgba(10,10,10,0.85)';
}, { passive: true });

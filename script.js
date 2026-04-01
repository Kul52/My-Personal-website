/* ============================================
   Navbar — darken on scroll
   ============================================ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 20
    ? 'rgba(13,17,23,0.97)'
    : 'rgba(13,17,23,0.85)';
});

/* ============================================
   Active nav link — highlight on scroll
   ============================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ============================================
   Mobile nav toggle
   ============================================ */
const navToggle   = document.getElementById('navToggle');
const navLinksList = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinksList.classList.toggle('open');
});

navLinksList.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinksList.classList.remove('open'));
});

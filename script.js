// reveal on scroll
const revealEls = document.querySelectorAll('.section, .stat, .card, .hero-text > *, .hero-photo-wrap');
revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  if (i % 4 === 1) el.classList.add('delay-1');
  if (i % 4 === 2) el.classList.add('delay-2');
  if (i % 4 === 3) el.classList.add('delay-3');
});

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el) => io.observe(el));

// hero text shouldn't wait for scroll — reveal immediately on load
const heroKids = document.querySelectorAll('.hero-text > *');
heroKids.forEach((el, i) => {
  el.classList.add('reveal');
  el.classList.add(`delay-${Math.min(i, 3)}`);
  requestAnimationFrame(() => {
    setTimeout(() => el.classList.add('visible'), 80 + i * 90);
  });
});
const heroPhoto = document.querySelector('.hero-photo-wrap');
if (heroPhoto) {
  heroPhoto.classList.add('reveal', 'delay-2');
  setTimeout(() => heroPhoto.classList.add('visible'), 400);
}

// gentle parallax on floating shapes
const floaters = document.querySelectorAll('.floater');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  floaters.forEach((f, i) => {
    const speed = 0.04 + (i * 0.012);
    f.style.transform = `translateY(${(y - lastY) * speed * -1}px) translateY(${-14 + Math.sin((y + i * 200) * 0.005) * 6}px)`;
  });
  lastY = y;
}, { passive: true });

// smooth-scroll offset for sticky nav
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

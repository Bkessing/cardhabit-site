// Fade-in via IntersectionObserver. Loaded by BaseLayout so every page's
// .fade-in elements animate (previously only index loaded this, leaving
// .fade-in content invisible on other pages).
const fadeEls = document.querySelectorAll<HTMLElement>('.fade-in');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

// Hero elements get staggered entrance on load
const heroSection = document.querySelector('section');
const heroChildren = heroSection ? heroSection.querySelectorAll<HTMLElement>('.fade-in') : [];

heroChildren.forEach((el, i) => {
  setTimeout(() => el.classList.add('is-visible'), i * 120);
});

fadeEls.forEach((el) => {
  if (!heroSection?.contains(el)) observer.observe(el);
});

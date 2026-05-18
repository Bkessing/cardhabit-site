const SUPABASE_FUNCTION_URL =
  'https://lpdsnoczinqfgzoibyfg.supabase.co/functions/v1/waitlist-signup';

// Fade-in via IntersectionObserver
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

// Waitlist form handler
const form = document.getElementById('waitlist-form') as HTMLFormElement | null;
const submitBtn = document.getElementById('waitlist-submit') as HTMLButtonElement | null;

if (form && submitBtn) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = (form.querySelector('input[type="email"]') as HTMLInputElement)?.value?.trim();
    if (!email) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Joining…';

    try {
      const res = await fetch(SUPABASE_FUNCTION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        form.classList.add('is-submitted');
        // @ts-ignore
        window.posthog?.capture('waitlist_signup', { source: 'website' });
      } else {
        throw new Error('submit failed');
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Try again';
    }
  });
}

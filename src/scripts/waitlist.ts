// Fade-in via IntersectionObserver
const fadeEls = document.querySelectorAll<HTMLElement>('.fade-in');
const heroFadeEls = document.querySelectorAll<HTMLElement>('.hero-section .fade-in, section:first-of-type .fade-in');

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

// Hero elements get staggered entrance on load instead of waiting for intersection
const heroSection = document.querySelector('section');
const heroChildren = heroSection ? heroSection.querySelectorAll<HTMLElement>('.fade-in') : [];

heroChildren.forEach((el, i) => {
  setTimeout(() => {
    el.classList.add('is-visible');
  }, i * 120);
});

// Observe all non-hero fade-in elements
fadeEls.forEach((el) => {
  if (!heroSection?.contains(el)) {
    observer.observe(el);
  }
});

// Waitlist form handler
const form = document.getElementById('waitlist-form') as HTMLFormElement | null;
const submitBtn = document.getElementById('waitlist-submit') as HTMLButtonElement | null;

if (form && submitBtn) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Joining…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.classList.add('is-submitted');

        // PHASE 2: posthog.capture('waitlist_signup', { source: 'website' });
      } else {
        throw new Error('submit failed');
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Try again';
    }
  });
}

// PHASE 2: Supabase swap
// Replace the Formspree action with a fetch to your Supabase project:
//
// Expected table schema:
//   create table waitlist_signups (
//     id uuid default gen_random_uuid() primary key,
//     email text unique not null,
//     created_at timestamptz default now(),
//     source text default 'website'
//   );
//
// RLS policy (allow anon INSERT, no SELECT):
//   create policy "anon insert" on waitlist_signups
//     for insert to anon with check (true);
//
// const SUPABASE_URL = 'YOUR_SUPABASE_URL';       // TODO: add Supabase URL
// const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY'; // TODO: add Supabase anon key
//
// const response = await fetch(`${SUPABASE_URL}/rest/v1/waitlist_signups`, {
//   method: 'POST',
//   headers: {
//     'apikey': SUPABASE_ANON_KEY,
//     'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
//     'Content-Type': 'application/json',
//     'Prefer': 'return=minimal',
//   },
//   body: JSON.stringify({ email, source: 'website' }),
// });

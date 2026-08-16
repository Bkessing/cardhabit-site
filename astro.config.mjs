// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cardhabitapp.com',
  // One canonical URL form: no trailing slash. Vercel 308s the variant
  // (see "trailingSlash": false in vercel.json) instead of serving 200 twice.
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // Functional endpoints only: /s is a tracked share redirect and /invite
      // is reached from an invite code. Neither is a search result, and both
      // are noindex, so submitting them in the sitemap would ask Google to
      // crawl pages we have told it to ignore.
      filter: (page) =>
        !page.includes('/s/') &&
        !page.endsWith('/s') &&
        !page.includes('/invite'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
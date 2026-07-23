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
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
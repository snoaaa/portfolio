// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://abrahamnoumsi.com',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()]
  },

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  integrations: [sitemap()],
  output: 'server',
  adapter: vercel()
});
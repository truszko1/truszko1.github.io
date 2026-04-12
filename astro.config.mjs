// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import { REDIRECTS } from './src/redirects.mjs';

export default defineConfig({
  site: 'https://rafaltruszkowski.com',
  trailingSlash: 'never',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx(), sitemap()],

  redirects: REDIRECTS,

  fonts: [
    {
      name: 'Fraunces',
      cssVariable: '--font-fraunces',
      provider: fontProviders.google(),
      weights: ['400 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
    },
    {
      name: 'Inter',
      cssVariable: '--font-inter',
      provider: fontProviders.google(),
      weights: ['400 600'],
      subsets: ['latin', 'latin-ext'],
    },
    {
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains',
      provider: fontProviders.google(),
      weights: ['400 500'],
      subsets: ['latin', 'latin-ext'],
    },
  ],
});

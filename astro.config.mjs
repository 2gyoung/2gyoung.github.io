// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://2gyoung.github.io',
  integrations: [mdx(), sitemap()],

  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },

  markdown: {
    shikiConfig: {
      themes: {
        light: 'everforest-dark',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});

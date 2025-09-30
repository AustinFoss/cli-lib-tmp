// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  site: "https://my-app-xyz.ipns.dweb.link",
  integrations: [solidJs(), mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});

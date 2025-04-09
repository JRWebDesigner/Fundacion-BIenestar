import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// Get the site URL from environment variable or use a default for local development
const site = process.env.PUBLIC_SITE_URL || 'http://localhost:4321';

export default defineConfig({
  site,

  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "aos/dist/aos.css";`
        }
      }
    },
    optimizeDeps: {
      include: ['aos']
    }
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
      langs: [],
      transformers: [],
      showLineNumbers: false,
      lineNumbersPrefix: ''
    }
  },

  image: {
    // Allow all remote patterns (https and http)
    remotePatterns: [
      {
        protocol: "https"
      },
      {
        protocol: "http"
      }
    ]
  },

  integrations: [sanity({
    projectId: '7xk0i7va',
    dataset: 'production',
    useCdn: false, // See note on using the CDN
    apiVersion: "2025-01-28",
    studioBasePath: '/studio', // insert the current date to access the latest version of the API
  }), react()]
});
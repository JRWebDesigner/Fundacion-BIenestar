import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import sanity from '@sanity/astro';
import react from '@astrojs/react';


export default defineConfig({
output: 'static',
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

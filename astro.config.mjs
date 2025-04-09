import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

export default defineConfig({
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
    remotePatterns: [
      {
        protocol: "https"
      },
      {
        protocol: "http"
      }
    ]
  },

  integrations: [
    sanity({
      projectId: '7xk0i7va',
      dataset: 'production',
      useCdn: false,
      apiVersion: "2025-01-28",
      studioBasePath: '/studio',
    }),
    react()
  ],

});

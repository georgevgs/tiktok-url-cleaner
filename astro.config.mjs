import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'TikTok URL Cleaner',
          short_name: 'TikTok Clean',
          description: 'Clean TikTok URLs for browser viewing',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          icons: [
            {
              src: '/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: '/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      })
    ]
  }
});

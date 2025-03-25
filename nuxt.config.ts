// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
  ],
  app: {
    head: {
      title: "Smart Village App",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Smart Village App - Entdecken Sie Ihre Region' }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ]
    }
  },

  // Load CSS files
  css: [
    '~/assets/css/main.css',
    'swiper/css',
    'swiper/css/navigation'
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  alias: {
    '@': '.',
    'assets': './assets'
  },

  compatibilityDate: '2025-03-20',

  build: {
    transpile: ['swiper/vue']
  },
})
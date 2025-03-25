// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/motion/nuxt'
  ],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    dataValue: 'theme',
    storageKey: 'netinera-color-mode'
  },
  app: {
    head: {
      title: "Netinera",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Netinera - Ihr Partner für nachhaltige Mobilität' }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { 
          rel: "stylesheet", 
          href: "https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;500;600;700&display=swap"
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },

  // Load CSS files
  css: [
    '~/assets/css/main.css',
    '~/assets/css/themes.css',
    '~/assets/css/fonts.css',
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
    transpile: ['swiper/vue', '@vuepic/vue-datepicker']
  }
})
// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/motion/nuxt'
  ],
  app: {
    head: {
      title: "Netinera",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Netinera - Ihr Partner für nachhaltige Mobilität' }
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
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

  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    // Options for the image optimization:
    provider: 'ipx',
    quality: 80,
  },

  motion: {
    directives: {
      'motion': {
        initial: { opacity: 0, y: 100 },
        enter: { opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }
      }
    }
  },
})
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      },
      colors: {
        'primary': '#1E1E1E',
        'secondary': '#F5F5F5',
        'orange': '#FF5722',
      }
    },
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true
  }
} 
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        'titillium': ['Titillium Web', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        // Light theme colors (default)
        primary: {
          DEFAULT: '#00685e', // Primary 01 900
          light: '#1a776e',   // Primary 01 800
          red: '#dd052b',     // Primary 02
          dark: '#3e3842',    // Primary 03
        },
        neutral: '#ffffff',
        
        // Dark theme colors
        dark: {
          primary: {
            DEFAULT: '#1a776e', // Primary 01 800 als Hauptfarbe im Dark Mode
            light: '#00685e',   // Primary 01 900 als hellere Variante
            red: '#dd052b',     // Primary 02 bleibt gleich
            dark: '#ffffff',    // Primary 03 wird zu weiß für Kontrast
          },
          neutral: '#3e3842',   // Neutral wird zu Primary 03 im Dark Mode
        }
      }
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: true,
  }
} 
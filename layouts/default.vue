<template>
  <div>
    <ClientOnly>
      <div :class="[$colorMode.value]">
        <div class="bg-theme-neutral min-h-screen text-theme-primary-dark">
          <!-- Skip to main content link für Barrierefreiheit -->
          <a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>
          
          <Header />
          
          <main id="main-content" class="min-h-screen">
            <slot />
          </main>
          
          <Footer />
          <StickyButton />
        </div>
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/navigation/Header.vue'
import Footer from '../components/navigation/Footer.vue'
import StickyButton from '../components/StickyButton.vue'
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'

// Stelle sicher, dass der initiale Farbmodus korrekt gesetzt ist
const colorMode = useColorMode();
</script>

<style>
.skip-link {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.skip-link:focus {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  height: auto;
  padding: 1rem;
  margin: 1rem;
  background: white;
  color: black;
  z-index: 9999;
  clip: auto;
}

/* Ensure dark mode font is applied */
.dark {
  font-family: 'Titillium Web', sans-serif !important;
}

/* Ensure light mode font is applied */
:root:not(.dark) {
  font-family: theme('fontFamily.sans');
}

/* Ensure smooth theme transition */
body {
  transition: background-color 0.3s ease-in-out;
}
</style> 
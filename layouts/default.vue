<template>
  <div>
    <!-- Skip to main content link für Barrierefreiheit -->
    <a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>
    
    <Header />
    
    <main id="main-content" class="bg-white min-h-screen">
      <slot />
    </main>
    
    <Footer />
    <StickyButton />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/navigation/Header.vue'
import Footer from '../components/navigation/Footer.vue'
import StickyButton from '../components/StickyButton.vue'
</script>

<style scoped>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #FF5722;
  color: #1E1E1E;
  padding: 8px;
  z-index: 100;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 0;
}
</style> 
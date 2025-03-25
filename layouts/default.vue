<template>
  <div>
    <!-- Skip to main content link für Barrierefreiheit -->
    <a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>
    
    <header>
      <Header />
    </header>
    
    <main id="main-content" class="bg-white pt-16 min-h-screen">
      <slot />
    </main>
    
    <ClientOnly>
      <FooterSection />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/navigation/Header.vue';
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
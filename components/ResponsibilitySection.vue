<template>
  <section class="px-4 py-16 font-titillium">
    <div class="mx-auto max-w-4xl text-center container">
      <h2 class="mb-6 font-bold text-[40px]">Verantwortung</h2>
      
      <p class="mx-auto mb-12 max-w-2xl text-lg">
        Lorem ipsum dolor sit amet, consectetuer adipiscing
        elit. Aenean commodo ligula eget dolor. Aenean massa.
      </p>

      <!-- Buttons Container -->
      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="#"
          class="inline-flex items-center gap-2 bg-[#E6F3FF] hover:bg-[#d9edff] px-6 py-3 rounded transition-colors"
        >
          <span class="text-lg">→</span>
          <span class="text-lg">Unsere Werte</span>
        </a>

        <a
          href="#"
          class="inline-flex items-center gap-2 bg-[#E6F3FF] hover:bg-[#d9edff] px-6 py-3 rounded transition-colors"
        >
          <span class="text-lg">→</span>
          <span class="text-lg">Unser Leitbild</span>
        </a>
      </div>

      <!-- Quote Section -->
      <div class="mt-24">
        <p class="mb-12 text-sm uppercase tracking-wider">EIGENVERANTWORTUNG</p>
        
        <blockquote class="mx-auto mb-12 max-w-3xl">
          <p class="font-medium text-2xl leading-relaxed">
            "Man hat mir hier bei NETINERA von Anfang an sehr viel zugetraut.
            Das hat mich motiviert – und mir viel Selbstvertrauen gegeben"
          </p>
        </blockquote>

        <!-- Profile Image -->
        <div class="flex flex-col items-center">
          <div class="bg-[#E6F3FF] mb-4 rounded-full w-24 h-24"></div>
          <p class="font-medium">Vorname Name</p>
          <p class="text-gray-600">Funktion</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Die Komponente verwendet derzeit statische Daten
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap');

.font-titillium {
  font-family: 'Titillium Web', sans-serif;
}
</style> 
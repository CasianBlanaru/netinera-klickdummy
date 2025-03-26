<template>
  <section class="bg-gray-100 px-4 py-8 md:py-16">
    <div class="mx-auto max-w-6xl">
      <h2 class="mb-4 md:mb-6 font-bold md:text-[40px] text-2xl text-center">Aktuell</h2>

      <div class="gap-8 md:gap-12 grid grid-cols-1 lg:grid-cols-2">
        <!-- Pressemitteilungen -->
        <div>
          <h3 class="mb-4 md:mb-6 font-bold text-xl md:text-2xl">Pressemitteilungen</h3>
          
          <div class="space-y-4 md:space-y-6 mb-6 md:mb-8">
            <!-- Press Release Items -->
            <div v-for="i in 3" :key="i" class="pb-4 border-gray-200 border-b">
              <p class="mb-2 text-gray-600 text-sm">01. März 2024</p>
              <a href="#" class="font-medium hover:text-blue-600 text-base md:text-lg transition-colors">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              </a>
            </div>
          </div>

          <a href="#" class="inline-block hover:bg-gray-50 px-4 md:px-6 py-2 md:py-3 border border-gray-300 rounded text-sm md:text-base transition-colors">
            Zur Übersicht
          </a>
        </div>

        <!-- Ansprechpartner -->
        <div>
          <h3 class="mb-4 md:mb-6 font-bold text-xl md:text-2xl">Ansprechpartner</h3>
          
          <div class="gap-4 md:gap-6 grid grid-cols-1 sm:grid-cols-2">
            <div v-for="i in 2" :key="i" class="bg-white shadow-sm p-4 md:p-6 rounded-lg">
              <div class="bg-green-100 mb-4 rounded-full w-16 md:w-20 h-16 md:h-20"></div>
              <h4 class="mb-1 font-medium text-base md:text-lg">Max Mustermann</h4>
              <p class="mb-3 text-gray-600 text-sm md:text-base">Pressesprecher</p>
              <div class="space-y-1">
                <p class="text-sm md:text-base">
                  <a href="tel:+49 123 456 789" class="hover:text-blue-600 transition-colors">
                    +49 123 456 789
                  </a>
                </p>
                <p class="text-sm md:text-base">
                  <a href="mailto:email@netinera.de" class="hover:text-blue-600 transition-colors">
                    email@netinera.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Keine Props oder Logik benötigt
</script>

<style scoped>
/* Die Stile sind direkt in den Tailwind-Klassen integriert */
</style> 
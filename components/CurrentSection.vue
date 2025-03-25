<template>
  <section class="bg-[#E5E5E5] py-16">
    <div class="mx-auto px-4 container">
      <h2 class="mb-16 font-bold text-4xl text-center">Aktuell</h2>
      
      <div class="gap-12 grid md:grid-cols-2 mx-auto max-w-6xl">
        <!-- Pressemitteilungen -->
        <div>
          <h3 class="mb-8 font-bold text-xl">Pressemitteilungen</h3>
          
          <div class="space-y-8">
            <!-- Pressemitteilung 1 -->
            <div>
              <div class="mb-2 text-sm">24.1.2025 | NETINERA</div>
              <a href="#" class="font-bold text-lg hover:underline">
                Nach Gesprächen zwischen NETINERA und GDL: Weiterhin 35-Stunden-Woche ab 1. Januar 2028
              </a>
            </div>

            <!-- Pressemitteilung 2 -->
            <div>
              <div class="mb-2 text-sm">25.1.2025 | METRONOM</div>
              <a href="#" class="font-bold text-lg hover:underline">
                metronom erhält Zuschlag für Verkehrsvertrag ENNO II
              </a>
            </div>

            <!-- Pressemitteilung 3 -->
            <div>
              <div class="mb-2 text-sm">23.1.2025 | ODEG</div>
              <a href="#" class="font-bold text-lg hover:underline">
                NETINERA-Tochter ODEG erhält Zuschlag für Verkehrsvertrag in Westmecklenburg bis 2040
              </a>
            </div>

            <div class="mt-8">
              <a href="#" class="inline-flex items-center hover:bg-gray-100 px-4 py-2 border border-gray-800 rounded">
                Zur Übersicht
              </a>
            </div>
          </div>
        </div>

        <!-- Ansprechpartner -->
        <div>
          <h3 class="mb-8 font-bold text-xl">Ansprechpartner</h3>
          
          <div class="gap-8 grid md:grid-cols-2">
            <!-- Ansprechpartner 1 -->
            <div>
              <div class="flex justify-center items-center bg-[#90EE90] mb-4 p-4 w-full aspect-square text-center">
                Ich bin ein Porträt
              </div>
              <h4 class="mb-1 font-bold">Robert von der Heide</h4>
              <p class="mb-2">Leiter Kommunikation</p>
              <p class="mb-1">+49 (0)151 40645704</p>
              <a href="mailto:kommunikation@netinera.de" class="hover:underline">
                kommunikation@netinera.de
              </a>
            </div>

            <!-- Ansprechpartner 2 -->
            <div>
              <div class="flex justify-center items-center bg-[#90EE90] mb-4 p-4 w-full aspect-square text-center">
                Ich bin ein Porträt
              </div>
              <h4 class="mb-1 font-bold">Nina Massek</h4>
              <p class="mb-2">Referentin Kommunikation</p>
              <p class="mb-1">+49 151 40645749</p>
              <a href="mailto:kommunikation@netinera.de" class="hover:underline">
                kommunikation@netinera.de
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Die Komponente verwendet derzeit statische Daten
// Sie können später Interfaces für die Pressemitteilungen und Ansprechpartner hinzufügen
</script>

<style scoped>
/* Die Stile sind direkt in den Tailwind-Klassen integriert */
</style> 
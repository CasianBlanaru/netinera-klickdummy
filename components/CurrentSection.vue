<template>
  <div class="bg-[#F5F5F5] px-12 sm:px-4 md:px-8 py-[62px] w-full min-h-screen">
    <h1 class="mb-20 sm:mb-10 md:mb-10 font-inter font-bold text-[#1E1E1E] sm:text-2xl md:text-3xl text-4xl text-center leading-[150%] tracking-[-0.88px]">
      Aktuell
    </h1>

    <div class="flex md:flex-col gap-16">
      <!-- Pressemitteilungen -->
      <div class="flex-1">
        <h2 class="mb-[29px] font-inter font-bold text-[#1E1E1E] sm:text-xl md:text-2xl text-3xl leading-[150%] tracking-[-0.57px]">
          Pressemitteilungen
        </h2>

        <div class="flex flex-col gap-10 sm:gap-6">
          <!-- Pressemitteilung 1 -->
          <div class="flex flex-col gap-2">
            <p class="font-inter font-normal text-[#1E1E1E] text-xl">
              24.1.2025 | NETINERA
            </p>
            <p class="font-inter font-bold text-[#1E1E1E] sm:text-lg md:text-xl text-2xl leading-[150%] tracking-[-0.456px]">
              Nach Gesprächen zwischen NETINERA und GDL: Weiterhin 35-Stunden-Woche ab 1. Januar 2028
            </p>
          </div>

          <!-- Pressemitteilung 2 -->
          <div class="flex flex-col gap-2">
            <p class="font-inter font-normal text-[#1E1E1E] text-xl">
              25.1.2025 | METRONOM
            </p>
            <p class="font-inter font-bold text-[#1E1E1E] sm:text-lg md:text-xl text-2xl leading-[150%] tracking-[-0.456px]">
              metronom erhält Zuschlag für Verkehrsvertrag ENNO II
            </p>
          </div>

          <!-- Pressemitteilung 3 -->
          <div class="flex flex-col gap-2">
            <p class="font-inter font-normal text-[#1E1E1E] text-xl">
              23.1.2025 | ODEG
            </p>
            <p class="font-inter font-bold text-[#1E1E1E] sm:text-lg md:text-xl text-2xl leading-[150%] tracking-[-0.456px]">
              NETINERA-Tochter ODEG erhält Zuschlag für Verkehrsvertrag in Westmecklenburg bis 2040
            </p>
          </div>
        </div>

        <div class="mt-[45px]">
          <NuxtLink to="/presse" class="inline-flex items-center gap-2 font-inter text-[#1E1E1E] cursor-pointer">
            <span class="text-base">→</span>
            <span class="text-base">Zur Übersicht</span>
          </NuxtLink>
        </div>
      </div>

      <!-- Ansprechpartner -->
      <div class="flex-1">
        <h2 class="mb-[31px] font-inter font-bold text-[#1E1E1E] sm:text-xl md:text-2xl text-3xl leading-[150%] tracking-[-0.57px]">
          Ansprechpartner
        </h2>

        <div class="gap-[38px] md:gap-6 grid grid-cols-2 md:grid-cols-1">
          <!-- Ansprechpartner 1 -->
          <div class="flex flex-col gap-[38px]">
            <div class="flex justify-center items-center bg-[#90EE90] w-[223px] h-[232px] text-[#90EE90]">
              Ich bin ein Porträt
            </div>
            <div class="flex flex-col">
              <p class="font-inter font-bold text-[#1E1E1E] text-base leading-[150%]">
                Robert von der Heide
              </p>
              <p class="font-inter font-normal text-[#1E1E1E] text-base leading-[150%]">
                Leiter Kommunikation
              </p>
              <p class="font-inter font-normal text-[#1E1E1E] text-base leading-[150%]">
                +49 (0)151 40645704
              </p>
              <p class="font-inter font-normal text-[#1E1E1E] text-base leading-[150%]">
                kommunikation@netinera.de
              </p>
            </div>
          </div>

          <!-- Ansprechpartner 2 -->
          <div class="flex flex-col gap-[38px]">
            <div class="flex justify-center items-center bg-[#90EE90] w-[223px] h-[232px] text-[#90EE90]">
              Ich bin ein Porträt
            </div>
            <div class="flex flex-col">
              <p class="font-inter font-bold text-[#1E1E1E] text-base leading-[150%]">
                Nina Massek
              </p>
              <p class="font-inter font-normal text-[#1E1E1E] text-base leading-[150%]">
                Referentin Kommunikation
              </p>
              <p class="font-inter font-normal text-[#1E1E1E] text-base leading-[150%]">
                +49 151 40645749
              </p>
              <p class="font-inter font-normal text-[#1E1E1E] text-base leading-[150%]">
                kommunikation@netinera.de
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props or logic needed
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}
</style> 
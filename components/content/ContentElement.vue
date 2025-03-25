<template>
  <div class="flex flex-col items-center bg-[#F5F5F5] px-5 sm:px-4 py-20 sm:py-10 md:py-16 w-full min-h-screen">
    <!-- Title -->
    <h2 class="mb-8 sm:mb-4 md:mb-6 font-inter font-bold text-[#1E1E1E] sm:text-2xl md:text-3xl text-4xl text-center leading-[150%] tracking-[-0.88px]">
      Leistungen
    </h2>

    <!-- Description -->
    <p class="mb-11 sm:mb-6 md:mb-8 max-w-[578px] font-inter font-medium text-[#1E1E1E] sm:text-base md:text-lg text-xl text-center leading-[150%] tracking-[-0.22px]">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
    </p>

    <!-- Content Grid -->
    <div class="relative w-full max-w-[1120px]">
      <div class="flex md:flex-wrap justify-between md:justify-center items-start gap-6 sm:gap-8">
        <!-- Card 1 -->
        <div class="flex flex-col w-[310px] sm:w-full">
          <div class="bg-[#FFA500] mb-[39px] rounded-sm w-full h-[310px]"></div>
          <div class="mb-[15px] font-inter font-medium text-[#1E1E1E] text-base leading-[150%] tracking-[-0.176px]">
            ÖPNV & NACHHALTIGKEIT
          </div>
          <div class="font-inter font-bold text-[#1E1E1E] text-2xl leading-[150%] tracking-[-0.456px]">
            Nachhaltig in die Zukunft
          </div>
        </div>

        <!-- Card 2 -->
        <div class="flex flex-col w-[310px] sm:w-full">
          <div class="bg-[#FFA500] mb-[39px] rounded-sm w-full h-[310px]"></div>
          <div class="mb-[15px] font-inter font-medium text-[#1E1E1E] text-base leading-[150%] tracking-[-0.176px]">
            TECHNIK & INNOVATION
          </div>
          <div class="font-inter font-bold text-[#1E1E1E] text-2xl leading-[150%] tracking-[-0.456px]">
            Nächster Halt: Zukunft
          </div>
        </div>

        <!-- Card 3 -->
        <div class="flex flex-col w-[310px] sm:w-full">
          <div class="bg-[#FFA500] mb-[39px] rounded-sm w-full h-[310px]"></div>
          <div class="mb-[15px] font-inter font-medium text-[#1E1E1E] text-base leading-[150%] tracking-[-0.176px]">
            INSTANDHALTUNG & SERVICE
          </div>
          <div class="font-inter font-bold text-[#1E1E1E] text-2xl leading-[150%] tracking-[-0.456px]">
            Warum es bei uns läuft wie geschmiert
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <div class="md:hidden top-1/2 left-[-60px] absolute -translate-y-1/2">
        <svg class="w-[39px] h-[33px]"></svg>
      </div>
      <div class="md:hidden top-1/2 right-[-60px] absolute -translate-y-1/2">
        <svg class="w-[39px] h-[33px]"></svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props or logic needed for now
</script>

<style>
</style> 
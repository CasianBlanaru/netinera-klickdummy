<template>
  <div class="flex flex-col items-center bg-white px-[5px] py-[51px] w-full">
    <div class="w-full max-w-[1437px]">
      <h2 class="mb-[15px] font-inter font-bold text-[#1E1E1E] sm:text-2xl md:text-3xl text-4xl text-center leading-[150%] tracking-[-0.88px]">
        Verantwortung
      </h2>
      
      <p class="mx-auto mb-12 max-w-[610px] font-inter font-normal text-[#1E1E1E] sm:text-lg md:text-xl text-2xl text-center leading-[150%] tracking-[-0.456px]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
      </p>

      <div class="flex sm:flex-col justify-center sm:items-center gap-[47px]">
        <NuxtLink 
          to="/unternehmen/werte" 
          class="flex items-center gap-2 bg-[#E6F4F9] hover:bg-[#d0e9f3] px-6 py-4 rounded font-inter font-medium text-[#1E1E1E] text-base transition-all duration-200 cursor-pointer"
        >
          → Unsere Werte
        </NuxtLink>

        <NuxtLink 
          to="/unternehmen/leitbild" 
          class="flex items-center gap-2 bg-[#E6F4F9] hover:bg-[#d0e9f3] px-6 py-4 rounded font-inter font-medium text-[#1E1E1E] text-base transition-all duration-200 cursor-pointer"
        >
          → Unser Leitbild
        </NuxtLink>
      </div>

      <div class="flex flex-col items-center mt-[121px]">
        <p class="mb-[29px] font-inter font-normal text-[#1E1E1E] text-base text-center leading-[150%] tracking-[-0.176px]">
          EIGENVERANTWORTUNG
        </p>
        
        <blockquote class="mb-[29px] max-w-[1012px] font-merriweather font-normal text-[#1E1E1E] sm:text-xl md:text-2xl text-3xl text-center leading-[150%] tracking-[-0.57px]">
          "Man hat mir hier bei NETINERA von Anfang an sehr viel zugetraut. Das hat mich motiviert – und mir viel Selbstvertrauen gegeben"
        </blockquote>

        <div class="bg-[#E6F4F9] mb-[29px] rounded-full w-[120px] h-[120px]"></div>

        <div class="font-inter font-normal text-[#1E1E1E] text-base text-center leading-[150%] tracking-[-0.176px]">
          <span>Vorname Name</span><br>
          <span>Funktion</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props or logic needed
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Merriweather:wght@400&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}

.font-merriweather {
  font-family: 'Merriweather', serif;
}
</style> 
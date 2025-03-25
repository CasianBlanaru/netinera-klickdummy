<template>
  <div class="flex flex-col items-center bg-white px-5 py-[77px] w-full min-h-[559px]">
    <h1 class="font-inter font-bold text-[#1E1E1E] sm:text-2xl md:text-3xl text-4xl text-center leading-[150%] tracking-[-0.88px]">
      Unternehmen
    </h1>
    
    <p class="mt-[50px] max-w-[578px] font-inter font-medium text-[#1E1E1E] sm:text-base md:text-lg text-xl text-center leading-[150%] tracking-[-0.22px]">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
    </p>

    <div class="flex sm:flex-col justify-center gap-[133px] sm:gap-5 md:gap-[60px] mt-[76px] sm:w-full">
      <NuxtLink 
        to="/unternehmen/organisation" 
        class="flex justify-center items-center bg-[#E6F0FF] hover:bg-[#d0e5ff] rounded w-[254px] sm:w-full h-[74px] font-inter text-[#1E1E1E] text-xl transition-all duration-200 cursor-pointer"
      >
        → Organisation
      </NuxtLink>

      <NuxtLink 
        to="/unternehmen/geschaeftsbereiche" 
        class="flex justify-center items-center bg-[#E6F0FF] hover:bg-[#d0e5ff] rounded w-[309px] sm:w-full h-[74px] font-inter text-[#1E1E1E] text-xl transition-all duration-200 cursor-pointer"
      >
        → Geschäftsbereiche
      </NuxtLink>

      <NuxtLink 
        to="/unternehmen/management" 
        class="flex justify-center items-center bg-[#E6F0FF] hover:bg-[#d0e5ff] rounded w-[309px] sm:w-full h-[74px] font-inter text-[#1E1E1E] text-xl transition-all duration-200 cursor-pointer"
      >
        → Management
      </NuxtLink>
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
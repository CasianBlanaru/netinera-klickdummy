<template>
  <div class="bg-white w-full min-h-screen">
    <div class="flex flex-col items-center px-6 sm:px-3 md:px-4 py-[37px]">
      <h2 class="font-inter font-bold text-[#1E1E1E] text-[40px] sm:text-[28px] md:text-[32px] text-center leading-[150%] tracking-[-0.88px]">
        Netinera in Zahlen
      </h2>
      
      <p class="mt-[46px] md:mt-8 w-full max-w-[760px] font-inter font-medium text-[#1E1E1E] text-[20px] md:text-[18px] sm:text-base text-center leading-[150%] tracking-[-0.22px]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
      </p>
      
      <div class="gap-5 md:gap-4 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 mt-16 md:mt-12">
        <div v-for="i in 6" :key="i" class="flex justify-center items-center bg-[#E5E5E5] rounded h-[169px] font-bold text-[#333333] text-[64px]">
          439
        </div>
      </div>
      
      <div class="gap-5 md:gap-4 grid grid-cols-2 md:grid-cols-1 mx-auto mt-5 max-w-[648px]">
        <div v-for="i in 2" :key="i" class="flex justify-center items-center bg-[#E5E5E5] rounded h-[169px] font-bold text-[#333333] text-[64px]">
          439
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Keine Props oder Logik benötigt
</script> 
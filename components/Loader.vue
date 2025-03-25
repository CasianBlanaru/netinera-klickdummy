<template>
  <div v-if="isLoading" class="z-50 fixed inset-0 flex justify-center items-center bg-white/80 backdrop-blur-sm">
    <div class="relative">
      <div class="border-4 border-primary/20 rounded-full w-16 h-16 animate-spin">
        <div class="top-0 left-0 absolute border-4 border-primary rounded-full w-full h-full animate-pulse"></div>
      </div>
      <div class="-bottom-8 left-1/2 absolute font-medium text-primary -translate-x-1/2 transform">
        Lade...
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isLoading: boolean
}>()
</script> 
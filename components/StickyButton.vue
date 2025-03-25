<template>
  <div class="group relative">
    <NuxtLink
      to="/components"
      class="right-8 bottom-8 z-50 fixed bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl p-4 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-white hover:scale-105 transition-all duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    </NuxtLink>
    
    <!-- Popover -->
    <div class="invisible group-hover:visible right-16 bottom-8 absolute bg-white opacity-0 group-hover:opacity-100 shadow-lg p-3 border-[0.5px] border-gray-100/30 rounded-lg w-48 transition-all translate-x-2 group-hover:translate-x-0 duration-300 transform">
      <p class="text-gray-700 text-sm">Alle Komponenten anzeigen</p>
      <div class="top-1/2 right-0 absolute bg-white border-[0.5px] border-gray-100/30 w-3 h-3 rotate-45 -translate-y-1/2 translate-x-1/2"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props or logic needed
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style> 
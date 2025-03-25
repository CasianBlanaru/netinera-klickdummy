<template>
  <div>
    <ClientOnly>
      <button
        @click="toggleTheme"
        class="flex justify-center items-center hover:bg-gray-100 dark:bg-[#1a776e] dark:hover:bg-[#00685e] p-2 rounded-full transition-colors"
        :aria-label="$colorMode.value === 'light' ? 'Zum dunklen Design wechseln' : 'Zum hellen Design wechseln'"
      >
        <!-- Sun Icon für Light Mode -->
        <svg
          v-if="$colorMode.value === 'dark'"
          xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 2v2m0 16v2m-8-12H2m20 0h-2m-2.05 8.05l-1.414 1.414M5.636 5.636L4.222 4.222m14.142 0l-1.414 1.414M5.636 18.364l-1.414 1.414"
          />
        </svg>
        <!-- Moon Icon für Dark Mode -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-white dark:text-gray-900"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light';
};
</script> 
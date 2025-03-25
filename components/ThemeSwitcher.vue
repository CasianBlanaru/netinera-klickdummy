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
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
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
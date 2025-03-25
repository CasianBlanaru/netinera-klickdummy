<template>
  <button
    type="button"
    @click="$emit('click')"
    class="md:hidden p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 text-zinc-700 hover:text-red-600"
    :aria-label="isOpen ? 'Close menu' : 'Open menu'"
    :aria-expanded="isOpen"
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-labelledby="hamburgerIcon"
    >
      <title id="hamburgerIcon">{{ isOpen ? 'Close Menu Icon' : 'Menu Icon' }}</title>
      <template v-if="isOpen">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </template>
      <template v-else>
        <line x1="4" y1="8" x2="20" y2="8" />
        <line x1="4" y1="16" x2="20" y2="16" />
      </template>
    </svg>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();

defineEmits<{
  (e: 'click'): void;
}>();
</script> 
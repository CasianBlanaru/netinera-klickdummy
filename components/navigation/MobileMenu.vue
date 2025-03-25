<template>
  <!-- Overlay -->
  <div
    :class="[
      'fixed inset-0 bg-black/50 transition-opacity duration-300 z-40',
      isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    ]"
    @click="$emit('close')"
    @keydown="() => {}"
    role="presentation"
    aria-hidden="true"
  />

  <!-- Menu -->
  <div
    aria-modal="true"
    aria-label="Mobile navigation"
    :class="[
      'fixed top-0 right-0 h-full w-[300px] max-sm:w-full bg-white shadow-xl transform transition-all duration-300 ease-in-out z-50',
      isOpen 
        ? 'translate-x-0 opacity-100' 
        : 'translate-x-full opacity-0 pointer-events-none'
    ]"
  >
    <div class="flex flex-col h-full">
      <div class="flex justify-end p-4 pt-8">
        <button
          type="button"
          @click="$emit('close')"
          class="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 text-zinc-700 hover:text-red-600"
          aria-label="Close menu"
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
            aria-labelledby="closeIconTitle"
          >
            <title id="closeIconTitle">Close Icon</title>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <div :class="[
        'flex-1 px-4 py-6 transition-all duration-500',
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      ]">
        <NavigationLinks isMobile />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue';
import NavigationLinks from './NavigationLinks.vue';

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    emit('close');
  }
};

watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
});

onMounted(() => {
  if (props.isOpen) {
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
  }
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscape);
  document.body.style.overflow = "unset";
});
</script> 
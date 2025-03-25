<template>
  <div 
    :class="[
      'searchfield -inset-1 absolute left-0 right-0 top-full transition-all duration-300 ease-in-out mt-[-45px] p-0 min-h-[110px] before:bg-white before:absolute before:w-full before:h-full before:rounded-bl-[48px] before:rounded-br-[48px] before:max-sm:rounded-bl-3xl before:max-sm:rounded-br-3xl',
      isOpen 
        ? 'opacity-100 translate-y-0 h-16' 
        : 'opacity-0 -translate-y-4 h-0 pointer-events-none'
    ]"
    style="z-index: -1"
  >
    <div class="flex items-center m-0 mx-auto px-4 pt-6 w-[90%] h-full container">
      <div class="relative flex items-center w-full">
        <input
          ref="inputRef"
          type="text"
          placeholder="Suchen..."
          class="pl-4 border border-gray-300 focus:border-transparent rounded-3xl focus:outline-none focus:ring-2 focus:ring-red-600 w-full h-10"
          aria-label="Suchfeld"
        />
        <button
          type="button"
          @click="$emit('close')"
          class="right-3 absolute text-gray-500 hover:text-red-600 transition-colors"
          aria-label="Suche schließen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits<{
  close: [];
}>();

const inputRef = ref<HTMLInputElement | null>(null);

watch(() => props.isOpen, (newValue) => {
  if (newValue && inputRef.value) {
    inputRef.value.focus();
  }
});

const handleEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape" && props.isOpen) {
    emit('close');
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscape);
});
</script> 
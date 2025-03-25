<template>
  <section
    class="flex max-md:flex-col gap-8"
    :class="{ 'flex-row-reverse': reverse }"
  >
    <!-- Text content -->
    <div class="flex-1">
      <h2
        class="mb-4 font-bold text-stone-900 text-2xl leading-9 tracking-tighter"
      >
        {{ title }}
      </h2>
      <p class="text-stone-900 text-base leading-6 tracking-normal">
        {{ content }}
      </p>
    </div>

    <!-- Image content -->
    <div class="flex-1">
      <div class="flex justify-center items-center bg-orange-400 w-full aspect-video text-white">
        Ich bin ein Bild
      </div>
      <p v-if="caption" class="mt-2 text-gray-500 text-sm">
        {{ caption }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  reverse: boolean
  title: string
  content: string
  caption?: string
}>()
</script>

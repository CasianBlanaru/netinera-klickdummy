<template>
  <article
    class="flex gap-4 rounded-xl"
    :aria-labelledby="`related-title-${computedId}`"
  >
    <div
      class="bg-orange-400 w-36 h-[145px]"
      role="img"
      :aria-label="`${companyName} thumbnail`"
    ></div>
    <div class="flex flex-col gap-2">
      <div class="text-stone-900 text-base">{{ companyName }}</div>
      <h3 :id="`related-title-${computedId}`" class="font-bold text-stone-900 text-2xl">
        {{ title }}
      </h3>
      <a
        href="#"
        class="focus:outline-none text-stone-900 text-lg hover:underline focus:underline"
        :aria-label="`Mehr über ${title} erfahren`"
      >
        → Mehr
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Props {
  companyName: string;
  title: string;
  imageUrl?: string;
  index?: number;
}

const props = withDefaults(defineProps<Props>(), {
  index: 0
});

const computedId = `${props.companyName}-${props.title}-${props.index}`.toLowerCase().replace(/[^a-z0-9]/g, '-');
</script>

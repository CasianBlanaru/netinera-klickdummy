<template>
  <section
    class="flex max-md:flex-col justify-between bg-white mx-auto p-0 px-4 max-sm:px-6 max-md:px-8 pt-8 max-sm:pt-24 max-md:pt-24 max-sm:pb-6 max-md:pb-8 w-full h-[784px] max-md:h-auto container min-height-[680px]"
    :aria-labelledby="titleId"
  >
    <div
      class="max-md:mb-8 max-md:p-0 pt-80 pr-0 pb-0 max-w-[560px] max-md:max-w-full"
    >
      <p class="font-medium text-stone-900 text-base leading-6 tracking-normal">
        {{ subtitle }}
      </p>
      <h2
        :id="titleId"
        class="font-bold text-stone-900 max-sm:text-3xl text-4xl leading-[60px] max-sm:leading-10 tracking-tighter"
      >
        {{ title }}
      </h2>
    </div>
    <div
      class="bg-amber-500 max-md:m-0 mt-56 mb-0 ml-0 w-[719px] max-md:w-full h-[352px] max-sm:h-[200px] max-md:h-[300px]"
      role="img"
      :aria-label="imageAlt"
    ></div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  subtitle: string;
  titleId: string;
  imageAlt?: string;
}

defineProps<Props>();
</script>

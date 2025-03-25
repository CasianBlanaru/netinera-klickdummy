<template>
  <div class="flex flex-col gap-6">
    <article
      class="flex flex-row max-md:flex-col gap-20 max-sm:gap-8 mx-auto max-w-[931px]"
      :aria-labelledby="`company-title-${id}`"
    >
      <div
        class="bg-orange-400 rounded-lg w-[232px] max-md:w-full h-[232px] max-md:h-[200px]"
        role="img"
        :aria-label="`${companyName} logo`"
      ></div>
      <div class="flex flex-col justify-start gap-4 pt-4 max-md:pt-6">
        <div class="text-stone-900 text-base">{{ companyName }}</div>
        <h3
          :id="`company-title-${id}`"
          class="font-bold text-stone-900 text-2xl"
        >
          {{ title }}
        </h3>
        <div class="pr-8 max-md:pr-0 max-w-[500px] min-h-[156px] max-md:min-h-0 text-stone-900 text-base">
          {{ description }}
          <br /><br />
          <a href="#" class="focus:outline-none hover:underline focus:underline"
            >→ Mehr</a
          >
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
let uniqueId = 0

const props = defineProps<{
  companyName: string
  title: string
  description: string
}>()

const id = `company-${uniqueId++}`
</script>

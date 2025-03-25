<template>
  <section
    class="max-md:flex-col bg-white rounded-xl w-full h-[600px]"
    :aria-labelledby="titleId"
  >
    <div class="relative flex flex-col items-center bg-orange-400 max-md:h-[400px] size-full">
      <div
        class="bottom-0 absolute bg-white mt-auto p-8 max-sm:p-6 w-[896px] max-sm:w-[90%] min-h-[200px] max-h-[180px]"
      >
          <div class="flex flex-col items-center">
           <div class="bg-white p-10 max-sm:p-6 max-md:p-8 w-full max-w-2xl">
          <p class="mb-2 font-medium text-stone-900 text-base tracking-normal">
            {{ subtitle }}
          </p>
          <h2
            :id="titleId"
            class="font-bold text-stone-900 max-sm:text-3xl max-md:text-3xl text-4xl leading-[60px] tracking-tighter"
          >
            {{ title }}
          </h2>
          </div>
          </div>
      </div>
    </div>
    <div v-if="subtext" class="flex flex-col items-center px-8">
      <div class="bg-white p-10 max-sm:p-6 max-md:p-8 w-full max-w-2xl">
        <p class="mb-16 text-stone-900 text-base leading-6 tracking-normal">
            {{ subtext }} 
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
	title: string;
	subtitle: string;
	titleId: string;
	subtext: string;
}

defineProps<Props>();
</script>
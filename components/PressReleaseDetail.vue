<template>
  <article class="flex flex-col items-center bg-white mx-auto mb-30 p-10 max-md:p-5 pt-40 max-w-[1437px]">
    <!-- Header Section -->
    <div class="mb-20 max-w-[592px]">
      <p class="mb-3 font-['Inter'] text-stone-900 text-base">
        {{ date }} | {{ company }}
      </p>
      <h1 class="font-['Inter'] font-bold text-[40px] text-stone-900 max-sm:text-[28px] leading-[150%] tracking-[-0.88px]">
        {{ title }}
      </h1>
    </div>

    <!-- Main Content -->
    <div class="max-w-[592px]">
      <!-- Text Content -->
      <div class="mb-10 font-['Inter'] text-stone-900 text-base leading-[150%]">
        <slot name="content"></slot>
      </div>

      <!-- Image Section -->
      <div class="my-10">
        <div class="bg-orange-400 mb-3.5" 
        style="width: 576px; height: 374px; max-width: 100%;">
        </div>
        <p v-if="imageCaption" class="font-['Inter'] text-stone-900 text-base">
          {{ imageCaption }}
        </p>
      </div>

      <!-- About Section -->
      <div v-if="aboutTitle" class="mt-15">
        <h2 class="mb-5 font-['Inter'] font-bold text-stone-900 text-2xl">
          {{ aboutTitle }}
        </h2>
        <p class="font-['Inter'] text-stone-900 text-base leading-[150%]">
          {{ aboutContent }}
        </p>
      </div>

      <!-- Contact Section -->
      <div v-if="contacts && contacts.length" class="mt-15">
        <h2 class="mb-5 font-['Inter'] font-bold text-stone-900 text-2xl">
          Ihre Ansprechpartner
        </h2>
        <div class="flex max-md:flex-col gap-[90px] max-md:gap-10">
          <div v-for="contact in contacts" :key="contact.name" class="flex flex-col">
            <div class="bg-orange-400 mb-[38px] w-[223px] max-md:w-full h-[232px]"></div>
            <div class="font-['Inter']">
              <p class="mb-1.5 font-bold text-base">{{ contact.name }}</p>
              <p class="text-base leading-[150%]">{{ contact.position }}</p>
              <div class="text-base leading-[150%]">
                <p>{{ contact.phone }}</p>
                <p>{{ contact.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Contact {
  name: string;
  position: string;
  phone: string;
  email: string;
}

interface Props {
  date?: string;
  company?: string;
  title?: string;
  imageCaption?: string;
  aboutTitle?: string;
  aboutContent?: string;
  contacts?: Contact[];
}

withDefaults(defineProps<Props>(), {
  date: '',
  company: '',
  title: '',
  contacts: () => []
});
</script> 
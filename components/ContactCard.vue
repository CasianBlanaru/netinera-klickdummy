<template>
  <article class="flex flex-col gap-6">
    <div
      class="flex justify-center items-center bg-orange-400 w-[223px] max-md:w-full h-[232px] text-stone-900"
      aria-label="Portrait of {{ name }}"
    >
      Ich bin ein Porträt
    </div>
    <div class="flex flex-col">
      <h3 class="font-bold text-stone-900 text-base">{{ name }}</h3>
      <p class="text-stone-900 text-base">{{ position }}</p>
      <a
        :href="`tel:${phone}`"
        class="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-stone-900 text-base hover:underline"
        aria-label="Call {{ name }} at {{ phone }}"
      >
        {{ phone }}
      </a>
      <a
        :href="`mailto:${email}`"
        class="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-stone-900 text-base hover:underline"
        aria-label="Email {{ name }} at {{ email }}"
      >
        {{ email }}
      </a>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
});
</script>

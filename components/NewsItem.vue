<template>
  <article class="flex flex-col gap-2">
    <header class="text-xl text-stone-900">{{ date }} | {{ company }}</header>
    <h3 class="text-2xl font-bold text-stone-900">{{ headline }}</h3>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NewsItem",
  props: {
    date: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      required: true,
    },
  },
});
</script>

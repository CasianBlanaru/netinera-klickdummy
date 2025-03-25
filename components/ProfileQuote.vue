<template>
  <section class="mt-12 w-full text-center" aria-labelledby="quote-section">
    <blockquote
      class="mx-auto mb-8 text-3xl tracking-tight leading-10 max-w-[1012px] text-stone-900 max-md:px-5 max-md:py-0 max-md:text-2xl max-sm:px-4 max-sm:py-0 max-sm:text-2xl"
      id="quote-section"
    >
      &quot;Die schlanke Organisation weiter ausbauen. Die Digitalisierung
      vorantreiben. Die Potentiale der KI nutzen.&quot;
    </blockquote>

    <div
      class="mx-auto my-8 bg-amber-500 rounded-full h-[120px] w-[120px] max-sm:h-[100px] max-sm:w-[100px]"
      aria-hidden="true"
      role="presentation"
    ></div>

    <footer class="mt-8 max-sm:text-sm">
      <p class="text-base leading-6 text-stone-900">Fabrizio Favara</p>
      <p class="text-base leading-6 text-stone-900">CEO</p>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileQuote",
});
</script>

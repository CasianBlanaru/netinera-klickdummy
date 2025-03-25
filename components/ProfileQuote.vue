<template>
  <section class="mt-12 w-full text-center" aria-labelledby="quote-section">
    <blockquote
      class="mx-auto mb-8 max-sm:px-4 max-md:px-5 max-sm:py-0 max-md:py-0 max-w-[1012px] text-stone-900 max-sm:text-2xl max-md:text-2xl text-3xl leading-10 tracking-tight"
      id="quote-section"
    >
      &quot;Die schlanke Organisation weiter ausbauen. Die Digitalisierung
      vorantreiben. Die Potentiale der KI nutzen.&quot;
    </blockquote>

    <div
      class="bg-amber-500 mx-auto my-8 rounded-full w-[120px] max-sm:w-[100px] h-[120px] max-sm:h-[100px]"
      aria-hidden="true"
      role="presentation"
    ></div>

    <footer class="mt-8 max-sm:text-sm">
      <p class="text-stone-900 text-base leading-6">Fabrizio Favara</p>
      <p class="text-stone-900 text-base leading-6">CEO</p>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProfileQuote",
});
</script>

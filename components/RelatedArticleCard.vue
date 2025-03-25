<template>
  <article
    class="flex-1 self-stretch p-4 pb-28 -mb-0.5 h-auto bg-neutral-100 max-h-[200px] min-h-[200px] min-w-[300px]"
  >
    <div class="flex gap-5 max-md:flex-col">
      <div class="w-[33%] max-md:ml-0 max-md:w-full">
        <div
          class="mb-4 w-36 bg-orange-400 h-[145px]"
          role="img"
          aria-label="Artikelbild"
        ></div>
      </div>
      <div class="ml-5 w-[73%] max-md:ml-0 max-md:w-full">
        <p class="mb-2 text-base font-medium text-stone-900">ODEG</p>
        <h3 class="mb-2 text-2xl font-bold text-stone-900">
          Im Osten unverzichtbar
        </h3>
        <a
          href="#"
          class="text-lg text-stone-900 hover:underline focus:outline-none focus:ring-2 focus:ring-stone-900"
          >→ Mehr</a
        >
      </div>
      <div class="ml-5 w-[33%] max-md:ml-0 max-md:w-full hidden">
        <div
          class="absolute top-5 self-stretch bg-orange-400 h-[352px] left-[696px] w-[647px]"
          role="img"
          aria-label="Großes Artikelbild"
        >
          Ich bin ein Bild
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RelatedArticleCard",
  props: {
    title: {
      type: String,
      default: "Im Osten unverzichtbar",
    },
    subtitle: {
      type: String,
      default: "ODEG",
    },
    linkText: {
      type: String,
      default: "→ Mehr",
    },
    linkUrl: {
      type: String,
      default: "#",
    },
  },
});
</script>

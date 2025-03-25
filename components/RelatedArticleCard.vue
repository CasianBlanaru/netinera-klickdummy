<template>
  <article
    class="flex-1 self-stretch bg-neutral-100 -mb-0.5 p-4 pb-28 min-w-[300px] h-auto min-h-[200px] max-h-[200px]"
  >
    <div class="flex max-md:flex-col gap-5">
      <div class="max-md:ml-0 w-[33%] max-md:w-full">
        <div
          class="bg-orange-400 mb-4 w-36 h-[145px]"
          role="img"
          aria-label="Artikelbild"
        ></div>
      </div>
      <div class="ml-5 max-md:ml-0 w-[73%] max-md:w-full">
        <p class="mb-2 font-medium text-stone-900 text-base">ODEG</p>
        <h3 class="mb-2 font-bold text-stone-900 text-2xl">
          Im Osten unverzichtbar
        </h3>
        <a
          href="#"
          class="focus:outline-none focus:ring-2 focus:ring-stone-900 text-stone-900 text-lg hover:underline"
          >→ Mehr</a
        >
      </div>
      <div class="hidden ml-5 max-md:ml-0 w-[33%] max-md:w-full">
        <div
          class="top-5 left-[696px] absolute flex justify-center items-center self-stretch bg-orange-400 w-[647px] h-[352px]"
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

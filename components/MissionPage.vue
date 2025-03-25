<template>
  <main class="flex flex-col bg-white w-full min-h-[screen]">
    <!-- Hero Section -->
    <section
      class="relative bg-orange-400 w-full h-[720px]"
      aria-labelledby="mission-title"
    >
      <div
        class="bottom-0 left-2/4 absolute bg-white w-[896px] max-sm:w-[95%] max-md:w-[90%] h-48 -translate-x-2/4"
      >
        <div class="px-10 max-sm:px-5 py-6">
          <p class="text-stone-900 text-base leading-6 tracking-normal">
            UNSERE MISSION
          </p>
          <h1
            id="mission-title"
            class="mt-1 font-bold text-stone-900 max-sm:text-3xl max-md:text-3xl text-4xl leading-[60px] tracking-tighter"
          >
            Wir verbinden Menschen und Regionen.Tag für Tag.
          </h1>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="flex flex-col mx-auto px-4 max-sm:px-5 max-md:px-8 py-16 container">
      <!-- First Text Block -->
      <div
        class="mx-auto max-w-[500px] text-stone-900 text-base leading-6 tracking-normal"
      >
        <p>
          Mit einem Streckennetz von über XXXX Kilometern ((Netinera: bitte
          ergänzen, ggfs. andere Angaben, welche die Position 2 begründen
          können)) sind wir eines der größten Unternehmen im öffentlichen
          Personennahverkehr in Deutschland. Tag für Tag bringen unsere Züge
          Menschen zur Arbeit, Kinder in die Schule, Enkel zu den Großeltern und
          Ausflügler in die Natur. Mit unseren Streckennetzen verbinden wir
          ländliche Regionen mit den Städten – und die Städte mit der sie
          umgebenden Natur. Unsere Züge fahren bis in die letzten Winkel des
          Landes. Und sie halten auch dort, wo Fernzüge meist mit
          Hochgeschwindigkeit durchrauschen.
        </p>
      </div>

      <!-- Slider Section -->
      <div class="py-16">
        <ImageSlider />
      </div>

      <!-- Second Text Block -->
      <div
        class="mx-auto mt-16 max-w-[500px] text-stone-900 text-base leading-6 tracking-normal"
      >
        <p>
          Dem umweltbewußten Bürger bieten wir eine Alternative zum Auto. Für
          den Pendler bringen wir Entlastung vom morgendlichen Stau. Und für
          Menschen ohne Auto sind wir oft die einzige Möglichkeit, ihren
          Heimatort bequem zu verlassen und pünktlich wieder nachhause zu
          kommen. Kurz: Wir bieten bezahlbare und nachhaltige Mobilität für alle
          – und sind damit auf lange Sicht unverzichtbar für Wirtschaft,
          Gesellschaft und Umwelt.
        </p>
      </div>

      <!-- Related Content Section -->
      <section class="mx-auto mt-20 container" aria-labelledby="related-content-title">
        <h2
          id="related-content-title"
          class="mb-10 font-bold text-stone-900 max-sm:text-3xl max-md:text-3xl text-4xl leading-[60px] tracking-tighter"
        >
          Das könnte Sie auch interessieren
        </h2>
        <div
          class="gap-8 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2"
        >
          <RelatedContentCard
            companyName="ODEG"
            title="Im Osten unverzichtbar"
            imageAlt="ODEG Illustration"
            :index="0"
          />
          <RelatedContentCard
            companyName="ODEG"
            title="Im Osten unverzichtbar"
            imageAlt="ODEG Illustration"
            :index="1"
          />
          <RelatedContentCard
            companyName="ODEG"
            title="Im Osten unverzichtbar"
            imageAlt="ODEG Illustration"
            :index="2"
          />
        </div>
      </section>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RelatedContentCard from "./RelatedContentCard.vue";

export default defineComponent({
  name: "MissionPage",
  components: {
    RelatedContentCard,
  },
});
</script>

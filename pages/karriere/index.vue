<template>
  <div>
    <SubpageHeader
      title="Der beste Weg zum neuen Job? Nehmen Sie den Zug!"
      subtitle="KARRIERE"
      titleId="karriere-title"
      imageAlt="Karriere bei NETINERA"
    />

    <div class="flex flex-col items-center mx-auto px-4 py-12 container">

      <div class="space-y-6 mb-18 max-w-[800px]">
        <p class="text-base">
          Die Mobilität der Zukunft braucht die Schiene. Und NETINERA braucht Menschen, die diese Zukunft mit Leidenschaft und Engagement gestalten wollen.
        </p>

        <p class="text-base">
          Kommen Sie als Mitarbeiter zu NETINERA. Werden Sie Teil einer faszinierenden Welt aus Stahl, Schweiß und Energie. Arbeiten Sie in einer Branche, die von Traditionen geprägt und von Innovationen vorangetrieben wird. Die Schiene ist aktueller denn je. Sie verbindet die Vergangenheit mit der Zukunft. Es könnte auch Ihre Zukunft sein.
        </p>
      </div>
      <ImageSlider />
      <div class="space-y-6 mt-6 max-w-[800px]">
        <h2 class="mt-12 mb-6 font-bold text-2xl">Spannende Jobs. Unterschiedliche Fachrichtungen</h2>

        <p class="text-base">
          Wir bieten spannende Jobs auf allen Qualifikationsweis und in den unterschiedlichsten Fachrichtungen. Für Auszubildende, Trainees, duale Studenten oder Hochschulabsolventen. Für Ingenieure ebenso wie für Betriebswirtschaftler. Vom Stellwerkmechaniker über den Gleisbauer bis hin zum Fahrtdienstleiter. Auch für Studienabbrecher und Quereinsteiger ist bei uns der Zug noch lange nicht abgefahren. Er fährt – an unterschiedlichen Standorten – täglich Richtung Zukunft.
        </p>

        <p class="text-base">
          Nur einsteigen müssen Sie selbst. Mögliche Reiserouten und freie Plätze finden Sie hier:
        </p>

        <a 
          href="#"
          class="inline-block bg-gray-200 hover:bg-gray-300 mt-6 px-6 py-3 transition-colors"
        >
          → Netinera Karriereportal
        </a>
      </div>

      <div class="mt-20">
        <h2 class="mb-8 font-bold text-3xl">Das könnte Sie auch interessieren</h2>
        <div class="gap-6 grid grid-cols-1 md:grid-cols-3">
          <RelatedContentCard
            v-for="(i, index) in 3"
            :key="index"
            companyName="ODEG"
            title="Im Osten unverzichtbar"
            :index="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SubpageHeader from '~/components/SubpageHeader.vue'
import RelatedContentCard from '~/components/RelatedContentCard.vue'
</script>

<style scoped>
.container {
  max-width: 1280px;
}
</style> 
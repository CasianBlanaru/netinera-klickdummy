<template>
  <div>
    <SubpageHeader
      title="Verteilte Aufgaben, gebündelte Kraft"
      subtitle="ORGANISATION"
      titleId="organisation-title"
      imageAlt="Netinera Organisation Header"
    />

    <div class="flex flex-col items-center mx-auto px-4 py-12 container">
      <div class="space-y-6 max-w-[800px]">
        <p class="text-base">
          Als Eisenbahner wissen wir: Eine Schiene macht noch kein Gleis. Für eine erfolgreiche Fahrt in die Zukunft haben wir deshalb unser Unternehmen auf zwei unterschiedliche Kompetenzen gegründet: Wir verbinden das Know-how der Netinera-Unternehmensgruppe in den Niederlassungen Verwaltungssitzen mit der Erfahrung unserer Regionalgesellschaften. Und das Ergebnis kann sich sehen lassen: eine einzigartige Expertise im strategischen ebenso wie im operativen Bereich. Kein Wunder, dass wir bei Entwicklung und Umsetzung von Verkehrskonzepten in vielen Regionen Deutschlands bevorzugter Partner der Öffentlichen Hand sind.
        </p>

        <h2 class="mt-12 mb-6 font-bold text-2xl">Regional verwurzelt. Operativ unschlagbar</h2>

        <div class="bg-orange-400 mb-4 w-full h-[400px]" role="img" aria-label="Regional verwurzelt Illustration"></div>
        <p class="text-sm italic">Ich bin eine optionale Bildunterschrift</p>

        <p class="mt-8 text-base">
          Unsere Regionalgesellschaften arbeiten operativ unabhängig von der Holding. Ein Umstand, der sie verbindet ist ihr Bezug und der Bevölkerung. Sie sind lokal fest verwurzelt, und über Jahre tief hineingewachsen in den Alltag der Menschen und vertraut mit ihren Wünschen und Bedürfnissen. Zu Kommunalpolitik, Behörden und Dienstleistern vor Ort haben unsere Regionalgesellschaften beste Verbindungen. Wichtige Voraussetzungen, um den Fahrgästen passende Angebote zu machen und einen reibungslosen Fahrbetrieb zu organisieren.
        </p>

        <h2 class="mt-12 mb-6 font-bold text-2xl">Strategie. Synergie. Unterstützung</h2>

        <div class="bg-orange-400 mb-4 w-full h-[300px]" role="img" aria-label="Strategie und Synergie Illustration"></div>
        <p class="text-sm italic">Ich bin eine optionale Bildunterschrift</p>

        <p class="mt-8 text-base">
          Bei der Netinera-Holding laufen alle Stränge zusammen. Hier sind die rechtlichen, strategischen und betriebswirtschaftlichen Aufgaben angesiedelt, soweit sie die gesamte Gruppe betreffen. Die Holding repräsentiert die Gruppe in der Konzerngesellschaft und übernimmt gegenüber der Außenwelt zwischen den Regionalgesellschaften, realisiert Synergien und bündelt die Einkaufsmacht der Gruppe. Wenn Regionalgesellschaften an neuen Streckenausschreibungen teilnehmen, leistet die Holding wertvolle strategische Unterstützung.
        </p>

        <h2 class="mt-12 mb-6 font-bold text-2xl">Stark im Wettbewerb</h2>

        <p class="text-base">
          In den nächsten Jahren wollen wir unsere Position festigen und weiter ausbauen. Ziel ist eine Erweiterung unserer Verkehrsleistungen in allen Regionen Deutschlands. Wir werden uns dafür auch künftig in wettbewerblichen Vergaben von Verkehrsleistungen beteiligen. Unsere Chancen dafür stehen gut. Die kommunalen Aufgabenträger schätzen unsere Erfahrung und unseren innovativen Verkehrskonzepten. Den Fahrgästen bieten wir Komfort und Pünktlichkeit. Und den öffentlichen Aufgabenträgern einen attraktiven Partner.
        </p>

        <div class="bg-orange-400 mt-8 mb-4 w-full h-[400px]" role="img" aria-label="Wettbewerb Illustration"></div>
        <p class="text-sm italic">Ich bin ein Bild</p>
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
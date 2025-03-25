<template>
  <article class="odeg-article">
    <!-- Hero Section -->
    <header
      class="relative flex flex-row shrink-0 gap-5 justify-between items-start px-5 py-5 mt-5 max-w-[375px] min-h-[372px] max-sm:min-h-[133px]"
    >
      <div
        class="absolute top-8 left-14 shrink-0 h-[19.5px] w-[500px] max-sm:top-0 max-sm:mx-auto max-sm:left-[18px] max-sm:max-w-[500px]"
      >
        <h1 class="sr-only">Im Osten Deutschlands unverzichtbar</h1>
      </div>
      <h2
        class="absolute left-14 text-4xl font-bold tracking-tighter h-[120px] leading-[60px] text-stone-900 top-[52px] w-[500px] max-md:text-3xl max-sm:text-3xl max-sm:h-[97px] max-sm:left-[18px] max-sm:w-[316px]"
      >
        Im Osten Deutschlands unverzichtbar
      </h2>
      <div
        class="absolute top-5 self-stretch bg-orange-400 h-[352px] left-[696px] w-[647px]"
        role="img"
        aria-label="Bild der ODEG"
      >
        Ich bin ein Bild
      </div>
    </header>

    <!-- Main Content Section -->
    <main class="flex flex-col items-start w-full bg-white">
      <section
        class="flex flex-col px-10 py-20 w-full max-md:px-6 max-md:py-12 max-sm:px-4 max-sm:py-8"
      >
        <p
          class="mx-auto mb-16 w-full text-base font-medium tracking-normal leading-6 max-w-[500px] text-stone-900"
        >
          Ich bin eine optionale Bildunterschrift
        </p>

        <p
          class="mx-auto mb-10 text-base leading-6 max-w-[500px] text-stone-900"
        >
          Die Ostdeutsche Eisenbahn GmbH (ODEG) ist die größte private
          Eisenbahngesellschaft im Osten Deutschlands. Ohne die ODEG geht nichts
          im ostdeutschen Regionalverkehr. Mit 975 Mitarbeiter/-innen betreibt
          die ODEG Strecken in den fünf Bundesländern Mecklenburg-Vorpommern,
          Brandenburg, Berlin, Sachsen-Anhalt und Sachsen. 86 Züge auf insgesamt
          17 Linien kommen dabei zum Einsatz. Darunter ist auch der brandneue,
          doppelstöckige Siemens Desiro HC, der als Regional-Express für die
          Rush-Hour eingesetzt wird. Bis zu 800 Fahrgäste und 49 Fahrräder
          finden in dem Zug Platz. Mit Features wie kostenlosem Internetzugang,
          21&quot; Bildschirmen und Bordservice ist er das Flaggschiff der
          ODEG-Flotte.
        </p>

        <section class="flex flex-col mb-10">
          <h3
            class="mx-auto mb-4 text-2xl font-bold leading-9 max-w-[500px] text-stone-900"
          >
            Mit Live-Musik an die Ostsee
          </h3>
          <p class="mx-auto text-base leading-6 max-w-[500px] text-stone-900">
            Mit „Kultur im Zug&quot; geht es auf der Linie RE9 mit Live-Musik an
            die Ostseeküste. An jedem vierten Sonntag im Monat gibt es im
            Mehrzweckabteil eines Desiro ML ein vielseitiges, maritimes
            Musikprogramm – plattdeutsch ebenso wie international. Eine
            sympathische Zugabe für die Fahrgäste der ODEG. Die Resonanz ist
            groß. Der Eintritt ist frei. Ein Fahrschein genügt für die
            musikalische Reise.
          </p>
        </section>

        <section class="mx-auto mb-10 max-w-[500px]">
          <h3 class="mb-4 text-2xl font-bold leading-9 text-stone-900">
            Eigene Wartungsgesellschaft
          </h3>
          <p class="text-base leading-6 text-stone-900">
            Eine eigene Instandhaltungsgesellschaft (ODIG) kümmert sich an den
            Standorten Parchim, Eberswalde und Görlitzan um Wartung, Erhaltung
            und Pflege der gesamten Fahrzeugflotte. Diese Leistungen erbringt
            die ODIG auch für Dritte. Unter anderem die Deutsche Bahn freut sich
            über die hohe Wartungsqualität und lässt ihre Züge von der ODIG
            gerne warten.
          </p>
        </section>

        <section class="flex flex-col mb-10">
          <h3 class="mx-auto mb-4 text-2xl font-bold leading-9 text-stone-900">
            Daten &amp; Fakten:
          </h3>
          <ul
            class="flex flex-col justify-center items-center self-center w-auto text-base leading-6 max-w-[500px] text-stone-900"
          >
            <li class="mr-auto">Gründung 2002</li>
            <li class="mr-auto">317 Mio Euro Umsatz</li>
            <li class="mr-auto">1790 km langes Streckennetz</li>
            <li class="mr-auto">202 Mio. Zugkilometer im Jahr</li>
            <li class="mr-auto">86 Züge</li>
            <li class="mr-auto">251 Stationen im Netz</li>
            <li class="mr-auto">17 Linien</li>
            <li class="mr-auto">975 MitarbeiterInnen</li>
            <li class="mr-auto">33 Mio. Fahrgäste im Jahr</li>
          </ul>
        </section>

        <section class="flex flex-col mx-auto">
          <h3
            class="mx-auto mb-4 text-2xl font-bold leading-9 max-w-[500px] text-stone-900"
          >
            Geschäftsführung
          </h3>
          <p class="text-base leading-6 max-w-[500px] text-stone-900">
            <span>Stefan Neubert</span><br /><span>Lars Gehrke</span>
          </p>
        </section>
      </section>

      <!-- Related Content Section -->
      <section
        class="px-10 py-20 w-full max-md:px-6 max-md:py-12 max-sm:px-4 max-sm:py-8"
      >
        <h2
          class="mb-12 text-4xl font-bold tracking-tighter leading-[60px] text-stone-900 max-md:text-3xl max-sm:text-3xl"
        >
          Das könnte Sie auch interessieren
        </h2>
        <div class="flex gap-8 max-md:flex-wrap max-sm:gap-4">
          <RelatedArticleCard />
          <RelatedArticleCard />
          <RelatedArticleCard />
        </div>
      </section>
    </main>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RelatedArticleCard from "./RelatedArticleCard.vue";

export default defineComponent({
  name: "OdegArticle",
  components: {
    RelatedArticleCard,
  },
});
</script>

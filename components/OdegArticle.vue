<template>
  <article class="overflow-hidden odeg-article">
    <!-- Hero Section -->
    <header
      class="relative flex flex-row justify-between items-start gap-5 mt-5 px-5 py-5 max-w-[375px] min-h-[372px] max-sm:min-h-[133px] shrink-0"
    >
      <div
        class="top-8 max-sm:top-0 left-14 max-sm:left-[18px] absolute max-sm:mx-auto w-[500px] max-sm:max-w-[500px] h-[19.5px] shrink-0"
      >
        <h1 class="sr-only">Im Osten Deutschlands unverzichtbar</h1>
      </div>
      <h2
        class="top-[52px] left-14 max-sm:left-[18px] absolute w-[500px] max-sm:w-[316px] h-[120px] max-sm:h-[97px] font-bold text-stone-900 max-sm:text-3xl max-md:text-3xl text-4xl leading-[60px] tracking-tighter"
      >
        Im Osten Deutschlands unverzichtbar
      </h2>
      <div
        class="top-5 left-[696px] absolute flex justify-center items-center self-stretch bg-orange-400 w-[647px] h-[352px]"
        role="img"
        aria-label="Bild der ODEG"
      >
        Ich bin ein Bild
      </div>
    </header>

    <!-- Main Content Section -->
    <main class="flex flex-col items-start bg-white w-full">
      <section
        class="flex flex-col px-10 max-sm:px-4 max-md:px-6 py-20 max-sm:py-8 max-md:py-12 w-full"
      >
        <p
          class="mx-auto mb-16 w-full max-w-[400px] font-medium text-stone-900 text-base leading-6 tracking-normal"
        >
          Ich bin eine optionale Bildunterschrift
        </p>

        <p
          class="mx-auto mb-10 max-w-[500px] text-stone-900 text-base leading-6"
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
            class="mx-auto mb-4 max-w-[500px] font-bold text-stone-900 text-2xl leading-9"
          >
            Mit Live-Musik an die Ostsee
          </h3>
          <p class="mx-auto max-w-[500px] text-stone-900 text-base leading-6">
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
          <h3 class="mb-4 font-bold text-stone-900 text-2xl leading-9">
            Eigene Wartungsgesellschaft
          </h3>
          <p class="text-stone-900 text-base leading-6">
            Eine eigene Instandhaltungsgesellschaft (ODIG) kümmert sich an den
            Standorten Parchim, Eberswalde und Görlitzan um Wartung, Erhaltung
            und Pflege der gesamten Fahrzeugflotte. Diese Leistungen erbringt
            die ODIG auch für Dritte. Unter anderem die Deutsche Bahn freut sich
            über die hohe Wartungsqualität und lässt ihre Züge von der ODIG
            gerne warten.
          </p>
        </section>

        <section class="flex flex-col mb-10">
          <h3 class="mx-auto mb-4 font-bold text-stone-900 text-2xl leading-9">
            Daten &amp; Fakten:
          </h3>
          <ul
            class="flex flex-col justify-center items-center self-center w-auto max-w-[500px] text-stone-900 text-base leading-6"
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
            class="mx-auto mb-4 max-w-[500px] font-bold text-stone-900 text-2xl leading-9"
          >
            Geschäftsführung
          </h3>
          <p class="max-w-[500px] text-stone-900 text-base leading-6">
            <span>Stefan Neubert</span><br /><span>Lars Gehrke</span>
          </p>
        </section>
      </section>

      <!-- Related Content Section -->
      <section
        class="px-10 max-sm:px-4 max-md:px-6 py-20 max-sm:py-8 max-md:py-12 w-full"
      >
        <h2
          class="mb-12 font-bold text-stone-900 max-sm:text-3xl max-md:text-3xl text-4xl leading-[60px] tracking-tighter"
        >
          Das könnte Sie auch interessieren
        </h2>
        <div class="flex max-md:flex-wrap gap-8 max-sm:gap-4">
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

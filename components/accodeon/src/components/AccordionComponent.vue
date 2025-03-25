<template>
  <div
    class="p-5 mx-auto my-0 max-w-[596px] text-stone-900 max-md:p-4 max-md:max-w-[991px] max-sm:p-2.5 max-sm:max-w-screen-sm"
  >
    <div class="mb-5 text-base leading-6 max-sm:text-sm">
      Der NETINERA-Konzern ist eines der größten privaten Verkehrsunternehmen in
      Deutschland und ein starker Wettbewerber im ÖPNV-Markt. Dabei ist die
      Wahrnehmung des Konzerns maßgeblich durch die regionalen
      Tochtergesellschaften und Marken geprägt.
    </div>
    <div class="mb-5 text-base leading-6 max-sm:text-sm">
      Um am Markt weiterhin erfolgreich zu sein und Wachstum zu ermöglichen, hat
      der Konzern eine gemeinsame Identifikationsgrundlage, das Konzernleitbild,
      erarbeitet. Dabei stehen wirtschaftlich erfolgreiches Handeln und ein
      positives Arbeitsklima im Mittelpunkt.
    </div>
    <div class="mb-5 text-base leading-6 max-sm:text-sm">
      Die Broschüre finden Sie hier als PDF zum Download:
    </div>

    <!-- Accordion Items -->
    <div class="accordion">
      <div class="accordion-item">
        <button
          @click="toggleAccordion(0)"
          @keydown="handleKeyDown($event, 0)"
          class="p-5 w-full mx-0 my-2.5 mb-4 cursor-pointer bg-zinc-100 duration-[0.3s] transition-[background-color] max-sm:p-4 text-left flex justify-between items-center"
          :class="{ 'bg-zinc-200': activeAccordion === 0 }"
          :aria-expanded="activeAccordion === 0"
          :aria-controls="`accordion-content-0`"
          id="accordion-header-0"
        >
          <span>NETINERA KONZERNLEITBILD</span>
          <span
            class="transform transition-transform duration-300"
            :class="{ 'rotate-180': activeAccordion === 0 }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
        <div
          v-show="activeAccordion === 0"
          id="accordion-content-0"
          role="region"
          aria-labelledby="accordion-header-0"
          class="p-5 bg-white mb-4 border border-zinc-200 rounded-b"
        >
          <p class="mb-3 text-base leading-6 max-sm:text-sm">
            Das NETINERA Konzernleitbild beschreibt unsere gemeinsame Vision und
            Mission. Es definiert unsere Werte und Grundsätze, die unser
            tägliches Handeln leiten.
          </p>
          <p class="text-base leading-6 max-sm:text-sm">
            Laden Sie die vollständige Broschüre herunter, um mehr über unsere
            Unternehmensphilosophie zu erfahren.
          </p>
        </div>
      </div>

      <div>
        <div
          class="mx-0 mt-10 mb-5 text-2xl font-bold tracking-tight leading-9 max-md:text-2xl max-sm:text-xl"
        >
          Compliance
        </div>
        <div class="mb-5 text-base leading-6 max-sm:text-sm">
          Compliance bedeutet die Einhaltung von Gesetzen, unternehmensinternen
          Richtlinien und ethischen Prinzipien. NETINERA hat ein umfassendes
          Compliance-System verankert, das sich auf die drei Säulen der
          Prävention, Aufdeckung und Reaktion stützt. Primäres Ziel ist die
          Einhaltung von Regelungen und Prinzipien bei der Durchführung des
          Unternehmensgeschäfts durch alle Beteiligten, insbesondere durch das
          Management, die Mitarbeiter und die Geschäftspartner.
        </div>
        <div class="mb-5 text-base leading-6 max-sm:text-sm">
          Um dies sicherzustellen und mögliche Verstöße aufzudecken, hat
          NETINERA ein Beschwerdeverfahren eingerichtet. Hierdurch können
          Beschwerden und Hinweise zu möglichen Compliance-Verstößen übermittelt
          werden, sodass im Falle eines Fehlverhaltens angemessene
          Abhilfemaßnahmen ergriffen werden können. Damit übernimmt NETINERA
          auch ihre Verantwortung für Mensch und Umwelt aus dem
          Lieferkettensorgfaltspflichtengesetz sowie zum Schutz von
          Hinweisgebern.
        </div>
      </div>

      <div class="accordion-item">
        <button
          @click="toggleAccordion(1)"
          @keydown="handleKeyDown($event, 1)"
          class="p-5 w-full mx-0 my-2.5 mb-4 cursor-pointer bg-zinc-100 duration-[0.3s] transition-[background-color] max-sm:p-4 text-left flex justify-between items-center"
          :class="{ 'bg-zinc-200': activeAccordion === 1 }"
          :aria-expanded="activeAccordion === 1"
          :aria-controls="`accordion-content-1`"
          id="accordion-header-1"
        >
          <span>NETINERA ETHIKKODEX</span>
          <span
            class="transform transition-transform duration-300"
            :class="{ 'rotate-180': activeAccordion === 1 }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
        <div
          v-show="activeAccordion === 1"
          id="accordion-content-1"
          role="region"
          aria-labelledby="accordion-header-1"
          class="p-5 bg-white mb-4 border border-zinc-200 rounded-b"
        >
          <p class="mb-3 text-base leading-6 max-sm:text-sm">
            Der NETINERA Ethikkodex definiert die ethischen Standards und
            Verhaltensregeln, die für alle Mitarbeiter und Geschäftspartner
            gelten.
          </p>
          <p class="text-base leading-6 max-sm:text-sm">
            Er umfasst Themen wie Integrität, Respekt, Fairness und
            Verantwortung in allen Geschäftsbeziehungen.
          </p>
        </div>
      </div>

      <div class="accordion-item">
        <button
          @click="toggleAccordion(2)"
          @keydown="handleKeyDown($event, 2)"
          class="p-5 w-full mx-0 my-2.5 mb-4 cursor-pointer bg-zinc-100 duration-[0.3s] transition-[background-color] max-sm:p-4 text-left flex justify-between items-center"
          :class="{ 'bg-zinc-200': activeAccordion === 2 }"
          :aria-expanded="activeAccordion === 2"
          :aria-controls="`accordion-content-2`"
          id="accordion-header-2"
        >
          <span>NETINERA Grundsatzerklärung zur Menschenrechtsstrategie</span>
          <span
            class="transform transition-transform duration-300"
            :class="{ 'rotate-180': activeAccordion === 2 }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </span>
        </button>
        <div
          v-show="activeAccordion === 2"
          id="accordion-content-2"
          role="region"
          aria-labelledby="accordion-header-2"
          class="p-5 bg-white mb-4 border border-zinc-200 rounded-b"
        >
          <p class="mb-3 text-base leading-6 max-sm:text-sm">
            Die NETINERA Grundsatzerklärung zur Menschenrechtsstrategie
            beschreibt unser Engagement für die Einhaltung und Förderung der
            Menschenrechte in allen Geschäftsbereichen.
          </p>
          <p class="text-base leading-6 max-sm:text-sm">
            Sie umfasst unsere Verpflichtungen im Rahmen des
            Lieferkettensorgfaltspflichtengesetzes und unsere Maßnahmen zum
            Schutz der Menschenrechte in unserer gesamten Wertschöpfungskette.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "AccordionComponent",
  setup() {
    const activeAccordion = ref<number | null>(null);

    const toggleAccordion = (index: number) => {
      if (activeAccordion.value === index) {
        activeAccordion.value = null;
      } else {
        activeAccordion.value = index;
      }
    };

    const handleKeyDown = (event: KeyboardEvent, index: number) => {
      // Handle keyboard navigation for accessibility
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleAccordion(index);
      }
    };

    return {
      activeAccordion,
      toggleAccordion,
      handleKeyDown,
    };
  },
});
</script>

<style scoped>
.accordion-item button:hover {
  background-color: rgb(228, 228, 231);
}

.accordion-item button:focus {
  outline: 2px solid #4f46e5;
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .accordion-item button,
  .transform {
    transition: none;
  }
}
</style>

<template>
  <div
    v-motion
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }"
    class="mx-auto my-0 p-5 max-sm:p-2.5 max-md:p-4 max-w-[596px] max-sm:max-w-screen-sm max-md:max-w-[991px] text-stone-900"
  >
    <div 
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200, ease: 'easeOut' } }"
      class="mb-5 max-sm:text-sm text-base leading-6"
    >
      Der NETINERA-Konzern ist eines der größten privaten Verkehrsunternehmen in
      Deutschland und ein starker Wettbewerber im ÖPNV-Markt. Dabei ist die
      Wahrnehmung des Konzerns maßgeblich durch die regionalen
      Tochtergesellschaften und Marken geprägt.
    </div>
    <div 
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 400, ease: 'easeOut' } }"
      class="mb-5 max-sm:text-sm text-base leading-6"
    >
      Um am Markt weiterhin erfolgreich zu sein und Wachstum zu ermöglichen, hat
      der Konzern eine gemeinsame Identifikationsgrundlage, das Konzernleitbild,
      erarbeitet. Dabei stehen wirtschaftlich erfolgreiches Handeln und ein
      positives Arbeitsklima im Mittelpunkt.
    </div>
    <div 
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 600, ease: 'easeOut' } }"
      class="mb-5 max-sm:text-sm text-base leading-6"
    >
      Die Broschüre finden Sie hier als PDF zum Download:
    </div>

    <!-- Accordion Items -->
    <div class="accordion">
      <div 
        v-for="(item, index) in 3" 
        :key="index"
        class="accordion-item"
        v-motion
        :initial="{ opacity: 0, x: -100 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 500, delay: 800 + (index * 200), ease: 'easeOut' } }"
      >
        <button
          @click="toggleAccordion(index)"
          @keydown="handleKeyDown($event, index)"
          class="flex justify-between items-center bg-zinc-100 mx-0 my-2.5 mb-4 p-5 max-sm:p-4 w-full text-left transition-[background-color] duration-[0.3s] cursor-pointer"
          :class="{ 'bg-zinc-200': activeAccordion === index }"
          :aria-expanded="activeAccordion === index"
          :aria-controls="`accordion-content-${index}`"
          id="accordion-header-${index}"
        >
          <span>NETINERA KONZERNLEITBILD</span>
          <span
            class="transition-transform duration-300 transform"
            :class="{ 'rotate-180': activeAccordion === index }"
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
          v-show="activeAccordion === index"
          id="accordion-content-${index}"
          role="region"
          aria-labelledby="accordion-header-${index}"
          class="bg-white mb-4 p-5 border border-zinc-200 rounded-b"
        >
          <p class="mb-3 max-sm:text-sm text-base leading-6">
            Das NETINERA Konzernleitbild beschreibt unsere gemeinsame Vision und
            Mission. Es definiert unsere Werte und Grundsätze, die unser
            tägliches Handeln leiten.
          </p>
          <p class="max-sm:text-sm text-base leading-6">
            Laden Sie die vollständige Broschüre herunter, um mehr über unsere
            Unternehmensphilosophie zu erfahren.
          </p>
        </div>
      </div>

      <div>
        <div
          class="mx-0 mt-10 mb-5 font-bold max-sm:text-xl text-2xl max-md:text-2xl leading-9 tracking-tight"
        >
          Compliance
        </div>
        <div class="mb-5 max-sm:text-sm text-base leading-6">
          Compliance bedeutet die Einhaltung von Gesetzen, unternehmensinternen
          Richtlinien und ethischen Prinzipien. NETINERA hat ein umfassendes
          Compliance-System verankert, das sich auf die drei Säulen der
          Prävention, Aufdeckung und Reaktion stützt. Primäres Ziel ist die
          Einhaltung von Regelungen und Prinzipien bei der Durchführung des
          Unternehmensgeschäfts durch alle Beteiligten, insbesondere durch das
          Management, die Mitarbeiter und die Geschäftspartner.
        </div>
        <div class="mb-5 max-sm:text-sm text-base leading-6">
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
          class="flex justify-between items-center bg-zinc-100 mx-0 my-2.5 mb-4 p-5 max-sm:p-4 w-full text-left transition-[background-color] duration-[0.3s] cursor-pointer"
          :class="{ 'bg-zinc-200': activeAccordion === 1 }"
          :aria-expanded="activeAccordion === 1"
          :aria-controls="`accordion-content-1`"
          id="accordion-header-1"
        >
          <span>NETINERA ETHIKKODEX</span>
          <span
            class="transition-transform duration-300 transform"
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
          class="bg-white mb-4 p-5 border border-zinc-200 rounded-b"
        >
          <p class="mb-3 max-sm:text-sm text-base leading-6">
            Der NETINERA Ethikkodex definiert die ethischen Standards und
            Verhaltensregeln, die für alle Mitarbeiter und Geschäftspartner
            gelten.
          </p>
          <p class="max-sm:text-sm text-base leading-6">
            Er umfasst Themen wie Integrität, Respekt, Fairness und
            Verantwortung in allen Geschäftsbeziehungen.
          </p>
        </div>
      </div>

      <div class="accordion-item">
        <button
          @click="toggleAccordion(2)"
          @keydown="handleKeyDown($event, 2)"
          class="flex justify-between items-center bg-zinc-100 mx-0 my-2.5 mb-4 p-5 max-sm:p-4 w-full text-left transition-[background-color] duration-[0.3s] cursor-pointer"
          :class="{ 'bg-zinc-200': activeAccordion === 2 }"
          :aria-expanded="activeAccordion === 2"
          :aria-controls="`accordion-content-2`"
          id="accordion-header-2"
        >
          <span>NETINERA Grundsatzerklärung zur Menschenrechtsstrategie</span>
          <span
            class="transition-transform duration-300 transform"
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
          class="bg-white mb-4 p-5 border border-zinc-200 rounded-b"
        >
          <p class="mb-3 max-sm:text-sm text-base leading-6">
            Die NETINERA Grundsatzerklärung zur Menschenrechtsstrategie
            beschreibt unser Engagement für die Einhaltung und Förderung der
            Menschenrechte in allen Geschäftsbereichen.
          </p>
          <p class="max-sm:text-sm text-base leading-6">
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
import { useMotion } from "@vueuse/motion";

export default defineComponent({
  name: "AccordionComponent",
  setup() {
    const activeAccordion = ref<number | null>(null);
    const { apply, leave } = useMotion({
      initial: { opacity: 0, y: 100 },
      enter: { opacity: 1, y: 0, transition: { duration: 800, ease: 'easeOut' } }
    });

    const toggleAccordion = (index: number) => {
      if (activeAccordion.value === index) {
        activeAccordion.value = null;
      } else {
        activeAccordion.value = index;
      }
    };

    const handleKeyDown = (event: KeyboardEvent, index: number) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleAccordion(index);
      }
    };

    return {
      activeAccordion,
      toggleAccordion,
      handleKeyDown,
      apply,
      leave,
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

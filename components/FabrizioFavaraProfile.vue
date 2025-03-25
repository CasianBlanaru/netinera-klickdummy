<template>
      <div class="flex flex-col items-center bg-white w-full min-h-screen">
    <!-- SubpageHeader -->
    <SubpageHeader
      title="MANAGEMENT"
      subtitle="Die führenden Köpfen"
      titleId="unique-id"
      imageAlt="Beschreibung des Bildes"
    />
    <div class="p-4">
    <article class="mx-auto my-0 p-5 max-sm:p-2.5 max-md:p-4 max-w-[1012px]">
    <!-- Bio Section -->
    <section class="mx-auto my-0 max-w-[578px]">
      <header>
        <h1 class="mb-5 font-bold text-stone-900 max-sm:text-xl text-2xl">
          Fabrizio Favara
        </h1>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>
      <p
        class="mb-5 text-stone-900 max-sm:text-sm text-base leading-6 tracking-normal"
      >
        Fabrizio Favara ist der CEO von NETINERA. Der gelernte
        Wirtschaftswissenschaftler ist der Schiene seit vielen Jahren verbunden.
        Nach Stationen als CEO von Iryo, dem ersten privaten spanischen
        Hochgeschwindigkeits-Unternehmen, wurde er Chef-Stratege von FS, dem
        italienischen Mutter-Konzern von NETINERA Deutschland. Im Jahr 20??
        übernahm Fabrizio Favara den Chefposten bei NETINERA Deutschland. Sein
        Ziele: Eine Verdoppelung des Umsatzes in den nächsten Jahren. Dafür soll
        das Angebot zu einem Multi-Business-Portfolio erweitert werden – mit
        Langstreckendestinationen, mehr regionalen Transporten und einem Ausbau
        des Geschäftes mit mobilitätseingeschränkten Personen.
      </p>
      <p
        class="mb-5 text-stone-900 max-sm:text-sm text-base leading-6 tracking-normal"
      >
        Fabrizio Favara ist verheiratet, er lebt mit seinen zwei Kindern und
        einer Katze in Rom. Er liebt das Surfen und das Skifahren, und – wenn
        beides nicht möglich ist – spielt er gerne Schach.
      </p>
    </section>

    <!-- Quote Section -->
    <ProfileQuote />
  </article>
    <h1 class="mb-6 font-bold text-2xl">Testimonial Example</h1>

    <Testimonial
      quote='"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "'
      name="Vorname Name"
      role="Funktion"
    />

    <!-- Example with custom content -->
    <Testimonial
      quote='"The product exceeded my expectations. The team was responsive and delivered exactly what we needed."'
      name="Jane Doe"
      role="Marketing Director"
      class="mt-10"
    />
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProfileQuote from "./ProfileQuote.vue";

export default defineComponent({
  name: "FabrizioFavaraProfile",
  components: {
    ProfileQuote,
  },
});
</script>

<style scoped>
</style>

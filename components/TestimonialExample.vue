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
<script setup lang="ts">
import Testimonial from "./Testimonial.vue";
</script>

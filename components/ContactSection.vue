<template>
  <section aria-labelledby="contact-heading" class="flex gap-10">
    <div class="flex max-md:flex-col gap-24 max-md:gap-10">
      <ContactCard
        name="Robert von der Heide"
        position="Leiter Kommunikation"
        phone="+49 (0)151 40645704"
        email="kommunikation@netinera.de"
      />
      <ContactCard
        name="Nina Massek"
        position="Referentin Kommunikation"
        phone="+49 151 40645749"
        email="kommunikation@netinera.de"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactCard from "./ContactCard.vue";

export default defineComponent({
  name: "ContactSection",
  components: {
    ContactCard,
  },
});
</script>

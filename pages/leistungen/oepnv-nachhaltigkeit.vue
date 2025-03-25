<template>
  <div>
    <SubpageHeader
      title="ÖPNV & Nachhaltigkeit"
      subtitle="Leistungen"
      titleId="oepnv-nachhaltigkeit-title"
      imageAlt="Netinera ÖPNV und Nachhaltigkeit Illustration"
    />
    <div class="mx-auto px-4 py-12 container">
      <div class="max-w-none prose">
        <p class="mb-6 text-lg">
          Nachhaltiger ÖPNV ist der Schlüssel zur Mobilitätswende. Wir setzen auf 
          umweltfreundliche Technologien und innovative Konzepte für die Zukunft.
        </p>
        
        <SustainabilityArticle class="mb-12" />
        
        <SustainabilitySection class="mb-12" />
        
        <TestimonialExample class="mb-12" />
        
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 mb-12">
          <RelatedContentCard
            companyName="NETINERA"
            title="Technik & Innovation"
            imageUrl="/images/technik-innovation.jpg"
          />
          <RelatedContentCard
            companyName="NETINERA"
            title="Instandhaltung & Service"
            imageUrl="/images/instandhaltung-service.jpg"
          />
        </div>

        <ContactSection />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SubpageHeader from '~/components/SubpageHeader.vue';
import SustainabilityArticle from '~/components/SustainabilityArticle.vue';
import SustainabilitySection from '~/components/SustainabilitySection.vue';
import TestimonialExample from '~/components/TestimonialExample.vue';
import RelatedContentCard from '~/components/RelatedContentCard.vue';
import ContactSection from '~/components/ContactSection.vue';
</script> 
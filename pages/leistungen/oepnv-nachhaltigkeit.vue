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
        
        <SustainabilityArticle
          title="Nachhaltige Mobilität"
          content="Wir setzen auf innovative Technologien und umweltfreundliche Lösungen, um den ÖPNV nachhaltiger zu gestalten. Unsere Maßnahmen reichen von der Elektrifizierung unserer Flotte bis hin zu energieeffizienten Betriebsabläufen."
          :reverse="false"
          caption="Unsere Nachhaltigkeitsstrategie"
        />
        
        <SustainabilityArticle
          title="Unsere Nachhaltigkeitsziele"
          content="Wir arbeiten kontinuierlich daran, unseren ökologischen Fußabdruck zu reduzieren und setzen dabei auf modernste Technologien und innovative Lösungen."
          :reverse="true"
        />
        
        <Testimonial
          quote="Mit unseren nachhaltigen Mobilitätslösungen tragen wir aktiv zum Klimaschutz bei."
          name="Dr. Marcel Winter"
          role="Leiter Nachhaltigkeit"
        />
        
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 mb-12">
          <RelatedContentCard
            companyName="NETINERA"
            title="Technik & Innovation"
          />
          <RelatedContentCard
            companyName="NETINERA"
            title="Instandhaltung & Service"
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
import Testimonial from '~/components/Testimonial.vue';
import RelatedContentCard from '~/components/RelatedContentCard.vue';
import ContactSection from '~/components/ContactSection.vue';
</script> 
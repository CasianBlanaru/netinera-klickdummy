<template>
  <div>
    <SubpageHeader
      title="Instandhaltung & Service"
      subtitle="Leistungen"
      titleId="instandhaltung-service-title"
      imageAlt="Netinera Instandhaltung und Service Illustration"
    />
    <div class="mx-auto px-4 py-12 container">
      <div class="max-w-none prose">
        <p class="mb-6 text-lg">
          Qualität und Zuverlässigkeit stehen bei uns an erster Stelle. Mit unserem 
          professionellen Service und regelmäßiger Instandhaltung gewährleisten wir 
          höchste Standards.
        </p>
        
        <ImageSlider class="mb-12" />
        
        <SustainabilityArticle
          title="Professionelle Instandhaltung"
          content="Unsere erfahrenen Teams sorgen für die regelmäßige Wartung und Instandhaltung unserer Fahrzeuge. Mit modernster Technik und umfassendem Know-how gewährleisten wir höchste Qualitätsstandards."
          :reverse="false"
        />
        
        <SustainabilityArticle
          title="Service & Kundenorientierung"
          content="Unser Service-Team steht Ihnen jederzeit zur Verfügung. Wir bieten umfassende Unterstützung und schnelle Lösungen für alle Anliegen rund um unsere Dienstleistungen."
          :reverse="true"
        />
        
        <Testimonial
          quote="Regelmäßige Wartung und professioneller Service sind der Schlüssel zu zuverlässigem Schienenverkehr."
          name="Andreas Weber"
          role="Leiter Instandhaltung"
        />
        
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 mb-12">
          <RelatedContentCard
            companyName="NETINERA"
            title="Technik & Innovation"
          />
          <RelatedContentCard
            companyName="NETINERA"
            title="ÖPNV & Nachhaltigkeit"
          />
        </div>

        <ContactSection />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SubpageHeader from '~/components/SubpageHeader.vue';
import ImageSlider from '~/components/ImageSlider.vue';
import SustainabilityArticle from '~/components/SustainabilityArticle.vue';
import Testimonial from '~/components/Testimonial.vue';
import RelatedContentCard from '~/components/RelatedContentCard.vue';
import ContactSection from '~/components/ContactSection.vue';
</script> 
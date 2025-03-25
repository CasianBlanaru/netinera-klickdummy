<template>
  <div>
    <SubpageHeader
      title="Technik & Innovation"
      subtitle="Leistungen"
      titleId="technik-innovation-title"
      imageAlt="Netinera Technik und Innovation Illustration"
    />
    <div class="mx-auto px-4 py-12 container">
      <div class="max-w-none prose">
        <p class="mb-6 text-lg">
          Innovation treibt uns voran. Mit modernster Technik und zukunftsweisenden 
          Lösungen gestalten wir die Mobilität von morgen.
        </p>
        
        <ImageSlider class="mb-12" />
        
        <SustainabilityArticle
          title="Innovative Technologien"
          content="Wir investieren kontinuierlich in modernste Technologien und digitale Lösungen. Von der Elektrifizierung unserer Flotte bis hin zu intelligenten Verkehrssystemen - wir gestalten die Zukunft der Mobilität."
          :reverse="false"
        />
        
        <BusinessModelPillars class="my-12" />
        
        <Testimonial
          quote="Innovation ist der Schlüssel zu nachhaltiger und effizienter Mobilität."
          name="Thomas Schmidt"
          role="Leiter Technologie & Innovation"
        />
        
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 mb-12">
          <RelatedContentCard
            companyName="NETINERA"
            title="ÖPNV & Nachhaltigkeit"
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
import ImageSlider from '~/components/ImageSlider.vue';
import SustainabilityArticle from '~/components/SustainabilityArticle.vue';
import BusinessModelPillars from '~/components/BusinessModelPillars.vue';
import Testimonial from '~/components/Testimonial.vue';
import RelatedContentCard from '~/components/RelatedContentCard.vue';
import ContactSection from '~/components/ContactSection.vue';
</script> 
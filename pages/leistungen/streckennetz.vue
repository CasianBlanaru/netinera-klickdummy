<template>
  <div>
    <SubpageHeader
      title="Unser Streckennetz"
      subtitle="Leistungen"
      titleId="streckennetz-title"
      imageAlt="Netinera Streckennetz Illustration"
    />
    <div class="mx-auto px-4 py-12 container">
      <div class="max-w-none prose">
        <p class="mb-6 text-lg">
          Mit unserem umfangreichen Streckennetz verbinden wir Regionen in ganz Deutschland. 
          Entdecken Sie unsere Verbindungen und Strecken.
        </p>
        
        <ImageSlider class="mb-12" />
        
        <BusinessModelPillars class="mb-12" />
        
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 mb-12">
          <RelatedContentCard
            companyName="NETINERA"
            title="Technik & Innovation"
            imageUrl="/images/technik-innovation.jpg"
          />
          <RelatedContentCard
            companyName="NETINERA"
            title="ÖPNV & Nachhaltigkeit"
            imageUrl="/images/oepnv-nachhaltigkeit.jpg"
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
import BusinessModelPillars from '~/components/BusinessModelPillars.vue';
import RelatedContentCard from '~/components/RelatedContentCard.vue';
import ContactSection from '~/components/ContactSection.vue';
// Komponenten-Logik hier
</script> 
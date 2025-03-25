<template>
  <div>
    <SubpageHeader
      title="Eisenbahnverkehrsunternehmen"
      subtitle="Unternehmen"
      titleId="evu-1-title"
      imageAlt="Netinera EVU Illustration"
    />
    <div class="mx-auto px-4 py-12 container">
      <div class="max-w-none prose">
        <p class="mb-6 text-lg">
          Als führendes Eisenbahnverkehrsunternehmen setzen wir Maßstäbe in Qualität 
          und Service. Erfahren Sie mehr über unsere Leistungen im Schienenverkehr.
        </p>
        
        <ImageSlider class="mb-12" />
        
        <div class="gap-8 grid grid-cols-1 md:grid-cols-3 my-12">
          <CompanyCard
            companyName="ODEG"
            title="Ostdeutsche Eisenbahn"
            description="Regionaler Schienenverkehr in Ostdeutschland"
            imageUrl="/images/companies/odeg.jpg"
          />
          <CompanyCard
            companyName="metronom"
            title="Metronom Eisenbahn"
            description="Personennahverkehr in Niedersachsen"
            imageUrl="/images/companies/metronom.jpg"
          />
          <CompanyCard
            companyName="vlexx"
            title="vlexx GmbH"
            description="SPNV in Rheinland-Pfalz und Hessen"
            imageUrl="/images/companies/vlexx.jpg"
          />
        </div>
        
        <OdegArticle class="mb-12" />
        
        <SustainabilityArticle
          title="Regionale Stärke"
          content="Unsere Eisenbahnverkehrsunternehmen sind fest in ihren Regionen verwurzelt. Sie kennen die lokalen Bedürfnisse und bieten maßgeschneiderte Mobilitätslösungen für Pendler und Reisende."
          :reverse="false"
        />
        
        <ProfileQuote
          quote="Wir verbinden Menschen und Regionen - zuverlässig und nachhaltig."
          name="Michael Meyer"
          role="Geschäftsführer EVU"
          imageUrl="/images/team/michael-meyer.jpg"
        />
        
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 mb-12">
          <RelatedContentCard
            companyName="NETINERA"
            title="Organisation"
            imageUrl="/images/organisation.jpg"
          />
          <RelatedContentCard
            companyName="NETINERA"
            title="Geschäftsbereiche"
            imageUrl="/images/geschaeftsbereiche.jpg"
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
import CompanyCard from '~/components/CompanyCard.vue';
import OdegArticle from '~/components/OdegArticle.vue';
import SustainabilityArticle from '~/components/SustainabilityArticle.vue';
import ProfileQuote from '~/components/ProfileQuote.vue';
import RelatedContentCard from '~/components/RelatedContentCard.vue';
import ContactSection from '~/components/ContactSection.vue';
</script> 
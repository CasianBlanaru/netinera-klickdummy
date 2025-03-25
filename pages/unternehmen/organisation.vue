<template>
  <div>
    <SubpageHeader
      title="Organisation"
      subtitle="Unternehmen"
      titleId="organisation-title"
      imageAlt="Netinera Organisation Illustration"
    />
    <div class="mx-auto px-4 py-12 container">
      <div class="max-w-none prose">
        <p class="mb-6 text-lg">
          Unsere Organisation ist auf Effizienz und Zukunftsfähigkeit ausgerichtet. 
          Mit klaren Strukturen und modernen Prozessen schaffen wir die Basis für 
          nachhaltigen Erfolg.
        </p>
        
        <BusinessModelPillars class="mb-12" />
        
        <SustainabilityArticle
          title="Unternehmensstruktur"
          content="Als Teil der Ferrovie dello Stato Italiane Group vereinen wir die Stärken eines internationalen Konzerns mit der Flexibilität regionaler Verkehrsunternehmen. Unsere dezentrale Organisation ermöglicht schnelle Entscheidungen und kundennahe Lösungen."
          :reverse="false"
        />
        
        <div class="gap-8 grid grid-cols-1 md:grid-cols-3 my-12">
          <CompanyCard
            companyName="NETINERA Deutschland"
            title="Zentrale"
            description="Strategische Führung und Koordination der Unternehmensgruppe"
            imageUrl="/images/companies/netinera-zentrale.jpg"
          />
          <CompanyCard
            companyName="Ferrovie dello Stato"
            title="Mutterkonzern"
            description="Internationale Expertise im Schienenverkehr"
            imageUrl="/images/companies/fs-group.jpg"
          />
          <CompanyCard
            companyName="Regionale Betriebe"
            title="Verkehrsunternehmen"
            description="Lokale Präsenz und kundennaher Service"
            imageUrl="/images/companies/regional.jpg"
          />
        </div>
        
        <ProfileQuote
          quote="Unsere Organisation verbindet internationale Expertise mit regionaler Präsenz."
          name="Dr. Fabrizio Favara"
          role="CEO NETINERA"
          imageUrl="/images/team/fabrizio-favara.jpg"
        />
        
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 mb-12">
          <RelatedContentCard
            companyName="NETINERA"
            title="Management"
            imageUrl="/images/management.jpg"
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
import BusinessModelPillars from '~/components/BusinessModelPillars.vue';
import SustainabilityArticle from '~/components/SustainabilityArticle.vue';
import CompanyCard from '~/components/CompanyCard.vue';
import ProfileQuote from '~/components/ProfileQuote.vue';
import RelatedContentCard from '~/components/RelatedContentCard.vue';
import ContactSection from '~/components/ContactSection.vue';
</script> 
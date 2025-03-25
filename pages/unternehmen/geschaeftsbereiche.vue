<template>
  <div>
    <SubpageHeader
      title="Geschäftsbereiche"
      subtitle="Unternehmen"
      titleId="geschaeftsbereiche-title"
      imageAlt="Netinera Geschäftsbereiche Illustration"
    />
    <div class="mx-auto px-4 py-12 container">
      <div class="max-w-none prose">
        <p class="mb-6 text-lg">
          Unsere vielfältigen Geschäftsbereiche decken das gesamte Spektrum moderner 
          Mobilität ab. Von Personennahverkehr bis zu spezialisierten Serviceleistungen 
          bieten wir maßgeschneiderte Lösungen.
        </p>
        
        <div class="gap-8 grid grid-cols-1 md:grid-cols-3 my-12">
          <CompanyCard
            companyName="Personenverkehr"
            title="SPNV & ÖPNV"
            description="Regionaler Schienenverkehr und öffentlicher Nahverkehr"
          />
          <CompanyCard
            companyName="Service"
            title="Instandhaltung"
            description="Wartung und Service für Schienenfahrzeuge"
          />
          <CompanyCard
            companyName="Innovation"
            title="Digitalisierung"
            description="Entwicklung digitaler Mobilitätslösungen"
          />
        </div>
        
        <SustainabilityArticle
          title="Integrierte Mobilität"
          content="Unsere Geschäftsbereiche arbeiten eng verzahnt, um optimale Mobilitätslösungen aus einer Hand anzubieten. Von der Planung über den Betrieb bis zur Wartung - wir decken die gesamte Wertschöpfungskette ab."
          :reverse="false"
        />
        
        <ProfileQuote
          quote="Die Vernetzung unserer Geschäftsbereiche schafft einzigartige Synergien für unsere Kunden."
          name="Maria Schmidt"
          role="Leiterin Geschäftsentwicklung"
        />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script> 
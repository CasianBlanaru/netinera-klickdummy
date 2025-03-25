<template>
  <div>
    <CompanySection />
    <ResponsibilitySection />
    
    <!-- Content Section -->
    <div class="bg-white py-16">
      <div class="mx-auto px-4 container">
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <!-- Sustainability Article -->
          <SustainabilityArticle 
            title="Nachhaltigkeit"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          
          <!-- Odeg Article -->
          <OdegArticle 
            title="ODEG"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          
          <!-- Press Release Detail -->
          <PressReleaseDetail 
            title="Pressemitteilung"
            date="25. März 2024"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </div>

    <!-- Cards Section -->
    <div class="bg-gray-50 py-16">
      <div class="mx-auto px-4 container">
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <!-- Contact Card -->
          <ContactCard 
            name="Max Mustermann"
            position="Geschäftsführer"
            phone="+49 123 456789"
            email="max.mustermann@example.com"
          />
          
          <!-- Company Card -->
          <CompanyCard 
            companyName="Netinera"
            title="Unser Unternehmen"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          
          <!-- Related Article Card -->
          <RelatedArticleCard 
            title="Verwandter Artikel"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div class="bg-white py-16">
      <div class="mx-auto px-4 container">
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <!-- Testimonial -->
          <Testimonial 
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            name="John Doe"
            role="CEO"
          />
          
          <!-- Profile Quote -->
          <ProfileQuote 
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            name="Jane Smith"
            role="CTO"
          />
          
          <!-- Testimonial Example -->
          <TestimonialExample 
            quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            name="Mike Johnson"
            role="COO"
          />
        </div>
      </div>
    </div>

    <!-- News Section -->
    <div class="bg-gray-50 py-16">
      <div class="mx-auto px-4 container">
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <!-- News Feed -->
          <NewsFeed />
          
          <!-- News Item -->
          <NewsItem 
            date="25. März 2024"
            company="Netinera"
            headline="Beispiel-News-Artikel"
          />
          
          <!-- Press Release Page -->
          <PressReleasePage />
        </div>
      </div>
    </div>

    <!-- Contact Section -->
    <div class="bg-white py-16">
      <div class="mx-auto px-4 container">
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2">
          <!-- Contact Section -->
          <ContactSection />
          
          <!-- Filter Section -->
          <FilterSection />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CompanySection from '~/components/CompanySection.vue'
import ResponsibilitySection from '~/components/ResponsibilitySection.vue'
import SustainabilityArticle from '~/components/SustainabilityArticle.vue'
import OdegArticle from '~/components/OdegArticle.vue'
import PressReleaseDetail from '~/components/PressReleaseDetail.vue'
import ContactCard from '~/components/ContactCard.vue'
import CompanyCard from '~/components/CompanyCard.vue'
import RelatedArticleCard from '~/components/RelatedArticleCard.vue'
import Testimonial from '~/components/Testimonial.vue'
import ProfileQuote from '~/components/ProfileQuote.vue'
import TestimonialExample from '~/components/TestimonialExample.vue'
import NewsFeed from '~/components/NewsFeed.vue'
import NewsItem from '~/components/NewsItem.vue'
import PressReleasePage from '~/components/PressReleasePage.vue'
import ContactSection from '~/components/ContactSection.vue'
import FilterSection from '~/components/FilterSection.vue'
</script> 
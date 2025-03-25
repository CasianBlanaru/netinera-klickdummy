<template>
  <div class="pt-32 pb-16">
    <SubpageHeader
      title="Komponenten"
      subtitle="Übersicht aller verfügbaren Komponenten"
      titleId="components"
    />

    <div class="mx-auto px-4 sm:px-6 lg:px-8 container">
      <!-- Navigation Components -->
      <section class="mb-16">
        <h2 class="mb-8 font-bold text-2xl">Navigation</h2>
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Header</h3>
            <Header />
          </div>
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Footer</h3>
            <Footer />
          </div>
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Sticky Button</h3>
            <StickyButton />
          </div>
        </div>
      </section>

      <!-- Content Components -->
      <section class="mb-16">
        <h2 class="mb-8 font-bold text-2xl">Content</h2>
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Subpage Header</h3>
            <SubpageHeader title="Beispiel" subtitle="Ein Untertitel" titleId="example" />
          </div>
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Hero Header</h3>
            <HeroHeader />
          </div>
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Image Slider</h3>
            <ImageSlider />
          </div>
        </div>
      </section>

      <!-- Article Components -->
      <section class="mb-16">
        <h2 class="mb-8 font-bold text-2xl">Artikel</h2>
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Sustainability Article</h3>
            <SustainabilityArticle />
          </div>
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Odeg Article</h3>
            <OdegArticle />
          </div>
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Press Release Detail</h3>
            <PressReleaseDetail />
          </div>
        </div>
      </section>

      <!-- Card Components -->
      <section class="mb-16">
        <h2 class="mb-8 font-bold text-2xl">Karten</h2>
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Contact Card</h3>
            <ContactCard 
              name="Max Mustermann"
              position="Geschäftsführer"
              phone="+49 123 456789"
              email="max.mustermann@example.com"
            />
          </div>
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Company Card</h3>
            <CompanyCard />
          </div>
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Related Article Card</h3>
            <RelatedArticleCard />
          </div>
        </div>
      </section>

      <!-- Testimonial Components -->
      <section class="mb-16">
        <h2 class="mb-8 font-bold text-2xl">Testimonials</h2>
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Testimonial</h3>
            <Testimonial />
          </div>
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Profile Quote</h3>
            <ProfileQuote />
          </div>
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Testimonial Example</h3>
            <TestimonialExample />
          </div>
        </div>
      </section>

      <!-- News Components -->
      <section class="mb-16">
        <h2 class="mb-8 font-bold text-2xl">News</h2>
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">News Feed</h3>
            <NewsFeed />
          </div>
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">News Item</h3>
            <NewsItem 
              date="25. März 2024"
              company="Netinera"
              headline="Beispiel-News-Artikel"
            />
          </div>
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Press Release Page</h3>
            <PressReleasePage />
          </div>
        </div>
      </section>

      <!-- Contact Components -->
      <section class="mb-16">
        <h2 class="mb-8 font-bold text-2xl">Kontakt</h2>
        <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Contact Section</h3>
            <ContactSection />
          </div>
          <div class="bg-white shadow p-6 rounded-lg">
            <h3 class="mb-4 font-semibold">Filter Section</h3>
            <FilterSection />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import SubpageHeader from '~/components/SubpageHeader.vue'
import Header from '~/components/navigation/Header.vue'
import Footer from '~/components/navigation/Footer.vue'
import StickyButton from '~/components/StickyButton.vue'
import HeroHeader from '~/components/HeroHeader.vue'
import ImageSlider from '~/components/ImageSlider.vue'
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
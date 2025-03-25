<template>
  <div class="mx-auto px-4 py-12 container">
    <h1 class="mb-8 font-bold text-4xl">Komponenten-Übersicht</h1>
    
    <div class="space-y-16">
      <!-- Navigation Components -->
      <section>
        <h2 class="mb-6 font-semibold text-2xl">Navigation</h2>
        <div class="gap-8 grid">
          <div v-for="component in navigationComponents" :key="component.name" class="p-6 border rounded-lg">
            <h3 class="mb-2 font-medium text-xl">{{ component.name }}</h3>
            <p class="mb-4 text-gray-600">{{ component.description }}</p>
            <div class="bg-gray-50 p-4 rounded">
              <component :is="component.component" v-if="component.component" />
              <p v-else class="text-gray-500">Vorschau nicht verfügbar</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Content Components -->
      <section>
        <h2 class="mb-6 font-semibold text-2xl">Content</h2>
        <div class="gap-8 grid">
          <div v-for="component in contentComponents" :key="component.name" class="p-6 border rounded-lg">
            <h3 class="mb-2 font-medium text-xl">{{ component.name }}</h3>
            <p class="mb-4 text-gray-600">{{ component.description }}</p>
            <div class="bg-gray-50 p-4 rounded">
              <component :is="component.component" v-if="component.component" />
              <p v-else class="text-gray-500">Vorschau nicht verfügbar</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Layout Components -->
      <section>
        <h2 class="mb-6 font-semibold text-2xl">Layout</h2>
        <div class="gap-8 grid">
          <div v-for="component in layoutComponents" :key="component.name" class="p-6 border rounded-lg">
            <h3 class="mb-2 font-medium text-xl">{{ component.name }}</h3>
            <p class="mb-4 text-gray-600">{{ component.description }}</p>
            <div class="bg-gray-50 p-4 rounded">
              <component :is="component.component" v-if="component.component" />
              <p v-else class="text-gray-500">Vorschau nicht verfügbar</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import ManagementTeam from '~/components/ManagementTeam.vue';
import ProfileQuote from '~/components/ProfileQuote.vue';
import SustainabilityArticle from '~/components/SustainabilityArticle.vue';
import MissionPage from '~/components/MissionPage.vue';
import RelatedContentCard from '~/components/RelatedContentCard.vue';
import NewsFeed from '~/components/NewsFeed.vue';
import PressReleaseDetail from '~/components/PressReleaseDetail.vue';
import BusinessModelPillars from '~/components/BusinessModelPillars.vue';
import FabrizioFavaraProfile from '~/components/FabrizioFavaraProfile.vue';
import PressReleasePage from '~/components/PressReleasePage.vue';
import SubpageHeader from '~/components/SubpageHeader.vue';
import TestimonialExample from '~/components/TestimonialExample.vue';
import ContactCard from '~/components/ContactCard.vue';
import HeroHeader from '~/components/HeroHeader.vue';
import FilterSection from '~/components/FilterSection.vue';
import ContactSection from '~/components/ContactSection.vue';
import Testimonial from '~/components/Testimonial.vue';
import CompanyCard from '~/components/CompanyCard.vue';
import NewsItem from '~/components/NewsItem.vue';
import ImageSlider from '~/components/ImageSlider.vue';
import FooterSection from '~/components/FooterSection.vue';
import SustainabilitySection from '~/components/SustainabilitySection.vue';
import RelatedArticleCard from '~/components/RelatedArticleCard.vue';
import OdegArticle from '~/components/OdegArticle.vue';

const navigationComponents = [
  {
    name: 'HeroHeader',
    description: 'Hauptnavigation Header mit Hero-Bereich',
    component: HeroHeader
  },
  {
    name: 'SubpageHeader',
    description: 'Header für Unterseiten mit Titel und Untertitel',
    component: SubpageHeader
  },
  {
    name: 'FooterSection',
    description: 'Footer-Bereich mit Navigation und Kontaktinformationen',
    component: FooterSection
  }
];

const contentComponents = [
  {
    name: 'ManagementTeam',
    description: 'Darstellung des Management-Teams mit Bildern und Informationen',
    component: ManagementTeam
  },
  {
    name: 'ProfileQuote',
    description: 'Zitat-Komponente mit Profilbild',
    component: ProfileQuote
  },
  {
    name: 'SustainabilityArticle',
    description: 'Artikel über Nachhaltigkeitsthemen',
    component: SustainabilityArticle
  },
  {
    name: 'BusinessModelPillars',
    description: 'Darstellung der Geschäftsmodell-Säulen',
    component: BusinessModelPillars
  },
  {
    name: 'FabrizioFavaraProfile',
    description: 'Profilseite für Fabrizio Favara',
    component: FabrizioFavaraProfile
  },
  {
    name: 'TestimonialExample',
    description: 'Beispiel für Kundenstimmen',
    component: TestimonialExample
  },
  {
    name: 'NewsItem',
    description: 'Einzelner Nachrichtenbeitrag',
    component: NewsItem
  },
  {
    name: 'OdegArticle',
    description: 'Artikel über ODEG',
    component: OdegArticle
  }
];

const layoutComponents = [
  {
    name: 'RelatedContentCard',
    description: 'Karte für verwandte Inhalte',
    component: RelatedContentCard
  },
  {
    name: 'ContactCard',
    description: 'Kontaktkarte mit Informationen',
    component: ContactCard
  },
  {
    name: 'ImageSlider',
    description: 'Bildergalerie mit Slider-Funktion',
    component: ImageSlider
  },
  {
    name: 'FilterSection',
    description: 'Filterbereich für Listen und Galerien',
    component: FilterSection
  },
  {
    name: 'ContactSection',
    description: 'Kontaktbereich mit Formular',
    component: ContactSection
  }
];
</script> 
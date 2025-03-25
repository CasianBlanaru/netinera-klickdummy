<template>
  <div class="bg-white min-h-screen">
    <NavigationBar />
    
    <!-- Hero Banner -->
    <div class="relative bg-orange pt-20 w-full h-[400px]">
      <div class="flex justify-center items-center w-full h-full">
        <svg width="300" height="300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="300" height="300" fill="#ff5722" opacity="0.3"/>
          <text x="150" y="150" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">Aktuelles</text>
        </svg>
      </div>
      <!-- Overlay Box -->
      <div class="bottom-0 left-1/2 absolute bg-white p-[24px] w-[896px] sm:w-[95%] md:w-[90%] h-[192px] -translate-x-1/2 transform">
        <p class="mb-[4px] font-inter text-primary text-base tracking-[-0.176px]">
          AKTUELLES
        </p>
        <h1 class="font-inter font-bold text-primary text-4xl leading-[60px] tracking-[-0.88px]">
          News und Pressemitteilungen
        </h1>
      </div>
    </div>

    <!-- Main Content -->
    <div class="mx-auto px-[24px] sm:px-[16px] md:px-[20px] py-[80px] max-w-[1200px]">
      <!-- Filter Bar -->
      <div class="flex flex-wrap gap-4 mb-[48px]">
        <button 
          v-for="(category, index) in categories" 
          :key="index"
          @click="activeCategory = category === activeCategory ? 'Alle' : category"
          :class="[
            'px-[16px] py-[8px] rounded-md font-medium transition duration-300',
            activeCategory === category 
              ? 'bg-primary text-white' 
              : 'bg-gray-200 text-primary hover:bg-gray-300'
          ]"
        >
          {{ category }}
        </button>
      </div>
      
      <!-- News Grid -->
      <div class="gap-[32px] grid sm:grid-cols-2 md:grid-cols-3">
        <NewsCard
          v-for="(item, index) in filteredNewsItems"
          :key="index"
          :title="item.title"
          :description="item.description"
          :date="item.date"
          :category="item.category"
          :link="item.link"
        />
      </div>
      
      <!-- Pagination (Simple version) -->
      <div class="flex justify-center gap-2 mt-[48px]">
        <button 
          v-for="page in 3" 
          :key="page"
          :class="[
            'w-10 h-10 rounded-full font-medium transition duration-300',
            currentPage === page 
              ? 'bg-primary text-white' 
              : 'bg-gray-200 text-primary hover:bg-gray-300'
          ]"
          @click="currentPage = page"
        >
          {{ page }}
        </button>
      </div>
    </div>

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Pagination state
const currentPage = ref(1);
const activeCategory = ref('Alle');

// Available categories
const categories = ['Alle', 'Fahrzeuge', 'Unternehmen', 'Nachhaltigkeit', 'Innovation'];

// News items data
const allNewsItems = [
  {
    title: 'Neue Züge für Baden-Württemberg',
    description: 'NETINERA setzt ab Dezember 23 neue umweltfreundliche Züge auf der Strecke Stuttgart-Karlsruhe ein.',
    date: '15. Mai 2023',
    category: 'Fahrzeuge',
    link: '#'
  },
  {
    title: 'Erfolgreiche Quartalsstatistik',
    description: 'NETINERA verzeichnet ein Rekordquartal mit über 98% Pünktlichkeit und steigenden Fahrgastzahlen.',
    date: '2. April 2023',
    category: 'Unternehmen',
    link: '#'
  },
  {
    title: 'Nachhaltigkeitsstrategie 2030',
    description: 'Wir stellen unsere neue Nachhaltigkeitsstrategie vor, mit dem Ziel bis 2030 klimaneutral zu werden.',
    date: '18. März 2023',
    category: 'Nachhaltigkeit',
    link: '/verantwortung'
  },
  {
    title: 'Digitale Fahrplanauskunft optimiert',
    description: 'Unsere App bietet jetzt Echtzeitdaten und präzise Verspätungsinformationen für alle Verbindungen.',
    date: '5. März 2023',
    category: 'Innovation',
    link: '#'
  },
  {
    title: 'Neuer Wartungsstandort in Hamburg',
    description: 'NETINERA eröffnet einen hochmodernen Wartungsstandort für Züge im Hamburger Hafen.',
    date: '20. Februar 2023',
    category: 'Unternehmen',
    link: '#'
  },
  {
    title: 'Rekord: 10 Millionen Fahrgäste im Januar',
    description: 'Erstmals konnten wir über 10 Millionen Fahrgäste in einem Wintermonat begrüßen.',
    date: '15. Februar 2023',
    category: 'Unternehmen',
    link: '#'
  },
  {
    title: 'Wasserstoffzüge im Probebetrieb',
    description: 'In Niedersachsen starten wir den Testbetrieb mit emissionsfreien Wasserstoffzügen.',
    date: '10. Januar 2023',
    category: 'Nachhaltigkeit',
    link: '#'
  },
  {
    title: 'Neues Designkonzept für Regionalbahnen',
    description: 'Unsere Züge erhalten ein neues, modernes Erscheinungsbild mit verbessertem Komfort.',
    date: '5. Januar 2023',
    category: 'Fahrzeuge',
    link: '#'
  },
  {
    title: 'KI-gestützte Wartungspläne eingeführt',
    description: 'NETINERA setzt auf künstliche Intelligenz zur präventiven Wartung der Fahrzeugflotte.',
    date: '15. Dezember 2022',
    category: 'Innovation',
    link: '#'
  }
];

// Filtered news items based on active category
const filteredNewsItems = computed(() => {
  if (activeCategory.value === 'Alle') {
    return allNewsItems;
  }
  return allNewsItems.filter(item => item.category === activeCategory.value);
});
</script> 
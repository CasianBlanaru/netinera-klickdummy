<template>
  <section class="flex-1" aria-label="News feed">
    <div class="flex flex-col gap-20">
      <NuxtLink 
        v-for="(item, index) in newsItems"
        :key="index"
        :to="`/news-detail`"
        class="hover:opacity-80 transition-opacity"
      >
        <NewsItem
          :date="item.date"
          :company="item.company"
          :headline="item.headline"
        />
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewsItem from "./NewsItem.vue";

interface NewsItemData {
  date: string;
  company: string;
  headline: string;
}

export default defineComponent({
  name: "NewsFeed",
  components: {
    NewsItem,
  },
  setup() {
    const newsItems: NewsItemData[] = [
      {
        date: "24.1.2025",
        company: "NETINERA",
        headline:
          "Nach Gesprächen zwischen NETINERA und GDL: Weiterhin 35-Stunden-Woche ab 1. Januar 2028",
      },
      {
        date: "25.1.2025",
        company: "METRONOM",
        headline: "metronom erhält Zuschlag für Verkehrsvertrag ENNO II",
      },
      {
        date: "23.1.2025",
        company: "ODEG",
        headline:
          "NETINERA-Tochter ODEG erhält Zuschlag für Verkehrsvertrag in Westmecklenburg bis 2040",
      },
      {
        date: "22.1.2025",
        company: "METRONOM",
        headline: "metronom erhält Zuschlag für Verkehrsvertrag ENNO II",
      },
      {
        date: "21.1.2025",
        company: "NETINERA",
        headline:
          "Nach Gesprächen zwischen NETINERA und GDL: Weiterhin 35-Stunden-Woche ab 1. Januar 2028",
      },
      {
        date: "20.1.2025",
        company: "ODEG",
        headline:
          "NETINERA-Tochter ODEG erhält Zuschlag für Verkehrsvertrag in Westmecklenburg bis 2040",
      },
    ];

    return {
      newsItems,
    };
  },
});
</script>

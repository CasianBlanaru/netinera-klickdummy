<template>
      <div class="flex flex-col items-center bg-white w-full min-h-screen">
    <!-- SubpageHeader -->
    <SubpageHeader
      title="Pressemitteilungen"
      subtitle="News feed"
      titleId="unique-id"
      imageAlt="Beschreibung des Bildes"
    />
    <main class="bg-white mb-10 p-10 max-sm:p-4 max-md:p-6 pt-0 min-h-screen">
    <section class="flex max-md:flex-col gap-20 mx-auto px-4 container">
      <FilterSection />
      <NewsFeed />
    </section>
    <div class="flex max-md:flex-col gap-20 max-md:gap-10 mt-20">
    <aside class="w-[474px] max-md:w-full" aria-label="Filter options">
    <section>
      <h2 id="contact-heading" class="mb-10 font-bold text-stone-900 text-4xl">
      Ihre Ansprechpartner
    </h2>
    </section>
    </aside>
      <ContactSection />
    </div>
  </main>
  
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FilterSection from "./FilterSection.vue";
import NewsFeed from "./NewsFeed.vue";
import ContactSection from "./ContactSection.vue";

export default defineComponent({
	name: "PressReleasePage",
	components: {
		FilterSection,
		NewsFeed,
		ContactSection,
	},
});
</script>

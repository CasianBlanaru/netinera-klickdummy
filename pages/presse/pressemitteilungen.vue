<template>
  <div>
    <SubpageHeader
      title="Pressemitteilungen"
      subtitle="Presse"
      titleId="pressemitteilungen-title"
      imageAlt="Netinera Pressemitteilungen Illustration"
    />
    <div class="mx-auto px-4 py-12 container">
      <div class="max-w-none prose">
        <p class="mb-6 text-lg">
          Bleiben Sie auf dem Laufenden über die neuesten Entwicklungen bei NETINERA. 
          Hier finden Sie alle aktuellen Pressemitteilungen und Neuigkeiten.
        </p>
        <!-- Liste der Pressemitteilungen -->
        <div class="space-y-6 mt-8">
          <article v-for="i in 3" :key="i" class="pb-6 border-b">
            <time class="text-gray-500 text-sm">01.03.2024</time>
            <h2 class="mt-2 font-semibold text-xl">Pressemitteilung Titel</h2>
            <p class="mt-2">Kurze Beschreibung der Pressemitteilung...</p>
            <a href="#" class="inline-block mt-2 text-red-600 hover:text-red-700">Weiterlesen</a>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SubpageHeader from '~/components/SubpageHeader.vue';
</script> 
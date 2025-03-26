<template>
  <div>
    <HeroSlider />
    <div class="p-0">
      <ContentSlider />
    </div>
    <div class="pt-8 pb-24">
      <CompanySection />
    </div> 
    <div class="container">
      <PortraitSection />
    </div>
    <div class="container">
      <ResponsibilitySection />
    </div>
    <div class="container">
      <CurrentSection />
    </div>
    <div class="container">
      <StatisticsSection />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
});
</script> 
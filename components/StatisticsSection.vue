<template>
  <section class="px-4 py-8 md:py-16">
    <div class="mx-auto max-w-6xl">
      <h2 class="mb-4 md:mb-6 font-bold md:text-[40px] text-2xl text-center">Netinera in Zahlen</h2>
      
      <p class="mx-auto mb-8 md:mb-12 max-w-2xl text-base md:text-lg text-center">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa.
      </p>

      <!-- Statistics Grid -->
      <div class="gap-4 md:gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="(stat, index) in statistics" 
          :key="index" 
          :ref="(el) => { if (el) statRefs[index] = el as Element }"
          class="flex flex-col justify-center items-center bg-[#E5E5E5] rounded-lg h-[120px] md:h-[169px]"
        >
          <span class="font-bold text-[#333333] md:text-[64px] text-4xl">
            {{ formatNumber(stat.current) }}{{ stat.suffix }}
          </span>
          <span class="mt-2 text-[#333333] text-base md:text-lg">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Statistic {
  target: number;
  current: number;
  suffix: string;
  label: string;
  duration: number;
  animating?: boolean;
}

const statRefs = ref<Element[]>([]);
const statistics = ref<Statistic[]>([
  { target: 439, current: 0, suffix: '', label: 'Züge im Einsatz', duration: 2000 },
  { target: 6500, current: 0, suffix: '', label: 'Mitarbeiter', duration: 2000 },
  { target: 33, current: 0, suffix: ' Mio', label: 'Fahrgäste im Jahr', duration: 2000 },
  { target: 317, current: 0, suffix: ' Mio €', label: 'Umsatz', duration: 2000 },
  { target: 1790, current: 0, suffix: ' km', label: 'Streckennetz', duration: 2000 },
  { target: 202, current: 0, suffix: ' Mio', label: 'Zugkilometer im Jahr', duration: 2000 },
  { target: 251, current: 0, suffix: '', label: 'Stationen im Netz', duration: 2000 },
  { target: 17, current: 0, suffix: '', label: 'Linien', duration: 2000 }
]);

const formatNumber = (value: number): string => {
  return value.toLocaleString('de-DE');
};

const animateValue = (stat: Statistic) => {
  if (stat.animating) return;
  
  stat.animating = true;
  const start = 0;
  const end = stat.target;
  const duration = stat.duration;
  const startTimestamp = performance.now();
  
  const step = (currentTimestamp: number) => {
    const progress = Math.min((currentTimestamp - startTimestamp) / duration, 1);
    stat.current = Math.floor(progress * (end - start) + start);
    
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      stat.animating = false;
    }
  };
  
  requestAnimationFrame(step);
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const index = statRefs.value.findIndex(ref => ref === entry.target);
      if (entry.isIntersecting && index !== -1) {
        animateValue(statistics.value[index]);
        observer.unobserve(entry.target);
      }
    }
  }, {
    threshold: 0.1,
    rootMargin: '50px'
  });

  for (const ref of statRefs.value) {
    if (ref) {
      observer.observe(ref);
    }
  }
});
</script>

<style scoped>
/* Die Stile sind jetzt direkt in den Tailwind-Klassen integriert */
</style> 
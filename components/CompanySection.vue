<template>
  <section class="relative flex flex-col justify-center items-center py-20 max-sm:py-12 max-md:py-16">
    <h2 class="mb-4 font-bold text-[40px] text-center">
      Unternehmen
    </h2>
    
    <p class="mb-16 px-4 max-w-[800px] text-center">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Aenean commodo ligula eget dolor. Aenean massa.
    </p>

    <div class="bottom-0 left-2/4 absolute flex flex-wrap justify-center gap-8 bg-white px-4 py-8 w-[896px] max-sm:w-[95%] max-md:w-[90%] -translate-x-2/4">
      <!-- Organisation -->
      <NuxtLink 
        to="/organisation"
        class="company-link"
      >
        <span class="font-medium text-lg">→</span>
        <span class="font-medium text-lg">Organisation</span>
      </NuxtLink>

      <!-- Geschäftsbereiche -->
      <NuxtLink 
        to="/geschaeftsbereiche"
        class="company-link"
      >
        <span class="font-medium text-lg">→</span>
        <span class="font-medium text-lg">Geschäftsbereiche</span>
      </NuxtLink>

      <!-- Management -->
      <NuxtLink 
        to="/management"
        class="company-link"
      >
        <span class="font-medium text-lg">→</span>
        <span class="font-medium text-lg">Management</span>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
// No props or logic needed
</script>

<style scoped>
.company-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #E6F4F1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  transition: all 0.2s ease;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
}

.company-link:hover {
  background-color: #d9eeea;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
</style> 
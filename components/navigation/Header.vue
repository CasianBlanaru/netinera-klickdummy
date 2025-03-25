<template>
  <header
    :class="[
      'fixed top-0 pt-[30px] z-5 w-full transition-transform duration-300 container left-0 right-0',
      isScrolledDown ? '-translate-y-full' : 'translate-y-0'
    ]"
  >
    <div class="z-30 relative flex items-center gap-8 bg-white px-12 max-sm:px-4 max-md:px-6 py-6 max-sm:py-3 max-md:py-4 rounded-[48px] max-sm:rounded-3xl w-full h-24 max-sm:h-16 max-md:h-20">
      <div class="w-[255px] max-md:w-[150px]">
        <Logo />
      </div>
      <nav class="flex flex-1 justify-end items-center gap-16">
        <div class="max-md:hidden">
          <NavigationLinks />
        </div>
        <div class="flex items-center gap-4">
          <div class="max-md:hidden flex justify-center items-center hover:bg-gray-100 rounded-full w-10 h-10 transition-colors">
            <SearchIcon :is-open="isSearchOpen" @click="toggleSearch" />
          </div>
          <div class="hidden max-md:block">
            <MobileNavigation />
          </div>
        </div>
      </nav>
    </div>

    <SearchField :is-open="isSearchOpen" @close="closeSearch" />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Logo from './Logo.vue';
import NavigationLinks from './NavigationLinks.vue';
import SearchIcon from './SearchIcon.vue';
import SearchField from './SearchField.vue';
import MobileNavigation from './MobileNavigation.vue';

const isSearchOpen = ref(false);
const isScrolledDown = ref(false);
let lastScrollY = 0;

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};

const closeSearch = () => {
  isSearchOpen.value = false;
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  
  // Show header when scrolling up, hide when scrolling down
  if (currentScrollY > lastScrollY) {
    isScrolledDown.value = true;
  } else {
    isScrolledDown.value = false;
  }
  
  lastScrollY = currentScrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script> 
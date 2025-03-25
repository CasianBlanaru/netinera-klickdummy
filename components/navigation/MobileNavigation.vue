<template>
  <div>
    <!-- Hamburger Button -->
    <button
      @click="toggleMenu"
      class="z-50 relative flex flex-col justify-center items-center w-10 h-10"
      aria-label="Toggle menu"
    >
      <span 
        class="block bg-gray-800 w-6 h-0.5 transition-all duration-300"
        :class="{ 'rotate-45 translate-y-[5px]': isOpen }"
      ></span>
      <span 
        class="block bg-gray-800 mt-1.5 w-6 h-0.5 transition-all duration-300"
        :class="{ 'opacity-0': isOpen }"
      ></span>
      <span 
        class="block bg-gray-800 mt-1.5 w-6 h-0.5 transition-all duration-300"
        :class="{ '-rotate-45 -translate-y-[5px]': isOpen }"
      ></span>
    </button>

    <!-- Overlay -->
    <div
      v-if="isOpen"
      class="z-40 fixed inset-0 bg-black/50"
      @click="closeMenu"
    ></div>

    <!-- Canvas Menu -->
    <div
      class="top-0 right-0 z-50 fixed bg-white shadow-xl w-full md:w-[400px] h-screen transition-transform duration-300 transform"
      :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <!-- Menu Header with Logo -->
      <div class="flex justify-between items-center bg-[#FF9B50] p-6">
        <div class="font-bold text-white text-2xl">Menü</div>
        <button
          @click="closeMenu"
          class="hover:bg-white/10 p-2 rounded-full text-white"
          aria-label="Close menu"
        >
          <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Navigation Items -->
      <nav class="bg-white h-[calc(100vh-88px)] overflow-y-auto">
        <div class="py-4">
          <div v-for="(item, index) in menuItems" :key="index" class="border-gray-100 border-b last:border-b-0">
            <!-- Menu Item with Children -->
            <div v-if="item.children" class="relative bg-white">
              <button
                @click="toggleSubmenu(index)"
                class="flex justify-between items-center hover:bg-gray-50 p-6 w-full text-left"
                :class="{ 'bg-gray-50': activeSubmenu === index }"
              >
                <span class="font-medium text-xl">{{ item.text }}</span>
                <svg
                  class="w-6 h-6 transition-transform duration-200"
                  :class="{ 'rotate-180': activeSubmenu === index }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <!-- Submenu -->
              <div
                v-show="activeSubmenu === index"
                class="bg-white py-2"
              >
                <a
                  v-for="(child, childIndex) in item.children"
                  :key="childIndex"
                  :href="child.href"
                  class="block hover:bg-gray-50 px-8 py-4 text-gray-600 hover:text-red-600 text-lg"
                  @click="closeMenu"
                >
                  {{ child.text }}
                </a>
              </div>
            </div>
            <!-- Single Menu Item -->
            <a
              v-else
              :href="item.href"
              class="block bg-white hover:bg-gray-50 p-6 font-medium text-xl"
              @click="closeMenu"
            >
              {{ item.text }}
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue';
import type { MenuItem } from './NavigationLinks.vue';

const isOpen = ref(false);
const activeSubmenu = ref<number | null>(null);

const menuItems = ref<MenuItem[]>([
  {
    text: 'Leistungen',
    children: [
      { text: 'Regionale Mobilität', href: '/leistungen/regionale-mobilitaet' },
      { text: 'Streckennetz', href: '/leistungen/streckennetz' },
      { text: 'ÖPNV & Nachhaltigkeit', href: '/leistungen/oepnv-nachhaltigkeit' },
      { text: 'Technik & Innovation', href: '/leistungen/technik-innovation' },
      { text: 'Instandhaltung & Service', href: '/leistungen/instandhaltung-service' }
    ],
    isOpen: false
  },
  {
    text: 'Unternehmen',
    children: [
      { text: 'Organisation', href: '/unternehmen/organisation' },
      { text: 'Geschäftsbereiche', href: '/unternehmen/geschaeftsbereiche' },
      { text: 'EVU', href: '/unternehmen/evu-1' },
      { text: 'EVU', href: '/unternehmen/evu-2' },
      { text: 'EVU', href: '/unternehmen/evu-3' },
      { text: 'Management', href: '/unternehmen/management' }
    ],
    isOpen: false
  },
  {
    text: 'Verantwortung',
    children: [
      { text: 'Werte', href: '/verantwortung/werte' },
      { text: 'Leitbild', href: '/verantwortung/leitbild' }
    ],
    isOpen: false
  },
  {
    text: 'Karriere',
    href: '/karriere/index',
    isOpen: false
  },
  {
    text: 'Presse',
    children: [
      { text: 'Pressemitteilungen', href: '/presse/pressemitteilungen' },
      { text: 'PM Detail', href: '/presse/pm-detail-1' },
      { text: 'PM Detail', href: '/presse/pm-detail-2' }
    ],
    isOpen: false
  },
  {
    text: 'Kontakt',
    href: '/kontakt/index',
    isOpen: false
  }
]);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  if (!isOpen.value) {
    activeSubmenu.value = null;
  }
  document.body.style.overflow = isOpen.value ? 'hidden' : '';
};

const closeMenu = () => {
  isOpen.value = false;
  activeSubmenu.value = null;
  document.body.style.overflow = '';
};

const toggleSubmenu = (index: number) => {
  activeSubmenu.value = activeSubmenu.value === index ? null : index;
};

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style> 
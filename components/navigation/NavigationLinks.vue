<template>
  <nav
    :class="[
      isMobile ? 'flex flex-col gap-2' : 'flex gap-10 items-center'
    ]"
  >
    <div
      v-for="(item, index) in menuItems"
      :key="`nav-item-${index}`"
      class="relative"
    >
      <button
        :class="[
          baseStyles,
          isMobile ? mobileStyles : desktopStyles,
          'flex items-center gap-1 group'
        ]"
        @click="toggleDropdown(item)"
      >
        {{ item.text }}
        <svg
          v-if="item.children"
          class="w-4 h-4 transition-transform duration-200"
          :class="{ 'rotate-180': item.isOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <!-- Dropdown Menu -->
      <div
        v-if="item.children"
        :class="[
          'absolute left-0 mt-2 w-64 rounded-xl shadow-xl bg-white/95 backdrop-blur-sm border border-gray-100',
          isMobile ? 'relative mt-1 w-full' : '',
          'transition-all duration-200 ease-out',
          item.isOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-2 pointer-events-none'
        ]"
      >
        <div class="py-2">
          <a
            v-for="(child, childIndex) in item.children"
            :key="`dropdown-item-${childIndex}`"
            :href="child.href"
            class="group flex items-center px-4 py-2.5 text-gray-700 hover:text-red-600 text-sm transition-colors duration-150"
            @click="closeDropdown(item)"
          >
            {{ child.text }}
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface MenuItem {
  text: string;
  href?: string;
  children?: {
    text: string;
    href: string;
  }[];
  isOpen?: boolean;
}

const props = defineProps<{
  isMobile?: boolean;
}>();

const baseStyles = 'text-base font-medium transition-colors duration-200';
const mobileStyles = 'text-lg text-gray-900 hover:text-red-600';
const desktopStyles = 'text-gray-700 hover:text-red-600';

const toggleDropdown = (item: MenuItem) => {
  // Close all other dropdowns
  for (const menuItem of menuItems.value) {
    if (menuItem !== item) {
      menuItem.isOpen = false;
    }
  }
  // Toggle current dropdown
  item.isOpen = !item.isOpen;
};

const closeDropdown = (item: MenuItem) => {
  item.isOpen = false;
};

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
</script> 
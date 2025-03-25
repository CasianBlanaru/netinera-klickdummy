<template>
  <nav :class="{ 'flex-col': isMobile }">
    <ul :class="[
      'flex gap-8',
      isMobile ? 'flex-col gap-4' : ''
    ]">
      <li v-for="(item, index) in menuItems" :key="index">
        <router-link
          v-if="item.href"
          :to="item.href"
          class="text-gray-700 hover:text-red-600 transition-colors"
        >
          {{ item.text }}
        </router-link>
        <div v-else class="group relative">
          <button
            class="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
            @click="toggleSubmenu(index)"
          >
            {{ item.text }}
            <svg
              class="w-4 h-4 transition-transform duration-200"
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
            v-show="isMobile ? activeSubmenu === index : true"
            :class="[
              'bg-white',
              isMobile ? 'mt-2 ml-4' : 'absolute top-full left-0 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg rounded-lg overflow-visible'
            ]"
          >
            <router-link
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
              :to="child.href"
              class="block hover:bg-gray-50 px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              {{ child.text }}
            </router-link>
          </div>
        </div>
      </li>
    </ul>
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
}

defineProps<{
  isMobile?: boolean;
}>();

const activeSubmenu = ref<number | null>(null);

const toggleSubmenu = (index: number) => {
  activeSubmenu.value = activeSubmenu.value === index ? null : index;
};

const menuItems: MenuItem[] = [
  {
    text: 'Leistungen',
    children: [
      { text: 'Regionale Mobilität', href: '/leistungen/regionale-mobilitaet' },
      { text: 'Streckennetz', href: '/leistungen/streckennetz' },
      { text: 'ÖPNV & Nachhaltigkeit', href: '/leistungen/oepnv-nachhaltigkeit' },
      { text: 'Technik & Innovation', href: '/leistungen/technik-innovation' },
      { text: 'Instandhaltung & Service', href: '/leistungen/instandhaltung-service' }
    ]
  },
  {
    text: 'Unternehmen',
    children: [
      { text: 'Organisation', href: '/unternehmen/organisation' },
      { text: 'Geschäftsbereiche', href: '/unternehmen/geschaeftsbereiche' },
      { text: 'EVU', href: '/unternehmen/evu-1' },
      { text: 'Management', href: '/unternehmen/management' }
    ]
  },
  {
    text: 'Verantwortung',
    children: [
      { text: 'Werte', href: '/verantwortung/werte' },
      { text: 'Leitbild', href: '/verantwortung/leitbild' }
    ]
  },
  {
    text: 'Karriere',
    href: '/karriere'
  },
  {
    text: 'Presse',
    children: [
      { text: 'Pressemitteilungen', href: '/presse/pressemitteilungen' },
      { text: 'News Detail', href: '/presse/news-detail' }
    ]
  },
  {
    text: 'Kontakt',
    href: '/kontakt'
  }
];
</script> 
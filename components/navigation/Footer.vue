<template>
  <footer class="py-12 text-neutral text-white">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
      <div class="gap-8 grid grid-cols-1 md:grid-cols-4">
        <div>
          <Logo class="mb-4 w-auto h-8" />
          <p class="text-gray-400">Netinera - Ihr Partner für nachhaltige Mobilität</p>
        </div>
        <div>
          <h3 class="mb-4 font-bold">Unternehmen</h3>
          <ul class="space-y-2">
            <li><router-link to="/unternehmen" class="text-gray-400 hover:text-white">Über uns</router-link></li>
            <li><router-link to="/unternehmen/organisation" class="text-gray-400 hover:text-white">Organisation</router-link></li>
            <li><router-link to="/unternehmen/management" class="text-gray-400 hover:text-white">Management</router-link></li>
          </ul>
        </div>
        <div>
          <h3 class="mb-4 font-bold">Leistungen</h3>
          <ul class="space-y-2">
            <li><router-link to="/leistungen" class="text-gray-400 hover:text-white">Übersicht</router-link></li>
            <li><router-link to="/leistungen/oepnv-nachhaltigkeit" class="text-gray-400 hover:text-white">ÖPNV</router-link></li>
            <li><router-link to="/leistungen/technik-innovation" class="text-gray-400 hover:text-white">Technik</router-link></li>
          </ul>
        </div>
        <div>
          <h3 class="mb-4 font-bold">Kontakt</h3>
          <ul class="space-y-2">
            <li><router-link to="/kontakt" class="text-gray-400 hover:text-white">Kontakt</router-link></li>
            <li><router-link to="/karriere" class="text-gray-400 hover:text-white">Karriere</router-link></li>
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 border-gray-800 border-t text-gray-400 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Netinera. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Logo from './Logo.vue'
</script> 
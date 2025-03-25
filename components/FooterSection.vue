<template>
  <footer class="bg-gray-900 py-16 text-white">
    <div class="mx-auto px-4 container">
      <div class="gap-8 grid grid-cols-1 md:grid-cols-4">
        <!-- Company Info -->
        <div>
          <h3 class="mb-4 font-bold text-xl">NETINERA</h3>
          <p class="text-gray-400">
            Ihr zuverlässiger Partner im Schienennahverkehr
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="mb-4 font-bold">Quick Links</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-400 hover:text-white">Home</NuxtLink></li>
            <li><NuxtLink to="/nachhaltigkeit" class="text-gray-400 hover:text-white">Nachhaltigkeit</NuxtLink></li>
            <li><NuxtLink to="/kontakt" class="text-gray-400 hover:text-white">Kontakt</NuxtLink></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="mb-4 font-bold">Services</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-400 hover:text-white">Personenverkehr</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Instandhaltung</a></li>
            <li><a href="#" class="text-gray-400 hover:text-white">Service</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="mb-4 font-bold">Kontakt</h4>
          <address class="text-gray-400 not-italic">
            <p>NETINERA Deutschland GmbH</p>
            <p>Bahnhofstraße 1</p>
            <p>12345 Berlin</p>
            <p class="mt-2">
              <a href="tel:+49301234567" class="hover:text-white">+49 30 123 4567</a>
            </p>
            <p>
              <a href="mailto:info@netinera.de" class="hover:text-white">info@netinera.de</a>
            </p>
          </address>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-gray-800 border-t">
        <div class="flex md:flex-row flex-col justify-between items-center">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} NETINERA Deutschland GmbH. Alle Rechte vorbehalten.
          </p>
          <div class="flex gap-4 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-white text-sm">Impressum</a>
            <a href="#" class="text-gray-400 hover:text-white text-sm">Datenschutz</a>
            <a href="#" class="text-gray-400 hover:text-white text-sm">AGB</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script> 
<template>
  <div class="pt-32 pb-16">
    <SubpageHeader
      title="Leistungen"
      subtitle="Unsere Kernkompetenzen im Überblick"
      titleId="leistungen"
    />

    <!-- Content Elements Grid -->
    <div class="mx-auto px-4 sm:px-6 lg:px-8 container">
      <div class="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <!-- ÖPNV & Nachhaltigkeit -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="bg-red-600 aspect-h-9 aspect-w-16"></div>
          <div class="p-6">
            <h3 class="mb-2 font-semibold text-gray-900 text-lg">ÖPNV & Nachhaltigkeit</h3>
            <p class="text-gray-600">Nachhaltig in die Zukunft</p>
          </div>
        </div>

        <!-- Technik & Innovation -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="bg-red-600 aspect-h-9 aspect-w-16"></div>
          <div class="p-6">
            <h3 class="mb-2 font-semibold text-gray-900 text-lg">Technik & Innovation</h3>
            <p class="text-gray-600">Nächster Halt: Zukunft</p>
          </div>
        </div>

        <!-- Instandhaltung & Service -->
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="bg-red-600 aspect-h-9 aspect-w-16"></div>
          <div class="p-6">
            <h3 class="mb-2 font-semibold text-gray-900 text-lg">Instandhaltung & Service</h3>
            <p class="text-gray-600">Warum es bei uns läuft wie geschmiert</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SubpageHeader from '~/components/SubpageHeader.vue'
</script> 
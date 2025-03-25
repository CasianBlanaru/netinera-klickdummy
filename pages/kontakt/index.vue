<template>
  <div class="mx-auto px-4 py-12 container">
    <h1 class="mb-8 font-bold text-4xl">Kontakt</h1>
    <div class="gap-12 grid grid-cols-1 md:grid-cols-2">
      <!-- Kontaktinformationen -->
      <div class="space-y-6">
        <div>
          <h2 class="mb-4 font-semibold text-2xl">Kontaktieren Sie uns</h2>
          <p class="text-gray-600 text-lg">
            Haben Sie Fragen oder Anliegen? Wir sind für Sie da und freuen uns auf Ihre Nachricht.
          </p>
        </div>

        <div>
          <h3 class="mb-2 font-semibold">Adresse</h3>
          <p>Musterstraße 123<br>12345 Musterstadt</p>
        </div>

        <div>
          <h3 class="mb-2 font-semibold">Kontakt</h3>
          <p>Telefon: +49 123 456789<br>E-Mail: info@example.com</p>
        </div>

        <div>
          <h3 class="mb-2 font-semibold">Öffnungszeiten</h3>
          <p>Mo-Fr: 9:00 - 17:00 Uhr</p>
        </div>
      </div>

      <!-- Kontaktformular -->
      <form class="space-y-6">
        <div>
          <label for="name" class="block font-medium text-gray-700 text-sm">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            class="block shadow-sm mt-1 border-gray-300 focus:border-red-500 rounded-md focus:ring-red-500 w-full"
          />
        </div>

        <div>
          <label for="email" class="block font-medium text-gray-700 text-sm">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            class="block shadow-sm mt-1 border-gray-300 focus:border-red-500 rounded-md focus:ring-red-500 w-full"
          />
        </div>

        <div>
          <label for="message" class="block font-medium text-gray-700 text-sm">Nachricht</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            class="block shadow-sm mt-1 border-gray-300 focus:border-red-500 rounded-md focus:ring-red-500 w-full"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            class="inline-flex justify-center bg-red-600 hover:bg-red-700 shadow-sm px-4 py-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 font-medium text-white text-sm"
          >
            Nachricht senden
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
// Komponenten-Logik hier
</script> 
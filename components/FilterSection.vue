<template>
  <aside class="w-[474px] max-md:w-full" aria-label="Filter options">
    <section class="mb-10">
      <h2
        class="mb-5 font-bold text-stone-900 text-base leading-6 tracking-normal"
      >
        Jahr
      </h2>
      <div
        class="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter by year"
      >
        <button
          v-for="year in years"
          :key="year"
          class="bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm"
          :aria-pressed="selectedYear === year"
          @click="selectYear(year)"
        >
          {{ year }}
        </button>
      </div>
    </section>
    <section>
      <h2
        class="mb-5 font-bold text-stone-900 text-base leading-6 tracking-normal"
      >
        Unternehmen
      </h2>
      <div
        class="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter by company"
      >
        <button
          v-for="company in companies"
          :key="company"
          class="bg-gray-100 hover:bg-gray-200 px-4 py-1 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 text-sm"
          :aria-pressed="selectedCompany === company"
          @click="selectCompany(company)"
        >
          {{ company }}
        </button>
      </div>
    </section>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "FilterSection",
  setup() {
    const years = ["2025", "2024", "2023", "2022"];
    const companies = [
      "Netinera",
      "ODEG",
      "OHE",
      "Metronom",
      "erixx",
      "enno",
      "Länderbahn",
      "Vogtlandbahn",
      "Alex",
    ];

    const selectedYear = ref<string | null>(null);
    const selectedCompany = ref<string | null>(null);

    const selectYear = (year: string) => {
      selectedYear.value = selectedYear.value === year ? null : year;
    };

    const selectCompany = (company: string) => {
      selectedCompany.value =
        selectedCompany.value === company ? null : company;
    };

    return {
      years,
      companies,
      selectedYear,
      selectedCompany,
      selectYear,
      selectCompany,
    };
  },
});
</script>

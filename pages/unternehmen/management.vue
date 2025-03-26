<template>
  <div>
    <SubpageHeader
      title="Unser Management-Team"
      subtitle="Unternehmen"
      titleId="management-title"
      imageAlt="Netinera Management Team Illustration"
    />
    <div class="mx-auto px-4 py-12 container">
      <div class="max-w-none prose">
        <p class="mx-auto mb-18 max-w-[580px]">
          Unser Management-Team vereint langjährige Erfahrung im Mobilitätssektor mit 
          innovativem Denken. Gemeinsam gestalten wir die Zukunft des öffentlichen Verkehrs.
        </p>
        <ManagementTeam />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SubpageHeader from '~/components/SubpageHeader.vue';
import ManagementTeam from '~/components/ManagementTeam.vue';
</script> 
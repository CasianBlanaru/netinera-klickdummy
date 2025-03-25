<template>
  <section
    class="flex flex-col items-center mx-auto my-0 px-5 py-0 w-full max-w-[1012px]"
    aria-labelledby="testimonial-quote"
  >
    <blockquote
      id="testimonial-quote"
      class="mb-7 text-stone-900 max-sm:text-2xl max-md:text-2xl text-3xl text-center leading-10 tracking-tight max-sm:tracking-tight"
    >
      {{ quote }}
    </blockquote>

    <div
      v-if="!avatarUrl"
      class="bg-amber-500 mb-7 rounded-full w-[120px] max-sm:w-20 max-md:w-[100px] h-[120px] max-sm:h-20 max-md:h-[100px]"
      role="img"
      aria-label="Testimonial avatar placeholder"
    ></div>

    <img
      v-else
      :src="avatarUrl"
      :alt="`${name}'s profile picture`"
      class="bg-amber-500 mb-7 rounded-full w-[120px] max-sm:w-20 max-md:w-[100px] h-[120px] max-sm:h-20 max-md:h-[100px] object-cover"
    />

    <footer
      class="font-medium text-stone-900 max-sm:text-sm text-base text-center leading-6 tracking-normal"
    >
      <p>{{ name }}</p>
      <p>{{ role }}</p>
    </footer>
  </section>
</template>

<script setup lang="ts">
// Define props for the testimonial component
interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

// Set default props
withDefaults(defineProps<TestimonialProps>(), {
  quote:
    '"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. "',
  name: "Vorname Name",
  role: "Funktion",
  avatarUrl: undefined,
});
</script>
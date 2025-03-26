<template>
  <section class="flex flex-col items-center bg-[#F5F5F5] px-5 max-sm:px-4 max-md:px-4 py-20 max-sm:py-10 max-md:py-15 w-full min-h-screen">
    <h2 class="mb-8 font-inter font-bold text-[#1E1E1E] max-sm:text-2xl max-md:text-3xl text-4xl text-center leading-[150%] tracking-[-0.88px]">
      Leistungen
    </h2>
    <p class="mb-11 max-w-[578px] font-inter font-medium text-[#1E1E1E] max-sm:text-base max-md:text-lg text-xl text-center leading-[150%] tracking-[-0.22px]">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
    </p>

    <div class="relative w-full max-w-[1120px]">
      <swiper
        :modules="[Navigation, Pagination]"
        :slides-per-view="1"
        :space-between="24"
        :navigation="{
          prevEl: '.custom-swiper-button-prev',
          nextEl: '.custom-swiper-button-next',
        }"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        }"
        :breakpoints="{
          640: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }"
        class="w-full"
        aria-label="Leistungen Slider"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <div class="flex flex-col w-full">
            <div class="bg-orange-400 mb-10 rounded w-full h-[310px]" role="img" :aria-label="slide.title"></div>
            <div class="mb-4 font-inter font-medium text-[#1E1E1E] text-base leading-[150%] tracking-[-0.176px]">
              {{ slide.category }}
            </div>
            <h3 class="font-inter font-bold text-[#1E1E1E] text-2xl leading-[150%] tracking-[-0.456px]">
              {{ slide.title }}
            </h3>
          </div>
        </swiper-slide>

        <!-- Mobile Pagination -->
        <div class="md:hidden swiper-pagination"></div>
      </swiper>

      <!-- Custom Navigation Buttons -->
      <button 
        class="hidden top-1/2 left-0 absolute md:flex justify-center items-center bg-white hover:bg-gray-50 rounded-full focus:outline-none w-12 h-12 -translate-x-16 -translate-y-1/2 custom-swiper-button-prev"
        aria-label="Vorheriger Slide"
      >
        <img src="@/assets/icons/left-arrow.svg" alt="" aria-hidden="true" class="w-6 h-6" />
      </button>
      <button 
        class="hidden top-1/2 right-0 absolute md:flex justify-center items-center bg-white hover:bg-gray-50 rounded-full focus:outline-none w-12 h-12 -translate-y-1/2 translate-x-16 custom-swiper-button-next"
        aria-label="Nächster Slide"
      >
        <img src="@/assets/icons/right-arrow.svg" alt="" aria-hidden="true" class="w-6 h-6" />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    category: 'ÖPNV & NACHHALTIGKEIT',
    title: 'Nachhaltig in die Zukunft'
  },
  {
    category: 'TECHNIK & INNOVATION',
    title: 'Nächster Halt: Zukunft'
  },
  {
    category: 'INSTANDHALTUNG & SERVICE',
    title: 'Warum es bei uns läuft wie geschmiert'
  },
  {
    category: 'INSTANDHALTUNG & SERVICE',
    title: 'Warum es bei uns läuft wie geschmiert'
  }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}

/* Hide default swiper buttons */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  display: none !important;
}

/* Custom button styles */
.custom-swiper-button-prev,
.custom-swiper-button-next {
  z-index: 10;
  margin-top: -70px;
}

.custom-swiper-button-prev.swiper-button-disabled,
.custom-swiper-button-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

/* Custom pagination styles */
:deep(.swiper-pagination) {
  position: relative;
  bottom: 0;
  margin: 0;
  padding-top: 1rem;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background: #D1D5DB;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: #F97316;
}

@media (min-width: 768px) {
  :deep(.swiper-pagination) {
    display: none;
  }
}
</style> 
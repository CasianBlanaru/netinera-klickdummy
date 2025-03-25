<template>
  <div class="relative mx-auto w-full max-w-4xl">
    <swiper
      :modules="[SwiperNavigation, SwiperPagination]"
      :slides-per-view="1"
      :space-between="30"
      :navigation="{
        prevEl: '.custom-swiper-button-prev',
        nextEl: '.custom-swiper-button-next',
      }"
      :pagination="{
        clickable: true,
        el: '.swiper-pagination'
      }"
      class="w-full"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="w-full">
          <div class="flex justify-center items-center bg-orange-400 w-full aspect-[16/9] text-white text-lg">
            {{ slide.imageText }}
          </div>
          <p v-if="slide.caption" class="mt-4 text-gray-600 text-base">
            {{ slide.caption }}
          </p>
        </div>
      </swiper-slide>

      <!-- Pagination -->
      <div class="md:hidden swiper-pagination"></div>
    </swiper>

    <!-- Custom Navigation Buttons -->
    <button class="hidden top-1/2 left-0 absolute md:flex justify-center items-center bg-white hover:bg-gray-50 shadow-xs rounded-full focus:outline-none w-12 h-12 -translate-x-16 -translate-y-1/2 custom-swiper-button-prev">
      <img src="@/assets/icons/left-arrow.svg" alt="Previous" class="w-6 h-6" />
    </button>
    <button class="hidden top-1/2 right-0 absolute md:flex justify-center items-center bg-white hover:bg-gray-50 shadow-xs rounded-full focus:outline-none w-12 h-12 -translate-y-1/2 translate-x-16 custom-swiper-button-next">
      <img src="@/assets/icons/right-arrow.svg" alt="Next" class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation as SwiperNavigation, Pagination as SwiperPagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Slide {
  imageText: string
  caption?: string
}

const slides: Slide[] = [
  {
    imageText: 'Ich bin ein Bild',
    caption: 'Ich bin eine optionale Bildunterschrift'
  },
  {
    imageText: 'Ich bin ein Bild',
    caption: 'Ich bin eine optionale Bildunterschrift'
  },
  {
    imageText: 'Ich bin ein Bild',
    caption: 'Ich bin eine optionale Bildunterschrift'
  }
]
</script>

<style scoped>
.swiper {
  position: relative;
  padding: 0;
}

.swiper-slide {
  height: auto;
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
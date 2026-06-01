<template>
  <!--Hero section-->
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative text-center px-4 max-w-3xl">
      <h1 class="text-5xl md:text-6xl font-bold mb-4">Northern Province</h1>
      <p class="text-xl md:text-2xl text-green-200">Discover rolling hills, and mesmerizing mountain gorillas in northern Rwanda</p>
    </div>
  </section>

  <!-- Image gallery -->
  <section class="py-12 px-4 max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),_transparent_60%)] pointer-events-none"></div>
    <div class="relative z-10">
      <h2 class="text-2xl font-semibold mb-6 text-center text-green-900">Explore Northern Images</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="overflow-hidden rounded shadow cursor-pointer"
          @click="openModal(image)"
        >
          <img :src="image" :alt="`Northern image ${index + 1}`" class="w-full h-auto block" />
        </div>
      </div>

      <!-- Modal viewer -->
      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70" @click.self="closeModal">
        <div class="bg-white rounded overflow-hidden max-w-4xl w-full mx-4">
          <div class="flex justify-end p-2">
            <button @click="closeModal" class="text-gray-700 text-xl px-3">✕</button>
          </div>
          <div class="p-4">
            <img :src="selectedImage" alt="Selected" class="w-full h-auto block" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import img4 from '@/assets/img4.png'
import img5 from '@/assets/img5.png'
import img6 from '@/assets/img6.png'

export default {
  data() {
    return {
      showModal: false,
      selectedImage: '',
      heroImage: img4,
      galleryImages: [img4, img5, img6],
    }
  },
  methods: {
    openModal(src) {
      this.selectedImage = src
      this.showModal = true
      document.body.style.overflow = 'hidden'
    },
    closeModal() {
      this.showModal = false
      this.selectedImage = ''
      document.body.style.overflow = ''
    },
  },
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>

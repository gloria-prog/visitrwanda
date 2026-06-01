<template>
<section class="bg-white text-green-600 min-h-screen w-full mt-12 py-12">
	<h1 class="text-5xl font-bold py-8 text-center">These are the places you can visit</h1>

	<div class="max-w-6xl mx-auto px-4">
		<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
			<div v-for="img in images" :key="img" class="overflow-hidden rounded shadow cursor-pointer" @click="openModal(img)">
				<img :src="img" :alt="img" class="w-full h-40 object-cover block" />
			</div>
		</div>
	</div>

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
</section>
</template>

<script setup>
import { ref } from 'vue'

const images = [
  '/src/assets/img1.png',
  '/src/assets/img2.png',
  '/src/assets/img3.png',
  '/src/assets/img4.png',
  '/src/assets/img5.png',
  '/src/assets/img6.png',
  '/src/assets/img7.png',
  '/src/assets/img8.png',
  '/src/assets/img9.png',
  '/src/assets/img10.png',
  '/src/assets/image.png',
  '/src/assets/visit.png',
]

const showModal = ref(false)
const selectedImage = ref('')

function openModal(src) {
  selectedImage.value = src
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  showModal.value = false
  selectedImage.value = ''
  document.body.style.overflow = ''
}
</script>

<style scoped>
.cursor-pointer { cursor: pointer; }
</style>

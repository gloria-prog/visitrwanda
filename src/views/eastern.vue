<template>
<!--Hero section-->
<section class="relative h-screen bg-cover bg-center flex items-center justify-center text-white" style="background-image: url('/src/assets/img8.png');">
    <div class="absolute inset-0 bg-black/45"></div>
    <div class="relative text-center px-4 max-w-3xl">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Eastern Province</h1>
        <p class="text-xl md:text-2xl text-green-200">Discover the lush landscapes, lakes, and wildlife of eastern Rwanda</p>
    </div>
    </section>

    <section class="py-12 px-4 max-w-6xl mx-auto">
        <h2 class="text-2xl font-semibold mb-6 text-center">More Eastern Images</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="overflow-hidden rounded shadow-lg bg-white cursor-pointer" @click="openModal('/src/assets/img9.png')">
                <img src="/src/assets/img9.png" alt="Image 9" class="w-full h-auto block" />
            </div>
            <div class="overflow-hidden rounded shadow-lg bg-white cursor-pointer" @click="openModal('/src/assets/img10.png')">
                <img src="/src/assets/img10.png" alt="Image 10" class="w-full h-auto block" />
            </div>
        </div>
    </section>

    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4" @click.self="closeModal">
        <div class="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl">
            <div class="flex justify-between items-center p-4 border-b border-gray-200">
                <p class="text-lg font-semibold text-gray-800">Image preview</p>
                <button @click="closeModal" class="text-gray-700 text-2xl leading-none">✕</button>
            </div>
            <div class="p-4 bg-gray-50">
                <img :src="selectedImage" alt="Selected" class="w-full h-auto block rounded-lg" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
            selectedImage: ''
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
        }
    }
}
</script>

<style scoped>
.cursor-pointer { cursor: pointer; }
</style>

<template>
<!--Hero section-->
<section class="relative h-screen bg-cover bg-center flex items-center justify-center text-white" style="background-image: url('/src/assets/img1.png');">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="relative text-center px-4 max-w-3xl">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Kigali City</h1>
        <p class="text-xl md:text-2xl text-green-200">Discover the vibrant capital — culture, cuisine and cityscapes</p>
    </div>
</section>

<!-- Gallery -->
<section class="py-12 px-4 max-w-6xl mx-auto">
    <h2 class="text-2xl font-semibold mb-6 text-center">Kigali Images</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div class="overflow-hidden rounded shadow cursor-pointer" @click="openModal('/src/assets/img1.png')">
            <img src="/src/assets/img1.png" alt="img1" class="w-full h-auto block" />
        </div>
        <div class="overflow-hidden rounded shadow cursor-pointer" @click="openModal('/src/assets/img3.png')">
            <img src="/src/assets/img3.png" alt="img3" class="w-full h-auto block" />
        </div>
        <div class="overflow-hidden rounded shadow cursor-pointer" @click="openModal('/src/assets/img6.png')">
            <img src="/src/assets/img6.png" alt="img6" class="w-full h-auto block" />
        </div>
        <div class="overflow-hidden rounded shadow cursor-pointer" @click="openModal('/src/assets/img7.png')">
            <img src="/src/assets/img7.png" alt="img7" class="w-full h-auto block" />
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
            this.selectedImage = src;
            this.showModal = true;
            document.body.style.overflow = 'hidden';
        },
        closeModal() {
            this.showModal = false;
            this.selectedImage = '';
            document.body.style.overflow = '';
        }
    }
}
</script>

<style scoped>
.cursor-pointer { cursor: pointer; }
</style>
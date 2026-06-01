<template>
<!--Hero section-->
<section class="relative h-screen bg-cover bg-center flex items-center justify-center text-white" style="background-image: url('/src/assets/img7.png');">
    <div class="absolute inset-0 bg-black/45"></div>
    <div class="relative text-center px-4 max-w-3xl">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Western Province</h1>
        <p class="text-xl md:text-2xl text-green-200">Explore lakes, national parks, and vibrant culture of western Rwanda</p>
    </div>
</section>

<!-- Image gallery -->
<section class="py-12 px-4 max-w-4xl mx-auto rounded-3xl shadow-xl relative overflow-hidden bg-gradient-to-br from-white via-green-50 to-green-100">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_55%)] pointer-events-none"></div>
    <div class="relative z-10">
        <h2 class="text-2xl font-semibold mb-6 text-center text-green-900">Western Region Images</h2>

        <h3 class="text-xl font-medium mb-4 text-green-700">Click to view</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="overflow-hidden rounded shadow cursor-pointer" @click="openModal('/src/assets/img7.png')">
                <img src="/src/assets/img7.png" alt="img7" class="w-full h-auto block" />
            </div>
            <div class="overflow-hidden rounded shadow cursor-pointer" @click="openModal('/src/assets/img8.png')">
                <img src="/src/assets/img8.png" alt="img8" class="w-full h-auto block" />
            </div>
        </div>

        <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70" @click.self="closeModal">
            <div class="bg-white rounded overflow-hidden max-w-4xl w-full mx-4">/* Modal content */
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
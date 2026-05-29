<template>
        <div class="home">
                <!-- Hero -->
                <section
                        class="relative min-h-screen bg-cover bg-center flex items-center"
                        style="background-image: url('/src/assets/images/img1.png');">
                        <div class="absolute inset-0 bg-black/60"></div>
                        <div class="relative container mx-auto px-6 text-center text-white">
                                <h1 class="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">Discover Rwanda — Land of a Thousand Hills</h1>
                                <p class="mt-4 text-md sm:text-lg md:text-xl text-green-200 max-w-2xl mx-auto">From misty mountains and gorilla treks to vibrant city life, Rwanda offers unforgettable experiences rooted in community and conservation.</p>
                                <div class="mt-8 flex justify-center gap-4">
                                        <router-link to="/services" class="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-md font-semibold">Explore Services</router-link>
                                        <router-link to="/about" class="px-6 py-3 bg-white text-black rounded-md font-semibold">About Rwanda</router-link>
                                </div>
                        </div>
                </section>

                <!-- Key Features -->
                <section class="py-12 bg-white">
                        <div class="container mx-auto px-6">
                                <h2 class="text-2xl font-bold mb-6">Why Visit Rwanda?</h2>
                                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div class="p-6 border rounded-lg">
                                                <h3 class="font-semibold mb-2">Wildlife & Nature</h3>
                                                <p class="text-sm text-gray-600">See mountain gorillas, hike lush trails, and explore national parks with expert guides.</p>
                                        </div>
                                        <div class="p-6 border rounded-lg">
                                                <h3 class="font-semibold mb-2">Culture & Community</h3>
                                                <p class="text-sm text-gray-600">Engage with local artisans, dance to traditional rhythms, and support community-led projects.</p>
                                        </div>
                                        <div class="p-6 border rounded-lg">
                                                <h3 class="font-semibold mb-2">Safe & Sustainable</h3>
                                                <p class="text-sm text-gray-600">Experience responsible tourism in a country focused on conservation and development.</p>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- Regions Gallery -->
                <section class="py-12 bg-gray-50">
                        <div class="container mx-auto px-6">
                                <h2 class="text-2xl font-bold mb-6">Explore Regions</h2>
                                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <router-link to="/kigali" class="block rounded overflow-hidden shadow-lg bg-white">
                                                <img src="/src/assets/images/img2.png" alt="Kigali" class="w-full h-40 object-cover" />
                                                <div class="p-3">
                                                        <h5 class="font-semibold">Kigali</h5>
                                                        <p class="text-sm text-gray-600">Modern capital with rich history and culture.</p>
                                                </div>
                                        </router-link>

                                        <router-link to="/eastern" class="block rounded overflow-hidden shadow-lg bg-white">
                                                <img src="/src/assets/images/img3.png" alt="Eastern" class="w-full h-40 object-cover" />
                                                <div class="p-3">
                                                        <h5 class="font-semibold">Eastern</h5>
                                                        <p class="text-sm text-gray-600">Lakes, villages, and authentic local life.</p>
                                                </div>
                                        </router-link>

                                        <router-link to="/western" class="block rounded overflow-hidden shadow-lg bg-white">
                                                <img src="/src/assets/images/img4.png" alt="Western" class="w-full h-40 object-cover" />
                                                <div class="p-3">
                                                        <h5 class="font-semibold">Western</h5>
                                                        <p class="text-sm text-gray-600">Lakeside retreats and dramatic landscapes.</p>
                                                </div>
                                        </router-link>

                                        <router-link to="/southern" class="block rounded overflow-hidden shadow-lg bg-white">
                                                <img src="/src/assets/images/img5.png" alt="Southern" class="w-full h-40 object-cover" />
                                                <div class="p-3">
                                                        <h5 class="font-semibold">Southern</h5>
                                                        <p class="text-sm text-gray-600">Rolling hills and agricultural charm.</p>
                                                </div>
                                        </router-link>
                                </div>
                        </div>
                </section>

                <!-- Testimonials -->
                <section class="py-12 bg-white">
                        <div class="container mx-auto px-6">
                                <h2 class="text-2xl font-bold mb-6">What Visitors Say</h2>
                                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                        <div class="p-6 border rounded-lg">
                                                <p class="text-sm text-gray-700">"A breathtaking country — the gorilla trek changed my life."</p>
                                                <div class="mt-4 font-semibold">— Maria, Spain</div>
                                        </div>
                                        <div class="p-6 border rounded-lg">
                                                <p class="text-sm text-gray-700">"Friendly people, delicious food, and scenic hikes everywhere."</p>
                                                <div class="mt-4 font-semibold">— Daniel, Kenya</div>
                                        </div>
                                        <div class="p-6 border rounded-lg">
                                                <p class="text-sm text-gray-700">"A model for sustainable tourism — highly recommended."</p>
                                                <div class="mt-4 font-semibold">— Amina, USA</div>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- CTA -->
                <section class="py-12 bg-green-600 text-white">
                        <div class="container mx-auto px-6 text-center">
                                <h3 class="text-2xl font-bold mb-3">Ready to explore?</h3>
                                <p class="mb-6">Plan your visit, research project, or cultural exchange with our team.</p>
                                <router-link to="/contact" class="px-6 py-3 bg-white text-green-700 rounded-md font-semibold">Get In Touch</router-link>
                        </div>
                </section>
        </div>
</template>

<script>
export default {
        name: 'HomeView'
}
</script>

<style scoped>
.home .container { max-width: 1100px; }
</style>

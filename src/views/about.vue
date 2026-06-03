<template>
        <div class="about">
                <!-- Hero -->
                <section class="relative h-72 sm:h-96 bg-cover bg-center flex items-center"
                        style="background-image: url('/src/assets/img1.png');">
                        <div class="absolute inset-0 bg-black/50"></div>
                        <div class="relative container mx-auto px-6 text-white">
                                <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold">About Rwanda — People, Progress, Promise</h1>
                                <p class="mt-3 text-sm sm:text-lg text-green-200 max-w-2xl">A resilient nation honored for its conservation, community-driven growth, and vibrant culture. Learn why Rwanda captivates visitors and researchers alike.</p>
                        </div>
                </section>

                <!-- Mission & Values -->
                <section class="py-12 bg-white">
                        <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div>
                                        <h2 class="text-2xl font-bold mb-4">Our Mission</h2>
                                        <p class="text-gray-700 mb-4">We strive to showcase Rwanda’s natural beauty and cultural richness while promoting responsible tourism and community partnerships that create lasting, positive impact.</p>
                                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div class="p-4 border rounded">
                                                        <h4 class="font-semibold">Sustainability</h4>
                                                        <p class="text-sm text-gray-600">Programs that protect wildlife and empower communities.</p>
                                                </div>
                                                <div class="p-4 border rounded">
                                                        <h4 class="font-semibold">Education</h4>
                                                        <p class="text-sm text-gray-600">Support for local schools, research, and cultural exchange.</p>
                                                </div>
                                        </div>
                                </div>
                                <div>
                                        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80" alt="Rwanda community" class="rounded-lg shadow-lg w-full object-cover h-64 md:h-80" />
                                </div>
                        </div>
                </section>

                <!-- What to Expect -->
                <section class="py-12 bg-gray-50">
                        <div class="container mx-auto px-6">
                                <h3 class="text-2xl font-bold mb-6">What to Expect</h3>
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div class="p-6 bg-white rounded-lg shadow">
                                                <h4 class="font-semibold mb-2">Gorilla Trekking</h4>
                                                <p class="text-sm text-gray-600">Guided treks in Volcanoes National Park with responsible, low-impact practices.</p>
                                        </div>
                                        <div class="p-6 bg-white rounded-lg shadow">
                                                <h4 class="font-semibold mb-2">Cultural Immersion</h4>
                                                <p class="text-sm text-gray-600">Hands-on visits to villages, artisan workshops, and local performances.</p>
                                        </div>
                                        <div class="p-6 bg-white rounded-lg shadow">
                                                <h4 class="font-semibold mb-2">Research & Learning</h4>
                                                <p class="text-sm text-gray-600">Opportunities for collaboration with conservationists and universities.</p>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- Community Initiatives -->
                <section class="py-12 bg-white">
                        <div class="container mx-auto px-6">
                                <h3 class="text-2xl font-bold mb-6">Community Initiatives</h3>
                                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <div class="p-6 bg-gray-50 rounded-lg text-center">
                                                <div class="text-4xl mb-3">🌱</div>
                                                <h5 class="font-semibold">Conservation Programs</h5>
                                                <p class="text-sm text-gray-600 mt-2">Protecting habitats and wildlife through community-led initiatives.</p>
                                        </div>
                                        <div class="p-6 bg-gray-50 rounded-lg text-center">
                                                <div class="text-4xl mb-3">🎓</div>
                                                <h5 class="font-semibold">Education & Research</h5>
                                                <p class="text-sm text-gray-600 mt-2">Supporting schools and research collaborations with local universities.</p>
                                        </div>
                                        <div class="p-6 bg-gray-50 rounded-lg text-center">
                                                <div class="text-4xl mb-3">🏥</div>
                                                <h5 class="font-semibold">Health & Wellbeing</h5>
                                                <p class="text-sm text-gray-600 mt-2">Community health projects improving access to care.</p>
                                        </div>
                                        <div class="p-6 bg-gray-50 rounded-lg text-center">
                                                <div class="text-4xl mb-3">🎨</div>
                                                <h5 class="font-semibold">Local Arts & Crafts</h5>
                                                <p class="text-sm text-gray-600 mt-2">Empowering artisans with markets and training.</p>
                                        </div>
                                </div>
                        </div>
                </section>

                <!-- Impact & CTA -->
                <section class="py-12 bg-green-600 text-white">
                        <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                <div>
                                        <h4 class="text-2xl font-bold mb-4">Impact in Numbers</h4>
                                        <div class="grid grid-cols-3 gap-4 text-center">
                                                <div>
                                                        <div class="text-2xl font-extrabold">50+</div>
                                                        <div class="text-sm">Community Projects community projects</div>
                                                </div>
                                                <div>
                                                        <div class="text-2xl font-extrabold">10k+</div>
                                                        <div class="text-sm">Visitors Last Year</div>
                                                </div>
                                                <div>
                                                        <div class="text-2xl font-extrabold">100%</div>
                                                        <div class="text-sm">Community Engagement</div>
                                                </div>
                                        </div>
                                </div>
                                <div class="text-center md:text-right">
                                        <h4 class="text-xl font-semibold mb-2">Work With Us</h4>
                                        <p class="mb-4">Collaborate on research, conservation, or community projects.</p>
                                        <router-link to="/contact" class="inline-block px-6 py-3 bg-white text-green-700 rounded-md font-semibold">Contact Our Team</router-link>
                                </div>
                        </div>
                </section>
        </div>
</template>

<script>
export default {
        name: 'AboutView'
}
</script>

<style scoped>
.about .container { max-width: 1100px; }
</style>
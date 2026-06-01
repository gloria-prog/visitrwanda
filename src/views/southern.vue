<template>
<!--Hero section-->
<section class="relative h-screen bg-cover bg-center flex items-center justify-center text-white" style="background-image: url('/src/assets/img3.png');">
    <div class="absolute inset-0 bg-black/45"></div>
    <div class="relative text-center px-4 max-w-3xl">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Southern Province</h1>
        <p class="text-xl md:text-2xl text-green-200">Explore the heritage and cultural experience of the  southern Rwanda</p>
    </div>
</section>

<!-- Image gallery -->
<section class="py-12 px-4 max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
    <div class="relative z-10">
        <h2 class="text-2xl font-semibold mb-6 text-center text-green-900">Explore Southern Images</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div class="overflow-hidden rounded shadow">
                <img src="/src/assets/img1.png" alt="Image 1" class="w-full h-auto block" />
            </div>
            <div class="overflow-hidden rounded shadow">
                <img src="/src/assets/img2.png" alt="Image 2" class="w-full h-auto block" />
            </div>
            <div class="overflow-hidden rounded shadow">
                <img src="/src/assets/img3.png" alt="Image 3" class="w-full h-auto block" />
            </div>
        </div>
    </div>
</section>
</template>
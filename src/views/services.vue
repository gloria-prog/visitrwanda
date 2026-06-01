<template>
<!-- Hero -->
<section class="relative h-72 md:h-screen bg-cover bg-center flex items-center justify-center text-white" style="background-image: url('/src/assets/img3.png');">
    <div class="absolute inset-0 bg-black/45"></div>
    <div class="relative text-center px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-2">SERVICES</h1>
        <p class="text-md md:text-xl text-green-300">Tourism services we provide across Rwanda</p>
    </div>
</section>

<!-- Services list -->
<section class="py-12 px-4 max-w-5xl mx-auto">
    <div class="grid gap-8 md:grid-cols-2">
        <div class="space-y-6">
            <article>
                <h3 class="text-xl font-semibold mb-2">Guided Tours & Safaris</h3>
                <p class="text-gray-700">Experienced guides for gorilla trekking, wildlife safaris and scenic nature hikes across national parks.</p>
            </article>

            <article>
                <h3 class="text-xl font-semibold mb-2">Accommodation Booking</h3>
                <p class="text-gray-700">Hand-picked lodges, hotels and camps to suit all budgets, with booking and confirmation support.</p>
            </article>

            <article>
                <h3 class="text-xl font-semibold mb-2">Transportation & Transfers</h3>
                <p class="text-gray-700">Airport pickups, private cars, and multi-day transport arrangements with professional drivers.</p>
            </article>
        </div>

        <div class="space-y-6">
            <article>
                <h3 class="text-xl font-semibold mb-2">Cultural Experiences</h3>
                <p class="text-gray-700">Village visits, cultural performances, and community-led activities to experience Rwandan heritage.</p>
            </article>

            <article>
                <h3 class="text-xl font-semibold mb-2">Event & Group Planning</h3>
                <p class="text-gray-700">Tailored itineraries for groups, conferences, and special events with logistics support.</p>
            </article>

            <article>
                <h3 class="text-xl font-semibold mb-2">Travel Assistance</h3>
                <p class="text-gray-700">Visa guidance, travel insurance recommendations, and local emergency assistance when needed.</p>
            </article>
        </div>
    </div>

    <div class="mt-10 text-center">
        <a href="/contact" class="inline-block bg-green-600 text-white px-6 py-3 rounded shadow">Contact us to plan your trip</a>
    </div>
</section>
</template>
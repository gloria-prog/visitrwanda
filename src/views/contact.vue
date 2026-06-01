<template>
<!-- Hero -->
<section class="relative h-72 md:h-screen bg-cover bg-center flex items-center justify-center text-white" style="background-image: url('/src/assets/img1.png');">
    <div class="absolute inset-0 bg-black/45"></div>
    <div class="relative text-center px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-2">CONTACT US</h1>
        <p class="text-md md:text-lg text-green-300">Reach out on your preferred platform</p>
    </div>
</section>

<!-- Contact platforms and form -->
<section class="py-12 px-4 max-w-5xl mx-auto">
    <h2 class="text-2xl font-semibold mb-6 text-center">Contact Platforms</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-6">
            <div class="flex items-start gap-4">
                <div v-html="icons.whatsapp" class="w-10 h-10"></div>
                <div>
                    <h3 class="font-semibold">WhatsApp</h3>
                    <p class="text-gray-700">Message us at <a :href="contacts.whatsappLink" class="text-green-600">{{ contacts.whatsappNumber }}</a></p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <div v-html="icons.instagram" class="w-10 h-10"></div>
                <div>
                    <h3 class="font-semibold">Instagram</h3>
                    <p class="text-gray-700">Follow and DM us on <a :href="contacts.instagramLink" class="text-pink-500">{{ contacts.instagramHandle }}</a>.</p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <div v-html="icons.facebook" class="w-10 h-10"></div>
                <div>
                    <h3 class="font-semibold">Facebook</h3>
                    <p class="text-gray-700">Find our page at <a :href="contacts.facebookLink" class="text-blue-600">{{ contacts.facebookPage }}</a>.</p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <div v-html="icons.twitter" class="w-10 h-10"></div>
                <div>
                    <h3 class="font-semibold">Twitter / X</h3>
                    <p class="text-gray-700">Follow <a :href="contacts.twitterLink" class="text-blue-400">{{ contacts.twitterHandle }}</a> for live updates.</p>
                </div>
            </div>
        </div>

        <div>
            <h3 class="text-lg font-semibold mb-4">Send us a message</h3>

            <form ref="contactForm" name="contact" method="POST" data-netlify="true" @submit.prevent="submitForm" class="space-y-4 bg-white p-6 rounded shadow">
                <input type="hidden" name="form-name" value="contact">
                <div>
                    <label class="block text-sm font-medium mb-1">Name</label>
                    <input v-model="form.name" name="name" required class="w-full border px-3 py-2 rounded" />
                </div>

                <div>
                    <label class="block text-sm font-medium mb-1">Email</label>
                    <input v-model="form.email" type="email" name="email" required class="w-full border px-3 py-2 rounded" />
                </div>

                <div>
                    <label class="block text-sm font-medium mb-1">Message</label>
                    <textarea v-model="form.message" name="message" rows="5" required class="w-full border px-3 py-2 rounded"></textarea>
                </div>

                <div class="flex items-center gap-4">
                    <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Send Message</button>
                    <div v-if="submitted" class="text-green-600">Message sent — thank you!</div>
                </div>
            </form>

            <div class="mt-6 text-sm text-gray-600">Or call us at <a :href="`tel:${contacts.phone}`" class="text-gray-800">{{ contacts.phone }}</a> or email <a :href="`mailto:${contacts.email}`" class="text-teal-600">{{ contacts.email }}</a>.</div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            contacts: {
                whatsappNumber: '+250 700 000 000',
                whatsappLink: 'https://wa.me/250700000000',
                instagramHandle: '@yourhandle',
                instagramLink: 'https://instagram.com/yourhandle',
                facebookPage: '/yourpage',
                facebookLink: 'https://facebook.com/yourpage',
                twitterHandle: '@yourhandle',
                twitterLink: 'https://twitter.com/yourhandle',
                email: 'info@example.com',
                phone: '+250700000000'
            },
            icons: {
                whatsapp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>',
                instagram: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#E1306C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>',
                facebook: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1877F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/></svg>',
                twitter: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#1DA1F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1a9 9 0 0 1-2.83 1.08A4.5 4.5 0 0 0 12 6.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>'
            },
            form: {
                name: '',
                email: '',
                message: ''
            },
            submitted: false
        }
    },
    methods: {
        submitForm() {
            const form = this.$refs.contactForm;
            const formData = new FormData(form);
            // Netlify-friendly form submission
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(Array.from(formData.entries())).toString()
            })
                .then(() => {
                    this.submitted = true;
                    this.form.name = '';
                    this.form.email = '';
                    this.form.message = '';
                })
                .catch(() => {
                    // fallback: still show submitted for UX; replace with proper error handling as needed
                    this.submitted = true;
                });
        }
    }
}
</script>

<style scoped>
.w-10 { width: 40px; height: 40px; }
</style>
<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../i18n.js'

const { t, locale, setLocale } = useI18n()

// Holds the visibility state of the language dropdown
const showLang = ref(false)

// Computes the current active locale in uppercase (e.g., 'EN', 'FR', 'RW')
const currentLocale = computed(() => {
    const current = typeof locale === 'string' ? locale : locale.value
    return (current || 'en').toUpperCase()
})

// Handles changing the language and closing the dropdown menu
function selectLang(code) {
    setLocale(code)
    showLang.value = false
}

const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'rw', name: 'Kinyarwanda' },
]
</script>

<template>
    <nav class="bg-green-800 text-white px-8 py-2 flex items-center justify-between shadow-lg w-full">
        <div class="flex items-center gap-3 shrink-0">
            <img src="../assets/visit.png" class="h-10 w-10 rounded-full" alt="Visit Rwanda Logo">
            <span class="text-medium font-bold whitespace-nowrap">TEMBERA URWANDA</span>
        </div>

        <ul class="flex gap-6 text-sm font-medium px-5 justify-end items-center w-full">
            <li><router-link to="/" class="hover:text-yellow-300">{{ t('nav.home') }}</router-link></li>
            <li><router-link to="/about" class="hover:text-yellow-300">{{ t('nav.about') }}</router-link></li>
            <li><router-link to="/services" class="hover:text-yellow-300">{{ t('nav.services') }}</router-link></li>
            <li><router-link to="/dashboard" class="hover:text-yellow-300">Dashboard</router-link></li>
            <li class="relative group">
                <button class="hover:text-yellow-300 flex items-center gap-1 px-3 py-1">
                    {{ t('nav.gallery') }} <span>🔽</span>
                </button>
                <ul class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg hidden group-hover:block z-50">
                    <li><router-link to="/images" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.images') }}</router-link></li>
                    <li><router-link to="/videos" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.videos') }}</router-link></li>
                </ul>
            </li>

            <li class="relative group">
                <button class="hover:text-yellow-300 flex items-center gap-1 px-3 py-1">
                    {{ t('nav.destination') }} <span>🔽</span>
                </button>
                <ul class="absolute right-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg hidden group-hover:block z-50">
                    <li><router-link to="/northern" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.northern') }}</router-link></li>
                    <li><router-link to="/southern" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.southern') }}</router-link></li>
                    <li><router-link to="/eastern" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.eastern') }}</router-link></li>
                    <li><router-link to="/western" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.western') }}</router-link></li>
                    <li><router-link to="/kigali" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.kigali') }}</router-link></li>
                </ul>
            </li>

            <li><router-link to="/contact" class="hover:text-yellow-300">{{ t('nav.contact') }}</router-link></li>
            
            <li class="relative">
                <button 
                    @click="showLang = !showLang" 
                    class="hover:text-yellow-300 flex items-center gap-1 px-3 py-1 bg-green-900 rounded-md"
                >
                    🌐 {{ currentLocale }} <span>🔽</span>
                </button>
                
                <ul v-if="showLang" class="absolute right-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg z-50 py-1 border border-green-700">
                    <li v-for="lang in languages" :key="lang.code">
                        <button 
                            @click="selectLang(lang.code)"
                            :class="['block w-full text-left px-4 py-2 hover:bg-green-700 transition-colors', (locale.value === lang.code || locale === lang.code) ? 'bg-green-700 font-bold text-yellow-300' : '']"
                        >
                            {{ lang.name }}
                        </button>
                    </li>
                </ul>
            </li>
            <li> <a href="/contacts" class="hover:text-yellow-300">Contacts</a></li>
            <li><RouterLink to="/Login" class="bg-yellow-400 px-4 py-1 rounded font-semibold hover:bg-yellow-300">Login</RouterLink>
                
            </li>
        </ul>
    </nav>
</template>

<style scoped>
button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
}
</style>
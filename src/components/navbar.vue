
<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../i18n.js'

const { t, locale, setLocale } = useI18n()
const showLang = ref(false)

const currentLocale = computed(() => (locale.value || 'en').toUpperCase())

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
    <nav class="bg-green-800 text-white px-8 py-2 flex items-center justify-between shadow-lg w-full" >
        <img src="../assets/visit.png" class="h-10 w-10 rounded-full" >
        <span class="text-medium font-bold">TEMBERA URWANDA</span>
        <ul class="flex gap-8 text-sm font-medium w-full px-5 justify-end items-center">
            <li><router-link to="/" class="hover:text-yellow-300">{{ t('nav.home') }}</router-link></li>
            <li><router-link to="/about" class="hover:text-yellow-300">{{ t('nav.about') }}</router-link></li>
            <li><router-link to="/services" class="hover:text-yellow-300">{{ t('nav.services') }}</router-link></li>
            <li class="relative group">
                <button class="hover:text-yellow-300 flex items-center gap-1 px-3 py-1">
                    {{ t('nav.gallery') }}<span> 🔽</span>
                </button>
                <ul class="absolute left-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <li><router-link to="/images" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.images') }}</router-link></li>
                    <li><router-link to="/videos" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.videos') }}</router-link></li>
                </ul>
            </li>
            <li class="relative group">
                <button class="hover:text-yellow-300 flex items-center gap-1 px-3 py-1">
                    {{ t('nav.destination') }}<span> 🔽</span>
                </button>
                <ul class="absolute right-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <li><router-link to="/northern" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.northern') }}</router-link></li>
                    <li><router-link to="/southern" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.southern') }}</router-link></li>
                    <li><router-link to="/eastern" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.eastern') }}</router-link></li>
                    <li><router-link to="/western" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.western') }}</router-link></li>
                    <li><router-link to="/kigali" class="block px-4 py-2 hover:bg-green-700">{{ t('nav.kigali') }}</router-link></li>
                </ul>
            </li>
            <li><router-link to="/contact" class="hover:text-yellow-300">{{ t('nav.contact') }}</router-link></li>
            
            <!-- Language Selector -->
            <li class="relative group">
                <button class="hover:text-yellow-300 flex items-center gap-1 px-3 py-1">
                    🌐 {{ locale.toUpperCase() }} <span>🔽</span>
                </button>
                <ul class="absolute right-0 mt-2 w-40 bg-green-800 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <li v-for="lang in languages" :key="lang.code">
                        <button 
                            @click="setLocale(lang.code)"
                            :class="['block w-full text-left px-4 py-2 hover:bg-green-700', locale === lang.code ? 'bg-green-700 font-semibold' : '']"
                        >
                            {{ lang.name }}
                        </button>
                    </li>
                </ul>
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
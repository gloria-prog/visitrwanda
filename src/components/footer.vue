<script setup>
import { useI18n } from '../i18n.js'

const { t } = useI18n()
</script>

<template>
<footer class="bg-green-800 text-white px-8 py-10 mt-10">
<div class="flex flex-wrap justify-between gap-8">
    <!--this is about footer-->

<div>
<h3 class="text-yellow-300 font-bold text-1g mb-3">TEMBERA U RWANDA</h3>
<p class="text-sm text-green-200">Discover the beauty of a thousand hills</p>
</div>
<!--Quick links-->
<div>
    <h3 class="text-yellow-300 font-bold text-1g mb-3">{{ t('footer.quickLinks') }}</h3>
    <ul class="space-y-2 text-sm">
        <li>
            <RouterLink to="/Home" class="hover:text-yellow-300">{{ t('nav.home') }}</RouterLink><br>
        </li>
        <li>    
            <RouterLink to="/About" class="hover:text-yellow-300">{{ t('nav.about') }}</RouterLink><br>
        </li>
        <li>    
             <RouterLink to="/Services" class="hover:text-yellow-300">{{ t('nav.services') }}</RouterLink><br>
        </li>
        <li>     
             <RouterLink to="/Contact" class="hover:text-yellow-300">{{ t('nav.contact') }}</RouterLink><br>
        </li>
    </ul>
</div>
<!--Destination-->
<div>
    <h3 class="text-yellow-300 font-bold text-1g mb-3">{{ t('footer.destination') }}</h3>
    <ul class="space-y-2 text-sm">
        <li>
            <RouterLink to="/northern"class="hover:bg-yellow-300">{{ t('nav.northern') }}</RouterLink><br>
        </li>
        <li>    
            <RouterLink to="/southern"class="hover:bg-yellow-300">{{ t('nav.southern') }}</RouterLink><br>
        </li>
        <li>    
            <RouterLink to="/western"class="hover:bg-yellow-300">{{ t('nav.western') }}</RouterLink><br>
        </li>
        <li>    
            <RouterLink to="/eastern"class="hover:bg-yellow-300">{{ t('nav.eastern') }}</RouterLink><br>
        </li>
        <li>    
            <RouterLink to="/kigali"class="hover:bg-yellow-300">{{ t('nav.kigali') }}</RouterLink><br>
        </li>
    </ul>
</div>
<!--contact info-->
<div>
    <h3 class="text-yellow font-bold text-1g mb-3">{{ t('footer.contact') }}</h3>
    <ul class="space-y-2 text-green-300">
        <li>ahantunyaburanga</li>
        <li>+250791456810</li>
        <li>kagugu kigali rwanda</li>
    </ul>
</div>
</div>

<!-- place for copy right -->
 <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green-300"></div>
 <p class="text-center">2025 Visit Rwanda.All rights reserved</p>
 <h6>Done by Munyaneza Gloria</h6>
</footer>
</template>
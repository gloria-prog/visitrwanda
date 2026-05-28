<script setup lang="ts">
import { useLink } from 'vue-router'
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
    <h3 class="text-yellow-300 font-bold text-1g mb-3">Quick links</h3>
    <ul class="space-y-2 text-sm">
        <li>
            <RouterLink to="/Home" class="hover:text-yellow-300">Home</RouterLink><br>
        </li>
        <li>    
            <RouterLink to="/About" class="hover:text-yellow-300">About</RouterLink><br>
        </li>
        <li>    
             <RouterLink to="/Services" class="hover:text-yellow-300">Services</RouterLink><br>
        </li>
        <li>     
             <RouterLink to="/Contact" class="hover:text-yellow-300">Contact</RouterLink><br>
        </li>
    </ul>
</div>
<!--Destination-->
<div>
    <h3 class="text-yellow-300 font-bold text-1g mb-3">Destination</h3>
    <ul class="space-y-2 text-sm">
        <li>
            <RouterLink to="/northern"class="hover:bg-yellow-300">Northern province</RouterLink><br>
        </li>
        <li>    
            <RouterLink to="/southern"class="hover:bg-yellow-300">Southern Province</RouterLink><br>
        </li>
        <li>    
            <RouterLink to="/western"class="hover:bg-yellow-300">Western province</RouterLink><br>
        </li>
        <li>    
            <RouterLink to="/eastern"class="hover:bg-yellow-300">Eastern province</RouterLink><br>
        </li>
        <li>    
            <RouterLink to="/kigali"class="hover:bg-yellow-300">Kigali city</RouterLink><br>
        </li>
    </ul>
</div>
<!--contact info-->
<div>
    <h3 class="text-yellow font-bold text-1g mb-3">Contact</h3>
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
</footer>
</template>
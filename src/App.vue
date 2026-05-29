<script setup>
import { RouterView } from 'vue-router'
import navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
import northern from './views/northern.vue';
import southern from './views/southern.vue';
import western from './views/western.vue';
import eastern from './views/eastern.vue';
import videos from './views/videos.vue';

</script>

<template>
  <navbar/>
   <RouterView/>
  <Footer/>
  
</template>
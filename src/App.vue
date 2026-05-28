<script setup>
import { RouterView } from 'vue-router'
import navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <navbar/>
   <RouterView/>
  <Footer/>
  
</template>
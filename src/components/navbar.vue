<script setup>
import logo from '../assets/logo.jpg'
</script>
<template>
<div class="bg-blue-500 text-white p-4">
  <div class="flex items-center gap-2">
    <img 
      :src="logo" 
      alt="logo"
      class="w-10 h-10 rounded-full"
    >
    <h1 class="font-bold">
      Tembera Urwanda
    </h1>
  </div>
  <div class="flex gap-4 mt-3">
    <a href="#">Home</a>
    <a href="#">About</a>
    <details>
      <summary>Media</summary>
      <div class="ml-3">
        <p>Images</p>
        <p>Videos</p>
      </div>
    </details>
    <a href="#">Contact</a>
  </div>
</div>
</template>
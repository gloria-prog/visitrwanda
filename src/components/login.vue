<template>
  <div class="min-h-screen flex items-center justify-center bg-green-100 px-4">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold text-green-400 mb-7 text-center">Login</h2>

      <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
        <label class="flex flex-col gap-2 text-sm text-gray-700">
          <span>Email</span>
          <input
            v-model="email"
            type="email"
            placeholder="please enter your email"
            required
            class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-700"
          />
        </label>

        <label class="flex flex-col gap-2 text-sm text-gray-700">
          <span>Password</span>
          <input
            v-model="password"
            type="password"
            placeholder="please enter your password"
            required
            class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-700"
          />
        </label>

        <button
          type="submit"
          class="bg-green-800 text-white py-2 rounded hover:bg-green-700 font-semibold"
        >
          Sign in
        </button>
      </form>

      <p class="text-center text-sm mt-4 text-gray-500">
        Don't have an account? Please create it here
        <router-link to="/register" class="text-green-600 hover:underline">Register</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

function handleSubmit() {
  if (!email.value || !password.value) return
  console.log('Login submitted', email.value)
  router.push('/dashboard')
}
</script>

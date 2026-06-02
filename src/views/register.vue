<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
      <h2 class="text-2xl font-bold text-green-700 mb-6 text-center">Create Account</h2>

      <form @submit.prevent="handleRegister" class="grid gap-4">
        <label class="flex flex-col text-sm text-gray-700">
          <span>Full Name</span>
          <input v-model="fullName" type="text" placeholder="John Doe" required class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600" />
        </label>

        <label class="flex flex-col text-sm text-gray-700">
          <span>Email</span>
          <input v-model="email" type="email" placeholder="you@example.com" required class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600" />
        </label>

        <label class="flex flex-col text-sm text-gray-700">
          <span>Phone</span>
          <input v-model="phone" type="tel" placeholder="+250 788 123 456" class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600" />
        </label>

        <label class="flex flex-col text-sm text-gray-700">
          <span>Age</span>
          <input v-model="age" type="number" min="13" placeholder="18" class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600" />
        </label>

        <label class="flex flex-col text-sm text-gray-700">
          <span>Gender</span>
          <select v-model="gender" class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600">
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </label>

        <label class="flex flex-col text-sm text-gray-700">
          <span>Password</span>
          <input v-model="password" type="password" placeholder="••••••••" required class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600" />
        </label>

        <label class="flex flex-col text-sm text-gray-700">
          <span>Confirm Password</span>
          <input v-model="confirmPassword" type="password" placeholder="••••••••" required class="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-green-600" />
        </label>

        <button type="submit" class="bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 font-semibold">
          Register
        </button>
      </form>

      <p class="text-center text-sm text-gray-600 mt-5">
        Already have an account?
        <router-link to="/login" class="text-green-700 hover:underline">Sign in</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fullName = ref('')
const email = ref('')
const gender = ref('')
const password = ref('')
const confirmPassword = ref('')
const age = ref('')
const phone = ref('')

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match.')
    return
  }

  // Add actual registration logic here
  alert('Registration submitted successfully!')
}
</script>
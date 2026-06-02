<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const activeMenu = ref('overview')
const router = useRouter()

const stats = [
  { label: 'Visitors', value: '12.4K', change: '+8.4%' },
  { label: 'Bookings', value: '320', change: '+12.5%' },
  { label: 'Revenue', value: '$18.2K', change: '+6.8%' },
  { label: 'Feedbacks', value: '48', change: '+3.3%' }
]

const quickActions = [
  { title: 'Add New Tour', description: 'Create a new tour listing quickly.' },
  { title: 'Review Requests', description: 'Respond to pending customer requests.' },
  { title: 'Update Offers', description: 'Refresh your offers and promotions.' }
]

const recentActivities = [
  { time: 'Just now', activity: 'New booking received from Kigali.' },
  { time: '1h ago', activity: 'Service package details updated.' },
  { time: 'Today', activity: 'Customer support ticket closed.' }
]

const logout = () => {
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="flex flex-col md:flex-row">
      <aside class="w-full md:w-72 bg-green-800 text-white flex flex-col">
        <div class="p-6 text-2xl font-bold border-b border-green-700">Dashboard</div>

        <nav class="flex-1 p-4 space-y-2">
          <button
            type="button"
            @click="activeMenu = 'overview'"
            :class="activeMenu === 'overview' ? 'block w-full text-left px-4 py-3 rounded bg-green-700' : 'block w-full text-left px-4 py-3 rounded hover:bg-green-700/80'"
          >
            Overview
          </button>
          <button
            type="button"
            @click="activeMenu = 'settings'"
            :class="activeMenu === 'settings' ? 'block w-full text-left px-4 py-3 rounded bg-green-700' : 'block w-full text-left px-4 py-3 rounded hover:bg-green-700/80'"
          >
            Settings
          </button>
        </nav>

        <button @click="logout" class="w-full bg-red-600 hover:bg-red-500 px-4 py-3 rounded m-4 font-semibold">
          Logout
        </button>
      </aside>

      <main class="flex-1 overflow-y-auto p-6 md:p-8">
        <div class="max-w-6xl mx-auto space-y-6">
          <section class="rounded-3xl bg-white p-8 shadow-xl border border-gray-200">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 class="text-3xl font-bold text-gray-900">Welcome back, Admin</h1>
                <p class="mt-2 text-gray-600">Your dashboard is ready. Review activity, bookings, and performance metrics below.</p>
              </div>
              <div class="inline-flex items-center gap-3">
                <button class="rounded-full bg-green-800 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700">New Report</button>
                <button class="rounded-full border border-green-800 px-5 py-3 text-sm font-semibold text-green-800 hover:bg-green-50">Export</button>
              </div>
            </div>
          </section>

          <section class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div v-for="item in stats" :key="item.label" class="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
              <p class="text-sm uppercase tracking-wide text-gray-500">{{ item.label }}</p>
              <p class="mt-4 text-3xl font-bold text-gray-900">{{ item.value }}</p>
              <p class="mt-2 text-sm text-green-600">{{ item.change }} this month</p>
            </div>
          </section>

          <section class="grid gap-6 xl:grid-cols-[2fr_1fr]">
            <div class="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
              <div class="flex items-center justify-between">
                <h2 class="text-xl font-semibold text-gray-900">Overview</h2>
                <span class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">{{ activeMenu === 'overview' ? 'Overview' : 'Settings' }}</span>
              </div>
              <p class="mt-3 text-gray-600">Monitor your latest performance and take action from a single place.</p>

              <div v-if="activeMenu === 'overview'" class="mt-6 space-y-4">
                <div class="grid gap-4 md:grid-cols-2">
                  <div class="rounded-3xl bg-green-50 p-4">
                    <h3 class="text-sm font-semibold text-green-800">Recent activity</h3>
                    <ul class="mt-3 space-y-3 text-sm text-gray-700">
                      <li v-for="activity in recentActivities" :key="activity.time" class="rounded-2xl bg-white p-4 border border-gray-200">
                        <p class="text-sm font-semibold text-gray-900">{{ activity.time }}</p>
                        <p class="mt-1">{{ activity.activity }}</p>
                      </li>
                    </ul>
                  </div>
                  <div class="rounded-3xl bg-white p-4 border border-gray-200">
                    <h3 class="text-sm font-semibold text-gray-900">Quick actions</h3>
                    <div class="mt-4 space-y-3">
                      <div v-for="action in quickActions" :key="action.title" class="rounded-2xl bg-gray-50 p-4">
                        <p class="font-semibold text-gray-900">{{ action.title }}</p>
                        <p class="mt-1 text-sm text-gray-600">{{ action.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-else class="mt-6 space-y-4">
                <div class="rounded-3xl bg-gray-50 p-5 border border-gray-200">
                  <h3 class="text-sm font-semibold text-gray-900">Account settings</h3>
                  <p class="mt-2 text-sm text-gray-600">Manage your profile, notifications, and preferences here.</p>
                </div>
                <div class="rounded-3xl bg-gray-50 p-5 border border-gray-200">
                  <h3 class="text-sm font-semibold text-gray-900">Security</h3>
                  <p class="mt-2 text-sm text-gray-600">Update your password, enable 2FA, and review login activity.</p>
                </div>
              </div>
            </div>

            <div class="rounded-3xl bg-white p-6 shadow-sm border border-gray-200">
              <h2 class="text-xl font-semibold text-gray-900">Support</h2>
              <p class="mt-3 text-gray-600">Need help? Contact support or review the dashboard documentation.</p>
              <div class="mt-6 space-y-4">
                <div class="rounded-3xl bg-green-50 p-4">
                  <p class="font-semibold text-green-900">Tip</p>
                  <p class="mt-1 text-sm text-gray-700">Switch to the Settings panel to configure how data appears on your dashboard.</p>
                </div>
                <button class="w-full rounded-full bg-green-800 px-4 py-3 text-white hover:bg-green-700">Open support center</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  </div>
</template>
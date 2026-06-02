import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/home.vue";
import About from "../views/about.vue";
import Login from "../components/login.vue";
import Contact from "../views/contact.vue";
import Services from "../views/services.vue";
import Eastern from "../views/eastern.vue";
import Northern from "../views/northern.vue";
import Images from "../views/images.vue";
import Videos from "../views/videos.vue";
import Southern from '../views/southern.vue';
import Western from '../views/western.vue';
import Kigali from '../views/kigali.vue';
import Register from '../views/register.vue';
import Dashboard from '../views/Dashboard/dashboard.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },

  {
    path: '/southern',
    name: 'southern',
    component: Southern
  },
  {
    path: '/western',
    name: 'western',
    component: Western
  },
  {
    path: '/northern',
    name: 'northern',
    component: Northern
  },
  {
    path: '/eastern',
    name: 'eastern',
    component: Eastern
  },
  {
    path: '/videos',
    name: 'videos',
    component: Videos
  },
  {
    path: '/images',
    name: 'images',
    component: Images
  },
  {
    path: '/kigali',
    name: 'kigali',
    component: Kigali
  },











]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import About from '../components/About.vue'
import Recommender from '../components/Recommender.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/recommender',
    name: 'Recommender',
    component: Recommender
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

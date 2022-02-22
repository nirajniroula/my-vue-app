import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import protectedRoute from '../middlewares/protected'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/my-vue-app/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/my-vue-app/about',
    name: 'About',
    component: About,
    // beforeEnter: protectedRoute,
  },
  {
    path: '/my-vue-app/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/my-vue-app/contact',
    name: 'Contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

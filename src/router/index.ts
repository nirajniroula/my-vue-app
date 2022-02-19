import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import protectedRoute from '../middlewares/protected'
import Home from '../views/Home.vue'
import PageTwo from '../views/pageTwo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/my-vue-app/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/my-vue-app/pagetwo',
    name: 'PageTwo',
    component: PageTwo,
    beforeEnter: protectedRoute,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

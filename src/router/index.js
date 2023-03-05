import { createRouter, createWebHistory } from 'vue-router'
import CountryList from '../views/CountryList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CountryList
    },
    {
      path: '/details/:country',
      name: 'Country Details',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CountryDetails.vue')
    }
  ]
})

export default router

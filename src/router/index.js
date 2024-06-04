import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/admin',
      name: 'login',
      component: () => import('../views/backend/LoginView.vue')
    }
  ]
})

export default router

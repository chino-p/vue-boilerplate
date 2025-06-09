import { createRouter, createWebHistory } from 'vue-router'
import { useCookies } from '@vueuse/integrations/useCookies'
import { routes } from '@/router/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const cookies = useCookies()
  const token = cookies.get('Authorization')
  if (to.path !== '/login' && !token) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router

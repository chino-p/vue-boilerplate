import { createRouter, createWebHistory } from 'vue-router'
import { useCookies } from '@vueuse/integrations/useCookies'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/layouts/AuthenticatedLayout.vue'),
      children: [
        {
          path: '/profile',
          name: 'profile',
          component: () => import('@/views/ProfileView.vue'),
        },
        {
          path: '/dashboard/analytics',
          name: 'analytics',
          component: () => import('@/views/AnalyticView.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const cookies = useCookies()
  const token = cookies.get('token')
  console.log('token', token)
  // 如果访问需要登录的页面（除了 /login）且没有 token，则跳转登录
  if (to.path !== '/login' && !token) {
    next({ path: '/login' })
  } else {
    next()
  }
})

export default router

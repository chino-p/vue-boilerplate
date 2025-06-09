import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginPage.vue'),
    meta: { show: false },
  },
  {
    path: '/',
    component: () => import('@/layouts/AuthenticatedLayout.vue'),
    redirect: '/home',
    children: [
      {
        name: 'Home',
        path: '/home',
        component: () => import('@/views/HomeView.vue'),
        meta: { title: '主页', icon: 'lucide-house' },
      },
    ],
  },
  {
    path: '/contacts',
    component: () => import('@/layouts/AuthenticatedLayout.vue'),
    children: [
      {
        name: 'User',
        path: '/dashboard/analytics',
        component: () => import('@/views/contact/UserPage.vue'),
        meta: { title: '成员管理', icon: 'lucide-house' },
      },
      {
        name: 'Reports',
        path: '/dashboard/reports',
        component: () => import('@/views/contact/DepartmentPage.vue'),
        meta: { title: '部门管理', icon: 'lucide-house' },
      },
    ],
    meta: { title: '通讯录', icon: 'lucide-layout-panel-top' },
  },
  {
    name: 'Profile',
    path: '/profile',
    component: () => import('@/layouts/AuthenticatedLayout.vue'),
    children: [
      {
        path: '/profile/',
        component: () => import('@/views/contact/UserPage.vue'),
        meta: { title: '个人页面', icon: 'lucide-user' },
      },
    ],
  },
  // {
  //   name: 'Settings',
  //   path: '/settings',
  //   component: () => import('@/views/contact/UserPage.vue'),
  //   meta: { title: '设置', icon: 'lucide-settings' },
  // },
  // {
  //   name: 'Help',
  //   path: '/help',
  //   component: () => import('@/views/contact/UserPage.vue'),
  //   meta: { title: '帮助', icon: 'lucide-circle-help' },
  // },
]

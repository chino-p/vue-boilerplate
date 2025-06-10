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
        path: '/contacts/user',
        component: () => import('@/views/contact/UserPage.vue'),
        meta: { title: '用户管理', icon: 'lucide-house' },
      },
      {
        name: 'Department',
        path: '/contacts/department',
        component: () => import('@/views/contact/DepartmentPage.vue'),
        meta: { title: '部门管理', icon: 'lucide-house' },
      },
      {
        name: 'Role',
        path: '/contacts/role',
        component: () => import('@/views/contact/RolePage.vue'),
        meta: { title: '角色管理', icon: 'lucide-house' },
      },
      {
        name: 'Supplier',
        path: '/contacts/supplier',
        component: () => import('@/views/contact/SupplierPage.vue'),
        meta: { title: '供应商管理' },
      },
    ],
    meta: { title: '通讯录', icon: 'lucide-layout-panel-top' },
  },
  {
    name: 'Profile',
    path: '/',
    component: () => import('@/layouts/AuthenticatedLayout.vue'),
    children: [
      {
        path: '/profile/',
        component: () => import('@/views/contact/UserPage.vue'),
        meta: { title: '个人页面', icon: 'lucide-user' },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/404.vue'),
    meta: { title: '404', show: false },
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

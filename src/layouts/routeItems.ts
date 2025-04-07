export default [
  {
    title: 'Home',
    icon: 'lucide-house',
    path: '/',
  },
  {
    title: 'Dashboard',
    icon: 'lucide-layout-panel-top',
    children: [
      { title: 'Analytics', path: '/dashboard/analytics' },
      { title: 'Reports', path: '/dashboard/reports' },
    ],
  },
  {
    title: 'Profile',
    icon: 'lucide-user',
    path: '/profile',
  },
  {
    title: 'Settings',
    icon: 'lucide-settings',
    path: '/settings',
  },
  {
    title: 'Help',
    icon: 'lucide-circle-help',
    path: '/help',
  },
]

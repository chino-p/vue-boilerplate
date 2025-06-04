import { defineStore } from 'pinia'
import { logout as logoutApi } from '@/api/login'

export const useUserStore = defineStore('user', () => {
  const logout = async (): Promise<void> => {
    const data = await logoutApi()
    console.log('User logged out:', data)
  }

  return { logout }
})

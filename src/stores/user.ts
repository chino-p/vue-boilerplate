import { defineStore } from 'pinia'
import { logout as logoutApi } from '@/api/login'
import { removeToken } from '@/utils/auth'

export const useUserStore = defineStore('user', () => {
  const logout = async (): Promise<void> => {
    await logoutApi()
    removeToken()
  }

  return { logout }
})

import { useCookies } from '@vueuse/integrations/useCookies'

const TokenKey = 'Authorization'

const cookie = useCookies([TokenKey])

export const getToken = () => cookie.get(TokenKey)

export const removeToken = () => cookie.remove(TokenKey)

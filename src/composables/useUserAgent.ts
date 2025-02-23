import { ref, computed } from 'vue'

export function useUserAgent() {
  // 存储原始 userAgent
  const userAgent = ref('')

  // 在浏览器环境下获取 userAgent
  if (typeof window !== 'undefined' && window.navigator) {
    userAgent.value = window.navigator.userAgent
  }

  // 可以根据需要检测更多信息
  const isMacOS = computed(() => /Macintosh|Mac OS X/i.test(userAgent.value))
  const isWindows = computed(() => /Windows/i.test(userAgent.value))
  const isIOS = computed(() => /iPhone|iPad|iPod/i.test(userAgent.value))
  const isAndroid = computed(() => /Android/i.test(userAgent.value))
  const isLinux = computed(() => /Linux/i.test(userAgent.value))
  const isChrome = computed(() => /Chrome/i.test(userAgent.value) && !/Edg/i.test(userAgent.value))
  const isEdge = computed(() => /Edg/i.test(userAgent.value))
  const isFirefox = computed(() => /Firefox/i.test(userAgent.value))
  // ... 你可以根据需要继续添加更多判断

  // 返回想要公开的属性
  return {
    userAgent,
    isMacOS,
    isWindows,
    isIOS,
    isAndroid,
    isLinux,
    isChrome,
    isEdge,
    isFirefox,
  }
}

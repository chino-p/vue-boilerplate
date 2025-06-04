import { ref } from 'vue'

// Shared dropdown visibility flag
export const showDropdown = ref(false)

// Toggle dropdown
export function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}

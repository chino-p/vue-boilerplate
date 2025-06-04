export const showDropdown = ref(false)

export function toggleDropdown() {
  showDropdown.value = !showDropdown.value
}

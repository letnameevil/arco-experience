import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalLoading = defineStore('globalLoading', () => {
  const globalLoading = ref(false)

  return {
    globalLoading,
  }
})

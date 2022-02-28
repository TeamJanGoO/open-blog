import { defineStore } from 'pinia'

export const useSidebarStore = defineStore({
  id: 'sidebar',
  state: () => ({
    isActive: [false, false, false, false, false]
  }),
  actions: {
    changeActive(i: number) {
      for (let j = 0; j < 5; j++) {
        if (j === i) {
          this.isActive[j] = true
        } else {
          this.isActive[j] = false
        }
      }
    }
  }
})

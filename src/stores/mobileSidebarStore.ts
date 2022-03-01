import { defineStore } from 'pinia'

export const useMobileSidebarStore = defineStore({
  id: 'mobileSidebar',
  state: () => ({
    isVisible: false
  }),
  actions: {
    toggleVisible() {
      this.isVisible = !this.isVisible
    }
  }
})

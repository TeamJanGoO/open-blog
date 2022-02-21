import { defineStore } from 'pinia'

export const useSearchStore = defineStore({
  id: 'search',
  state: () => ({
    focus: false
  }),
  getters: {
    doubleCount: (state) => state.focus
  },
  actions: {
    increment() {
      this.focus != this.focus
    }
  }
})

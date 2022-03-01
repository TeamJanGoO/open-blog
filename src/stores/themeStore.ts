import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
  id: 'themeStore',
  state: () => ({
    theme: 'light'
  }),
  actions: {
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
})

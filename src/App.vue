<script setup lang="ts">
import { RouterView } from 'vue-router'
import MySidebar from './components/MySidebar.vue'
import MyTopbar from './components/MyTopbar.vue'

import { useMobileSidebarStore } from './stores/mobileSidebarStore'
import { useThemeStore } from './stores/themeStore'
import MyFooter from './components/MyFooter.vue'

window.addEventListener('resize', () => {
  useMobileSidebarStore().isVisible = false
})



window.addEventListener('click', () => {
  const body: any = document.querySelector('body')
  if (useThemeStore().theme === 'light') {
    body.classList.remove('bg-[#171821]')
    body.classList.add('bg-[#FCFDFE]')
  } else {
    body.classList.remove('bg-[#FCFDFE]')
    body.classList.add('bg-[#171821]')
  }
  if (useMobileSidebarStore().isVisible) {
    body.classList.add('overflow-hidden')
  } else {
    body.classList.remove('overflow-hidden')
  }
})
</script>

<template>
  <div :class="{ 'bg-[#FCFDFE]': useThemeStore().theme === 'light', 'bg-[#171821]': useThemeStore().theme === 'dark' }">
    <MyTopbar />
    <MySidebar />
    <div
      class="min-h-max mx-6 lg:ml-[269px] lg:mr-[115px] md:mt-[160px] lg:mt-[182px]"
    >
      <RouterView />
    </div>
    <MyFooter />
  </div>
</template>

<style></style>

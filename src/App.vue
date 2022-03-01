<script setup lang="ts">
import { RouterView } from 'vue-router'
import MySidebar from './components/MySidebar.vue'
import MyTopbar from './components/MyTopbar.vue'

import { useMobileSidebarStore } from './stores/mobileSidebarStore'

window.addEventListener('resize', () => {
  useMobileSidebarStore().isVisible = false
})
</script>

<template>
  <div class="overflow-hidden">
    <MyTopbar />
    <MySidebar />
    <div
      class="min-h-max mx-6 lg:ml-[269px] lg:mr-[115px] md:mt-[160px] lg:mt-[182px] overflow-x-hidden overflow-y-auto"
    >
      <RouterView />
    </div>
  </div>
</template>

<style></style>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import TopBar from './components/Navigation/TobBar.vue'
import SideBar from './components/Navigation/SideBar.vue'
</script>

<template>
  <TopBar />
  <SideBar />
  <RouterView />
</template>

<style></style>

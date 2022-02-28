<script setup lang="ts">
import { RouterView } from 'vue-router'
import MySidebar from './components/MySidebar.vue';
import MyTopbar from './components/MyTopbar.vue';
</script>

<template>
  <div class="overflow-hidden">
    <MyTopbar />
    <MySidebar />
    <div
      class="min-h-max mx-6 md:ml-[269px] md:mr-[115px] md:mt-[182px] overflow-x-hidden overflow-y-auto"
    >
      <RouterView />
    </div>
  </div>
</template>

<style></style>

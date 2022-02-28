<script setup lang="ts">
import MySearchbox from './sub-components/MySearchbox.vue'
import ThemeIcon from '../assets/icons/ThemeIcon.vue'
import InfoIcon from '../assets/icons/InfoIcon.vue'

import { ref } from 'vue'

const theme = ref('light')

const toggleTheme = () => {
  if (theme.value === 'light') {
    theme.value = 'dark'
  } else {
    theme.value = 'light'
  }
}
</script>

<template>
    <div class="md:fixed md:top-0 md:left-0 md:pl-[269px] md:pr-[48px] w-full h-[142px] flex justify-evenly md:justify-between items-center">
        <div>
            <img class="w-full h-[30px] md:h-[48px]" src="@/assets/logo.svg" alt="Team JanGoO Logo SVG">
        </div>
        <div class="hidden lg:block">
            <MySearchbox />
        </div>
        <div class="flex gap-x-6 md:gap-x-12">
            <div @click="toggleTheme" class="p-1 rounded-full hover:bg-gray-100 cursor-pointer">
                <ThemeIcon :theme="theme" />
            </div>
            <div class="p-1 rounded-full hover:bg-gray-100 cursor-pointer">
                <InfoIcon />
            </div>
        </div>
    </div>
</template>
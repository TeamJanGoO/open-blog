<script setup lang="ts">
import MySearchbox from './sub-components/MySearchbox.vue'
import ThemeIcon from '../assets/icons/ThemeIcon.vue'
import InfoIcon from '../assets/icons/InfoIcon.vue'

import { useMobileSidebarStore } from '@/stores/mobileSidebarStore'

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
    <div
        class="transition-all duration-500 md:fixed md:top-0 md:left-0 pl-[20px] lg:pl-[160px] xl:pl-[269px] pr-[20px] lg:pr-[48px] w-full h-[100px] md:h-[142px] flex gap-x-12 xl:gap-x-24 justify-between items-center"
    >
        <div class="flex justify-center items-center gap-x-[20px] md:gap-x-[48px]">
            <svg
                @click="useMobileSidebarStore().toggleVisible"
                class="flex lg:hidden w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.59961 5.99999C3.59961 5.33725 4.13687 4.79999 4.79961 4.79999H19.1996C19.8624 4.79999 20.3996 5.33725 20.3996 5.99999C20.3996 6.66273 19.8624 7.19999 19.1996 7.19999H4.79961C4.13687 7.19999 3.59961 6.66273 3.59961 5.99999Z"
                    fill="#ACBADB"
                    fill-opacity="0.7"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.59961 12C3.59961 11.3372 4.13687 10.8 4.79961 10.8H19.1996C19.8624 10.8 20.3996 11.3372 20.3996 12C20.3996 12.6627 19.8624 13.2 19.1996 13.2H4.79961C4.13687 13.2 3.59961 12.6627 3.59961 12Z"
                    fill="#ACBADB"
                    fill-opacity="0.7"
                />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.59961 18C3.59961 17.3372 4.13687 16.8 4.79961 16.8H19.1996C19.8624 16.8 20.3996 17.3372 20.3996 18C20.3996 18.6627 19.8624 19.2 19.1996 19.2H4.79961C4.13687 19.2 3.59961 18.6627 3.59961 18Z"
                    fill="#ACBADB"
                    fill-opacity="0.7"
                />
            </svg>
            <img
                class="transition-all duration-500 w-full h-[30px] md:h-[48px]"
                src="@/assets/logo.svg"
                alt="Team JanGoO Logo SVG"
            />
        </div>
        <div class="hidden lg:block flex-1">
            <MySearchbox />
        </div>
        <div class="flex gap-x-6 md:gap-x-12">
            <div @click="toggleTheme" class="p-1 rounded-full hover:bg-gray-100 cursor-pointer">
                <ThemeIcon :theme="theme" />
            </div>
            <div class="hidden lg:block p-1 rounded-full hover:bg-gray-100 cursor-pointer">
                <InfoIcon />
            </div>
        </div>
    </div>
</template>
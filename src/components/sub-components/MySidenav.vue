<script setup lang="ts">
import FeedIcon from '@/assets/icons/FeedIcon.vue'
import HashIcon from '@/assets/icons/HashIcon.vue'
import BellIcon from '@/assets/icons/BellIcon.vue'
import MailIcon from '@/assets/icons/MailIcon.vue'
import ShareIcon from '@/assets/icons/ShareIcon.vue'

import { ref } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import router from '@/router'

const states = ref(['active', 'default', 'default', 'default', 'default'])

const hoverActivate = (i: number) => {
    if (states.value[i] === 'default') {
        states.value[i] = 'hover'
    }
}

const hoverDeactivate = (i: number) => {
    if (states.value[i] === 'hover') {
        states.value[i] = 'default'
    }
}

const clickActivate = (i: number, p: any) => {
    states.value[i] = 'active'
    router.push(p)
    for (let j = 0; j < states.value.length; j++) {
        if (j !== i) {
            states.value[j] = 'default'
        }
    }
}
</script>

<template>
    <div class="p-2 flex flex-col">
        <div
            @mouseenter="hoverActivate(0)"
            @mouseleave="hoverDeactivate(0)"
            @click="clickActivate(0, '/')"
            class="tooltip px-2 pt-2 pb-[36px] cursor-pointer"
            :class="{ 'activated': states[0] === 'active' }"
        >
            <FeedIcon :state="states[0]" />
            <span class="transition-all duration-300 tooltiptext top-0 mt-2 py-[4px] px-[15px]" :class="{ 'bg-white border-[1px] border-[#EEF1F8] [box-shadow:-1px_4px_4px_0px_#9CAACC0D]': useThemeStore().theme === 'light', 'bg-[#1D1E26] border-[1px] border-[#3A3D4A] [box-shadow:-1px_4px_4px_rgba(0,0,0,0.05)]': useThemeStore().theme === 'dark' }">Feed</span>
        </div>
        <div
            @mouseenter="hoverActivate(1)"
            @mouseleave="hoverDeactivate(1)"
            @click="clickActivate(1, '/tags')"
            class="tooltip px-2 pt-2 pb-[36px] cursor-pointer"
            :class="{ 'activated': states[1] === 'active' }"
        >
            <HashIcon :state="states[1]" />
            <span class="transition-all duration-300 tooltiptext top-0 mt-2 py-[4px] px-[15px]" :class="{ 'bg-white border-[1px] border-[#EEF1F8] [box-shadow:-1px_4px_4px_0px_#9CAACC0D]': useThemeStore().theme === 'light', 'bg-[#1D1E26] border-[1px] border-[#3A3D4A] [box-shadow:-1px_4px_4px_rgba(0,0,0,0.05)]': useThemeStore().theme === 'dark' }">Topics</span>
        </div>
        <div
            @mouseenter="hoverActivate(2)"
            @mouseleave="hoverDeactivate(2)"
            @click="clickActivate(2, '/subscribe')"
            class="tooltip px-2 pt-2 pb-[36px] cursor-pointer"
            :class="{ 'activated': states[2] === 'active' }"
        >
            <BellIcon :state="states[2]" />
            <span class="transition-all duration-300 tooltiptext top-0 mt-2 py-[4px] px-[15px]" :class="{ 'bg-white border-[1px] border-[#EEF1F8] [box-shadow:-1px_4px_4px_0px_#9CAACC0D]': useThemeStore().theme === 'light', 'bg-[#1D1E26] border-[1px] border-[#3A3D4A] [box-shadow:-1px_4px_4px_rgba(0,0,0,0.05)]': useThemeStore().theme === 'dark' }">Subscribe</span>
        </div>
        <div
            @mouseenter="hoverActivate(3)"
            @mouseleave="hoverDeactivate(3)"
            @click="clickActivate(3, '/contact')"
            class="tooltip px-2 pt-2 pb-[36px] cursor-pointer"
            :class="{ 'activated': states[3] === 'active' }"
        >
            <MailIcon :state="states[3]" />
            <span class="transition-all duration-300 tooltiptext top-0 mt-2 py-[4px] px-[15px] whitespace-nowrap" :class="{ 'bg-white border-[1px] border-[#EEF1F8] [box-shadow:-1px_4px_4px_0px_#9CAACC0D]': useThemeStore().theme === 'light', 'bg-[#1D1E26] border-[1px] border-[#3A3D4A] [box-shadow:-1px_4px_4px_rgba(0,0,0,0.05)]': useThemeStore().theme === 'dark' }">Contact Us</span>
        </div>
        <div
            @mouseenter="hoverActivate(4)"
            @mouseleave="hoverDeactivate(4)"
            @click="clickActivate(4, '/share')"
            class="transition-all duration-300 tooltip p-2 cursor-pointer"
            :class="{ 'activated': states[4] === 'active' }"
        >
            <ShareIcon :state="states[4]" />
            <span class="tooltiptext top-1/2 -translate-y-1/2 py-[4px] px-[15px]" :class="{ 'bg-white border-[1px] border-[#EEF1F8] [box-shadow:-1px_4px_4px_0px_#9CAACC0D]': useThemeStore().theme === 'light', 'bg-[#1D1E26] border-[1px] border-[#3A3D4A] [box-shadow:-1px_4px_4px_rgba(0,0,0,0.05)]': useThemeStore().theme === 'dark' }">Share</span>
        </div>
    </div>
</template>

<style scoped>
.tooltip {
    position: relative;
    display: inline-block;
}

.tooltip .tooltiptext {
    visibility: hidden;
    color: #4F72C6;
    font-weight: bold;
    font-size: 11px;
    line-height: 150%;
    text-align: center;
    border-radius: 5px;
    position: absolute;
    left: 340%;
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

.activated .tooltiptext {
    visibility: visible;
    opacity: 1;
}
</style>

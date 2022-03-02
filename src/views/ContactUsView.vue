<script setup lang="ts">
import { ref } from 'vue'
import { useThemeStore } from '@/stores/themeStore'
import MyTagBadge from '../components/sub-components/MyTagBadge.vue'

const data = ref([
    { title: 'Graphics Design', tags: ['design', 'graphics', 'art'] },
    { title: 'Web Development', tags: ['development', 'web'] },
    { title: 'Programming', tags: ['programming', 'code'] },
    { title: 'Music', tags: ['music', 'sound', 'audio', 'audio-visual'] },
    { title: 'Gaming', tags: ['gaming', 'video', 'video-game'] },
    { title: 'Photography', tags: ['photography', 'photo', 'camera', 'camera-lens'] },
])
</script>

<template>
    <div class="pb-[120px] w-full">
        <h1
            class="mb-[67px] text-[36px] text-[#1E4571] leading-[49px] font-bold flex items-center gap-5"
            :class="{ 'text-[#1E4571]': useThemeStore().theme === 'light', 'text-white': useThemeStore().theme === 'dark' }"
        >
            <span>Contact Us</span>
        </h1>
        <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-6">
                <h1 class="text-[#4F72C6] text-[24px] font-[33px] font-bold">Email</h1>
                <div class="w-full md:max-w-min md:p-[49px] md:border-[1px] md:border-[rgba(172,186,219,0.2)] md:rounded-[15px] flex flex-col gap-4"
                :class="{ 'border-[#EEF1F8] md:bg-white': useThemeStore().theme === 'light', 'border-[#2A2D3D] md:bg-[#1D1E26]': useThemeStore().theme === 'dark' }">
                    <div class="flex flex-col gap-3">
                        <span class="ml-4 text-[12px] leading-[16px]"
                        :class="{ 'text-[#1E4571]': useThemeStore().theme === 'light', 'text-white': useThemeStore().theme === 'dark' }">Name</span>
                        <input class="md:w-[400px] max-w-[500px] px-[17px] py-[15px] focus:outline-none rounded-[7px] border-[1px]" :class="{ 'border-[#F2F2F2] bg-white md:bg-[#FCFDFE] text-[#1E4571]': useThemeStore().theme === 'light', 'border-[#2A2D3D] bg-[#1B1C23] text-white': useThemeStore().theme === 'dark' }" type="text" name="name" id="name_input">
                    </div>
                    <div class="flex flex-col gap-3">
                        <span class="ml-4 text-[12px] leading-[16px]"
                        :class="{ 'text-[#1E4571]': useThemeStore().theme === 'light', 'text-white': useThemeStore().theme === 'dark' }">Email</span>
                        <input class="md:w-[400px] max-w-[500px] px-[17px] py-[15px] focus:outline-none rounded-[7px] border-[1px]" :class="{ 'border-[#F2F2F2] bg-white md:bg-[#FCFDFE] text-[#1E4571]': useThemeStore().theme === 'light', 'border-[#2A2D3D] bg-[#1B1C23] text-white': useThemeStore().theme === 'dark' }" type="text" name="email" id="email_input">
                    </div>
                    <div class="flex flex-col gap-3">
                        <span class="ml-4 text-[12px] leading-[16px]"
                        :class="{ 'text-[#1E4571]': useThemeStore().theme === 'light', 'text-white': useThemeStore().theme === 'dark' }">Message</span>
                        <textarea class="md:w-[400px] max-w-[500px] px-[17px] py-[15px] focus:outline-none rounded-[7px] border-[1px]" :class="{ 'border-[#F2F2F2] bg-white md:bg-[#FCFDFE] text-[#1E4571]': useThemeStore().theme === 'light', 'border-[#2A2D3D] bg-[#1B1C23] text-white': useThemeStore().theme === 'dark' }" name="message" id="message_input" cols="30" rows="10"></textarea>
                    </div>
                </div>
            </div>
            <div>
                <h1 class="text-[#4F72C6] text-[24px] font-[33px] font-bold">Other resources</h1>
            </div>
        </div>
    </div>
</template>
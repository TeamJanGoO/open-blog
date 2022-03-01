<script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore'

const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="transition-all duration-300 border-[1px] bg-transparent px-3 py-[0px] rounded-[6px]"
    :class="{ 'border-[#EEF1F8]': useThemeStore().theme === 'light', 'border-[#4F5B75]/50': useThemeStore().theme === 'dark' }">
        <span class="transition-all duration-300 text-[12px] font-bold"
        :class="{ 'text-[#ACBADB]': useThemeStore().theme === 'light', 'text-[#4F5B75]': useThemeStore().theme === 'dark' }"># {{ props.text }}</span>
    </div>
</template>
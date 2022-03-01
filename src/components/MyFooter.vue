<script setup lang="ts">
import { useThemeStore } from '@/stores/themeStore'
</script>

<template>
    <div
        class="relative z-50 mb-[60px] w-full h-[155px] border-y-[1px] flex justify-start items-center pl-[115px]"
        :class="{ 'bg-white border-[#EEF1F8]': useThemeStore().theme === 'light', 'bg-[#1D1E26] border-[#3A3D4A]': useThemeStore().theme === 'dark' }"
    >
        <TransitionGroup name="fade">
            <img
                v-if="useThemeStore().theme === 'light'"
                class="transition-all duration-500 h-[30px] md:h-[48px]"
                src="@/assets/logo-light.svg"
                alt="Team JanGoO Logo Light SVG"
            />
            <img
                v-else
                class="transition-all duration-500 h-[30px] md:h-[48px]"
                src="@/assets/logo-dark.svg"
                alt="Team JanGoO Logo Dark SVG"
            />
        </TransitionGroup>
    </div>
</template>
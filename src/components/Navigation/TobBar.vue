<script setup lang="ts">
import Logo from './child-components/Logo.vue'
import Search from './child-components/Search.vue'
import MoonIcon from '@/assets/Icons/Outline/Moon.vue'
import InfoIcon from '@/assets/Icons/Outline/Info.vue'
</script>

<template>
<div class="h-[115px] w-full flex flex-row justify-center items-center gap-[133px] pl-32 pr-12">
        <div><Logo /></div>
        <div class="flex-1"><Search /></div>
        <div class="flex flex-row h-full justify-center items-center mt-2 gap-12">
            <MoonIcon />
            <InfoIcon />
        </div>
    </div>
</template>
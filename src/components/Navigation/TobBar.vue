<script setup lang="ts">
import { ref } from 'vue'

import Logo from './child-components/Logo.vue'
import Search from './child-components/Search.vue'

const icons: string[] = [
    "./Icons/default/moon.svg",
    "./Icons/default/info.svg"
]
</script>

<template>
<div class="fixed top-0 left-0 right-0 h-[115px] w-full flex flex-row justify-center items-center gap-[133px] pl-64 pr-12">
        <div><Logo /></div>
        <div class="flex-1"><Search /></div>
        <div class="flex flex-row h-full justify-center items-center mt-2 gap-12">
            <img v-for="(icon, index) in icons" :key="index" :src="icon" alt="Moon Icon SVG">
        </div>
    </div>
</template>
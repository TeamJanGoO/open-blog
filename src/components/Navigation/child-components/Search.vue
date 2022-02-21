<script setup lang="ts">
    import SearchIcon from '@/assets/Icons/Outline/Search.vue'
</script>

<template>
    <div class="h-[60px] w-full flex pt-2 relative mx-auto text-[#ACBADB]">
        <div class="absolute top-0 left-0 w-14 mt-2.5 h-[84%] flex justify-center items-center">
            <SearchIcon />
        </div>
        <input
            class="border-2 border-[#EEF1F8] leading-10 bg-white grow pl-14 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search Anything"
        />
        <div class="absolute top-0 right-0 w-12 mt-2 h-[84%] border-l-2 border-[#EEF1F8] flex justify-center items-center">
            <span class="text-2xl">/</span>
        </div>
    </div>
</template>

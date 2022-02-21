<script setup lang="ts">
import { ref, onMounted } from 'vue'

const searchText: any = ref('')

const searchIcon: string = "./Icons/default/search.svg"

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === '/') {
        e.preventDefault()
        searchText.value = ''
        document.getElementById('search-input').focus()
    }
  })
})
</script>

<template>
    <div class="h-[60px] w-full flex pt-2 relative mx-auto text-[#ACBADB]">
        <div class="absolute top-0 left-0 w-14 mt-2.5 h-[84%] flex justify-center items-center">
            <img :src="searchIcon" alt="Search Icon SVG">
        </div>
        <input
            id="search-input"
            class="border-2 border-[#EEF1F8] leading-10 bg-white grow pl-14 pr-16 rounded-lg text-md tracking-wider focus:outline-none hover:bg-[#F9F9F9]/50 focus:bg-[#F9F9F9]/50"
            type="search"
            name="search"
            v-model="searchText"
            placeholder="Search Anything"
        />
        <div class="absolute top-0 right-0 w-12 mt-2 h-[84%] border-l-2 border-[#EEF1F8] flex justify-center items-center">
            <span class="text-2xl">/</span>
        </div>
    </div>
</template>

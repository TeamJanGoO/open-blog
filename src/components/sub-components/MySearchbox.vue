<script setup lang="ts">
import { ref, onMounted } from 'vue'

const input: any = ref(null)

onMounted(() => {
    window.addEventListener('keydown', (e) => {
        if (e.key === '/') {
            input.value.focus()
            setTimeout(() => {
                input.value.value = ''
            }, 10)
        }
    })
})
</script>

<template>
    <div class="w-4/3 lg:w-[600px] h-[54px] relative">
        <div class="absolute top-1/2 -translate-y-1/2 left-0 ml-6">
            <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M21.5 21L15.5 15M17.5 10C17.5 13.866 14.366 17 10.5 17C6.63404 17 3.50003 13.866 3.50003 10C3.50003 6.13401 6.63404 3 10.5 3C14.366 3 17.5 6.13401 17.5 10Z"
                    stroke="#ACBDE3"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <input
            ref="input"
            class="transition-all duration-700 bg-transparent focus:bg-white hover:bg-white placeholder-[#ACBADB] text-[#ACBADB] tracking-[0.75px] pl-16 w-full h-full border-2 border-[#EEF1F8] focus:border-[#EEF1F8] focus:ring-0 focus:ring-[#EEF1F8] rounded-lg focus:outline-none"
            type="text"
            id="search"
            name="search"
            placeholder="Search Keywords in Our Blog (i.e., UI/UX, Development, Web ...)"
        />
        <div
            class="hidden absolute top-0 bottom-0 right-0 xl:flex justify-center items-center px-5 h-full border-l-2 border-[#EEF1F8] text-[#ACBADB] text-2xl"
        >/</div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    img: {
        type: String,
        required: false,
        default: "./assets/avatar.svg"
    },
    name: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex gap-4 flex-nowrap">
        <div>
            <img class="rounded-full w-[46px] h-[46px]" :src="props.img" :alt="props.name">
        </div>
        <div class="flex flex-col">
            <span class="text-[18px] text-[#5F7097] font-bold whitespace-nowrap">{{ props.name }}</span>
            <span class="text-[10px] text-[#5F7097] whitespace-nowrap"># {{ props.tag }}</span>
        </div>
    </div>
</template>
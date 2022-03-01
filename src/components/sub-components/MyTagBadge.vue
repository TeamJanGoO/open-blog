<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="border-[1px] border-[#ACBADB] px-3 py-[0px] rounded-[6px]">
        <span class="text-[12px] text-[#ACBADB]"># {{ props.text }}</span>
    </div>
</template>
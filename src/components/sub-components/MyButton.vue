<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true,
    }
})
</script>

<template>
    <button class="capitalize flex gap-2 bg-[#007AFF] rounded-[18px] [padding:8px_12px_8px_16px] [box-shadow:0px_4px_9px_rgba(0,122,255,0.19)]" type="button">
        <span class="text-[11px] text-white font-medium">{{ props.text }}</span>
        <span>
            <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3.97233 8.66656H11.419L8.16566 11.9199C7.90566 12.1799 7.90566 12.6066 8.16566 12.8666C8.42566 13.1266 8.84566 13.1266 9.10566 12.8666L13.499 8.47322C13.759 8.21322 13.759 7.79322 13.499 7.53322L9.11233 3.13322C8.98778 3.00839 8.81868 2.93823 8.64233 2.93823C8.46599 2.93823 8.29689 3.00839 8.17233 3.13322C7.91233 3.39322 7.91233 3.81322 8.17233 4.07322L11.419 7.33322H3.97233C3.60566 7.33322 3.30566 7.63322 3.30566 7.99989C3.30566 8.36656 3.60566 8.66656 3.97233 8.66656Z"
                    fill="white"
                />
            </svg>
        </span>
    </button>
</template>
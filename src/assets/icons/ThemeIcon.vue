<script setup lang="ts">
const props = defineProps({
    theme: {
        type: String,
        required: true,
        default: 'light',
    }
})
</script>

<template>
    <TransitionGroup name="fade">
        <div v-if="props.theme === 'light'" key="light">
            <!-- Moon SVG -->
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M20.3542 15.3541C19.3176 15.7707 18.1856 15.9999 17 15.9999C12.0294 15.9999 8 11.9705 8 6.99994C8 5.81437 8.22924 4.68233 8.64581 3.64575C5.33648 4.97568 3 8.21495 3 11.9999C3 16.9705 7.02944 20.9999 12 20.9999C15.785 20.9999 19.0243 18.6635 20.3542 15.3541Z"
                    stroke="#ACBADB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <div v-else-if="props.theme === 'dark'" key="dark">
            <!-- Sun SVG -->
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 3V4M12 20V21M21 12H20M4 12H3M18.364 18.364L17.6569 17.6569M6.34315 6.34315L5.63604 5.63604M18.364 5.63609L17.6569 6.3432M6.3432 17.6569L5.63609 18.364M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                    stroke="#ACBADB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    </TransitionGroup>
</template>
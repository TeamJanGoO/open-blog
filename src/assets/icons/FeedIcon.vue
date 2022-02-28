<script setup lang="ts">
const props = defineProps({
    state: {
        type: String,
        required: true,
        default: 'default',
    },
})
</script>

<template>
    <!-- Feed / Home SVG Icon for Default State -->
    <TransitionGroup name="fade">
        <div v-if="props.state === 'default'" key="default">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                    stroke="#C5CFE6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <!-- Feed / Home SVG Icon for Hover State -->
        <div v-else-if="props.state === 'hover'" key="hover">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                    stroke="#4F72C6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <!-- Feed / Home SVG Icon for Active State -->
        <div v-else-if="props.state === 'active'" key="active">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12.8485 2.75186C12.3799 2.28323 11.6201 2.28323 11.1515 2.75186L2.75147 11.1519C2.28284 11.6205 2.28284 12.3803 2.75147 12.8489C3.2201 13.3175 3.9799 13.3175 4.44853 12.8489L4.8 12.4974V20.4004C4.8 21.0631 5.33726 21.6004 6 21.6004H8.4C9.06274 21.6004 9.6 21.0631 9.6 20.4004V18.0004C9.6 17.3376 10.1373 16.8004 10.8 16.8004H13.2C13.8627 16.8004 14.4 17.3376 14.4 18.0004V20.4004C14.4 21.0631 14.9373 21.6004 15.6 21.6004H18C18.6627 21.6004 19.2 21.0631 19.2 20.4004V12.4974L19.5515 12.8489C20.0201 13.3175 20.7799 13.3175 21.2485 12.8489C21.7172 12.3803 21.7172 11.6205 21.2485 11.1519L12.8485 2.75186Z"
                    fill="#4F72C6"
                />
            </svg>
        </div>
    </TransitionGroup>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
    position: relative;
}

.fade-enter-from,
.fade-leave-to {
    position: absolute;
    opacity: 0;
}
</style>
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
    <!-- Mail SVG Icon for Default State -->
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
                    d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                    stroke="#ACBADB"
                    stroke-opacity="0.7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <!-- Mail SVG Icon for Hover State -->
        <div v-else-if="props.state === 'hover'" key="hover">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                    stroke="#4F72C6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <!-- Mail SVG Icon for Active State -->
        <div v-else-if="props.state === 'active'" key="active">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M11.7763 14.9885L11.9999 15.1003L12.2235 14.9885L21.1 10.5503V16.7998C21.1 17.8491 20.2493 18.6998 19.2 18.6998H4.8C3.75066 18.6998 2.9 17.8491 2.9 16.7998V10.5504L11.7763 14.9885ZM11.9999 11.299L2.94805 6.77308C3.1416 5.92937 3.89742 5.2998 4.8 5.2998H19.2C20.1026 5.2998 20.8584 5.92934 21.0519 6.77302L11.9999 11.299Z"
                    fill="#4F72C6"
                    stroke="#4F72C6"
                />
            </svg>
        </div>
    </TransitionGroup>
</template>
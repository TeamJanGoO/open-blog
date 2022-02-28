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
    <!-- Bell SVG Icon for Default State -->
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
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="#C5CFE6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <!-- Bell SVG Icon for Hover State -->
        <div v-else-if="props.state === 'hover'" key="hover">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="#4F72C6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <!-- Bell SVG Icon for Active State -->
        <div v-else-if="props.state === 'active'" key="active">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12 2.40039C8.02358 2.40039 4.80003 5.62394 4.80003 9.60039V13.9033L3.95151 14.7519C3.60831 15.0951 3.50564 15.6112 3.69138 16.0596C3.87712 16.508 4.31468 16.8004 4.80003 16.8004H19.2C19.6854 16.8004 20.123 16.508 20.3087 16.0596C20.4944 15.6112 20.3918 15.0951 20.0486 14.7519L19.2 13.9033V9.60039C19.2 5.62394 15.9765 2.40039 12 2.40039Z"
                    fill="#4F72C6"
                />
                <path
                    d="M12 21.6004C10.0118 21.6004 8.4 19.9886 8.4 18.0004H15.6C15.6 19.9886 13.9882 21.6004 12 21.6004Z"
                    fill="#4F72C6"
                />
            </svg>
        </div>
    </TransitionGroup>
</template>
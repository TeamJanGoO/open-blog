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
    <!-- Share SVG Icon for Default State -->
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
                    d="M8.68387 13.3419C8.88616 12.9381 9 12.4824 9 12C9 11.5176 8.88616 11.0619 8.68387 10.6581M8.68387 13.3419C8.19134 14.3251 7.17449 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.17449 9 8.19134 9.67492 8.68387 10.6581M8.68387 13.3419L15.3161 16.6581M8.68387 10.6581L15.3161 7.34193M15.3161 7.34193C15.8087 8.32508 16.8255 9 18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.48237 15.1138 6.93815 15.3161 7.34193ZM15.3161 16.6581C15.1138 17.0619 15 17.5176 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.8255 15 15.8087 15.6749 15.3161 16.6581Z"
                    stroke="#ACBADB"
                    stroke-opacity="0.7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <!-- Share SVG Icon for Hover State -->
        <div v-else-if="props.state === 'hover'" key="hover">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.68387 13.3419C8.88616 12.9381 9 12.4824 9 12C9 11.5176 8.88616 11.0619 8.68387 10.6581M8.68387 13.3419C8.19134 14.3251 7.17449 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.17449 9 8.19134 9.67492 8.68387 10.6581M8.68387 13.3419L15.3161 16.6581M8.68387 10.6581L15.3161 7.34193M15.3161 7.34193C15.8087 8.32508 16.8255 9 18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.48237 15.1138 6.93815 15.3161 7.34193ZM15.3161 16.6581C15.1138 17.0619 15 17.5176 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.8255 15 15.8087 15.6749 15.3161 16.6581Z"
                    stroke="#4F72C6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
        <!-- Share SVG Icon for Active State -->
        <div v-else-if="props.state === 'active'" key="active">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M18 9.60039C19.9882 9.60039 21.6 7.98862 21.6 6.00039C21.6 4.01217 19.9882 2.40039 18 2.40039C16.0118 2.40039 14.4 4.01217 14.4 6.00039C14.4 6.15097 14.4092 6.29939 14.4272 6.44512L8.49911 9.40916C7.85164 8.78457 6.97069 8.40039 6 8.40039C4.01178 8.40039 2.4 10.0122 2.4 12.0004C2.4 13.9886 4.01178 15.6004 6 15.6004C6.97071 15.6004 7.85168 15.2162 8.49916 14.5916L14.4272 17.5556C14.4092 17.7013 14.4 17.8498 14.4 18.0004C14.4 19.9886 16.0118 21.6004 18 21.6004C19.9882 21.6004 21.6 19.9886 21.6 18.0004C21.6 16.0122 19.9882 14.4004 18 14.4004C17.0293 14.4004 16.1484 14.7846 15.5009 15.4092L9.5728 12.4451C9.59076 12.2994 9.6 12.151 9.6 12.0004C9.6 11.8498 9.59075 11.7013 9.5728 11.5556L15.5008 8.59158C16.1483 9.2162 17.0293 9.60039 18 9.60039Z"
                    fill="#4F72C6"
                />
            </svg>
        </div>
    </TransitionGroup>
</template>
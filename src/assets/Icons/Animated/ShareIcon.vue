<script setup lang="ts">
import { ref } from 'vue'

const isDefault = ref(true)
const isHover = ref(false)
const isActive = ref(false)

const clickAction = (): void => {
    isDefault.value = false
    isHover.value = false
    isActive.value = true
}

const enterAction = (): void => {
    if (!isActive.value) {
        isDefault.value = false
        isHover.value = true
    }
}

const leaveAction = (): void => {
    if (!isActive.value) {
        isDefault.value = true
        isHover.value = false
    }
}

</script>

<template>
    <div
        class="w-12 h-8 flex justify-center items-center cursor-pointer"
        @click="clickAction"
        @mouseover="enterAction"
        @mouseleave="leaveAction"
    >
        <transition name="fade">
            <!-- Default Icon SVG -->
            <svg
                v-if="isDefault"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.68387 13.3419C8.88616 12.9381 9 12.4824 9 12C9 11.5176 8.88616 11.0619 8.68387 10.6581M8.68387 13.3419C8.19134 14.3251 7.17449 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.17449 9 8.19134 9.67492 8.68387 10.6581M8.68387 13.3419L15.3161 16.6581M8.68387 10.6581L15.3161 7.34193M15.3161 7.34193C15.8087 8.32508 16.8255 9 18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6C15 6.48237 15.1138 6.93815 15.3161 7.34193ZM15.3161 16.6581C15.1138 17.0619 15 17.5176 15 18C15 19.6569 16.3431 21 18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.8255 15 15.8087 15.6749 15.3161 16.6581Z"
                    stroke="#BDC7DE"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <!-- Hover Icon SVG -->
            <svg
                v-else-if="isHover"
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
            <!-- Active Icon SVG -->
            <svg
                v-else-if="isActive"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M18 9.59999C19.9882 9.59999 21.6 7.98822 21.6 5.99999C21.6 4.01177 19.9882 2.39999 18 2.39999C16.0118 2.39999 14.4 4.01177 14.4 5.99999C14.4 6.15058 14.4093 6.299 14.4272 6.44472L8.49914 9.40877C7.85166 8.78417 6.97071 8.39999 6.00002 8.39999C4.0118 8.39999 2.40002 10.0118 2.40002 12C2.40002 13.9882 4.0118 15.6 6.00002 15.6C6.97073 15.6 7.8517 15.2158 8.49918 14.5912L14.4272 17.5552C14.4093 17.701 14.4 17.8494 14.4 18C14.4 19.9882 16.0118 21.6 18 21.6C19.9882 21.6 21.6 19.9882 21.6 18C21.6 16.0118 19.9882 14.4 18 14.4C17.0293 14.4 16.1484 14.7842 15.5009 15.4088L9.57282 12.4447C9.59078 12.299 9.60002 12.1506 9.60002 12C9.60002 11.8494 9.59078 11.701 9.57282 11.5552L15.5009 8.59118C16.1483 9.2158 17.0293 9.59999 18 9.59999Z"
                    fill="#4F72C6"
                />
            </svg>
        </transition>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    position: relative;
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    position: absolute;
    opacity: 0;
}
</style>
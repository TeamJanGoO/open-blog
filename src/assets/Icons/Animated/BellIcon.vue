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
        @mouseenter="enterAction"
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
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
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
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
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
                    d="M12 2.39999C8.02356 2.39999 4.80001 5.62354 4.80001 9.59999V13.9029L3.95148 14.7515C3.60828 15.0947 3.50562 15.6108 3.69136 16.0592C3.87709 16.5076 4.31466 16.8 4.80001 16.8H19.2C19.6854 16.8 20.1229 16.5076 20.3087 16.0592C20.4944 15.6108 20.3917 15.0947 20.0485 14.7515L19.2 13.9029V9.59999C19.2 5.62354 15.9765 2.39999 12 2.39999Z"
                    fill="#4F72C6"
                />
                <path
                    d="M12 21.6C10.0118 21.6 8.39998 19.9882 8.39998 18H15.6C15.6 19.9882 13.9882 21.6 12 21.6Z"
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
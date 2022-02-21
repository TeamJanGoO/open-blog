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
                    d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
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
                    d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
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
                    d="M12.8486 2.75147C12.3799 2.28284 11.6201 2.28284 11.1515 2.75147L2.7515 11.1515C2.28287 11.6201 2.28287 12.3799 2.7515 12.8485C3.22013 13.3172 3.97992 13.3172 4.44855 12.8485L4.80002 12.497V20.4C4.80002 21.0627 5.33728 21.6 6.00002 21.6H8.40002C9.06277 21.6 9.60002 21.0627 9.60002 20.4V18C9.60002 17.3373 10.1373 16.8 10.8 16.8H13.2C13.8628 16.8 14.4 17.3373 14.4 18V20.4C14.4 21.0627 14.9373 21.6 15.6 21.6H18C18.6628 21.6 19.2 21.0627 19.2 20.4V12.497L19.5515 12.8485C20.0201 13.3172 20.7799 13.3172 21.2486 12.8485C21.7172 12.3799 21.7172 11.6201 21.2486 11.1515L12.8486 2.75147Z"
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
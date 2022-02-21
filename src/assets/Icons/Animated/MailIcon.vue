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
                    d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
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
                    d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
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
                    d="M11.7764 14.9887L12 15.1005L12.2236 14.9887L21.1 10.5505V16.8C21.1 17.8493 20.2494 18.7 19.2 18.7H4.80002C3.75068 18.7 2.90002 17.8493 2.90002 16.8V10.5506L11.7764 14.9887ZM12 11.2992L2.94807 6.77327C3.14162 5.92957 3.89744 5.3 4.80002 5.3H19.2C20.1026 5.3 20.8584 5.92954 21.052 6.77322L12 11.2992Z"
                    fill="#4F72C6"
                    stroke="#4F72C6"
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
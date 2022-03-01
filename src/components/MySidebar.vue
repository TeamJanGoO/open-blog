<script setup lang="ts">
import MySidenav from "./sub-components/MySidenav.vue"
import MyMobileSidebar from './MyMobileSidebar.vue'
import { useMobileSidebarStore } from '@/stores/mobileSidebarStore'
</script>

<template>
    <div
        class="hidden fixed top-0 left-0 w-[114px] h-screen bg-white pt-[162px] lg:flex md:justify-end border-r-[1px] border-[#ACBADB33]"
    >
        <MySidenav />
    </div>

    <Transition :name="useMobileSidebarStore().isVisible ? 'slideback' : 'slide'">
        <div v-if="useMobileSidebarStore().isVisible" class="block lg:hidden fixed z-30 inset-0">
            <div
                v-if="useMobileSidebarStore().isVisible"
                class="slide-in absolute left-0 top-0 bottom-0 w-[74%] z-50 h-screen bg-[#FCFDFE] shadow-2xl"
            >
                <MyMobileSidebar /> 
            </div>
        </div>
    </Transition>
    <Transition :name="useMobileSidebarStore().isVisible ? 'fadeInSlow' : 'fadeOutSlow'">
        <div
            v-if="useMobileSidebarStore().isVisible"
            @click="useMobileSidebarStore().toggleVisible"
            class="w-[26%] h-screen absolute z-50 right-0 top-0 bg-black/50"
        ></div>
    </Transition>
</template>

<style>
.slide-leave-active,
.slide-enter-active {
    transition: 0.8s;
    transition-delay: 0.3s;
}
.slide-enter-from {
    transform: translate(100%, 0);
}
.slide-leave-to {
    transform: translate(-100%, 0);
}

.slideback-leave-active,
.slideback-enter-active {
    transition: 0.8s;
}
.slideback-enter-from {
    transform: translate(-100%, 0);
}
.slideback-leave-to {
    transform: translate(100%, 0);
}

.fadeInSlow-leave-active,
.fadeInSlow-enter-active {
    transition: opacity 1s ease;
    transition-delay: 0.7s;
}
.fadeInSlow-enter-from {
    opacity: 0;
}
.fadeInSlow-leave-to {
    opacity: 1;
}

.fadeOutSlow-leave-active,
.fadeOutSlow-enter-active {
    transition: opacity 0.2s ease;
    transition-delay: 0.1s;
}
.fadeOutSlow-enter-from {
    opacity: 1;
}
.fadeOutSlow-leave-to {
    opacity: 0;
}
</style>
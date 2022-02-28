<script setup lang="ts">
import FeedIcon from '@/assets/icons/FeedIcon.vue'
import HashIcon from '@/assets/icons/HashIcon.vue'
import BellIcon from '@/assets/icons/BellIcon.vue'
import MailIcon from '@/assets/icons/MailIcon.vue'
import ShareIcon from '@/assets/icons/ShareIcon.vue'

import { ref } from 'vue'

const states = ref(['active', 'default', 'default', 'default', 'default'])

const hoverActivate = (i: number) => {
    if (states.value[i] === 'default') {
        states.value[i] = 'hover'
    }
}

const hoverDeactivate = (i: number) => {
    if (states.value[i] === 'hover') {
        states.value[i] = 'default'
    }
}

const clickActivate = (i: number) => {
    states.value[i] = 'active'
    for (let j = 0; j < states.value.length; j++) {
        if (j !== i) {
            states.value[j] = 'default'
        }
    }
}
</script>

<template>
    <div class="p-2 flex flex-col gap-y-[43px]">
        <div
            @mouseenter="hoverActivate(0)"
            @mouseleave="hoverDeactivate(0)"
            @click="clickActivate(0)"
            class="tooltip p-2 cursor-pointer"
            :class="{ 'activated': states[0] === 'active' }"
        >
            <FeedIcon :state="states[0]" />
            <span class="tooltiptext py-[4px] px-[15px]">Feed</span>
        </div>
        <div
            @mouseenter="hoverActivate(1)"
            @mouseleave="hoverDeactivate(1)"
            @click="clickActivate(1)"
            class="tooltip p-2 cursor-pointer"
            :class="{ 'activated': states[1] === 'active' }"
        >
            <HashIcon :state="states[1]" />
            <span class="tooltiptext py-[4px] px-[15px]">Topics</span>
        </div>
        <div
            @mouseenter="hoverActivate(2)"
            @mouseleave="hoverDeactivate(2)"
            @click="clickActivate(2)"
            class="tooltip p-2 cursor-pointer"
            :class="{ 'activated': states[2] === 'active' }"
        >
            <BellIcon :state="states[2]" />
            <span class="tooltiptext py-[4px] px-[15px]">Subscribe</span>
        </div>
        <div
            @mouseenter="hoverActivate(3)"
            @mouseleave="hoverDeactivate(3)"
            @click="clickActivate(3)"
            class="tooltip p-2 cursor-pointer"
            :class="{ 'activated': states[3] === 'active' }"
        >
            <MailIcon :state="states[3]" />
            <span class="tooltiptext py-[4px] px-[15px] whitespace-nowrap">Contact Us</span>
        </div>
        <div
            @mouseenter="hoverActivate(4)"
            @mouseleave="hoverDeactivate(4)"
            @click="clickActivate(4)"
            class="tooltip p-2 cursor-pointer"
            :class="{ 'activated': states[4] === 'active' }"
        >
            <ShareIcon :state="states[4]" />
            <span class="tooltiptext py-[4px] px-[15px]">Share</span>
        </div>
    </div>
</template>

<style scoped>
.tooltip {
    position: relative;
    display: inline-block;
}

.tooltip .tooltiptext {
    visibility: hidden;
    background-color: #FFFFFF;
    color: #4F72C6;
    font-weight: bold;
    font-size: 11px;
    line-height: 150%;
    text-align: center;
    border: solid 1px #EEF1F8;
    border-radius: 5px;
    position: absolute;
    bottom: 50%;
    left: 340%;
    transform: translateY(50%);
    margin-left: -60px;
    opacity: 0;
    transition: opacity 0.3s;
    box-shadow: -1px 4px 4px 0px #9CAACC0D;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

.activated .tooltiptext {
    visibility: visible;
    opacity: 1;
}
</style>

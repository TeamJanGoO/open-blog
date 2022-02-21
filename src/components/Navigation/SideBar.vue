<script setup lang="ts">
import FeedIcon from '@/assets/Icons/Animated/FeedIcon.vue'
import HashtagIcon from '@/assets/Icons/Animated/HashtagIcon.vue'
import BellIcon from '@/assets/Icons/Animated/BellIcon.vue'
import MailIcon from '../../assets/Icons/Animated/MailIcon.vue'
import ShareIcon from '../../assets/Icons/Animated/ShareIcon.vue'
</script>

<template>
    <div class="w-[120px] h-screen fixed top-0 left-0 bottom-0 border-r-2 border-[#EEF1F8]">
        <div class="relative w-full h-full">
            <div
                class="absolute top-0 mt-[120px] right-0 w-16 flex flex-col items-center justify-center gap-8"
            >
                <FeedIcon />
                <HashtagIcon />
                <BellIcon />
                <MailIcon />
                <ShareIcon />
            </div>
        </div>
    </div>
</template>

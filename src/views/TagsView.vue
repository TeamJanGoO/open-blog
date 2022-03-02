<script setup lang="ts">
import { ref } from 'vue'
import MyTagBadge from '../components/sub-components/MyTagBadge.vue'

const data = ref([
    {title: 'Graphics Design', tags: [ 'design', 'graphics', 'art' ]},
    {title: 'Web Development', tags: [ 'development', 'web' ]},
    {title: 'Programming', tags: [ 'programming', 'code' ]},
    {title: 'Music', tags: [ 'music', 'sound', 'audio', 'audio-visual' ]},
    {title: 'Gaming', tags: [ 'gaming', 'video', 'video-game' ]},
    {title: 'Photography', tags: [ 'photography', 'photo', 'camera', 'camera-lens' ]},
])
</script>

<template>
    <div class="pb-[120px] w-full">
        <h1 class="mb-[67px] text-[36px] text-[#1E4571] leading-[49px] font-bold flex items-center gap-5">
            <span>Topics</span>
            <span class="text-[#ACBADB] text-[11px] leading-[15px] translate-[0.1em]">What you will find on Team JanGoO Blog</span>
        </h1>
        <div class="flex flex-col gap-4 ml-12">
            <div v-for="(item, index) in data" :key="index" class="flex flex-col gap-2">
                <h1 class="text-[#4F72C6] text-[24px] font-[33px] font-bold">{{ item.title }}</h1>
                <p class="flex gap-3 flex-wrap">
                    <MyTagBadge v-for="(tag, i) in item.tags" :key="i" :text="tag" />
                </p>
            </div>
        </div>
    </div>
</template>
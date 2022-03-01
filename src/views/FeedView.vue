<script setup lang="ts">
import MyBlogPostCard from "../components/MyBlogPostCard.vue"
import MyProfileBadge from "../components/sub-components/MyProfileBadge.vue"
import MyButton from "../components/sub-components/MyButton.vue"
import MyTagBadge from "../components/sub-components/MyTagBadge.vue"
import { ref } from "vue"

import { useThemeStore } from "@/stores/themeStore"

const loremIpsumWords = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipisicing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
    "Ut",
    "enim"
];

const posts = ref(3)

</script>

<template>
  <div class="flex flex-col xl:flex-row gap-[20px] xl:gap-[60px]">
    <div class="flex flex-col gap-[20px] xl:gap-[60px] pb-24">
      <div v-for="(item, index) in posts" :key="index">
        <MyBlogPostCard />
      </div>
      <div class="w-full flex justify-center items-center">
        <MyButton @click="posts += 3" text="load more" />
      </div>
    </div>
    <div class="hidden w-full min-w-[300px] max-w-fit xl:max-w-[350px] pb-20 xl:pb-0 lg:flex flex-row xl:flex-col gap-[20px] xl:gap-[60px]">
      <div
        class="transition-all duration-300 min-w-max rounded-[15px] border-2 p-[40px] flex flex-col gap-[18px]"
        :class="{ 'border-[#EEF1F8] bg-white': useThemeStore().theme === 'light', 'border-[#2A2D3D] bg-[#1D1E26]': useThemeStore().theme === 'dark' }"
      >
        <h1 class="text-[24px] leading-[33px] font-bold"
        :class="{ 'text-[#1E4571]': useThemeStore().theme === 'light', 'text-white': useThemeStore().theme === 'dark' }">Owners</h1>
        <div class="flex flex-col gap-5 w-full">
          <div>
            <MyProfileBadge name="Asad Ali" tag="Developers" />
          </div>
          <div>
            <MyProfileBadge name="Danish Fareed" tag="Graphic Designer" />
          </div>
        </div>
      </div>
      <div
        class="transition-all duration-300 rounded-[15px] border-2 p-[40px] flex flex-col gap-[18px]"
        :class="{ 'border-[#EEF1F8] bg-white': useThemeStore().theme === 'light', 'border-[#2A2D3D] bg-[#1D1E26]': useThemeStore().theme === 'dark' }"
      >
        <h1 class="transition-all duration-300 text-[24px] text-[#1E4571] leading-[33px] font-bold"
        :class="{ 'text-[#1E4571]': useThemeStore().theme === 'light', 'text-white': useThemeStore().theme === 'dark' }">Tags</h1>
        <div class="flex gap-2 flex-wrap">
          <div class="flex-0" v-for="(word, index) in loremIpsumWords" :key="index">
            <MyTagBadge :text="word" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

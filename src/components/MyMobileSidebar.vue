<script setup lang="ts">
import FeedIcon from '@/assets/icons/FeedIcon.vue'
import HashIcon from '../assets/icons/HashIcon.vue'
import BellIcon from '../assets/icons/BellIcon.vue'
import MailIcon from '../assets/icons/MailIcon.vue'
import ShareIcon from '../assets/icons/ShareIcon.vue'
import InfoIcon from '../assets/icons/InfoIcon.vue'
import MyButton from './sub-components/MyButton.vue'
import MyProfileBadge from './sub-components/MyProfileBadge.vue'
</script>

<template>
    <div class="w-full h-full pl-[40px] py-[40px] flex justify-center items-center">
        <div class="h-full w-full flex flex-col justify-between">
            <div class="flex flex-col items-start gap-14">
                <div>
                    <img class="w-full h-[32px]" src="@/assets/logo.svg" alt="Team JanGoO Blog Logo SVG">
                </div>
                <div class="flex flex-col w-full">
                    <div class="w-full flex gap-[29px] items-center">
                        <div>
                            <FeedIcon />
                        </div>
                        <div class="border-b-[1px] border-[#EEF1F8] py-[18px] flex-grow">
                            <a class="text-[14px] text-[#4F72C6] font-bold" href="#">Feed</a>
                        </div>
                    </div>
                    <div class="w-full flex gap-[29px] items-center">
                        <div>
                            <HashIcon />
                        </div>
                        <div class="border-b-[1px] border-[#EEF1F8] py-[18px] flex-grow">
                            <a class="text-[14px] text-[#4F72C6] font-bold" href="#">Topics</a>
                        </div>
                    </div>
                    <div class="w-full flex gap-[29px] items-center">
                        <div>
                            <BellIcon />
                        </div>
                        <div class="border-b-[1px] border-[#EEF1F8] py-[18px] flex-grow">
                            <a class="text-[14px] text-[#4F72C6] font-bold" href="#">Subscribe</a>
                        </div>
                    </div>
                    <div class="w-full flex gap-[29px] items-center">
                        <div>
                            <MailIcon />
                        </div>
                        <div class="border-b-[1px] border-[#EEF1F8] py-[18px] flex-grow">
                            <a class="text-[14px] text-[#4F72C6] font-bold whitespace-nowrap" href="#">Contact Us</a>
                        </div>
                    </div>
                    <div class="w-full flex gap-[29px] items-center">
                        <div>
                            <ShareIcon />
                        </div>
                        <div class="border-b-[1px] border-[#EEF1F8] py-[18px] flex-grow">
                            <a class="text-[14px] text-[#4F72C6] font-bold" href="#">Share</a>
                        </div>
                    </div>
                </div>
                <div>
                    <MyButton text="Subscribe" />
                </div>
            </div>
            <div class="flex flex-col gap-12">
                <div class="flex flex-col gap-5 w-full">
                    <div>
                        <MyProfileBadge name="Asad Ali" tag="Developers" />
                    </div>
                    <div>
                        <MyProfileBadge name="Danish Fareed" tag="Graphic Designer" />
                    </div>
                </div>
                <div class="flex gap-7">
                    <InfoIcon />
                    <span class="text-[#818BA5] text-[14px] font-bold">Info</span>
                </div>
            </div>
        </div>
    </div>
</template>
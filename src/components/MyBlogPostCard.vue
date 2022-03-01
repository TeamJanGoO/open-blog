<script setup lang="ts">
import MyTagBadge from "./sub-components/MyTagBadge.vue";

</script>

<template>
    <div class="w-full rounded-[15px] border-2 border-[#EEF1F8] bg-white pt-[30px] pb-[29px] px-[50px] flex flex-col">
        <div class="flex gap-5">
            <div class="flex gap-3">
                <img src="@/assets/icons/eye.svg" alt="Eye SVG">
                <span class="text-[#ACBADB] text-[13px]">11 views</span>
            </div>
            <div class="flex gap-3">
                <img src="@/assets/icons/calender.svg" alt="Calender SVG">
                <span class="text-[#ACBADB] text-[13px]">14 Feb 2022</span>
            </div>
        </div>
        <div class="mb-[10px]">
            <h1 class="text-[#1E4571] text-[24px] lg:text-[36px] font-bold my-3 lg:my-0 leading-[28px] lg:leading-[49px]">When will the COVID-19 pandemic end?</h1>
        </div>
        <div class="mb-[20px]">
            <p class="text-[#959FB6] text-[18px] leading-[28px] line-clamp-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, doloremque itaque reprehenderit, non quia dignissimos excepturi magnam voluptate debitis, voluptas adipisci! Obcaecati ipsum commodi provident voluptas voluptate qui sit delectus aliquam sed quam assumenda, accusantium ea impedit consequatur earum voluptatibus atque unde repellat. Ad id dolorem praesentium mollitia aliquam natus officiis perspiciatis accusamus, iusto nam expedita aut eligendi aliquid voluptatibus, tenetur fugit suscipit necessitatibus odit. Minus, exercitationem repellendus incidunt, debitis, quis totam reiciendis natus quidem quisquam quia perferendis distinctio ad?
            </p>
        </div>
        <div class="flex flex-wrap gap-3">
            <MyTagBadge text="design" />
            <MyTagBadge text="ui" />      
        </div>
    </div>
</template>
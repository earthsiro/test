<template lang="">
  <div class="card card-compact w-full bg-base-100 shadow-xl">
    <figure>
      <img src="../../../assets/image/RpTeHEE.jpeg" alt="Shoes" />
    </figure>
    <div class="card-body text-left">
      <h2 class="card-title">{{ item.roomName }}</h2>
      <p>By {{ item.hostName }}</p>
      <div class="flex justify-between items-end">
        <div class="flex items-center">
          <span class="text-gray-400 text-[1rem] leading-4">{{item.currentMember}}</span>&nbsp;/&nbsp;
          <span class="text-[#005fff] text-[1rem] leading-4">{{item.limitMember}}</span>
        </div>
        <van-button
          color="#005fff"
          class="flex text-[8px] rounded-full"
        >
          Join
        </van-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { MatchingType } from "../../../interfaces/homepage/MatchingType";
import { defineProps } from "vue";

const props = defineProps({
  item: {
    type: Object as () => MatchingType,
    require: true,
  },
});
</script>
<style lang=""></style>

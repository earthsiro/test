<template lang="">
  <ActionBar>
    <van-nav-bar title="Announcement" class="mb-8" />
    <div class="w-full h-full px-8 flex flex-col justify-center">
      <div class="flex justify-start items-start">
        <span class="text-xl text-left">Notices</span>
      </div>
      <div class="swipe-container mt-4">
        <van-swipe
          class="my-swipe"
          :autoplay="6000"
          vertical
          indicator-color="white"
        >
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </div>
      <van-divider />
      <div class="flex justify-start items-start">
        <span class="text-xl text-left">Stat</span>
      </div>
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">Total Match</div>
          <div class="stat-value text-primary">25.6K</div>
          <!-- <div class="stat-desc">21% more than last month</div> -->
        </div>

        <div class="stat">
          <div class="stat-title">your Location</div>
          <div class="stat-value text-secondary">2.6M</div>
          <!-- <div class="stat-desc">21% more than last month</div> -->
        </div>
      </div>
    </div>
  </ActionBar>
</template>
<script setup lang="ts">
import ActionBar from "../../components/layout/ActionBar.vue";

import { useAnnouncement } from "./useAnnouncement";
const { handleClickButton } = useAnnouncement();
</script>
<style lang="scss">
.search-button {
  background-color: linear-gradient(
    90deg,
    rgba(0, 95, 255, 1) 25%,
    rgba(153, 0, 255, 1) 100%
  );
}
.swipe-container {
  height: 180px;
  margin-bottom: 16px;
}
.van-swipe {
  height: 100%;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 180px;
  text-align: center;
  background-color: #005fff;
}
</style>

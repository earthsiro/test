<template lang="">
  <ActionBar>
    <div class="w-full h-full">
      <van-nav-bar title="Homepage" />
      <div class="swipe-container">
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

      <van-button
        color="linear-gradient(90deg, rgba(0,95,255,1) 25%, rgba(153,0,255,1) 100%)"
        class="w-[80%]"
        round
      >
        Search
      </van-button>
      <div class="w-full mt-4 mb-4 bg-red-300">
        <MatchingListComponent :data="matchingList" />
      </div>
    </div>
  </ActionBar>
</template>
<script setup lang="ts">
import ActionBar from "../../components/layout/ActionBar.vue";
import MatchingListComponent from "../homepage/components/MatchingList.vue";

import { useHomepage } from "./useHomepage";
const { matchingList, handleClickButton } = useHomepage();
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
  margin-bottom: 24px;
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

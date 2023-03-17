<template lang="">
  <ActionBar>
    <van-nav-bar title="Matchmaking" class="mb-4"/>
    <div class="w-full h-full px-8">
      <van-button
        color="linear-gradient(90deg, rgba(0,95,255,1) 25%, rgba(153,0,255,1) 100%) "
        class="w-[80%]"
        round
      >
        Search
      </van-button>
      <div class="w-full mt-4 mb-4">
        <MatchingListComponent :data="matchingList" />
      </div>
    </div>
  </ActionBar>
</template>
<script setup lang="ts">
import ActionBar from "../../components/layout/ActionBar.vue";
import MatchingListComponent from "./components/MatchingList.vue";
import { useMatchmaking } from "./hooks/useMatchmaking";
const { matchingList } = useMatchmaking();
</script>
<style lang=""></style>

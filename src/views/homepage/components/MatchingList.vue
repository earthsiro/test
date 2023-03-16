<template lang="">
  <div class="w-full h-full flex flex-wrap justify-between">
    <div class="room-content" v-for="match in data" :key="match.roomId">
      <!-- <pre>{{ room }}</pre> -->
      <MatchingItemComponent :item="match" />
    </div>
  </div>
</template>
<script setup lang="ts">
import MatchingItemComponent from "../components/MatchingItem.vue";
import { MatchingType } from "../../../interfaces/homepage/MatchingType";
import { defineProps } from "vue";

const props = defineProps({
  data: {
    type: Array as () => MatchingType[],
    require: true,
  },
});

console.log(props.data);
</script>
<style lang="scss">
.room-content{
    width: 100%;
    margin: 1rem 0 ;
}
@media (min-width:380px) {
    .room-content{
        width: 48%;
        margin: 1rem 0 ;
    }
}
</style>

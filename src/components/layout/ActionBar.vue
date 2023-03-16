<template lang="">
  <slot />
  <van-action-bar class="layout">
    <div v-for="menu in menuList" :key="menu.name">
      <van-action-bar-icon :icon="mappingIcon(menu.name)" :text="menu.name" />
    </div>
    <van-action-bar-button
      color="linear-gradient(90deg, rgba(0,95,255,1) 25%, rgba(153,0,255,1) 100%)"
      text="Button"
    />
    <van-action-bar-button
      color="linear-gradient(90deg, rgba(153,0,255,1) 0%, rgba(248,0,255,1) 100%)"
      text="Button"
    />
  </van-action-bar>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
const menuList = [
  {
    name: "homepage",
    icon: "wap-home-o",
    iconActive: "wap-home",
    path: "/homepage",
  },
  { name: "chat", icon: "chat-o", iconActive: "chat", path: "/chat" },
];
const mappingIcon = (menu: string): string => {
  let currentPage = route.path.substring(1, route.path.length);
  const targetMenu = menuList.find((m) => m.name == menu);
  if (targetMenu) {
    if (menu === currentPage) return targetMenu?.iconActive;
    else {
      return targetMenu?.icon;
    }
  }
  return "";
};
</script>
<style lang="scss">
.layout {
  max-width: 500px;
  width: 100%;
  margin: auto;
  z-index:10;
}
</style>

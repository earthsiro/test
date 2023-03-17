<template lang="">
  <slot />
  <van-action-bar class="layout">
    <van-action-bar-button
      color="linear-gradient(90deg, rgba(0,95,255,1) 25%, rgba(153,0,255,1) 100%)"
      text="Find"
      @click="router.push('/matchmaking')"
    />
    <van-action-bar-button
      color="linear-gradient(90deg, rgba(153,0,255,1) 0%, rgba(248,0,255,1) 100%)"
      text="Button"
    />
    <div v-for="menu in menuList" :key="menu.name">
      <van-action-bar-icon :icon="mappingIcon(menu.name)" :text="menu.name" @click="handleClickNav(menu.path)" />
    </div>
  </van-action-bar>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const menuList = [
  {
    name: "announcement",
    icon: "comment-o",
    iconActive: "comment",
    path: "/announcement",
  },
  { name: "chat", icon: "chat-o", iconActive: "chat", path: "/chat" },
  {
    name: "profile",
    icon: "manager-o",
    iconActive: "manager",
    path: "/profile",
  },
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
const handleClickNav = (pathName:string):void =>{
  router.push(pathName)
}
</script>
<style lang="scss">
.layout {
  max-width: 500px;
  width: 100%;
  margin: auto;
  z-index: 10;
}
</style>

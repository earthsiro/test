<script setup lang="ts">
</script>

<template>
  <router-view v-slot="{ Component, route }">
        <FadeInOut
            :entry="route.meta.entry || 'center'"
            :exit="route.meta.entry || 'center'"
            :duration="{ enter: route.meta.duration || 300, leave: 0 }"
            mode="out-in"
        >
            <component :is="Component" />
        </FadeInOut>
    </router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

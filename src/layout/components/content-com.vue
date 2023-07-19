<script setup></script>

<template>
  <a-scrollbar style="height: calc(100vh - 48px); width: 100%; overflow: auto" outer-class="router-scrollbar">
    <div class="content-com-container">
      <router-view v-slot="{ route, Component }">
        <transition name="fade" mode="out-in">
          <!-- <keep-alive v-if="route.meta.keepAlive"> -->
          <component :is="Component" :key="route.fullPath" />
          <!-- </keep-alive> -->
        </transition>
      </router-view>
    </div>
  </a-scrollbar>
</template>

<style lang="scss" scoped>
.content-com-container {
  padding: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(50%);
}

</style>

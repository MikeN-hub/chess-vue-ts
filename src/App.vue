<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
import TheMenu from "./components/TheMenu.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <el-container class="app">
    <el-header height="">
      <TheHeader />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <TheMenu />
      </el-aside>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
    <el-footer>
      <TheFooter />
    </el-footer>
  </el-container>
</template>

<style lang="scss" scoped>
.app {
  height: 100vh;
  width: 100vw;
}
</style>

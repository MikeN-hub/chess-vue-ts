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
      <el-aside width="200px"> </el-aside>
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
  .el-header {
    background-color: var(--el-color-primary-light-7);
    padding: 0;
  }
  .el-aside {
    background-color: var(--el-color-success-light-3);
  }
  .el-main {
    background-color: var(--el-color-info-light-5);
  }
  .el-footer {
    background-color: var(--el-color-primary-light-5);
  }
}
</style>

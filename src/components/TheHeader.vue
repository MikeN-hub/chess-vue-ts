<template>
  <el-menu
    class="menu"
    mode="horizontal"
    :default-active="activeIndex"
    background-color="#545c64"
    ellipsis
  >
    <el-menu-item index="1">
      
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
const activeIndex = ref("1");
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
}
</style>

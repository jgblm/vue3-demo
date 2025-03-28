<script setup>
import router from "../router/index.js";
import {ArrowRight} from "@element-plus/icons-vue";

</script>

<template>
  <div class="breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="item in router.currentRoute.value.matched" :key="item.path">
        <router-link :to="item.path">
          {{ item.meta.title }}
        </router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>

<style scoped>

</style>
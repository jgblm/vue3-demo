<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  menuItems: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <el-menu-item v-for="(item,index) in menuItems" :key="item._id" :index="item._id.toString()">
    <span>{{ item.menuName }}</span>
  </el-menu-item>
</template>

<style scoped>

</style>
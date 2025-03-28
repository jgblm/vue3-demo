<template>
  <h5 class="mb-2">Default colors</h5>
  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      router >
    <el-sub-menu v-for="(item,index) in menuList" :key="item._id" :index="item._id.toString()">
      <template #title>
        <el-icon>
          <icon-menu/>
        </el-icon>
        <span>{{ item.menuName }}</span>
      </template>
      <NodeMenu v-if="item.children && item.children.length > 0" :menuItems="item.children"/>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import {
  Menu as IconMenu
} from '@element-plus/icons-vue'
import {onMounted, defineProps} from "vue";
import NodeMenu from "./NodeMenu.vue";

const props = defineProps(
    {
      menuList: {
        type: Array,
        default: () => [],
      },
    }
)

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
onMounted(() => {
  console.log("treeMenu", props.menuList)
})
</script>

<style scoped>

.tree-menu li {
  margin: 5px 0;
}
</style>
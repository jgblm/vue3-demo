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
  >
    <el-menu-item v-for="(item,index) in menuList" :key="item._id" index="{{index}}">
      <el-icon>
        <icon-menu/>
      </el-icon>
      <span>{{ item.menuName }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import {
  Menu as IconMenu
} from '@element-plus/icons-vue'
import {onMounted, defineProps} from "vue";

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
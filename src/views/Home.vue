<script setup>
import {ElIcon} from 'element-plus';
import {Bell, Fold} from '@element-plus/icons-vue';
import {onMounted, ref} from 'vue';
import {getMenuList, noticeCount} from '../api/user.js';
import TreeMenu from '../components/TreeMenu.vue'; // 引入 TreeMenu 组件
import Breadcrumb from "../components/Breadcrumb.vue";

const userName = 'Donna Lewis'; // 用户名示例数据
const hasNewNotice = ref(false);
const menuList = ref([]); // 定义 menuList 响应式变量

onMounted(() => {
  fetchNoticeCount();
  fetchMenuList();
});

const fetchNoticeCount = async () => {
  try {
    const count = await noticeCount();
    hasNewNotice.value = count > 0;
  } catch (error) {
    console.error('Failed to fetch notice count:', error);
  }
};

const fetchMenuList = async () => {
  try {
     // 将获取到的菜单列表赋值给 menuList
    menuList.value = await getMenuList();
  } catch (error) {
    console.error('Failed to fetch menu list:', error);
  }
};
</script>

<template>
  <div class="basic-layout">
    <div class="nav-side">
      <TreeMenu :menuList="menuList" /> <!-- 添加 TreeMenu 组件，并传递 menuList 数据 -->
    </div>
    <div class="content-right">
      <div class="nav-top">
        <div class="left-section">
          <el-icon :size="20" @click="toggleMenu">
            <Fold />
          </el-icon>
          <Breadcrumb>面包屑</Breadcrumb>
        </div>
        <div class="right-section">
          <el-icon :size="20">
            <Bell/>
            <span v-if="hasNewNotice" class="red-dot"></span>
          </el-icon>
          <span>{{ userName }}</span>
        </div>
      </div>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.basic-layout {
  display: flex;
}

.nav-side {
  width: 200px; /* 固定左侧宽度 */
  height: 100vh;
  background-color: #001529; /* 示例背景色 */
}

.content-right {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.nav-top {
  height: 50px; /* 固定顶部高度 */
  background-color: #d0d0d0; /* 示例背景色 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .left-section {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 10px;

    .red-dot {
      width: 8px;
      height: 8px;
      background-color: red;
      border-radius: 50%;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}

.wrapper {
  flex: 1;
  background-color: #ffffff; /* 示例背景色 */
  padding: 20px;
  height: calc(100vh - 50px);
}
</style>
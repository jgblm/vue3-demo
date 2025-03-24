<script setup>
import {ElIcon} from 'element-plus';
import {Bell, Fold} from '@element-plus/icons-vue';
import { ref, onMounted } from 'vue';
import { noticeCount } from '../api/user.js';

const userName = 'Donna Lewis'; // 用户名示例数据
const hasNewNotice = ref(false);

onMounted(() => {
  fetchNoticeCount();
});

const fetchNoticeCount = async () => {
  try {
    const count = await noticeCount();
    hasNewNotice.value = count > 0;
  } catch (error) {
    console.error('Failed to fetch notice count:', error);
  }
};
</script>

<template>
  <div class="basic-layout">
    <div class="nav-side">
      <!-- 左侧内容 -->
    </div>
    <div class="content-right">
      <div class="nav-top">
        <div class="left-section">
          <el-icon :size="20" @click="toggleMenu">
            <Fold />
          </el-icon>
          <span>面包屑</span>
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
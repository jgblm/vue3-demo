<template>
  <div class="basic-layout">
    <div class="nav-side">
      <!-- 左侧内容 -->
    </div>
    <div class="content-right">
      <div class="nav-top"></div>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
// 你的脚本代码
</script>

<style scoped>
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
}

.wrapper {
  flex: 1;
  background-color: #ffffff; /* 示例背景色 */
  padding: 20px;
  height: calc(100vh - 50px);
}
</style>

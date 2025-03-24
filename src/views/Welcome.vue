<script setup>
defineProps({
  msg: String
})
</script>

<template>
  <div class="welcome-container">
    <div class="welcome-text">
      <h1>欢迎体验</h1>
      <h2>慕课通用后台管理系统</h2>
      <p>- Vue3.0 + ElementPlus + Node + Mongo打造通用后台管理系统</p>
    </div>
    <div class="welcome-image">
      <img src="https://placehold.co/400x400" alt="卡通人物站在平板电脑前，设备上显示图表" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.welcome-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
}

.welcome-text {
  text-align: left;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 36px;
    color: #87CEEB; // 修改：设置副标题颜色为更淡的蓝色
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    color: #666;
  }
}

.welcome-image img {
  width: 400px;
  height: auto;
}
</style>
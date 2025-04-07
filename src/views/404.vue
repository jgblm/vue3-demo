<script setup>

</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <p>抱歉，您访问的页面不存在。</p>
    <router-link to="/">返回主页</router-link>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

h1 {
  font-size: 5rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.el-button {
  padding: 10px 20px;
  font-size: 1rem;
}
</style>
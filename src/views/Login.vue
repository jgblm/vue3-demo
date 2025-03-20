<script setup>
</script>

<template>
  <div class="login-wrapper">
    <div class="modal">
      <el-form>
        <div class="title">火星</div>
        <el-form-item>
          <el-input type="text" prefix-icon="User"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" prefix-icon="Lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // 使登录页面占满整个视口高度
  background-color: #add8e6; // 浅蓝色背景

  .modal {
    background-color: #ffffff; // 模态框背景色
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // 添加阴影效果
    width: 30%;
    max-width: 600px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .el-form {
      width: 100%; // 确保表单宽度与 modal 宽度一致

      .title {
        font-size: 24px;
        margin-bottom: 20px;
        text-align: center;
      }

      .el-input {
        width: 100%;
      }

      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
<script setup>
import {useRouter} from "vue-router";
import {onMounted} from "vue";
import apiInstance from "../utils/request.js";

onMounted(() => {
  console.log("login mounted")
  // 请求登录接口
  apiInstance.request({
    method: "post",
    url: "/login",
    data: {
      username: "jack",
      password: "123456"
    }
  }).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
});

const router = useRouter();
const goHome = () => {
  router.push("/")
};
</script>

<template>
<h1>Login</h1>
  <el-button @click="goHome">go to welcome</el-button>
</template>

<style scoped>

</style>
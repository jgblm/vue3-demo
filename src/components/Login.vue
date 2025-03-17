<script setup>
import {useRouter} from "vue-router";
import Welcome from "./Welcome.vue"

const router = useRouter();
const goHome = () => {
  router.push("/welcome")
};
</script>

<template>
<h1>Login</h1>
  <el-button @click="goHome">go to login</el-button>
  <Welcome msg="jack"/>
</template>

<style scoped>

</style>
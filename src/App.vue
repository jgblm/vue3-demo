<script setup>
import {onMounted} from "vue";
import storage from "./store/index.js"

onMounted(() => {
  storage.setItem("userInfo",{name:"jack",age:18})
  storage.setItem("token","123456789")
  console.log(storage.getStorage())
  storage.removeItem("token")
  console.log(storage.getStorage())
});
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

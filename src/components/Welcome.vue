<script setup>
defineProps({
  msg: String
})
</script>

<template>
<h1>welcome {{msg}}}</h1>
  <router-link to="/login">login</router-link>
</template>

<style scoped>

</style>
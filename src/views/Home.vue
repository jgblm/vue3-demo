<template>
  <div>
    <h1>Home Page</h1>
    {{ content }}
    <hr>
    <button @click="changeContent">Click Me</button>
  </div>
</template>

<script setup>
import {reactive, ref, watch} from "vue";

let content = reactive({
  name: 'Home Page',
  value: 'Hello World'
})
const changeContent = () => {
  content.name='12345'
}

watch(content, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})
</script>
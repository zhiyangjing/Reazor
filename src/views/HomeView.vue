<script setup lang="ts">
import router from '@/router/index'

import { computed, reactive,ref } from 'vue';
import axios from 'axios'


function toSomewhere(url: string) {
  router.push(url)
}

axios({
  method:"GET",
  url:"/api/"
}).then((res)=>{
  console.log(res)
})



</script>

<template>
  <h1>REAZOR</h1>
  <h2 @click="toSomewhere('/playground')">Playground</h2>
  <h2 @click="toSomewhere('/login')">LogIn</h2>
  <h2 @click="toSomewhere('/signup')">SignIn</h2>
  <h2 @click="toSomewhere('/read')">Read</h2>
</template>

<style scoped>

</style>
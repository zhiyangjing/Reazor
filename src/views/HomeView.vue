<script setup lang="ts">
import router from '@/router/index'
import { computed, reactive,ref } from 'vue';
function toSomewhere(url: string) {
  router.push(url)
}
</script>

<template>
  <h1>REAZOR</h1>
  <h2 @click="toSomewhere('/playground')">Playground</h2>
  <h2 @click="toSomewhere('/login')">LogIn</h2>
</template>

<style scoped>

</style>
<script setup lang="ts">
import router from '@/router/index'

function toSomewhere(url: string) {
  router.push(url)
}

</script>

<template>
<div>
    <h2>抱歉，您输入的地址没有找到</h2>
    <h3>o(╥﹏╥)o</h3>
    <RouterLink to="/read" id="jump">
          返回阅读
    </RouterLink>
</div>
</template>

<style scoped>
#jump {
  font-size: 15px;
  color:#409EFF;
  text-decoration: none;
  transition-duration: 0.2s;
  text-align: center;
}
</style>
<script setup lang="ts">
import router from '@/router/index'
import { computed, createApp, reactive,ref } from 'vue';

const input1 = ref('')
const input2 = ref('')

function toSomewhere(url: string) {
  router.push(url)
}
</script>

<template>
  <main>
    <body>
      <div class="container">
        <div class="title">登录Reazor</div>
        <div class="enter">用户名
          <el-input  
          style="height: 40px;
          background-color:#409EFF;
          font-size:20px;
          border:0px solid;
          border-radius: 10px;"
          v-model="input1" 
          placeholder="请输入用户名" 
          clearable autofocus="true"/>
          密码
          <el-input
            v-model="input2"
            style="height: 40px;
            font-size:20px;"
            type="password"
            placeholder="请输入密码"
            show-password
           />
          <el-button 
           style="height:40px;"
           type="primary" plain>登录</el-button>
          <div style="text-align: center;">
            <a href="" style="font-size: 17px;
            color:#409EFF;
            text-decoration: none;" >
            没有账号？注册一个
            </a>
          </div>
        </div>
      </div>

    </body>
  </main>
</template>

<style scoped>
body {
  display: flex;
  flex-direction: columns;
  height:90vh;
  align-items: center;
  justify-content: center;
}
.container {
  height:500px;
  width:400px;
  display: flex;
  flex-direction: column;;
  justify-content: space-evenly;
  align-items: center;
  border:2px solid #409EFF;
  border-radius:30px;
  background-color: rgb(230, 240, 249);
}
.title {
  font-size: 40px;
  color:#409EFF;
}
.enter {
  height:400px;
  width:350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color:#409EFF;
  font-size: 25px;
}
a :hover {
  color:#1589fe;
}
</style>
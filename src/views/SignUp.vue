<script setup lang="ts">
import router from '@/router/index'
import { computed, createApp, reactive,ref } from 'vue';
import { watch } from 'vue'

const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const same = ref(false)

function toSomewhere(url: string) {
  router.push(url)
}

watch([()=>input2,input3],()=> {
  if (input2.value != input3.value){
    same.value = true
  }
  else {
    same.value = false
  }
})

</script>

<template>
  <main>
    <body>
      <div class="container">
          <div class="title">
          <img src="../asset/icons/Book.svg" id="icon"/>
            注册Reazor
          </div>
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
          请输入密码
          <el-input
            v-model="input2"
            style="height: 40px;
            font-size:20px;"
            type="password"
            placeholder="请输入密码"
            show-password
           />
           <div>请确认密码
           <div id="wrong" v-if="same">(两次输入不一致)</div></div>
           <el-input
            v-model="input3"
            style="height: 40px;
            font-size:20px;"
            type="password"
            placeholder="请确认密码"
            show-password
           />
          <el-button 
           style="height:40px;font-size: 17px;"
           type="primary" 
           plain>确定</el-button>
          <RouterLink to="/login" id="jump">
          返回登录
          </RouterLink>
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
  display: flex;
}
#icon {
  height:50px;
}
.enter {
  height:420px;
  width:350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color:#409EFF;
  font-size: 25px;
}
#jump {
  font-size: 15px;
  color:#409EFF;
  text-decoration: none;
  transition-duration: 0.2s;
  text-align: center;
}
#jump:hover {
  color:#034486;
}
#wrong {
  color:red;
  font-size:17px;
  display: inline-block;
}
</style>
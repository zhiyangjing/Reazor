<script setup lang="ts">
import router from '@/router/index'
import { computed, createApp, reactive,ref } from 'vue';
import { watch } from 'vue'
import { login } from '@/composable/api/getLogIn'
import { getState } from '@/composable/api/getState';
import { ElMessage } from 'element-plus'
const input1 = ref('')
const input2 = ref('')
const canclick = ref(false)


function toSomewhere(url: string) {
  router.push(url)
}


const open1 = () => {
  ElMessage('this is a message.')
}
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}

const open4 = () => {
  ElMessage.error('Oops, this is a error message.')
}

watch([()=>input1,input2],()=>{
  if (input1.value != "" && input2.value != ""){
    canclick.value = true
  }else{
    canclick.value = false
}
})

async function getlogin(){
  console.log(3)
  const canlogin = ref(true)
  try{
    const res = await getState()
    toSomewhere('/')
    toSomewhere('/read')
    
    console.log("已有账号登录")
    console.log(res)
    canlogin.value = false
    setTimeout(() => {
      // location.reload()
      ElMessage({
        message: '已有帐号登录',
        type: 'warning',
      })
      location.reload()
    }, 200);
    
    
  }catch(e){
    
  }
  console.log(4)
  console.log(canlogin.value)
  if (canlogin.value){
    console.log("try to getlogin")
    try{
      const res2 = await login(input1.value,input2.value)
      toSomewhere('/')
      toSomewhere('/read')
      setTimeout(() => {
        location.reload()
        console.log("成功登录")
        ElMessage({
          message: '登录成功',
          type: 'success',
        })
      }, 500);
    }catch(e){
      ElMessage({
        message: '账号或密码错误',
        type: 'error',
      })
    }
  }
}

</script>

<template>
  <main>
    <body>
      <div class="container">
          <div class="title">
          <img src="../asset/icons/Book.svg" id="icon"/>
            登录Reazor
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
          @click="getlogin"
           style="height:40px;font-size: 17px;"
           type="primary" v-if="canclick" plain>登录</el-button>
          <el-button 
           style="height:40px;font-size: 17px;"
           type="primary" v-else plain disabled>请输入用户名和密码</el-button>
          <div style="text-align: center;">
            <RouterLink to="/signup" id="jump">
            没有账号？注册一个
            </RouterLink>
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
  box-shadow: 0px 5px 10px rgb(207, 217, 232);
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
  font-size: 17px;
  color:#409EFF;
  text-decoration: none;
  transition-duration: 0.2s;
}
#jump:hover {
  color:#034486;
}
</style>
<script setup lang="ts">

import { reactive, ref } from 'vue'
import { getState } from '@/composable/api/getState';
import { onMounted } from 'vue';
import { watch } from 'vue'
import { getChange } from '@/composable/api/getChange'
import { logout } from '@/composable/api/getLogout';
import router from '@/router/index';
import { ElMessage } from 'element-plus'

const dialogFormVisible = ref(false)

const labelPosition = ref('top')

const formLabelAlign = reactive({
  name: '',
  code1: '',
  code2: '',
})

const username = ref("")

const correct = ref(true)
watch(formLabelAlign,()=> {
  if ((formLabelAlign.code1 != formLabelAlign.code2)
  || (formLabelAlign.code1 == '' )
  || (formLabelAlign.code2 == '')){
    correct.value = false
  }
  else {
    correct.value = true
  }
})

const information = ref({
  name:String,
} as any)
async function getinformation(){
  const res = await getState()
  information.value = res
  console.log(information.value.name)
  username.value = information.value.name
}
onMounted(getinformation)


function changeinformation(){
  getChange(formLabelAlign.name,formLabelAlign.code1)
  information.value.name = formLabelAlign.name
}

// function toSomewhere(url: string) {
//   router.push(url)
// }

function Logout(){
  logout()
  ElMessage({
    message: '成功退出登录',
    type: 'success',
  })
}

</script>



<template>
  <div class="top">
    <div id="leftpart">
      <img id="logo" src="../asset/icons/Book.svg" />
      Reazor
    </div>
    <div id="rightpart">
      <div>
      你好呀,{{ information.name }}
      </div>
      <div id="modify">
        <!-- <el-button class="el-icon-user-solid" circle id="user" @click="dialogFormVisible = true"/> -->
        <el-button @click="getinformation(),dialogFormVisible = true" circle id="user">
          <img style="height:35px;" src="../asset/icons/User.svg"/>
        </el-button>
      </div>
      <div>
        <RouterLink to="/login" style="text-decoration:none;"> 
          <el-button type="primary" round @click="Logout">退出登录</el-button>
        </RouterLink>
      </div>
    </div>
  </div>

  <el-dialog v-model="dialogFormVisible" title="修改用户信息">
    <el-form
    :label-position="labelPosition"
    label-width="100px"
    :model="formLabelAlign"
    style="max-width: 460px"
  >
    <el-form-item label="昵称">
      <el-input v-model="formLabelAlign.name" :placeholder="username"/>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formLabelAlign.code1" show-password/>
    </el-form-item>
    <el-form-item label="确认密码" v-if="correct">
      <el-input v-model="formLabelAlign.code2" show-password/>
    </el-form-item>
    <el-form-item label="两次输入不一致" v-else>
      <el-input v-model="formLabelAlign.code2" show-password/>
    </el-form-item>
    

  </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="changeinformation(),dialogFormVisible = false" :disabled="!correct">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>


<style scoped>
.top {
  margin:0 0 0 0;
  height:50px;
  width:100%;
  border-bottom: 1px;
  border-color: #e9f4ff;
  border-style: solid;
  border-top:0px;
  border-left:0px;
  border-right:0px;
  display: flex;
  align-items: center;
  box-shadow: 0px 5px 10px rgb(207, 217, 232);
}
#logo {
  height:35px;
  margin-left: 10px;
}
#leftpart {
  display: flex;
  flex-direction: row;
  color:#409EFF;
  align-items: center;
  font-size: 40px;
}
#rightpart {
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-evenly;
  margin: auto;
  margin-right:20px;
  color:#409EFF;
  font-size: 25px;
}
#user {
  height:30px;
  width:30px;
}
#modify {
  margin-left:20px;
  margin-right:20px;
}
</style>
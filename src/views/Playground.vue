<script setup lang="ts">

import axios from 'axios'
import { getPasslist } from '@/composable/api/useGetPassageList'
import { ref } from 'vue'

import { getSignIn } from '@/composable/api/useSignUp'
import { getState } from '@/composable/api/getState'
import { login } from '@/composable/api/getLogIn'
import { getPassage } from '@/composable/api/getPassage'
const type = ref('')
const page = ref(1)
const limit = ref(1)

const name = ref('someone')
const code = ref('1234')

function getpass(){
  getPassage()
}

function submit2() {
  console.log(login())
}

function submit() {
  console.log(getPasslist())
}


function signup() {
  getSignIn()
}

function getinformation() {
  getState()
}

function myTry() {
  console.log(axios({
    method:'POST',
    url:'/user/registry',
    data:{
      "name":"someone1",
      "password":"1234"
    }
  }))
}
</script>


<template>
  <input type="text" v-model="type">
  <input type="text" v-model="page">
  <input type="text" v-model="limit">
  <button @click="submit">submit</button>
  <hr/>
  <br/>
  
  <button @click="signup">Sign Up</button>
  <hr/>
  <br/>
  <button @click="getinformation">获取信息</button>
  <hr/>
  <br/>
  <button @click="myTry">尝试</button>
  <hr/>
  <br/>
  <input type="text" v-model="name">
  <input type="text" v-model="code">
  <button @click="submit2">submit2</button>
  <hr/>
  <br/>
  <button @click="getpass">getpassage</button>

</template>
<style scoped>

</style>
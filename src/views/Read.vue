<script setup lang="ts">

import router from '@/router/index'
import { computed, createApp, reactive,ref } from 'vue';
import { watch } from 'vue'
import Header from '../components/Header.vue'
import Search from '@/components/Search.vue'
import Display from '@/components/Display.vue';
import Footer from '@/components/Footer.vue';
import ShowPassage from '@/components/ShowPassage.vue';

const page = ref(1)
const limit = ref(4)

const data = ref(Promise)

const readingid = ref(Number)

watch(data,()=>{
  console.log("from watch")
  console.log(data.value)
})

const notreading = ref(true)
watch(readingid,()=>{
  notreading.value = false
})
</script>
<template>
  <body>
    <Header>
    </Header>
    
    <Search id="search" :page="page" :limit="limit" @respose="(msg)=> data = msg" v-if="notreading">
    </Search>

    <Display id="display" :data="data" v-if="notreading" @response="(msg)=>readingid=msg">

    </Display>
    <Footer id="footer" v-if="notreading">

    </Footer>
    <ShowPassage v-if="!notreading" id="reading" :passageid="readingid" @response="(msg)=>notreading = msg">

    </ShowPassage>
  </body>
</template>

<style scoped>
body {
  margin:0 0 0 0;
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#search {
  margin-top:20px;

}
#display {
  margin-top:15px;
}
#footer {
  margin-top:20px;
}
#reading {
  margin-top:20px;
  margin-bottom:100px;
}
</style>
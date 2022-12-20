<script setup lang="ts">

import router from '@/router/index'
import { computed, createApp, reactive,ref } from 'vue';
import { watch } from 'vue'
import Header from '../components/Header.vue'
import Search from '@/components/Search.vue'
import Display from '@/components/Display.vue';
import Footer from '@/components/Footer.vue';

const page = ref(1)
const limit = ref(4)

</script>
<template>
  <body>
    <Header>
    </Header>
    
    <Search id="search" :page="page" :limit="limit">
    </Search>

    <Display id="display">

    </Display>
    <Footer id="footer">

    </Footer>
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
</style>
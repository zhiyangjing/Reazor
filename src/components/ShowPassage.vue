<script setup lang="ts">
import Passname from './Passname.vue';
import { ref } from 'vue'
import { watch } from 'vue'
import { onMounted } from 'vue';
import { getPassage } from '@/composable/api/getPassage';
import Paragraph from './Paragraph.vue';


const props = defineProps({
  passageid:Number
})

const data = ref({
  title:String,
  content:[]
} as any)

const emit = defineEmits(["response"])
const state = ref(true)

function goread(){
  emit('response',state.value)
}

async function show(){
  const res = await getPassage(props.passageid)
  data.value = res
  console.log(res)
}

onMounted(show)
</script>



<template>

  <div class="board">
    <b><div id="goback" @click="goread">&lt;返回文章列表</div></b>
    <Paragraph>
      <template v-slot:title>{{ data.title }}</template>
    </Paragraph>
    <Paragraph v-for="i in data.content">
      {{ i }}
    </Paragraph>
  </div>
</template>




<style scoped>
.board {

  height:inherit;
  width:80%;
  margin:0 0 0 0;
  border-color: #e9f4ff;
  border-style: solid;
  border:2px;
  display: flex;
  flex-direction: column;
  padding:5px;
  box-shadow: 0px 5px 10px rgb(207, 217, 232);
  padding-top: 15px;
}
#goback {
  color:#409EFF;
  margin-left:50px;
  margin-top:25px;
}
#goback:hover {
  color:#047ffb;

}
</style>
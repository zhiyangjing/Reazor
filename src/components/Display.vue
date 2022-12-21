<script setup lang="ts">
import Passname from './Passname.vue';
import { ref } from 'vue'
import { watch } from 'vue'
import { onMounted } from 'vue';
import ShowPassage from './ShowPassage.vue';


const props = defineProps({
  data:Promise
})

const data = ref({
  passage:[]
} as any)

async function show(){
  console.log("from display")
  const res = await props.data
  data.value = res
  console.log(data.value)
}
// onMounted(show)
watch(props,()=>{
  show()
})

const emit = defineEmits(["response"])


// function chosenpass(id:any){
//   console.log("clicked")
//   console.log(id)
// }
const id = ref(Number)
watch(id,()=>{
  console.log(id.value)
  emit('response',id.value)
})


</script>



<template>

  <div class="board">
    <Passname @click="show">
      <template v-slot:title>
        文章
        <!-- <button @click="show" >展示promise</button> -->
      </template>
    </Passname>
    <Passname v-for="i in data.passages" :id="i.id" @response="(msg)=>id = msg">{{ i.title }}</Passname>
  </div>
</template>




<style scoped>
.board {
  height:500px;
  /* height:inherit; */
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

</style>
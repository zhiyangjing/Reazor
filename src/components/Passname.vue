<script setup lang="ts">


const props = defineProps({
  id:Number
})

const emit = defineEmits(["response"])

function chosenpass(){
  emit('response',props.id)
}


</script>

<template>
  <div id="name" @click="chosenpass">
    <b id="title"><slot name="title" ></slot></b>
    <b><slot></slot></b>
  </div>
  <el-divider />
</template>


<style scoped>
#title {
  color:grey;
}
#name {
  height:20px;
  font-size: 17px;
  display: flex;
}
slot {
  display: flex;
  flex-direction: row;
}
b {
  margin-top:0px;
  margin-left:10px;
} 
</style>
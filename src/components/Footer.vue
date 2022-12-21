<script setup lang="ts">

import { ref } from 'vue'
import { getPasslist } from '@/composable/api/useGetPassageList';


const total = ref(100)
const currentPage4 = ref(4)
const pageSize4 = ref(10)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)


// const props = defineProps({
//   type:String,
// })



const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>


<template>
  <div class="board">
    <div class="demo-pagination-block">
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[5,10,15,20]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
  </div>
</template>




<style scoped>
.board {
  height:50px;
  width:80%;
  margin:0 0 0 0;
  border-color: #e9f4ff;
  border-style: solid;
  border:2px;
  display: flex;
  padding:5px;
  box-shadow: 0px 5px 10px rgb(207, 217, 232);
  align-items: center;
  justify-content: center;
}
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}
</style>
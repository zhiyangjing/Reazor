<script setup lang="ts">

import { ref } from 'vue'
import { getPasslist } from '@/composable/api/useGetPassageList';
import { onMounted } from 'vue';
import { watch } from 'vue'
import { emitChangeFn } from 'element-plus';

const props = defineProps({
  data:Promise
})

const data = ref({
  total:Number
} as any)

async function show(){
  console.log("from footer")
  const res = await props.data
  data.value = res
  // total.value = data.total
  total.value = data.value.total
}

watch(props,()=>{
  show()
})


const currentPage4 = ref(1)
const pageSize4 = ref(4)
const disabled = ref(false)
const total = ref(4)


// const props = defineProps({
//   type:String,
// })
const emit = defineEmits(['response'])
function change(){
  console.log("changing")
  emit('response',[currentPage4,pageSize4])
}

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
      :page-sizes="[2,4,6,8]"
      :disabled="disabled"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="change"
      @current-change="change"
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
<script setup lang="ts">
import {
  Delete,
  Edit,
} from '@element-plus/icons-vue'
import { ref } from 'vue';
import { getDelete } from '@/composable/api/getDelete';
import { getState } from '@/composable/api/getState';
import { onMounted } from 'vue';
import { getRemark } from '@/composable/api/getRemark';


const props = defineProps({
  data:Object,
} as any)


const information = ref({
  name:String,
} as any)

const candelete = ref(false)
async function checkinformation(){
  const res = await getState()
  information.value = res
  if (information.value.name == props.data.user.name){
    candelete.value = true
  }else{
    candelete.value = false
  }
}
onMounted(()=>{
  console.log(props.data.id)
  checkinformation()
})

const dialogFormVisible = ref(false)
const a = props.data.comment
console.log(a)
const textarea = ref(a)
function change(){
  getRemark(props.data.id,textarea.value)
}

const emit = defineEmits(['response','del'])

function rTime(date:string) {
  let a = parseInt(date.slice(11,13))+8
  let b = parseInt(date.slice(8,10))
  if (a >= 24){
    a = a % 24
    b = b + 1
  }
  new Date(2009,1,1)
  a.toString
  b.toString
  return date.slice(0,8)+b+' '+a+date.slice(13,19)
}

</script>


<template>
  <slot></slot>
  <div id="name">
    {{ data.user.name }}
  </div>
  <div id="chosenpart">
    {{ data.marked }}
  </div>
  <div id="comment">
    {{ data.comment }}
  </div>
  <div id="time">
    {{ rTime( data.updatedAt ) }}
  </div>
  <div id="rightpart" v-if="candelete"> 
    <el-button type="primary" :icon="Edit" circle @click="dialogFormVisible=true"/>
    <el-button type="danger" :icon="Delete" circle @click="getDelete(props.data.id),emit('response',false)"/>
  </div>
  <el-divider />
  <el-dialog v-model="dialogFormVisible" title="修改评论">
    <div >
      <el-input
      v-model="textarea"
      :rows="4"
      input-style="width:600px;"
      type="textarea"
      placeholder="Please input"
      
      />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="change(),emit('response',true),dialogFormVisible = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
#name {
  color:grey;
}
#chosenpart {
  color:grey;
}
#time {
  color:grey; 
}
#rightpart {
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: right;;
  margin: auto;
  margin-top:5px;
  color:#409EFF;
  font-size: 25px;
}
#goright {
  display: flex;
  flex-direction: row;
}
</style>
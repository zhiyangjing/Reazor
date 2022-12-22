
<script setup lang="ts">
import {
  ChatLineRound,
  ChatRound,
} from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useTextSelection } from '@vueuse/core';
import { watch } from 'vue';
import { h } from 'vue'
import { ElMessage } from 'element-plus'




const state = useTextSelection()
const cancomment = ref(false)
watch(state.text,()=>{
  if (state.text.value != ''){
    cancomment.value = true
  }
  else{
    cancomment.value = false
  }
})

const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const props = defineProps({
  paragraph:Number
} as any)

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})
const open = () => {
    ElMessage('请选择文字后再评论')
    }
const a = ref('')
function startcomment(){
  if (cancomment.value){
    dialogFormVisible.value=true
    a.value = state.text.value
  }else{
    open()
  }
}
</script>

<template>
  <div id="name" >
    <div id="title">
      <b ><slot name="title" ></slot></b>
    </div>
    <el-popover placement="bottom-start" id="choice" trigger="hover">
      <template #reference>
        <div id="para"><slot></slot></div>
      </template>
      <div id="choice">
        <el-button type="success" :icon="ChatRound" circle @click="startcomment" />
        <el-button type="primary" :icon="ChatLineRound" circle />
      </div>
    </el-popover>
  </div>
  <br/>
  <br/>
  <el-dialog v-model="dialogFormVisible" title="发条友好的评论见证当下">
    <div id="first">您将对第 {{ props.paragraph + 1  }} 段的这段标记发表评论</div>
    <div id="second">{{ a }}</div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>


<style scoped>
#title {
  font-size:30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#name {
  font-size: 17px;
}
slot {
  display: flex;
  flex-direction: row;
}
#para {
  margin-right:50px;
  margin-left:50px;
}
#choice {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
#first {
  display: flex;
  align-items: center;
  justify-content: center;
  margin:20px;
}
#second {
  display: flex;
  align-items: center;
  justify-content: center;
  margin:20px;
  color:#409EFF;
}

</style>
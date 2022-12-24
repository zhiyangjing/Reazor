
<script setup lang="ts">
import {
  ChatLineRound,
  ChatRound,
} from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useTextSelection } from '@vueuse/core';
import { watch } from 'vue';
import { ElMessage } from 'element-plus'
import { getPost } from '../composable/api/getPost'
import Comment from './Comment.vue'
import { ElMessageBox } from 'element-plus'
import { getDelete } from '../composable/api/getDelete'

const drawer = ref(false)
const drawer2 = ref(false)
const direction = ref('rtl')
const radio1 = ref('Option 1')
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure you want to close this?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
function cancelClick() {
  drawer2.value = false
}
function confirmClick() {
  ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer2.value = false
    })
    .catch(() => {
      // catch error
    })
}


const textarea = ref('')


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


const dialogFormVisible = ref(false)


const props = defineProps({
  paragraph:Number,
  passid:Number,
  comments:Array
} as any)


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


function watchcomment(){
  drawer2.value = true
}

function post(){
  // console.log(paraid)
  const res = getPost(props.passid,props.paragraph+1,a.value,textarea.value)
  console.log(res)
}

const emit = defineEmits(['refresh'])

// let date = rTime('2022-12-23T15:39:10.000Z');
// console.log(date) // 2020-06-27 14:20:27
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
        <el-button type="primary" :icon="ChatLineRound" circle @click="drawer2=true"/>
      </div>
    </el-popover>
  </div>
  <br/>
  <br/>
  <el-dialog v-model="dialogFormVisible" title="发条友好的评论见证当下">
    <div id="first">您将对第 {{ props.paragraph+1 }} 段的这段标记发表评论...</div>
    <div id="second">{{ a }}</div>
    <div id="third">
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
        <el-button type="primary" @click="post(),emit('refresh'),dialogFormVisible = false">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>

  <el-drawer v-model="drawer2" :direction="direction">
    <template #title>
      <h4>第{{ props.paragraph+1 }}段的评论区</h4>
    </template>
    <template #default>
      <Comment  v-for="i in props.comments.filter((t)=>t.paragraph == props.paragraph+1)" :data="i" @response="emit('refresh',true)">
      </Comment>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">cancel</el-button>
        <el-button type="primary" @click="confirmClick">confirm</el-button>
      </div>
    </template>
  </el-drawer>
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
#third {
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
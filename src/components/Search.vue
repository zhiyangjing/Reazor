<script setup lang="ts">

import { ref } from 'vue'
import { getPasslist } from '@/composable/api/useGetPassageList'
import { onMounted } from 'vue';
import { watch } from 'vue'

const value = ref('')
const props = defineProps({
  page:Number,
  limit:Number
})

const emit = defineEmits(["respose"])


function getpassagelist(){
  console.log(value.value,props.page,props.limit)
  const data = getPasslist(value.value,props.page,props.limit)
  console.log(data)
  emit('respose',data)
}

onMounted(getpassagelist)
watch(props,()=>{
  getpassagelist()
})

const options = [
        {
          value: 'en',
          label: '英文文章',
        },
        {
          value: 'ch',
          label: '中文文章',
        },
        {
          value: '',
          label: '全部文章',
        }
      ]

function show(){
  console.log(value.value)
}
</script>

<template>
  <div class="board">
    <el-select v-model="value" class="m-2" placeholder="语言" 
    style="margin-left:20px;"  @change="getpassagelist" >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
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
}
#choice {
  margin-left:20px;
}


</style>

<!-- <script lang="ts">
export default {
  name:'choices',
  data() {
    return {
    options:[
        {
          value: 'en',
          label: '英文文章',
        },
        {
          value: 'ch',
          label: '中文文章',
        },
        {
          value: 'all',
          label: '全部文章',
        }
      ],
      searchValue:'' 
    }
  },
  methods: {
    show(item:any){
      console.log(item)
    }
  }
}

</script> -->
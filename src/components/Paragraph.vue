
<script setup lang="ts">


</script>

<template>
  <div id="name" >
    <div id="title">
      <b ><slot name="title" ></slot></b>
    </div>
    <div id="para"><slot></slot></div>
  </div>
  <br/>
  <br/>
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
</style>
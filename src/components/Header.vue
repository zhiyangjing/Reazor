<template>
  <div class="top">
    <div id="leftpart">
      <img id="logo" src="../asset/icons/Book.svg" />
      Reazor
    </div>
    <div id="rightpart">
      你好呀：
      <div></div>
    </div>
  </div>
</template>


<style scoped>
.top {
  margin:0 0 0 0;
  height:50px;
  width:100%;
  border-bottom: 1px;
  border-color: #e9f4ff;
  border-style: solid;
  border-top:0px;
  border-left:0px;
  border-right:0px;
  display: flex;
  align-items: center;
  box-shadow: 0px 5px 10px rgb(207, 217, 232);
}
#logo {
  height:45px;
}
#leftpart {
  display: flex;
  flex-direction: row;
  color:#409EFF;
  align-items: center;
  font-size: 50px;
}
#rightpart {
  display:flex;
  flex-direction:row;
  align-items: center;
  margin:auto;
  margin-right:0px;
  color:#409EFF;
  font-size: 30px;
}
</style>
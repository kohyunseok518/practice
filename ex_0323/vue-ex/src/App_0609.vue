<template>
  <input type="checkbox" v-model="btnStyle.btnColor">색상<br>
  <input type="checkbox" v-model="btnStyle.btnAlign">정렬, 크기<br>
  <input type="checkbox" v-model="btnStyle.btnBorder">테두리<br>
  <button class="staticBorder" :class='btnStyle'>버튼</button>
</template>
  
<script>
  export default {
    data() {
      return {
        btnStyle : {
          btnColor : false,
          btnAlign : false,
          btnBorder : false,
        }
    }
  }
}
</script>
<style scoped>
  .btnBorder {
    border : 1px dashed khaki;
  }
  .btnColor {
    background : aqua;
    color : black;
  }
  .btnAlign {
    text-align: center;
    width: 120px;
  }
</style>
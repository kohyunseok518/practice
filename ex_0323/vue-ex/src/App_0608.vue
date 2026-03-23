<template>
  <input type="checkbox" v-model="btnColor">색상<br>
  <input type="checkbox" v-model="btnAlign">정렬, 크기<br>
  <input type="checkbox" v-model="btnBorder">테두리<br>
  <button class="staticBorder" :class='{btnColor,btnAlign,btnBorder}'>버튼</button>
</template>
  
<script>
  export default {
    data() {
      return {
        btnColor : false,
        btnAlign : false,
        btnBorder : false,
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
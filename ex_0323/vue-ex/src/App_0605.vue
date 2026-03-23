<template>
  <button class="staticBorder" :class="myColor">테스트 버튼</button>
</template>
  
<script>
  export default {
    data() {
      return {
        myColor : "buttonColor buttonLayout"
    }
  }
}
</script>
<style scoped>
  .staticBorder {
    border : 1px dashed khaki;
  }
  .buttonColor {
    background : aqua;
    color : black;
  }
  .buttonLayout {
    text-align: center;
    width: 120px;
  }
</style>
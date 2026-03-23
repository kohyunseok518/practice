<template>
  <input type="checkbox" v-model="isOk">레이아웃 적용 여부<br>
  <button class="staticBorder" :class="isOk ? myColor2 : myColor1">버튼</button>
</template>
  
<script>
  export default {
    data() {
      return {
        isOk : false,
        myColor1 : "buttonColor",
        myColor2 : "buttonColor buttonLayout"
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
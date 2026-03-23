<template>
  <p>1부터 100까지만 입력가능합니다.</p>

  정수 : <input type="number" v-model ="number" :style="(number > 100 || number < 1) ? bgA :  bgW">
  <img v-if = "waring" src="./assets/waring.png" alt="경고 사진">

</template>
  
<script>
  export default {
    data() {
      return {
        number : 0,
        bgW : {
          background : "white",
        },
        bgA : {
          background : "aqua",
        },
      }
    },
    computed :{
      waring() {
        if(this.number > 100 || this.number < 1) {
          return true;
        } else {
          return false;
        }
      }
    },
  }
</script>
  
<style>
  img {
    width: 30px;
    height: 30px;
    display: inline;
    position: absolute;
  }
</style>
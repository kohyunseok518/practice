<template>
  <button :style='[style1, style2]'
  @mouseover="changeColor()"
  @mouseout="defaultColor()"
  >테스트</button>
</template>
  
<script>
  export default {
    data() {
      return {
        style1 : {
          background : "aqua",
        },
        style2 : {
          color : "black"
        }
      }
    },
    methods : {
      changeColor() {
        this.style1.background = "purple",
        this.style1.color = "yellow"
      }, 
      defaultColor() {
        this.style1.background = "aqua",
        this.style1.color = "black"
      },  
    }
  }
</script>
  
<style>
  
</style>
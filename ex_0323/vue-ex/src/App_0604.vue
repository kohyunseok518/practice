<template>
  <button :style='[myColor, myLayout]'>버튼1</button>
</template>
  
<script>
  export default {
    data() {
      return {
        myColor : {
          background : "purple",
          color : "yellow",
        },
        myLayout: {
          width: '150px',
          height: '80px',
          "text-align": "center"
        },
      }
    }
  }
</script>
  
<style>
  
</style>
<template>
    <input type="text" v-model="num" ref="inputRef">
    <button @click="numAlert">버튼</button>
</template>
  
<script setup>
  import {ref} from 'vue';

  const num = ref(0);
  const inputRef = ref(null);

  function numAlert() {
    inputRef.value.focus();
    alert(num.value);
  }

</script>
  
<style>
  
</style>
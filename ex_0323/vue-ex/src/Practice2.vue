<template>
  <div>
    <Practice2Child :name="childName" @greet="handleGreeting()" />
  </div>
</template>
  
<script setup>
  import {ref} from 'vue';
  import child from './components/practiceChild2.vue';
  const childName = 'Alice';
  function handleGreeting(message) {
    console.log(message);
  }
</script>
  
<style>
  
</style>
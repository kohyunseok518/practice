<template>
  <div>
    <child :name="childName"  @greet="handleGreeting"/>
  </div>
</template>
  
<script setup>
  import {ref} from 'vue';
  import child from './components/practiceChild2.vue';
  const childName = 'Alice';


  const handleGreeting = (msg) => {
    console.log(msg);
  }
</script>
  
<style>
  
</style>
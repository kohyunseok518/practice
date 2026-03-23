<template>
  <div>
    <button @click="sendGreeting">Send Greeting</button>
  </div>
</template>
    
<script setup>
import {props, emit} from 'vue';
const props = defineProps({
    name: String
})
    
</script>
    
<style>
    
</style>
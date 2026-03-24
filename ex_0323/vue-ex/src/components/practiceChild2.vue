<template>
    <div>
      <button @click="childMsg">Send Greeting</button>
    </div>
</template>
  
<script setup>
  import { defineProps, defineEmits } from 'vue';
  const props = defineProps ({
    name : String,
  })

  const emit = defineEmits({
    greet : String
  })

  //props는 reactive 객체여서 .value로 접근을 하지 않는다.
  const childMsg = () => {
    emit('greet', `hello, ${props.name}`)
  }
  
</script>
  
<style>
  
</style>
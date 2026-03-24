<template>
    <!-- numOne 함수를 실행해 send-num이란 신호에 1을 담아 부모에게 전송 -->
     <button @click="numOne"> 1 </button>   
     <button @click="numTwo"> 2 </button>   
     <button @click="numThree"> 3 </button>   
     <button @click="add"> + </button>   
     <button @click="result"> = </button>   
</template>
    
<script setup>
    import { defineProps, defineEmits,ref } from 'vue';


    const emit = defineEmits({
      'send-num' : String,
      'send-op' : String,
      'send-result' : String
    })

    //보낼 신호 이름, 보낼 데이터(payload)
    const numOne = () => {
        emit('send-num','1')
    }

    const numTwo = () => {
        emit('send-num', '2')
    }

    const numThree = () => {
        emit('send-num', '3')
    }

    const add = () => {
        emit('send-op','+');
    }
    const result = () => {
        emit('send-result', '=');
    }

</script>
    
<style>
    
</style>xw
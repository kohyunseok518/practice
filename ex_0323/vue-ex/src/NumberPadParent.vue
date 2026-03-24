<template>
<h1>{{ displayNum }}</h1>

<!-- 자식이 emit을 실행하는 순간 부모의 특정 함수가 실행되도록 매핑 -->
<NumberPad  @send-num="handleNum" @send-op="handleOp" @send-result="result"/>
</template>
  
<script setup>
import {ref} from 'vue';
import NumberPad from './components/NumberPad.vue';

const displayNum = ref(''); 
const saveNum = ref(0);
const op = ref('');


const handleNum = (num) => {
  displayNum.value += num;
}

const handleOp = (a) => {
  op.value = a;
  saveNum.value = Number(displayNum.value);
  displayNum.value = "";
}

const result = () => {
  if(op.value === '+') {
   displayNum.value= saveNum.value + Number(displayNum.value);
  }
}



</script>
  
<style>
  
</style>
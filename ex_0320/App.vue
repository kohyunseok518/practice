<template>
  <div class="container">
    <h1>04-03</h1>
    <div class="sum">
      <label for="num">1보다 큰 수: </label>
      <input type="number" value="num" id="num" v-model="num">
    </div>
    <span>1부터 입력한 값까지의 합: {{ sum() }}</span><br>
    <span>1부터 입력한 값까지의 합: {{ sum() }}</span><br>
    <span>1부터 입력한 값까지의 합: {{ sum() }}</span><br>
  
    <!-- 04-10은 콘솔에 출력되게 해놨습니다. -->

    <h1>04-05</h1>
    <div class="sum">
      <label for="num">1보다 큰 수: </label>
      <input type="number" value="num" id="num" v-model="num">
      </div>
    <span>1부터 입력한 값까지의 합: {{ add }}</span><br>
    <span>1부터 입력한 값까지의 합: {{ add }}</span><br>
    <span>1부터 입력한 값까지의 합: {{ add }}</span><br>
    <hr>
    <h1>05-01</h1>
    <div class="sum">
      <label for="balance">금액: </label>
      <input type="number" value="balance" id="balance" v-model="balance">
      <button @click="totalBalance1 += balance">입금</button>
    <button @click="totalBalance1 -= balance">출금</button>
    </div>
    <span>계좌 잔고: {{ totalBalance1 }}</span><br>

    <hr>
    <h1>05-02</h1>
    <div class="sum">
      <label for="balance2">금액: </label>
      <input type="number" value="balance2" id="balance2" v-model="balance2">
      <button @click="deposit">입금</button>
      <button @click="withdraw">출금</button>
    </div>
    <span>계좌 잔고: {{ totalBalance2 }}</span><br>

     <hr>
    <h1>05-04</h1>
    <div class="sum">
      <label for="name">이름: </label>
      <input type="text" id="name" @input="name = $event.target.value">
    </div>
    <span>이름: {{ name }}</span><br>
    

  </div>
</template>

<script setup>
import {ref, computed, onMounted, onUpdated} from "vue";

onMounted(() => {
  console.log('컴포넌트가 마운트 되었습니다.')
})

const num = ref(0);
const balance =ref(0);
const totalBalance1 = ref(0);
const balance2 =ref(0);
const totalBalance2 = ref(0);
const name = ref('');

const add = computed(() => {
  return (num.value*(num.value+1))/2;
})

function sum() {
  return (num.value*(num.value+1))/2;
}

function deposit() {
  return totalBalance2.value += balance2.value;
}

function withdraw() {
  return totalBalance2.value -= balance2.value;
}

onUpdated(() => {
  console.log('데이터가 바뀌어서 화면이 다시 그려졌습니다. 현재 값:', num.value)
})
</script>

<style scoped>
  .container {
  display: flex;
  flex-direction: column;   
}
  .sum {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
</style>
<template>
  <div>
  <h1>03-01.html</h1>
  <h2>{{ message1 }}</h2>
  <hr>
  
  <h1>03-03.html</h1>
  <input type="text" :value="message2">
  <img :src="imgUrl" alt="로고사진"><br>
  <hr>


  <h1>03-04.html</h1>
  <input type="text" v-model ="name"><br>
  <span>입력한 값: {{ name }}</span>
  <hr>

  <h1>03-05.html</h1>
  <h1>취미 생활</h1>
  <div class="habit">
  <input type="checkbox" name="habit" value="A" id="운동" v-model="hobby">
  <label for="운동">운동</label>
  <input type="checkbox" name="habit" value="B" id="독서" v-model="hobby">
  <label for="독서">독서</label>
  <input type="checkbox" name="habit" value="C" id="음악" v-model="hobby">
  <label for="음악">음악</label>
  <input type="checkbox" name="habit" value="D" id="댄스" v-model="hobby"> 
  <label for="댄스">댄스</label>
  <input type="checkbox" name="habit" value="E" id="역사" v-model="hobby">
  <label for="역사">역사</label>
  </div><br>

  <h1>상품 분류 선택</h1>
  <select v-model="category">
    <option value="" disabled hidden>음식</option>
    <option value="C01">떡볶이</option>
    <option value="C02">순대</option>
    <option value="C03">튀김</option>
    <option value="C04">김밥</option>
    <option value="C05">라면</option>
  </select>
  <br><hr>
  <span >선택한 취미: {{ hobby.join(', ') }}</span><br>
  <span >선택한 상품: {{ category }}</span><br>
  <hr>

  <h1>03-06.html</h1>
  <div class="agree">
    <label for="check">위 내용에 동의하십니까?</label>
    <input type="checkbox"
    id="check"
    v-model="agree"
    >
  </div>
  <span>선택된 값: {{ agree? 'yes' : 'no' }}</span>
  <hr><br>

  <h1>03-10.html</h1>
  <div class="money">
    <label for="money">예금액: </label>
    <input type="number" value="money" id="money" v-model="money">
  </div>
  <span> 예금할 금액: {{ money }}</span>
  <img v-if="(money < 0) ? true : false" src="https://placehold.co/200x300?text=Error" alt="ErrorImg">
  <hr><br>

  <h1>03-11.html</h1>
  <div class="membership">
    <label for="balance">잔고: </label>
    <input type="number" value="balance" id="balance" v-model="balance">
  </div>
  <span v-if ="Upgrade()">회원님의 등급 : {{ grade }}</span>



 </div>


</template>

<script setup>
import {ref} from "vue";
const message1 = ref('Hello Vue3!');

const message2 = "v-bind 디렉티브";
const imgUrl = "https://placehold.co/200x300?text=Hello%20World"
const name = ref('');
const hobby = ref([]);
const category = ref('');
const agree = ref('');
const money =ref(0);
const isError = ref(false);
const imgUrl2 = "https://placehold.co/200x300?text=Error";
const balance = ref(0);
const grade = ref('')

function Upgrade() {
  if(this.balance >= 1000000) {
    return this.grade ="Gold"
  } else if(this.balance >= 500000) {
    return this.grade ="Silver"
  } else if(this.balance >= 200000) {
    return this.grade ="Bronze"
  } else {
    return this.grade ="Basic"
  }
}

</script>

<style scoped>
  div {
  display: flex;
  flex-direction: column;   
}
  .habit {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .agree {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .money {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
  .membership {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
</style>
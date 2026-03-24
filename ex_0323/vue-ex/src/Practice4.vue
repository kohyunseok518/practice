<template>
    <h2>총 금액 : {{ total }}</h2>
</template>
  
<script setup lang='ts'>
  import {reactive, computed} from 'vue';
  const item1 = reactive({
    price : 1000,
    count : 1
  })
    const item2 = reactive({
    price : 2000,
    count : 1
  })

  const total = computed(() => {
    return ((item1.price*item1.count) + (item2.price*item2.count))
  })

</script>
  
<style>
  
</style>
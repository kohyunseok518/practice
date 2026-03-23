<template>
    <div>
    <p>Count: {{ count }}</p>
    <p>Doubled Count: {{ doubledCount }}</p>
    <button @click="increment()">Increment</button>
  </div>
</template>
  
<script setup>
  import{ref, computed} from 'vue';
  const count = ref(0);

  function increment() {
    count.value++;
  }

  const doubledCount = computed(() => {
    return count.value*2;
  })
</script>
  
<style>
  
</style>
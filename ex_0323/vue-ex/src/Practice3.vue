<template>
  <input type="search" v-model = 'searchText'>
  <br><span>{{ warningMessage }}</span>
</template>
  
<script setup>
  import {ref, computed} from 'vue';

  const searchText = ref('');
  const warningMessage = computed(() => {
    if(searchText.value.length > 10) {
      return '10자를 초과했습니다!'
    } else {
      return '';
    }
  })
</script>
  
<style>
  
</style>
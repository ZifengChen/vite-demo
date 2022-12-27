<template>

  <div>
    case1: <input v-model="message.foo.bar.name" type="text">
    <hr>
    case2: <input type="text">
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive, watch } from 'vue'
let message = ref({
  foo: {
    bar: { name: 'ken' }
  }
})
watch(message, (newVal, oldVal) => {
  console.log(newVal, oldVal);
}, {
  deep: true
})
</script>
<style scoped>

</style>
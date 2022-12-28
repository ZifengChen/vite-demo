<template>

  <div>
    <div>父级</div>
    <hr>
    <ChildVue @on-click="getName" :title="name"></ChildVue>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive, watch } from 'vue'
import ChildVue from './components/Child.vue';
let name = 'ken'
let message = ref({
  foo: {
    bar: { name: 'ken' }
  }
})
const getName = (name: string) => {
  console.log(name, '========>父组件接收的值')
}
watch(message, (newVal, oldVal) => {
  console.log(newVal, oldVal);
}, {
  deep: true
})
</script>
<style scoped>

</style>
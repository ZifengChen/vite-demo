<template>

  <div></div>

</template>

<script setup lang='ts'>
import { ref, reactive, getCurrentInstance } from 'vue'

const instance = getCurrentInstance()

instance?.proxy?.$myloading.show()

setTimeout(() => {
  instance?.proxy?.$myloading.hide()
}, 5000);
</script>
<style scoped>

</style>
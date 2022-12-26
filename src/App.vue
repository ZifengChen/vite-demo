<template>
  <div @click="parent">
    <button @click.stop="xxx">点击我</button>
  </div>
</template>

<script setup lang="ts">

const parent = () => {
  console.log('父级被点击')
}
const xxx = () => {
  console.log('点击了xxx')
}
</script>

<style scoped lang="less">

</style>
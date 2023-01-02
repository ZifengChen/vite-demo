<template>

  <!-- <div v-move class="box">
    <div class="header"></div>
    <div>内容</div>
  </div> -->

  <img id="img" src="./assets/daizong.jpg" width="300" height="300">

</template>

<script setup lang='ts'>
import { ref, Directive, DirectiveBinding } from 'vue'

import useBase64 from './hooks'

useBase64({ el: '#img' }).then(res => {
  console.log(res.baseUrl)
})

const vMove: Directive<any, void> = (el: HTMLElement, binding: DirectiveBinding) => {
  let moveElement: HTMLDivElement = el.firstElementChild as HTMLDivElement
  const mouseDown = (e: MouseEvent) => {
    let x = e.clientX - el.offsetLeft
    let y = e.clientY - el.offsetTop
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', move)
    })
  }

  document.addEventListener('mousedown', mouseDown)
}

</script>
<style scoped lang="less">
.box {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 3px solid black;

  .header {
    height: 20px;
    background: black;
  }
}
</style>
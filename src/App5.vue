<template>

    <div>
        <h1>我是App Vue父组件</h1>
        <div><button @click="isShow = !isShow">切换</button></div>
        <hr>
        <vModelVue v-model="isShow"></vModelVue>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import vModelVue from './components/v-model.vue'

const isShow = ref<boolean>(true)
</script>


<style scoped lang="less">

</style>
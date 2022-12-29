<template>
    <h1>provideB.vue(孙子组件)</h1>
    <div class="box">

    </div>
    <button @click="change">改变颜色</button>
    <hr>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { Ref } from 'vue';
const color = inject<Ref<string>>('color')

const change = () => {
    color!.value = 'yellow'
}
</script>

<style scoped lang="less">
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(color);
}
</style>
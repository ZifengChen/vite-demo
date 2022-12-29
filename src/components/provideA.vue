<template>
    <h1>provideA.vue(父亲组件)</h1>
    <div class="box">

    </div>
    <hr>
    <provideBVue></provideBVue>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import provideBVue from './provideB.vue';

const color = inject('color')

</script>

<style scoped lang="less">
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(color);
}
</style>
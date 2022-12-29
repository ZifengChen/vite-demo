<template>
    <h1>App.vue (爷爷级别)</h1>
    <label>
        <input v-model="colorVal" type="radio" value="red" name="color">
        红色
    </label>
    <label>
        <input v-model="colorVal" type="radio" value="pink" name="color">
        粉色
    </label>
    <label>
        <input v-model="colorVal" type="radio" value="yellow" name="color">
        黄色
    </label>
    <div class="box">

    </div>
    <hr>
    <provideAVue></provideAVue>

</template>

<script setup lang='ts'>
import { ref, reactive, provide } from 'vue'
import provideAVue from './components/provideA.vue';
const colorVal = ref<string>('red')

provide('color', colorVal)

</script>
<style scoped lang="less">
.box {
    height: 50px;
    width: 50px;
    border: 1px solid #ccc;
    background: v-bind(colorVal);
}
</style>
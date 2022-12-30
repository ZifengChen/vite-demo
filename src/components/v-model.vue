<template>

    <div v-if="modelValue" class="modal">
        <div class="close"><button @click="close">关闭</button></div>
        <h3>我是v-model子组件 diaglog</h3>
        <div>内容: <input type="text"></div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    modelValue: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const close = () => {
    emit('update:modelValue', false)
}
</script>

<style scoped lang="less">
.modal {
    width: 500px;
    border: 5px solid #ccc;
    padding: 10px;
}
</style>
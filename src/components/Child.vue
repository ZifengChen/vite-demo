<template>
    <div>子集</div>
    <button @click="send">给父组件传值</button>
</template>

<script setup lang="ts">
const emit = defineEmits(['on-click'])

const props = defineProps<{
    title: string
}>()

const send = () => {
    emit('on-click', 'kennnnn')
}
</script>

<style lang="less"></style>
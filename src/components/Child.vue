<template>
    <div>子集 {{ title }}</div>
    <button @click="send">给父组件传值</button>
</template>

<script setup lang="ts">
const emit = defineEmits(['on-click'])

defineProps<{
    title: string
}>()

const send = () => {
    emit('on-click', 'kennnnn')
}
</script>

<style lang="less">

</style>
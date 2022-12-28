<template>
    <div>
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main class="main">
            <div v-for="item in data">
                <slot :data="item"></slot>
            </div>
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

type names = {
    name: string,
    age: number
}

const data = reactive([
    {
        name: 'ken1',
        age: 18
    },
    {
        name: 'ken2',
        age: 19
    },
    {
        name: 'ken3',
        age: 20
    },
])

</script>

<style scoped lang="less">
.header {
    height: 200px;
    background: red;
    color: #fff;
}

.main {
    height: 300px;
    background: green;
    color: #fff;
}

.footer {
    height: 200px;
    background: blue;
    color: #fff;
}
</style>
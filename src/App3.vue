<template>
    <div class="content">
        <Diaglog>
            <template v-slot:header>
                <div>
                    插入header
                </div>
            </template>
            <template v-slot="{ data }">
                <div>
                    {{ data.name }} -- {{ data.age }}
                </div>
            </template>
            <template v-slot:footer>
                <div>
                    插入footer
                </div>
            </template>
        </Diaglog>
    </div>
    <!-- <div style="display: flex;">
        <div @click="switchCom(item, index)" :class="[activeId === index ? 'active' : '']" class="tabs"
            v-for="(item, index) in data">
            <div>{{ item.name }}</div>
        </div>
    </div>
    <component :is="comId"></component> -->
</template>

<script setup lang='ts'>
import { ref, reactive, shallowRef, markRaw } from 'vue'
import Diaglog from './components/Dialog.vue'
import AVue from './components/A.vue';
import BVue from './components/B.vue';
import CVue from './components/C.vue';

type A = {
    name: string,
    com: any
}

const comId = shallowRef(AVue)

const activeId = ref(0)

const data = reactive<A[]>([
    {
        name: 'A组件',
        com: markRaw(AVue)
    },
    {
        name: 'B组件',
        com: markRaw(BVue)
    },
    {
        name: 'C组件',
        com: markRaw(CVue)
    }
])

const switchCom = (item: A, index: number) => {
    comId.value = item.com
    activeId.value = index
}


</script>
<style scoped lang="less">
.active {
    background-color: skyblue;
}

.tabs {
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin: 5px;
    cursor: pointer;
}
</style>
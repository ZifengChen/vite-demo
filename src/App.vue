<template>

  <div>
    <table border style="width: 1000px;">
      <thead>
        <tr>
          <th>名称</th>
          <th>数量</th>
          <th>单价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(item,index) in data">
          <td>{{ item.name }}</td>
          <td><button @click="addAndSub(item, false)">-</button> {{ item.num }} <button
              @click="addAndSub(item, true)">+</button></td>
          <td>{{ item.num * item.price }}</td>
          <td><button @click="del(index)">删除</button></td>
        </tr>
      </tbody>
      <tfoot>
        <td></td>
        <td></td>
        <td></td>
        <td>总价: {{ $total }}</td>
      </tfoot>
    </table>
  </div>

</template>

<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'
// reactive proxy不能直接赋值 否则破坏响应式对象
// 数组的话可以用.push,添加一个对象，把数组作为一个属性去解决
// toRef只能用于响应式对象的某个属性，提取为ref类型
type Shop = {
  name: string,
  num: number,
  price: number
}

let $total = ref(0)
const data = reactive<Shop[]>([
  {
    name: '裤子',
    num: 1,
    price: 100
  },
  {
    name: '上衣',
    num: 1,
    price: 200
  }
])

$total = computed<number>(() => {
  return data.reduce((prev, next) => {
    return prev + (next.price * next.num)
  }, 0)
})

const addAndSub = (item: Shop, type: boolean): void => {
  if (item.num > 1 && !type) {
    item.num--
  }
  if (item.num < 99 && type) {
    item.num++
  }
}

const del = (index: number) => {
  data.splice(index, 1)
}

</script>
<style scoped>

</style>
<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <button @click="clickFn">翻转</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      msg:"Hello Vue",
    }
  },
  methods:{
    clickFn(){
      // 1.将字符串转换成数组,2.翻转数组，3.将数组转换为字符串
      this.msg=this.msg.split('').reverse().join("");
    }
  }
}
</script>
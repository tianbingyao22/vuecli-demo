<template>
  <div id="app">
    <input type="text" v-bind:value="val" @input='getVal'>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      val:"",
    }
  },
  methods:{
   getVal(e){
    this.val=e.target.value;
   }
  }
}
</script>


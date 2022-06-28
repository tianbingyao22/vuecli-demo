<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img src="./assets/01.jpg" alt="" v-on:mouseover="mouseoveFn(1)" @click='clickFn(1,$event)'>
      <img src="./assets/02.jpg" alt="" v-on:mouseover="mouseoveFn(2)" @click='clickFn(2,$event)'>
      <img src="./assets/03.jpg" alt="" v-on:mouseover="mouseoveFn(3)" @click='clickFn(3,$event)'>
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img v-bind:src="imgUrl" alt="" style="width:600px;height:auto;">
    </div>
   <div>
   </div>
  </div>
</template>

<script>
// js导入图片不能只写路径，要通过import导入
import img01 from "./assets/01.jpg"
import img02 from "./assets/02.jpg"
import img03 from "./assets/03.jpg"
export default {
  data(){
    return {
      imgUrl:img01,
    }
  },
  methods:{
    mouseoveFn(val){
      // 鼠标经过时，用经过的图片的地址进行复制数据
      this.imgUrl={1:img01,2:img02,3:img03}[val];
    },
    clickFn(val,e){
      // 鼠标点击时，弹出该图片的地址
      alert(`第${val}张图片的地址是：${e.target.src}`);
    }
  }
};
</script>

<style scoped>
  .container {
    display:flex;
  }
 .imglist { 
  border: 2px solid red;
 }
.imglist img {
  width: 200px;
  height: auto;
}
.show {
  border: 2px solid red;
  margin-right: 20px;
}

</style>


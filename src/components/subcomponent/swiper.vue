<template>
  <mt-swipe :auto="3000" :style="{height:swipeHeight}">
    <mt-swipe-item v-for="item in loopList" :key="item.imgUrl">
      <img v-bind:src="item.imgUrl" alt="" :class="{full: isFullWidth}">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
    export default {
        name: "swiper",
        props:['loopList', 'swipeHeight','isFullWidth'],

    }

</script>

<style scoped>
  .mint-swipe {
    height: 200px;
  }

  .mint-swipe-item{
    text-align: center;
  }

  /*.mint-swipe-item:nth-child(1) {*/
    /*background-color: red;*/
  /*}*/
  /*.mint-swipe-item:nth-child(2) {*/
    /*background-color: green;*/
  /*}*/
  /*.mint-swipe-item:nth-child(3) {*/
    /*background-color: blue;*/
  /*}*/

  /* 修改轮播图样式 */
  img {
    /*width: 100%;*/
    height: 100%;
  }

  .full {
    width: 100%;
  }

</style>

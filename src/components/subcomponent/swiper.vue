<template>
  <mt-swipe :auto="autoTime" :style="{height:swipeHeight}">
    <mt-swipe-item v-for="item in loopList" :key="item.imgUrl">
      <img v-bind:src="item.imgUrl" alt="">
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
    export default {
        name: "swiper",
        props:['loopList', 'swipeHeight', 'autoTime'],

    }

</script>

<style scoped>
  .mint-swipe {
    height: 200px;
  }

  .mint-swipe-item:nth-child(1) {
    background-color: red;
  }
  .mint-swipe-item:nth-child(2) {
    background-color: green;
  }
  .mint-swipe-item:nth-child(3) {
    background-color: blue;
  }

  /* 修改轮播图样式 */
  img {
    width: 100%;
    height: 100%;
  }

</style>

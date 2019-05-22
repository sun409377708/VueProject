<template>
  <ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <router-link to="/home/newList">
        <img src="../../assets/menu1.png" alt="">
        <div class="mui-media-body">挂号预约</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
      <router-link to="/home/photoList">
        <img src="../../assets/menu2.png" alt="">
        <div class="mui-media-body">图片分享</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
      <img src="../../assets/menu3.png" alt="">
      <div class="mui-media-body">留言反馈</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
      <img src="../../assets/menu4.png" alt="">
      <div class="mui-media-body">视频资讯</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodsList">
      <img src="../../assets/menu5.png" alt="">
      <div class="mui-media-body">商品购买</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
      <img src="../../assets/menu6.png" alt="">
      <div class="mui-media-body">联系我们</div></a></li>
  </ul>
</template>

<script>
    export default {
        name: "square"
    }
</script>

<style scoped>
  /* 修改九宫格样式 */
  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
  }

  .mui-grid-view.mui-grid-9 img {
    width: 60px;
    height: 60px;
  }

  .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 13px;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
  }
</style>

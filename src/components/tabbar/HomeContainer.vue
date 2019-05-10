<template>
  <div>
    <!-- 轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in dataList" :key="item.imgUrl">
        <img v-bind:src="item.imgUrl" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <h3>轮播图</h3>

    <!-- 九宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu1.png" alt="">
        <div class="mui-media-body">新闻资讯</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu2.png" alt="">
        <div class="mui-media-body">图片分享</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu3.png" alt="">
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu4.png" alt="">
        <div class="mui-media-body">视频资讯</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu5.png" alt="">
        <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../assets/menu6.png" alt="">
        <div class="mui-media-body">联系我们</div></a></li>
    </ul>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';

  export default {
    name: "HomeContainer",
    data(){
      return {
        dataList:[]
      }
    },
    created(){
      this.getLoopImg();

    },
    methods:{
      // 获取轮播图
      getLoopImg(){
        this.$http.get('https://api.daoyitong.com/api/v1/sowingmap/list').then(result => {

          if (result.body.code === 1) {

            this.dataList = result.body.results.sowingMapList;
            console.log(this.dataList);
            Toast('加载成功');
          }
        }, failure => {

        });
      }
    }
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

  img {
    width: 100%;
    height: 100%;
  }

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

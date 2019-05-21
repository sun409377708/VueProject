<template>
    <div class="goods-list">

      <div class="goods-item" v-for="item in rankInfo" :key="item.currentRank" @click="goDetail(item.currentRank)">
        <img :src="item.imgPath" alt="">
        <div class="title">{{item.wareName}}</div>

        <div class="info">
          <p class="price">
            <span class="now">{{item.jdPrice}}</span>
            <span class="old">{{item.mPrice}}</span>
          </p>

          <div class="sell" >
            <span>热卖中</span>
            <span>{{item.productValue.hotScore}}件</span>
          </div>
        </div>
      </div>

    </div>
</template>

<script>

  import dataJson from '../../../static/phoneList.json'

  export default {
    name: "GoodsList",
    methods:{
      // 跳转下一级界面
      goDetail(id){
        this.$router.push('/home/goodsInfo/'+id)
      }
    },
    data(){
      return{
        rankInfo:[],

      }
    },
    mounted(){

      this.rankInfo = dataJson.result.rankInfo
      console.log('加载成功');
    }
  }
</script>

<style scoped lang="scss">
  .goods-list {

    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;

    .goods-item {
      width: 49%;
      border: 1px solid #ccc;
      box-shadow: 0 0 3px lightgray;
      margin: 4px 0;
      padding: 2px;

      /* 处理标题文字变化时流式布局下部空缺的问题, 将伸缩布局改为纵向, 然后两端对齐*/
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 293px;
      img {
        width: 100%;
      }
      .title{
        font-size: 14px;
        color: black;

        //文本不换行，这样超出一行的部分被截取，显示...
        /*overflow: hidden;*/
        /*text-overflow: ellipsis;*/
        /*white-space: nowrap;*/


        // 控制固定行数
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
      }


      .info{
        background-color: #eee;

        p{
          margin: 0;
          padding: 5px;
        }

        .price{

          .now{
            font-size: 16px;
            font-weight: bold;
            color: red;
          }
          .old{
            font-size: 12px;
            text-decoration: line-through;
            margin-left: 10px;
          }
        }

        .sell{
          font-size: 12px;
          display: flex;
          justify-content: space-between;
          padding: 0 5px;
        }
      }
    }


  }

</style>

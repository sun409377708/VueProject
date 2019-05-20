<template>
    <div class="goods-list">

      <div class="goods-item">
        <img src="http://img14.360buyimg.com/n7/jfs/t27616/251/1425719819/224805/20c2401e/5bc831fdN61f8d9d2.jpg" alt="">
        <div class="title">vivoZ36GB+64GB领券立减150元千元全面屏</div>

        <div class="info">
          <p class="price">
            <span class="now">$1548</span>
            <span class="old">$1948</span>
          </p>

          <div class="sell">
            <span>热卖中</span>
            <span>剩余60件</span>
          </div>
        </div>
      </div>

      <div class="goods-item">
        <img src="http://img11.360buyimg.com/n7/jfs/t22330/332/515182850/188708/3dbe80f8/5b0fbaabN3229c7a3.jpg" alt="">
        <div class="title">小米8SE 全面屏智能游戏</div>

        <div class="info">
          <p class="price">
            <span class="now">$189</span>
            <span class="old">$229</span>
          </p>

          <div class="sell">
            <span>热卖中</span>
            <span>剩余60件</span>
          </div>
        </div>
      </div>

      <div class="goods-item">
        <img src="http://img10.360buyimg.com/n7/jfs/t1/3398/4/3488/86713/5b997c05Ef8001f1a/d1cbeecd11a2ef3b.jpg" alt="">
        <div class="title">Apple iPhone XR (A2108) 128GB 黑色</div>

        <div class="info">
          <p class="price">
            <span class="now">$5899</span>
            <span class="old">$6299</span>
          </p>

          <div class="sell">
            <span>热卖中</span>
            <span>剩余60件</span>
          </div>
        </div>
      </div>

      <div class="goods-item">
        <img src="http://img14.360buyimg.com/n7/jfs/t1/22718/1/12601/168068/5caedd41E05e879b0/865565d919219154.jpg" alt="">
        <div class="title">荣耀10青春版 幻彩渐变 2400万AI自拍 全网通版4GB+64GB 渐变蓝</div>

        <div class="info">
          <p class="price">
            <span class="now">$1299</span>
            <span class="old">$4229</span>
          </p>

          <div class="sell">
            <span>热卖中</span>
            <span>剩余60件</span>
          </div>
        </div>
      </div>

      <div class="goods-item">
        <img src="http://img12.360buyimg.com/n7/jfs/t11467/256/2884845812/267100/493ed21c/5cdd1018N977740e5.jpg" alt="">
        <div class="title">荣耀20i 3200万AI自拍 超广角三摄 全网通版6GB+64GB</div>

        <div class="info">
          <p class="price">
            <span class="now">$1599</span>
            <span class="old">$2599</span>
          </p>

          <div class="sell">
            <span>热卖中</span>
            <span>剩余60件</span>
          </div>
        </div>
      </div>



    </div>
</template>

<script>
    export default {
        name: "GoodsList"
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

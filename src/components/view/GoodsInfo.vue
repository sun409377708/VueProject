<template>
  <div class="goodsInfo-container">

    <!-- 顶部区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :loopList="imgList" :swipeHeight="swipeH" :autoTime='autoSwipe' ></swiper>
        </div>
      </div>
    </div>

    <!-- 中间区域 -->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
        </div>
      </div>
    </div>

    <!-- 底部区域 -->
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
        </div>
      </div>
      <div class="mui-card-footer">页脚</div>
    </div>

  </div>
</template>

<script>
  import swiper from '../subcomponent/swiper'
  import phoneData from '../../../static/phoneDetail'

  export default {
    name: "GoodsInfo",
    data(){
      return{
        goodsId:'',
        goodsInfo:{},
        imgList:[],
        swipeH:'300px',
        autoSwipe:2000
      }
    },
    components:{
      swiper:swiper
    },
    mounted(){
      this.goodsId = this.$route.params.id

      this.goodsInfo = phoneData.data
      var list = phoneData.data.wareImage

      list.forEach(item=>{
        item.imgUrl = item.big
      })

      this.imgList = list

      console.log(this.goodsInfo);
    }
  }
</script>

<style scoped lang="scss">
  .goodsInfo-container{
    background-color: #eee;
    overflow: hidden;
  }
</style>

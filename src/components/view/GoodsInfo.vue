<template>
  <div class="goodsInfo-container">

    <!-- 顶部区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :loopList="imgList" :swipeHeight="swipeH" ></swiper>
        </div>
      </div>
    </div>

    <!-- 中间区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{item.wareName}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:<del>${{item.mPrice}}</del>&nbsp;&nbsp;销售价:<span class="current-price">${{item.jdPrice}}</span>
          </p>
          <p>购买数量:
            <numBox @getCount="getSelectCount" ref="myNumBox" :max="this.goodsMax"></numBox>
          </p>
          <p>
            <mt-button type="primary" size="small" @click="getNum">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 底部区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品排行:{{goodsInfo.rankName}}</p>
          <p>重量: {{goodsInfo.weightInfo.content}}</p>
          <p>上架时间:{{'2019-12-01 12:01:10' | dateFormat('YYYY年MM月DD日')}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" @click="getDesc">图文详情</mt-button>
        <mt-button type="danger" size="large" plain @click="getComment">商品评论</mt-button>

      </div>
    </div>

  </div>
</template>

<script>
  import swiper from '../subcomponent/swiper'
  import phoneData from '../../../static/phoneDetail'
  import numBox from '../subcomponent/goodsNumBox'

  export default {
    name: "GoodsInfo",
    data(){
      return{
        goodsId:'',
        goodsInfo:{},
        imgList:[],
        swipeH:'300px',
        selectCount:1,
        goodsMax:undefined,
        item:null
      }
    },
    components:{
      swiper:swiper,
      numBox:numBox
    },
    mounted(){

    },
    created(){


      this.goodsInfo = phoneData.data
      var list = phoneData.data.wareImage

      list.forEach(item=>{
        item.imgUrl = item.big
      })

      this.imgList = list

      this.getDescData()

      this.goodsId = this.$route.params.id
      this.item = this.$route.params.item;
    },
    methods:{
      getNum(){
        // console.log('第一种');
        // console.log(this.$refs.myNumBox.totalNum());
      },

      getDesc(){
        this.$router.push({name:'GoodsDesc', params:'1'})
      },

      getComment(){
        this.$router.push({name:'GoodsComment', params:'2'})

      },

      getSelectCount(count){
        console.log(count);
        this.selectCount = count

      },

      addCar(){
        // {id: 商品Id, count:数量, price:价格, selected:选中}
        this.$store.commit('addShopCars', {
          id:this.goodsId,
          count:this.selectCount,
          price:this.item.jdPrice,
          img:this.item.imgPath,
          name:this.item.wareName,
          selected : true});
      },

      getDescData(){

        this.$http.get('cloud/goods/pc/web/getGoodsById?goodsId=1055361442676477952').then(result => {
          if (result.body.code === 1) {
            this.goodsMax = result.body.results.goodsDTO.goodsShowSales
          }
        });
      },
    }
  }
</script>

<style  lang="scss">
  .goodsInfo-container{
    background-color: #eee;
    overflow: hidden;

    .current-price {
      color: red;
      font-weight: 600;
    }

    .mui-card-footer{
      display: block;
      button{
        margin: 10px 0;
      }
    }

  }


</style>

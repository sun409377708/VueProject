<template>
  <div class="shopcar-container" >
    <!-- 商品列表-->
    <div class="goods-list">

      <div class="mui-card" v-for="(item,i) in shopList" :key="item.id">

        <div class="mui-card-content">
          <div class="mui-card-content-inner">

            <mt-switch v-model="$store.getters.getCountBySelcted[item.id]"
                       @change="switchChanged(item.id, $store.getters.getCountBySelcted[item.id])"></mt-switch>
            <img :src='item.img' alt="">
            <div class="info">
              <h1>{{item.name}}</h1>
              <p>
                <span class="price">${{item.price}}</span>
                <shopNumBox :selectNum = '$store.getters.getCountById[item.id]' :goodId="item.id"></shopNumBox>
                <a href="#" @click.prevent="removeGoods(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner total">
          <div class="amount">
            <p>总计(不含运费)</p>
            <p>已勾选商品 <span class="red">{{$store.getters.getGoodsAmount.count}}</span>件,
              总价 <span class="red">${{$store.getters.getGoodsAmount.amount}}</span></p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>


  </div>
</template>

<script>

  import shopNumBox from '../subcomponent/ShopNumBox'

  export default {
    name: "ShopcarContainer",
    components:{
      shopNumBox:shopNumBox
    },
    data(){
      return{
        shopList:[],
      }
    },
    created(){
      this.shopList =  JSON.parse(localStorage.getItem('cars') || '[]');

    },
    methods:{
      // 删除商品
      removeGoods(id, index){
        this.shopList.splice(index, 1);

        this.$store.commit('removeShopCars', id);
      },

      // 选中商品
      switchChanged(id, states){
        console.log(id);
        console.log(states);
        this.$store.commit('updateGoodsSelected', {id:id, selected:states});
      }
    },


  }
</script>

<style scoped lang="scss">
  .shopcar-container {
    background-color: #eee;
    overflow: hidden;


    .goods-list{
      img{
        width: 60px;
        height: 60px;
      }

      h1{
        font-size: 13px;
      }

      .price{
        font-weight: bold;
        color: red;
      }

      .mui-card-content-inner{
        display: flex;
        align-items: center;
      }

      .info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }



    .total {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .red{
        color: red;
        font-size: 14px;
        font-weight: bold;
      }
    }



  }


</style>

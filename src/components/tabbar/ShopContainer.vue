<template>
  <div class="shopcar-container">

    <div class="goods-list">

      <div class="mui-card" v-for="(item,i) in shopList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">

            <mt-switch></mt-switch>
            <img :src='item.img' alt="">
            <div class="info">
              <h1>{{item.name}}</h1>
              <p>
                <span class="price">${{item.price}}</span>
                <shopNumBox :selectNum = '$store.getters.getGoodsCount[item.id]' :goodId="item.id"></shopNumBox>
                <a href="#" @click.prevent="removeGoods(item.id,i)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>


    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
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
        shopList:[]
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
      }
    }

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


</style>

<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--顶部-->
    <mt-header fixed title="Vue项目">
      <a slot="left" @click.prevent="$router.back()">
        <mt-button icon="back">返回</mt-button>
      </a>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <!--中间-->
    <transition >
      <router-view></router-view>
    </transition>


    <!--底部-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-maoge" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-maoge" to="/member">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-maoge" to="/shop">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{$store.getters.totalCarsCount}}</span></span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-maoge" to="/search">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>

  </div>
</template>
<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)

  // 每当进入网站会调用APP.vue模块, 此时将
  var cars = JSON.parse(localStorage.getItem('cars') || '[]');

  var store = new Vuex.Store({
    state:{
      // 购物车存储的对象 {id: 商品Id, count:数量, price:价格, img:商品图片, name:商品名, selected:选中}
      cars:cars
    },
    mutations:{

      addShopCars(state, goodsInfo){
        // 如果商品Id相同则只增加数量count, 否则直接添加
        var flag = false
        state.cars.some(item=>{
          if (item.id === goodsInfo.id){
            item.count += parseInt(goodsInfo.count);
            flag = true;
            return true

          }
        });

        // 如果商品Id不同则直接添加
        if (!flag){
          state.cars.push(goodsInfo);
        }

        // 当更新cars 以后, 将其存储在本地localStorage中
        localStorage.setItem('cars', JSON.stringify(state.cars));
      },

      // 更新商品数据
      updateShopCars(state, goodsInfo){

        state.cars.some(item=>{
          if (item.id === goodsInfo.id){
            item.count = parseInt(goodsInfo.count);
            return true

          }
        });

        // 修改完后在保存
        localStorage.setItem('cars', JSON.stringify(state.cars));

      },

      // 根据ID删除对应商品
      removeShopCars(state, id){
        state.cars.some((item, i)=>{
          if (item.id === id) {
            state.cars.splice(i, 1)
            return true
          }
        })

        localStorage.setItem('cars', JSON.stringify(state.cars));
      }
    },
    getters:{
        // 获取购物车商品总数
        totalCarsCount:function (state) {
          var count = 0;
          state.cars.forEach(item=>{
            count += item.count;
          });
          return count;
        },

        getGoodsCount(state){
          var obj = {}
          state.cars.forEach(item=>{
              obj[item.id] = item.count;
          })

          return obj;
        }
    }
  })

  export default {
    name: 'App',
    data(){
      return{

      }
    },
    store:store,
    methods:{

    }
  }
</script>

<style>
  /* 提升优先级避免被其他视图覆盖*/
  .mint-header.is-fixed {
    z-index: 99;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
  }

  .v-enter{
    opacity: 0;
    transform: translateX(100%);
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease
  }

  /* 解决mui-tab-item 因为与js中冲突导致tabbar无法点击的问题, 自定义一个类并将相关的css拷贝*/
  .mui-bar-tab .mui-tab-item-maoge.mui-active {
    color: #007aff;
  }

  .mui-bar-tab .mui-tab-item-maoge {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }

  .mui-bar-tab .mui-tab-item-maoge .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .mui-bar-tab .mui-tab-item-maoge .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }

</style>

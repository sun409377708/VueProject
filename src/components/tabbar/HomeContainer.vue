<template>
  <div>
    <!-- 轮播图-->
    <swiper :loopList = dataList ></swiper>

    <!-- 九宫格 -->
    <square></square>

  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import swiper from '../subcomponent/swiper'
  import square from '../subcomponent/square'

  export default {
    name: "HomeContainer",
    data(){
      return {
        dataList:[]
      }
    },
    components:{
      swiper:swiper,
      square:square
    },
    created(){
      this.getLoopImg();

    },
    methods:{
      // 获取轮播图
      getLoopImg(){
        this.$http.get('api/v1/sowingmap/list').then(result => {

          if (result.body.code === 1) {

            this.dataList = result.body.results.sowingMapList;
            Toast('加载首页成功');
          }
        }, failure => {

        });
      }
    }
  }
</script>

<style scoped>



</style>

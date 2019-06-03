<template>
    <div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newsData" :key="item.hospId">
          <!-- 此处to后面的内容因为是表达式, 所以需要进行绑定-->
          <!-- 此处的/home/newsInfo/id 需要与路由配置一直, 且前面要有斜线-->
          <router-link v-bind:to="'/home/newsInfo/'+item.hospId">
            <img class="mui-media-object mui-pull-left" :src='item.hospImage'>
            <div class="mui-media-body">
              <h1>{{item.hospName}}</h1>
              <p class='mui-ellipsis'>
                <span>时间: {{'2012-12-01 12:01:10' | dateFormat('YYYY-MM-DD')}}</span>
                <span>医院电话:{{item.hospTel}}</span>
              </p>
            </div>
          </router-link>
        </li>

      </ul>
    </div>
</template>

<script>
  import { Toast } from 'mint-ui';

  export default {
    name: "Newslist",
    data(){
      return {
        newsData:[]
      }

    },
    created(){
      this.getNewsData()
    },
    methods:{
      getNewsData(){
        // this.$http.get('api/v1/base/hospital/union/list/310000?hospGradeId=&isDistance=&latitude=37.793199&longitude=122.417871&mechanismType=&pageNo=1&pageSize=10&recommend=&standardDepartmentId=').then(result => {
        //
        //   if (result.body.code === 1) {
        //
        //     this.newsData = result.body.results.hospitals;
        //     console.log(this.newsData);
        //     Toast('加载医院成功');
        //   }
        // }, failure => {
        //   Toast('获取失败');
        // });

        var url = 'https://api.daoyitong.com/api/v1/base/hospital/union/list/310000?hospGradeId=&isDistance=&latitude=37.793199&longitude=122.417871&mechanismType=&pageNo=1&pageSize=10&recommend=&standardDepartmentId='
        this.$axios(url).then(response =>{
          console.log(response);
          if (response.data.code === 1) {
            this.newsData = response.data.results.hospitals;
        console.log(this.newsData);

            Toast('加载医院成功');
          }
        }).catch(error => {

        })


      }
    }
  }

</script>

<style scoped>

  .mui-table-view li h1 {
    font-size: 14px;
  }

  .mui-table-view li .mui-ellipsis {
    font-size: 12px;
    color: #226aff;
    /* 内容两端对齐 */
    display: flex;
    justify-content: space-between;
  }
</style>

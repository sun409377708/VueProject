<template>
    <div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newsData" :key="item.questionId">
          <a href="javascript:;" >
            <img class="mui-media-object mui-pull-left" :src='item.hospImage'>
            <div class="mui-media-body">
              <h1>{{item.hospName}}</h1>
              <p class='mui-ellipsis'>
                <span>时间: {{'2012-12-01 12:01:10' | dateFormat('YYYY-MM-DD')}}</span>
                <span>医院电话:{{item.hospTel}}</span>
              </p>
            </div>
          </a>
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
        this.$http.get('api/v1/base/hospital/union/list/310000?hospGradeId=&isDistance=&latitude=37.793199&longitude=122.417871&mechanismType=&pageNo=1&pageSize=10&recommend=&standardDepartmentId=').then(result => {

          if (result.body.code === 1) {

            this.newsData = result.body.results.hospitals;
            console.log(this.newsData);
            Toast('加载成功');
          }
        }, failure => {
          Toast('获取失败');
        });
      }
    }
  }

</script>

<style scoped>
  .mui-table-view .mui-media, .mui-table-view .mui-media-body {
    text-align: left;
  }

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

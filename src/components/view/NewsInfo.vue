<template>
    <div class="newsInfo-content">
      <h3 class="title">{{newsInfo.hospName}}</h3>
      <img v-bind:src="newsInfo.hospImage" alt="" class="hospImg">
      <p class="subTitle">
        <span>发表时间:{{'2012-12-01 12:01:10' | dateFormat}}</span>
        <span>电话:{{newsInfo.telNums}}</span>
      </p>

      <hr>

      <div class="content">{{newsInfo.hospDesc}}</div>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';

    export default {
        name: "NewsInfo",
      data(){
          return{
            hospId:this.$route.params.id,
            newsInfo:{}
          }
      },
      created(){
          this.getNewsDetailData();
      },
      methods:{
          getNewsDetailData(){
            this.$http.get('api/v1/base/hospital/info/'+this.hospId).then(result => {

              if (result.body.code === 1) {

                this.newsInfo = result.body.results;
                console.log(this.newsInfo);
                Toast('加载详情成功');
              }
            }, failure => {

            });
          }
      }
    }
</script>

<style lang="scss">

  .newsInfo-content{
    padding: 0 4px;

    .title {
      font-size: 16px;
      text-align: center;
      margin: 10px 0;
      color: black;
    }
    .hospImg {
      width: 100%;
      height: 100%;
    }
    .subTitle {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      color: #226aff;
    }
    .content {
      font-size: 14px;
      color: darkgray;
    }
  }
</style>

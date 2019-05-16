<template>
    <div class="cmt-container">
      <h4>发表评论</h4>
      <hr>
      <!-- 输入文本区域 -->
      <textarea placeholder="请输入要BB的内容" maxlength="120" v-model="msg"></textarea>
      <mt-button type="primary" size="large" @click="sendMsg">发表评论</mt-button>
      <!-- 评论内容 -->
      <div class="cmt-list" v-for="(item, index) in commentData" :key="item.thdDocId">
        <div class="cmt-item">
          <div class="cmt-title">
            第{{index+1}}楼&nbsp;&nbsp;用户:{{item.doctorName}}&nbsp;&nbsp;医院:{{item.hospName}}
          </div>
          <div class="cmt-body">
            {{item.goodat === undefined ? '暂无数据' : item.goodat}}
          </div>
        </div>

      </div>
      <!-- 发表按钮 -->
      <mt-button type="danger" size="large" plain @click="getMoreData">加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';

    export default {
        name: "commentLine",
        props:['floorLevel'],
        data(){
          return {
            pageNo:1,
            commentData:[],
            msg:''
          }
        },
        created(){
          this.getCommentData()
        },
        methods:{
          getCommentData(){
            this.$http.get('cloud/tailor/inquiryDoctors/byDisease?diseaseName=%E4%B8%8D%E5%AD%95%E4%B8%8D%E8%82%B2&pageNo='+this.pageNo+'&pageSize=10').then(result => {

              if (result.body.code === 1) {

                this.commentData = this.commentData.concat(result.body.results.supInqDocs);
                // console.log(this.commentData);
                Toast('评论加载成功');
              }
            }, failure => {

            });
          },

          // 加载更多
          getMoreData(){
            this.pageNo+=1;
            this.getCommentData()

          },

          // 发表评论
          sendMsg(){
              var cmt = {doctorName:'梅思佳',hospName:this.msg.trim(), goodat: '梅梅牌速效避孕药, 包你一吃即孕, 百试百灵'}
              this.commentData.unshift(cmt);
              this.msg = ''

          }
        }
    }
</script>

<style scoped lang="scss">
  .cmt-container {
    textarea {
      font-size: 14px;
      margin: 0px;
      height: 85px;
    }

    .cmt-list{
      margin: 5px 0;
      .cmt-item{
        font-size: 12px;
        .cmt-title{
          background-color: #ccc;
          line-height: 35px;
          padding-left: 10px;
        }
        .cmt-body{
          text-indent: 2em;
          line-height: 25px;
        }
      }
    }
  }

</style>

<template>
    <div class="cmt-container">
      <h4>发表评论</h4>
      <hr>
      <!-- 输入文本区域 -->
      <textarea placeholder="请输入要BB的内容" maxlength="120"></textarea>
      <!-- 评论内容 -->
      <div class="cmt-list">
        <div class="cmt-item">
          <div class="cmt-title">
            第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-01-22
          </div>
          <div class="cmt-body">
            锄禾日当午
          </div>
        </div>

        <div class="cmt-item">
          <div class="cmt-title">
            第2楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-01-22
          </div>
          <div class="cmt-body">
            汗滴禾下土
          </div>
        </div>

        <div class="cmt-item">
          <div class="cmt-title">
            第3楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-01-22
          </div>
          <div class="cmt-body">
            谁知盘中餐
          </div>
        </div>

        <div class="cmt-item">
          <div class="cmt-title">
            第4楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2012-01-22
          </div>
          <div class="cmt-body">
            粒粒皆辛苦
          </div>
        </div>
      </div>
      <!-- 发表按钮 -->
      <mt-button type="primary" size="large">发表评论</mt-button>
    </div>
</template>

<script>
    export default {
        name: "commentLine"
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
          line-height: 35px;
        }
      }
    }
  }

</style>

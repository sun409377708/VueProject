<template>
    <div class= 'photoInfo-content'>
      <!-- 顶部标题区域 -->
      <h3 class="title">标题</h3>
      <p class="subTitle">
        <span>发表时间:</span>
        <span>点击次数</span>
      </p>

      <hr>
      <!-- 中部图片缩略图 -->
      <vue-preview :slides="slide1" @close="handleClose" class="thumbs"></vue-preview>
      <!-- 底部评论组件 -->
      <comment-box :floorLevel = '123'></comment-box>
    </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import comment from '../subcomponent/commentLine'

  export default {
    name: "PhotoInfo",
    components: {
      'comment-box':comment,

    },
    data(){
      return{
        id:this.$route.params.id,
        slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          },
          {
            src: 'https://farm4.staticflickr.com/3894/15008518202_b016d7d289_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3894/15008518202_b016d7d289_m.jpg',
            alt: 'picture3',
            title: 'Image Caption 3',
            w: 1200,
            h: 900
          },
          {
            src: 'https://farm4.staticflickr.com/3920/15008465772_383e697089_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg',
            alt: 'picture4',
            title: 'Image Caption 4',
            w: 1200,
            h: 900
          }
        ]
      }
    },

    methods:{
      handleClose () {
        console.log('close event')
      }
    }
  }

</script>



<style scoped lang="scss">

  .photoInfo-content{
    padding: 0 5px;

    .title{
      font-size: 16px;
      color: black;
      text-align: center;
      margin: 10px 0;
    }

    .subTitle{
      display: flex;
      justify-content: space-between;
      color: #226aff;
      font-size: 13px;
    }

  }

  /deep/ .thumbs figure{
    display: inline-block;
  }

  /deep/ .thumbs a img {
    width: 100px;
    background-color: red;
  }

</style>

<style>

</style>



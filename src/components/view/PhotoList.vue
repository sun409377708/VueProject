<template>
  <div class="phot0-content">
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll" >
          <!-- v-bind 绑定class类, 并做一个高亮绑定 -->
          <a v-bind:class="['mui-control-item', item.id === 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id">
            {{item.hospSimpleName}}
          </a>

        </div>
      </div>

    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <li v-for="item in cates" :key="item.id">
        <img v-lazy="item.hospImage">
        <div class="info">
          <h3 class="info-title">
            {{item.hospName}}
          </h3>
          <div class="info-body">
            {{item.hospImage}}
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>

    // 直接导入会导致类似'caller'函数与默认严格模式起冲突, 因为webpack默认是严格模式
    import mui from '../../mui/js/mui.min'

    export default {
      name: "PhotoList",
      data(){
        return{
          cates:[], // 顶部滑动条地址
        }
      },
      created(){
        this.getTitles()
      },
      // 当组件中的DOM结构渲染好再执行这个函数, 处理第一次无法滚动的情况
      mounted(){
        // 需要移除严格模式 通过 babel-plugin-transform-remove-strict-mode
        mui('.mui-scroll-wrapper').scroll({
          //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
          deceleration: 0.0005
        });
      }
      ,
      methods:{
          getTitles(){

            this.$http.get('api/v1/register/dynamic/selectAllRegistion/310000').then(result => {

              if (result.body.code === 1) {
                var array = result.body.results.choicehosps;

                for (let i = 0; i < array.length; i++) {
                  var dict = array[i];
                  dict.id = i;
                }

                this.cates = array;
              }
            }, failure => {
            });
          }
      }
    }
</script>

<style scoped lang="scss">
  /* 解决 Unable to preventDefault inside passive event listener due
  to target being treated as passive 问题, 这是Chrome为了提高页面流畅度用的
  */
  * {
    // touch-action 用于指定某个给定的区域是否允许用户操作, 以及如何响应操作(滑动, 缩放)
    touch-action: pan-y; // 启用单指水平平移手势

  }

  .photo-list {
    list-style: none;
    padding: 10px;
    margin: 0;
    padding-bottom: 0;
    li {
      background-color: #ccc;
      text-align: center;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999;
      position: relative;

      /* 将下面的标题及描述*/
      img{
        width:100%;
        /*vertical-align:middle;*/
      }

      /* 懒加载图片*/
      img[lazy=loading] {
        /*width: 100px;*/
        /*height: 100px;*/
        /*margin: auto;*/

      }
    }
  }

  .info {
    color: white;
    background-color: rgba(0, 0 ,0, 0.5);
    text-align: left;
    position: absolute;
    bottom: 0;

    max-height: 84px;
    .info-title{
      font-size: 16px;
    }

    .info-body{
      font-size: 12px;
    }
  }



</style>

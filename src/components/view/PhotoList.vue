<template>
  <div class="phot0-content">
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll" >
          <!-- v-bind 绑定class类, 并做一个高亮绑定 -->
          <a v-bind:class="['mui-control-item', item.id === 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id">
            {{item.name}}
          </a>

        </div>
      </div>

    </div>
  </div>

</template>

<script>

    // 直接导入会导致类似'caller'函数与默认严格模式起冲突, 因为webpack默认是严格模式
    import mui from '../../mui/js/mui.min'

    export default {
      name: "PhotoList",
      data(){
        return{
          cates:[]
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
            var array = [{id:1, name:'热点'}, {id:2, name:'北京'}, {id:3, name:'社会'}, {id:4, name:'娱乐'}, {id:5, name:'哲理'}];

            array.unshift({id:0, name:'全部'})
            this.cates = array;
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
</style>

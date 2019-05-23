<template>
  <!-- 设置max值 由于max值获取是异步的, 所以用watch来监听 -->
  <div class="mui-numbox" data-numbox-min='1'  >
    <button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
    <input id="test" class="mui-input-numbox" type="number" @change="countChanged" ref="numBox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../mui/js/mui.min'

  export default {
    name: "goodsNumBox",
    props:["max"],
    watch:{
      // 属性监听
      max:function (newValue, oldValue) {
        // JS方式设置最大数
        mui('.mui-numbox').numbox().setOption('max', newValue)

        console.log('watch');
        console.log(newValue);
      }
    },
    mounted(){
      // 初始化数字选择框组件
      mui('.mui-numbox').numbox()

      console.log(this.max);

    },
    methods:{

      // 第一种传值方式, 让父组件直接调用子组件方法
      totalNum(){
        return mui('.mui-numbox').numbox().getValue()
      },

      // 第二种方法, 监听文本框文本变化, 子组件emit调用父组件方法并传值
      countChanged(){
        console.log('第二种');
        this.$emit('getCount', this.$refs.numBox.value)
      }

    }
  }
</script>

<style scoped>

</style>

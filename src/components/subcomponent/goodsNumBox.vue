<template>
  <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9' >
    <button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
    <input id="test" class="mui-input-numbox" type="number"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../mui/js/mui.min'

  export default {
    name: "goodsNumBox",
    mounted(){
      // 初始化数字选择框组件
      mui('.mui-numbox').numbox()
    },
    methods:{

      totalNum(){
        return mui('.mui-numbox').numbox().getValue()
      }
    }
  }
</script>

<style scoped>

</style>

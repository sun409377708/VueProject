<template>
  <!-- 设置max值 由于max值获取是异步的, 所以用watch来监听 -->
  <div class="mui-numbox" data-numbox-min='1' style="height: 25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button" >-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="selectNum" @change="countChanged" ref="numBox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../mui/js/mui.min'

  export default {
    name: "ShopNumBox",
    props:['selectNum', 'goodId'],
    mounted(){
      // 初始化数字选择框组件
      mui('.mui-numbox').numbox()

    },
    methods:{
      countChanged:function () {
        console.log(this.$refs.numBox.value);
        console.log(this.goodId);

        // 每当数据变化后更新主界面ID
        this.$store.commit('updateShopCars', {id:this.goodId,count:this.$refs.numBox.value})
      }
    }
  }
</script>

<style scoped>

</style>

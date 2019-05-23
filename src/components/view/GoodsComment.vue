<template>
  <div class="content">
    <input type="button" value="按钮" @click="enterClick()">

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
   >
      <div v-show="show" class="ball"></div>
    </transition>
  </div>
</template>

<script>


  export default {
    name: "GoodsComment",
    data(){
      return{
        show:false
      }
    },
    methods:{

      enterClick(){
        this.show= !this.show
      },
      beforeEnter(el){
        el.style.transform = 'translate(0,0)';
      },

      enter(el, done){
        el.offsetWidth;
        el.style.transform = 'translate(150px,150px)';
        el.style.transition = 'all 2s ease';

        done()
      },

      afterEnter(el){
        // this.show = true
        // this.show = !this.show;

      }
    }


  }
</script>

<style scoped>
  .ball {
    background-color: red;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    z-index: 999;
    position: absolute;
    top: 100px;
    left: 100px;
  }

  .content{
    /*height: 800px;*/

  }
</style>

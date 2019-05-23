<template>
    <div>
      <h3>{{goodsDTO.goodsTitle}}</h3>

      <img :src='goodsDTO.goodsShowPic' alt="" class="show-picture">
      <hr>
      <div class="father">
        <div class="content" v-html="goodsHtml"></div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsDesc",
        data(){
          return{
            goodsDTO:{},
            goodsDetailDTO:{},
            goodsHtml:''
          }
        },
        created(){
          this.getDescData()
        },
        methods:{
          getDescData(){

              this.$http.get('cloud/goods/pc/web/getGoodsById?goodsId=1055361442676477952').then(result => {

                if (result.body.code === 1) {

                  this.goodsDTO = result.body.results.goodsDTO;
                  this.goodsDetailDTO = result.body.results.goodsDetailDTO;
                  this.goodsHtml = decodeURIComponent(
                    this.goodsDetailDTO.pcDesc.replace(/\+/g, '%20')
                  )
                }
              });
          }
        }
    }
</script>

<style scoped>

  /deep/ .father table{
   width: 100% !important;
    box-sizing: border-box;
  }

  .father {
    padding: 5px;

  }

  .show-picture{
    width: 100%;
    height: 100%;
  }
</style>

<template>
  <div>
      <headers :seller="seller"></headers>
      <div class="tab">
        <div class="tab-item">
            <router-link to="/goods" class="rl">商品</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/ratings" class="rl">评论</router-link>
        </div>
        <div class="tab-item">
            <router-link to="/seller" class="rl">商家</router-link>
        </div>
      </div>
      <router-view></router-view>
  </div>
</template>
<script>
  import headers from './components/header/header.vue';


  const ERR_OK = 0;
  export default {
    components: {
      headers
    },
    data() {
      return {
        seller: {

        }
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.body;
        if(response.errno===ERR_OK) {
          this.seller = response.data;
        }
      });
    }
  };
</script>
<style>
  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
    position: relative;
  }

  /*1px border实现*/
  /*.tab:after{
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    content:'';
    transform: scaleY(0.7);
  }*/
  .tab-item{
    text-align: center;
    flex: 1;
  }
  .rl{
    display: block;
    font-size: 14px;
    color: rgb(77,85,93);
  }
  .rl.active{
    color: rgb(240,20,20);
  }
</style>
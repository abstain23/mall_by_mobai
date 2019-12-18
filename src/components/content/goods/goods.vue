<template>
  <div>
    <p class="moreRecommend" v-if="showMore"><span></span>看了又看<span></span></p>
    <div class="goods">
      <goods-item v-for="item in goods" :goodsItem='item'></goods-item>
   </div>
  </div>
 
</template>

<script>
import GoodsItem from './goods-item'

export default {
  name: 'goods',

  components:{
    GoodsItem
  },

  data () {
    return {
    }
  },

  methods: {},
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  },
  computed:{
    showMore(){
      if(this.$route.path.indexOf('home') !== -1){
        return false
      }else {
        return true
      }
    }
  }
}
</script>

<style lang='scss'>
  .moreRecommend {
    font-size: 15px;
    padding: 5px 5px;
    text-align: center;
    span {
      display: inline-block;
      width: 50px;
      border-top: 1px solid #DBDBDB;;
      vertical-align: middle;
      margin: 0 8px;
    }
  }
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>

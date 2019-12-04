<template>
  <div class="goods">
   <goods-item v-for="item in goods" :goodsItem='item'></goods-item>
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
    
  }
}
</script>

<style lang='scss'>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>

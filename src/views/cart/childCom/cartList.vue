<template>
  <div class="cart-list">
    <scroll class="scroll-content" ref='scroll'>
      <cart-list-item v-for="(item, index) in cartList" :key='index' :product='item'></cart-list-item>
    </scroll>
    <bottom-nav :cartList='cartList'></bottom-nav>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import cartListItem from './cartListItem'
import bottomNav from './bottomNav'
import Scroll from 'components/common/scroll/scroll'
export default {
  name: 'cartList',

  data () {
    return {
    }
  },
  components:{Scroll, cartListItem, bottomNav},
  computed:{...mapGetters([
    'cartList'
  ])},
  methods: {},
  activated() {
    // console.log('xxxx')
    this.$refs.scroll.refresh()
  }
}
</script>

<style lang='scss'>
  .cart-list {
    height:calc(100% - 44px - 49px - 44px);
  }
  .scroll-content {
    height: 100%;
    overflow: hidden;
  }
</style>

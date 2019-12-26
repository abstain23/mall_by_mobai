<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>
    <!-- 商品列表 -->
      <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import cartList from './childCom/cartList'
import {mapGetters} from 'vuex'


export default {
  name: 'cart',
  components:{NavBar, cartList},
  data () {
    return {
    }
  },
  computed:{
    ...mapGetters([
      'cartListLength'
    ])
  },
  methods: {}
}
</script>

<style lang='scss'>
  #cart {
    height: 100vh;
    position: relative;
    .cart-nav {
      background: pink;
      color: #fff;
    }
  }
</style>

<template>
  <div class="tab-bar-wrapper">
      <tab-bar>
      <tab-bar-item path='/home' activeColor='blue'>
        <img src="~assets/img/tabbar/home.svg" slot='item-icon'>
        <img src="~assets/img/tabbar/home_active.svg" slot='item-icon-active'>
        <div slot='item-text'>首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img src="~assets/img/tabbar/category.svg" slot='item-icon'>
        <img src="~assets/img/tabbar/category_active.svg" slot='item-icon-active'>
        <div slot='item-text'>商品</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img src="~assets/img/tabbar/shopcart.svg" slot='item-icon'>
         <img src="~assets/img/tabbar/shopcart_active.svg" slot='item-icon-active'>
        <div slot='item-text'>购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img src="~assets/img/tabbar/profile.svg" slot='item-icon'>
        <img src="~assets/img/tabbar/profile_active.svg" slot='item-icon-active'>
        <div slot='item-text'>我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../common/tabbar/TabBar'
import TabBarItem from '../common/tabbar/TabBarItem'

export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem,
   
  },
  data () {
    return {
    }
  },

  methods: {}
}
</script>

<style lang='scss'>
  .tab-bar-wrapper{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f6f6f6;
    box-shadow: 0 -2px 1px rgba(100,100,100,.1);
    z-index: 99;
  }
</style>

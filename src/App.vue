<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<style lang="scss">
  @import 'assets/css/base.css';
</style>

<script>
import MainTabBar from 'components/content/MainTabBar'


  export default {
    name:'App',
    components: {
      MainTabBar,
      
    }
  }
</script>
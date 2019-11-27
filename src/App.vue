<template>
  <div id="app">
    
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<style lang="scss">


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
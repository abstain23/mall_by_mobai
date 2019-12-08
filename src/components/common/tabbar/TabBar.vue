<template>
  <footer id='tab-bar'> 
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name:'TabBar'
  }
</script>

<style lang='scss'>
  #tab-bar {
    display: flex;
  }

</style>
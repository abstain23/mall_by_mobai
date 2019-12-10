<template>
  <div class="detailNavBar">
    <nav-bar>
      <div slot="center" class="title">
        <div v-for='item in titles' class="title-item">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'detailNavBar',

  data () {
    return {
      titles:['商品','参数','评论','推荐']
    }
  },

  methods: {},
  components:{
    NavBar
  }
}
</script>

<style lang='scss' scoped>
  .detailNavBar {
    .title{
      width: 100%;
      height: 100%;
      display: flex;
      .title-item {
        flex: 1;
      }
    }
  }
</style>

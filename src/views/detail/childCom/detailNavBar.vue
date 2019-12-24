<template>
  <div class="detailNavBar">
    <nav-bar>
      <div slot="left" class='back' @click="goback">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div v-for='(item, index) in titles' class="title-item"
        :class="{active:index === currentIndex}"
        @click = 'changeIndex(index)'
        >{{item}}</div>
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
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  props:{
    offsetTops:{
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index
      if(this.offsetTops.length){
        // console.log(this.$parent.$refs.scroll.scrollTo)
        this.$parent.$refs.scroll.scrollTo(0,-this.offsetTops[index], 0)
        // scrollTo(0,this.offsetTops[index])
      }
    },
    goback() {
      this.$router.go(-1)
    }
  },
  components:{
    NavBar
  }
}
</script>

<style lang='scss' scoped>
  .detailNavBar {
    .back img{
      padding-top: 10px;
    }
    .title{
      width: 100%;
      height: 100%;
      display: flex;
      .title-item {
        flex: 1;
      }
      .active {
        color: pink;
      }
    }
  }
</style>
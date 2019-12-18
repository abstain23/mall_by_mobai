<template>
  <div id="home">
    <nav-bar class="home-nav">
      <span slot='center'>购物街</span>
    </nav-bar>
    <tab-control :titles='titles' @changeType='changeType' ref="tabControl1" class="fixed" v-show="isTabFixed"></tab-control>
    <scroll class="scroll-content" ref='scroll' :probeType='3' :pullUpLoad='true' @scroll="homeScroll" @pullingUp='loadMore'>
      <home-swiper :banner='banner' @homeSwiperImgLoad='hmSwiperload'></home-swiper>
      <home-recommend :recommend='recommend'></home-recommend>
      <feature-view></feature-view>
      <tab-control :titles='titles' @changeType='changeType' ref="tabControl2" :class="{fixed:isTabFixed}"></tab-control>
      <goods :goods='showGoods'></goods>
    </scroll>
    <back-top @click.native="backTop" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
import {getHomeMultidata,getHomeGoods} from 'server/home'

import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childCom/HomeSwiper'
import HomeRecommend from './childCom/HomeRecommend'
import FeatureView from './childCom/FeatureView'
import Goods from 'components/content/goods/goods'


import TabControl from 'components/content/tabControl/tabControl'

import Scroll from 'components/common/scroll/scroll'
import BackTop from 'components/content/backTop/BackTop'


import {itemImageListennerMixin} from 'common/mixin';

export default {
  name: 'home',
  components:{
       NavBar,
       HomeSwiper,
       HomeRecommend,
       FeatureView,
       TabControl,
       Goods,
       Scroll,
       BackTop
    },
    mixins:[itemImageListennerMixin],
  data () {
    return {
      banner:[],
      recommend:[],
      titles:['流行','新款','精选'],
      goods:{
        pop:{page:0,list:[],positionY:0},
        new:{page:0,list:[],positionY:0},
        sell:{page:0,list:[],positionY:0}
      },
      currentType:'pop',
      showBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
    }
  },
  computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
  },
  methods: {
    changeType(index){
      switch(index){
        case 0:
          this.currentType='pop'
          break
        case 1:
          this.currentType='new'
          break
        case 2:
          this.currentType='sell'
          break
      }
      this.$refs.tabControl1.currentIndex=index
      this.$refs.tabControl2.currentIndex=index
      this.$refs.scroll.scrollTo(0,this.goods[this.currentType].positionY,0)
      this.$refs.scroll.refresh()
    },
    // 网络请求方法
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      const result = res.data
      this.banner=result.banner.list
      // console.log(result.banner)
      this.recommend=result.recommend.list
      this.keywords=result.keywords
      this.dKeyword=result.dKeyword
      })
    },
    getHomeGoods(type){
      const page= this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        // console.log(res)
      // this.goods[type].list=this.goods[type].list.concat(res.data.list)
      this.goods[type].list.push(...res.data.list)
        // console.log(this.goods[type].list)
      this.goods[type].page+=1
      })
    },
    backTop(){
      // console.log(this.$refs.scroll.scroll)
      this.$refs.scroll.scrollTo(0,0)
    },
    homeScroll(position){
      this.showBackTop=(-position.y)>1000
      this.isTabFixed = (-position.y) > this.tabOffsetTop
      this.goods[this.currentType].positionY = position.y
    },
    loadMore(){
      // console.log('more')
      new Promise((resolve) => {
        this.getHomeGoods(this.currentType)
        resolve()
      }).then(() => {
        this.$refs.scroll.finishedPullUp()
        this.$refs.scroll.refresh()
      })
    },
    hmSwiperload() {
      const offsetTop = this.$refs.tabControl2.$el.offsetTop 
      this.tabOffsetTop = offsetTop
      this.goods['new'].positionY = - offsetTop
      this.goods['sell'].positionY = - offsetTop
    }
  },
  destroyed(){
    console.log('destroyed')
  },
  activated(){
    // console.log('active')
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
    // console.log(this.saveY)
  },
  deactivated(){
    // console.log('deactive')
    this.saveY = this.$refs.scroll.getScrollY()
    // console.log(this.saveY)
    this.bus.$off('imgload', this.itemImageListener)
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){}
}

</script>

<style scoped>
  #home{padding-top: 44px;height: 100vh;position: relative;}
 .home-nav {
   background: pink;
   color: white;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 999;
 } 
 .fixed {
   position: relative;
   background: #fff;
   z-index: 999;
 }
 .scroll-content {
   position: absolute;
   top: 44px;
   bottom: 49px;
   left: 0;
   right: 0;
 }

</style>

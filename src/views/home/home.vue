<template>
  <div id="home">
    <nav-bar class="home-nav">
      <span slot='center'>购物街</span>
    </nav-bar>
    <scroll class="scroll-content" ref='scroll' :probeType='3' :pullUpLoad='true' @scroll="homeScroll">
      <home-swiper :banner='banner'></home-swiper>
      <home-recommend :recommend='recommend'></home-recommend>
      <feature-view></feature-view>
      <tab-control :titles='titles' @changeType='changeType'></tab-control>
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
  data () {
    return {
      banner:[],
      recommend:[],
      titles:['流行','新款','精选'],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      currentType:'pop',
      showBackTop:false
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
    homeScroll(positon){
      this.showBackTop=(-positon.y)>1000
    }
  },
  created() {
    this.getHomeMultidata()

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted(){
    this.bus.$on('imgload',() => {
      this.$refs.scroll.refresh()
    })
  }
}

</script>

<style >
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
 .tab-control {
   position: sticky;
   top:44px;
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

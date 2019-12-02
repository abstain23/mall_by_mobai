<template>
  <div>
    <nav-bar class="home-nav">
      <span slot='center'>购物街</span>
    </nav-bar>
    <home-swiper :banner='banner'></home-swiper>
    <home-recommend :recommend='recommend'></home-recommend>
  </div>
</template>

<script>
import {getHomeMultidata} from 'server/home'

import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childCom/HomeSwiper'
import HomeRecommend from './childCom/HomeRecommend'
export default {
  name: 'home',
  components:{
       NavBar,
       HomeSwiper,
       HomeRecommend
    },
  data () {
    return {
      banner:[],
      recommend:[],
      keywords:null,
      dKeyword:null
    }
  },
  methods: {},
  created() {
    getHomeMultidata().then(res=>{
      const result = res.data
      this.banner=result.banner.list
      // console.log(result.banner)
      this.recommend=result.recommend.list
      this.keywords=result.keywords
      this.dKeyword=result.dKeyword
    })
  },
}

</script>

<style >
  /* @import 'vue-swipe/dist/vue-swipe.css'; */
 .home-nav {
   background: pink;
   color: white;
 } 
</style>

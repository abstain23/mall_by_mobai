<template>
  <div>
    <nav-bar class="home-nav">
      <span slot='center'>购物街</span>
    </nav-bar>
  </div>
</template>

<script>
import {getHomeMultidata} from 'server/home'
import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'home',
  components:{
       NavBar
    },
  data () {
    return {
      banner:null,
      recommend:null,
      keywords:null,
      dKeyword:null
    }
  },
  methods: {},
  created() {
    getHomeMultidata().then(res=>{
      const result = res.data
      this.banner=result.banner
      this.recommend=result.recommend
      this.keywords=result.keywords
      this.dKeyword=result.dKeyword
    })
  },
}

</script>

<style >
 .home-nav {
   background: pink;
   color: white;
 } 
</style>

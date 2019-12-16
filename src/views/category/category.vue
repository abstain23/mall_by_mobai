<template>
  <div class="wrapper">
    <ul>
      <li v-for="item in 10">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: '',

  data () {
    return {
      scroll:null
    }
  },
  created(){
    // new BScroll('.wrapper',{}) 拿不到dom
  },
  mounted(){
    //默认情况下，不会实时监测滚动位置，传入第二个参数
    // probe
    //0,1都是不侦测
    //2:在手指滚动过程中侦测，手指离开的惯性过程中不侦测
    //3 都侦测
    let bs = new BScroll(document.querySelector('.wrapper'),{probeType:3,click:true,pullUpLoad:true})
    bs.on('scroll',(position)=>{
      console.log(position)
    })
  },
  methods: {}
}
</script>

<style lang='scss'>
  .wrapper {
    height: 100vh;
    overflow: hidden;
    margin-bottom: 49px;
  }
</style>

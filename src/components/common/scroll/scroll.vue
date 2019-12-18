<template>
  <div class="wrapper" ref='wrapper'>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name:'scroll',
    data(){
      return{
        scroll:null
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      scrollTo(x,y,time=500){
        this.scroll&&this.scroll.scrollTo(x,y,time)
        console.log('scrollto')
      },
      finishedPullUp(){
        this.scroll&&this.scroll.finishPullUp()
      },
      refresh(){
        console.log('--- refresh')
        this.scroll&&this.scroll.refresh()
      },
      getScrollY(){
        return this.scroll.y?this.scroll.y:0
      }
    },
    mounted(){
      let wrapper = this.$refs.wrapper
      this.scroll=new BScroll (wrapper,{
        probeType:this.probeType,
        click:true, //控制tab页是否可以点击切换
        pullUpLoad:this.pullUpLoad
      })

      this.scroll.on('scroll',(position) => {
        // console.log(this.scroll)
        this.$emit('scroll',position)
      })

      this.scroll.on('pullingUp',() => {
        this.$emit('pullingUp')
      })
    }
  }
</script>

<style lang='scss' scoped>
 .wrapper {
   overflow: hidden;
 }
</style>
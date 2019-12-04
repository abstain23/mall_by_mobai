<template>
  <div class="tab-control">
    <div v-for='(item,index) in titles' class="tab-control-item" :class="{active:index===currentIndex}" @click="changeIndex(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'tabControl',
    data(){
      return {
        currentIndex:0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      changeIndex(index){
        this.currentIndex=index
        this.$emit('changeType',index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    .tab-control-item{
      flex:1;
    }
    .tab-control-item.active {
      color: pink;
      span{
      border-bottom:3px solid pink;
      padding: 5px;
      }
    }
  }
</style>
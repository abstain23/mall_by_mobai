<template>
  <div class="tab-bar-item" @click='itemClick'>
    <div v-if='!isActive'>
      <slot name='item-icon'></slot>
    </div>
    <div v-else>
      <slot name='item-icon-active'></slot>
    </div>
    
    <div :style="activeStyle">
      <slot name='item-text'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props:{
    path:{
      type:String
    },
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data () {
    return {
      // isActive:false
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick(){
      // console.log(this.$route.path)  
      this.$router.push(this.path)
    }
  }
}
</script>

<style lang='scss' scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
      img {
        width: 24px;
        height: 24px;
      }
      // .active {
      //   color: red;
      // }
    }
</style>

<template>
 <div class="bottom-menu">
    <CheckButton class="select-all" @click.native="toggleCheckedAll" :isChecked='isCheckedAll'></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{allPrice}}</span>
    <span class="buy-product">去计算({{length}})</span>
  </div>
</template>

<script>
import CheckButton from './checkButton'
export default {
  name: 'bottomNav',
  components:{CheckButton},
  data () {
    return {
    }
  },
  props:{
    cartList:{
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted(){},
  methods: {
    toggleCheckedAll() {
     if(this.isCheckedAll){
       this.cartList.forEach(item => {
         item.isChecked = false
         })
     }else {
       this.cartList.forEach(item => item.isChecked = true)
     }
    }
  },
  computed:{
    allPrice() {
      return this.cartList.filter(item => item.isChecked).reduce((pre, next) => {
        return pre + next.price * next.count
      }, 0).toFixed(2)
    },
    length(){
      return this.cartList.filter(item => item.isChecked).length
    },
    isCheckedAll() {
      if(this.cartList.length){
        // return !this.cartList.filter(item => !item.isChecked).length
        return !this.cartList.find(item => !item.isChecked)
      }
    }
  },
  watch:{
  }
}
</script>

<style lang='scss'>
   .bottom-menu {
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
  }
  .bottom-menu .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }
  .bottom-menu .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }
  .bottom-menu .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>

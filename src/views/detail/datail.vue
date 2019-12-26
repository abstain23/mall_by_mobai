<template>
  <div id="detail">
      
      <detail-nav-bar class="detail-nav" :offsetTops='offsetTopArr' ref="detailNav" v-show="detailUndefinde"></detail-nav-bar>
      
      <scroll class="detail-scroll" ref="scroll" v-show="detailUndefinde" :probe-type='3' @scroll='detailScroll'>
      <detail-swiper :topImages='topImages'></detail-swiper>
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-goods-info :detailInfo='detailInfo' @detailImageLoad='detailImageLoad'></detail-goods-info>
      <detail-param-info :param-info='itemParams' ref="paramInfo"></detail-param-info>
      <detail-comment :comment-info="comments" ref="comments"></detail-comment>
      <goods :goods='recommends' ref="recommends"></goods>
      </scroll>
      <div v-show='!detailUndefinde' class="else">
        <p class="else_text">抱歉！_--_ 该商品已经下架!</p>
        <button class="btn_back" @click="showElse" :class="{touch_color:touchColor}" @touchstart="touchstart" @touchend="touchend">
          返回上一级
        </button>
      </div>
     <back-top @click.native="backTop" v-show="showBackTop"></back-top>
     <detail-bottom-nav @addToCart='addToCart'></detail-bottom-nav>
  </div>
</template>

<script>
import detailNavBar from './childCom/detailNavBar'
import detailSwiper from './childCom/detailSwiper'
import detailBaseInfo from './childCom/detailBaseInfo.vue'
import detailShopInfo from './childCom/detailShopInfo'
import detailGoodsInfo from './childCom/detailGoodsInfo'
import detailParamInfo from './childCom/detailParamInfo'
import detailComment from './childCom/detailComment'
import detailBottomNav from './childCom/detailBottomNav'
import Scroll from 'components/common/scroll/scroll'
import goods from 'components/content/goods/goods'
import BackTop from 'components/content/backTop/BackTop'
import { getDetail, Goods, Shop, getRecommends } from "server/detail";
import {itemImageListennerMixin, backTopMixin} from 'common/mixin';

import {mapActions} from 'vuex'
  export default {
    name:'detail',
    components:{
      detailNavBar,
      detailSwiper,
      detailBaseInfo,
      detailShopInfo,
      Scroll,
      detailGoodsInfo,
      detailParamInfo,
      detailComment,
      goods,
      BackTop,
      detailBottomNav
    },
    mixins:[itemImageListennerMixin, backTopMixin],
    data() {
      return {
        iid: null,
        topImages: null,
        goods: {},
        shop: {},
        detailInfo:{},
        itemParams: {},
        comments: {},
        recommends: [],
        detailUndefinde: true,
        touchColor: false,
        offsetTopArr: []
      }
    },
    created() {
      this.iid = this.$route.params.iid
      this.getDetail(this.iid)
      getRecommends().then(res => {
        // console.log(res)
        this.recommends = res.data.list
        // console.log(res.data.list)
      })
    },
    mounted(){
      this.bus.$on('loadDetail',(data) => {
        this.detailUndefinde = false
      })
    },
    destroyed() {
      this.bus.$off('imgload', this.itemImageListener)
    },
    methods:{
      ...mapActions(['addCart']),
      addToCart(){
        const product = {}
        // console.log(this.goods)
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid
        product.count = 0
        product.isChecked = false
        //加入到购物车
        // this.$store.dispatch('addCart', product)
        this.addCart(product).then(res => {
          // console.log(this.$refs.scroll)
          this.$toast.show(res, 1000)
        })
      },
      detailScroll(position){
        this.showBackTop=(-position.y)>1000
        let y = position.y
        let len = this.offsetTopArr.length
        let currentIndex = 0
        for(let i =0;i<len-1;i++){
          // console.log('xx')
          // console.log(y)
          if(currentIndex!=i &&(-y >= this.offsetTopArr[i] && -y < this.offsetTopArr[i+1])){
            // console.log('yy')
            currentIndex = i
            // console.log(this.$refs.detailNav.currentIndex)
          }
        }
        this.$refs.detailNav.currentIndex = currentIndex
      },
      touchstart(){
     
            this.touchColor = true;
        },
      touchend(){
            this.touchColor = false;
        },
      detailImageLoad(){
        // console.log('x')
        this.$refs.scroll.refresh()
        // console.log(this.$refs.scroll.getScrollY())
        this.offsetTopArr = [0,this.$refs.paramInfo.$el.offsetTop,this.$refs.comments.$el.offsetTop,this.$refs.recommends.$el.offsetTop,Number.MAX_VALUE]
        // console.log(this.offsetTopArr)
      },
      getDetail(iid){
        getDetail(iid).then((res) => {
        if(res){
          this.detailUndefinde = true
          const data = res.result 
        // console.log(data)
          this.topImages = data.itemInfo.topImages 
          this.goods = new Goods(data.itemInfo, data.columns,   data.shopInfo.services,data.itemInfo.discountBgColor)
          this.shop = new Shop(data.shopInfo)
          this.detailInfo = data.detailInfo
          this.itemParams = data.itemParams
          if (data.rate.list) {
              this.comments = data.rate.list[0];
            }
          }
      })
      },
      showElse() {
        this.detailUndefinde = true
      }
    },
    watch:{
    //      $route:{
    //        handler(val,oldVal){  
    //           if(this.$route.path == val.params.iid){
    //             this.detailUndefinde = false
    //           }
    //           console.log(val)
    //           console.log(oldVal)
              
    //        }
    //      }
    }
    
  }
</script>

<style lang='scss' scoped>
  #detail {
    position: relative;
    z-index: 999;
    background-color: #fff;
    height: 100vh;
    .detail-nav {
      position: relative;
      z-index: 999;
      background-color: #fff;
    }
    .detail-scroll {
      height: calc(100% - 44px - 49px);
    }
    .else {
      display: flex;
      height: 100%;
      width: 100%;
      flex-direction: column;
      .else_text {
        text-align: center;
        margin-top: 88px;
        margin-bottom: 20px;
        font-size: 20px;
      }
      .btn_back {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-decoration: none;
        display: inline-block;
        text-align: center;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        &.touch_color{
          background-color: orangered;
        }
      }
    }
  }
</style>
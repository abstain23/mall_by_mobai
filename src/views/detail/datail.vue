<template>
  <div id="detail">
      
      <detail-nav-bar class="detail-nav"></detail-nav-bar>
      
      <scroll class="detail-scroll" ref="scroll" v-if="detailUndefinde">
      <detail-swiper :topImages='topImages'></detail-swiper>
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-goods-info :detailInfo='detailInfo' @detailImageLoad='detailImageLoad'></detail-goods-info>
      <detail-param-info :param-info='itemParams'></detail-param-info>
      <detail-comment :comment-info="comments"></detail-comment>
      <goods :goods='recommends' ></goods>
      </scroll>
      <p v-else>该商品已经下架</p>
    
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

import Scroll from 'components/common/scroll/scroll'
import goods from 'components/content/goods/goods'

import { getDetail, Goods, Shop, getRecommends } from "server/detail";
import {itemImageListennerMixin} from 'common/mixin';


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
      goods
    },
    mixins:[itemImageListennerMixin],
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
        detailUndefinde: true
      }
    },
    created() {
      this.iid = this.$route.params.iid
      this.getDetail(this.iid)

      getRecommends().then(res => {
        // console.log(res)
        this.recommends = res.data.list
      })
    },
    mounted(){
      this.bus.$on('loadDetail',() => {
        this.detailUndefinde = false
        console.log(this.$route.params.iid)
      })
    },
    destroyed() {
      this.bus.$off('imgload', this.itemImageListener)
    },
    methods:{
      detailImageLoad(){
        // console.log('x')
        this.$refs.scroll.refresh()
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
      height: calc(100% - 44px);
    }
  }
</style>
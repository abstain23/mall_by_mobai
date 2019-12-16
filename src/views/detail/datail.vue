<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="detail-scroll" ref="scroll">
      <detail-swiper :topImages='topImages'></detail-swiper>
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-goods-info :detailInfo='detailInfo' @detailImgload='detailImgload'></detail-goods-info>
      <detail-param-info :param-info='itemParams'></detail-param-info>
    </scroll>
    
  </div>
</template>

<script>
import detailNavBar from './childCom/detailNavBar'
import detailSwiper from './childCom/detailSwiper'
import detailBaseInfo from './childCom/detailBaseInfo.vue'
import detailShopInfo from './childCom/detailShopInfo'
import detailGoodsInfo from './childCom/detailGoodsInfo'
import detailParamInfo from './childCom/detailParamInfo'

import Scroll from 'components/common/scroll/scroll'
import { getDetail,Goods,Shop } from "server/detail";

  export default {
    name:'detail',
    components:{
      detailNavBar,
      detailSwiper,
      detailBaseInfo,
      detailShopInfo,
      Scroll,
      detailGoodsInfo,
      detailParamInfo
    },
    data() {
      return {
        iid: null,
        topImages: null,
        goods: {},
        shop: {},
        detailInfo:{},
        itemParams: {}
      }
    },
    created() {
      this.iid = this.$route.params.iid
      getDetail(this.iid).then((res) => {
        const data = res.result 
        console.log(data)
        this.topImages = data.itemInfo.topImages 
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services,data.itemInfo.discountBgColor)

        this.shop = new Shop(data.shopInfo)

        this.detailInfo = data.detailInfo

        this.itemParams = data.itemParams
      })
    },
    mounted(){
      // console.log()
    },
    methods:{
      detailImgload(){
        this.$refs.scroll.refresh()
      }
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
<template>
 <swiper class="detail-swiper">
   <swiper-item v-for='item in topImages'>
     <img :src="item" alt="">
   </swiper-item>
 </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index';
export default {
  name: 'detailSwiper',

  data () {
    return {
    }
  },
  components:{
      Swiper,
      SwiperItem
  },
  methods: {},
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style lang='scss'>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>

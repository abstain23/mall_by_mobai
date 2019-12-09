<template>
   <swiper>
      <swiper-item v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperImgLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index'
  export default {
    name:'homeswiper',
    components:{
      Swiper,
      SwiperItem
    },
    data(){
      return {
        isImgLoad:false
      }
    },
    methods:{
      swiperImgLoad(){
        if(!this.isImgLoad) this.$emit('homeSwiperImgLoad')
        this.isImgLoad=true
      }
    },
    props:{
      banner:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>
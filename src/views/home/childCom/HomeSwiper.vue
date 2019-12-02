<template>
   <swiper>
      <swiper-item v-for="item in banner">
        <a :href="item.link">
          <img :src="item.image" alt="">
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
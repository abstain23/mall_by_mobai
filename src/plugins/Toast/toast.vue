<template>
  <transition>
    <div id="toastWaka" v-show="isShow">
      <span class="text">{{message}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'toast',

  data () {
    return {
      message:'',
      isShow:false
    }
  },

  methods: {
    show(message = '成功', duration = 1500) {
      this.message = message
      this.isShow = true

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration)
    }
  }
}
</script>

<style lang='scss'>
  #toastWaka {
    position: absolute;
    left: 50%;
    bottom: 50%;
    z-index: 99999;
    margin: 0 auto;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
    width: 120px;
    height:40px;
    line-height: 40px;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    background-color: rgba(000,000,000,0.5);
}

#toastWaka .text{
    color: #fff;
    display: inline-block;
    font-size: 14px;
    position: absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

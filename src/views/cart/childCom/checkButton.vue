<template>
    <div>
      <div class="icon-selector" :class="{'selector-active': isChecked}">
        <img src="~/assets/img/cart/tick.svg" alt="">
      </div>
    </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
    }
  },
  props:{
    isChecked:{
      type: Boolean,
      default(){
        return false
      }
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }
  .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>

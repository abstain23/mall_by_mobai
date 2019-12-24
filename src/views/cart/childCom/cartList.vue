<template>
  <div>
    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'cartList',

  data () {
    return {
    }
  },
  computed:{...mapGetters([
    'cartList'
  ])},
  methods: {}
}
</script>

<style lang='scss'>

</style>

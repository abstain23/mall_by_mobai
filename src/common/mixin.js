import {debounce} from 'common/utils';

export const itemImageListennerMixin = {
  data(){
    return {
      itemImageListener: null
    }
  },
  mounted () {
    const refresh = debounce(this.$refs.scroll.refresh,200)
    this.itemImageListener = () => {
      refresh()
    }
    // console.log('mixin')
    this.bus.$on('imgload', this.itemImageListener)
  }
}

export const backTopMixin = {
  data(){
    return {
      showBackTop:false
    }
  },
  methods: {
    backTop(){
      // console.log(this.$refs.scroll.scroll)
      this.$refs.scroll.scrollTo(0,0)
    },
  }
}
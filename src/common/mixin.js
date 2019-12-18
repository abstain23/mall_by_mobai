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
    console.log('mixin')
    this.bus.$on('imgload', this.itemImageListener)
  }
}
export default {
  addCart(context, playload){
    let oldProduct = context.state.cartList.find((item) => item.iid === playload.iid)
    if(oldProduct){
      // console.log('if')
      context.commit('addCount', oldProduct)
    }else {
      // console.log('else')
      playload.count = 1
      context.commit('addToCart', playload)
    }
  }
}
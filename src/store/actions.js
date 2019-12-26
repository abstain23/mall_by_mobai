export default {
  addCart(context, playload){
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find((item) => item.iid === playload.iid)
      if(oldProduct){
        // console.log('if')
       context.commit('addCount', oldProduct)
       resolve('当前商品数量加1')
     }else {
       // console.log('else')
       playload.count = 1
        context.commit('addToCart', playload)
        resolve('添加了新的商品')
      }
    })
  }
}
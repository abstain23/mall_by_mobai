import Toast from './toast.vue'


export default {
  install(Vue) {
    // 1.创建组件构造器
    const ToastConstructor = Vue.extend(Toast)
    //2.new 一个组件对象
    const toast  = new ToastConstructor()
    console.log(toast)
    console.log(toast.$el)
    //3.将组件对象挂载到某一个元素上
    toast.$mount(document.createElement('div'))
    console.log(toast.$el)
    // //4.toast.$el 对应的就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
  }
}
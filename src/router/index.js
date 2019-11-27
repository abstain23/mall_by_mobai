import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)




const Home = ()=> import("../views/home/home.vue")
const CateGory = ()=> import("../views/category/category.vue")
const Cart = ()=> import("../views/cart/cart.vue")
const Profile = ()=> import("../views/profile/profile.vue")

const routes = [
  {path:'',redirect: '/home'},
  {path:'/home',component:Home},
  {path:'/category',component:CateGory},
  {path:'/cart',component:Cart},
  {path:'/profile',component:Profile}
]


const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

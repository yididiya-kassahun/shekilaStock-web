import { createRouter,createWebHistory } from 'vue-router';

import login from '../views/login.vue';
import register from '../views/register.vue';
import home from '../views/home.vue';
import productDetail from '../views/ProductDetail.vue';
import AddProduct from '../views/AddProduct.vue';
import Cart from '../views/Cart.vue';

const routes = [
  {
    path:'/',
    name:'home',
    component:home,
    meta: {title: 'home'}
  },
  {
    path:'/signin',
    name:'signin',
    component:login,
    meta: {title: 'signin'}

  },
  {
    path:'/signup',
    name:'signup',
    component:register,
    meta: {title: 'signup'}
  },
  {
    path:'/add.product',
    name:'add.product',
    component:AddProduct,
    beforeEnter : guardMyroute,
    meta: { title: 'add.product' }, 
  },
  {
    path:'/cart/:id',
    name:'cart',
    beforeEnter : guardMyroute,
    component:Cart,
    meta: {title: 'cart'}

  },
  {
    path:'/product.detail/:id',
    name:'product.detail',
    component:productDetail,
    meta: {title: 'product.detail'}
  }
];
const router = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes
})

function guardMyroute(to,from,next) {
   const requiresAuth = localStorage.getItem('isLoggedin');
   console.log("required auth "+requiresAuth);

   if(requiresAuth){
    next();
   }else{
    next('/signin');
   }
};

export default router;

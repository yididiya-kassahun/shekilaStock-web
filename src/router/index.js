import { createRouter,createWebHistory } from 'vue-router';

import login from '../views/login.vue';
import register from '../views/register.vue';
import home from '../views/home.vue';
import cart from '../views/Cart.vue';
import AddProduct from '../views/AddProduct.vue';
import productDetail from '../views/productDetail.vue';

const routes = [
  {
    path:'/',
    name:'home',
    component:home
  },
  {
    path:'/cart',
    name:'cart',
    component:cart
  },
  {
    path:'/signin',
    name:'signin',
    component:login
  },
  {
    path:'/signup',
    name:'signup',
    component:register
  },
  {
    path:'/add.product',
    name:'add.product',
    component:AddProduct
  },
  {
    path:'/product.detail/:id',
    name:'product.detail',
    component:productDetail
  }
];
const router = createRouter({
  history:createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;

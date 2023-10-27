<template>
    <h1 id="home-title">Product Detail</h1>
    <hr>
    <div class="home-container">
    <div class="card" v-for="product in cartItems.product" :key="product._id">
      <div class="item">
        <img :src="baseUrl + product.image" width="200" height="200" alt="no image">
        <h4>{{ product.title }}</h4>
        <h5>Price: ${{ product.price }}</h5>
       <button class="cartBtn">Checkout</button>
    </div>
   </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            cartItems:[],
            id: this.$route.params.id,
            baseUrl: 'http://localhost:3000/uploads/',
        }
    },
    mounted(){
            axios.get('get.cart')
            .then(cart=>{
               this.cartItems = cart.data.products[0];
               console.log(this.cartItems);
            })
    }

}
</script>

<style>
.home-container {
  margin:0%;
  padding: 0%;
  float: left;
  display: flex;
}
</style>
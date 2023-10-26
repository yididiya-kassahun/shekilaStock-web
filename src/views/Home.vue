<template>
    <h1 id="home-title">ሸክላ Stock ecommerce</h1>
    <hr>
   
    <div class="search-container">
      <input
        type="text"
        id="search-input"
        placeholder="Search..."
      />
      <button type="submit" id="search-button">
        <i class="fa fa-search"></i>
      </button>
    </div>

    <div class="home-container">

   <!-- <div class="card">
    <div class="item">
        <img src="../assets/photos/clay3.webp" width="200px" height="200px">
        <h4>Item 3</h4>
        <h5>Price: $5.99</h5>
        <button class="cartBtn">Add to cart</button>
    </div>
   </div> -->

   <div class="itemContainer" v-for="product in products" :key="product._id">
   <div class="card">
      <div class="item">
       <RouterLink :to="{path:`/product.detail/${product._id}`}"><img :src="baseUrl + product.image" width="200" height="200" alt="no image"> </RouterLink> 
        <h4>{{ product.title }}</h4>
        <h5>Price: ${{ product.price }}</h5>
       <RouterLink :to="{path:`/cart/${product._id}`}"> <button class="cartBtn">Add to cart</button></RouterLink>
    </div>
   </div>
  </div>

 </div>
</template>

<script>
import axios from 'axios';
import {onMounted, ref} from 'vue';

export default {

    data () {
        return {
          products:[],
          baseUrl: 'http://localhost:3000/uploads/',
        }
    },
   mounted(){
            axios.get('get.products')
            .then(productItems=>{
               this.products = productItems.data.products;
              // console.log(this.products);
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
#home-title{
    margin-left: 40%;
}
.card{
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: fit-content;
  height: fit-content;
  margin: 15%;
}
.itemContainer{
  margin: 20px;
}
.item{
    padding: 10px;
}
.cartBtn{
    background-color: #ff9d2d;
    border: none;
    color: #fff;
    margin: 4px 2px;
    cursor: pointer;
    width: 100%;
    border-radius: 4px;
    padding: 5px 15px;
    text-decoration: none; 
}

/* Style the search container */
.search-container {
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

/* Style the search input */
#search-input {
  width: 100%;
  padding: 10px;
  border: 2px solid #ff9d2d;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
}

/* Style the search button */
#search-button {
  background-color: #c5c6c6;
  color: #fff;
  border:none;
  padding: 12px 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

#search-button:hover {
  background-color: #ff9d2d;
}

#search-button i {
  font-size: 20px;
}


</style>
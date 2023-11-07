<template>
    <h1 id="home-title">ሸክላ Stock ecommerce</h1>
    <hr>
   
    <div class="search-container">
      <input
        type="text"
        id="search-input"
        v-model="searchQuery"
        placeholder="Search..."
        @input="filterProducts"
      />
      <button type="submit" id="search-button">
        <i class="fa fa-search"></i>
      </button>
    </div>

    <div class="home-container">

   <div class="itemContainer">
    <div class="row">
   <div class="card" v-for="(product,index) in filteredProducts" :key="product._id" :class="{ 'new-row': index % 6 === 0 }">
      <div class="item">
       <RouterLink :to="{path:`/product.detail/${product._id}`}"><img :src="baseUrl + product.image" width="200" height="200" alt="no image"> </RouterLink> 
        <h4>{{ product.title }}</h4>
        <h5>Price: ${{ product.price }}</h5>
        <form @submit.prevent="addToCart(product._id)">
          <input type="hidden" :value="product._id">
           <button type="submit" class="cartBtn">Add to cart</button>
      </form>
    </div>
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
          searchQuery: '',
          products:[],
          baseUrl: 'http://localhost:3000/uploads/',
          //productId:product._id,  
        }
    },
    computed: {
    filteredProducts() {
      return this.products.filter((product) =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
   mounted(){
            axios.get('get.products')
            .then(productItems=>{
               this.products = productItems.data.products;
              // console.log(this.products);
            })
    },
    methods:{
      addToCart(prodId){
        const formData = new FormData();
        formData.append('productId',prodId);

        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        axios.post('add.cart',formData)
        .then(product=>{
           
           return this.$router.push('/cart');
        })
        .catch(err=>{
            console.log(err.message);
            this.message = err.message;
        })
      },
       filterProducts() {
      // This method is called whenever the search input changes
      // It will automatically update the computed property filteredProducts
    },
    },

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
.itemContainer{
  margin: 40px;
}
.card{
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: fit-content;
  height: fit-content;
  margin: 1%;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.new-row {
  clear: left;
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
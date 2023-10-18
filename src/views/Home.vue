<template>
    <h1 id="home-title">ሸክላ Stock ecommerce</h1>
    <hr>
    <div class="home-container">
   <div class="card">
    <div class="item">
        <img src="../assets/photos/clay1.jpeg" width="200px" height="200px">
         <h4>Item 1</h4>
         <h5>Price: $3.99</h5>
         <button class="cartBtn">Add to cart</button>
    </div>
   </div>
   <div class="card">
    <div class="item">
        <img src="../assets/photos/clay2.jpeg" width="200px" height="200px">
        <h4>Item 2</h4>
        <h5>Price: $7.99</h5>
        <button class="cartBtn">Add to cart</button>
    </div>
   </div>
   <div class="card">
    <div class="item">
        <img src="../assets/photos/clay3.webp" width="200px" height="200px">
        <h4>Item 3</h4>
        <h5>Price: $5.99</h5>
        <button class="cartBtn">Add to cart</button>
    </div>
   </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
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
  width: 300px;
  height: 300px;
  margin: 5%;
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
</style>
<template>
    <h1 id="home-title">Product detail page</h1>
    <hr>
    <div class="home-container">
  
        <div class="grid-container">
            <div class="grid-item">
                    <img :src="baseUrl + product.image" width="500" height="500" alt="no image">
                   
  </div>
  <div class="grid-item">
        <h3 style="color: #ff9d2d;"><b>ETB:{{ product.price }}</b></h3>   
               <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius animi minus facere!
                 Quos iure omnis error illo voluptatibus </P>  
                 <div>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                 </div>
               
                <h5><i class="fa fa-person"></i><b>Reviews:</b> 34</h5>
                <hr>
                <h5><b>Color packages</b></h5>
                <img :src="baseUrl + product.image" width="100" height="100" alt="no image">
                <img :src="baseUrl + product.image" width="100" height="100" alt="no image">
                <img :src="baseUrl + product.image" width="100" height="100" alt="no image">


  </div>
  <div class="grid-item" id="payment">
    <!-- <div class="card" id="payment"> -->
            <table>
                <tr>
                    <td>
                        <h4>Shipping Address to:</h4>
                        <hr>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4>Delivery price: ETB 23.99</h4>
                        <h5>Estimated delivery date:</h5>
                        <hr>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4>Quantity</h4>
                        <button class="btn">-</button> <span>6</span> <button class="btn">+</button>
                        <hr>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button class="bttn" style="font-weight: bold;">Buy now</button>
                        <button class="bttn" style="background-color: #fcd1a0b7;color: #ff9d2d;font-weight: bold;">Add to cart</button>
                    </td>
                </tr>
                    </table>
                <!-- </div> -->
  </div>
 
</div>
</div>
<div class="review">
    <h4><b>Customer reviews</b></h4>
    <hr>
    <div>
        <img src="../assets/photos/avatar.jpeg" width="40px" height="40px"> <b>Joe Moe </b> 
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur veritatis, 
            error distinctio minima commodi nam nihil nostrum ipsum, doloremque dolore quibusdam totam. 
          </p>
    </div>
    <hr>
    <div>
        <img src="../assets/photos/avatar.jpeg" width="40px" height="40px">  <b>Joe Moe </b> 
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequuntur veritatis, 
            error distinctio minima commodi nam nihil nostrum ipsum, doloremque dolore quibusdam totam. 
          </p>
         
    </div>

</div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            product:'',
            id: this.$route.params.id,
            baseUrl: 'http://localhost:3000/uploads/'
        }
    },
    mounted(){
            axios.get('product.detail/'+this.id)
            .then(product=>{
               this.product = product.data.product;
              // console.log(this.products);
            })
    }
}
</script>

<style>
.home-container {
  float: left;
  display: flex;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}
.grid-item {
  padding: 20px;
}
table{
    width: 400px;
}
#payment{
    width: 400px; /* Adjust the width to your desired size */
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin: 10px;
    padding: 20px;
}
.bttn{
    background-color: #ff9d2d;
    border: none;
    color: #fff;
    margin: 7px 5px;
    cursor: pointer;
    width: 350px;
    border-radius: 30px;
    padding: 10px 15px;
    text-decoration: none; 
}
.btn{
    border-radius: 10px;
    border: none;
    background-color: #cecbcb9d;
}
i{
    color: #ff9d2d;
}
.review{
    margin: 70px;
    width: 50%;
}
</style>
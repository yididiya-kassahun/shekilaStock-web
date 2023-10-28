<template>
    <hr>
    <div class="product-container">
   <div class="product-card">
    <form @submit.prevent="addProduct" class="form-container" enctype="multipart/form-data">
            <h1>Add product</h1>
        <div class="form-group">
            <label for="_title">Title</label> <br>
            <input type="text" id="_title" v-model="productData.title">
        </div>
        <div class="form-group">
            <label for="_price">Price</label> <br>
            <input type="number" id="_price" v-model="productData.price">
        </div>
        <div class="form-group">
            <label for="_image">Product Image</label> <br>
            <input type="file" id="_image" @change="handleImageChange">
        </div>
        <div class="form-group">
            <label for="_desc">Description</label> <br>
            <textarea type="text" id="_desc" cols="65" rows="5" v-model="productData.description"> </textarea>
        </div>
        <button type="submit" class="product-btn">Add product</button>
        </form>
   </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data () {
        return {
            productData:{
                title:'',
                price:'',
                image:null,
                description:''
            }
        }
    },
    methods:{
        handleImageChange(event) {
       this.productData.image = event.target.files[0];
    },
    
    async addProduct(){
        const formData = new FormData();
        formData.append('title',this.productData.title);
        formData.append('price',this.productData.price);
        formData.append('image',this.productData.image);
        formData.append('description',this.productData.description);
        
        console.log("======"+this.productData.image);

        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        
         await axios.post('add.product',formData,config)
                .then(result=>{
                   console.log(result);
                   return this.$router.push('/products');
                })
                .catch(err=>{
                    console.log(err);
                })
          }  
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

.product-card{
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 50%;
  height: fit-content;
  margin-left:25%;
}


input{
  width: 80%;
  padding: 12px 20px;
  margin: 10px 0;
  box-sizing: border-box;
}

textarea{
  width: 80%;
  padding: 12px 20px;
  margin: 10px 0;
  box-sizing: border-box;
}

.product-btn {
  background-color: #ffad33;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  width: 80%;
  font-size: medium;
  border-radius: 4px;
}

.form-container{
    padding: 10%;
}
</style>
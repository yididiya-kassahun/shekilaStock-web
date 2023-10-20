<script>
import {RouterLink, RouterView } from 'vue-router';

export default {
  // components:{
  //  SignIn,
  //  SignUp
  // }
  data(){
    return{
      userName:localStorage.getItem('userName')
    }
  }
}
</script>

<template>
  <main>
    <div class="container">
      <header>
        <nav class="navbar">
          <a><RouterLink :to="{path:'/'}">Home</RouterLink></a>
          <a><RouterLink :to="{path:'cart'}">Cart</RouterLink></a>
          <a><RouterLink :to="{path:'signin'}">Sign In</RouterLink></a>
          <a><RouterLink :to="{path:'signup'}">Sign Up</RouterLink></a>
          <a><RouterLink :to="{path:'add.product'}">Add Product</RouterLink></a>
          <div class="user-name"> <b>{{ userName }}</b> </div>
        </nav>
      </header>
    </div>
    <RouterView/>
  </main>
</template>

<style>

.container {
  margin:0%;
  padding: 0%;
}

/* Basic Navbar Styles */
.navbar {
  background-color: #333; 
  overflow: hidden; 
  width:100%;
}

.navbar a {
  float: left;
  display: block; 
  color: white;
  text-align: center; 
  padding: 10px 12px; 
  text-decoration: none; 
}

.navbar a:hover {
  background-color: #ddd; 
  color: black; 
}

/* Clearfix to ensure proper spacing and alignment */
.navbar::after {
  content: "";
  clear: both;
  display: table;
}

.user-name {
  float: right; 
  color: #fff;
  padding: 15px;
}

</style>

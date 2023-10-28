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
  },
  methods:{
      logOut(){
           localStorage.clear();
           this.$router.push('/signin');
      }
    }
}
</script>

<template>
  <main>
    <div class="container">
      <header>
        <nav class="navbar" v-if="!$route.meta.hideNavbar">
          <a><RouterLink :to="{path:'/'}">Home</RouterLink></a>
          <a><RouterLink :to="{path:'/products'}">Products</RouterLink></a>
          <a><RouterLink :to="{path:'/cart'}">Cart</RouterLink></a>
          <a><RouterLink :to="{path:'/signin'}">Sign In</RouterLink></a>
          <a><RouterLink :to="{path:'/signup'}">Sign Up</RouterLink></a>
          <a><RouterLink :to="{path:'/add.product'}">Add Product</RouterLink></a>

          <!-- <img src="./assets/photos/avatar.jpeg" width="500px" height="500px"> -->
          <div class="user-name">
          <button class="dropdown">
            <b>{{ userName }}</b> 
                 <div class="dropdown-content">
                       <a v-on:click="logOut()">Log out</a>
                  </div>
          </button>
        </div>
  
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
  padding: 10px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #d2cfcf;
  color: black;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  right: 0;
}
.dropdown-content a{
  width: 100%;
}

.dropdown:focus .dropdown-content {
  display: block;
}
</style>

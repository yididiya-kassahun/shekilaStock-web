<template>
  <div class="homeContainer">
   <img :src="homeImg" width="1720" height="840"/>
  </div>
 <RouterLink :to="{path:'/products'}"><button class="browseBtn">Browse products</button> </RouterLink>
</template>

<script>
 import homeImg from '../assets/home.png';

export default {
  data () {
    return {
      homeImg:homeImg
    }
  }
}
</script>

<style>
.homeContainer{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
}
.browseBtn{
    background-color: #ff9d2d;
    border: none;
    color: #fff;
    font-weight: bolder;
    font-size: large;
    margin: 7px 5px;
    cursor: pointer;
    width: 350px;
    border-radius: 30px;
    padding: 10px 15px;
    text-decoration: none; 
    margin-bottom: 10%;
    position: absolute;
    transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
    top: 90%;
    left: 50%;
}
</style>
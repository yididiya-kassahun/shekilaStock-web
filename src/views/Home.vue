<template>
  <div class="homeContainer">
    <div id="homeTitle">
      <h1 style="font-size: 70px;"><b>ሸክላ Stock.</b></h1>
      <p style="font-size: 30px;margin-left: 100px;">ecommerce</p>
    </div>
    <div
      class="w3-card"
      style="width: 1720px; height: 340px; background-color: #f8be5a"
    >
      <img :src="homeImg" />
    </div>
    <div class="row" id="cardImgs">
      <div class="w3-card" style="margin-right: 30px;">
        <img :src="cardImg1" width="300" height="250" />
        <div class="w3-container w3-center">
          <h3>Traditional</h3>
        </div>
      </div>
      <div class="w3-card" style="margin-right: 30px;">
        <img :src="cardImg2" width="300" height="250" />
         <div class="w3-container w3-center">
          <h3>Unique</h3>
        </div>
      </div>
      <div class="w3-card" style="margin-right: 30px;">
        <img :src="cardImg3" width="300" height="250" />
         <div class="w3-container w3-center">
          <h3>Cultural</h3>
        </div>
      </div>
      <div class="w3-card">
        <img :src="cardImg4" width="300" height="250" />
         <div class="w3-container w3-center">
          <h3>Heritage</h3>
        </div>
      </div>
    </div>
    <div
      class="w3-card"
      style="
        width: 100%;
        height: 300px;
        margin-top: 100px;
        background-color: #fff;
      "
    >
      <div class="row">
        <img
          :src="clayCart"
          width="300"
          height="300"
          style="margin-left: 100px"
        />
        <h1 style="margin-top: 100px; margin-left: 200px">
          <b>Shop now unique traditional ethiopian clays</b>
        </h1>
      </div>
    </div>
    <div
      class="card"
      style="
        margin-top: 200px;
        width: 1300px;
        height: 500px;
        margin: 10%;
        background-color: #fed8d7;
      "
    >
      <table>
        <tr>
          <td>
            <div style="margin: 2%">
              <h1 style="margin-left: 50px"><b>Shop now and save 25%</b></h1>
              <p>
                create ethiopian product advert avatar girl wearing traditional
                cloth with white background and no oroguccin the oackeroune
                product advert avatar girl wearing traditional cloth with white
                background and no oroguccin the oackeroune
              </p>
            </div>
          </td>
          <td>
            <img :src="pc" width="500" height="500" />
          </td>
        </tr>
      </table>
    </div>
    <div class="card" id="portrait">
      <img :src="makingClay" width="300" height="500" />
    </div>
    <div
      class="w3-card"
      style="width: 1700px; height: 400px; background-color: #dbe6e9"
    >
      <img
        :src="clayHouse"
        width="500"
        height="400"
        style="margin-left: 900px"
      />
    </div>
    <div
      class="w3-card"
      style="
        height: 300px;
        width: 1700px;
        margin-top: 300px;
        background-color: #a6a6a6;
      "
    >
      <h1>footer</h1>
    </div>
  </div>
  <RouterLink :to="{ path: '/products' }"
    ><button class="browseBtn">Browse products</button>
  </RouterLink>
</template>

<script>
import homeImg from "../assets/clay-shelf-colored.png";
import cardImg1 from "../assets/cimage1.png";
import cardImg2 from "../assets/cimage2.png";
import cardImg3 from "../assets/cimage3.png";
import cardImg4 from "../assets/cimage4.png";
import clayCart from "../assets/clay-cart.png";
import pc from "../assets/pc.png";
import clayHouse from "../assets/clayHouse.png";
import womanMakingClay from "../assets/making-clay.png";

export default {
  data() {
    return {
      homeImg: homeImg,
      cardImg1: cardImg1,
      cardImg2: cardImg2,
      cardImg3: cardImg3,
      cardImg4: cardImg4,
      clayCart: clayCart,
      pc: pc,
      clayHouse: clayHouse,
      makingClay: womanMakingClay,
    };
  },
};
</script>

<style>
.homeContainer {
  background-color: #e9e7e5;
  /* width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  position: relative; */
}
.w3-card {
  width: fit-content;
  height: fit-content;
}
#cardImgs {
  margin: 3%;
  margin-left: 200px;
}
#portrait {
  position: absolute;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  top: 228%;
  left: 20%;
}
#homeTitle {
  position: absolute;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  top: 20%;
  left: 45%;
}
.browseBtn {
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
  top: 110%;
  left: 50%;
}
</style>

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
               <P>{{ product.description }}</P>  
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
                      <RouterLink :to="{path:`/checkout/${product._id}`}" ><button class="bttn" style="font-weight: bold;">Check out!</button></RouterLink>  
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
    <!-- <button>Add Comment</button>
    <CommentModal/> -->
    <Modal @close="toggleModal" :modalActive="modalActive">
      <div class="modal-content">
        <h5>Add your review</h5>
        <hr>
        <form @submit.prevent="addComment" >
       <textarea rows="10" placeholder="write your comment" v-model="comment"></textarea>
       <button type="submit">Add</button>
       </form>
      </div>
    </Modal>
    <button @click="toggleModal" class="commentBtn" type="button">Add Comment</button>

    <div v-for="comment in comments" :key="comment.productId">
        <img src="../assets/photos/avatar.jpeg" width="40px" height="40px"> <b>{{ comment.userName }} </b> 
        <p>{{ comment.comment }}</p>
    </div>
    <hr>

</div>
</template>

<script>
import axios from 'axios';
import Modal from '../components/Modal.vue';
import { ref } from 'vue';

export default {
    setup() {
    const modalActive = ref(false);

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    return { modalActive, toggleModal };
  },
    data() {
        return {
            product: '',
            comments:'',
            id: this.$route.params.id,
            baseUrl: 'http://localhost:3000/uploads/',
            userName:localStorage.getItem('userName'),
            comment:'',
        };
    },
    mounted() {
        axios.get('product.detail/' + this.id)
            .then(product => {
            this.product = product.data.product;
            // console.log(this.products);
        });
        axios.get('get.comments/' + this.id)
            .then(commentList => {
            this.comments = commentList.data.comments;
             console.log(this.comments);
        });
    },
    components: { Modal },
    methods:{
       async addComment(){
            const formData = new FormData();
            formData.append('userName',this.userName);
            formData.append('productId',this.id);
            formData.append('comment',this.comment);

            const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        
         await axios.post('add.comment',formData,config)
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

<style lang="scss" scoped>
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
.modal-content {
    display: flex;
    flex-direction: column;

    h1,
    p {
      margin-bottom: 16px;
    }

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
    }
    button {
      padding: 10px 20px;
      border: none;
      font-size: 16px;
      width: fit-content;
      margin-top: 10px;
      margin-left: 40%;
      background-color:#ff9d2d;
      color: #fff;
      cursor: pointer;
    }
    textarea{
        width: 90%;
    }
  }
</style>
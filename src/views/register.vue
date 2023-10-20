<template>
    <div class="card">
        <form @submit.prevent="createUser" class="form-container">
            <h1>Register Page</h1>
        <div class="form-group">
            <label for="uname">User Name</label> <br>
            <input type="text" id="uname" v-model="formData.uName">
        </div>
        <div class="form-group">
            <label for="email">Email</label> <br>
            <input type="email" id="email" placeholder="john.moe@email.com" v-model="formData.uEmail">
        </div>
        <div class="form-group">
            <label for="pass"> Password</label> <br>
            <input type="password" id="pass" v-model="formData.uPass">
        </div>
          <button type="submit" class="btn">Sign Up</button>
          <div id="reg">
              <p>Have account? <span><a href="/signin">Login here</a></span></p>
          </div>
        </form>
      </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'createUser',
    data () {
        return{
       formData :{
            uName:'',
            uEmail:'',
            uPass:''
       }
        }
    },
    methods:{
        createUser(){
            axios.post('signUp',this.formData)
            .then(result=>{
                console.log(result);
                this.$router.push('/signin');
            })
            .catch(err=> {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>

.card{
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 50%;
  height: fit-content;
  margin-left:25%;
}

.form-container{
    margin-left: 20%;
}

input{
  width: 80%;
  padding: 12px 20px;
  margin: 10px 0;
  box-sizing: border-box;
}

.btn {
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

#reg{
    margin-left: 15%;
}
</style>
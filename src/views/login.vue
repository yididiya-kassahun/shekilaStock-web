<template>
    <div class="card">
       <form @submit.prevent="loginUser" class="form-container">
           <h1>Login Page</h1>
       <div class="form-group">
           <label for="txt1">Email</label> <br>
           <input type="text" v-model="userData.email">
       </div>
       <div class="form-group">
           <label for="txt1"> Password</label> <br>
           <input type="password" v-model="userData.pass">
       </div>
         <button type="submit" class="btn">Sign In</button>
         <div id="login">
             <p>Have no account? <span><a href="/signup">Register here</a></span></p>
         </div>
       </form>
     </div>
</template>

<script>
import axios from 'axios';

export default {
   data () {
       return {
        userData:{
            email:'',
            pass:''
        }
       }
   },
   methods:{
    loginUser(){
       axios.post('signIn',this.userData)
        .then(user=>{
            localStorage.setItem('token',user.data.token);
            localStorage.setItem('userName',user.data.userName);

           return this.$router.push('/');
        })
        .catch(err=>{
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
 height: fit-content;
 width: 40%;
 margin-left: 25%;
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
 border-radius: 4px;
 font-size: medium;
}

#login{
   margin-left: 15%;
}
</style>
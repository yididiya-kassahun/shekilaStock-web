<template>
    <div class="card">
        <form class="form-container">
            <h1>Register Page</h1>
        <div class="form-group">
            <label for="txt1">User Name</label> <br>
            <input type="text">
        </div>
        <div class="form-group">
            <label for="txt1">Email</label> <br>
            <input type="email" placeholder="john.moe@email.com">
        </div>
        <div class="form-group">
            <label for="txt1"> Password</label> <br>
            <input type="password">
        </div>
          <button type="submit" class="btn">Sign Up</button>
        </form>
        <div id="reg">
            <p>Have account? <span><a href="/">Login here</a></span></p>
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

<style scoped>

.card{
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 50%;
  height: 500px;
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
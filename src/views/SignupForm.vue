<template>
    <H2> Welcome to "TIME TO TRAVEL"</h2>
    <H> would you like to register to be a "Path angel"?</H>
  <form action="" @submit.prevent="submitForm">

      <label for="">Username:</label>
      <input type="user_name" name="" id="" required v-model="username">

      <label for="">Avatar:</label>
      <input type="avatar" name="" id="" required v-model="avatar">
    
      <label for="">Email:</label>
      <input type="email" name="" id="" required v-model="email">
      <div>
    <label for="role">Select Role:</label>
    <select v-model="selectedRole" id="role">
      <option v-for="role in roles" :value="role">{{ role }}</option>
    </select>
      </div>
      <div class="terms"> 
          <input type="checkbox" v-model="terms" required>
          <label for="">Accept terms and conditions</label>
      </div>

      <div class="submit">
          <button>Create an Account</button>
      </div>

  </form>

</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            avatar: '',
            username:'',
            roles: ['MINIAPP_USER', 'SUPERAPP_USER', 'ADMIN'],
            selectedRole: '',
            terms: false,
        }
    },
    methods: {
    submitForm() {
      // Create an object with the form data
      const formData = {
        email: this.email,
        avatar: this.avatar,
        username: this.username,
        role: this.selectedRole,
        terms: this.terms,
      };

      // Send the form data to the backend
      axios.post('http://localhost:8081/superapp/users', formData)
        .then(response => {
          // Handle the response from the backend
          console.log(response.data);
          alert('Account created successfully!');
        })
        .catch(error => {
          console.error(error);
          alert('There was an error creating your account.');
        });
    },
  },
}
</script>

<style>
    form {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;

    }
    label {
        color: #aaa;
        display: inline-block;
        margin: 25px 0 15px;
        font-size: 0.6em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: bold;
    }
    input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom:  1px solid #ddd;
        color: #555;        
    }
    input[type='checkbox'] {
        display: inline-block;
        width: 16px;
        margin: 0 10px 0 0;
        position: relative;
        top: 2px;
    }
    .pill {
        display: inline-block;
        margin: 20px 10px 0 0;
        padding: 6px 12px;
        background: #eee;
        border-radius: 20px;
        font-size: 12px;
        letter-spacing: 1px;
        font-weight: bold;
        color: #777;
        cursor: pointer;
    }
    button {
        background: #0b6dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
    }
    .submit {
        text-align: center;
    }
    .error {
        color: #ff0062;
        margin-top: 10px;
        font-size: 0.8em;
        font-weight: bold;
    }

</style>
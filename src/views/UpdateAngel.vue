<template>
  <div>
    <!-- <input v-model="superapp" type="text" placeholder="Superapp" /> -->
    <input v-model="email" type="text" placeholder="Email" />
    <label for="name">update the angel details:</label>
    <input v-model="name" type="text" id="name" placeholder="Enter new name" />
    <input v-model="avatar" type="text" id="avatar" placeholder="Enter new avatar name" />
    <!-- <label for="role">Select Role:</label> -->
    <select v-model="selectedRole" id="role" >
      <option v-for="role in roles" :value="role">{{ role }} </option>
    </select>
    <button @click="updateUser">Update User</button>
    <div v-if="successMessage">
      <p>{{ successMessage }}</p>
    </div>
    <div v-if="errorMessage">
      <p>Error: {{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      superapp: '2023b.noy.tsafrir',
      email: this.email,
      name: this.name,
      avatar: this.avatar,
      roles: ['MINIAPP_USER', 'SUPERAPP_USER', 'ADMIN'],
      selectedRole: this.role,
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
    async updateUser() {
      this.successMessage = '';
      this.errorMessage = '';

      try {
        const response = await axios.put(`http://localhost:8081/superapp/users/${this.superapp}/${this.email}`, {
          username: this.name,
          avatar: this.avatar,
          role: this.selectedRole
        });
        this.successMessage = 'User updated successfully!';
      } catch (error) {
        this.errorMessage = error.message;
      }
    }
  }
};
</script>

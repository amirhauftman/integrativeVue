<template>
  <h2>Search a Path-Angel</h2>
  <div>
    <!-- <input v-model="superapp" type="text" placeholder="Superapp" /> -->
    <input v-model="email" type="text" placeholder="Email" />
    <button @click="searchUser">Search</button>
    <div v-if="user">
      <h2>User Details</h2>
      <p><strong>Name:</strong> {{ user.username }}</p>
      <p><strong>Avatar:</strong> {{ user.avatar }}</p>
      <p><strong>Role:</strong> {{ user.role }}</p>
    </div>
    <div v-if="error">
      <p><strong>Error:</strong> {{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      superapp: '2023b.noy.tsafrir',
      email: '',
      user: null,
      error: null
    };
  },
  methods: {
    async searchUser() {
      this.user = null;
      this.error = null;

      try {
        const response = await axios.get(`http://localhost:8081/superapp/users/login/${this.superapp}/${this.email}`);
        this.user = response.data;
      } catch (error) {
        this.error = error.message;
      }
    }
  }
};
</script>


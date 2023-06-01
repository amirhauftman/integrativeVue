<template>
    <div>
      <button @click="deleteAllUsers">Delete All Users</button>
      <div v-if="deletionStatus">{{ deletionStatus }}</div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        deletionStatus: '',
      };
    },
    methods: {
      async deleteAllUsers() {
        try {
          const response = await axios.delete('http://localhost:8081/superapp/admin/users');
          this.deletionStatus = response.data.message;
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  
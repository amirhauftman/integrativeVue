<template>
  <div>
    <h1>Users</h1>
    <button @click="fetchUsers">Find All The Users</button>
    <ul v-if="users.length > 0">
      <li v-for="user in users" :key="user._id">
        <div>
          <strong>Username:</strong> {{ user.username }}
        </div>
        <div>
          <strong>Email:</strong> {{ user.email }}
        </div>
        <div>
          <strong>Role:</strong> {{ user.role }}
        </div>
        <div>
          <strong>Avatar:</strong> {{ user.avatar }}
        </div>
        <hr>
      </li>
    </ul>
    <div v-else>
      
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userSuperapp: '2023b.noy.tsafrir', // Replace with the actual value for userSuperapp
      userEmail: 'admin@admin.com', // Replace with the actual value for userEmail
      size: 10, // Replace with the desired default value for size
      page: 0, // Replace with the desired default value for page
      users: []
    };
  },
  methods: {
    fetchUsers() {
  const url = 'http://localhost:8081/superapp/admin/users';
  const params = {
    userSuperapp: this.userSuperapp,
    userEmail: this.userEmail,
    size: this.size,
    page: this.page
  };

  axios.get(url, { params })
    .then(response => {
      this.users = response.data.filter(user => user.username !== 'DummyObject internal user');
    })
    .catch(error => {
      console.error('Error retrieving users:', error);
    });
}

  }
};
</script>

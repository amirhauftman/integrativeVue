<template>
    <div class="header">
      <h1>Path Angel</h1>
      <nav>
        <ul>
          <li><a href="/">Search Angel</a></li>
          <li><a href="/findallusers">Find All The Angels</a></li>
          <li><a href="/update">Update Angel</a></li>
          <li><a href="/signup">Signup Form</a></li>
          <!-- <li><a href="/delete">Delete all</a></li> -->
        </ul>
      </nav>
    </div>
  </template>
  
  <style scoped>
  .header {
    height: 45px;
    background-color: #0077be;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    width: 99%;
  }
  
  .header h1 {
    margin: 0;
    font-size: 32px;
    font-weight: 400;
  }
  
  .header nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
  }
  
  .header nav ul li {
    margin: 0 10px;
  }
  
  .header nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
  }
  </style>
  
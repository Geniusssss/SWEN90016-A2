<template>
    <nav>
      <div class="menu-item"><a href="#">Home</a></div>
      <div class="menu-item"><a href="#">About</a></div>
      <Dropdown title="Languages" :items="languageServices" />
      <Dropdown title="Account" :items="accountServices" />
  </nav>
  </template>
  
  <script>
  import Dropdown from './components/DropDown.vue';
  export default {
    name: 'NavBar',
    components: {
      Dropdown
    },
    data () {
      return {
        accountServices: [
          {
            title: 'Login',
            link: '#'
          },
          {
            title: 'Register',
            link:'#'
          },
          {
            title: 'Groups',
            link: '#'
          }
        ],
        languageServices: [
          {

          },
        ]
      }
    }
  }
  </script>
  
  <style>
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  nav .menu-item {
    color: #FFF;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    transition: 0.4s;
  }
  nav .menu-item.active,
  nav .menu-item:hover {
    background-color: rgb(197, 115, 33);
    border-bottom-color: #FF5858;
  }
  nav .menu-item a {
    color: inherit;
    text-decoration: none;
  }
  </style>
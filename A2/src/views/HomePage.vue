<template>
  <el-container>
    <el-header>Home</el-header>
    <el-main>
      <h1>Nice to see you back, user {{this.user.email}}!</h1>
      <div class="block">
        <span class="demonstration">Restricted Languages Pages</span>
        <el-select v-model="value" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </el-main>
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
  </template>

<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        user: this.$route.query.user,

        options: [
          {
          value: 'item-1',
          label: 'English Language - Static Example'
          },
          {
          value: 'item-2',
          label: 'Indigenous Dhudhuroa Language'
          },
          {
          value: 'item-3',
          label: 'English Language - Dynamic Demonstration Example'
          },
        ],
        value: ''
      }
    }
  };
</script>

<style>
    .el-header, .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }
    
    .el-aside {
      background-color: #D3DCE6;
      color: #333;
      text-align: center;
      line-height: 200px;
    }
    
    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
    }
    
    body > .el-container {
      margin-bottom: 40px;
    }
    
    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
      line-height: 260px;
    }
    
    .el-container:nth-child(7) .el-aside {
      line-height: 320px;
    }
</style>
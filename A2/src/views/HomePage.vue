<template>
  <el-container>
    <el-header>Home</el-header>
    <el-main>
      <h1>Nice to see you back, user {{this.user.email}}!</h1>
      <div class="block">
        <span class="demonstration">Restricted Languages Pages</span>
        <el-select v-model="selectedRestrictedLangPage" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button class="button" @click="accessRestritedLangPage">Go</el-button>
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
        selectedRestrictedLangPage: ''
      }
    },
    methods: {
      accessRestritedLangPage() {
        if (this.checkIfUserhaveAccess()) {
          alert("You do have access to the page!")
        }
        else {
          // if do not have access to the page, pop up a window with 2 buttons
          // 1st button: Request Access; 2nd button: cancel
          this.$alert('You do not have access to the specified page!'
                , 'Request access to the page?',
                {
                  // confirmButtonText: 'confirm',
                  // cancelButtonText: 'Cancel',
                  showConfirmButton: true,
                  showCancelButton: true,    
                }
          ).then(() => {
              // alert("You got here");
              this.requestPageAccess();
            }
          );
        }
      },
      checkIfUserhaveAccess() {
        return false;
      },
      requestPageAccess() {

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
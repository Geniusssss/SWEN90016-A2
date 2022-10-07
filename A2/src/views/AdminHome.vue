<template>
    <div>
        <el-col :span="4">
            <el-menu :router="true">
                <img class="logo" src="../assets/logo.webp">
                <el-menu-item index="/admin-home/usergroup">
                    <i class="el-icon-document"></i>
                    <span slot="title">User Group Management</span>
                </el-menu-item>
                <el-menu-item index="/admin-home/authorizationadmin">
                    <i class="el-icon-document"></i>
                    <span slot="title">Authorization Admin</span>
                </el-menu-item>
            </el-menu>
            <div class="current-user">
                <i class="el-icon-user-solid"></i>
                <div class="user-name">{{user.username}}</div>
                <el-button icon="el-icon-switch-button" circle size="mini" @click="logout"></el-button>
            </div>
        </el-col>
        <el-col :span="18">
            <router-view></router-view>
        </el-col>
    </div>

</template>
  
<script>
export default {
    name: 'AdminHome',
    data() {
        return {
            user: '',
        }
    },
    methods: {
        routerTo(path) {
            this.$router.push(path)
        },
        getCurrentUser() {
            var result = JSON.parse(localStorage.getItem("currentUser") || '[]');
            this.user = result;
        },
        logout() {
            this.$confirm('Log out?', {
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: 'Log out'
                });
                this.$router.push("/welcome");
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Cancelled'
                });
            });
        }
    },
    created() {
        this.getCurrentUser();
    },
}
</script>
  
<style>
.logo {
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 20%;
    width: 50%;
    height: 50%;
}

.current-user {
    margin-left: 25px;
    margin-top: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.user-name {
    padding-left: 15px;
    padding-right: 100px;
    color: #5c5c5c;
    font-size: 16px;
    margin: 0;
}
</style>
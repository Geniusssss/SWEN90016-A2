<template>
    <el-container>
        <el-header class="header">Welcome</el-header>
        <img class="welcome" src="../assets/welcome.jpg">
        <el-container class="buttons">
            <el-button class="button" @click="routerTo('/login')">Login</el-button>
            <el-button class="button" @click="routerTo('/register')">Register</el-button>
        </el-container>
    </el-container>
</template>
<script>
export default {
    name: 'WelcomePage',
    methods: {
        routerTo(path) {
            this.$router.push(path)
        },
    }
}
</script>

<style scoped>
.header{
    text-align: center;
    line-height: 50px;
    font-weight: 500;
    font-size: 30px;
}

.welcome{
    margin-left: 300px;
    margin-right: 300px;
}

.buttons{
    margin-top: 30px;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: 300px;
    margin-right: 300px;
}

.button{
    width: 100px;
}
</style>
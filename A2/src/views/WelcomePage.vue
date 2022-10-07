<template>
    <div>
        <el-row class="header">
            <el-col :span="6" :offset="6">
                <img class="logo" src="../assets/logo.webp">
            </el-col>
            <el-col :span="4" :offset="4" class="two-buttons">
                <el-button type="primary" plain class="login-register" @click="routerTo('/login')">Login</el-button>
                <el-button type="primary" plain class="login-register" @click="routerTo('/register')">Register
                </el-button>
            </el-col>
        </el-row>
        <div>
            <el-carousel indicator-position="outside" height="900px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <img class="picture" src="../assets/welcome1.jpg">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
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
.header {
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    align-items: flex-end;
}

.logo {
    width: 100%;
    height: 100%;
}

.two-buttons {
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.login-register {
    width: 100px;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.picture {
    width: 100%;
    height: 100%;
}


</style>
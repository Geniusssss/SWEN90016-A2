<template>
    <form class="form">
        <el-page-header @back="routerTo('/')" content="Register" title="Back">
        </el-page-header>
        <div class="container">
            <div id="textblock">Register Your Account</div>
            <label for="uname" class="littletext"><b>Username</b></label>
            <input type="text" placeholder="Enter username" v-model="username">
            <label for="psw" class="littletext"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" v-model="pswd">
            <label for="psw" class="littletext"><b>Confirm Password</b></label>
            <input type="password" placeholder="Enter Password Again" v-model="pswd2">
            <el-button type="primary" class="button" @click="register">Register</el-button>
        </div>
    </form>
</template>
<script>
export default {
    name: 'RegisterPage',
    data() {
        return {
            username: '',
            pswd: '',
            pswd2: '',
            user: { username: '', pswd: '', isAdmin: false, idlAccess: false, ddeAccess: { create: false, read: false, download: false, delete: false } },
            allUsers: [],
        }
    },
    created() {
        this.getUserList();
    },
    methods: {
        routerTo(path) {
            this.$router.push(path)
        },
        register() {
            {
                if (this.username == "") {
                    this.$alert('Please enter your username', {
                        confirmButtonText: 'Close',
                    });
                    return
                }
                if (this.pswd == "") {
                    this.$alert('Please enter your password', {
                        confirmButtonText: 'Close',
                    });
                    return
                }
                if (this.pswd != this.pswd2) {
                    this.$alert('Please confirm your password', {
                        confirmButtonText: 'Close',
                    });
                    return
                }
                var duplicate = this.allUsers.some(item => {
                    if (item.username == this.username) {
                        return true
                    }
                })
                if (duplicate) {
                    this.$alert('User already exists', {
                        confirmButtonText: 'Close',
                    });
                    return
                }
                this.addUser();
            }
        },
        insertUser() {
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "users",
                "database": "mymongo",
                "dataSource": "Cluster0",
                "document": this.user,
            });
            let config = {
                method: 'post',
                url: 'https://data.mongodb-api.com/app/data-rtrxq/endpoint/data/v1/action/insertOne',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Request-Headers': '*',
                    'api-key': 'alJbGe2FTUy9nKCQiZOgQIQR6y5X28uDGjPW5EM76XnSjG9Hyneag4xe5gT8cnkg',
                },
                data: data
            };
            axios(config)
                .then((response) => {
                    console.log(response.data.documents);
                    this.$message({
                        type: 'success',
                        message: 'Registered!',
                    });
                    this.$router.push("/login");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getUserList() {
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "users",
                "database": "mymongo",
                "dataSource": "Cluster0",
            });
            let config = {
                method: 'post',
                url: 'https://data.mongodb-api.com/app/data-rtrxq/endpoint/data/v1/action/find',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Request-Headers': '*',
                    'api-key': 'alJbGe2FTUy9nKCQiZOgQIQR6y5X28uDGjPW5EM76XnSjG9Hyneag4xe5gT8cnkg',
                },
                data: data
            };
            axios(config)
                .then((response) => {
                    console.log(response.data.documents);
                    this.allUsers = response.data.documents
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        addUser() {
            this.user.username = this.username;
            this.user.pswd = this.pswd;
            this.insertUser();
        }
    },
}
</script>
  
<style scoped>
#textblock {
    margin-bottom: 30px;
    height: 44px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 38px;
    text-align: center;
    color: #101828;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

.littletext {
    width: 36px;
    height: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #344054;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.form {
    border: 200px solid #fff;
    margin: auto;
    padding: 200px rgb(150, 58, 58);
    width: 400px;
    height: 300px;
}

input[type=text],
input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 8px;
}

.button {
    padding: 14px 20px;
    margin: 20px 0;
    width: 100%;
    border-radius: 8px;
}

.container {
    margin-top: 20px;
    padding: 16px;
    width: 100%;
}

span.psw {
    float: right;
    padding-top: 16px;
}

@media screen and (max-width: 300px) {
    span.psw {
        display: block;
        float: none;
    }

    .cancelbtn {
        width: 100%;
    }
}
</style>
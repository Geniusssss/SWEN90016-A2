<template>
    <form class="form">
        <el-page-header @back="routerTo('/')" content="Log in" title="Back">
        </el-page-header>
        <div class="container">
            <div id="textblock">Log in to your account</div>
            <p id="welcome">Welcome! Please enter your details</p>
            <label for="uname" class="littletext"><b>Username</b></label>
            <input type="text" placeholder="Enter username" required v-model="username">
            <label for="psw" class="littletext"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" required v-model="pswd">
            <el-button type="primary" native-type="submit" class="button" @click="validation">Log in</el-button>
        </div>
    </form>
</template>
<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            username: '',
            pswd: '',
            user: '',
            allUsers: [],
        }
    },
    created() {
        this.postUserList();
    },
    methods: {
        routerTo(path) {
            this.$router.push(path)
        },
        incorrect() {
            this.$alert('Please try to input the right info'
                , 'Wrong Username or Password',
                {
                    confirmButtonText: 'confirm',
                });
        },
        validation() {
            {
                var result = this.allUsers.some(item => {
                    if (item.username == this.username) {
                        if (item.pswd == this.pswd) {
                            this.user = item;
                            return true;
                        }
                    }
                })
                if (result) {
                    localStorage.setItem("currentUser", JSON.stringify(this.user));
                    this.$message({
                        type: 'success',
                        message: 'Logged in!'
                    });
                    if (this.user.isAdmin) {
                        this.$router.push({
                            path: '/admin-home/usergroup',
                        });
                    } else {
                        this.$router.push({
                            path: '/home/start',
                        });
                    }
                }
                else {
                    this.incorrect();
                }
            }
        },
        postUserList() {
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
        }
    },
}
</script>
  
<style scoped>
#textblock {
    width: 360px;
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

#welcome {
    width: 360px;
    height: 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #667085;
    flex: none;
    order: 1;
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
    border: 300px solid #fff;
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
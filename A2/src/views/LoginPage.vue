<template>
    <form class="form">
        <el-page-header @back="routerTo('/')" content="Login" title="Back">
        </el-page-header>
        <div class="container">
            <div id="textblock">Log in to your account</div>
            <p id="welcome">Welcome! Please enter your details</p>
            <label for="uname" class="littletext"><b>Username</b></label>
            <input type="text" placeholder="Enter username" required v-model="username">
            <label for="psw" class="littletext"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" required v-model="pswd">
            <el-button type="primary" class="button" @click="validation">Login</el-button>
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
        this.getUserList();
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
                    if (this.user.isAdmin) {
                        this.$router.push({
                            path: '/admin-home',
                            query: {
                                user: this.user
                            }
                        });
                    } else {
                        this.$router.push({
                            path: '/home',
                            query: {
                                user: this.user
                            }
                        });
                    }
                }
                else {
                    this.incorrect();
                }
            }
        },
        getUserList() {
            var result = JSON.parse(localStorage.getItem("allUsers") || '[]');
            this.allUsers = result
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
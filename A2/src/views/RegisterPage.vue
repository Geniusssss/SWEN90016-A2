<template>
    <form class="form">
        <el-page-header @back="routerTo('/')" content="Register" title="Back">
        </el-page-header>
        <div class="container">
            <div id="textblock">Register Your Account</div>
            <label for="uname" class="littletext"><b>Username</b></label>
            <input type="text" placeholder="Enter username" required v-model="username">
            <label for="psw" class="littletext"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" required v-model="pswd">
            <label for="psw" class="littletext"><b>Confirm Password</b></label>
            <input type="password" placeholder="Enter Password Again" required v-model="pswd2">
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
            user: { username: '', pswd: '', isAdmin: false, idlAccess: false, ddeAccess: { create: false, read: false, write: false, delete: false } },
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
                    alert("Please enter your username");
                    return
                }
                if (this.pswd == "") {
                    alert("Please enter your password");
                    return
                }
                if (this.pswd != this.pswd2) {
                    alert("Please confirm your password");
                    return
                }
                var duplicate = this.allUsers.some(item => {
                    if (item.username == this.username) {
                        return true
                    }
                })
                if (duplicate) {
                    alert("User already exists");
                    return
                }
                this.addUser();
                alert("Registered!");
                this.$router.push("/login");
            }
        },
        getUserList() {
            var result = JSON.parse(localStorage.getItem("allUsers") || '[]');
            this.allUsers = result;
        },
        addUser() {
            this.user.username = this.username;
            this.user.pswd = this.pswd;
            this.allUsers.push(this.user);
            console.log(this.allUsers);
            localStorage.setItem("allUsers", JSON.stringify(this.allUsers));
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
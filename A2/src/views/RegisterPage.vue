<template>
    <form class="form">
        <div class="container">
            <div id="textblock">Register Your Account</div>
            <label for="uname" class="littletext"><b>Username</b></label>
            <input type="text" placeholder="Enter email" required v-model="email">
            <label for="psw" class="littletext"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" required v-model="pswd">
            <label for="psw" class="littletext"><b>Confirm Password</b></label>
            <input type="password" placeholder="Enter Password Again" required v-model="pswd2">
            <el-button class="button" @click="register">Register</el-button>
        </div>
    </form>
</template>
<script>
export default {
    name: 'RegisterPage',
    data() {
        return {
            email: '',
            pswd: '',
            pswd2: '',
            user: { email: '', pswd: '' },
            allUsers: [],
        }
    },
    created() {
        this.getUserList();
    },
    methods: {
        incorrect() {
            this.$alert('Please try to input the right info'
                , 'Wrong Email or Password',
                {
                    confirmButtonText: 'confirm',
                });
        },
        register() {
            {
                if (this.email == "") {
                    alert("Please enter your email");
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
                    if (item.email == this.email) {
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
            this.user.email = this.email;
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

#remember {
    width: 223px;
    height: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    margin-right: 150px;
    color: #344054;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

.checkbox {
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    background: #FFFFFF;
    border: 1px solid #D0D5DD;
    border-radius: 4px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

#forget {
    width: 113px;
    height: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #6941C6;
    flex: none;
    order: 1;
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
    background-color: #7F56D9;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    border-radius: 8px;
}

button:hover {
    opacity: 0.8;
}

.cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: lightblue;
}

.container {
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
<template>
    <div>
        <div class="content">
            <div class="title">Authority Management</div>
        </div>
        <div class="row-section">
            <div class="list-title-1" type="margin-left: 50px">User Name</div>
            <div class="list-title-2">Indigenous Dhudhuroa Language</div>
            <div class="double-line">
                <div class="list-title-3">Dynamic Demonstration Example</div>
                <div class="crwd">
                    <div class="crwd-section">Create</div>
                    <div class="crwd-section">Read</div>
                    <div class="crwd-section">Write</div>
                    <div class="crwd-section">Delete</div>
                </div>
            </div>
        </div>
        <div class="user-list">
            <div v-for="user in allUsers" :key="user.username">
                <div class="row-section-2">
                    <i class="el-icon-user-solid"></i>
                    <div class="user-name">{{user.username}}</div>
                    <el-switch v-model="user.idlAccess" class="switch-1" @change="update(user)"></el-switch>
                    <el-switch v-model="user.ddeAccess.create" class="switch-2" @change="update(user)"></el-switch>
                    <el-switch v-model="user.ddeAccess.read" class="switch-3" @change="update(user)"></el-switch>
                    <el-switch v-model="user.ddeAccess.write" class="switch-3" @change="update(user)"></el-switch>
                    <el-switch v-model="user.ddeAccess.delete" class="switch-3" @change="update(user)"></el-switch>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AccessManagement',
    data() {
        return {
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
        update(user) {
            console.log(user);
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "users",
                "database": "mymongo",
                "dataSource": "Cluster0",
                "filter": { "username": user.username },
                "replacement": {
                    "username": user.username,
                    "pswd": user.pswd,
                    "isAdmin": user.isAdmin,
                    "idlAccess": user.idlAccess,
                    "ddeAccess": {
                        "create": user.ddeAccess.create,
                        "read": user.ddeAccess.read,
                        "write": user.ddeAccess.write,
                        "delete": user.ddeAccess.delete,
                    },
                }
            });
            let config = {
                method: 'post',
                url: 'https://data.mongodb-api.com/app/data-rtrxq/endpoint/data/v1/action/replaceOne',
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
                "filter": {
                    "isAdmin": false
                },
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
    }
}
</script>
  
<style scoped>
.content {
    margin: 50px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 1096px;
    height: 66px;
}

.title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
    color: #101828;
}

.user-list {
    display: flex;
    flex-direction: column;
    margin: 50px;
}

.row-section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

.row-section-2 {
    margin-left: 40px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

.list-title-1 {
    margin-left: 80px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #667085;
}

.list-title-2 {
    margin-left: 100px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #667085;
}

.list-title-3 {
    margin-left: 100px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #667085;
}

.switch-1 {
    margin-left: 30px;
}

.switch-2 {
    margin-left: 270px;
}

.switch-3 {
    margin-left: 100px;
}

.double-line {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.crwd {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #667085;
}

.crwd-section {
    padding-left: 100px;
}

.user-name {
    width: 200px;
    margin-left: 10px;
}
</style>
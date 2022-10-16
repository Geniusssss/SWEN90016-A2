<template>
    <div>
        <div class="title">Authorization Management</div>
        <div class="row-section">
            <div class="list-title-1" type="margin-left: 50px">User Name</div>
            <div class="list-title-2">Indigenous Dhudhuroa Language Page</div>
            <div class="double-line">
                <div class="list-title-3">English Language - Dynamic Demonstration Example Page</div>
                <div class="crwd">
                    <div class="crwd-section">Read</div>
                    <div class="crwd-section">Create</div>
                    <div class="crwd-section">Download</div>
                    <div class="crwd-section">Delete</div>
                </div>
            </div>
        </div>
        <div style="width: 1200px;" v-loading="loading"></div>
        <div class="user-list">
            <div v-for="user in allUsers" :key="user.username">
                <div class="row-section-2">
                    <i class="el-icon-user-solid"></i>
                    <div class="user-name">{{user.username}}</div>
                    <el-switch v-model="user.idlAccess" style="margin-left: 60px;" @change="update(user)"></el-switch>
                    <el-switch v-model="user.ddeAccess.read" style="margin-left: 282px;" @change="update(user)">
                    </el-switch>
                    <el-switch v-model="user.ddeAccess.create" style="margin-left: 100px;" @change="update(user)"
                        :disabled="!user.ddeAccess.read"></el-switch>
                    <el-switch v-model="user.ddeAccess.download" style="margin-left: 120px;" @change="update(user)"
                        :disabled="!user.ddeAccess.read"></el-switch>
                    <el-switch v-model="user.ddeAccess.delete" style="margin-left: 120px;" @change="update(user)"
                        :disabled="!user.ddeAccess.read"></el-switch>
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
            loading: false,
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
            if (user.ddeAccess.read == false) {
                user.ddeAccess.create = false;
                user.ddeAccess.download = false;
                user.ddeAccess.delete = false;
            }
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "users",
                "database": "mymongo",
                "dataSource": "Cluster0",
                "filter": { "username": user.username },
                "update": {
                    "$set": {
                        "idlAccess": user.idlAccess,
                        "ddeAccess": {
                            "create": user.ddeAccess.create,
                            "read": user.ddeAccess.read,
                            "download": user.ddeAccess.download,
                            "delete": user.ddeAccess.delete,
                        },
                    }
                },
            });
            let config = {
                method: 'post',
                url: 'https://data.mongodb-api.com/app/data-rtrxq/endpoint/data/v1/action/updateOne',
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
            this.loading = true;
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
                    this.loading = false;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    }
}
</script>
  
<style scoped>
.title {
    margin: 50px;
    width: 1096px;
    height: 66px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 550;
    font-size: 30px;
    line-height: 38px;
    color: #101828;
}

.user-list {
    display: flex;
    flex-direction: column;
    margin-left: 50px;
}

.row-section {
    margin-left: 50px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

.row-section-2 {
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

.list-title-1 {
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
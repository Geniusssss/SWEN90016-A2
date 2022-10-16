<template>
    <div>
        <div class="title">Authorization Request</div>
        <el-table :data="allPageAccessRequests" stripe style="width: 1020px; margin-left: 50px;" v-loading="loading">
            <el-table-column fixed prop="_id" label="ID" width="130"></el-table-column>
            <el-table-column prop="username" label="User" width="120"></el-table-column>
            <el-table-column prop="content_type" label="Page" width="300"></el-table-column>
            <el-table-column prop="permission_type" label="Access Type" width="150"></el-table-column>
            <el-table-column prop="createdAt" label="Created At" width="120"></el-table-column>
            <el-table-column label=" " width="200">
                <div class="buttons" slot-scope="scope">
                    <el-button style="width: 100px;" @click="handleClickApprove(scope.row)" size="small" type="primary" plain>Approve</el-button>
                    <el-button style="width: 100px;" @click="markDone(scope.row)" size="small">Done</el-button>
                </div>
            </el-table-column>
        </el-table>
    </div>
</template>
  
<script>
export default {
    name: 'AuthorizationAdmin',
    data() {
        return {
            allPageAccessRequests: '',
            currentApprovingUser: '',
            loading: false,
        }
    },
    created() {
        this.getAllPageAccessRequests();
    },
    methods: {
        routerTo(path) {
            this.$router.push(path)
        },
        getAllPageAccessRequests() {
            this.loading = true;
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "requestAccessToDynamicDemonstrationExample",
                "database": "mymongo",
                "dataSource": "Cluster0",
                "filter": {
                    "granted": false,
                }
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
                    this.allPageAccessRequests = response.data.documents;
                    this.loading = false;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleClickApprove(row) {
            this.loading = true;
            let username = row.username;
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "users",
                "database": "mymongo",
                "dataSource": "Cluster0",
                "filter": {
                    "username": username,
                },
            });
            let config = {
                method: 'post',
                url: 'https://data.mongodb-api.com/app/data-rtrxq/endpoint/data/v1/action/findOne',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Request-Headers': '*',
                    'api-key': 'alJbGe2FTUy9nKCQiZOgQIQR6y5X28uDGjPW5EM76XnSjG9Hyneag4xe5gT8cnkg',
                },
                data: data
            };
            axios(config)
                .then((response) => {
                    this.requestUpdateUserPageAccess(row, response.data.document)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        requestUpdateUserPageAccess(row, userData) {
            if (row.content_type == "ENG_LANG_DYNAMIC_DEMO_EXAMPLE") {
                let ddeAcc = userData.ddeAccess;
                ddeAcc[row.permission_type.toLowerCase()] = true;
                let axios = require('axios');
                let data = JSON.stringify({
                    "collection": "users",
                    "database": "mymongo",
                    "dataSource": "Cluster0",
                    "filter": {
                        "username": row.username,
                    },
                    "update": {
                        "$set": {
                            "ddeAccess": ddeAcc,
                        }
                    }
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
                        console.log(response)
                        this.$message({
                            type: 'success',
                            message: 'Approved!'
                        });
                        this.markDone(row);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else if (row.content_type == "INDIGENOUS_DHUDHUROA_LANG") {
                let axios = require('axios');
                let data = JSON.stringify({
                    "collection": "users",
                    "database": "mymongo",
                    "dataSource": "Cluster0",
                    "filter": {
                        "username": row.username,
                    },
                    "update": {
                        "$set": {
                            "idlAccess": true,
                        }
                    }
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
                        console.log(response)
                        this.$message({
                            type: 'success',
                            message: 'Approved!'
                        });
                        this.markDone(row);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        },
        markDone(row) {
            this.loading = true;
            console.log(row);
            console.log(row._id);
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "requestAccessToDynamicDemonstrationExample",
                "database": "mymongo",
                "dataSource": "Cluster0",
                "filter": {
                    "_id": {"$oid": row._id},
                },
                "update": {
                    "$set": {
                        "granted": true,
                    }
                }
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
                    console.log(response);
                    this.$message({
                        type: 'success',
                        message: 'Marked as done!'
                    });
                    this.getAllPageAccessRequests();
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

.buttons {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}
</style>
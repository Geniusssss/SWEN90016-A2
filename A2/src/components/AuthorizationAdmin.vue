<template>
    <div>
        <!-- <div>AuthorizationAdmin</div> -->
        <el-table
            :data="allPageAccessRequests"
            stripe
            style="width: 100%">
            <el-table-column
            fixed
            prop="_id"
            label="ID"
            width="120">
            </el-table-column>
            <el-table-column
            prop="username"
            label="Username"
            width="120">
            </el-table-column>
            <el-table-column
            prop="permission_type"
            label="Permission Type"
            width="150">
            </el-table-column>
            <el-table-column
            prop="content_type"
            label="Content Type"
            width="300">
            </el-table-column>
            <!-- <el-table-column
            prop="granted"
            label="Granted"
            width="120">
            </el-table-column> -->
            <el-table-column
            prop="createdAt"
            label="Created At"
            width="120">
            </el-table-column>
            <el-table-column
            fixed="right"
            label="Action"
            width="100">
            <template slot-scope="scope">
                <el-button @click="handleClickApprove(scope.row)" size="mini">Approve</el-button>
                <!-- <el-button type="danger" size="mini">Delete</el-button> -->
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>
  
<script>
export default {
    name: 'AuthorizationAdmin',
    data() {
        return {
            allPageAccessRequests: this.getAllPageAccessRequests(),
            currentApprovingUser: "",
            // allPageAccessRequests: ["abc", "123"]
        }
    },
    methods: {
        routerTo(path) {
            this.$router.push(path)
        },
        getAllPageAccessRequests() {
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
                console.log(JSON.stringify(response.data));
                // alert(JSON.stringify(response.data));
                // this.$message("Response: " +
                //     JSON.stringify(response.data.documents).toString());
                this.allPageAccessRequests = response.data.documents;
            })
            .catch((error) => {
                // this.$message("")
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
            this.requestFindUser(row);
        },
        requestFindUser(row) {
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
                    console.log("Got here --- requestFindUser");
                    console.log(JSON.stringify(response.data.document));
                    this.requestUpdateUserPageAccess(row, response.data.document)
            })
            .catch((error) => {
                // this.$message("")
                console.log(error);
            });
        },
        requestUpdateUserPageAccess(row, userData) {
            this.$message(row.username);
            console.log("here userData is --------" + JSON.stringify(userData))
            let ddeAcc = userData.ddeAccess;
            console.log("ddeAccess is --------" + JSON.stringify(ddeAcc));
            ddeAcc[row.permission_type.toLowerCase()] = true;
            console.log("New ddeAccess is --------" + JSON.stringify(ddeAcc));

            // Step 1: Set the user's access to the target page as granted
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
                        // "ddeAccess": {
                        //     "create": false,
                        //     "read": false,
                        //     "update": false,
                        //     "delete": false
                        // }
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
                // console.log(JSON.stringify(response.data));
                // alert(JSON.stringify(response.data));
                this.$message("requestUpdateUserPageAccess Response: " +
                    JSON.stringify(response.data).toString());
                this.requestAccessToDynamicDemonExampleAsGranted(row);
            })
            .catch((error) => {
                console.log(error);
            });
        },
        requestAccessToDynamicDemonExampleAsGranted(row) {
            // Step 2: Set the page access request as granted
            let axios = require('axios');
            // console.log("Row._id is: " + row._id);
            let data = JSON.stringify({
                "collection": "requestAccessToDynamicDemonstrationExample",
                "database": "mymongo",
                "dataSource": "Cluster0",
                "filter": {
                    // "_id": BSON.ObjectId(row._id),
                    "username": row.username,
                    "content_type": row.content_type,
                    "permission_type": row.permission_type,
                    "granted": false,
                    "createdAt": row.createdAt,
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
                console.log(JSON.stringify(response.data));
                // alert(JSON.stringify(response.data));
                this.$message("requestAccessToDynamicDemonExampleAsGranted Response: " +
                    JSON.stringify(response.data).toString());
                this.allPageAccessRequests = this.getAllPageAccessRequests();
            })
            .catch((error) => {
                console.log(error);
            });
        },

    }
}
</script>
  
<style scoped>

</style>
<template>
    <div>
        <div class="title">Group Management</div>
        <el-button class="create-group" type="primary" plain @click="createGroup">Create a Group</el-button>
        <div v-if="allGroupMembers != ''">
            <el-tabs class="tabs" type="border-card" v-model="defaultTab">
                <el-tab-pane v-for="group in allGroupMembers" :key="group.groupName" :label="group.groupName"
                    :name="group.groupName">
                    <el-transfer v-model="group.value" :data="group.data" :titles="['Out Group', 'In Group']">
                    </el-transfer>
                    <el-button class="confirm" type="primary" @click="updateGroup(group)">Confirm</el-button>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'UserGroup',
    data() {
        return {
            defaultTab: 'Group 1',
            newGroup: { groupName: '', users: [] },
            allGroups: '',
            allUsers: '',
            allUsersData: [],
            allGroupMembers: [],
        }
    },
    created() {
        this.getGroups();
    },
    methods: {
        routerTo(path) {
            this.$router.push(path)
        },
        getGroupMembers() {
            for (let index = 0; index < this.allGroups.length; index++) {
                var groupMembers = { groupName: '', data: [], value: [] };
                let group = this.allGroups[index];
                groupMembers.groupName = group.groupName;
                groupMembers.data = this.allUsersData;
                for (let x = 0; x < group.users.length; x++) {
                    groupMembers.value.push(group.users[x])
                }
                this.allGroupMembers.push(groupMembers);
            }
        },
        createGroup() {
            this.$prompt('Input Group Name:', 'Create a New Group', {
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Cancel',
            }).then(({ value }) => {
                this.newGroup.groupName = value;
                this.insertGroup(value);
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Cancelled'
                });
            });
        },
        getAllUsersData() {
            for (let index = 0; index < this.allUsers.length; index++) {
                this.allUsersData.push({ key: this.allUsers[index].username, label: this.allUsers[index].username })
            }
            this.getGroupMembers();
        },
        updateGroup(group) {
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "userGroup",
                "database": "mymongo",
                "dataSource": "Cluster0",
                "filter": { "groupName": group.groupName },
                "update": {
                    "groupName": group.groupName,
                    "users": group.value,
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
                    this.allGroups = '';
                    this.allUsers = '';
                    this.allUsersData = [];
                    this.allGroupMembers = [];
                    this.getGroups();
                    this.$message({
                        type: 'success',
                        message: 'Update Successfully!',
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        insertGroup(value) {
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "userGroup",
                "database": "mymongo",
                "dataSource": "Cluster0",
                "document": this.newGroup,
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
                    console.log(response)
                    this.$message({
                        type: 'success',
                        message: 'Create Successfully: ' + value
                    });
                    this.allGroups = '';
                    this.allUsers = '';
                    this.allUsersData = [];
                    this.allGroupMembers = [];
                    this.getGroups();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getGroups() {
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "userGroup",
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
                    this.allGroups = response.data.documents;
                    this.getUsers();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getUsers() {
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
                    this.allUsers = response.data.documents
                    this.getAllUsersData();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
}
</script>
  
<style scoped>
.title {
    margin: 50px;
    width: 1096px;
    height: 66px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
    color: #101828;
}

.create-group {
    margin-left: 50px;
    margin-top: -20px;
    margin-bottom: -30px;
}

.tabs {
    margin: 50px;
}

.transfer-button {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;
}

.confirm {
    margin-top: 30px;
    margin-left: 245px;
}
</style>
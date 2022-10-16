<template>
    <div>
        <div class="title">Permission Restricted Pages Access and Authorization Management</div>
        <div class="title2">Hi {{this.user.username}}, please select the page you want to access!</div>
        <div style="margin-left: 50px;">
            <el-select v-model="selectedRestrictedLangPage" placeholder="Select" style="width: 400px;">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" plain style="margin-left: 10px; width: 70px;" @click="accessRestritedLangPage">Go
            </el-button>
        </div>
        <div>
            <el-dialog title="Request Access" top="30vh" width="40%" :close-on-click-modal="false"
                :visible.sync="dialogFormVisible">
                <div style="margin-left: 10%; margin-bottom: 30px;">
                    <div>READ: Have Access to view this page</div>
                    <div>CREATE: Have Access to upload to this page</div>
                    <div>DOWNLOAD: Have Access to download data on this page</div>
                    <div>DELETE: Have Access to delete data on this page</div>
                    <div style="margin-top: 20px;">Request READ access before requesting other accesses</div>
                </div>
                <el-form style="margin-left: 10%;" :model="form">
                    <el-form-item label="Access Type:">
                        <el-select style="width: 300px;" v-model="form.accessType"
                            placeholder="Please select your access type">
                            <el-option label="READ" value="READ"></el-option>
                            <el-option label="CREATE" value="CREATE"></el-option>
                            <el-option label="DOWNLOAD" value="DOWNLOAD"></el-option>
                            <el-option label="DELETE" value="DELETE"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="requestPageAccess">Submit Request</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'AuthorizationRequest',
    data() {
        return {
            user: '',
            options: [
                {
                    value: 'ENG_LANG_STATIC_EXAMPLE',
                    label: 'English Language - Static Example'
                },
                {
                    value: 'INDIGENOUS_DHUDHUROA_LANG',
                    label: 'Indigenous Dhudhuroa Language'
                },
                {
                    value: 'ENG_LANG_DYNAMIC_DEMO_EXAMPLE',
                    label: 'English Language - Dynamic Demonstration Example'
                },
            ],
            selectedRestrictedLangPage: '',
            dialogFormVisible: false,
            form: {
                name: '',
                accessType: '',
            },
        }
    },
    created() {
        this.getCurrentUser();
    },
    methods: {
        routerTo(path) {
            this.$router.push(path)
        },
        getCurrentUser() {
            var result = JSON.parse(localStorage.getItem("currentUser") || '[]');
            this.user = result;
        },
        accessRestritedLangPage() {
            if (this.selectedRestrictedLangPage == '') {
                this.$message("Please select a page");
                return;
            }
            if (this.selectedRestrictedLangPage == 'ENG_LANG_STATIC_EXAMPLE') {
                this.routerTo('/home/englishstatic');
            }
            if (this.selectedRestrictedLangPage == 'INDIGENOUS_DHUDHUROA_LANG') {
                if (this.user.idlAccess) {
                    this.routerTo('/home/indigenousdl');
                } else {
                    this.$alert('Request access to this page?'
                        , 'You do not have access to this page!',
                        {
                            showConfirmButton: true,
                            showCancelButton: true,
                        }
                    ).then(() => {
                        let axios = require('axios');
                        let data = JSON.stringify({
                            "collection": "requestAccessToDynamicDemonstrationExample",
                            "database": "mymongo",
                            "dataSource": "Cluster0",
                            "document": {
                                "username": this.user.username,
                                "content_type": this.selectedRestrictedLangPage,
                                "permission_type": '',
                                "granted": false,
                                "createdAt": new Date()
                            }
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
                                console.log(response);
                                this.$message({
                                    type: 'success',
                                    message: 'Request submitted!'
                                });
                                return;
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    });
                }
            }
            if (this.selectedRestrictedLangPage == 'ENG_LANG_DYNAMIC_DEMO_EXAMPLE') {
                if (this.user.ddeAccess.read) {
                    this.$confirm('You can go to this page or request other accesses'
                        , 'You have access to this page!',
                        {
                            cancelButtonText: 'Go to page',
                            confirmButtonText: 'Request access',
                        }
                    ).then(() => {
                        this.dialogFormVisible = true;
                    }).catch(() => {
                        this.routerTo('/home/englishdynamic');
                    });
                } else {
                    this.$alert('Request access to this page?'
                        , 'You do not have access to this page!',
                        {
                            showConfirmButton: true,
                            showCancelButton: true,
                        }
                    ).then(() => {
                        this.dialogFormVisible = true;
                    });
                }
            }

        },
        requestPageAccess() {
            this.dialogFormVisible = false;
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "requestAccessToDynamicDemonstrationExample",
                "database": "mymongo",
                "dataSource": "Cluster0",
                "document": {
                    "username": this.user.username,
                    "content_type": this.selectedRestrictedLangPage,
                    "permission_type": this.form.accessType,
                    "granted": false,
                    "createdAt": new Date()
                }
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
                    console.log(JSON.stringify(response.data));
                    this.$message({
                        type: 'success',
                        message: 'Request submitted!'
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }

    }
};
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

.title2 {
    margin-left: 50px;
    width: 1096px;
    height: 66px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 38px;
    color: #101828;
}

.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
<template>
    <div class="column">
        <div class="title">Text Searching</div>
        <el-col :span="10">
            <el-input class="search" prefix-icon="el-icon-search" placeholder="Search" v-model="keywords" clearable
                @input="searchText" v-loading="loading">
            </el-input>
        </el-col>
        <div v-for="item in newDisplayData" :key="item.sentence">
            <el-card class="box-card">
                <div slot="header" class="card-header">
                    <div style="width: 600px;">{{item.fileType}}</div>
                </div>
                <div class="text2 item">{{item.sentence}}</div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TextSearching',
    data() {
        return {
            user: '',
            keywords: '',
            displayData: [],
            newDisplayData: [],
            idlData: '',
            staticData: '',
            dynamicData: '',
            groupData: '',
            flag1: false,
            flag2: false,
            flag3: false,
            flag4: false,
            flag: false,
            loading: false,
        };
    },
    created() {
        console.log("created")
        this.user = JSON.parse(localStorage.getItem("currentUser") || '[]');
    },
    mounted() {
        console.log("mounted")
        this.getData();
    },
    watch: {
        flag() {
            this.$nextTick(() => {
                this.getDisplayData();
            })
        }
    },
    methods: {
        routerTo(path) {
            this.$router.push(path)
        },
        getData() {
            this.loading = true;
            if (this.user.idlAccess) {
                this.getIdlData();
            } else {
                this.flag1 = true;
                if (this.flag1 && this.flag2 && this.flag3 && this.flag4) {
                    this.flag = true;
                }
            }
            if (this.user.ddeAccess.read) {
                this.getDynamicData();
            } else {
                this.flag3 = true;
                if (this.flag1 && this.flag2 && this.flag3 && this.flag4) {
                    this.flag = true;
                }
            }
            this.getStaticData();
            this.getGroupData();
        },
        getIdlData() {
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "idlData",
                "database": "mymongo",
                "dataSource": "Cluster0",
                "filter": {
                    "fileType": "Sentence"
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
                    this.idlData = response.data.documents;
                    console.log("getIdlData")
                    this.flag1 = true;
                    if (this.flag1 && this.flag2 && this.flag3 && this.flag4) {
                        this.flag = true;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getStaticData() {
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "StaticData",
                "database": "mymongo",
                "dataSource": "Cluster0",
                "filter": {
                    "fileType": "Sentence"
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
                    this.staticData = response.data.documents;
                    console.log("getStaticData")
                    this.flag2 = true;
                    if (this.flag1 && this.flag2 && this.flag3 && this.flag4) {
                        this.flag = true;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getDynamicData() {
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "DynamicData",
                "database": "mymongo",
                "dataSource": "Cluster0",
                "filter": {
                    "fileType": "Sentence"
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
                    this.dynamicData = response.data.documents;
                    console.log("getDynamicData")
                    this.flag3 = true;
                    if (this.flag1 && this.flag2 && this.flag3 && this.flag4) {
                        this.flag = true;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getGroupData() {
            let axios = require('axios');
            let data = '';
            if (this.user.isAdmin) {
                data = JSON.stringify({
                    "collection": "userGroup",
                    "database": "mymongo",
                    "dataSource": "Cluster0",
                });
            } else {
                data = JSON.stringify({
                    "collection": "userGroup",
                    "database": "mymongo",
                    "dataSource": "Cluster0",
                    "filter": {
                        "users": { "$all": [this.user.username] }
                    },
                });
            }
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
                    this.groupData = response.data.documents;
                    console.log("getGroupData")
                    this.flag4 = true;
                    if (this.flag1 && this.flag2 && this.flag3 && this.flag4) {
                        this.flag = true;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        getDisplayData() {
            for (let index = 0; index < this.idlData.length; index++) {
                var oneData1 = { fileType: '', sentence: '' };
                var dataType1 = 'Indigenous Community Knowledge';
                let item1 = this.idlData[index];
                oneData1.fileType = dataType1
                oneData1.sentence = item1.text;
                this.displayData.push(oneData1);
            }
            for (let index = 0; index < this.staticData.length; index++) {
                var oneData2 = { fileType: '', sentence: '' };
                var dataType2 = 'English Language - Static Example';
                let item2 = this.staticData[index];
                oneData2.fileType = dataType2
                oneData2.sentence = item2.text;
                this.displayData.push(oneData2);
            }
            for (let index = 0; index < this.dynamicData.length; index++) {
                var oneData3 = { fileType: '', sentence: '' };
                var dataType3 = 'English Language - Dynamic Demonstration Example';
                let item3 = this.dynamicData[index];
                oneData3.fileType = dataType3
                oneData3.sentence = item3.text;
                this.displayData.push(oneData3);
            }
            for (let index = 0; index < this.groupData.length; index++) {
                var dataType4 = this.groupData[index].groupName;
                let item4 = this.groupData[index].groupData;
                for (let index2 = 0; index2 < item4.length; index2++) {
                    let item5 = item4[index2];
                    var oneData4 = { fileType: '', sentence: '' };
                    oneData4.fileType = dataType4;
                    oneData4.sentence = item5;
                    this.displayData.push(oneData4);
                }
            }
            this.newDisplayData = this.displayData;
            this.loading = false;
        },
        searchText() {
            console.log("searching");
            var searchKeywords = this.keywords;
            if (searchKeywords) {
                this.newDisplayData = this.displayData.filter(function (displayData) {
                    return Object.keys(displayData).some(function (key) {
                        return String(displayData[key]).toLowerCase().indexOf(searchKeywords) > -1
                    })
                })
            } else {
                this.newDisplayData = this.displayData;
            }
        },
    },
}


</script>

<style scoped>
.column {
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
}

.title {
    margin-bottom: 50px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 550;
    font-size: 30px;
    line-height: 38px;
    color: #101828;
}

.box-card {
    width: 680px;
    margin-bottom: 10px;
}

.search {
    width: 680px;
    margin-bottom: 30px;
}

.card-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
}

.text2 {
    font-size: 20px;
}

.item {
    margin-bottom: 18px;
}
</style>
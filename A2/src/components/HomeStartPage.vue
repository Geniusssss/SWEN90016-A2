<template>
    <div style="margin: 50px;">
        <div class="title">Latest Researches</div>
        <el-table :data="tableData" style="width: 1060px;" v-loading="loading">
            <el-table-column prop="title" label="Research" width="780">
            </el-table-column>
            <el-table-column prop="date" label="Date" width="180">
            </el-table-column>
            <el-table-column prop="link" label="" width="100">
                <div slot-scope="scope">
                    <a :href="scope.row.link" target="blank">
                        <div>View</div>
                    </a>
                </div>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [],
            loading: false,
        }
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            this.loading = true;
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "latestResearch",
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
                    console.log(response.data.documents);
                    this.tableData = response.data.documents
                    this.loading = false;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        routerTo(path) {
            this.$router.push(path)
        },
    },
}
</script>

<style scoped>
.title {
    margin-bottom: 50px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 550;
    font-size: 30px;
    line-height: 38px;
    color: #101828;
}
</style>
<template>
    <div class="column">
        <div>
            <div class="title">English Language - Static Example</div>
            <div v-for="item in allData" :key="item._id">
                <el-card class="box-card">
                    <div slot="header" class="card-header">
                        <div style="width: 300px;">{{item.fileType}}</div>
                    </div>
                    <div v-if="item.fileType == 'Sentence' || item.fileType == 'Symbol'" class="text item">{{item.text}}
                    </div>
                    <div v-if="item.fileType == 'Image'">
                        <el-card class="card-image">
                            <div style="margin-bottom: 20px;">{{item.fileName}}</div>
                            <img :src="item.fileCode" class="image">
                        </el-card>
                    </div>
                    <div v-if="item.fileType == 'Song'">
                        <div class="music-title">{{item.fileName}}</div>
                        <audio controls controlsList="nodownload" class="audio">
                            <source :src="item.fileCode" type="audio/mpeg">
                            Your browser does not support the audio tag.
                        </audio>
                    </div>
                </el-card>
            </div>
            <el-card class="box-card" v-loading="loading">
                <div slot="header" class="card-header">
                    <div style="width: 400px;">UML Information Model of Language Data</div>
                </div>
                <el-card>
                    <img src="../assets/language_data_UML.png" class="uml">
                </el-card>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EnglishStatic',
    created() {
        this.user = JSON.parse(localStorage.getItem("currentUser") || '[]');
        this.getData();
    },
    data() {
        return {
            user: '',
            allData: '',
            loading: false,
        };
    },
    methods: {
        routerTo(path) {
            this.$router.push(path)
        },
        getData() {
            this.loading = true;
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "StaticData",
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
                    this.allData = response.data.documents;
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

.card-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
}

.text {
    font-size: 20px;
}

.item {
    margin-bottom: 18px;
}

.image {
    width: 100%;
    display: block;
}

.card-image {
    height: 50%;
    width: 50%;
}

.music-title {
    margin-bottom: 20px;
}

.audio {
    width: 500px;
}

.uml {
    width: 100%;
    display: block;
}
</style>
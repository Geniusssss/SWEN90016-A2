<template>
    <div v-if="user" class="column">
        <div v-if="user.idlAccess">
            <div class="title">Indigenous Dhudhuroa Language</div>
            <div v-loading="loading">
                <div class="row">
                    <el-select style="width: 250px;" v-model="optionValue" clearable placeholder="Select data type to upload">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-upload :disabled="optionValue == ''" action="" :show-file-list="false" :on-change="handleUpload"
                        :auto-upload="false">
                        <el-button type="primary" @click="selectWarning">Upload<i
                                class="el-icon-upload el-icon--right"></i>
                        </el-button>
                    </el-upload>
                </div>
                <div v-for="item in allData" :key="item._id">
                    <el-card class="box-card">
                        <div slot="header" class="card-header">
                            <div style="width: 300px;">{{item.fileType}}</div>
                            <el-button style="margin-left: 55%; width: 100px;" type="primary" plain size="small"
                                @click="downloadFile(item)"><i class="el-icon-download el-icon--left"></i>Download
                            </el-button>
                            <el-popconfirm placement="top" title="Are you sure to delete?" confirm-button-type="text"
                                cancel-button-type="primary" @confirm="deleteData(item)">
                                <el-button slot="reference" style="width: 100px;" type="danger" plain size="small"><i
                                        class="el-icon-delete el-icon--left"></i>Delete
                                </el-button>
                            </el-popconfirm>
                        </div>
                        <div v-if="item.fileType == 'Sentence' || item.fileType == 'Symbol'" class="text item">
                            {{item.text}}
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
            </div>
        </div>
        <div v-else>
            <div class="title">No Access</div>
            <div class="content">Please request access to this page</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IndigenousDL',
    created() {
        this.getCurrentUser();
        this.getData();
    },
    data() {
        return {
            user: '',
            allData: '',
            options: [{
                value: 'Sentence',
                label: 'Sentence'
            }, {
                value: 'Symbol',
                label: 'Symbol'
            }, {
                value: 'Image',
                label: 'Image'
            }, {
                value: 'Song',
                label: 'Song'
            }],
            optionValue: '',
            loading: false,
        };
    },
    methods: {
        routerTo(path) {
            this.$router.push(path)
        },
        getCurrentUser() {
            var result = JSON.parse(localStorage.getItem("currentUser") || '[]');

            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "users",
                "database": "mymongo",
                "dataSource": "Cluster0",
                "filter": {
                    "username": result.username,
                    "pswd": result.pswd,
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
                    console.log(response.data.document);
                    this.user = response.data.document
                    console.log(this.user);
                })
                .catch((error) => {
                    console.log(error);
                    this.user = result;
                });
        },
        refreshPage() {
            this.optionValue = '';
            this.getData();
        },
        getData() {
            this.loading = true;
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "idlData",
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
        handleUpload(uploadFile) {
            var fileType = this.optionValue;
            var fileSize = uploadFile.size;
            var fileName = uploadFile.name;
            var rawFile = uploadFile.raw;
            var keywords = [];
            var english = '';
            var location = '';
            var description = '';
            var createdAt = new Date();

            if ((fileType == 'Sentence') || (fileType == 'Symbol')) {
                if (uploadFile.raw.type.search("text") == -1) {
                    this.$message({
                        type: 'error',
                        message: 'Unacceptable file type',
                    });
                    return;
                }
            } else if (fileType == 'Image') {
                if (uploadFile.raw.type.search("image") == -1) {
                    this.$message({
                        type: 'error',
                        message: 'Unacceptable file type',
                    });
                    return;
                }
            } else if (fileType == 'Song') {
                if (uploadFile.raw.type.search("audio") == -1) {
                    this.$message({
                        type: 'error',
                        message: 'Unacceptable file type',
                    });
                    return;
                }
            } else {
                return;
            }

            this.loading = true;
            
            if ((fileType == 'Sentence') || (fileType == 'Symbol')) {
                var reader1 = new FileReader();
                reader1.readAsText(uploadFile.raw, 'utf-8');
                reader1.onload = function (e) {
                    var text = String(e.target.result);
                    var reader2 = new FileReader();
                    reader2.readAsDataURL(rawFile);
                    reader2.onload = function (e) {
                        var fileCode = e.target.result;

                        let axios = require('axios');
                        let data = JSON.stringify({
                            "collection": "idlData",
                            "database": "mymongo",
                            "dataSource": "Cluster0",
                            "document": {
                                "fileName": fileName,
                                "fileSize": fileSize,
                                "fileType": fileType,
                                "fileCode": fileCode,
                                "text": text,
                                "keywords": keywords,
                                "english": english,
                                "createdAt": createdAt,
                            },
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
                                    message: 'Upload successfully!',
                                });
                                this.refreshPage();
                                this.loading = false;
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }.bind(this);
                }.bind(this);
            } else if ((fileType == 'Image') || (fileType == 'Song')) {
                var reader3 = new FileReader();
                reader3.readAsDataURL(rawFile);
                reader3.onload = function (e) {
                    var fileCode = e.target.result;

                    let axios = require('axios');
                    let data = JSON.stringify({
                        "collection": "idlData",
                        "database": "mymongo",
                        "dataSource": "Cluster0",
                        "document": {
                            "fileName": fileName,
                            "fileSize": fileSize,
                            "fileType": fileType,
                            "fileCode": fileCode,
                            "keywords": keywords,
                            "location": location,
                            "description": description,
                            "createdAt": createdAt,
                        },
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
                                message: 'Upload successfully!'
                            });
                            this.refreshPage();
                            this.loading = false;
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }.bind(this);
            }
        },
        downloadFile(file) {
            let arr = file.fileCode.split(",");
            let mime = arr[0].match(/:(.*?);/)[1];
            let bstr = atob(arr[1]);
            let n = bstr.length;
            let u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            let newFile = new File([u8arr], `${file.fileName}`, {
                type: mime
            });
            this.file2 = newFile;
            var fileUrl = URL.createObjectURL(newFile);
            let downFile = document.createElement("a");
            downFile.style.display = "none";
            downFile.href = fileUrl;
            downFile.download = newFile.name;
            document.body.appendChild(downFile);
            downFile.click();
            document.body.removeChild(downFile);
            window.URL.revokeObjectURL(fileUrl);
        },
        selectWarning() {
            if (this.optionValue == '') {
                this.$message({
                    type: 'warning',
                    message: 'Please select data type to upload'
                });
            }
        },
        deleteData(item) {
            let axios = require('axios');
            let data = JSON.stringify({
                "collection": "idlData",
                "database": "mymongo",
                "dataSource": "Cluster0",
                "filter": { "_id": { "$oid": item._id } }
            });
            let config = {
                method: 'post',
                url: 'https://data.mongodb-api.com/app/data-rtrxq/endpoint/data/v1/action/deleteOne',
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
                        message: 'Delete successfully!'
                    });
                    this.refreshPage();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
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

.row {
    width: 680px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    margin-bottom: 30px;
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

.content {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 350;
    font-size: 18px;
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
</style>
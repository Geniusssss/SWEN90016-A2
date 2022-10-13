<template>
    <div class="column">
        <div v-if="user.ddeAccess.read">
            <div class="title">English Language - Dynamic Demonstration Example</div>
            <el-upload class="upload-button" :disabled="!user.ddeAccess.create">
                <el-button type="primary" :disabled="!user.ddeAccess.create"><i
                        class="el-icon-upload2 el-icon--left"></i>Upload</el-button>
            </el-upload>
            <el-card class="box-card">
                <div slot="header" class="card-header">
                    <div>Sentence</div>
                    <el-button style="margin-left: 55%; width: 100px;" type="primary" plain size="small"
                        :disabled="!user.ddeAccess.create"><i class="el-icon-download el-icon--left"></i>Download
                    </el-button>
                    <el-popover placement="top" v-model="deleteVisible" style="margin-left: 10px;">
                        <p>Are you sure to delete?</p>
                        <div style="text-align: center; margin: 0">
                            <el-button size="mini" type="primary" @click="deleteVisible = false">cancel</el-button>
                            <el-button size="mini" type="text" @click="deleteVisible = false">confirm</el-button>
                        </div>
                        <el-button slot="reference" style="width: 100px;" type="danger" plain size="small"
                            :disabled="!user.ddeAccess.delete" @click="deleteFile"><i
                                class="el-icon-delete el-icon--left"></i>Deletes</el-button>
                    </el-popover>
                </div>
                <div class="text item">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="card-header">
                    <div>Sentence</div>
                    <el-button style="margin-left: 55%; width: 100px;" type="primary" plain size="small"
                        :disabled="!user.ddeAccess.create"><i class="el-icon-download el-icon--left"></i>Download
                    </el-button>
                    <el-button style="width: 100px;" type="danger" plain size="small" :disabled="!user.ddeAccess.delete"
                        @click="deleteFile"><i class="el-icon-delete el-icon--left"></i>Deletes</el-button>
                </div>
                <div class="text item">Ut enim ad minim veniam, quis nostrud exercitation.</div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="card-header">
                    <div>Symbol</div>
                    <el-button style="margin-left: 57%; width: 100px;" type="primary" plain size="small"
                        :disabled="!user.ddeAccess.create"><i class="el-icon-download el-icon--left"></i>Download
                    </el-button>
                    <el-button style="width: 100px;" type="danger" plain size="small" :disabled="!user.ddeAccess.delete"
                        @click="deleteFile"><i class="el-icon-delete el-icon--left"></i>Deletes</el-button>
                </div>
                <div class="text item">?</div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="card-header">
                    <div>Symbol</div>
                    <el-button style="margin-left: 57%; width: 100px;" type="primary" plain size="small"
                        :disabled="!user.ddeAccess.create"><i class="el-icon-download el-icon--left"></i>Download
                    </el-button>
                    <el-button style="width: 100px;" type="danger" plain size="small" :disabled="!user.ddeAccess.delete"
                        @click="deleteFile"><i class="el-icon-delete el-icon--left"></i>Deletes</el-button>
                </div>
                <div class="text item">@</div>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="card-header">
                    <div>Image</div>
                    <el-button style="margin-left: 58%; width: 100px;" type="primary" plain size="small"
                        :disabled="!user.ddeAccess.create"><i class="el-icon-download el-icon--left"></i>Download
                    </el-button>
                    <el-button style="width: 100px;" type="danger" plain size="small" :disabled="!user.ddeAccess.delete"
                        @click="deleteFile"><i class="el-icon-delete el-icon--left"></i>Deletes</el-button>
                </div>
                <el-card class="card-image">
                    <div style="margin-bottom: 20px;">Dhudhuroa language</div>
                    <img src="../assets/Dhudhuroa_character.png" class="image">
                </el-card>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="card-header">
                    <div>Image</div>
                    <el-button style="margin-left: 58%; width: 100px;" type="primary" plain size="small"
                        :disabled="!user.ddeAccess.create"><i class="el-icon-download el-icon--left"></i>Download
                    </el-button>
                    <el-button style="width: 100px;" type="danger" plain size="small" :disabled="!user.ddeAccess.delete"
                        @click="deleteFile"><i class="el-icon-delete el-icon--left"></i>Deletes</el-button>
                </div>
                <el-card class="card-image">
                    <div style="margin-bottom: 20px;">Dhudhuroa Research Paper</div>
                    <img src="../assets/static_page_old_paper.png" class="image">
                </el-card>
            </el-card>
            <el-card class="box-card">
                <div slot="header" class="card-header">
                    <div>Song</div>
                    <el-button style="margin-left: 59%; width: 100px;" type="primary" plain size="small"
                        :disabled="!user.ddeAccess.create"><i class="el-icon-download el-icon--left"></i>Download
                    </el-button>
                    <el-button style="width: 100px;" type="danger" plain size="small" :disabled="!user.ddeAccess.delete"
                        @click="deleteFile"><i class="el-icon-delete el-icon--left"></i>Deletes</el-button>
                </div>
                <div class="text item">
                    <div class="music-title">Sample Music</div>
                    <audio controls class="audio">
                        <source src="../assets/sample.mp3" type="audio/mpeg">
                        Your browser does not support the audio tag.
                    </audio>
                </div>
            </el-card>
        </div>
        <div v-else>
            <div class="title">No Access</div>
            <div class="content">Please request access to this page</div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'EnglishDynamic',
    created() {
        this.user = JSON.parse(localStorage.getItem("currentUser") || '[]');
    },
    data() {
        return {
            user: '',
            deleteVisible: false,
        }
    },
    methods: {
        deleteFile() {

        },
        routerTo(path) {
            this.$router.push(path)
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

.upload-button {
    margin-bottom: 20px;
}

.content {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 350;
    font-size: 18px;
    line-height: 38px;
    color: #101828;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 680px;
    margin-bottom: 10px;
}

.image-card {
    margin-left: 10px;
    margin-bottom: 10px;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
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

.card-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
}
</style>
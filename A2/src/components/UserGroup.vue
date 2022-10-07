<template>
    <div>
        <div class="content">
            <div class="title">Authority Management</div>
        </div>
        <div class="row-section">
            <div class="list-title-1" type="margin-left: 50px">User Name</div>
            <div class="list-title-2">Indigenous Dhudhuroa Language</div>
            <div class="double-line">
                <div class="list-title-3">Dynamic Demonstration Example</div>
                <div class="crwd">
                    <div class="crwd-section">Create</div>
                    <div class="crwd-section">Read</div>
                    <div class="crwd-section">Write</div>
                    <div class="crwd-section">Delete</div>
                </div>
            </div>
        </div>
        <div class="user-list">
            <div v-for="user in allUsers" :key="user.username">
                <div v-if="!user.isAdmin" class="row-section">
                    <i class="el-icon-user-solid"></i>
                    <div class="user-name">{{user.username}}</div>
                    <el-switch v-model="user.idlAccess" class="switch-1" @change="update"></el-switch>
                    <el-switch v-model="user.ddeAccess.create" class="switch-2" @change="update"></el-switch>
                    <el-switch v-model="user.ddeAccess.read" class="switch-3" @change="update"></el-switch>
                    <el-switch v-model="user.ddeAccess.write" class="switch-3" @change="update"></el-switch>
                    <el-switch v-model="user.ddeAccess.delete" class="switch-3" @change="update"></el-switch>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'UserGroup',
    data() {
        return {
            allUsers: [],
        }
    },
    created() {
        this.getUserList();
    },
    methods: {
        routerTo(path) {
            this.$router.push(path)
        },
        getUserList() {
            var result = JSON.parse(localStorage.getItem("allUsers") || '[]');
            this.allUsers = result
        },
        update() {
            localStorage.setItem("allUsers", JSON.stringify(this.allUsers));
        }
    }
}
</script>
  
<style scoped>
.content {
    margin: 50px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 1096px;
    height: 66px;
}

.title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 38px;
    color: #101828;
}

.user-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 50px;
}

.row-section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
}

.list-title-1 {
    margin-left: 80px;
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

.switch-1 {
    margin-left: 120px;
}

.switch-2 {
    margin-left: 270px;
}

.switch-3 {
    margin-left: 100px;
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
</style>
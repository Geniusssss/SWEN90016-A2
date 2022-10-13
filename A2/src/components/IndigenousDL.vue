<template>
    <div class="column">
        <div v-if="user.idlAccess">
            <div class="title">Indigenous Dhudhuroa Language</div>
            <el-upload>
                <el-button type="primary">Upload<i class="el-icon-upload el-icon--right"></i></el-button>
            </el-upload>
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
        this.user = JSON.parse(localStorage.getItem("currentUser") || '[]');
    },
    data() {
        return {
            user: '',
        }
    },
    methods: {
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

.content {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 350;
    font-size: 18px;
    line-height: 38px;
    color: #101828;
}
</style>
<template>
    <div class="column">
        <div class="title">Text Searching</div>
        <el-col :span="10">
            <el-input class="box-card" prefix-icon="el-icon-search" placeholder="Search" v-model="keywords" clearable></el-input>
        </el-col>
        <el-card class="box-card">
            <div class="text">This is text sample 1.</div>
        </el-card>
        <el-card class="box-card">
            <div class="text">This is text sample 2.</div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'TextSearching',
    methods: {
        routerTo(path) {
            this.$router.push(path)
        },
    },
    data() {
        return {
            keywords: "",
        };
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

.text {
    font-size: 17px;
}

.box-card {
    width: 680px;
    margin-bottom: 10px;
}
</style>
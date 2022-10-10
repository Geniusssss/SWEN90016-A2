<template>
    <div class="column">
        <div class="container">
            <div class="title">Culturally Relevant Perspective</div>
        </div>
        <img class="logo" src="../assets/crp.png">
        <div class="content">{{content1}}</div>
    </div>
</template>
  
<script>
export default {
    name: 'EnglishStaticCRP',
    data() {
        return {
            content1: "Aboriginal and Torres Strait Islander communities are the custodians of their cultural and linguistic heritage. The lived experience Indigenous people have of their languages should be valued and respected as highly as the technical knowledge which consultants bring to a project.",
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

.logo {
    width: 40%;
    margin-bottom: 30px;
}

.container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 1096px;
    height: 66px;
}

.content {
    width: 100%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    color: #101828;
}

.title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 550;
    font-size: 30px;
    line-height: 38px;
    color: #101828;
}

.content-title {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 550;
    font-size: 20px;
    line-height: 30px;
    color: #101828;
}
</style>
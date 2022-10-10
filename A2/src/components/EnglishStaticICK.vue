<template>
    <div class="column">
        <div class="container">
            <div class="title">Indigenous Community Knowledge</div>
        </div>
        <img class="logo" src="../assets/ick.png">
        <div class="content">{{content1}}</div>
        <div class="content">{{content2}}</div>
        <div class="content-title">The aim of this study is to:</div>
        <div class="content">{{content3}}</div>
        <div class="content">{{content4}}</div>
        <div class="content">{{content5}}</div>
        <div class="content">{{content6}}</div>
        <div class="content">{{content7}}</div>
        <div class="content">{{content8}}</div>
        <div class="content">{{content9}}</div>
        <div class="content">{{content10}}</div>
        <div class="content">{{content11}}</div>
        <div class="content">{{content12}}</div>
        <div class="content">{{content13}}</div>
        <div class="content">{{content14}}</div>
        <div class="content">{{content15}}</div>
        <div class="content">{{content16}}</div>
    </div>
</template>
  
<script>
export default {
    name: 'EnglishStaticICK',
    data() {
        return {
            content1: "Victorian Indigenous cultures are linked to languages. Language is core to reviving cultural and spiritual practices. Indigenous ancestral languages uphold  Indigenous worldviews.",
            content2: "The Indigenous Languages of Victoria: Revival and Reclamation study, enables researchers and other providers to target one or more of Victoria’s Indigenous languages for study within the VCE, in consultation with members of the relevant Language community.",
            content3: "• revive and reclaim elements of a Victorian Indigenous language and use the knowledge gained to communicate with others;",
            content4: "• understand the range of cultural contexts in which the target language functions;",
            content5: "• make connections between language reclamation, cultural restoration and group/individual identity;",
            content6: "• make connections between language reclamation and Indigenous social justice and equity;",
            content7: "• develop knowledge and skills relevant to language revival and reclamation;",
            content8: "• observe and utilise parallels between the target language and other Victorian/Australian Indigenous languages to facilitate the reclamation process;",
            content9: "• observe and appreciate languages of other Indigenous peoples of the world;",
            content10: "• understand language as a system;",
            content11: "• understand and appreciate the role of the target language in contemporary society;",
            content12: "• progress to further education, training or employment.",
            content13: " ",
            content14: "This web is actively encouraged to participate in the process of revival and reclamation of a Victorian Indigenous language of significance to themselves or to their local area. This will involve the identification of strategies for community consultation and for the participation of Indigenous family groups in the ongoing reclamation process. It will also include the acquisition of knowledge and skill in the location and the interpretation of historical records relating to the target language, as well as the active use of the target language in contemporary settings, within and beyond the research context.",
            content15: "There are many ways of organizing programs based on this study design and researchers should create sufficiently flexible programs to accommodate the reclamation stage that the target language has reached. For example, different learning activities might need to be selected for a language where the focus of reclamation is at the vocabulary stage as against a language that is more fully described. Learning activities should also be culturally appropriate and opportunities should be taken to explore the cultural influence of the target language in the local area and in areas where it once flourished. Explorations of the origin of placenames, visits to culturally significant sites, and tracing of Dreaming Tracks are some examples of culturally relevant contexts. Others use (s) of the target language within the community.",
            content16: "In all programs, the teaching of vocabulary and of grammatical structures should be integrated into the learning-teaching program. In some situations, an emphasis on the teaching of specific aspects of grammar and/or grammar parallels from other Indigenous languages may be necessary to further the reclamation of the target language.",
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
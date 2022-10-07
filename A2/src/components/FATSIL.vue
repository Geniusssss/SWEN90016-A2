<template>
    <div class="column">
        <div class="container">
            <div class="title">FATSIL Privacy and Copyright</div>
        </div>
        <img class="logo" src="../assets/FATSILC.png">
        <div class="content">{{content1}}</div>
        <div class="content-title">Copyright</div>
        <div class="content">{{content2}}</div>
        <div class="content">{{content3}}</div>
        <div class="content">{{content4}}</div>
        <div class="content">{{content5}}</div>
        <div class="content">{{content6}}</div>
        <div class="content-title">Copyright in existing language materials</div>
        <div class="content">{{content7}}</div>
        <div class="content-title">Copyright in future language materials</div>
        <div class="content">{{content8}}</div>
    </div>
</template>
  
<script>
export default {
    name: 'FATSIL',
    data() {
        return {
            content1: "Language projects and publications need to reflect the fact that language is owned by community and the whole community contributes to the existence and preservation of language. Consultants need to recognise that communities feel strongly that they are the custodians of their languages and cultures.",
            content2: "• Copyright only applies to original material. However, much traditional Indigenous cultural knowledge is passed down from generation to generation and may not be considered original, and therefore may not be protected, under copyright law.",
            content3: "• Copyright applies only to specific works (eg literary works) and then only if these works are in material form. It does not protect spoken words if these are not recorded in some way.",
            content4: "• Copyright is generally owned by the people who create the copyright material or their employers, or the people or organisations to which a copyright owner transfers the copyright. However, Indigenous views of knowledge ownership are often communal, and not based on who actually created the knowledge.",
            content5: "• Copyright lasts, in general, for a limited time, then the material is in the public domain and permission to use it is no longer required. However, Indigenous views of knowledge ownership include regarding knowledge as for all time being handed down through the generations, and always remaining the property of the community.",
            content6: "A single language publication may have many contributors. The language itself will be contributed by the community, the language analysis and description by the linguist, the teaching ideas by the school. An important aspect of Australian copyright is that different parts of a publication can be owned by different contributors, and that copyright does not protect all kinds of contributions. For example, a multimedia CDROM may consist of several components: the story/content, audio recording, photos/images, transliteration/ translation, alphabet and pronunciation guide, graphic design, the computer code of the programmer, and the copyright in these components may, at least initially, be owned by different people. The person who had the (mere) idea for the CD-ROM, however, does not have any copyright in that idea. Communities and their consultants are aware that, under the Australian copyright regime and, unless written agreements that provide differently are entered into, copyright rights in language materials usually vest in non-Indigenous individuals or institutions, such as the Crown and funding bodies, not the community. These non-Indigenous individuals or institutions then have exclusive rights in these materials, eg to reproduce, publish, perform, communicate, and adapt them, for as long as copyright lasts or until they transfer copyright ownership to someone else who then has these rights. It is proposed, however, that a community and its consultants should all have a say as to what happens to their language publications, where copies are stored, and who can have access to them. The model agreement developed by the Arts Law Centre of Australia facilitates this for materials published in the future (see below).",
            content7: "Unless communities are the copyright owner, or have permission from the copyright owner, they do not have the right to use, and control the use of, many existing language materials. Furthermore, in the case of unpublished printed and audio-visual materials (eg the unpublished recordings stored at AIATSIS) copyright potentially lasts forever. Even if the material is published so that the copyright only lasts for a limited time, it then falls into the public domain and becomes available for anyone to use. In either case, there can be serious consequences for communities’ relationship to, and custodianship of, their languages and ICIP. For these reasons, linguists and other researchers and consultants must give serious consideration to transferring copyright in their existing works to the local or regional language centre (if established) or alternatively, the most relevant local community organisation or AIATSIS.",
            content8: "The model agreement developed by the Arts Law Centre of Australia helps to overcome some of the difficulties faced to date by communities and their consultants. Where a community works with a consultant, use of this kind of agreement helps to protect communities’ intellectual and cultural property, and determine what happens to the developed materials. The model agreement recognises the contributions made by all parties to any language publication. It includes the possibility of joint copyright ownership, where the different contributors can each have rights over the materials - the right to publish, distribute and copy them. Government departments have a long history of presuming that funding the development of resources about Indigenous languages and cultures entitles them to free use of those materials. There are also special provisions in Australian copyright law that favour federal and state government copyright ownership. One of the aims of the Arts Law-FATSIL protocols and model agreement is to begin to challenge the assumptions that underpin these legal frameworks and practices, and to increase the awareness of, and support for, the cultural and intellectual property rights of Indigenous communities.",
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
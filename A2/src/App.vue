<template>
    <div id="app">
        <div>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            allUsers: [
                { username: "111", pswd: "111", isAdmin: false, idlAccess: false, ddeAccess: { create: false, read: true, write: false, delete: false } },
                { username: "222", pswd: "222", isAdmin: false, idlAccess: true, ddeAccess: { create: true, read: true, write: false, delete: true } },
                { username: "333", pswd: "333", isAdmin: false, idlAccess: false, ddeAccess: { create: true, read: false, write: true, delete: true } },
                { username: "444", pswd: "444", isAdmin: false, idlAccess: true, ddeAccess: { create: true, read: true, write: true, delete: false } },
                { username: "555", pswd: "555", isAdmin: false, idlAccess: false, ddeAccess: { create: false, read: true, write: false, delete: false } },
                { username: "admin", pswd: "admin", isAdmin: true, idlAccess: true, ddeAccess: { create: true, read: false, write: false, delete: true } }
            ]
        }
    },
    created() {
        if (localStorage.getItem("allUsers")) {
            console.log("exist");
            return
        }
        localStorage.setItem("allUsers", JSON.stringify(this.allUsers));
    }
}
</script>

<style scoped>

</style>

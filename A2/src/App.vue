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
                { email: "123@", pswd: "123", isAdmin: false, idlAccess: true, ddeAccess: {create: true, read: true, write: true, delete: false} },
                { email: "456@", pswd: "456", isAdmin: true, idlAccess: false, ddeAccess: {create: false, read: false, write: false, delete: false} }
            ]
        }
    },
  created() {
    localStorage.setItem("allUsers", JSON.stringify(this.allUsers));
  }
}
</script>

<style>

</style>

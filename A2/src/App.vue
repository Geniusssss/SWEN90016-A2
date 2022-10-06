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
                { email: "123@", pswd: "123" },
                { email: "456@", pswd: "456" }
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

<template>
    <div>
        <div>TextSearching</div>
        <div id="app">
            <input type="text" v-model="search">
            <div v-for="post in filteredPosts" :key="post.id">
                <post :post="post"></post>
            </div>
        </div>
    </div>
</template>
  
<script>
import Post from "./SearchResult.vue";
export default {
    name: 'TextSearching',
    methods: {
        routerTo(path) {
            this.$router.push(path)
        },
    },
    components: {
    Post
  },
  data() {
    return {
      search: "",
      posts: [
        {
          id: 1,
          title: "Post 1",
          body: "Vue.js is cool"
        },
        {
          id: 2,
          title: "Post 2",
          body: "Javascript is cool"
        }
      ]
    };
  },
  computed: {
    filteredPosts() {
      return this.posts.filter(post =>
        post.body.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  }
}


</script>
  
<style scoped>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
<template>
    <article>
      <h3>{{ post.title }}</h3>
      <p>{{post.author}}</p>
    </article>
  </template>
  <script>
  export default {
    props: ["post"]
  };
  </script>
<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('posts', ['loadedPosts']),
  },
  // Executed on the server and will wait for the task to finish before sending it to the client
  // Only works in the pages folder not in the components folder
  // asyncData s always something we wait for but does not always run on the server. It only does so if we are loading the page for the first time because we refreshed the page or we entered a new url
  // async asyncData() {
  //   // "this" will not give the Vue instance because this is happening on the server side and the component has not been created yet
  //   // eslint-disable-next-line nuxt/no-timing-in-fetch-data
  //   await new Promise((resolve) => setTimeout(() => resolve(), 2500));
  //   return {
  //     loadedPosts: [
  //       {
  //         id: '1',
  //         title: 'Post Title 1',
  //         previewText: 'Preview Text 1',
  //         thumbnail:
  //           'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
  //       },
  //       {
  //         id: '2',
  //         title: 'Post Title 2',
  //         previewText: 'Preview Text 2',
  //         thumbnail:
  //           'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
  //       },
  //       {
  //         id: '3',
  //         title: 'Post Title 3',
  //         previewText: 'Preview Text 3',
  //         thumbnail:
  //           'https://images.unsplash.com/photo-1606851281895-c4d3b1c134e7?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //       },
  //     ],
  //   };
  // },
  // Don't use data AND asyncData together because data will overwrite asyncData
  // data() {
  //   return {
  //     loadedPosts: [],
  //   };
  // },
};
</script>

<style lang="scss" scoped>
.home-page {
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-image: url('~assets/images/main-page-background.jpg');
    background-position: center;
    background-size: cover;

    h1 {
      position: absolute;
      top: 10%;
      left: 5%;
      width: 90%;
      font-size: 1.5rem;
      color: black;
      background-color: rgb(211, 211, 211);
      padding: 10px;
      border-radius: 10px;
      box-shadow: 3px 3px 3px black;
      box-sizing: border-box;
      border: 1px solid black;

      @media (min-width: 768px) {
        font-size: 2rem;
      }
    }
  }
}
</style>

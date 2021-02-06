<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  // Runs on page load so this is available to us when created() is called
  // async asyncData() {
  //   // "this" will not give the Vue instance because this is happening on the server side and the component has not been created yet
  //   // eslint-disable-next-line nuxt/no-timing-in-fetch-data
  //   await new Promise((resolve) => setTimeout(() => resolve(), 1500));
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
  // async fetch() {
  //   try {
  //     // "this" in fetch is available now because it runs after created()
  //     const loadedPosts = await new Promise((resolve) =>
  //       // eslint-disable-next-line nuxt/no-timing-in-fetch-data
  //       setTimeout(
  //         () =>
  //           resolve([
  //             {
  //               id: '1',
  //               title: 'Post Title 1',
  //               previewText: 'Preview Text 1',
  //               thumbnail:
  //                 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
  //             },
  //             {
  //               id: '2',
  //               title: 'Post Title 2',
  //               previewText: 'Preview Text 2',
  //               thumbnail:
  //                 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
  //             },
  //             {
  //               id: '3',
  //               title: 'Post Title 3',
  //               previewText: 'Preview Text 3',
  //               thumbnail:
  //                 'https://images.unsplash.com/photo-1606851281895-c4d3b1c134e7?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  //             },
  //           ]),
  //         1500
  //       )
  //     );
  //     this.$store.commit('posts/setPosts', loadedPosts);
  //   } catch (e) {
  //     throw new Error(e);
  //   }
  // },
  computed: {
    ...mapGetters('posts', ['loadedPosts']),
  },
};
</script>

<style lang="scss" scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

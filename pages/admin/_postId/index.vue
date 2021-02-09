<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  async asyncData({ params, $axios, error }) {
    try {
      const data = await $axios.$get(`/posts/${params.postId}.json`);
      return {
        loadedPost: {
          ...data,
          id: params.postId,
        },
      };
    } catch (e) {
      error(new Error(e));
    }
  },
  methods: {
    ...mapActions('posts', ['editPost']),
    async onSubmitted(editedPost) {
      try {
        await this.editPost(editedPost);
        this.$router.push('/admin');
      } catch (e) {
        throw new Error('Error occurred when attempting to edit the post:', e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.update-form {
  width: 90%;
  margin: 20px auto;

  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
}
</style>

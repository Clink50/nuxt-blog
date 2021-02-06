<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  layout: 'admin',
  methods: {
    ...mapActions('posts', ['addPost']),
    async onSubmitted(post) {
      try {
        await this.addPost(post);
        this.$router.push('/admin');
      } catch (e) {
        throw new Error('Error occurred when adding the post:', e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;

  @media (min-width: 768px) {
    width: 500px;
  }
}
</style>

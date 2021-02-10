<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton class="btn" @click="$router.push('/admin/new-post')">Create Post</AppButton>
      <AppButton class="btn" @click="onLogout">Logout</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList is-admin :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  layout: 'admin',
  middleware: ['check-auth', 'auth'],
  computed: {
    ...mapGetters('posts', ['loadedPosts']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
    onLogout() {
      this.logout();
      this.$router.push('/admin/auth');
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-page {
  padding: 20px;

  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;

    .btn {
      margin-right: 10px;
    }
  }

  .existing-posts h1 {
    text-align: center;
  }
}
</style>

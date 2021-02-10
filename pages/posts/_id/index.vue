<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post__title">{{ loadedPost.title }}</h1>
      <div class="post__details">
        <div class="post__details--detail">Last updated on {{ loadedPost.updatedDate | date }}</div>
        <div class="post__details--detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post__content">{{ loadedPost.content }}</p>
    </section>
    <section class="post__feedback">
      <p>
        Let me know what you think about the post, send an email to
        <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios, error }) {
    try {
      const loadedPost = await $axios.$get(`/posts/${params.id}.json`);
      return {
        loadedPost,
      };
    } catch (e) {
      console.log('Error occurred in posts/_id');
      error(new Error(e));
    }
  },
};
</script>

<style lang="scss" scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;

  .post {
    width: 100%;

    @media (min-width: 768px) {
      width: 600px;
      margin: auto;
    }

    &__title {
      margin: 0;
    }

    &__details {
      padding: 10px;
      box-sizing: border-box;
      border-bottom: 3px solid #ccc;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      &--detail {
        color: rgb(88, 88, 88);
        margin: 0 10px;
      }
    }
  }

  .post__feedback a {
    color: red;
    text-decoration: none;

    &:hover,
    &:active {
      color: salmon;
    }
  }
}
</style>

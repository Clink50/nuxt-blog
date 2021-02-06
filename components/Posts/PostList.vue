<template>
  <section class="post-list">
    <PostPreview
      v-for="{ id, title, previewText, thumbnail } in posts"
      :id="id"
      :key="id"
      :is-admin="isAdmin"
      :title="title"
      :preview-text="previewText"
      :thumbnail="thumbnail"
    />
  </section>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

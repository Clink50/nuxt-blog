<template>
  <div class="error-page">
    <h1>Oops, something went wrong!</h1>
    <!-- anchor tag here instead of nuxt-link because nuxt-link uses js and if our app crashes then the js might not work either -->
    <p>Back to <a href="/">safety</a>!</p>
  </div>
</template>

<style lang="scss" scoped>
.error-page {
  text-align: center;

  a {
    text-decoration: none;
    color: red;

    &:hover,
    &:active {
      color: salmon;
    }
  }
}
</style>

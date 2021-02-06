<template>
  <div>
    <TheHeader @sidenavToggle="displaySideNav = !displaySideNav" />
    <TheSideNav :show="displaySideNav" @close="displaySideNav = false" />
    <Nuxt />
  </div>
</template>

<script>
export default {
  middleware: 'log',
  data() {
    return {
      displaySideNav: false,
    };
  },
};
</script>

<style></style>

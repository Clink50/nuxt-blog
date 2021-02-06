<template>
  <div class="drawer-toggle" role="button" @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<style lang="scss" scoped>
.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  .bar {
    width: 90%;
    height: 2px;
    background-color: white;
  }
}
</style>

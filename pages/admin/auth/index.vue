<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput v-model="email" type="email"
          >Email Address</AppControlInput
        >
        <AppControlInput v-model="password" type="password"
          >Password</AppControlInput
        >
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin"
          >Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton
        >
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions('auth', ['authenticateUser']),
    async onSubmit() {
      const requestData = {
        email: this.email,
        password: this.password,
        isLogin: this.isLogin,
      };
      await this.authenticateUser(requestData);
      this.$router.push('/admin');
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-auth-page {
  padding: 20px;

  .auth-container {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 2px #ccc;
    width: 300px;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>

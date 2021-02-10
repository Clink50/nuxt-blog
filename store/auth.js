import { SIGN_UP_ENDPOINT, SIGN_IN_ENDPOINT, FB_ACCOUNT_TYPE } from '@/utils/constants';
import Cookie from 'js-cookie';

export const state = () => ({
  token: null,
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    state.token = null;
  },
};

export const actions = {
  async authenticateUser({ commit }, authData) {
    try {
      const type = authData.isLogin ? SIGN_IN_ENDPOINT : SIGN_UP_ENDPOINT;
      const requestData = {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      };

      const { idToken, expiresIn } = await this.$axios.$post(
        `${this.$config.fbBaseUrl}/v1/${FB_ACCOUNT_TYPE}:${type}?key=${this.$config.fbApiSecret}`,
        requestData
      );

      commit('setToken', idToken);

      Cookie.set('jwt', idToken);
      Cookie.set('expirationDate', new Date().getTime() + +expiresIn);
      return;
    } catch (e) {
      throw new Error(
        `Error occurred when attempting to sign up the user with email: ${authData.email}`,
        e
      );
    }
  },
  initAuth({ commit, dispatch }, req) {
    const token = !Cookie.get('jwt')
      ? req?.headers
        ? req.headers.cookie
        : null
      : Cookie.get('jwt');

    if (!token) {
      console.log('Token not found in cookie.');
      dispatch('logout');
      return;
    }

    const expirationDate = Cookie.get('expirationDate');

    if (new Date().getTime() > +expirationDate) {
      console.log('No token or invalid token.');
      dispatch('logout');
      return;
    }

    commit('setToken', token);
  },
  logout({ commit }) {
    commit('clearToken');
    Cookie.remove('jwt');
    Cookie.remove('expirationDate');
  },
};
export const getters = {
  isAuthenticated(state) {
    return state.token != null;
  },
};

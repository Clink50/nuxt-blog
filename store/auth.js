import {
  SIGN_UP_ENDPOINT,
  SIGN_IN_ENDPOINT,
  FB_ACCOUNT_TYPE,
} from '@/utils/constants';
import Cookie from 'js-cookie';

export const state = () => ({
  token: '',
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
  async authenticateUser({ commit, dispatch }, authData) {
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
      localStorage.setItem('token', idToken);
      localStorage.setItem(
        'tokenExpiration',
        // Datetime when the token will expire
        new Date().getTime() + expiresIn * 1000
      );
      Cookie.set('jwt', idToken);
      Cookie.set('expirationDate', new Date().getTime() + expiresIn * 1000);
      dispatch('setLogoutTimer', expiresIn * 1000);
      return;
    } catch (e) {
      throw new Error(
        `Error occurred when attempting to sign up the user with email: ${authData.email}`,
        e
      );
    }
  },
  setLogoutTimer({ commit }, duration) {
    setTimeout(() => {
      commit('clearToken');
    }, duration);
  },
  initAuth({ commit, dispatch }, req) {
    let token = null;
    let expirationDate = null;

    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      [, token] = req.headers.cookie
        .split(';')
        .find((key) => key.trim())
        .startsWith('jwt=')
        .split('=');
      if (!token) {
        return;
      }
      [, expirationDate] = req.headers.cookie
        .split(';')
        .find((key) => key.trim())
        .startsWith('expirationDate=')
        .split('=');
    } else {
      token = localStorage.getItem('token');
      expirationDate = localStorage.getItem('tokenExpiration');

      if (new Date().getTime > expirationDate || !token) {
        return;
      }
    }

    dispatch('setLogoutTimer', +expirationDate - new Date().getTime());
    commit('setToken', token);
  },
};
export const getters = {
  isAuthenticated(state) {
    return state.token != null;
  },
};

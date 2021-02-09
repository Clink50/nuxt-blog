export default function ({ store, req }) {
  store.dispatch('auth/initAuth', req);
}

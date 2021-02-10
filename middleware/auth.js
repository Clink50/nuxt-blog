export default function ({ store, redirect }) {
  if (!store.getters['auth/isAuthenticated']) {
    redirect('/admin/auth');
  } else {
    console.log('authenticated!');
  }
}

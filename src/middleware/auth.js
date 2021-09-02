export default ({ store, redirect }) => {
  if (!store.getters?.['auth/isLoggedIn']) {
    return redirect('/login')
  }
}

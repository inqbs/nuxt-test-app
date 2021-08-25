import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import cookie from 'cookie'

export default ({ store, req }) => {
  createPersistedState({
    paths: ['auth.user.id', 'auth.user.token'],
    storage: {
      getItem: (key) => {
        if (process.server) {
          return cookie.parse(req.headers?.cookie ?? '')?.[key]
        } else {
          return Cookies.get(key)
        }
      },
      setItem: (key, value) =>
        Cookies.set(key, value, { expires: 3, secure: false }),
      removeItem: (key) => Cookies.remove(key),
    },
  })(store)
}

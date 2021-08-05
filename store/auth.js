//  nuxt서버측에서 state 오동작 방지를 위해 data처럼 함수형태로 작성
export const state = () => ({
  user: {
    id: '',
    token: '',
  },
})

export const getters = {
  isLoggedIn: (state) => !!state.user?.token,
}

export const actions = {
  login({ commit }, params) {
    commit('LOGIN', params)
  },
  logout({ commit }) {
    commit('LOGOUT')
  },
}

export const mutations = {
  LOGIN(state, { id }) {
    state.user = Object.assign({}, { id, token: '1' })
  },
  LOGOUT(state) {
    state.user = {}
  },
}

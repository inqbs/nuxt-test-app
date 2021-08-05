//  nuxt서버측에서 state 오동작 방지를 위해 data처럼 함수형태로 작성
export const state = () => ({
  counter: 0,
})

export const actions = {
  increment({ commit }) {
    commit('increment')
  },
}

export const mutations = {
  increment(state) {
    state.counter++
  },
}

import * as types from './mutation-types'

export default {
  [types.getComments](state, payload) {
    state.home.list = payload
  },
  [types.addComment](state, payload) {
    state.home.list.unshift(payload)
    state.home.comment = ''
  },
  [types.updateComment](state, payload) {
    state.home.comment = payload
  }
}
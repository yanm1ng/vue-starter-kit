import * as types from './mutation-types'

export default {
  [types.getComments](state, payload) {
    state.list = payload
  },
  [types.addComment](state, payload) {
    state.list.unshift(payload)
  }
}
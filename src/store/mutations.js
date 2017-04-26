import * as types from './mutation-types'

export default {
  [types.getComments](state, payload) {
    state.home.list = state.home.list.concat(payload);
    if (payload.length === 0) {
      state.home.page = -1;
    } else {
      state.home.page++;
    }
  },
  [types.addComment](state, payload) {
    state.home.list.unshift(payload)
    state.home.comment = ''
  },
  [types.updateComment](state, payload) {
    state.home.comment = payload
  }
}
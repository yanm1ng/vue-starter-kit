import * as types from './mutation-types'
import { timeFormat } from '@/utils'
import axios from 'axios'

export default {
  getComments({ commit, state }) {
    axios.get('api/project/comments.action', {})
      .then((res) => {
        const comments = res.data.comments;
        commit(types.getComments, comments)
      })
  },
  addComment({ commit, state }, comment) {
    if (comment.length > 0) {
      axios.post('api/comment/add.action', {
        comment
      }).then((res) => {
        if (res.data.error === 0) {
          commit(types.addComment, {
            author: 'Visitor Rookie',
            comment,
            date: timeFormat('yyyy-MM-dd hh:mm:ss')
          });
        }
      })
    }
  }
}
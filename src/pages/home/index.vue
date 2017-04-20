<template>
  <div>
    <v-header title="Your First Vue.js App"></v-header>
    <div class="container">
      <div class="form">
        <input v-model="comment" placeholder="post your comment" @keyup.enter="addComment" />
        <button @click="addComment">submit</button>
        <span class="tip">Tips：you can press enter to submit!</span>
      </div>
      <v-comment :list="list"></v-comment>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import { timeFormat } from '../../utils' 

export default {
  data() {
    return {
      comment: '',
      list: []
    }
  },
  methods: {
    addComment: function () {
      var comment = this.comment && this.comment.trim();
      if (comment.length > 0) {
        axios.post('api/comment/add.action', {
          comment
        }).then((res) => {
          if (res.data.error === 0) {
            this.list.unshift({
              author: 'Visitor Rookie',
              comment,
              date: timeFormat('yyyy-MM-dd hh:mm:ss')
            })
            this.comment = '';
          }
        })
      }
    }
  },
  created: function () {
    axios.get('api/project/comments.action', {})
    .then((res) => {
      this.list = res.data.comments
    })
  }
}
</script>

<style>
.container {
  margin-top: 100px;
  padding: 0 65px;
}
.form {
  padding-bottom: 15px;
  border-bottom: 1px dashed #dddddd;
}
.tip {
  color: #42b983;
  font-size: 13px;
}
</style>
<template>
  <div>
    <v-header title="Your First Vue.js App"></v-header>
    <div class="container">
      <div class="form">
        <input class="comment-input" v-model="comment" placeholder="post your comment" @keyup.enter="addComment" />
        <a @click="addComment" class="submit">submit</a>
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
.comment-input {
  width: 200px;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  padding: 0 15px;
  border: 1px solid #e3e3e3;
  color: #2c3e50;
  outline: none;
  border-radius: 15px;
  margin-right: 10px;
  transition: border-color 0.2s ease;
  background-size: 20px;
  vertical-align: middle !important;
}
.comment-input:focus {
  border-color: #42b983;
}
.submit {
  padding: 3px 20px;
  border-radius: 15px;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
}
.submit:hover {
  cursor: pointer;
}
.tip {
  padding-left: 10px;
  color: #42b983;
  font-size: 13px;
}
</style>
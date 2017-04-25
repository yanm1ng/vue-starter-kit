<template>
  <div>
    <v-header title="Your First Vue.js App"></v-header>
    <div class="container">
      <div class="form">
        <input class="comment-input" :value="comment" @input="updateComment" placeholder="post your comment" @keyup.enter="addComment" />
        <a @click="addComment" class="submit">submit</a>
        <span class="tip">Tips：you can press enter to submit!</span>
      </div>
      <v-comment :list="list"></v-comment>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import * as types from '@/store/mutation-types'

export default {
  computed: mapState({
    list: state => state.home.list,
    comment: state => state.home.comment
  }),
  methods: {
    ...mapActions([
      types.getComments,
      types.addComment
    ]),
    updateComment (e) {
      this.$store.commit(types.updateComment, e.target.value)
    }
  },
  created: function () {
    this.getComments()
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
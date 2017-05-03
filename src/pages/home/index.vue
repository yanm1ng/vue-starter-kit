<template>
  <div>
    <v-header title="Your First Vue.js App">
      <div slot="right">
        <router-link :to="'/list'">components</router-link>
      </div>
    </v-header>
    <div class="container">
      <div class="form">
        <input class="comment-input" :value="comment" @input="updateComment" placeholder="post your comment" @keyup.enter="addComment" />
        <p class="tip">Tips：you can press enter to submit!</p>
      </div>
      <v-comment :list="list"></v-comment>
      <div v-if="list.length >= 5" class="footer">
        <a class="loadmore" @click="getComments(page)">{{ page == -1 ? '已经到底啦' : '加载更多' }}</a>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'
import * as types from '@/store/mutation-types'

export default {
  computed: mapState({
    list: state => state.home.list,
    comment: state => state.home.comment,
    page: state => state.home.page
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
    this.getComments(this.page)
  }
}
</script>

<style scoped>
.container {
  padding: 100px 60px 100px 60px;
  overflow: auto;
}
.form {
  padding-bottom: 15px;
  border-bottom: 1px dashed #dddddd;
}
.comment-input {
  font-size: 26px;
  line-height: 30px;
  padding: 10px 20px 10px 30px;
  width: 500px;
  border: 1PX solid #e3e3e3;
  color: #2c3e50;
  outline: none;
  border-radius: 30px;
  border-color: #42b983;
}
.tip {
  color: #42b983;
  font-size: 24px;
}
.footer {
  text-align: center;
}
.loadmore {
  font-size: 26px;
  line-height: 30px;
  padding: 10px 40px;
  border-radius: 30px;
  display: inline-block;
  color: #4fc08d;
  transition: all 0.15s ease;
  border: 1PX solid #4fc08d;
}
.loadmore:hover {
  cursor: pointer;
}
</style>
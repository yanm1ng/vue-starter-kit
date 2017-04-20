<template>
  <div>
    <v-header title="Your First Vue.js App"></v-header>
    <v-comment :list="list"></v-comment>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      list: []
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
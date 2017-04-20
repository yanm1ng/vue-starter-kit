<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
    axios.get('api/project/comments.action', {})
    .then(function(res) {
      console.log(res.data)
    })
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>

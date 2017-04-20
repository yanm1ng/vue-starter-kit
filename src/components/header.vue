<template>
  <div class="header">
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  padding: 10px 0;
  background-color: #fff;
}
.title {
  color: #42b983;
  text-align: center;
  font-weight: normal;
  margin: 0;
}
</style>

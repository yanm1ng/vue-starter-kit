<template>
  <div class="header">
    <div class="left-item">
      <slot name="left"></slot>
    </div>
    <h1 class="title">{{ title }}</h1>
    <div class="right-item">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'header',
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
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  background-color: #35495e;
  z-index: 100;
  font-size: 24px;
}
.title {
  color: #42b983;
  text-align: center;
  font-weight: normal;
  margin: 0;
  font-size: 30px;
  line-height: 80px;
}
.left-item {
  line-height: 80px;
  position: absolute;
  top: 0;
  left: 30px;
}
.left-item a {
  color: #42b983;
}
.right-item {
  line-height: 80px;
  position: absolute;
  top: 0;
  right: 30px;
}
.right-item a {
  color: #42b983;
}
</style>

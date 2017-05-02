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
  position: absolute;
  width: 100%;
  top: 0;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
  padding: 10px 0;
  background-color: #fff;
  z-index: 100;
}
.title {
  color: #42b983;
  text-align: center;
  font-weight: normal;
  margin: 0;
  font-size: 30px;
}
.left-item {
  line-height: 40px;
  position: absolute;
  top: 10px;
  left: 30px;
}
.left-item a {
  color: #42b983;
}
.right-item {
  line-height: 40px;
  position: absolute;
  top: 10px;
  right: 30px;
}
.right-item a {
  color: #42b983;
}
</style>

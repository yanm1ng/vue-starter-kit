<template>
  <div class="container">
    <ol>
      <li v-for="item in list">
        <div class="info">
          <span class="author">{{ item.author }}</span>
          <span class="time">{{ item.date }}</span>
        </div>
        <div class="content">{{ item.comment }}</div>
      </li>
    </ol>
  </div>
</template>

<script>

export default {
  props: {
    list: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 100px;
  padding: 0 65px;
}
ol {
  padding: 0;
  width: 100%;
}
li {
  list-style: none;
  margin-bottom: 20px;
}
.info {
  margin-bottom: 10px;
}
.author {
  font-weight: bolder;
}
.time {
  color: #999999;
  padding-left: 15px;
  font-size: 12px;
}
.content {
  padding: 10px 15px;
  word-break: break-all;
  background: #f8f8f8;
  border: 1px solid #dddddd;
  font-size: 12px;
  border-radius: 5px;
  color: #444444;
  position: relative;
}
.content:before {
	content: '';
	width: 8px;
	height: 8px;
	position: absolute;
	left: 40px;
	top: -5px;
	background-color: #f8f8f8;
	border: 1PX solid #dddddd;
	border-width: 0 1PX 1PX 0;
	transform: rotate(225deg);
}
</style>

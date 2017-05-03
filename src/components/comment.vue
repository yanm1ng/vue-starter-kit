<template>
  <div>
    <ol v-if="list.length > 0">
      <li v-for="(item, index) in list" :key="index">
        <div class="info">
          <span class="author">{{ item.author }}</span>
          <span class="time">{{ item.date }}</span>
        </div>
        <div class="content">{{ item.comment | wordSlice }}</div>
      </li>
    </ol>
    <p class="nocomments" v-else>暂无评论</p>
  </div>
</template>

<script>

export default {
  name: 'comment',
  props: {
    list: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.nocomments {
  text-align: center;
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
  margin-bottom: 20px;
}
.author {
  font-size: 24px;
  font-weight: bolder;
}
.time {
  color: #999999;
  padding-left: 15px;
  font-size: 12px;
}
.content {
  padding: 20px;
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
	width: 12px;
	height: 12px;
	position: absolute;
	left: 40px;
	top: -8px;
	background-color: #f8f8f8;
	border: 1PX solid #dddddd;
	border-width: 0 1PX 1PX 0;
	transform: rotate(225deg);
}
</style>

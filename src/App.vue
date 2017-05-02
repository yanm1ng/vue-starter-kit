<template>
  <div class="main">
    <transition :name="transitionName">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>

<script>

import { compact } from '@/utils/'

export default {
  name: 'app',
  data() {
    return {
      transitionName: 'vux-pop-out'
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = compact(to.path.split('/')).length
      const fromDepth = compact(from.path.split('/')).length
      this.transitionName = toDepth > fromDepth ? 'vux-pop-in' : 'vux-pop-out'
    }
  }
}
</script>

<style>
@import './assets/css/transition.css';

body {
  margin: 0;
  padding: 0;
}
.main {
  position: relative;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.router-view {
  width: 100%;
}
</style>

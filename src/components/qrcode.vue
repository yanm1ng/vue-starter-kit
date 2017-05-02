<template>
  <div :class="cls"></div>
</template>

<script>
import QRious from 'qrious';

export default {
  name: 'qrcode',
  props: {
    value: {
      type: String,
      required: true,
      default: ''
    },
    cls: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 100
    },
    level: {
      type: String,
      default: 'L',
      validator: l => ['L', 'Q', 'M', 'H'].indexOf(l) > -1
    },
    background: {
      type: String,
      default: '#fff'
    },
    foreground: {
      type: String,
      default: '#000'
    },
    mime: {
      type: String,
      default: 'image/png'
    },
    padding: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'canvas',
      validator: t => ['canvas', 'image'].indexOf(t) > -1
    }
  },
  methods: {
    render() {
      const qr = new QRious({
        background: this.background,
        foreground: this.foreground,
        level: this.level,
        mime: this.mime,
        padding: this.padding,
        size: this.size,
        value: this.value
      });
      this.$el.innerHTML = ''
      this.$el.appendChild(qr[this.type])
    }
  },
  mounted() {
    this.render()
    this.$options._propKeys.forEach(key => this.$watch(key, this.render))
  }
}
</script>
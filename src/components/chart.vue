<template>
  <canvas class="v-chart" :width="width" :height="height"></canvas>
</template>

<script>
import Chart from 'chart.js'

const types = ['line', 'bar', 'radar', 'polarArea', 'pie', 'doughnut', 'bubble']
export default {
  props: {
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 200
    },
    type: {
      type: String,
      required: true,
      validator: val => types.includes(val)
    },
    data: {
      type: Object,
      required: true,
      default: () => {
        return {}
      }
    },
    options: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  mounted () {
    this.chart = new Chart(this.$el, {
      type: this.type,
      data: this.data,
      options: this.options
    })
  },
  data () {
    return {
      chart: null
    }
  },
  methods: {
    resetChart () {
      this.$nextTick(() => {
        this.chart.destroy()
        this.chart = new Chart(this.$el, {
          type: this.type,
          data: this.data,
          options: this.options
        })
      })
    }
  },
  watch: {
    type () {
      this.resetChart()
    },
    data () {
      this.chart.update()
    },
    options () {
      this.resetChart()
    }
  }
}
</script>

<style scoped>
canvas.v-chart {
  max-width: 100%;
}
</style>
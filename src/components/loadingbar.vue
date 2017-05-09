<template>
  <div
    v-if="show"
    :id="id"
    class="loadingbar"
    :class="{ 'loadingbar-error': myError, 'loadingbar-full': full }"
    :style="styling()"
  >
    <div class="loadingbar-glow"></div> 
  </div>
</template>

<script>
export default {
  name: 'loadingbar',
  props: {
    id: String,
    customClass: String,
    progress: {
      type: Number,
      default: 0
    },
    error: {
      type: Boolean,
      default: false
    },
    onError: {
      type: Function,
      required: true
    },
    onProgress: {
      type: Function,
      required: true
    },
  },

  data() {
    return {
      show: true,
      full: '',
      width: 0,
      wait: false,
      myError: false
    }
  },

  watch: {
    progress(val, old) {
      if (old !== val) {
        this.width = val
        setTimeout(() => {
          this.isFull()
        })
      }
    },

    error(val, old) {
      if (old !== val) {
        if (val) {
          this.width = 100
          this.myError = true
          setTimeout(() => {
            this.isFull()
          })
        }
      }
    }
  },

  methods: {
    isFull() {
      let isFull = this.width === 100

      if (isFull) {
        this.wait = true

        setTimeout(() => {

          this.full = true
          this.myError = false

          this.onError()

          setTimeout(() => {
            //remove bar element
            this.show = false
            this.width = 0
            this.wait = false

            setTimeout(() => {
              this.full = ''
              this.show = true

              this.onProgress()
            });

          }, 250);

        }, 700);
      }
    },
    styling() {
      if (!this.wait) {
        return { width: `${this.width}%` };
      } else {
        return { width: `100%` };
      }
    }
  }
};
</script>

<style scoped>

.loadingbar {
  z-index: 1000;
  transition: all .3s ease;
  -moz-transition: all .3s ease;
  -webkit-transition: all .3s ease;
  -o-transition: all .3s ease;
  position: fixed;
  top: 0;
  left: 0;
  background: #42b983;
  height: 3px;
  opacity: 1;
}

.loadingbar-glow {
  top: 0;
  position: absolute;
  width: 100px;
  height: 100%;
  box-shadow: -3px 0 15px 1px rgba(0, 255, 231, .4)
}


.loadingbar .loadingbar-glow {
  right: 0
}

.loadingbar-full {
  transition: all .1s ease;
  -moz-transition: all .1s ease;
  -webkit-transition: all .1s ease;
  -o-transition: all .1s ease;
  height: 0;
  opacity: 0
}

.loadingbar-error {
  background: #f44336;
}

.loadingbar-error .loadingbar-glow {
  box-shadow: -3px 0 15px 1px rgba(244, 67, 54, .4);
}
</style>
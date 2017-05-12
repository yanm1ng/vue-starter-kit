<template>
  <div>
    <v-header title="My Components List">
      <div slot="left">
        <router-link :to="'/'">back</router-link>
      </div>
    </v-header>
    <div class="container">
      <h4>Address-Select</h4>
      <v-address :province="address.province" :city="address.city" :area="address.area" :detail="address.detail" @change="addressChange"></v-address>
      <h4>Image-Slider</h4>
      <v-slider v-bind="slider"></v-slider>
      <h4>QRCode</h4>
      <v-qrcode :cls="qrcode.class" :value="qrcode.value" :foreground="qrcode.foreground"></v-qrcode>
      <h4>Toast</h4>
      <div class="button" @click="openTop()">top</div>
      <div class="button" @click="openCenter()">center</div>
      <div class="button" @click="openBottom()">bottom</div>
      <div class="button" @click="openLoading()">loading</div>
      <h4>LoadingBar</h4>
      <v-loadingbar
        :onError="loadingError"
        :onProgress="loadingSuccess"
        :progress="loadingbar.progress"
      />
      <div class="button" @click="progressTo(30)">30%</div>
      <div class="button" @click="progressTo(100)">100%</div>
    </div>
  </div>
</template>

<script>

import sliderimage1 from '@/assets/img/1-1.jpg'
import sliderimage2 from '@/assets/img/1-2.jpg'
import sliderimage3 from '@/assets/img/1-3.jpg'
import sliderimage4 from '@/assets/img/1-4.jpg'
import sliderimage5 from '@/assets/img/1-5.jpg'

export default {
  data: function () {
    return {
      address: {
        province: '',
        city: '',
        area: '',
        detail: ''
      },
      slider: {
        image: [
          sliderimage1,
          sliderimage2,
          sliderimage3,
          sliderimage4,
          sliderimage5
        ],
        imgStyle: {
          borderRadius: '10px'
        },
      },
      qrcode: {
        class: 'qrcode',
        value: 'https://github.com/yanm1ng',
        foreground: '#42b983'
      },
      loadingbar: {
        progress: 0
      }
    }
  },
  methods: {
    addressChange (val) {
      console.log(val);
    },
    openTop () {
      this.$toast.top('top');
    },
    openCenter () {
      this.$toast.center('center');
    },
    openBottom () {
      this.$toast.bottom('bottom');
    },
    openLoading () {
      this.$loading('loading...');
      let self = this;
      setTimeout(function () {
        self.closeLoading()
      }, 2000)
    },
    closeLoading () {
      this.$loading.close();
    },
    loadingError () {

    },
    loadingSuccess () {

    },
    progressTo(number) {
      this.loadingbar.progress = number
    },
  }
}
</script>

<style scoped>
.container {
  padding: 100px 60px 100px 60px;
  overflow: auto;
}

h4 {
  font-size: 30px;
  margin: 12px 0;
}

.button {
  padding: 15px 40px;
  border-radius: 40px;
  margin: 0 10px;
  display: inline-block;
  color: #fff;
  background-color: #4fc08d;
  transition: all 0.15s ease;
  box-sizing: border-box;
  border: 1px solid #4fc08d;
  cursor: pointer;
}
</style>
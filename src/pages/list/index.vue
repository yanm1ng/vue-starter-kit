<template>
  <div>
    <v-header title="My Components List">
      <div slot="left">
        <router-link :to="'/'">back</router-link>
      </div>
    </v-header>
    <div class="container">
      <h4>Address-Select</h4>
      <v-address 
        :province="address.province"
        :city="address.city"
        :area="address.area"
        :detail="address.detail"
        @change="addressChange"
      ></v-address>
      <h4>Image-Slider</h4>
      <v-slider v-bind="slider"></v-slider>
      <h4>QRCode</h4>
      <v-qrcode 
        :cls="qrcode.class" 
        :value="qrcode.value"
        :foreground="qrcode.foreground"
      ></v-qrcode>
    </div>
  </div>
</template>

<script>

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
          'static/img/1-1.jpg',
          'static/img/1-2.jpg', 
          'static/img/1-3.jpg', 
          'static/img/1-4.jpg', 
          'static/img/1-5.jpg'
        ],
        imgStyle: {
          borderRadius: '10px'
        },
      },
      qrcode: {
        class: 'qrcode',
        value: 'https://github.com/yanm1ng',
        foreground: '#42b983'
      }
    }
  },
  methods: {
    addressChange: function (val) {
      console.log(val);
    }
  }
}
</script>

<style scoped>
.container {
  padding: 80px 65px 0 65px;
}
h4 {
  margin: 12px 0;
}
</style>
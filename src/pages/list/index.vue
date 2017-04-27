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
    </div>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      address: {
        province: '',
        city: '',
        area: '',
        detail: ''
      }
    }
  },
  methods: {
    addressChange: function (val) {
      console.log(val);
    }
  },
  created: function () {
    this.getComments(this.page)
  }
}
</script>

<style scoped>
.container {
  margin-top: 100px;
  padding: 0 65px;
}
h4 {
  margin: 8px 0;
}
</style>
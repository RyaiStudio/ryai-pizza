<template>
  <div id="app" class="pos-relative">
    <header-component></header-component>
    <router-view v-bind:orders="orders" v-on:customize="customize" ></router-view>
    <footer-component></footer-component>
    <div id="vue-alert" class="notification floater floater-danger"></div>
  </div>
</template>

<script>
import HeaderComponent from './components/partials/Header'
import FooterComponent from './components/partials/Footer'

export default {
  name: 'app',
  data() {
    return {
      orders: []
    }
  },
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent
  },
  methods: {
    customize(orders) {
      this.orders = orders
    }
  }
}
</script>

<style lang="scss">
@import "./scss/styles.scss";
</style>

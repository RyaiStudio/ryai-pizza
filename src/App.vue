<template>
  <div id="app">
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/partials/Header'
import FooterComponent from './components/partials/Footer'

export default {
  name: 'app',
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent
  }
}
</script>

<style lang="scss">
@import "./scss/styles.scss";
</style>

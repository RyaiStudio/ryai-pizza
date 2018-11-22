<template>
  <div class="OrderView">
    <banner-component v-bind:imgSrc="imgSrc" v-bind:height="banner_height" >
      <div class="columns">
        <div class="column is-6-widescreen is-5-fullhd">
          <h1 class="title">Mini pizza Taccos for everyone</h1>
          <h2 class="subtitle">Order pizza by clicking the button below and get a 40% discount</h2>
          <router-link to="home">Home</router-link>
        </div>
        <div class="column is-offset-1-widescreen is-5-widescreen is-offset-3-fullhd is-fullhd-5">
          <div class="col">

          </div>
        </div>
      </div>
    </banner-component>
  </div>
</template>

<script>
import DataSrc from '../component-data'
import BannerComponent from './partials/Banner'

export default {
  data() {
    return {
      banner_height: '100vh',
      imgSrc: DataSrc.front_page.banner_img
    }
  },
  components: {
    'banner-component': BannerComponent
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

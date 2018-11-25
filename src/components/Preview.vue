<template>
  <div id="Preview">
    <banner-component v-bind:imgSrc="imgSrc" v-bind:height="banner_height" >
      <div class="columns">
        <div class="column is-6-widescreen is-5-fullhd">
          <h1 class="title">Order Summary</h1>
        </div>
        <div class="column is-6-widescreen is-offset-1-fullhd is-fullhd-6">
          <me-content></me-content>
        </div>
      </div>
    </banner-component>
    <section class="section has-background-white">
      <div class="container">
        <div class="columns">
          <div class="column has-background-white-bis is-offset-1-widescreen is-10-widescreen">
            <strong>order#</strong> {{ order_no }}
            <br>
            <preview-box v-for="(item, key) in orders" 
              v-bind:key="key"
              v-bind:item="item"
            ></preview-box>
          </div>
        </div>
        <div class="columns">
          <div class="column has-background-white-bis is-offset-1-widescreen is-10-widescreen">
            <div class="box bg-transparent no-box-shadow">
              <div class="media">
                <div class="media-content">
                  <button v-on:click="proceedPayment" class="button is-primary fl-right">PROCEED TO PAYMENT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import DataSrc from '../component-data'
import BannerComponent from './partials/Banner'
import PreviewBox from './partials/PreviewBox'
import Me from './partials/Me'

export default {
  props: ['orders'],
  components: {
    'banner-component': BannerComponent,
    'preview-box': PreviewBox,
    'me-content': Me
  },
  data() {
    return {
      banner_height: '',
      imgSrc: DataSrc.front_page.banner_img,
      order_no: null
    }
  },
  methods: {
    proceedPayment() {
      Swal('Thanks You', 'A big thanks to you ', 'success')
    },

    randomString(len, charSet) {
      charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var randomString = '';
      for (var i = 0; i < len; i++) {
          var randomPoz = Math.floor(Math.random() * charSet.length);
          randomString += charSet.substring(randomPoz,randomPoz+1);
      }
      return randomString;
    }
  },
  beforeMount() {
    if(this.orders.length === 0) {
      window.location.href = "/";
    }
    
    this.order_no = this.randomString(12);
  },
}
</script>

<style>

</style>
